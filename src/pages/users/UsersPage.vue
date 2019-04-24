<template>
  <div class="css-form">
    <h3 class="legend-title">{{ $t('users_menu') }}</h3>
    <div class="row row-form">
      <div class="col-sm-1 col-md-10">
      </div>
      <div class="col-sm-2 col-md-1">
        <q-btn color="secondary" class="full-width" @click="goBack()" icon="keyboard_backspace"/>
      </div>
      <div class="col-sm-2 col-md-1">
        <q-btn color="primary" class="full-width" icon="assignment_turned_in"/>
      </div>
    </div>
    <br>
    <q-table
      :data="users"
      :columns="columns"
      :filter="filter"
      :separator="separator"
      row-key="username"
      color="secondary"
      :selected.sync="selected"
      selection="single"
      dense
      id="custom-table">
      <template slot="top-left" slot-scope="props">
        <q-search
          clearable
          :placeholder="$t('search_label')"
          color="secondary"
          v-model="filter"
          :icon="props.inFullscreen ? 'search' : 'search'"
          class="col-sm-2 col-md-6"
        />
      </template>
      <template slot="top-right" slot-scope="props">
        <q-btn
          flat round dense
          :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="props.toggleFullscreen"
        />
      </template>
      <template slot="top-selection" slot-scope="props">
        <q-btn color="info" flat round :icon="props.inFullscreen ? 'view_module' : 'view_module'" @click="view(selected[0].id)" />
        <q-btn color="positive" flat round icon="edit" @click="edit(selected[0].id)" />
        <q-btn color="negative" flat round icon="delete" @click="del(selected[0].id)" />
      </template>
    </q-table>
  </div>
</template>

<script>
import {
  QTable,
  QSearch,
  QBtn
} from 'quasar'
import { mapState, mapActions } from 'vuex'
import {
  FETCH_USERS
} from '../../store/types'
import * as _ from '../../util/util'

export default {
  name: 'users-page',
  components: {
    QTable,
    QSearch,
    QBtn
  },
  data () {
    return {
      separator: 'horizontal',
      filter: '',
      selected: [],
      columns: [
        { name: 'username', field: 'username', label: this.$t('username_label'), sortable: true },
        { name: 'firstName', field: 'firstName', label: this.$t('firstname_label'), sortable: true },
        { name: 'lastName', field: 'lastName', label: this.$t('lastname_label'), sortable: true },
        { name: 'email', field: 'email', label: this.$t('email_label'), sortable: true },
        { name: 'country', field: 'country', label: this.$t('country_label'), sortable: true },
        { name: 'foreign', field: 'foreign', label: this.$t('foreign_label'), sortable: true },
        { name: 'phone', field: 'phone', label: this.$t('phone_label'), sortable: true }
      ]
    }
  },
  created () {
    this.loadUsers()
  },
  computed: {
    ...mapState('userModule', ['deleting', 'error', 'users'])
  },
  methods: {
    ...mapActions('userModule', {
      loadUsers: FETCH_USERS
    }),
    goBack () {
      window.history.go(-1)
    },
    add () {
      this.$router.push('/users/new')
    },
    edit (id) {
      this.$router.push({ path: `/users/${id}`, query: _.queryEdit() })
    },
    view (id) {
      this.$router.push({ path: `/users/${id}`, query: _.queryView() })
    },
    async del (id) {
      const result = await _.confirmDialog(this.$t('delete_dialog_title'), this.$t('delete_dialog_message'), this.$t('delete_dialog_ok'), this.$t('delete_dialog_cancel'))
      if (result === 1) {
        _.successNotify(this.$t('delete_success_message'))
        this.loadUsers()
        this.selected = []
      }
    }
  }
}
</script>

<style scoped>
.css-form {
  margin: 3%;
}
</style>
