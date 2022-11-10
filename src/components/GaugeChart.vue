<template>
      <div class="gauge-chart">
        <highcharts ref="chart" :constructor-type="'chart'" :options="chartOptions"></highcharts>
      </div>
  </template>
<script>
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import SolidGuage from 'highcharts/modules/solid-gauge';

HighchartsMore(Highcharts);
SolidGuage(Highcharts);

export default {
  components: { },
  name: 'GaugeChart',
  props: {
    fld01: {
      type: Number
    },
    fld02: {
      type: Number
    },
    fld03: {
      type: Number
    }

  },
  data() {
    return {
    };
  },
  computed: {
    chartOptions() {
      console.log(this.fld01+' , '+this.fld02);
      let color = this.fld01 < this.fld02 ? '#43c890' :'#fb1f1f';
      console.log('color  ==> '+color);
      return {
        chart: {
          type: 'solidgauge',
          height: 210,
          width: 210
        },

        title: {
          text: ''
        },
        credits: {
          enabled: false
        },
        tooltip: {
          enabled: false
        },
        pane: {
          startAngle: -125,
          endAngle: 125,
          background: [{ // Track for Move
            outerRadius: '114%',
            innerRadius: '88%',
            backgroundColor: Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0.0).get(),
            borderWidth: 0,
          }]
        },

        yAxis: {
          min: 0,
          max: 100,
          lineWidth: 0,
          tickPositions: []
        },

        plotOptions: {
          solidgauge: {
            dataLabels: {
              enabled: true
            },
            linecap: 'round',
            stickyTracking: false,
            rounded: true
          }
        },

        series: [{
          name: '현재수익률',
          data: [{
            color: Highcharts.color(color).setOpacity(1).get(),
            radius: '114%',
            innerRadius: '88%',
            y: 60
          }, {
            color: Highcharts.color(color).setOpacity(0.3).get(),
            radius: '114%',
            innerRadius: '88%',
            y: 100
          }
          ],
          dataLabels: {
            format: '<div class="label_wrap"><span class="txt01">현재수익률</span><span class="txt02">0000.0%</span></div> ',
            borderWidth: 0,
            useHTML: true
          },
        }]
      };
    }
  },
  beforeCreate() {
  },
  async created() {
  },
  mounted() {

  },
  methods: {
  }
};
</script>

<style lang="scss">
.gauge-chart {
    .highcharts-root {
        font-family: "Noto Sans KR", "Noto Sans", "Noto Serif KR", sans-serif !important;
    }
}
</style>
