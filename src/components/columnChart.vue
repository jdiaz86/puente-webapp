<template>
  <highcharts :options="options" ref="highcharts"></highcharts>
</template>

<script>
import {
} from 'quasar'

// import * as _ from '../util/util'

export default {
  name: 'ColumnChartComponent',
  components: {
  },
  data () {
    return {
      options: {
        chart: {
          type: 'column'
        },
        title: {
          text: ''
        },
        subtitle: {
          text: ''
        },
        xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
          ],
          crosshair: true
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Cantidad en Q. (Q.)'
          }
        },
        tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.1f} Q.</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          }
        },
        series: [{
          name: 'Capital',
          data: [49.9, 71.5, 106.4, 129.2, 144.0, null, null, null, null, null, null, null]
        }, {
          name: 'Operativo',
          data: [83.6, 78.8, 98.5, 93.4, 106.0, null, null, null, null, null, null, null]
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
