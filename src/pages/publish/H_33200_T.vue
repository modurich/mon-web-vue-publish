<template>
  <div class="centerarea_box1">
      <div class="con_box">
        <h2 class="line_type">삼성전자</h2>
        <div class="box_contents pdt16">  
        <div class="button_list_wrap">
          <m-chip-list>
            <button class="active">
              <i class="ico ico_insite" />
              <span>인사이트</span>
            </button>
            <button>
              <i class="ico ico_blash" />
              <span>BLASH</span>
            </button>
            <button>
              <i class="ico ico_post" />
              <span>포스트</span>
            </button>
            <button v-bind:key="num" v-for="num in 10">
              <i class="ico_close_gray" />
              <img src="~assets/prd_logo.png" :alt="`삼성전자${num}`" />
              <span>삼성전자{{num}}</span>
            </button>
            <button>
              <i class="ico ico_plus">+</i>
              <span>자산추가</span>
            </button>
          </m-chip-list>
        </div>
          <m-chip-list v-dragscroll class="card_type">
            <m-chip :to="`/publish/H_33100_T`" :lined="true">인사이트</m-chip>
            <m-chip :to="`/publish/H_33300_T`" :lined="true">BLASH</m-chip>
            <m-chip :to="`/publish/H_33200_T`">토론</m-chip>
          </m-chip-list>            
          <!-- S banner -->
          <swiper class="swiper">
            <swiper-slide class="slide">
              <div class="banner_wrap">
                <img src="~assets/pc_banner1.png" 
                alt="2022년 3분기 blash 수익률 대회! 
                텐배거에 도전하라! 1-3등 한정판 NFT 지급!" class="pc_banner">
                <img src="~assets/mob_banner1.png" 
                alt="2022년 3분기 blash 수익률 대회! 
                텐배거에 도전하라! 1-3등 한정판 NFT 지급!" class="mob_banner">
              </div>
            </swiper-slide>
            <swiper-slide class="slide">
              <div class="banner_wrap">
                <img src="~assets/pc_banner1.png" 
                alt="2022년 3분기 blash 수익률 대회! 
                텐배거에 도전하라! 1-3등 한정판 NFT 지급!" class="pc_banner">
                <img src="~assets/mob_banner1.png" 
                alt="2022년 3분기 blash 수익률 대회! 
                텐배거에 도전하라! 1-3등 한정판 NFT 지급!" class="mob_banner">
              </div>
            </swiper-slide>
            <swiper-slide class="slide">
              <div class="banner_wrap">
                <img src="~assets/pc_banner1.png" 
                alt="2022년 3분기 blash 수익률 대회! 
                텐배거에 도전하라! 1-3등 한정판 NFT 지급!" class="pc_banner">
                <img src="~assets/mob_banner1.png" 
                alt="2022년 3분기 blash 수익률 대회! 
                텐배거에 도전하라! 1-3등 한정판 NFT 지급!" class="mob_banner">
              </div>
            </swiper-slide>
          </swiper>
          <!-- E banner -->
          <!-- <div class="mgt16">
            <m-textarea :maxlength="1000" :showError="false" :minHeight="textarea1.minHeight"
            :counter="textarea1.counter" :value="textarea1.value" :bottomMessage="textarea1.bottomMessage"
            :height="50" placeholder="저작권 등 다른 사람의 권리를 침해하거나 명예를 훼손하는 게시글은 이용약관과 관련 법률에 의해 제재를 받을 수 있습니다."/>
          </div> -->
          <div class="btn_wrap mgt16">
              <m-button-3 size="large" color="primary" class="full">의견 남기기</m-button-3>
          </div>
        
          <!-- <div class="mgt32 mgb16">최근 작성일 순</div> -->
          <div class="no_data_wrap">
            <div class="ico_top">
              <i class="ico_error"></i>
            </div>
            <div class="com_message font16">
              아직 작성된 토론글이 없습니다
            </div>
          </div>
          <div class="divider1 small mgb16"/>
          <ul class="thumb_list1">
            <li>
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
              <div class="con_area">
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
