<template>
  <div>
    <form name="myForm" class="css-form-item-page" novalidate>
      <fieldset>
        <legend><h3 class="legend-title">{{ $t('outcomecategory_screen_title') }}</h3></legend>
        <div class="row row-form">
          <div class="col-sm-3 col-md-12">
            <q-field icon="shopping_basket">
              <q-input v-model="item.name" class="form-control" :readonly="viewMode" :disabled="viewMode" :float-label="$t('name_label')"/>
            </q-field>
          </div>
      </div>

      <div class="row row-form">
          <div class="col-sm-3 col-md-12">
            <q-field icon="code">
              <q-input v-model="item.code" class="form-control" :readonly="viewMode" :disabled="viewMode" :float-label="$t('code_label')"/>
            </q-field>
          </div>
       </div>

      <div class="row row-form">
          <div class="col-sm-3 col-md-12">
            <q-field icon="pages">
              <q-select v-model="item.type" :options="categoryTypeListOptions" filter dark
                        :display-value="categoryTypeListOptions.find(el => el.value === item.type) ? categoryTypeListOptions.find(el => el.value === item.type).label : ''"
                        :filter-placeholder="$t('search_label')" :float-label="$t('type_label')"
                        :readonly="viewMode" :disabled="viewMode" class="form-control"/>
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
import { mapState, mapActions, mapMutations } from 'vuex'
import {
  FETCH_OUTCOMECATEGORY,
  SAVE_OUTCOMECATEGORY,
  SET_OUTCOMECATEGORY,
  SAVE_OUTCOMECATEGORY_FINISH
} from '../../store/types'
import * as _ from '../../util/util'

export default {
  name: 'outcomeCategoryPage',
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
    }
  },
  data () {
    return {
      viewMode: false,
      editMode: false,
      categoryTypeListOptions: _.categoryTypeOptions()
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
    ...mapState('outcomeCategoryModule', ['item', 'saving', 'errors', 'error'])
  },
  methods: {
    ...mapActions('outcomeCategoryModule', {
      loadItem: FETCH_OUTCOMECATEGORY,
      saveItem: SAVE_OUTCOMECATEGORY
    }),
    ...mapMutations('outcomeCategoryModule', {
      setItem: SET_OUTCOMECATEGORY,
      saveFinish: SAVE_OUTCOMECATEGORY_FINISH
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
