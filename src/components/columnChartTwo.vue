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
          categories: ['1ro Primaria', '2do Primaria', '3ro Primaria', '4to Primaria', '5to Primaria', '6to Primaria',
            '1ro Básico', '2do Básico', '3ro Básico'
          ],
          crosshair: true
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Cantidad de Estudiantes'
          }
        },
        tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y}</b></td></tr>',
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
          name: 'Matemática',
          data: [7, 10, 20, 15, 14, null, null, null, null]
        }, {
          name: 'Español',
          data: [6, 8, 5, 4, 10, null, null, null, null]
        }, {
          name: 'Emprendimiento',
          data: [7, 10, 20, 15, 14.0, null, null, null, null]
        }, {
          name: 'Ciencias Naturales',
          data: [6, 8, 5, 4, 10, null, null, null, null]
        }, {
          name: 'Estudios Sociales',
          data: [7, 10, 20, 15, 14.0, null, null, null, null]
        }, {
          name: 'Inglés',
          data: [6, 8, 5, 4, 10, null, null, null, null]
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
