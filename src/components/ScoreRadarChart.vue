<i18n>
{
    "ko": {
        "computed": {
            "chartOptions": {
                "xAxis": {
                    "label1": "적시성",
                    "label2": "논리성",
                    "label3": "정확성",
                    "label4": "독창성",
                    "label5": "가독성"
                }
            }
        }
    },
    "en": {
        "computed": {
            "chartOptions": {
                "xAxis": {
                    "label1": "Timely",
                    "label2": "Logical",
                    "label3": "Accuracy",
                    "label4": "Creatively",
                    "label5": "Readability"
                }
            }
        }
    }
}
</i18n>

<template>
    <div class="score-radar-chart">
        <highcharts ref="chart" :constructor-type="'chart'" :options="chartOptions"></highcharts>
    </div>
</template>

<script>
// 괴리율 차트
import _ from 'lodash';
import { mapState, mapActions } from 'vuex';

export default {
    name: 'ScoreRadarChart',
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
            const rating = this.rating || {
                score1: 0,
                score2: 0,
                score3: 0,
                score4: 0,
                score5: 0
            };
            return {
                title: {
                    text: ''
                },
                chart: {
                    polar: true,
                    height: 221
                },
                credits: {
                    enabled: false
                },
                xAxis: {
                    categories: [
                        this.$t('computed.chartOptions.xAxis.label1'),
                        this.$t('computed.chartOptions.xAxis.label2'),
                        this.$t('computed.chartOptions.xAxis.label3'),
                        this.$t('computed.chartOptions.xAxis.label4'),
                        this.$t('computed.chartOptions.xAxis.label5')
                    ],
                    tickmarkPlacement: 'on',
                    lineWidth: 0,
                    labels: {
                        format: '<span class="f-12-b-lg">{value}</span>',
                        useHTML: true
                        /* style: {
                            color: '#A8A8A8',
                            fontSize: '12px',
                            fontWeight: 'bold'
                        }, */
                    }
                },
                yAxis: {
                    title: {
                        text: ''
                    },
                    labels: {
                        enabled: false
                    },
                    gridLineInterpolation: 'polygon',
                    lineWidth: 0,
                    min: 0,
                    max: 5,
                    endOnTick: true,
                    showLastLabel: false,
                    gridLineWidth: 1,
                    minorTickInterval: 1,
                    tickInterval: 1,
                    minorGridLineWidth: 0
                },
                plotOptions: {
                    series: {
                        marker: {
                            enabled: false
                        },
                        states: {
                            hover: {
                                enabled: false
                            }
                        }
                    },
                    area: {
                        lineColor: 'rgba(255, 165, 0, 1)',
                        fillColor: 'rgba(255, 165, 0, 0.6)'
                    }
                },
                tooltip: {
                    enabled: false
                },
                legend: {
                    enabled: false
                },

                series: [{
                    type: 'area',
                    data: [rating.score2, rating.score5, rating.score3, rating.score1, rating.score4],
                    pointPlacement: 'on'
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
.score-radar-chart {
    .highcharts-root {
        font-family: "Noto Sans KR", "Noto Sans", "Noto Serif KR", sans-serif !important;
    }
}
</style>
