<template>
  <div>
    <form name="myForm" class="css-form-item-page" novalidate>
      <fieldset>
        <legend><h3 class="legend-title">{{ $t('user_screen_title') }}</h3></legend>
        <div class="row row-form">
          <div class="col-sm-3 col-md-6">
            <q-field icon="account_circle">
              <q-input v-model="item.username" class="form-control" :readonly="viewMode" :disabled="viewMode" :float-label="$t('username_label')"/>
            </q-field>
          </div>
          <div class="col-sm-3 col-md-6">
            <q-field icon="email">
              <q-input v-model="item.email" class="form-control" :readonly="viewMode" :disabled="viewMode" :float-label="$t('email_label')"/>
            </q-field>
          </div>
      </div>

      <div class="row row-form">
          <div class="col-sm-3 col-md-6">
            <q-field icon="perm_identity">
              <q-input v-model="item.firstName" class="form-control" :readonly="viewMode" :disabled="viewMode" :float-label="$t('firstname_label')"/>
            </q-field>
          </div>
          <div class="col-sm-3 col-md-6">
            <q-field icon="perm_identity">
              <q-input v-model="item.lastName" class="form-control" :readonly="viewMode" :disabled="viewMode" :float-label="$t('lastname_label')"/>
            </q-field>
          </div>
      </div>

      <div class="row row-form">
          <div class="col-sm-3 col-md-6">
            <q-field icon="place">
              <q-select v-model="country" :options="countryListOptions" filter dark clearable
                        :display-value="countryListOptions.find(el => el.value === country) ? countryListOptions.find(el => el.value === country).label : null"
                        :filter-placeholder="$t('search_label')" :float-label="$t('country_label')"
                        :readonly="viewMode" :disabled="viewMode" class="form-control"/>
            </q-field>
          </div>
          <div class="col-sm-3 col-md-6">
            <q-field icon="pin_drop">
              <q-select v-model="item.state" :options="stateListOptions" filter dark clearable
                        :display-value="stateListOptions.find(el => el.value === item.state) ? stateListOptions.find(el => el.value === item.state).label : null"
                        :filter-placeholder="$t('search_label')" :float-label="$t('state_label')"
                        :readonly="viewMode" :disabled="viewMode" class="form-control"/>
            </q-field>
          </div>
      </div>

      <div class="row row-form">
          <div class="col-sm-3 col-md-6">
            <q-field icon="phone">
              <q-input v-model="item.phone" class="form-control" :readonly="viewMode" :disabled="viewMode" :float-label="$t('phone_label')"/>
            </q-field>
          </div>
          <div class="col-sm-3 col-md-6">
            <q-field icon="book">
              <q-input v-model="item.taxCorrelative" class="form-control" :readonly="viewMode" :disabled="viewMode" :float-label="$t('taxCorrelative_label')"/>
            </q-field>
          </div>
      </div>

      <div class="row row-form">
          <div class="col-sm-3 col-md-6">
            <q-field icon="perm_contact_calendar">
              <q-input v-model="item.dni" class="form-control" :readonly="viewMode" :disabled="viewMode" :float-label="$t('dni_label')"/>
            </q-field>
          </div>
          <div class="col-sm-3 col-md-6">
            <q-field icon="perm_identity">
              <q-input v-model="item.status.name" class="form-control" :readonly="viewMode" :disabled="viewMode" :float-label="$t('status_label')"/>
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
  FETCH_USER,
  SAVE_USER,
  SET_USER,
  SAVE_USER_FINISH
} from '../../store/types'
import * as _ from '../../util/util'

export default {
  name: 'logInUserPage',
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
      countryListOptions: _.countryOptions(),
      stateListOptions: [],
      country: 'init',
      viewMode: false,
      editMode: false
    }
  },
  watch: {
    item: function (val) {
      this.country = val.country
      this.stateListOptions = _.stateOptions(this.country)
    },
    country: function (after, before) {
      if (before !== 'init') {
        this.item.state = null
      }
      this.stateListOptions = _.stateOptions(after)
      this.item.country = after
    },
    saving: function (val) {
      if (val) {
        _.successNotify(this.$t('modify_success_message'))
        this.goBack()
      }
    }
  },
  computed: {
    ...mapState('userModule', ['item', 'saving', 'errors', 'error'])
  },
  methods: {
    ...mapActions('userModule', {
      loadItem: FETCH_USER,
      saveItem: SAVE_USER
    }),
    ...mapMutations('userModule', {
      setItem: SET_USER,
      saveFinish: SAVE_USER_FINISH
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
