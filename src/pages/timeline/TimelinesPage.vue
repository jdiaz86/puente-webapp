<template>
  <div class="css-form-items-page">
    <h3 class="legend-title">{{ $t('timelines_menu') }}</h3>
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
      row-key="id"
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
  FETCH_TIMELINES
} from '../../store/types'
import * as _ from '../../util/util'

export default {
  name: 'timelines-page',
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
        { name: 'date', field: 'date', label: this.$t('date_label'), align: 'left', type: 'date', format: val => _.formatDate(val), sortable: true },
        { name: 'title', field: 'title', label: this.$t('title_label'), align: 'left', sortable: true },
        { name: 'description', field: 'description', label: this.$t('description_label'), align: 'left', format: val => val.substr(0, 75) + '...', sortable: true },
        { name: 'icon', field: 'icon', label: this.$t('icon_label'), align: 'left', sortable: true }
      ]
    }
  },
  created () {
    this.loadItems()
  },
  computed: {
    ...mapState('timelineModule', ['deleting', 'error', 'items'])
  },
  methods: {
    ...mapActions('timelineModule', {
      loadItems: FETCH_TIMELINES
    }),
    goBack () {
      window.history.go(-1)
    },
    add () {
      this.$router.push('/timelines/new')
    },
    edit (id) {
      this.$router.push({ path: `/timelines/${id}`, query: _.queryEdit() })
    },
    view (id) {
      this.$router.push({ path: `/timelines/${id}`, query: _.queryView() })
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
