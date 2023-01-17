<template>
    <div class="centerarea_box1">
        <div class="con_box">
          <h2 class="line_type">실시간 인기 토론</h2>
          <div class="box_contents">  
            <ul class="thumb_list1">
              <li>
                <div class="top_wrap">
                  <div class="my_profile">
                    <div class="img_area">
                      <img src="~assets/prd_logo.png" alt="logo"/>
                    </div>
                    <div class="tit_area">
                      <span class="txt_tit txt_dk">삼성전자</span>
                    </div>
                  </div>
                  <span class="tag_blue">+1.24%</span>
                </div>
                <div class="con_area">
                  <p class="font12 mgt16">몬스탁닉넴열글자까지</p>
                  <p class="con_txt">[NEWS] 2022년 08월 16일 주요 뉴스<br/>
                  오늘 미국장 움직일 이슈: 러시아 2월 침공설 언급한 백악관, 아마존 실적발표 명암, 미 고용 호조에 긴축 우려<br/>
                  https://kr.investing.com/news/stock-market-news/article-760933
                  </p>
                  <button class="primary mgb16">상세보기</button>
                  <p class="img"><img src="~assets/test_img.png"></p>
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
                      <!-- <span class="ico_f ico_star_s primary">4.7</span> -->
                    </span>
                    <span class="font12">2분 전</span>
                  </div>
                </div>
                </div>
              </li>
              <li>
                <div class="top_wrap">
                  <div class="my_profile">
                    <div class="img_area">
                      <img src="~assets/prd_logo.png" alt="logo"/>
                    </div>
                    <div class="tit_area">
                      <span class="txt_tit txt_dk">삼성전자</span>
                    </div>
                  </div>
                  <span class="tag_blue">+1.24%</span>
                </div>
                <div class="con_area">
                  <p class="con_txt">[NEWS] 2022년 08월 16일 주요 뉴스<br/>
                  오늘 미국장 움직일 이슈: 러시아 2월 침공설 언급한 백악관, 아마존 실적발표 명암, 미 고용 호조에 긴축 우려<br/>
                  https://kr.investing.com/news/stock-market-news/article-760933
                  </p>
                  <button class="primary mgb16">상세보기</button>
                  <div class="footer_area">
                  <p class="tag_area">
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
                      <!-- <span class="ico_f ico_star_s primary">4.7</span> -->
                    </span>
                    <span class="font12">2분 전</span>
                  </div>
                </div>
                </div>
              </li>
              <li>
                <div class="top_wrap">
                  <div class="my_profile">
                    <div class="img_area">
                      <img src="~assets/prd_logo.png" alt="logo"/>
                    </div>
                    <div class="tit_area">
                      <span class="txt_tit txt_dk">삼성전자</span>
                    </div>
                  </div>
                  <span class="tag_blue">+1.24%</span>
                </div>
                <div class="con_area">
                  <p class="con_txt">[NEWS] 2022년 08월 16일 주요 뉴스<br/>
                  오늘 미국장 움직일 이슈: 러시아 2월 침공설 언급한 백악관, 아마존 실적발표 명암, 미 고용 호조에 긴축 우려<br/>
                  https://kr.investing.com/news/stock-market-news/article-760933
                  </p>
                  <button class="primary mgb16">상세보기</button>
                  <div class="footer_area">
                  <p class="tag_area">
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
                      <!-- <span class="ico_f ico_star_s primary">4.7</span> -->
                    </span>
                    <span class="font12">2분 전</span>
                  </div>
                </div>
                </div>
              </li>
            </ul>
            <div class="btn_wrap">
              <m-button-3 class="font16 full" color="textPrimary">더보기</m-button-3>
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



export default {
  components: { MDialogBlank, Swiper, SwiperSlide, VClamp, MChipList, MChip },
    name: 'H_33200_T',
    
    data() {
        return {
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
            v_true: ref(true),
            tabs:[
                {label:'전체', value:'A', icon:''},
                {label:'주식', value:'B', icon:''},
                {label:'코인', value:'C', icon:''}
            ],
            dailog1:ref(false),
            polcyType:ref('01'),
        }
    },
    methods: {
  }
};
</script>
<style scoped>

</style>
