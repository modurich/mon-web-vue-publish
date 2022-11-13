<template>
    <div class="centerarea_box1">
        <div class="con_box">
          <h2 class="line_type">콘텐츠 관리</h2>
          <m-tabs class="line_type large" v-model="tab1" :items="tabs"/>
          <div class="tab_contents" v-if="tab1 == 'A'">
            <div class="right">
              <m-tabs class="card_type small" v-model="tab2" :items="tabs1" />
            </div>
            <div v-if="tab2 == 'A'">
              <div class="half_select mgt16 mgb32">
                <m-select v-model="select1" :options="options" />
              </div>
              <!-- S 작성-->
              <div class="no_data_wrap">
                <div class="ico_top pdt32">
                  <i class="ico_error"></i>
                </div>
                <div class="com_message mgb32">
                  작성된 인사이트가 없어요
                </div>
              </div>
              <div class="btn_wrap mgb32">
                  <m-button-3 size="large" color="primary" class="full">인사이트 작성하기</m-button-3>
              </div>
              <div class="between font12">
                <span>전체 00개</span>
                <span>현재 달성률</span>
              </div>
              <div class="divider1 xsmall"/>
              <ul class="list_type2">
                <li>
                  <div class="l_area">
                    <p class="txt_tit">몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지</p>
                    <span class="logo_area">
                      <span>
                        <img src="~assets/prd_logo.png" alt="profile" />
                        삼성전자
                      </span>
                    </span>
                  </div>
                  <div class="r_area">
                    <span class="txt01"> 0.2%</span>
                  </div>
                </li>
                <li>
                  <div class="l_area">
                    <p class="txt_tit">몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지</p>
                    <span class="logo_area">
                      <span>
                        <img src="~assets/prd_logo.png" alt="profile" />
                        삼성전자
                      </span>
                    </span>
                  </div>
                  <div class="r_area">
                    <span class="txt01"> 0.2%</span>
                  </div>
                </li>
                <li>
                  <div class="l_area">
                    <p class="txt_tit">몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지</p>
                    <span class="logo_area">
                      <span>
                        <img src="~assets/prd_logo.png" alt="profile" />
                        삼성전자
                      </span>
                    </span>
                  </div>
                  <div class="r_area">
                    <span class="txt01"> 0.2%</span>
                  </div>
                </li>
                <li>
                  <div class="l_area">
                    <p class="txt_tit">몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지</p>
                    <span class="logo_area">
                      <span>
                        <img src="~assets/prd_logo.png" alt="profile" />
                        삼성전자
                      </span>
                    </span>
                  </div>
                  <div class="r_area">
                    <span class="txt01"> 0.2%</span>
                  </div>
                </li>
                <li>
                  <div class="l_area">
                    <p class="txt_tit">몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지</p>
                    <span class="logo_area">
                      <span>
                        <img src="~assets/prd_logo.png" alt="profile" />
                        삼성전자
                      </span>
                    </span>
                  </div>
                  <div class="r_area">
                    <span class="txt01"> 0.2%</span>
                  </div>
                </li>
              </ul>
              <div class="between font12">
                <span>전체 00개</span>
                <span>예측 결과</span>
              </div>
              <div class="divider1 xsmall"/>
              <ul class="list_type2">
                <li>
                  <div class="l_area">
                    <p class="txt_tit">몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지</p>
                    <span class="logo_area">
                      <span>
                        <img src="~assets/prd_logo.png" alt="profile" />
                        삼성전자
                      </span>
                    </span>
                  </div>
                  <div class="r_area">
                    <img src="~assets/ico_stamp01.svg" alt="실패" />
                  </div>
                </li>
                <li>
                  <div class="l_area">
                    <p class="txt_tit">몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지</p>
                    <span class="logo_area">
                      <span>
                        <img src="~assets/prd_logo.png" alt="profile" />
                        삼성전자
                      </span>
                    </span>
                  </div>
                  <div class="r_area">
                    <img src="~assets/ico_stamp.svg" alt="성공" />
                  </div>
                </li>
                <li>
                  <div class="l_area">
                    <p class="txt_tit">몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지</p>
                    <span class="logo_area">
                      <span>
                        <img src="~assets/prd_logo.png" alt="profile" />
                        삼성전자
                      </span>
                    </span>
                  </div>
                  <div class="r_area">
                    <img src="~assets/ico_stamp01.svg" alt="실패" />
                  </div>
                </li>
                <li>
                  <div class="l_area">
                    <p class="txt_tit">몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지</p>
                    <span class="logo_area">
                      <span>
                        <img src="~assets/prd_logo.png" alt="profile" />
                        삼성전자
                      </span>
                    </span>
                  </div>
                  <div class="r_area">
                    <img src="~assets/ico_stamp.svg" alt="성공" />
                  </div>
                </li>
                <li>
                  <div class="l_area">
                    <p class="txt_tit">몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지</p>
                    <span class="logo_area">
                      <span>
                        <img src="~assets/prd_logo.png" alt="profile" />
                        삼성전자
                      </span>
                    </span>
                  </div>
                  <div class="r_area">
                    <img src="~assets/ico_stamp.svg" alt="성공" />
                  </div>
                </li>
              </ul>
              <!-- E 작성 -->
              <div class="btn_wrap">
                <m-button-3 size="large" class="font16 full" color="textPrimary">더보기</m-button-3>
              </div>
            </div>
            <div v-if="tab2 == 'B'">
              <div class="mgt16 mgb32">
                <m-select v-model="select1" :options="options" />
              </div>
              <div class="no_data_wrap">
                <div class="ico_top pdt32">
                  <i class="ico_error"></i>
                </div>
                <div class="com_message mgb32">
                  작성된 BLASH가 없어요
                </div>
              </div>
              <div class="btn_wrap mgb32">
                <m-button-3 size="large" color="primary"  class="full">더보기</m-button-3>
              </div>
              <ul class="insight_list">
                  <li>
                      <span class="txt01">최고</span>
                      <span class="txt02 txt_blue1">+12.01%</span>
                  </li>
                  <li>
                      <span class="txt01">최저</span>
                      <span class="txt02 txt_red">-3.84%</span>
                  </li>
                  <li>
                      <span class="txt01">누적</span>
                      <span class="txt02 txt_blue1">+3.02%</span>
                  </li>
                  <li>
                      <span class="txt01">평균</span>
                      <span class="txt02 txt_blue1">+1.05%</span>
                  </li>
              </ul>
              <div class="between font12 mgt32">
                <span>전체 00개</span>
                <span>
                  <span class="mgr32">실현 수익률</span>
                  <span>예측 결과</span>
                </span>
              </div>
              <div class="divider1 small mga16"/>
              <ul class="list_type2">
                <li>
                  <div class="l_area">
                    <p class="txt_tit">몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지</p>
                    <span class="logo_area">
                      <span>
                        <img src="~assets/prd_logo.png" alt="profile" />
                        삼성전자
                      </span>
                      <span class="font20 txt_blue1">+20.26%</span>
                    </span>
                  </div>
                  <div class="r_area">
                    <img src="~assets/ico_stamp01.svg" alt="실패" />
                  </div>
                </li>
                <li>
                  <div class="l_area">
                    <p class="txt_tit">몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지</p>
                    <span class="logo_area">
                      <span>
                        <img src="~assets/prd_logo.png" alt="profile" />
                        삼성전자
                      </span>
                      <span class="font20 txt_blue1">+20.26%</span>
                    </span>
                  </div>
                  <div class="r_area">
                    <img src="~assets/ico_stamp02.svg" alt="무효" />
                  </div>
                </li>
                <li>
                  <div class="l_area">
                    <p class="txt_tit">몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지</p>
                    <span class="logo_area">
                      <span>
                        <img src="~assets/prd_logo.png" alt="profile" />
                        삼성전자
                      </span>
                      <span class="font20 txt_red">-23.15%</span>
                    </span>
                  </div>
                  <div class="r_area">
                    <img src="~assets/ico_stamp01.svg" alt="실패" />
                  </div>
                </li>
                <li>
                  <div class="l_area">
                    <p class="txt_tit">몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지</p>
                    <span class="logo_area">
                      <span>
                        <img src="~assets/prd_logo.png" alt="profile" />
                        삼성전자
                      </span>
                      <span class="font20 txt_blue1">+20.26%</span>
                    </span>
                  </div>
                  <div class="r_area">
                    <img src="~assets/ico_stamp03.svg" alt="매수실패" />
                  </div>
                </li>
                <li>
                  <div class="l_area">
                    <p class="txt_tit">몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지</p>
                    <span class="logo_area">
                      <span>
                        <img src="~assets/prd_logo.png" alt="profile" />
                        삼성전자
                      </span>
                      <span class="font20 txt_blue1">+20.26%</span>
                    </span>
                  </div>
                  <div class="r_area">
                    <img src="~assets/ico_stamp.svg" alt="성공" />
                  </div>
                </li>
              </ul>
              <div class="btn_wrap">
                <m-button-3 size="large" class="font16 full" color="textPrimary">더보기</m-button-3>
              </div>
            </div>
            <div v-if="tab2 == 'C'"></div>
          </div>
          <div class="tab_contents" v-if="tab1 == 'B'">
            <!-- S 관심 -->
            <!-- E 관심 -->
          </div>
          <div class="tab_contents" v-if="tab1 == 'C'">
            <!-- S 보팅 -->
            <!-- E 보팅 -->
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



export default {
  components: { MDialogBlank, Swiper, SwiperSlide, VClamp },
    name: 'A_10000_P',
    
    data() {
        return {
            text1:ref('호빵맨'),
            text2:ref(''),
            text3:ref(''),
            tab1:ref('A'),
            tab2:ref('A'),
            rad1:ref('A'),
            tabs:[
                {label:'작성', value:'A', icon:''},
                {label:'관심', value:'B', icon:''},
                {label:'보팅', value:'C', icon:''}
            ],
            tabs1:[
                {label:'인사이트', value:'A'},
                {label:'BLASH', value:'B'},
                {label:'포스트', value:'C'}
            ],
            dailog1:ref(false),
            polcyType:ref('01'),
            textarea1 : {
                value: "",
                counter: true,
                minHeight: 100,
                showError: true,
                //bottomMessage: "바닥메시지"
            },
        }
    },
    methods: {
  }
};
</script>
<style scoped>

</style>
