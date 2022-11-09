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
  components: { 
    
  },
    name: 'GaugeChart',
    props: {
        rating: {
            type: Object
        }
    },
    data() {
        return {
        };
    },
    computed: {
        chartOptions() {
            return {
              chart: {
                type: 'solidgauge',
                height: 221,
                width: 221
              },

              title: {
                text:''
              },
              credits: {
                enabled: false
              },
              tooltip: {
                enabled: false
              },      
              pane: {
                startAngle:-150,
                endAngle: 150,
                background: [{ // Track for Move
                  outerRadius: '112%',
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
                  color: Highcharts.getOptions().colors[0],
                  radius: '112%',
                  innerRadius: '88%',
                  y: 60
                }, {
                  color: Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0.3).get(),
                  radius: '112%',
                  innerRadius: '88%',
                  y: 100
                  }
                ],
                dataLabels: {
                  format: '<span class="NS-M12">현재수익률</span><br/><span>0000.0<span class="text-style-1" >%</span></span> ',
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
