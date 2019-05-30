<template>
  <highcharts :options="optionsColumnChart" ref="highcharts"></highcharts>
</template>

<script>
import {
} from 'quasar'

// import * as _ from '../util/util'

export default {
  name: 'ColumnChartComponent',
  components: {
  },
  props: {
    optionsColumnChart: {
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
