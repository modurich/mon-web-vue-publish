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
      const seriscolor = this.fld01 < this.fld02 ? '#94bfff' : '#fe8383';
      const txtcolor = this.fld01 < this.fld02 ? 'txt04' : 'txt03';
      
      return {
        chart: {
          type: 'solidgauge',
          height: 150,
          width: 150,
          backgroundColor: {

          },
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
          startAngle: -135,
          endAngle: 135,
          background: [{ // Track for Move
            outerRadius: '114%',
            innerRadius: '88%',
            backgroundColor: Highcharts.color(seriscolor).setOpacity(0.0).get(),
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
            color: 
            
            /*{
              linearGradient: [0, 0, 300, 300],
              stops: [
                [0, Highcharts.color(seriscolor).setOpacity(0.2).get()],
                [1, Highcharts.color(seriscolor).setOpacity(1).get()]
              ]
            },*/
            
            Highcharts.color(seriscolor).setOpacity(1).get(),
            radius: '114%',
            innerRadius: '88%',
            y: 60
          }, {
            color: Highcharts.color(seriscolor).setOpacity(0.1).get(),
            radius: '114%',
            innerRadius: '88%',
            y: 100
          }
          ],
          dataLabels: {
            format: '<div class="label_wrap type1 "><span class="txt_blue font14">2499<span class="txt_gray font12">/2500 P</span></span></div>',
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
