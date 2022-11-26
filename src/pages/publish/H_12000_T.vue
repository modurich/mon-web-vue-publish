<template>
    <div class="centerarea_box1">
        <div class="con_box">
          <h2 class="line_type">프로필</h2>
          <m-tabs class="line_type large" v-model="tab1" :items="tabs"/>
          <div class="tab_contents" v-if="tab1 == 'A'">
            
          </div>
          <div class="tab_contents" v-if="tab1 == 'B'">
           <!-- S 발견-->
            <!-- S 오늘의 테마 -->
            <h3 class="between">
              <span>오늘의 테마</span>
            </h3>
            <p class="mgt16">오늘 이슈가 되는 테마</p>
            <m-tabs class="card_type small mgt16" v-model="tab2" :items="tabs1"/>
            <div class="tab_contents" v-if="tab2 == 'A'">
              <ul class="thema_list1 mgt16">
                <li>
                  <div class="prd_img">
                    <div class="badge_area">
                      <span class="badge1 semiconductor">반도체</span>
                    </div>
                    <div class="tit_area">
                      <span class="txt01">비메모리반도체</span>
                    </div>
                  </div>
                  <div class="ico_area">
                    <span class="tag_blue">+7.64%</span>
                  </div>
                </li>
                <li>
                  <div class="prd_img">
                    <div class="badge_area">
                      <span class="badge1 semiconductor">반도체</span>
                    </div>
                    <div class="tit_area">
                      <span class="txt01">반도체설계계</span>
                    </div>
                  </div>
                  <div class="ico_area">
                    <span class="tag_blue">+7.64%</span>
                  </div>
                </li>
                <li>
                  <div class="prd_img">
                    <div class="badge_area">
                      <span class="badge1 semiconductor">반도체</span>
                    </div>
                    <div class="tit_area">
                      <span class="txt01">반도체부품</span>
                    </div>
                  </div>
                  <div class="ico_area">
                    <span class="tag_blue">+7.64%</span>
                  </div>
                </li>
                <li>
                  <div class="prd_img">
                    <div class="badge_area">
                      <span class="badge1 semiconductor">반도체</span>
                    </div>
                    <div class="tit_area">
                      <span class="txt01">차량용반도체</span>
                    </div>
                  </div>
                  <div class="ico_area">
                    <span class="tag_red">-3.64%</span>
                  </div>
                </li>
                <li>
                  <div class="prd_img">
                    <div class="badge_area">
                      <span class="badge1 semiconductor">반도체</span>
                    </div>
                    <div class="tit_area">
                      <span class="txt01">반도체부품</span>
                    </div>
                  </div>
                  <div class="ico_area">
                    <span class="tag_blue">+7.64%</span>
                  </div>
                </li>
                <li>
                  <div class="prd_img">
                    <div class="badge_area">
                      <span class="badge1 semiconductor">반도체</span>
                    </div>
                    <div class="tit_area">
                      <span class="txt01">차량용반도체</span>
                    </div>
                  </div>
                  <div class="ico_area">
                    <span class="tag_blue">+7.64%</span>
                  </div>
                </li>
              </ul>
              <div class="btn_wrap l_row_l">
                <m-button-3 size="large" lined color="primary" class="full">모두보기</m-button-3>
              </div>
            </div>
            <div class="tab_contents" v-if="tab2 == 'B'">주식</div>
            <div class="tab_contents" v-if="tab2 == 'C'">코인</div>
            <!-- E 오늘의 테마 -->
            <div class="divider"/>
            <!-- S 실시간 순위 -->
            <h3 class="between">
              <span>실시간 순위</span>
            </h3>
            <m-tabs class="card_type small mgt32" v-model="tab3" :items="tabs2"/>
            <div class="tab_contents" v-if="tab3 == 'A'">
              <m-select class="mgt16" v-model="select1" :options="options" />
              <ul class="product_list">
                <li>
                  <div class="prd_img">
                    <div class="img_area small">
                      <img src="~assets/prd_logo.png" alt="logo" />
                    </div>
                    <div>
                      <div class="font16 txt_dk">삼성전자우</div>
                      <div class="txt02">코스피 005930</div>
                    </div>
                  </div>
                  <div class="right flex">
                    <span>
                      <span class="tag_blue mgb4">+1.24%</span><br/>
                      <span class="font12">₩ 352,100</span>
                    </span>
                    <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                    indeterminate-icon="help" />
                  </div> 
                </li>
                <li>
                  <div class="prd_img">
                    <div class="img_area small">
                      <img src="~assets/prd_logo.png" alt="logo" />
                    </div>
                    <div>
                      <div class="font16 txt_dk">삼성전자우</div>
                      <div class="txt02">코스피 005930</div>
                    </div>
                  </div>
                  <div class="right flex">
                    <span>
                      <span class="tag_red mgb4">-12.26%</span><br/>
                      <span class="font12">₩ 352,100</span>
                    </span>
                    <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                    indeterminate-icon="help" />
                  </div> 
                </li>
                <li>
                  <div class="prd_img">
                    <div class="img_area small">
                      <img src="~assets/prd_logo.png" alt="logo" />
                    </div>
                    <div>
                      <div class="font16 txt_dk">삼성전자우</div>
                      <div class="txt02">코스피 005930</div>
                    </div>
                  </div>
                  <div class="right flex">
                    <span>
                      <span class="tag_red mgb4">-12.26%</span><br/>
                      <span class="font12">₩ 352,100</span>
                    </span>
                    <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                    indeterminate-icon="help" />
                  </div> 
                </li>
                <li>
                  <div class="prd_img">
                    <div class="img_area small">
                      <img src="~assets/prd_logo.png" alt="logo" />
                    </div>
                    <div>
                      <div class="font16 txt_dk">삼성전자우</div>
                      <div class="txt02">코스피 005930</div>
                    </div>
                  </div>
                  <div class="right flex">
                    <span>
                      <span class="tag_red mgb4">-12.26%</span><br/>
                      <span class="font12">₩ 352,100</span>
                    </span>
                    <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                    indeterminate-icon="help" />
                  </div> 
                </li>
                <li>
                  <div class="prd_img">
                    <div class="img_area small">
                      <img src="~assets/prd_logo.png" alt="logo" />
                    </div>
                    <div>
                      <div class="font16 txt_dk">삼성전자우</div>
                      <div class="txt02">코스피 005930</div>
                    </div>
                  </div>
                  <div class="right flex">
                    <span>
                      <span class="tag_red mgb4">-12.26%</span><br/>
                      <span class="font12">₩ 352,100</span>
                    </span>
                    <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                    indeterminate-icon="help" />
                  </div> 
                </li>
              </ul>
            </div>
            <div class="tab_contents" v-if="tab3 == 'B'">주식</div>
            <div class="tab_contents" v-if="tab3 == 'C'">코인</div>
            <!-- E 실시간 순위 -->
            <div class="divider"/>
            <h3 class="between">
              <span>BLASH PRO 전문가</span>
            </h3>
            <p class="mgt16">투자예측의 고수</p>
            <div class="swiper_wrap mgt32">
              <swiper class="swiper" :options="swiperOption">
                  <swiper-slide>
                    <div class="recommend_list">
                      <div class="img_area">
                        <img src="~assets/profile_img2.png" alt="profile"/>
                      </div>
                      <div class="txt_tit">몬스탁닉넴열글자까지</div>
                      <span class="badge_area">
                        <span class="badge pro">PRO</span>
                        <span class="badge pl1">PL1</span>
                      </span>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="recommend_list">
                      <div class="img_area">
                        <img src="~assets/profile_img3.png" alt="profile"/>
                      </div>
                      <div class="txt_tit">몬스탁닉네임02</div>
                      <span class="badge_area">
                        <span class="badge pro">PRO</span>
                        <span class="badge pl1">PL1</span>
                      </span>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="recommend_list">
                      <div class="img_area">
                        <img src="~assets/profile_img4.png" alt="profile"/>
                      </div>
                      <div class="txt_tit">몬스탁닉네임03</div>
                      <span class="badge_area">
                        <span class="badge pro">PRO</span>
                        <span class="badge pl1">PL1</span>
                      </span>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="recommend_list">
                      <div class="img_area">
                        <img src="~assets/profile_img1.png" alt="profile"/>
                      </div>
                      <div class="txt_tit">몬스탁닉네임04</div>
                      <span class="badge_area">
                        <span class="badge pro">PRO</span>
                        <span class="badge pl1">PL1</span>
                      </span>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="recommend_list">
                      <div class="img_area">
                        <img src="~assets/profile_img1.png" alt="profile"/>
                      </div>
                      <div class="txt_tit">몬스탁닉네임05</div>
                      <span class="badge_area">
                        <span class="badge pro">PRO</span>
                        <span class="badge pl1">PL1</span>
                      </span>
                    </div>
                  </swiper-slide>
              </swiper>
            </div>
            <div class="divider"/>
            <h3 class="between">
              <span>“자산명”에 관심이 있나요?</span>
            </h3>
            <p class="mgt16">관련 자산을 찾아봤어요</p>
            <ul class="product_list">
              <li>
                <div class="prd_img">
                  <div class="img_area small">
                    <img src="~assets/prd_logo.png" alt="logo" />
                  </div>
                  <div>
                    <div class="font16 txt_dk">삼성전자우</div>
                    <div class="txt02">코스피 005930</div>
                  </div>
                </div>
                <div class="right flex">
                  <span>
                    <span class="tag_blue mgb4">+1.24%</span><br/>
                    <span class="font12">₩ 352,100</span>
                  </span>
                </div> 
              </li>
              <li>
                <div class="prd_img">
                  <div class="img_area small">
                    <img src="~assets/prd_logo.png" alt="logo" />
                  </div>
                  <div>
                    <div class="font16 txt_dk">삼성전자우</div>
                    <div class="txt02">코스피 005930</div>
                  </div>
                </div>
                <div class="right flex">
                  <span>
                    <span class="tag_red mgb4">-12.26%</span><br/>
                    <span class="font12">₩ 352,100</span>
                  </span>
                </div> 
              </li>
              <li>
                <div class="prd_img">
                  <div class="img_area small">
                    <img src="~assets/prd_logo.png" alt="logo" />
                  </div>
                  <div>
                    <div class="font16 txt_dk">삼성전자우</div>
                    <div class="txt02">코스피 005930</div>
                  </div>
                </div>
                <div class="right flex">
                  <span>
                    <span class="tag_red mgb4">-12.26%</span><br/>
                    <span class="font12">₩ 352,100</span>
                  </span>
                </div> 
              </li>
            </ul>
            <div class="divider"/>
            <!-- S 인사이트 인기 종목 -->
            <h3 class="between">
              <span>인사이트 인기 종목</span>
            </h3>
            <p class="mgt16">관련 자산을 찾아봤어요</p>
            <m-tabs class="card_type small mgt16" v-model="tab4" :items="tabs3"/>
            <div class="tab_contents" v-if="tab4 == 'A'">
              <ul class="product_list mgt16">
                <li>
                  <div class="prd_img">
                    <div class="img_area small">
                      <img src="~assets/prd_logo.png" alt="logo" />
                    </div>
                    <div>
                      <div class="font16 txt_dk">삼성전자우</div>
                      <div class="txt02">코스피 005930</div>
                    </div>
                  </div>
                  <div class="right flex">
                    <span>
                      <span class="tag_blue mgb4">+1.24%</span><br/>
                      <span class="font12">₩ 352,100</span>
                    </span>
                    <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                    indeterminate-icon="help" />
                  </div> 
                </li>
                <li>
                  <div class="prd_img">
                    <div class="img_area small">
                      <img src="~assets/prd_logo.png" alt="logo" />
                    </div>
                    <div>
                      <div class="font16 txt_dk">삼성전자우</div>
                      <div class="txt02">코스피 005930</div>
                    </div>
                  </div>
                  <div class="right flex">
                    <span>
                      <span class="tag_red mgb4">-12.26%</span><br/>
                      <span class="font12">₩ 352,100</span>
                    </span>
                    <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                    indeterminate-icon="help" />
                  </div> 
                </li>
                <li>
                  <div class="prd_img">
                    <div class="img_area small">
                      <img src="~assets/prd_logo.png" alt="logo" />
                    </div>
                    <div>
                      <div class="font16 txt_dk">삼성전자우</div>
                      <div class="txt02">코스피 005930</div>
                    </div>
                  </div>
                  <div class="right flex">
                    <span>
                      <span class="tag_red mgb4">-12.26%</span><br/>
                      <span class="font12">₩ 352,100</span>
                    </span>
                    <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                    indeterminate-icon="help" />
                  </div> 
                </li>
              </ul>
              <div class="btn_wrap l_row_l">
                <m-button-3 size="large" lined color="primary" class="full">모두보기</m-button-3>
              </div>
            </div>
            <div class="tab_contents" v-if="tab4 == 'B'">상승예측</div>
            <div class="tab_contents" v-if="tab4 == 'C'">하락예측</div>
            <!-- E 인사이트 인기 종목 -->
            <div class="divider"/>
            <h3 class="between">
              <span>인기태그</span>
            </h3>
            <p class="mgt16">인기많은 태그를 모았어요</p>
            <ul class="tag_list">
              <li>#삼성전자<span class="round_tag">3,266</span></li>
              <li>#삼성전자<span class="round_tag">3,266</span></li>
              <li>##삼성전자실적<span class="round_tag">3,266</span></li>
              <li>##삼성전자매출<span class="round_tag">3,266</span></li>
              <li>#삼성전자<span class="round_tag">3,266</span></li>
              <li>#삼성전자실적<span class="round_tag">3,266</span></li>
              <li>#삼성전자<span class="round_tag">3,266</span></li>
              <li>#삼성전자<span class="round_tag">3,266</span></li>
              <li>#최대스무자최대스무자최대스무자최대스무자<span class="round_tag">3,266</span></li>
            </ul>
            <div class="btn_wrap l_row_l">
              <m-button-3 size="large" lined color="primary" class="full">모두보기</m-button-3>
            </div>
            <div class="divider"/>
             <!-- S 추천 BLASH -->
            <h3 class="between">
              <span>추천 BLASH</span>
            </h3>
            <p class="mgt16 mgb32">BLASH 구독하고 시그널 받아보세요</p>
            <q-carousel v-model="slide" 
              transition-prev="slide-right" 
              transition-next="slide-left" 
              swipeable 
              animated     
              width="100%"
              height="500px"
              control-color="primary" 
              class="ranking_slide ico_box" 
              navigation  arrows>
            <q-carousel-slide name="1">
              <ul class="thumb_list">
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
                          <span class="badge confirm">인증</span>
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
                      <div class="img_area"><img src="~assets/ico_upimg01.png" class="ico_upimg01" alt=""/></div>
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
                      <span>2022.10.26</span>
                    </div>
                  </div>
                </li>
              </ul>
            </q-carousel-slide>
            <q-carousel-slide name="2">
              <ul class="thumb_list">
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
                          <span class="badge confirm">인증</span>
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
                      <div class="img_area"><img src="~assets/ico_upimg01.png" class="ico_upimg01" alt=""/></div>
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
                      <span>2022.10.26</span>
                    </div>
                  </div>
                </li>
              </ul>
            </q-carousel-slide>
            </q-carousel>
            <div class="btn_wrap l_row_l mgt16">
              <m-button-3 size="large" lined color="primary" class="full">모두보기</m-button-3>
            </div>
            <!-- E 추천 BLASH -->
            <div class="divider mgb0"/>
            <!-- S 배너 -->
            <div class="banner_wrap01">
              <img src="~assets/pc_banner01.png" class="pc_only" alt="가격대별 종목을 모아봤어요!"/>
              <img src="~assets/mob_banner01.png" class="mob_only" alt="가격대별 종목을 모아봤어요!"/>
            </div>
            <!-- E 배너 -->
            <div class="divider mgt0"/>
            <!-- S 상승률 TOP -->
            <h3 class="between">
              <span>상승률 TOP</span>
            </h3>
            <p class="tit_txt mgt16">수익률의 변화가 많아요</p>
            <m-tabs class="card_type small mgt16" v-model="tab5" :items="tabs4"/>
            <div class="tab_contents" v-if="tab5 == 'A'">
              <m-select class="mgt16" v-model="select1" :options="options" />
              <ul class="product_list">
                <li>
                  <div class="prd_img">
                    <div class="img_area small">
                      <img src="~assets/prd_logo.png" alt="logo" />
                    </div>
                    <div>
                      <div class="font16 txt_dk">삼성전자우</div>
                      <div class="txt02">코스피 005930</div>
                    </div>
                  </div>
                  <div class="right flex">
                    <span>
                      <span class="tag_blue mgb4">+1.24%</span><br/>
                      <span class="font12">₩ 352,100</span>
                    </span>
                    <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                    indeterminate-icon="help" />
                  </div> 
                </li>
                <li>
                  <div class="prd_img">
                    <div class="img_area small">
                      <img src="~assets/prd_logo.png" alt="logo" />
                    </div>
                    <div>
                      <div class="font16 txt_dk">삼성전자우</div>
                      <div class="txt02">코스피 005930</div>
                    </div>
                  </div>
                  <div class="right flex">
                    <span>
                      <span class="tag_red mgb4">-12.26%</span><br/>
                      <span class="font12">₩ 352,100</span>
                    </span>
                    <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                    indeterminate-icon="help" />
                  </div> 
                </li>
                <li>
                  <div class="prd_img">
                    <div class="img_area small">
                      <img src="~assets/prd_logo.png" alt="logo" />
                    </div>
                    <div>
                      <div class="font16 txt_dk">삼성전자우</div>
                      <div class="txt02">코스피 005930</div>
                    </div>
                  </div>
                  <div class="right flex">
                    <span>
                      <span class="tag_red mgb4">-12.26%</span><br/>
                      <span class="font12">₩ 352,100</span>
                    </span>
                    <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                    indeterminate-icon="help" />
                  </div> 
                </li>
                <li>
                  <div class="prd_img">
                    <div class="img_area small">
                      <img src="~assets/prd_logo.png" alt="logo" />
                    </div>
                    <div>
                      <div class="font16 txt_dk">삼성전자우</div>
                      <div class="txt02">코스피 005930</div>
                    </div>
                  </div>
                  <div class="right flex">
                    <span>
                      <span class="tag_red mgb4">-12.26%</span><br/>
                      <span class="font12">₩ 352,100</span>
                    </span>
                    <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                    indeterminate-icon="help" />
                  </div> 
                </li>
                <li>
                  <div class="prd_img">
                    <div class="img_area small">
                      <img src="~assets/prd_logo.png" alt="logo" />
                    </div>
                    <div>
                      <div class="font16 txt_dk">삼성전자우</div>
                      <div class="txt02">코스피 005930</div>
                    </div>
                  </div>
                  <div class="right flex">
                    <span>
                      <span class="tag_red mgb4">-12.26%</span><br/>
                      <span class="font12">₩ 352,100</span>
                    </span>
                    <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                    indeterminate-icon="help" />
                  </div> 
                </li>
              </ul>
            </div>
            <div class="tab_contents" v-if="tab5 == 'B'">주식</div>
            <div class="tab_contents" v-if="tab5 == 'C'">코인</div>
            <div class="btn_wrap l_row_l">
              <m-button-3 size="large" lined color="primary" class="full">모두보기</m-button-3>
            </div>
            <!-- E 상승률 TOP -->
            <div class="divider"/>
            <!-- S 하락률 TOP -->
            <h3 class="between">
              <span>하락률 TOP</span>
            </h3>
            <p class="tit_txt mgt16">수익률의 변화가 많아요</p>
            <m-tabs class="card_type small mgt16" v-model="tab6" :items="tabs5"/>
            <div class="tab_contents" v-if="tab6 == 'A'">
              <m-select class="mgt16" v-model="select1" :options="options" />
              <ul class="product_list">
                <li>
                  <div class="prd_img">
                    <div class="img_area small">
                      <img src="~assets/prd_logo.png" alt="logo" />
                    </div>
                    <div>
                      <div class="font16 txt_dk">삼성전자우</div>
                      <div class="txt02">코스피 005930</div>
                    </div>
                  </div>
                  <div class="right flex">
                    <span>
                      <span class="tag_blue mgb4">+1.24%</span><br/>
                      <span class="font12">₩ 352,100</span>
                    </span>
                    <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                    indeterminate-icon="help" />
                  </div> 
                </li>
                <li>
                  <div class="prd_img">
                    <div class="img_area small">
                      <img src="~assets/prd_logo.png" alt="logo" />
                    </div>
                    <div>
                      <div class="font16 txt_dk">삼성전자우</div>
                      <div class="txt02">코스피 005930</div>
                    </div>
                  </div>
                  <div class="right flex">
                    <span>
                      <span class="tag_red mgb4">-12.26%</span><br/>
                      <span class="font12">₩ 352,100</span>
                    </span>
                    <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                    indeterminate-icon="help" />
                  </div> 
                </li>
                <li>
                  <div class="prd_img">
                    <div class="img_area small">
                      <img src="~assets/prd_logo.png" alt="logo" />
                    </div>
                    <div>
                      <div class="font16 txt_dk">삼성전자우</div>
                      <div class="txt02">코스피 005930</div>
                    </div>
                  </div>
                  <div class="right flex">
                    <span>
                      <span class="tag_red mgb4">-12.26%</span><br/>
                      <span class="font12">₩ 352,100</span>
                    </span>
                    <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                    indeterminate-icon="help" />
                  </div> 
                </li>
                <li>
                  <div class="prd_img">
                    <div class="img_area small">
                      <img src="~assets/prd_logo.png" alt="logo" />
                    </div>
                    <div>
                      <div class="font16 txt_dk">삼성전자우</div>
                      <div class="txt02">코스피 005930</div>
                    </div>
                  </div>
                  <div class="right flex">
                    <span>
                      <span class="tag_red mgb4">-12.26%</span><br/>
                      <span class="font12">₩ 352,100</span>
                    </span>
                    <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                    indeterminate-icon="help" />
                  </div> 
                </li>
                <li>
                  <div class="prd_img">
                    <div class="img_area small">
                      <img src="~assets/prd_logo.png" alt="logo" />
                    </div>
                    <div>
                      <div class="font16 txt_dk">삼성전자우</div>
                      <div class="txt02">코스피 005930</div>
                    </div>
                  </div>
                  <div class="right flex">
                    <span>
                      <span class="tag_red mgb4">-12.26%</span><br/>
                      <span class="font12">₩ 352,100</span>
                    </span>
                    <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                    indeterminate-icon="help" />
                  </div> 
                </li>
              </ul>
            </div>
            <div class="tab_contents" v-if="tab6 == 'B'">주식</div>
            <div class="tab_contents" v-if="tab6 == 'C'">코인</div>
            <div class="btn_wrap l_row_l">
              <m-button-3 size="large" lined color="primary" class="full">모두보기</m-button-3>
            </div>
            <!-- E 하락률 TOP -->
            <div class="divider"/>
            <!-- S 팔로우 추천 -->
            <h3 class="between">
              <span>팔로우 추천</span>
            </h3>
            <p class="tit_txt mgt16">팔로우 하고 소식 받아보세요</p>
            <m-tabs class="card_type small mgt16" v-model="tab7" :items="tabs6"/>
            <div class="tab_contents" v-if="tab7 == 'A'">
              <ul class="follow_info_wrap mgt16">
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
              <li>
                <div class="my_profile">
                  <div class="img_area">
                    <img src="~assets/profile_img2.png" alt="profile"/>
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
              <li>
                <div class="my_profile">
                  <div class="img_area">
                    <img src="~assets/profile_img3.png" alt="profile"/>
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
              <li>
                <div class="my_profile">
                  <div class="img_area">
                    <img src="~assets/profile_img4.png" alt="profile"/>
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
              <li>
                <div class="my_profile">
                  <div class="img_area">
                    <img src="~assets/profile_img4.png" alt="profile"/>
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
            </div>
            <div class="tab_contents" v-if="tab7 == 'B'">주식</div>
            <div class="tab_contents" v-if="tab7 == 'C'">코인</div>
            <div class="btn_wrap l_row_l">
              <m-button-3 size="large" lined color="primary" class="full">모두보기</m-button-3>
            </div>
            <!-- E 팔로우 추천 -->
            <div class="divider"/>
            <!-- S 실시간 인기 토론 -->
            <h3 class="between">
              <span>실시간 인기 토론</span>
            </h3>
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
                      <span class="badge_area">
                        <span class="badge pro">PRO</span>
                        <span class="badge pl1">PL1</span>
                      </span>
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
                      <span class="badge_area">
                        <span class="badge pro">PRO</span>
                        <span class="badge pl1">PL1</span>
                      </span>
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
            <div class="btn_wrap l_row_l mgt32">
              <m-button-3 size="large" lined color="primary" class="full">모두보기</m-button-3>
            </div>
            <!-- E 실시간 인기 토론 -->
            <div class="divider"/>
            <!-- S 인기 토론 자산 -->
            <h3 class="between">
              <span>인기 토론 자산</span>
            </h3>
            <p class="tit_txt mgt16">토론이 많은 자산을 모아봤어요</p>
            <ul class="product_list">
              <li>
                <div class="prd_img">
                  <span class="txt_number primary">1</span>
                  <div class="img_area small">
                    <img src="~assets/prd_logo.png" alt="profile" />
                  </div>
                  <div class="tit_area">
                    <span class="txt01">삼성전자우</span>
                    <span class="txt02">
                      코스피 005930
                    </span>
                  </div>
                </div>
                <div class="ico_area">
                  <a href="#" class="link_view bold">
                    <span class="txt_gray">최근</span> 000<span class="txt_gray">개</span>
                  </a>
                </div>
              </li>
              <li>
                <div class="prd_img">
                  <span class="txt_number primary">2</span>
                  <div class="img_area small">
                    <img src="~assets/prd_logo.png" alt="profile" />
                  </div>
                  <div class="tit_area">
                    <span class="txt01">삼성전자우</span>
                    <span class="txt02">
                      코스피 005930
                    </span>
                  </div>
                </div>
                <div class="ico_area">
                  <a href="#" class="link_view bold">
                    <span class="txt_gray">최근</span> 000<span class="txt_gray">개</span>
                  </a>
                </div>
              </li>
              <li>
                <div class="prd_img">
                  <span class="txt_number primary">3</span>
                  <div class="img_area small">
                    <img src="~assets/prd_logo.png" alt="profile" />
                  </div>
                  <div class="tit_area">
                    <span class="txt01">삼성전자우</span>
                    <span class="txt02">
                      코스피 005930
                    </span>
                  </div>
                </div>
                <div class="ico_area">
                  <a href="#" class="link_view bold">
                    <span class="txt_gray">최근</span> 000<span class="txt_gray">개</span>
                  </a>
                </div>
              </li>
              <li>
                <div class="prd_img">
                  <span class="txt_number primary">4</span>
                  <div class="img_area small">
                    <img src="~assets/prd_logo.png" alt="profile" />
                  </div>
                  <div class="tit_area">
                    <span class="txt01">삼성전자우</span>
                    <span class="txt02">
                      코스피 005930
                    </span>
                  </div>
                </div>
                <div class="ico_area">
                  <a href="#" class="link_view bold">
                    <span class="txt_gray">최근</span> 000<span class="txt_gray">개</span>
                  </a>
                </div>
              </li>
              <li>
                <div class="prd_img">
                  <span class="txt_number primary">5</span>
                  <div class="img_area small">
                    <img src="~assets/prd_logo.png" alt="profile" />
                  </div>
                  <div class="tit_area">
                    <span class="txt01">삼성전자우</span>
                    <span class="txt02">
                      코스피 005930
                    </span>
                  </div>
                </div>
                <div class="ico_area">
                  <a href="#" class="link_view bold">
                    <span class="txt_gray">최근</span> 000<span class="txt_gray">개</span>
                  </a>
                </div>
              </li>
            </ul>
            <!-- E 인기 토론 자산 -->
            <div class="divider"/>
             <!-- S 인기 포스트 -->
            <h3 class="between">
              <span>인기 포스트</span>
            </h3>
            <p class="tit_txt mgt16">이슈되는 정보를 확인해보세요</p>
            <ul class="thumb_list post">
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
                        <span class="badge confirm">인증</span>
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
                <div class="tit_wrap">
                  <p class="badge_wrap">
                    <span class="badge_area">
                        <span class="badge3 gray">자유</span>
                        <span class="badge3 line black">👋 NEW</span>
                    </span>
                  </p>
                </div>
                <div class="con_area">
                  <p class="con_txt">[NEWS] 2022년 08월 16일 주요 뉴스<br/>
                  오늘 미국장 움직일 이슈: 러시아 2월 침공설 언급한 백악관, 아마존 실적발표 명암, 미 고용 호조에 긴축 우려<br/>
                  https://kr.investing.com/news/stock-market-news/article-760933
                  </p>
                  <button class="primary">상세보기</button>
                </div>
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
                <div class="top_wrap">
                  <div class="my_profile">
                    <div class="img_area">
                      <img src="~assets/profile_img1.png" alt="profile"/>
                    </div>
                    <div class="tit_area">
                      <span class="txt_tit">몬스탁닉넴열글자까지</span>
                      <span class="badge_area">
                        <span class="badge pro">PRO</span>
                        <span class="badge confirm">인증</span>
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
                <div class="tit_wrap">
                  <p class="badge_wrap">
                    <span class="badge_area">
                        <span class="badge3 gray">정보</span>
                    </span>
                  </p>
                </div>
                <div class="con_area">
                  <p class="con_txt">[NEWS] 2022년 08월 16일 주요 뉴스<br/>
                  오늘 미국장 움직일 이슈: 러시아 2월 침공설 언급한 백악관, 아마존 실적발표 명암, 미 고용 호조에 긴축 우려<br/>
                  https://kr.investing.com/news/stock-market-news/article-760933
                  </p>
                  <button class="primary">상세보기</button>
                </div>
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
            <div class="btn_wrap l_row_l mgt32">
              <m-button-3 size="large" lined color="primary" class="full">모두보기</m-button-3>
            </div>
            <!-- E 인기 포스트 -->
            <!-- S 보팅 -->
            <h3 class="between">
              <span>보팅</span>
            </h3>
            <p class="tit_txt mgt16 mgb32">인사이트를 확인하고 보팅해보세요</p>
            <q-carousel v-model="slide1" 
              transition-prev="slide-right" 
              transition-next="slide-left" 
              swipeable 
              animated     
              width="100%"
              height="550px"
              control-color="primary" 
              class="ranking_slide ico_box" 
              navigation  arrows>
              <q-carousel-slide name="1">
                <ul class="thumb_list">
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
                            <span class="badge confirm">인증</span>
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
                    <div class="tit_wrap">
                      <p class="badge_wrap">
                        <span class="badge_area">
                            <span class="badge3 small dark_green">주식</span>
                            <span class="badge3 small yellow">BEST</span>
                        </span>
                      </p>
                      <p class="tit_txt">제목은 2글자 이상 최대 40자입니다</p>
                      <p class="logo_wrap">
                        <img src="~assets/prd_logo.png" alt="profile" />
                        삼성전자 우
                      </p>
                    </div>
                    <div class="defalut_box">
                      <div class="con_wrap">
                        <div class="txt_area">
                          <div class="tit_txt">
                            <span class="txt01">목표가</span> 
                            <span class="txt02">₩ ??????</span>
                          </div>
                        </div>
                        <div class="img_area"><img src="~assets/graph_up.svg" class="ico_graph_up" alt=""/></div>
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
                        <span>2022.10.26</span>
                      </div>
                      <div class="btn_area">
                        <span class="txt_area"><i class="ico_clock"/>보팅 2일 남음</span>
                        <m-button-3 color="primary"  size="small"><i class="ico_vote"/><span class="point">1,200</span> / 2000 VP</m-button-3>
                      </div>
                    </div>
                  </li>
                </ul>
              </q-carousel-slide>
              <q-carousel-slide name="2">
                <ul class="thumb_list">
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
                            <span class="badge confirm">인증</span>
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
                    <div class="tit_wrap">
                      <p class="badge_wrap">
                        <span class="badge_area">
                            <span class="badge3 small dark_green">주식</span>
                            <span class="badge3 small yellow">BEST</span>
                        </span>
                      </p>
                      <p class="tit_txt">제목은 2글자 이상 최대 40자입니다</p>
                      <p class="logo_wrap">
                        <img src="~assets/prd_logo.png" alt="profile" />
                        삼성전자 우
                      </p>
                    </div>
                    <div class="defalut_box">
                      <div class="con_wrap">
                        <div class="txt_area">
                          <div class="tit_txt">
                            <span class="txt01">목표가</span> 
                            <span class="txt02">₩ ??????</span>
                          </div>
                        </div>
                        <div class="img_area"><img src="~assets/graph_up.svg" class="ico_graph_up" alt=""/></div>
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
                        <span>2022.10.26</span>
                      </div>
                      <div class="btn_area">
                        <span class="txt_area"><i class="ico_clock"/>보팅 2일 남음</span>
                        <m-button-3 color="primary"  size="small"><i class="ico_vote"/><span class="point">1,200</span> / 2000 VP</m-button-3>
                      </div>
                    </div>
                  </li>
                </ul>
              </q-carousel-slide>
            </q-carousel>
            <div class="btn_wrap l_row_l mgt16">
              <m-button-3 size="large" lined color="primary" class="full">모두보기</m-button-3>
            </div>
            <!-- E 보팅 -->
            <!-- S 발견-->

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
            slide: ref('1'),
            slide1: ref('1'),
            val: ref(true),
            text1:ref('호빵맨'),
            text2:ref(''),
            text3:ref(''),
            tab1:ref('B'),
            tab2:ref('A'),
            tab3:ref('A'),
            tab4:ref('A'),
            tab5:ref('A'),
            tab6:ref('A'),
            tab7:ref('A'),
            rad1:ref('A'),
            tabs:[
                {label:'내종목', value:'A', icon:''},
                {label:'발견', value:'B', icon:''},
            ],
            tabs1:[
                {label:'전체', value:'A', icon:''},
                {label:'주식', value:'B', icon:''},
                {label:'코인', value:'C', icon:''},
            ],
            tabs2:[
                {label:'전체', value:'A', icon:''},
                {label:'주식', value:'B', icon:''},
                {label:'코인', value:'C', icon:''},
            ],
            tabs3:[
                {label:'전체', value:'A', icon:''},
                {label:'상승예측', value:'B', icon:''},
                {label:'하락예측', value:'C', icon:''},
            ],
            tabs4:[
                {label:'전체', value:'A', icon:''},
                {label:'주식', value:'B', icon:''},
                {label:'코인', value:'C', icon:''},
            ],
            tabs5:[
                {label:'전체', value:'A', icon:''},
                {label:'주식', value:'B', icon:''},
                {label:'코인', value:'C', icon:''},
            ],
            tabs6:[
                {label:'전체', value:'A', icon:''},
                {label:'활동랭킹', value:'B', icon:''},
                {label:'신규', value:'C', icon:''},
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
            swiperOption: {
                slidesPerView: 5,
                spaceBetween: 50,
                breakpoints: {
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 30
                    },
                    650: {
                        slidesPerView: 4,
                        spaceBetween: 30
                    },
                    520: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    320: {
                        slidesPerView: 2.2,
                        spaceBetween: 30
                    }
                }
            },
        }
    },
    methods: {
  }
};
</script>
<style scoped>

</style>
