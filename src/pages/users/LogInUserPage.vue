<template>
  <div>
    <form name="myForm" class="css-form-item-page" novalidate>
      <fieldset>
        <legend><h3 class="legend-title">{{ $t('person_label') }}</h3></legend>
        <div class="row row-form">
          <div class="col-sm-3 col-md-6">
            <q-field icon="account_circle">
              <q-input v-model="loginUser.username" class="form-control" readonly :float-label="$t('username_label')"/>
            </q-field>
          </div>
          <div class="col-sm-3 col-md-6">
            <q-field icon="email">
              <q-input v-model="loginUser.email" class="form-control" readonly :float-label="$t('email_label')"/>
            </q-field>
          </div>
      </div>

      <div class="row row-form">
          <div class="col-sm-3 col-md-6">
            <q-field icon="perm_identity">
              <q-input v-model="loginUser.firstName" class="form-control" readonly :float-label="$t('firstname_label')"/>
            </q-field>
          </div>
          <div class="col-sm-3 col-md-6">
            <q-field icon="perm_identity">
              <q-input v-model="loginUser.lastName" class="form-control" readonly :float-label="$t('lastname_label')"/>
            </q-field>
          </div>
      </div>

      <div class="row row-form">
          <div class="col-sm-3 col-md-6">
            <q-field icon="place">
              <q-input v-model="loginUser.country" class="form-control" readonly :float-label="$t('country_label')"/>
            </q-field>
          </div>
          <div class="col-sm-3 col-md-6">
            <q-field icon="phone">
              <q-input v-model="loginUser.phone" class="form-control" readonly :float-label="$t('phone_label')"/>
            </q-field>
          </div>
      </div>

      <div class="row row-form">
          <div class="col-sm-3 col-md-6">
            <q-field icon="book">
              <q-input v-model="loginUser.taxCorrelative" class="form-control" readonly :float-label="$t('taxCorrelative_label')"/>
            </q-field>
          </div>
          <div class="col-sm-3 col-md-6">
            <q-field icon="perm_contact_calendar">
              <q-input v-model="loginUser.dni" class="form-control" readonly :float-label="$t('dni_label')"/>
            </q-field>
          </div>
      </div>

      <div class="row row-form">
          <div class="col-sm-3 col-md-6">
            <q-field icon="perm_identity">
              <q-input v-model="loginUser.status.name" class="form-control" readonly :float-label="$t('status_label')"/>
            </q-field>
          </div>
          <div class="col-sm-3 col-md-6">
            <q-field icon="pin_drop">
              <q-input v-model="loginUser.foreign" class="form-control" readonly :float-label="$t('foreign_label')"/>
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
          <q-btn color="primary" class="full-width">{{ $t('save_text') }}</q-btn>
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
import { mapState, mapActions } from 'vuex'
import {
  FETCH_USER,
  SAVE_USER,
  FETCH_LOGGED_IN_USER,
  SAVE_USER_PASSWORD
} from '../../store/types'

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
      confirmPassword: ''
    }
  },
  computed: {
    ...mapState('userModule', ['loginUser', 'saving', 'changingPassword', 'errors', 'error'])
  },
  methods: {
    ...mapActions('userModule', {
      loadUser: FETCH_USER,
      loadLoggedInUser: FETCH_LOGGED_IN_USER,
      saveUser: SAVE_USER,
      saveUserPassword: SAVE_USER_PASSWORD
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
    save () {
      // this.saveUser({ loginUser })
    }
  }
}
</script>

<style scoped>

</style>
