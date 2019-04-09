<template>

  <div>
    <login-form @onLogin="loginUser" />
  </div>

</template>

<script>
import LoginForm from '../../components/loginForm'
import { mapActions } from 'vuex'
import { AUTHENTICATE } from '../../store/types'

export default {
  name: 'loginPage',
  components: {
    LoginForm
  },
  methods: {
    ...mapActions('loginModule', {
      authenticate: AUTHENTICATE
    }),
    loginUser (user) {
      this.authenticate({ username: user.username, password: user.password })
    }
  }
}
</script>

<style>

</style>
