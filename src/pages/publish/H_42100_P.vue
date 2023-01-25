<template>
    <div class="centerarea_box1">
        <div class="con_box">
          <h2 class="line_type">
            의제투표 상세
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
              <div class="vote_wrap">
                <div class="tit_wrap">
                  <span class="badge_wrap">
                      <span class="badge_area">
                        <span class="badge3 light_green">주식</span>
                        <span class="badge3 yellow">BEST</span>
                        <span class="badge3 primary">반영완료</span>
                      </span>
                      <span class="badge_area">
                        <span class="badge3 green">가결</span>
                      </span>
                  </span>
                  <p class="sub_tit mgt8">[식빵맨님의 BLASH]</p>
                  <p class="font16 txt_dk">오버행 이슈 해소, 아직은 저점구간</p>
                  <p class="list_tit">
                    <span class="txt01">내투표권</span>
                    <span class="txt02">25VP</span>
                  </p>
                </div>
                <div class="gray_box">
                  <div class="list_type2">
                    <div class="l_area">
                      <span class="txt_blue1">
                        찬성
                      </span>
                      <p class="txt_con">
                        <span class="txt_tit txt_blue1">90.55%</span>
                        <span>1245 VP</span>
                      </p>
                    </div>
                    <div class="r_area">
                      <m-button-3 color="green" class="full" >찬성</m-button-3>
                    </div>
                  </div>
                  <q-linear-progress class="progress_type1 blue" size="10px" :value="progress" />
                </div>
                <div class="gray_box">
                  <div class="list_type2">
                    <div class="l_area">
                      <span class="txt_red1">
                        반대
                      </span>
                      <p class="txt_con">
                        <span class="txt_tit txt_red1">9.55%</span>
                        <span>1245 VP</span>
                      </p>
                    </div>
                    <div class="r_area">
                      <m-button-3 color="red" class="full">반대</m-button-3>
                    </div>
                  </div>
                  <q-linear-progress class="progress_type1 red" size="10px" :value="progress" />
                </div>
              </div>
              <div class="divider" />
              <h3 class="mgb32 font16">
                발의 대상
              </h3>
              <!-- s 인사이트 -->
              <ul class="thumb_list gray_box small">
                <li>
                  <div class="top_wrap">
                  <div class="my_profile">
                      <div class="tit_area">
                        <a href="#" class="inflex_link">
                          <div class="img_area">
                            <img src="~assets/profile_img1.png" alt="profile"/>
                          </div>
                          <span class="txt_tit">몬스탁닉넴열글자까지</span>
                        </a>
                        <span class="badge_area">
                          <span class="badge pro">PRO</span>
                          <span class="badge pl1">PL1</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <a href="#">
                    <div class="tit_wrap">
                      <p class="badge_wrap">
                        <span class="badge_area">
                          <span class="badge3 small brown">코인</span>
                          <span class="badge3 small yellow">BEST</span>
                        </span>
                        <span>D-120</span>
                      </p>
                      <p class="tit_txt">제목은 2글자 이상 최대 40자입니다</p>
                      <p class="logo_wrap">
                        <img src="~assets/prd_logo.png" alt="profile" />
                        삼성전자 우
                      </p>
                    </div>
                    <div class="defalut_box">
                      <div class="flex between">
                        <span class="txt01">목표가</span>
                        <span class="font18 bold txt_blue1">$ ?????</span>
                      </div>
                    </div>
                  </a>
                  <div class="footer_area">
                    <p class="tag_area">
                      <a href="#" class="primary">＄관련종목</a>
                      <a href="#">#금리인상</a>
                      <a href="#">#친환경</a>
                      <a href="#">#로봇관련주</a>
                      <a href="#">#최대스무자최대스무자최대스무자최대스무자</a>
                    </p>
                    <div class="ico_wrap">
                      <span class="ico_area">
                        <button class="ico_f ico_thumbsUp">624</button>
                        <span class="ico_f ico_comment">7</span>
                        <span class="ico_f ico_view">1.2</span>
                        <span class="ico_f ico_star_s primary">4.7</span>
                      </span>
                      <span>2022.10.26</span>
                    </div>
                  </div>
                </li>
            </ul>
            <!-- e 인사이트 -->
            <!-- s BLASH -->
            <a href="#">
              <div class="thumb_list_new full">
                  <div class="top_wrap">
                    <div class="my_profile">
                      <div class="img_area">
                        <img src="~assets/profile_img1.png" alt="profile"/>
                      </div>
                      <div class="tit_area">
                        <span class="txt_tit">몬스탁닉넴열글자까지</span>
                        <span class="badge_area">
                          <span class="badge pro">PRO</span>
                          <span class="badge pl1">PL1</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="tit_wrap">
                    <p class="badge_wrap">
                      <span class="badge_area">
                          <span class="badge3 small brown">코인</span>
                          <span class="badge3 small yellow">BEST</span>
                      </span>
                      <span class="txt01">매수대기</span>
                    </p>
                    <p class="tit_txt">제목은 2글자 이상 최대 40자입니다</p>
                  </div>
                  <div class="blash_box">
                    <div class="tit_wrap">
                      <span class="txt01">BLASH</span>
                      <span class="txt02">5 sMON</span>
                    </div>
                    <div class="con_wrap">
                      <div class="txt_area">
                        <div class="tit_txt">
                          <span class="txt01">목표수익률</span> 
                          <span class="txt02">99999.99 %</span>
                        </div>
                        <div class="con_txt">
                          <span class="col">비중 <span class="txt01">100%</span></span>
                          <span class="col">기간 <span class="txt01">120일</span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="footer_area">
                    <p class="tag_area">
                      <span class="primary">＄관련종목</span>
                      <span>#금리인상</span>
                      <span>#친환경</span>
                      <span>#로봇관련주</span>
                      <span>#최대스무자최대스무자최대스무자최대스무자</span>
                    </p>
                    <div class="ico_wrap">
                      <span class="ico_area">
                        <span class="ico_f ico_thumbsUp">624</span>
                        <span class="ico_f ico_comment">7</span>
                        <span class="ico_f ico_view">1.2</span>
                        <span class="ico_f ico_star_s primary">4.7</span>
                      </span>
                      <span class="txt_date">2022.10.26</span>
                    </div>
                  </div>
              </div>
            </a>
            <!-- e BLASH -->
            <!-- S 통계 -->
            <ul class="follow_info_wrap mga32">
              <li>
                <div class="my_profile">
                  <div class="img_area">
                    <img src="~assets/profile_img1.png" alt="profile"/>
                  </div>
                  <div class="tit_area">
                    <span class="txt_tit">몬스탁닉넴열글자까지</span>
                    <span class="badge_area">
                      <span class="badge pro">PRO</span>
                      <span class="badge pl1">PL1</span>
                    </span>
                  </div>
                </div>
                <div class="follow_btn_wrap">
                  <button class="ico_user_pl" color="secondary" label="Auto-Close Menu">
                      user추가
                      <q-menu auto-close :offset="[30, 10]">
                        <q-list style="min-width: 80px">
                          <q-item clickable>
                            <q-item-section>차단해제</q-item-section>
                          </q-item>
                          <q-separator />
                        </q-list>
                      </q-menu>
                    </button>
                </div>
              </li>
            </ul>
            <div class="divider1 small" />
             <div class="add_tab_tit">
              <h3>
                <span>통계</span>
              </h3>
              <m-tabs class="card_type small" v-model="tab2" :items="tabs1" />
            </div>
              <div v-if="tab2 == 'A'">
                <div class="radio_wrap right">
                    <m-radio v-model="rad1" val="A" label="전체"/>
                    <m-radio v-model="rad1" val="B" label="주식"/>
                    <m-radio v-model="rad1" val="C" label="코인"/>
                </div>
                <div class="l_row_l between">
                  <span class="font16 txt_dk">종료된 인사이트</span>
                  <span>YYYY.MM.DD hh:mm:ss (UTC+9)</span>
                </div>
                <div class="mgb32">
                  <m-select v-model="select1" :options="options" />
                </div>
                <ul class="insight_list">
                    <li>
                        <span class="txt01">총 예측 횟수</span>
                        <span class="txt02">27건</span>
                    </li>
                    <li>
                        <span class="txt01">평점</span>
                        <span class="txt02 primary"><i class="ico_star"/>4.60</span>
                    </li>
                    <li>
                        <span class="txt01">성공률</span>
                        <span class="txt02">72.61%</span>
                    </li>
                    <li>
                        <span class="txt01">수익률</span>
                        <span class="txt02 txt_blue1">7.84%</span>
                        <!-- 수익률 class txt_red,txt_blue1 -->
                    </li>
                </ul>

                <default-table tbl-type="1"/>

                <div class="divider1" />
                <div class="l_row_l between">
                  <span class="font16 txt_dk">진행중인 인사이트</span>
                  <!-- <span>22.09.20 ~ 22.09.20</span> -->
                </div>
                <div class="blash_wrap">
                  <div class="blash_chart">
                    <div class="chart_wrap">
                      <div class="chart_area">
                        <highcharts 
                          :options="chartOptions1"
                          >
                        </highcharts>
                      </div>
                      <ul class="regend_box">
                        <li>
                          <span class="tit"><i class="dot" style="background:#c1b7ff"/>단기</span>
                          <span class="con"><span class="primary">3</span>건</span>
                        </li>
                        <li>
                          <span class="tit"><i class="dot" style="background:#8673ff"/>중기</span>
                          <span class="con"><span class="primary">6</span>건</span>
                        </li>
                        <li>
                          <span class="tit"><i class="dot" style="background:#4c34dc"/>장기</span>
                          <span class="con"><span class="primary">31</span>건</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="blash_list">
                    <ul class="return_wrap">
                      <li>
                          <span class="txt01">상승 예측</span>
                          <span class="txt02">12건</span>
                      </li>
                      <li>
                          <span class="txt01">하락 예측</span>
                          <span class="txt02">45건</span>
                      </li>
                  </ul>
                  </div>
                </div>
                
                <default-table tbl-type="2"/>


              </div>
              <div v-if="tab2 == 'B'">
                <div class="radio_wrap right">
                    <m-radio v-model="rad1" val="A" label="전체"/>
                    <m-radio v-model="rad1" val="B" label="주식"/>
                    <m-radio v-model="rad1" val="C" label="코인"/>
                </div>
                <div class="l_row_l between">
                  <span class="font16 txt_dk">종료된 BLASH</span>
                  <span>YYYY.MM.DD hh:mm:ss (UTC+9)</span>
                </div>
                <div class="mgb32">
                  <m-select v-model="select1" :options="options" />
                </div>
                <ul class="insight_list list3">
                    <li>
                        <span class="txt01">총 예측 횟수</span>
                        <span class="txt02">27건</span>
                    </li>
                    <li>
                        <span class="txt01">성공률</span>
                        <span class="txt02">72.61%</span>
                    </li>
                    <li>
                        <span class="txt01">평점</span>
                        <span class="txt02 primary"><i class="ico_star"/>4.60</span>
                    </li>
                    <li>
                        <span class="txt01">수익률</span>
                        <span class="txt02 txt_blue1">3.84%</span>
                    </li>
                    <li>
                        <span class="txt01">최대 익절</span>
                        <span class="txt02 txt_blue1">18.05%</span>
                    </li>
                    <li>
                        <span class="txt01">최대 손절</span>
                        <span class="txt02 txt_red">-5.01%</span>
                        <!-- 수익률 class txt_red,txt_blue -->
                    </li>
                </ul>
                
                <default-table tbl-type="3"/>
                
                <div class="divider1"/>
                <div class="l_row_l between">
                  <span class="font16 txt_dk">진행중인 BLASH</span>
                  <!-- <span>22.09.20 ~ 22.09.20</span> -->
                </div>
                <div class="blash_wrap">
                  <div class="blash_chart">
                    <div class="chart_wrap">
                      <div class="chart_area">
                        <highcharts 
                          :options="chartOptions1"
                          >
                        </highcharts>
                      </div>
                      <ul class="regend_box">
                        <li>
                          <span class="tit"><i class="dot" style="background:#c1b7ff"/>단기</span>
                          <span class="con"><span class="primary">3</span>건</span>
                        </li>
                        <li>
                          <span class="tit"><i class="dot" style="background:#8673ff"/>중기</span>
                          <span class="con"><span class="primary">6</span>건</span>
                        </li>
                        <li>
                          <span class="tit"><i class="dot" style="background:#4c34dc"/>장기</span>
                          <span class="con"><span class="primary">31</span>건</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="blash_list">
                    <ul class="return_wrap">
                      <li>
                          <span class="txt01">상승 예측</span>
                          <span class="txt02">12건</span>
                      </li>
                      <li>
                          <span class="txt01">하락 예측</span>
                          <span class="txt02">45건</span>
                      </li>
                  </ul>
                  </div>
                </div>
                
                <default-table tbl-type="4"/>

              </div>
            <!-- E 통계 -->

            <div class="divider" />

            <h3 class="mgb32 font16">
              발의 이유
            </h3>
            <p>
              아래와 같은 이유로 해당 콘텐츠를 BEST로 지정하는 것을 제안합니다. <br><br>

              ✅ 시의적절한 주제 <br>
              ✅ 정확한 정보<br>
            </p>

            <div class="divider" />

            <h3 class="mgb32 font16">
              의제 정보
            </h3>
            <div>
              <span class="flex txt_dk bold">
                의제 TX해시
                <button class="ico_copy"/>
              </span>
            </div>
            <div class="list_info small">
              0x65c3542a135ec7bc8025468bbf7bb7334e991b21548cd0cdc7556eb85384094a
            </div>
            <div>
              <span class="flex txt_dk bold">
                의제 발의자
                <button class="ico_copy"/>
              </span>
            </div>
            <div class="list_info small">
              0x39b7108991303a9a8c45247343b4a495ab48c3a7
            </div>
            <div>
              <span class="flex txt_dk bold">
                현재 투표수
              </span>
            </div>
            <div class="list_info small">
              1375 VP
            </div>
            <div>
              <span class="flex txt_dk bold">
                최소 정족수
              </span>
            </div>
            <div class="list_info small">
              2000 VP
            </div>
            <div>
              <span class="flex txt_dk bold">
                의제등록 일시 (투표시작)
              </span>
            </div>
            <div class="list_info small">
              2022.12.05 13:31:37
            </div>
            <div>
              <span class="flex txt_dk bold">
                투표종료 일시
              </span>
            </div>
            <div class="list_info small">
              2022.12.05 13:31:37
            </div>
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
            text1:ref('호빵맨'),
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