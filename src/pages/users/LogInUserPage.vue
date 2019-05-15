<template>
  <div>
    <form name="myForm" class="css-form-item-page" novalidate>
      <fieldset>
        <legend><h3 class="legend-title">{{ $t('person_label') }}</h3></legend>
        <div class="row row-form">
          <div class="col-sm-3 col-md-6">
            <q-field icon="account_circle">
              <q-input v-model="loginUser.username" class="form-control" :readonly="viewMode" :disabled="viewMode" :float-label="$t('username_label')"/>
            </q-field>
          </div>
          <div class="col-sm-3 col-md-6">
            <q-field icon="email">
              <q-input v-model="loginUser.email" class="form-control" :readonly="viewMode" :disabled="viewMode" :float-label="$t('email_label')"/>
            </q-field>
          </div>
      </div>

      <div class="row row-form">
          <div class="col-sm-3 col-md-6">
            <q-field icon="perm_identity">
              <q-input v-model="loginUser.firstName" class="form-control" :readonly="viewMode" :disabled="viewMode" :float-label="$t('firstname_label')"/>
            </q-field>
          </div>
          <div class="col-sm-3 col-md-6">
            <q-field icon="perm_identity">
              <q-input v-model="loginUser.lastName" class="form-control" :readonly="viewMode" :disabled="viewMode" :float-label="$t('lastname_label')"/>
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
              <q-select v-model="loginUser.state" :options="stateListOptions" filter dark clearable
                        :display-value="stateListOptions.find(el => el.value === loginUser.state) ? stateListOptions.find(el => el.value === loginUser.state).label : null"
                        :filter-placeholder="$t('search_label')" :float-label="$t('state_label')"
                        :readonly="viewMode" :disabled="viewMode" class="form-control"/>
            </q-field>
          </div>
      </div>

      <div class="row row-form">
          <div class="col-sm-3 col-md-6">
            <q-field icon="phone">
              <q-input v-model="loginUser.phone" class="form-control" :readonly="viewMode" :disabled="viewMode" :float-label="$t('phone_label')"/>
            </q-field>
          </div>
          <div class="col-sm-3 col-md-6">
            <q-field icon="book">
              <q-input v-model="loginUser.taxCorrelative" class="form-control" :readonly="viewMode" :disabled="viewMode" :float-label="$t('taxCorrelative_label')"/>
            </q-field>
          </div>
      </div>

      <div class="row row-form">
          <div class="col-sm-3 col-md-6">
            <q-field icon="perm_contact_calendar">
              <q-input v-model="loginUser.dni" class="form-control" :readonly="viewMode" :disabled="viewMode" :float-label="$t('dni_label')"/>
            </q-field>
          </div>
          <div class="col-sm-3 col-md-6">
            <q-field icon="perm_identity">
              <q-input v-model="loginUser.status.name" class="form-control" :readonly="viewMode" :disabled="viewMode" :float-label="$t('status_label')"/>
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
  FETCH_LOGGED_IN_USER,
  SAVE_USER_PASSWORD,
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
    this.loadLoggedInUser()
  },
  data () {
    return {
      password: '',
      confirmPassword: '',
      countryListOptions: _.countryOptions(),
      stateListOptions: [],
      country: 'init',
      viewMode: false,
      editMode: true
    }
  },
  watch: {
    loginUser: function (val) {
      this.country = val.country
      this.stateListOptions = _.stateOptions(this.country)
    },
    country: function (after, before) {
      if (before !== 'init') {
        this.loginUser.state = null
      }
      this.stateListOptions = _.stateOptions(after)
      this.loginUser.country = after
    },
    saving: function (val) {
      if (val) {
        _.successNotify(this.$t('modify_success_message'))
        this.goBack()
      }
    }
  },
  computed: {
    ...mapState('userModule', ['loginUser', 'saving', 'changingPassword', 'errors', 'error'])
  },
  methods: {
    ...mapActions('userModule', {
      loadItem: FETCH_USER,
      loadLoggedInUser: FETCH_LOGGED_IN_USER,
      saveItem: SAVE_USER,
      saveUserPassword: SAVE_USER_PASSWORD
    }),
    ...mapMutations('userModule', {
      setItem: SET_USER,
      saveFinish: SAVE_USER_FINISH
    }),
    goBack () {
      window.history.go(-1)
    },
    changePassword () {
    },
    cleanPassword () {
      this.password = ''
      this.confirmPassword = ''
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
        this.saveItem({ item: this.loginUser })
        this.saveFinish()
      }
    }
  }
}
</script>

<style scoped>

</style>
