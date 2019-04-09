<template>
  <div class="error-page window-height window-width bg-light column items-center no-wrap">
    <div class="error-code bg-indigo-4 flex items-center content-center justify-center">
      403
    </div>
    <div>
      <div class="error-card shadow-4 bg-white column items-center justify-center no-wrap">
        <q-icon name="error_outline" color="grey-5"/>
        <p class="caption text-center">Lo sentimos, no tienes acceso a este modulo</p>
        <p class="text-center group">
          <q-btn
            v-if="canGoBack"
            color="amber-8"
            push
            @click="$router.replace('/?username=jguerrero&password=testing')"
          >
            Login as Johnn
          </q-btn>
          <q-btn
            color="indigo-5"
            push
            @click="$router.replace('/')"
            icon-right="home"
          >
            Ir al Inicio
          </q-btn>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { QBtn, QIcon } from 'quasar'

export default {
  components: {
    QBtn,
    QIcon
  },
  data () {
    return {
      canGoBack: window.history.length > 1
    }
  },
  methods: {
    goBack () {
      window.history.go(-1)
    }
  }
}
</script>

<style lang="stylus">
  .error-page
    .error-code
      height 50vh
      width 100%
      padding-top 15vh
      @media (orientation: landscape) {
        font-size 30vw
      }
      @media (orientation: portrait) {
        font-size 30vh
      }
      color rgba(255, 255, 255, .2)
      overflow hidden
    .error-card
      border-radius 2px
      margin-top -50px
      width 80vw
      max-width 600px
      padding 25px
      > i
        font-size 5rem
</style>
