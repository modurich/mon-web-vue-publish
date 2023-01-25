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
            <m-chip-list v-dragscroll>
              <m-chip :to="`/publish/H_33100_T`" :lined="true">인사이트</m-chip>
              <m-chip :to="`/publish/H_33300_T`">BLASH</m-chip>
              <m-chip :to="`/publish/H_33200_T`" :lined="true">토론</m-chip>
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
            <!-- E banner -->
            <div class="between mgb32 mgt16">
              <m-select v-model="select1" :options="options" style="width:150px" />
              <div class="flex">
                <m-toggle v-model="toggle1" :label="`Model is (flipped boolean)`" />
                <span class="mgl8">프리미엄만 보기</span>
              </div>
            </div>
            <div class="divider1 xxsmall"/>
            <ul class="thumb_list">
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
                <a href="#">
                  <div class="tit_wrap">
                    <p class="badge_wrap">
                      <span class="badge_area">
                        <span class="badge3 small brown">코인</span>
                        <span class="badge3 small yellow">BEST</span>
                      </span>
                      <span>매수대기</span>
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
                      <div class="img_area"><img src="~assets/ico_upimg01.png" class="ico_upimg01" alt="" /></div>
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
                      <span class="ico_f ico_thumbsUp">624</span>
                      <span class="ico_f ico_comment">7</span>
                      <span class="ico_f ico_view">1.2</span>
                      <span class="ico_f ico_star_s primary">4.7</span>
                    </span>
                    <span>2022.10.26</span>
                  </div>
                </div>
              </li>


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
                      <div class="img_area"><img src="~assets/ico_upimg01.png" class="ico_upimg01" alt="" /></div>
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
                      <span class="ico_f ico_thumbsUp">624</span>
                      <span class="ico_f ico_comment">7</span>
                      <span class="ico_f ico_view">1.2</span>
                      <span class="ico_f ico_star_s primary">4.7</span>
                    </span>
                    <span>2022.10.26</span>
                  </div>
                  <div class="btn_area">
                    <span class="txt_area"><i class="ico_clock" />보팅 2일 남음</span>
                    <m-button-3 color="primary" size="small" @click="dailog1 = true"><i class="ico_vote" /><span class="point">1,200</span> / 2000 VP
                    </m-button-3>
                  </div>
                </div>
              </li>


              <li class="active">
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
                <a href="#">
                  <div class="tit_wrap">
                    <p class="badge_wrap">
                      <span class="badge_area">
                        <span class="badge3 small brown">코인</span>
                        <span class="badge3 small yellow">BEST</span>
                        <span class="badge3 small pink"><i class="ico_crown" />프리미엄</span>
                      </span>
                      <span>D-120</span>
                    </p>
                    <p class="tit_txt">제목은 2글자 이상 최대 40자입니다</p>
                  </div>
                  <div class="blash_box premium">
                    <div class="tit_wrap">
                      <span class="txt01"><i class="ico_crown" />프리미엄 BLASH</span>
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
                      <div class="img_area"><img src="~assets/ico_upimg02.png" class="ico_upimg02" alt="" /></div>
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
                      <span class="ico_f ico_thumbsUp">624</span>
                      <span class="ico_f ico_comment">7</span>
                      <span class="ico_f ico_view">1.2</span>
                      <span class="ico_f ico_star_s primary">4.7</span>
                    </span>
                    <span>2022.10.26</span>
                  </div>
                  <div class="btn_area">
                    <span class="txt_area"><i class="ico_clock" />보팅 2일 남음</span>
                    <m-button-3 color="darkPurple" size="small" @click="dailog1 = true"><i class="ico_check01" /><span class="point">1,200</span> / 2000 VP
                    </m-button-3>
                  </div>
                </div>
              </li>
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
                <a href="#">
                  <div class="tit_wrap">
                    <p class="badge_wrap">
                      <span class="badge_area">
                        <span class="badge3 small brown">코인</span>
                        <span class="badge3 small yellow">BEST</span>
                        <span class="badge3 small pink"><i class="ico_crown" />프리미엄</span>
                      </span>
                      <span>종료</span>
                    </p>
                    <p class="tit_txt">제목은 2글자 이상 최대 40자입니다</p>
                  </div>
                  <div class="blash_box premium">
                    <div class="tit_wrap">
                      <span class="txt01"><i class="ico_crown" />프리미엄 BLASH</span>
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
                      <div class="img_area"><img src="~assets/ico_stamp.svg" alt="성공" /></div>
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
                      <span class="ico_f ico_thumbsUp">624</span>
                      <span class="ico_f ico_comment">7</span>
                      <span class="ico_f ico_view">1.2</span>
                      <span class="ico_f ico_star_s primary">4.7</span>
                    </span>
                    <span>2022.10.26</span>
                  </div>
                </div>
              </li>


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
                <a href="#">
                  <div class="tit_wrap">
                    <p class="badge_wrap">
                      <span class="badge_area">
                        <span class="badge3 small brown">코인</span>
                        <span class="badge3 small yellow">BEST</span>
                        <span class="badge3 small pink"><i class="ico_crown" />프리미엄</span>
                      </span>
                      <span>종료</span>
                    </p>
                    <p class="tit_txt">제목은 2글자 이상 최대 40자입니다</p>
                  </div>
                  <div class="blash_box premium">
                    <div class="tit_wrap">
                      <span class="txt01"><i class="ico_crown" />프리미엄 BLASH</span>
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
                      <div class="img_area"><img src="~assets/ico_stamp01.svg" alt="실패" /></div>
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
                      <span class="ico_f ico_thumbsUp">624</span>
                      <span class="ico_f ico_comment">7</span>
                      <span class="ico_f ico_view">1.2</span>
                      <span class="ico_f ico_star_s primary">4.7</span>
                    </span>
                    <span>2022.10.26</span>
                  </div>
                </div>
              </li>
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
                <a href="#">
                  <div class="tit_wrap">
                    <p class="badge_wrap">
                      <span class="badge_area">
                        <span class="badge3 small brown">코인</span>
                        <span class="badge3 small yellow">BEST</span>
                        <span class="badge3 small pink"><i class="ico_crown" />프리미엄</span>
                      </span>
                      <span>종료</span>
                    </p>
                    <p class="tit_txt">제목은 2글자 이상 최대 40자입니다</p>
                  </div>
                  <div class="blash_box premium">
                    <div class="tit_wrap">
                      <span class="txt01"><i class="ico_crown" />프리미엄 BLASH</span>
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
                      <div class="img_area"><img src="~assets/ico_stamp02.svg" alt="무효" /></div>
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
                      <span class="ico_f ico_thumbsUp">624</span>
                      <span class="ico_f ico_comment">7</span>
                      <span class="ico_f ico_view">1.2</span>
                      <span class="ico_f ico_star_s primary">4.7</span>
                    </span>
                    <span>2022.10.26</span>
                  </div>
                </div>
              </li>
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
                <a href="#">
                  <div class="tit_wrap">
                    <p class="badge_wrap">
                      <span class="badge_area">
                        <span class="badge3 small brown">코인</span>
                        <span class="badge3 small yellow">BEST</span>
                        <span class="badge3 small pink"><i class="ico_crown" />프리미엄</span>
                      </span>
                      <span>종료</span>
                    </p>
                    <p class="tit_txt">제목은 2글자 이상 최대 40자입니다</p>
                  </div>
                  <div class="blash_box premium">
                    <div class="tit_wrap">
                      <span class="txt01"><i class="ico_crown" />프리미엄 BLASH</span>
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
                      <div class="img_area"><img src="~assets/ico_stamp03.svg" alt="매수실패" /></div>
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
                      <span class="ico_f ico_thumbsUp">624</span>
                      <span class="ico_f ico_comment">7</span>
                      <span class="ico_f ico_view">1.2</span>
                      <span class="ico_f ico_star_s primary">4.7</span>
                    </span>
                    <span>2022.10.26</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <q-dialog v-model="dailog1" position="bottom">
          <div class="bottom_sheet_wrap">
            <h3 class="between">
              <span class="font16 txt_dk">보팅</span>
              <span class="font12 secondary medium flex"><i class="ico_time_y"/>2일 23:53:06</span>
            </h3>
            <div class="voting_list_wrap">
              <ul class="voting_list">
                <li>
                  <span>누적 보팅 파워 / 전체 보팅 한도</span>
                  <span><span class="primary">2,000</span> / 10,000VP</span>
                </li>
                <li>
                  <span>전체 보팅 보상 (예상)</span>
                  <span class="primary flex">324.1234567890<i class="ico_mon"/></span>
                </li>
              </ul>
              <ul class="voting_list">
                <li>
                  <span>내 보팅 한도</span>
                  <span>10VP</span>
                </li>
                <li>
                  <span>내 보팅 보상 (예상)</span>
                  <span class="primary flex">324.1234567890<i class="ico_mon"/></span>
                </li>
                <li class="col2">
                  <span>보팅 수량</span>
                  <span class="stepper_wrap">
                    <button class="btn_minus">-</button>
                    <span class="txt_area">5</span>
                    <button class="btn_plus">+</button>
                  </span>
                </li>
              </ul>
            </div>
            <div class="btn_wrap mgt32">
                <m-button-3 size="large" color="primary" class="full">
                  <i class="ico_vote big mgr16"/>보팅하기
                </m-button-3>
            </div>
            <div class="txt_dk center mgt32">종목 공개 후 보팅할 수 있어요</div>
            <div class="btn_wrap mgt32">
                <m-button-3 size="large" color="pink" class="full">
                  종목 공개하기 (50 sMON)
                </m-button-3>
            </div>
          </div>
        </q-dialog>
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
            dailog1: ref(false),
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
