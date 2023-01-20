<template>
    <div class="centerarea_box1">
        <div class="con_box">
          <h2 class="line_type">포스트</h2>
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
                <button>
                  <i class="ico ico_plus">+</i>
                  <span>자산추가</span>
                </button>
              </m-chip-list>
            </div>
            <m-chip-list v-dragscroll>
              <template v-for="(name, inx) in ['전체', '공지', 'BEST', '정보', '유머', '자유', '홍보', 'Q&A']">
                <m-chip :lined="inx !== 0">{{name}}</m-chip>
              </template>
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
            <div class="btn_wrap l_row_l mgt16">
              <m-button-3 color="primary" size="large" class="full">
                <i class="ico_pen_w"/>포스트 작성</m-button-3>
            </div>
            <ul class="thumb_list post_new">
              <li class="active">
                <div class="tit_wrap">
                  <p class="badge_wrap">
                    <span class="badge_area">
                        <span class="badge3 small red">공지</span>
                        <span class="badge3 small black line">📌 PIN</span>
                        <span class="badge3 small black line">👋 NEW</span>
                    </span>
                  </p>
                </div>
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
                        <span class="badge operate">운영</span>
                        <span class="badge sup">SUP</span>
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
                  <a href="#">
                    <p class="con_txt">[NEWS] 2022년 08월 16일 주요 뉴스<br/>
                    오늘 미국장 움직일 이슈: 러시아 2월 침공설 언급한 백악관, 아마존 실적발표 명암, 미 고용 호조에 긴축 우려<br/>
                    https://kr.investing.com/news/stock-market-news/article-760933
                    </p>
                    <button class="primary mgb16">상세보기</button>
                    <p class="img"><img src="~assets/test_img.png"></p>
                  </a>
                </div>
                <div class="footer_area">
                  <p class="tag_area">
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
              <li>
                 <div class="tit_wrap">
                  <p class="badge_wrap">
                    <span class="badge_area">
                        <span class="badge3 red">공지</span>
                        <span class="badge3 line black">📌 PIN</span>
                    </span>
                  </p>
                </div>
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
                        <span class="badge operate">운영</span>
                        <span class="badge sup">SUP</span>
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
                  <a href="#">
                    <p class="con_txt">[NEWS] 2022년 08월 16일 주요 뉴스<br/>
                    오늘 미국장 움직일 이슈: 러시아 2월 침공설 언급한 백악관, 아마존 실적발표 명암, 미 고용 호조에 긴축 우려<br/>
                    https://kr.investing.com/news/stock-market-news/article-760933
                    </p>
                    <button class="primary">상세보기</button>
                  </a>
                </div>
                <div class="footer_area">
                  <p class="tag_area">
                    <a href="#">#금리인상</a>
                    <a href="#">#친환경</a>
                    <a href="#">#로봇관련주</a>
                    <a href="#">#최대스무자최대스무자최대스무자최대스무자</a>
                  </p>
                  <div class="ico_wrap">
                    <span class="ico_area">
                      <button class="ico_f ico_thumbsUp">624</button>
                      <span class="ico_f ico_comment">7</span>
                    </span>
                    <span class="btn_area1">
                      1분 전
                      <button class="ico_menu mgl8" color="secondary" label="Auto-Close Menu">
                        menu
                        <q-menu auto-close :offset="[30, 10]">
                          <q-list style="min-width: 80px">
                            <q-item clickable>
                              <q-item-section>신고</q-item-section>
                            </q-item>
                          </q-list>
                        </q-menu>
                      </button>
                    </span>
                  </div>
                </div>
              </li>
              <li>
                 <div class="tit_wrap">
                  <p class="badge_wrap">
                    <span class="badge_area">
                        <span class="badge3 red">공지</span>
                        <span class="badge3 line black">📌 PIN</span>
                    </span>
                  </p>
                </div>
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
                        <span class="badge operate">운영</span>
                        <span class="badge sup">SUP</span>
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
                  <a href="#">
                    <p class="con_txt">[NEWS] 2022년 08월 16일 주요 뉴스<br/>
                    오늘 미국장 움직일 이슈: 러시아 2월 침공설 언급한 백악관, 아마존 실적발표 명암, 미 고용 호조에 긴축 우려<br/>
                    https://kr.investing.com/news/stock-market-news/article-760933
                    </p>
                    <button class="primary">상세보기</button>
                  </a>
                </div>
                <div class="footer_area">
                  <p class="tag_area">
                    <a href="#">#금리인상</a>
                    <a href="#">#친환경</a>
                    <a href="#">#로봇관련주</a>
                    <a href="#">#최대스무자최대스무자최대스무자최대스무자</a>
                  </p>
                  <div class="ico_wrap">
                    <span class="ico_area">
                      <button class="ico_f ico_thumbsUp">624</button>
                      <span class="ico_f ico_comment">7</span>
                    </span>
                    <span class="btn_area1">
                      1분 전
                      <button class="ico_menu mgl8" color="secondary" label="Auto-Close Menu">
                        menu
                        <q-menu auto-close :offset="[30, 10]">
                          <q-list style="min-width: 80px">
                            <q-item clickable>
                              <q-item-section>신고</q-item-section>
                            </q-item>
                          </q-list>
                        </q-menu>
                      </button>
                    </span>
                  </div>
                </div>
              </li>
              <li>
                 <div class="tit_wrap">
                  <p class="badge_wrap">
                    <span class="badge_area">
                        <span class="badge3 red">공지</span>
                        <span class="badge3 line black">📌 PIN</span>
                    </span>
                  </p>
                </div>
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
                        <span class="badge operate">운영</span>
                        <span class="badge sup">SUP</span>
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
                  <a href="#">
                    <p class="con_txt">[NEWS] 2022년 08월 16일 주요 뉴스<br/>
                    오늘 미국장 움직일 이슈: 러시아 2월 침공설 언급한 백악관, 아마존 실적발표 명암, 미 고용 호조에 긴축 우려<br/>
                    https://kr.investing.com/news/stock-market-news/article-760933
                    </p>
                    <button class="primary">상세보기</button>
                  </a>
                </div>
                <div class="footer_area">
                  <p class="tag_area">
                    <a href="#">#금리인상</a>
                    <a href="#">#친환경</a>
                    <a href="#">#로봇관련주</a>
                    <a href="#">#최대스무자최대스무자최대스무자최대스무자</a>
                  </p>
                  <div class="ico_wrap">
                    <span class="ico_area">
                      <button class="ico_f ico_thumbsUp">624</button>
                      <span class="ico_f ico_comment">7</span>
                    </span>
                    <span class="btn_area1">
                      1분 전
                      <button class="ico_menu mgl8" color="secondary" label="Auto-Close Menu">
                        menu
                        <q-menu auto-close :offset="[30, 10]">
                          <q-list style="min-width: 80px">
                            <q-item clickable>
                              <q-item-section>신고</q-item-section>
                            </q-item>
                          </q-list>
                        </q-menu>
                      </button>
                    </span>
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



export default {
  components: { MDialogBlank, Swiper, SwiperSlide, VClamp },
    name: 'A_10000_P',
    
    data() {
        return {
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
