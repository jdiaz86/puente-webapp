<template>
  <div>
    <form name="myForm" class="css-form-item-page" novalidate>
      <fieldset>
        <legend><h3 class="legend-title">{{ $t('outcome_screen_title') }}</h3></legend>
        <div class="row row-form">
          <div class="col-sm-3 col-md-12">
            <q-field icon="category">
              <q-select v-model="item.outcomeCategory" :options="categoryOptions" filter dark clearable
                        :display-value="item.outcomeCategory ? item.outcomeCategory.name : undefined"
                        :filter-placeholder="$t('search_label')" :float-label="$t('outcome_category_name_label')"
                        :readonly="viewMode" :disabled="viewMode" class="form-control"/>
            </q-field>
          </div>
      </div>

      <div class="row row-form">
          <div class="col-sm-3 col-md-12">
            <q-field icon="calendar_today">
              <q-datetime v-model="item.date" type="date" clearable format="DD-MMM-YYYY" class="form-control" readonly disabled :float-label="$t('date_label')"/>
            </q-field>
          </div>
      </div>

      <div class="row row-form">
          <div class="col-sm-3 col-md-12">
            <q-field icon="person_pin">
              <q-input v-model="item.username" class="form-control" readonly disabled :float-label="$t('registered_by_label')"/>
            </q-field>
          </div>
       </div>

      <div class="row row-form">
          <div class="col-sm-3 col-md-12">
            <q-field icon="local_atm">
              <q-input v-model="item.amount" class="form-control" :readonly="viewMode" :disabled="viewMode" type="number" prefix="Q " :float-label="$t('amount_label')"/>
            </q-field>
          </div>
      </div>

      <div class="row row-form">
          <div class="col-sm-3 col-md-12">
            <q-field icon="money">
              <q-input v-model="item.amountText" class="form-control" :readonly="viewMode" :disabled="viewMode" :float-label="$t('amount_text_label')"/>
            </q-field>
          </div>
      </div>

      <div class="row row-form">
          <div class="col-sm-3 col-md-12">
            <q-field icon="description">
              <q-input v-model="item.description" type="textarea" class="form-control" :readonly="viewMode" :disabled="viewMode" :float-label="$t('description_label')"/>
            </q-field>
          </div>
      </div>

      <br><br>

      <div class="row row-form">
        <div class="col-sm-0 col-md-8">
        </div>
        <div class="col-sm-3 col-md-2">
          <q-btn color="secondary" class="full-width" @click="goBack()">{{ $t('goback_text') }}</q-btn>
        </div>
        <div class="col-sm-3 col-md-2">
          <q-btn color="primary" class="full-width" v-if="editMode" @click="save()">{{ $t('save_text') }}</q-btn>
        </div>
      </div>

      </fieldset>
    </form>

  </div>
</template>

<script>
import {
  QBtn,
  QInput,
  QField
} from 'quasar'
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'
import {
  FETCH_OUTCOME,
  SAVE_OUTCOME,
  SET_OUTCOME,
  SAVE_OUTCOME_FINISH
} from '../../store/types'
import * as _ from '../../util/util'

export default {
  name: 'outcomePage',
  components: {
    QBtn,
    QInput,
    QField
  },
  created () {
    this.$route.query.mode === 'view' ? this.viewMode = true : this.viewMode = false
    this.$route.query.mode === 'edit' ? this.editMode = true : this.editMode = false
    if (this.$route.params.id && this.$route.params.id !== 'new') {
      this.loadItem(this.$route.params.id)
    } else {
      this.setItem({})
      this.editMode = true
      this.item.username = this.loginUser.username
      this.item.date = _.formatDate(new Date())
    }
  },
  data () {
    return {
      viewMode: false,
      editMode: false
    }
  },
  watch: {
    saving: function (val) {
      if (val) {
        _.successNotify(this.$t('modify_success_message'))
        this.goBack()
      }
    }
  },
  computed: {
    ...mapState('outcomeModule', ['item', 'saving', 'errors', 'error']),
    ...mapState('userModule', ['loginUser']),
    ...mapGetters('outcomeCategoryModule', ['categoryOptions'])
  },
  methods: {
    ...mapActions('outcomeModule', {
      loadItem: FETCH_OUTCOME,
      saveItem: SAVE_OUTCOME
    }),
    ...mapMutations('outcomeModule', {
      setItem: SET_OUTCOME,
      saveFinish: SAVE_OUTCOME_FINISH
    }),
    goBack () {
      window.history.go(-1)
    },
    async save () {
      let title, message, ok
      if (this.$route.params.id === 'new') {
        title = this.$t('create_dialog_title')
        message = this.$t('create_dialog_message')
        ok = this.$t('create_dialog_ok')
      } else {
        title = this.$t('modify_dialog_title')
        message = this.$t('modify_dialog_message')
        ok = this.$t('modify_dialog_ok')
      }
      const result = await _.confirmDialog(title, message, ok, this.$t('dialog_cancel'))
      if (result === 1) {
        this.saveItem({ item: this.item })
        this.saveFinish()
      }
    }
  }
}
</script>

<style scoped>

</style>
