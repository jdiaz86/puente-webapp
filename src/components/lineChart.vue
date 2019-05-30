<template>
  <div>
    <highcharts :options="optionsLineChart" ref="highcharts"></highcharts>
  </div>
</template>

<script>
import {
} from 'quasar'

// import * as _ from '../util/util'

export default {
  name: 'LineChartComponent',
  components: {
  },
  props: {
    optionsLineChart: {
      type: Object,
      required: true
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style>

</style>
