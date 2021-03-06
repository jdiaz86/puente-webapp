<template>
  <div class="css-form-items-page">
    <h3 class="legend-title">{{ $t('incomes_menu') }}</h3>
    <div class="row row-form">
      <div class="col-sm-1 col-md-10">
      </div>
      <div class="col-sm-2 col-md-1">
        <q-btn color="secondary" class="full-width" @click="goBack()" icon="keyboard_backspace"/>
      </div>
      <div class="col-sm-2 col-md-1" v-if="isAdmin">
        <q-btn color="primary" class="full-width" icon="add_box" @click="add()"/>
      </div>
    </div>
    <br>
    <q-table
      :data="items"
      :columns="columns"
      :filter="filter"
      :separator="dataTable.separator"
      :pagination.sync="dataTable.pagination"
      :selected.sync="selected"
      :selection="dataTable.selection"
      row-key="id"
      color="secondary"
      dense
      dark
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
        <q-btn color="info" flat round :icon="props.inFullscreen ? 'visibility' : 'visibility'" @click="view(selected[0].id)" />
        <q-btn color="positive" flat round icon="edit" @click="edit(selected[0].id)" v-if="isAdmin"/>
        <q-btn color="negative" flat round icon="delete" @click="del(selected[0].id)" v-if="isAdmin" />
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
import { mapState, mapActions, mapGetters } from 'vuex'
import {
  FETCH_INCOMES, FETCH_INCOMES_BY_ID
} from '../../store/types'
import * as _ from '../../util/util'

export default {
  name: 'incomes-page',
  components: {
    QTable,
    QSearch,
    QBtn
  },
  data () {
    return {
      dataTable: _.dataTable(),
      filter: '',
      selected: [],
      columns: [
        { name: 'donorName', field: 'donorName', label: this.$t('donor_name_label'), sortable: true },
        { name: 'date', field: 'date', label: this.$t('date_label'), type: 'date', format: val => _.formatDate(val), sortable: true },
        { name: 'amount', field: 'amount', label: this.$t('amount_label'), format: val => _.currency(val), sortable: true },
        { name: 'description', field: 'description', label: this.$t('description_label'), sortable: true },
        { name: 'username', field: 'username', label: this.$t('registered_by_label'), sortable: true }
      ]
    }
  },
  created () {
    if (!this.isAdmin && this.isDonor) {
      this.loadItemsById(this.userId)
    } else {
      this.loadItems()
    }
  },
  computed: {
    ...mapState('incomeModule', ['deleting', 'error', 'items']),
    ...mapGetters('userModule', ['isAdmin', 'isDonor', 'isTeacher', 'userId'])
  },
  methods: {
    ...mapActions('incomeModule', {
      loadItems: FETCH_INCOMES,
      loadItemsById: FETCH_INCOMES_BY_ID
    }),
    goBack () {
      window.history.go(-1)
    },
    add () {
      this.$router.push('/incomes/new')
    },
    edit (id) {
      this.$router.push({ path: `/incomes/${id}`, query: _.queryEdit() })
    },
    view (id) {
      this.$router.push({ path: `/incomes/${id}`, query: _.queryView() })
    },
    async del (id) {
      const result = await _.confirmDialog(this.$t('delete_dialog_title'), this.$t('delete_dialog_message'), this.$t('delete_dialog_ok'), this.$t('dialog_cancel'))
      if (result === 1) {
        _.successNotify(this.$t('delete_success_message'))
        this.loadItems()
        this.selected = []
      }
    }
  },
  filters: {

  }
}
</script>

<style scoped>

</style>
