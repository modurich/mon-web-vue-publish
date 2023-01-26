<template>
    <div class="centerarea_box1">
        <div class="con_box">
          <h2 class="line_type">
            의제 작성
          </h2>
            <div class="box_contents">
              <!-- <div class="error_wrap">
                <div class="ico_top">
                  <i class="ico_error"></i>
                </div>
                <div class="com_message font16">
                  출금요청 내역이 없습니다.
                </div>
              </div> -->
              <h3 class="mgb32 font16 between">
                <span>
                  제목
                </span>
                <span class="font14 txt_gray medium">20자 이내</span>
              </h3>
              <div class="check_list_wrap">
                <m-input filled v-model="text1" class="round_type" placeholder="제목을 입력해 주세요"/>
              </div>

              <div class="divider" />

              <h3 class="mgb32 font16 between">
                <span>
                발의 이유
                </span>
                <span class="font14 txt_gray medium">20자 이상 필수</span>
              </h3>
              <div class="check_list_wrap">
                <m-textarea :maxlength="500" :showError="false" :minHeight="textarea1.minHeight"
                :counter="textarea1.counter" :value="textarea1.value" :bottomMessage="textarea1.bottomMessage"
                :height="50" placeholder="의제를 발의한 이유를 상세하게 작성해주세요."/>
              </div>
              <div class="divider" />

              <h3 class="mgb32 font16">
                수수료
              </h3>
              <ul class="list_type1 font12">
                <li>
                  <span>스테이킹 지분</span>
                  <span class="font16">0%</span>
                </li>
                <li>
                  <span>보유</span>
                  <span class="font16">308.2206096615 sMON</span>
                </li>
                <li>
                  <span>의제 등록 수수료</span>
                  <span class="txt02 font16">100 sMON</span>
                </li>
              </ul>
              <p class="mga32"><m-checkbox size="md" v-model="check1" label="의제 대상(콘텐츠, 플레이어)은 몬스탁의 이용규정과 운영방침을 준수해야 합니다. 이를 어긴 경우 운영자의 권한으로 투표 취소, 삭제할 수 있습니다. 의제 등록 수수료는 어떠한 경우에도 환불되지 않습니다."/></p>
              <div class="btn_wrap l_row_l">
                <m-button-3 color="primary" size="large" class="full">등록</m-button-3>
              </div>

              <div class="divider" />

              <h3 class="mgb32 font16">
                의제등록 주의사항
              </h3>
              <p class="num_list_tit">공통</p>
              <ol class="num_list_wrap">
                <li><span class="txt_number">1.</span> 의제 발의는 의제 종류와 무관하게 통합하여 1인 1일 1회만 가능합니다. (UTC 0시 기준 초기화) </li>
                <li><span class="txt_number">2.</span> 의제는 등록 후 수정 및 작성자가 임의 취소할 수 없습니다. </li>
                <li><span class="txt_number">3.</span> 몬스탁의 일반적인 글 작성 규정에 어긋나는 경우는 예고 없이 삭제할 수 있습니다. </li>
                <li><span class="txt_number">4.</span> 등록 수수료는 어떠한 경우에도 환불되지 않습니다. </li>
                <li><span class="txt_number">5.</span> 정족수 미만은 부결로 처리합니다.</li>
              </ol>
              <p class="num_list_tit">Pro 승급</p>
              <ol class="num_list_wrap">
                <li><span class="txt_number">1.</span> Pro 승급 이후 누적 15일 이상 이용 정지 징계를 당하는 경우 Pro 뱃지를 회수할 수 있습니다.</li> 
                <li><span class="txt_number">2.</span> Pro 뱃지는 의제 통과 후 3개월 동안 유지되며 이후 Pro 승급 기본 조건에 미달 시 자동 회수됩니다. </li>
                <li><span class="txt_number">3.</span> Pro 승급 6개월 이후에는 자동으로 Pro 재신임 의제가 발의됩니다.</li>
              </ol>
              <p class="num_list_tit">Pro 재신임</p>
              <ol class="num_list_wrap">
                <li><span class="txt_number">1.</span> Pro 재신임 의제 부결 시 Pro 뱃지를 회수합니다. </li>
                <li><span class="txt_number">2.</span> Pro 재심임 의제 가결은 Pro 승급 의제 가결과 같은 효과를 가집니다.</li>
              </ol>
              <p class="num_list_tit">BEST 제안</p>
              <ol class="num_list_wrap">
                <li><span class="txt_number">1.</span> 투표 진행 중 정책 위반 등으로 해당 콘텐츠가 차단되는 경우 투표가 취소됩니다. </li>
                <li><span class="txt_number">2.</span> BEST 지정된 이후 정책 위반 등으로 콘텐츠가 차단되는 경우 기 지급된 BEST 지정 보상을 환수합니다. </li>
                <li><span class="txt_number">3.</span> 포스트는 정보 카테고리만 BEST 제안할 수 있습니다. </li>
                <li><span class="txt_number">4.</span> BEST 대상은 작성자가 직접 신규 작성한 글만 해당되며 이를 위반한 경우 투표 취소, 보상 환수 등을 할 수 있습니다.</li>
              </ol>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import MDialogBlank from 'src/components/MDialogBlank.vue';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import VClamp from '@boyuai/vue-clamp';
import MChipList from 'src/components/MChipList.vue';
import MChip from 'src/components/MChip.vue';
import GaugeChart from 'src/components/GaugeChart.vue';
import DefaultTable from 'src/components/DefaultTeble.vue';


export default {
  components: { MDialogBlank, Swiper, SwiperSlide, VClamp, MChipList, MChip, GaugeChart, DefaultTable },
    name: 'H_33200_T',
    
    data() {
        return {
            select1: ref("전체"),
              options: [
              '전체', '선택1','선택2','선택3',
            ], 
            progress: 0.4,       
            ratingModel: ref(3),
            ratingMode2: ref(0),
            ratingMode3: ref(0),
            ratingMode4: ref(0),
            ratingMode5: ref(0),
            textarea1: {
              value: "",
              counter: true,
              minHeight: 100,
              showError: true,
              //bottomMessage: "바닥메시지"
            },
            toggle1: ref(false),
            text1:ref(''),
            text2:ref(''),
            text3:ref(''),
            tab1:ref('A'),
            tab2:ref('A'),
            rad1:ref('A'),
            current: ref(3),
            v_true: ref(true),
            tabs: [
              { label: '투자정보', value: 'A', icon: '' },
              { label: '작성자 통계', value: 'B', icon: '' }
            ],
            tabs1:[
                {label:'인사이트', value:'A', icon:'mail'},
                {label:'BLASH', value:'B', icon:'photo'}
            ],
            dailog1:ref(false),
            polcyType:ref('01'),
            chartOptions1: {
            colors: ['#c1b7ff', '#8673ff', '#4c34dc', '#B37CD2'],
            chart: {
                type: 'pie'
            },
            accessibility: {
                point: {
                    valueSuffix: '건'
                }
            },
            credits: {
              enabled: false
            },
              chartdata: { 'fil01': 100, 'fld02': 200, 'fld03': 200 },
            
            // title: {
            //     text: 'February 2020 Norway passenger auto registrations'
            // },
            // subtitle: {
            //     text: 'Source:<a href="https://cleantechnica.com/2020/03/07/pioneering-norway-rises-above-68-plug-in-vehicle-market-share-in-february/">cleantechnica</a>'
            // },
            // tooltip: {
            //     pointFormat: '{series.name}: <b>{point.percentage:.0f}%</b>'
            // },
            title: {
              text:'<div style="font-size: 20px;font-weight:700">30건</div>',
              align:'center',
              verticalAlign:'middle',
              x:0,
              y:25
            },
            plotOptions: {
                pie: {
                    //size: 100,
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false,
                        format: '{point.name}: {y} 건'
                    },
                    showInLegend: false
                  }
                },
                legend: {
                  align: 'right',
                  verticalAlign: 'top',
                  y: 50,
                  layout: 'vertical',
                  bubbleLegend: {
                    enabled: true
                  }
                },
                series: [{
                  name: 'Registrations',
                  colorByPoint: true,
                  innerSize: '75%',
                  data: [
                  {
                      name: '단기',
                      y: 3
                  }, 
                  {
                      name: '중기',
                      y: 6
                  }, 
                  {
                      name: '단기',
                      y: 21
                  }
                ]
              }]
            },
        }
    },
    methods: {
      scrollEvents:function(){
        if(window.scrollY > 300){
          document.querySelector('#dynamic').classList.add('show');
        }else{
          document.querySelector('#dynamic').classList.remove('show');
        }
      }
    },
    mounted() {
      document.addEventListener('scroll', this.scrollEvents);
    },
    unmounted() {
      document.removeEventListener('scroll', this.scrollEvents);
    },
    computed: {
        chartOptions() {
            const rating = this.rating || {
                score1: 2,
                score2: 3,
                score3: 1,
                score4: 4,
                score5: 5
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
                        lineColor: 'rgba(134, 115, 255, 1)',
                        fillColor: 'rgba(134, 115, 255, 0.3)'
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
};
</script>
<style scoped>

</style>