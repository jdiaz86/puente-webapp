<template>
  <highcharts :options="options" ref="highcharts"></highcharts>
</template>

<script>
import {
} from 'quasar'

// import * as _ from '../util/util'

export default {
  name: 'LineChartComponent',
  components: {
  },
  data () {
    return {
      options: {
        title: {
          text: ''
        },
        subtitle: {
          text: ''
        },
        xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
          ]
        },
        yAxis: {
          title: {
            text: 'Cantidad en Q. (Q.)'
          }
        },
        tooltip: {
          valuePrefix: 'Q. '
        },
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom',
          borderWidth: 1
        },
        series: [{
          name: 'Donaciones',
          data: [1000, 1500, 1200, 1400, 300, null, null, null, null, null, null, null]
        }, {
          name: 'Gastos',
          data: [800, 1000, 1500, 600, 500, null, null, null, null, null, null, null]
        }]
      }
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
