<template>

  <div class="error-page window-height window-width column items-center no-wrap"
       style="background: url('statics/login_background.jpg') center no-repeat; background-size: cover;">

      <div class="login-card shadow-4 bg-white column justify-center content-center">
      <div class="items-center row">
              <div class="col-md-12">
                <img style="width: 100%;" src="statics/logoLogin.jpg"/>
              </div>
            </div>
            <br/>
        <div class="row">
          <div class="col-12">
            <q-field
              icon="perm_identity"
            >
              <q-input
                :float-label="$t('user_label')"
                v-model="login.username"
                @blur="$v.login.username.$touch"
                :error="$v.login.username.$error"
              ></q-input>
            </q-field>
          </div>
          <div class="col-12">
            <q-field
              icon="enhanced_encryption"
            >
              <q-input
                :float-label="$t('password_label')"
                v-model="login.password"
                type="password"
                @keyup.enter="loginUser()"
                @blur="$v.login.password.$touch"
                :error="$v.login.password.$error"
              ></q-input>
            </q-field>
          </div>
        </div>
        <br/>
        <div class="row">
          <div class="col-md-6">
            <q-toggle v-model="login.rememberMe" :label="$t('remember_me_label')"/>
          </div>
          <div class="lt-md col-4">
            <br/>
          </div>

          <div class="col-md-6">
            <a style="text-align:right; display:block;" @click="$router.push('/forgotPassword')">{{ $t('forgot_password_text') }}</a>
          </div>
        </div>
        <br/>
        <br/>
        <div class="row">
          <q-btn class="btnLogin" style="width: 100%" color="primary" @click="loginUser()">{{ $t('login_text') }}</q-btn>
        </div>
        <br/>

      </div>
    </div>
</template>

<script>
import {
  LocalStorage,
  QBtn,
  QToggle,
  QInput,
  QField
} from 'quasar'
import { mapState, mapActions } from 'vuex'
import { required, minLength } from 'vuelidate/lib/validators'
import { AUTHENTICATE, FETCH_LOGGED_IN_USER } from '../store/types'
import * as _ from '../util/util'

export default {
  name: 'loginFormComponent',
  components: {
    QBtn,
    QToggle,
    QInput,
    QField
  },
  data () {
    return {
      login: {
        username: '',
        password: '',
        rememberMe: false
      }
    }
  },
  validations: {
    login: {
      username: { required },
      password: { required, min: minLength(8) }
    }
  },
  watch: {
    error: function (value) {
      if (value) {
        console.log(value)
      }
    },
    authenticated: function (value) {
      if ((value && value === true) && LocalStorage.get.item('token')) {
        this.$router.push('/')
        this.loadLoggedInUser()
        _.successNotify(this.$t('user_authenticated_sucess'))
        _.hideLoading()
      }
    }
  },
  computed: {
    ...mapState('loginModule', ['error', 'authenticated'])
  },
  methods: {
    ...mapActions('userModule', {
      loadLoggedInUser: FETCH_LOGGED_IN_USER
    }),
    ...mapActions('loginModule', {
      authenticate: AUTHENTICATE
    }),
    loginUser () {
      _.changeLanguage()
      this.$v.login.$touch()
      if (this.$v.login.$error) {
        if (this.$v.login.password.$error) {
          _.errorNotify(this.$t('password_required'))
        } else {
          _.errorNotify(this.$t('user_password_required'))
        }
      } else {
        _.showLoading(this.$t('loading'))
        if (this.login.rememberMe && this.login.rememberMe === true) {
          LocalStorage.set('rememberMe', true)
          LocalStorage.set('username', this.login.username)
          LocalStorage.set('password', this.login.password)
        } else {
          LocalStorage.remove('rememberMe')
          LocalStorage.remove('username')
          LocalStorage.remove('password')
        }
        this.$emit('onLogin', this.login)
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  .login-card
    border-radius 8px
    width 24vw
    max-width 600px
    margin 20vh 0;
    min-width 444px
    padding 25px
    position absolute

  .btnLogin
    background #ff8f00 !important
    border-radius 8px
    padding 20px
    font-size 15px
    font-weight 400

  .registrate
    background none !important
    color #777777 !important
    box-shadow none !important
    min-height 25px
    margin-top 5px
    font-weight 400

  .registrate:hover
    background none !important
</style>
