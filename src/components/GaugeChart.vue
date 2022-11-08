<i18n>
  {
      "ko": {
          "computed": {
              "chartOptions": {
                "yAxis": {
                    "title": {
                        "text": "속도"
                    }
                }
              }
          }
      },
      "en": {
          "computed": {
              "chartOptions": {
                "yAxis": {
                    "title": {
                      "text": "Speed"
                    }
                }
              }
          }
      }
  }
  </i18n>
  
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
                height: '110%',
                events: {
                  //render: renderIcons
                }
              },

              title: {
  
              },

              tooltip: {
                borderWidth: 0,
                backgroundColor: 'none',
                shadow: false,
                style: {
                  fontSize: '16px'
                },
                valueSuffix: '%',
                pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}</span>',
                positioner: function (labelWidth) {
                  return {
                    x: (this.chart.chartWidth - labelWidth) / 2,
                    y: (this.chart.plotHeight / 2) + 15
                  };
                }
              },

              pane: {
                startAngle:-150,
                endAngle: 150,
                background: [{ // Track for Move
                  outerRadius: '112%',
                  innerRadius: '88%',
                  // backgroundColor: Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0.0).get(),
                  borderWidth: 0
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
                    enabled: false
                  },
                  linecap: 'round',
                  stickyTracking: false,
                  rounded: true
                }
              },

              series: [{
                name: 'Move',
                data: [{
                  // color: Highcharts.getOptions().colors[0],
                  radius: '112%',
                  innerRadius: '88%',
                  y: 80
                }]
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
