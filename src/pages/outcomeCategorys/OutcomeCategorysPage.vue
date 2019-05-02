<template>
  <div class="css-form-items-page">
    <h3 class="legend-title">{{ $t('outcome_categories_menu') }}</h3>
    <div class="row row-form">
      <div class="col-sm-1 col-md-10">
      </div>
      <div class="col-sm-2 col-md-1">
        <q-btn color="secondary" class="full-width" @click="goBack()" icon="keyboard_backspace"/>
      </div>
      <div class="col-sm-2 col-md-1">
        <q-btn color="primary" class="full-width" icon="assignment_turned_in" @click="add()"/>
      </div>
    </div>
    <br>
    <q-table
      :data="items"
      :columns="columns"
      :filter="filter"
      :separator="separator"
      row-key="code"
      color="secondary"
      :selected.sync="selected"
      selection="single"
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
        <q-btn color="info" flat round :icon="props.inFullscreen ? 'view_module' : 'view_module'" @click="view(selected[0].id)" />
        <q-btn color="positive" flat round icon="edit" @click="edit(selected[0].id)"/>
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
  FETCH_OUTCOMECATEGORYS
} from '../../store/types'
import * as _ from '../../util/util'

export default {
  name: 'outcomeCategorys-page',
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
      categoryTypeListOptions: _.categoryTypeOptions(),
      columns: [
        { name: 'code', field: 'code', label: this.$t('code_label'), align: 'left', sortable: true },
        { name: 'name', field: 'name', label: this.$t('name_label'), align: 'left', sortable: true },
        { name: 'type', field: 'type', label: this.$t('type_label'), align: 'left', format: val => this.categoryTypeListOptions.find(el => el.value === val).label, sortable: true },
        { name: 'description', field: 'description', label: this.$t('description_label'), align: 'left', sortable: true }
      ]
    }
  },
  created () {
    this.loadItems()
  },
  computed: {
    ...mapState('outcomeCategoryModule', ['deleting', 'error', 'items'])
  },
  methods: {
    ...mapActions('outcomeCategoryModule', {
      loadItems: FETCH_OUTCOMECATEGORYS
    }),
    goBack () {
      window.history.go(-1)
    },
    add () {
      this.$router.push('/outcomeCategorys/new')
    },
    edit (id) {
      this.$router.push({ path: `/outcomeCategorys/${id}`, query: _.queryEdit() })
    },
    view (id) {
      this.$router.push({ path: `/outcomeCategorys/${id}`, query: _.queryView() })
    },
    async del (id) {
      const result = await _.confirmDialog(this.$t('delete_dialog_title'), this.$t('delete_dialog_message'), this.$t('delete_dialog_ok'), this.$t('dialog_cancel'))
      if (result === 1) {
        _.successNotify(this.$t('delete_success_message'))
        this.loadItems()
        this.selected = []
      }
    }
  }
}
</script>

<style scoped>

</style>
