<template>
  <q-page>
    <q-card class="actions row row-form">
      <div class="col-xs-12 col-md-4">
        <q-select v-model="year" :options="yearListOptions" filter dark clearable class="form-control dashboard-header"
                        :display-value="yearListOptions[year] ? yearListOptions[year].label : ''"
                        :filter-placeholder="$t('search_label')" :float-label="$t('year_label')"/>
      </div>
      <div class="col-xs-6 col-md-4">
        <q-datetime v-model="dateInitial" type="date" clearable popover format="DD-MMM-YYYY" float-label="Fecha Inicial" class="dashboard-header"/>
      </div>
      <div class="col-xs-6 col-md-4">
        <q-datetime v-model="dateFinal" type="date" clearable popover format="DD-MMM-YYYY" float-label="Fecha Final" class="dashboard-header"/>
      </div>
    </q-card>

      <div id="container">
        <q-card inline class="fit actions row row-form" ref="graph0">
          <q-card-title>
            {{ $t('dashboard_title') }}
            <div slot="right" class="row items-center">
              <q-icon name="pie_chart" color="secondary" style="display: none;"/>
              <q-btn flat round dense icon="expand_less" @click="toggleCardGraph(0)" color="primary"/>
            </div>
          </q-card-title>
          <q-card-main class="expanded">
          <div class="row row-form">
            <div class="col-xs-6 hide-on-desktop">
               <q-btn @click="toggleAll()" icon="swap_vert" color="secondary" class="dashboard-header expand-collapse"/>
            </div>
            <div class="col-xs-6 hide-on-desktop">
               <q-btn @click="toggleCardGraph(0)" icon="search" color="secondary" class="dashboard-header expand-collapse"/>
            </div>

            <div class="col-xs-6 col-md-3">
              <q-list color="primary">
                <q-item>
                  <q-item-side>
                    <q-item-tile color="primary" icon="home" />
                  </q-item-side>
                  <q-item-main>
                    <q-item-tile label color="secondary">{{ $t('national_donors') }}</q-item-tile>
                    <q-item-tile sublabel color="white">{{ this.userStats.natlDonors }}</q-item-tile>
                  </q-item-main>
                </q-item>
                <q-item>
                  <q-item-side>
                    <q-item-tile color="primary" icon="public" />
                  </q-item-side>
                  <q-item-main>
                    <q-item-tile label color="secondary">{{ $t('foregin_donors') }}</q-item-tile>
                    <q-item-tile sublabel color="white">{{ this.userStats.intlDonors }}</q-item-tile>
                  </q-item-main>
                </q-item>
              </q-list>
            </div>
            <div class="col-xs-6 col-md-2">
              <q-list>
                <q-item>
                  <q-item-side>
                    <q-item-tile color="primary" icon="people" />
                  </q-item-side>
                  <q-item-main>
                    <q-item-tile label color="secondary">{{ $t('total_donors') }}</q-item-tile>
                    <q-item-tile sublabel color="white">{{ this.userStats.totalDonors }}</q-item-tile>
                  </q-item-main>
                </q-item>
                <q-item>
                  <q-item-side>
                    <q-item-tile color="primary" icon="supervisor_account" />
                  </q-item-side>
                  <q-item-main>
                    <q-item-tile label color="secondary">{{ $t('total_teachers') }}</q-item-tile>
                    <q-item-tile sublabel color="white">{{ this.userStats.totalTeachers }}</q-item-tile>
                  </q-item-main>
                </q-item>
              </q-list>
            </div>

            <div class="col-md-2 hide-on-mobile">
               <q-btn @click="toggleAll()" icon="swap_vert" color="secondary" class="dashboard-header expand-collapse"/>
               <q-btn @click="refresh()" icon="search" color="secondary" class="dashboard-header expand-collapse"/>
            </div>

            <div class="col-xs-6 col-md-2">
              <q-list>
                <q-item>
                  <q-item-side>
                    <q-item-tile color="primary" icon="attach_money" />
                  </q-item-side>
                  <q-item-main>
                    <q-item-tile label color="secondary">{{ $t('total_incomes') }}</q-item-tile>
                    <q-item-tile sublabel color="white">{{ this.userStats.totalIncomes | currency }}</q-item-tile>
                  </q-item-main>
                </q-item>
                <q-item>
                  <q-item-side>
                    <q-item-tile color="primary" icon="shopping_cart" />
                  </q-item-side>
                  <q-item-main>
                    <q-item-tile label color="secondary">{{ $t('total_outcomes') }}</q-item-tile>
                    <q-item-tile sublabel color="white"> {{ this.userStats.totalOutcomes | currency }}</q-item-tile>
                  </q-item-main>
                </q-item>
              </q-list>
            </div>
            <div class="col-xs-6 col-md-3">
              <q-list>
                <q-item>
                  <q-item-side>
                    <q-item-tile color="primary" icon="school" />
                  </q-item-side>
                  <q-item-main>
                    <q-item-tile label color="secondary">{{ $t('assign_courses') }}</q-item-tile>
                    <q-item-tile sublabel color="white">{{ this.userStats.totalAsignedCourses }}</q-item-tile>
                  </q-item-main>
                </q-item>
                <q-item>
                  <q-item-side>
                    <q-item-tile color="primary" icon="people" />
                  </q-item-side>
                  <q-item-main>
                    <q-item-tile label color="secondary">{{ $t('students_avg') }}</q-item-tile>
                    <q-item-tile sublabel color="white">{{ this.userStats.avgStudents }}</q-item-tile>
                  </q-item-main>
                </q-item>
              </q-list>
            </div>
          </div>
          </q-card-main>
          <q-card-separator />
        </q-card>

        <q-card inline class="fit row row-form" ref="graph1">
          <q-card-title>
            Donaciones y Gastos
            <div slot="right" class="row items-center">
              <q-icon name="pie_chart" color="secondary" />
              <q-btn flat round dense icon="expand_less" @click="toggleCardGraph(1)" color="primary"/>
              <q-btn flat round dense icon="refresh" color="primary"/>
            </div>
          </q-card-title>
          <q-card-main class="expanded">
            <line-chart-component :optionsLineChart="optionsLineChart"/>
          </q-card-main>
          <q-card-separator />
        </q-card>

        <q-card inline class="fit row row-form" ref="graph2">
          <q-card-title>
            Gastos por Tipo
            <div slot="right" class="row items-center">
              <q-icon name="pie_chart" color="secondary" />
              <q-btn flat round dense icon="expand_less" @click="toggleCardGraph(2)" color="primary"/>
              <q-btn flat round dense icon="refresh" color="primary"/>
            </div>
          </q-card-title>
          <q-card-main class="expanded">
            <column-chart-component :optionsColumnChart="optionsColumnChart"/>
          </q-card-main>
          <q-card-separator />
        </q-card>

        <q-card inline class="fit row row-form" ref="graph3">
          <q-card-title>
            Estudiantes por Asignaciones por Grado
            <div slot="right" class="row items-center">
              <q-icon name="pie_chart" color="secondary" />
              <q-btn flat round dense icon="expand_less" @click="toggleCardGraph(3)" color="primary"/>
              <q-btn flat round dense icon="refresh" color="primary"/>
            </div>
          </q-card-title>
          <q-card-main class="expanded">
            <column-chart-component-two :optionsColumnTwoChart="optionsColumnTwoChart"/>
          </q-card-main>
          <q-card-separator />
        </q-card>
      </div>

  </q-page>
</template>
<script>
import {
} from 'quasar'
import { mapActions, mapState } from 'vuex'
import {
  FETCH_USER_STATS
} from '../../store/types'
import LineChartComponent from '../../components/lineChart'
import ColumnChartComponent from '../../components/columnChart'
import ColumnChartComponentTwo from '../../components/columnChartTwo'

import * as _ from '../../util/util'

export default {
  name: 'home-page',
  components: {
    LineChartComponent,
    ColumnChartComponent,
    ColumnChartComponentTwo
  },
  created () {
    this.refresh()
  },
  data () {
    return {
      yearListOptions: _.yearOptions(),
      year: (new Date()).getFullYear(),
      dateInitial: new Date(new Date().getFullYear(), 0, 1),
      dateFinal: new Date(new Date().getFullYear(), 11, 31),
      graphsAmount: 3,
      expandedAll: true,
      graph: 'graph',
      optionsLineChart: {},
      optionsColumnTwoChart: {},
      optionsColumnChart: {}
    }
  },
  watch: {
    year: function (date) {
      this.dateInitial = new Date(date, 0, 1)
      this.dateFinal = new Date(date, 11, 31)
    },
    userStats: function (userStats) {
      userStats.avgStudents = Math.floor(userStats.avgStudents)
      this.optionsLineChart = _.defaultChartOptions('line',
        'Cantidad en Q. (Q.)',
        { userStatsuePrefix: 'Q. ' },
        _.generateDateAxisGraph(this.dateInitial, this.dateFinal),
        userStats.incomesVsOutcomesByMonth)

      this.optionsColumnChart = _.defaultChartOptions('column',
        'Cantidad en Q. (Q.)',
        {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.1f} Q.</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
        },
        _.generateDateAxisGraph(this.dateInitial, this.dateFinal),
        userStats.outcomeByTypeAndMonth)

      this.optionsColumnTwoChart = _.defaultChartOptions('column',
        'Cantidad de Estudiantes',
        {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y}</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
        },
        ['1ro Primaria', '2do Primaria', '3ro Primaria', '4to Primaria', '5to Primaria', '6to Primaria', '1ro Básico', '2do Básico', '3ro Básico'],
        userStats.coursesByGradeAndTime)
    }
  },
  computed: {
    ...mapState('dashboardModule', ['userStats', 'errors', 'error'])
  },
  methods: {
    ...mapActions('dashboardModule', {
      fetchUserStats: FETCH_USER_STATS
    }),
    expandCard (refId) {
      this.$refs[this.graph + refId].$children[1].$el.classList.add('expanded')
      this.$refs[this.graph + refId].$children[1].$el.classList.remove('shrinked')
      this.$refs[this.graph + refId].$children[0].$children[1].$children[0].$el.innerHTML = 'expand_less'
    },
    shrinkCard (refId) {
      this.$refs[this.graph + refId].$children[1].$el.classList.remove('expanded')
      this.$refs[this.graph + refId].$children[1].$el.classList.add('shrinked')
      this.$refs[this.graph + refId].$children[0].$children[1].$children[0].$el.innerHTML = 'expand_more'
    },
    toggleCardGraph (refId) {
      if (this.$refs[this.graph + refId] !== undefined) {
        if (this.$refs[this.graph + refId].$children[1].$el.classList.contains('expanded')) {
          this.shrinkCard(refId)
        } else {
          this.expandCard(refId)
        }
      }
    },
    toggleAll () {
      for (let i = 1; i <= this.graphsAmount; i++) {
        if (this.expandedAll) {
          this.shrinkCard(i)
        } else {
          this.expandCard(i)
        }
      }
      this.expandedAll = !this.expandedAll
    },
    refresh () {
      this.fetchUserStats({ dashboardReq: { dateInitial: _.formatDate(this.dateInitial), dateFinal: _.formatDate(this.dateFinal) } })
    }
  },
  filters: {
    currency: function (number) {
      return _.currency(number)
    }
  }
}
</script>

<style lang="css">
  h3 {
    font-size: 35px;
    margin-left: 0 !important;
    margin-bottom: 10px !important;
    color: #ff8f00;
    margin-top: 0 !important;
    font-weight: 300;
  }
  .btnOrange {
    background: #ff8737 !important;
    border-radius: 5px;
    box-shadow: none;
    color: #fff;
  }

  .btnGray {
    background: #ababab !important;
    border-radius: 5px;
    box-shadow: none;
  }

  .q-card {
    background: #fff;
    opacity:0.9;
    border-radius: 10px;
    margin: 3px 0;
  }

  .q-card.actions {
    background: #435363;
  }

  .q-card-title {
    font-style: normal;
    margin-left: 10px;
    color: #26A69A;
    border-bottom: 1px solid #79b2e3;
    margin-bottom: 10px;
  }

  .descriptionCotizacion p {
    margin-bottom: 5px;
  }

  .expanded {
    display: block;
  }

  .shrinked {
    display: none;
  }

  .dashboard-header {
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
  }

  .expand-collapse {
    width: 100%;
    padding-top:20px;
    font-size: 1em;
  }

  .q-list {
    border: none;
  }

  @media (max-width: 767px) {
    .hide-on-mobile {
      display: none;
    }
  }

  @media (min-width: 768px) {
    .hide-on-desktop {
      display: none;
    }
  }

</style>
