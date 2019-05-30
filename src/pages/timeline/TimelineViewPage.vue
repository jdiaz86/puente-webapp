<template>
  <q-page>
      <q-card inline class="fit row row-form">
      <q-timeline responsive color="primary" style="padding: 0 24px;">
        <q-timeline-entry heading>Instituto Puente</q-timeline-entry>

        <q-timeline-entry v-for="item in items" v-bind:key="item.id"
          :title="item.title"
          :subtitle="item.date"
          :icon="item.icon"
          :side="item.side">
          <div>
            {{ item.description }}
          </div>
        </q-timeline-entry>

      </q-timeline>
     </q-card>
  </q-page>
</template>
<script>
import {
} from 'quasar'
import { mapActions, mapState } from 'vuex'
import {
  FETCH_TIMELINES
} from '../../store/types'

export default {
  name: 'timeline-page',
  components: {
  },
  created () {
    this.loadItems()
  },
  data () {
    return {
      time: {}
    }
  },
  computed: {
    ...mapState('timelineModule', ['deleting', 'error', 'items'])
  },
  methods: {
    ...mapActions('timelineModule', {
      loadItems: FETCH_TIMELINES
    })
  }
}
</script>

<style lang="css">
.q-card {
    background: #fff;
    border-radius: 10px;
    margin: 3px 0;
  }

</style>
