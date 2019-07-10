<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu"></q-icon>
        </q-btn>

        <q-toolbar-title>
         {{ $t('app_name') }}
          <div slot="subtitle"> {{ $t('app_subtitle') }}</div>
        </q-toolbar-title>

        <q-btn class="lang"
          v-for="lang in languages"
          flat
          round
          :disable="lang.key !== language"
          :key="lang.key"
          outline
          dense
          icon="language"
          color="white"
          @click.native="modifyLanguage(lang.key)"
        >
          {{ lang.label }}
        </q-btn>
      </q-toolbar>

    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-side' : null">

      <q-list class="left-side"
        no-border
        link
        inset-delimiter>

        <q-list-header>
          <div class="logo"></div>
        </q-list-header>

        <q-item @click.native="$router.push('/')">
          <q-item-side icon="insert_chart" />
          <q-item-main label="Dashboard" />
        </q-item>

        <q-item @click.native="$router.push('/users')" v-if="isAdmin">
          <q-item-side icon="group" />
          <q-item-main :label="$t('users_menu')" />
        </q-item>

        <q-item @click.native="$router.push('/courses')" v-if="isAdmin || isTeacher">
          <q-item-side icon="school" />
          <q-item-main :label="$t('courses_menu')" />
        </q-item>

        <q-item @click.native="$router.push('/courseEnrollments')" v-if="isAdmin || isTeacher">
          <q-item-side icon="assignment" />
          <q-item-main :label="$t('course_enrollments_menu')" />
        </q-item>

        <q-item @click.native="$router.push('/incomes')" v-if="!isTeacher">
          <q-item-side icon="attach_money" />
          <q-item-main :label="$t('incomes_menu')" />
        </q-item>

        <q-item @click.native="$router.push('/outcomes')" v-if="isAdmin">
          <q-item-side icon="shopping_cart" />
          <q-item-main :label="$t('outcomes_menu')" />
        </q-item>

        <q-item @click.native="$router.push('/outcomeCategorys')" v-if="isAdmin">
          <q-item-side icon="category" />
          <q-item-main :label="$t('outcome_categories_menu')" />
        </q-item>

        <q-item @click.native="$router.push('/timelines')" v-if="isAdmin">
          <q-item-side icon="timeline" />
          <q-item-main :label="$t('timelines_menu')" />
        </q-item>

        <q-item @click.native="logout()">
          <q-item-side icon="exit_to_app" />
          <q-item-main :label="$t('logout')" />
        </q-item>

        <q-item link class="fixed-bottom">
          <q-item-side icon="info" />
          <q-item-main :label="$t('about_us_side')" />
        </q-item>

      </q-list>
    </q-layout-drawer>

    <q-btn push class="btnUser" color="white" flat>
        <q-popover ref="popover2" class="popInfo">
            <div class="fullname" style="padding: 10px 20px;">
                <div class="avatar"></div>
                {{loginUser.username}}
            </div>
            <q-list link>
                <q-item item highlight to="/" exact>
                    <q-item-side icon="insert_chart" color="grey" />
                    <q-item-main label="Dashboard" />
                </q-item>
            </q-list>
            <q-list link>
                <q-item item highlight to="/users/login" exact>
                    <q-item-side icon="person" color="grey" />
                    <q-item-main :label="$t('person_label')" />
                </q-item>
            </q-list>
            <q-list link>
                <q-item item highlight @click.native="logout()">
                    <q-item-side icon="exit_to_app" color="grey" />
                    <q-item-main :label="$t('logout')" />
                </q-item>
            </q-list>
        </q-popover>
    </q-btn>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-layout-footer>
      <q-tabs>
        <q-route-tab
          default
          icon="home"
          to="/"
          name="home"
          slot="title"
        />
        <q-route-tab
          icon="timeline"
          to="/timeline"
          name="timeline"
          slot="title"
        />
        <q-route-tab
          icon="account_box"
          to="/users/login"
          name="loginuser"
          slot="title"
        />
      </q-tabs>

    </q-layout-footer>
  </q-layout>

</template>

<script>
import {
  QLayout,
  QBtn,
  QIcon,
  QList,
  QItemSide,
  QItemMain,
  QItem
} from 'quasar'
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'
import { CHANGE_LANGUAGE, LOGOUT_USER_SUCCESS } from '../store/types'
import * as _ from '../util/util'

export default {
  name: 'homeLayout',
  components: {
    QLayout,
    QBtn,
    QIcon,
    QList,
    QItemSide,
    QItemMain,
    QItem
  },
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      isMobile: this.$q.platform.is.mobile
    }
  },
  watch: {
    authenticated (value) {
      if (value === false) {
        _.removeStorage('token')
        this.$router.push('/login')
      }
    },
    language (value) {
      this.$i18n.locale = value
      _.setStorage('lang', value)
    }
  },
  computed: {
    ...mapState('homeModule', ['languages', 'language']),
    ...mapState('userModule', ['item', 'loginUser']),
    ...mapState('loginModule', ['authenticated']),
    ...mapGetters('userModule', ['isAdmin', 'isDonor', 'isTeacher'])
  },
  methods: {
    ...mapActions('homeModule', {
      changeLanguage: CHANGE_LANGUAGE
    }),
    ...mapMutations('loginModule', {
      logoutUser: LOGOUT_USER_SUCCESS
    }),
    modifyLanguage (lang) {
      this.changeLanguage({ lang })
    },
    async logout () {
      const result = await _.confirmDialog(this.$t('closesession_dialog_title'), this.$t('closesession_dialog_message'), this.$t('closesession_dialog_ok'), this.$t('dialog_cancel'))
      if (result === 1) {
        _.successNotify(this.$t('closesession_success_message'))
        this.logoutUser()
      }
    }
  }
}
</script>

<style lang="css">
  .layout-aside{
    background: #fff !important;
    width: 130px;
  }
  .layout-aside .q-item{
    display: block;
    padding: 15px 16px;
    text-align: center !important;
    border-top: 1px solid #e1e1e1;
  }
  .layout-aside .q-item-label{
    text-align: center !important;
  }
  .layout-aside .q-item-side {
    display: block;
    width: 100%;
    background: #ff6600;
    height: 50px;
  }
  .left-side .q-item-main{
    text-align: justify;
   }
   .q-item-main{
    font-size: 13px;
    text-align: center;
    margin-left: 0 !important;
   }
  .layout-aside .q-item-main{
    display: block;
  }
  .logo {
    background: url("../statics/logo.jpg") center no-repeat;
    background-size: contain;
    width: 100%;
    height: 100px;
    margin-top: 20px;
    display: block;
    margin-bottom: 20px;
  }
  .q-layout-page{
    background: url("../statics/bgHome.png") fixed no-repeat;
    background-size: cover;
    padding: 3vh 3vw;
  }
  .btnUser{
    background: url("../statics/btnUser.png") no-repeat;
    width: 40px;
    z-index: 999;
    height: 40px;
    position: absolute;
    right: 3vw;
    top: 8vh;
  }
  .avatar{
    width: 30px;
    height: 30px;
    margin-right: 5px;
    vertical-align: top;
    background: #ccc;
    display: inline-block;
    border-radius: 50px;
    background: url("../statics/avatar.jpg") 100% no-repeat;
    background-size: 100%;
  }
  .avatar .material-icons {
    margin-left: 5px;
    margin-top: -2px;
  }
  .q-list {
    padding: 0;
  }
  .fixed-bottom {
    right: 0;
    bottom: 0;
    left: 0;
  }
</style>
