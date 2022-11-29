<template>
    <div class="centerarea_box1">
        <div class="con_box">
          <h2 class="line_type">
            검색
          </h2>
          <div class="box_contents">  
            <div class="search_input l_row_s">
              <m-input filled v-model="text1" class="round_type" placeholder="검색어를 입력해 주세요">
                <template v-slot:prepend>
                  <q-icon class="ico_search" />
                </template>
              </m-input>
              <m-button-3 color="primary">검색</m-button-3>
            </div>
            <q-tabs v-model="tab1" class="line_type sticky_tab1">
              <template v-for="itm in tabs">
                <q-tab :key="itm.id" :name="itm.value" :label="itm.label"></q-tab>
              </template>
            </q-tabs> 
            
            <q-tab-panels
              v-model="tab1"
              swipeable
            >
            
            <q-tab-panel name="tab1">
            <!-- S 종목 -->
            <h3 class="mgt32">
              종목
            </h3>
            <ul class="product_list">
              <li>
                <div class="prd_img">
                  <div class="img_area">
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
                  <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                    indeterminate-icon="help" />
                </div>
              </li>
              <li>
                <div class="prd_img">
                  <div class="img_area">
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
                  <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                    indeterminate-icon="help" />
                </div>
              </li>
              <li>
                <div class="prd_img">
                  <div class="img_area">
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
                  <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                    indeterminate-icon="help" />
                </div>
              </li>
            </ul>
            <div class="btn_wrap l_row_l">
              <m-button-3 lined color="primary" class="full">모두보기</m-button-3>
            </div>
            <!-- E 종목 -->
            <div class="divider1 small" />
            <!-- S 테마 -->
            <h3>
              테마
            </h3>
            <ul class="thema_list1">
              <li>
                <div class="prd_img">
                  <div class="badge_area">
                    <span class="badge1 semiconductor">반도체</span>
                  </div>
                  <div class="tit_area">
                    <span class="txt01">메모리반도체</span>
                    <span class="txt02">
                      반도체
                    </span>
                  </div>
                </div>
                <div class="ico_area">
                  <span class="tag_red">-0.81%</span>
                </div>
              </li>
              <li>
                <div class="prd_img">
                  <div class="badge_area">
                    <span class="badge1 display">디스플레이</span>
                  </div>
                  <div class="tit_area">
                    <span class="txt01">휴대폰</span>
                    <span class="txt02">
                      디스플레이
                    </span>
                  </div>
                </div>
                <div class="ico_area">
                  <span class="tag_blue">+4.26%</span>
                </div>
              </li>
              <li>
                <div class="prd_img">
                  <div class="badge_area">
                    <span class="badge1 display">디스플레이</span>
                  </div>
                  <div class="tit_area">
                    <span class="txt01">TV</span>
                    <span class="txt02">
                      디스플레이
                    </span>
                  </div>
                </div>
                <div class="ico_area">
                  <span class="tag_red">-0.81%</span>
                </div>
              </li>
            </ul>
            <div class="btn_wrap l_row_l">
              <m-button-3 lined color="primary" class="full">모두보기</m-button-3>
            </div>
            <!-- E 테마 -->
            <div class="divider1 small" />
            <h3>
              인사이트 / BLASH
            </h3>
            <ul class="thumb_list mgt32">
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
                  <div class="ico_wrap right">
                    <span>2022.10.26</span>
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
                  <div class="con_wrap">
                    <div class="txt_area">
                      <div class="tit_txt">
                        <span class="txt01">목표가</span> 
                        <span class="txt02">$ 0.0000001234</span>
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
                  <div class="ico_wrap right">
                    <span>2022.10.26</span>
                  </div>
                </div>
              </li>
            </ul>
            <div class="btn_wrap l_row_l">
              <m-button-3 lined color="primary" class="full">모두보기</m-button-3>
            </div>
            <div class="divider1 small" />
            <h3>
              플레이어
            </h3>
            <ul class="ranking_user_list type1">
              <li>
                <div class="my_profile">
                  <div class="tit_wrap">
                    <div class="tit_area">
                      <div class="img_area">
                        <img src="~assets/profile_img1.png" alt="profile" />
                      </div>
                      <span class="txt_tit">
                        몬스탁닉넴열글자까지
                        <span class="badge pro">PRO</span>
                        <span class="badge pl1">PL1</span>
                      </span>
                    </div>
                    <span class="btn_area">
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
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div class="my_profile">
                  <div class="tit_wrap">
                    <div class="tit_area">
                      <div class="img_area">
                        <img src="~assets/profile_img1.png" alt="profile" />
                      </div>
                      <span class="txt_tit">
                        몬스탁닉넴열글자까지
                        <span class="badge pro">PRO</span>
                        <span class="badge pl1">PL1</span>
                      </span>
                    </div>
                    <span class="btn_area">
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
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div class="my_profile">
                  <div class="tit_wrap">
                    <div class="tit_area">
                      <div class="img_area">
                        <img src="~assets/profile_img1.png" alt="profile" />
                      </div>
                      <span class="txt_tit">
                        몬스탁닉넴열글자까지
                        <span class="badge pro">PRO</span>
                        <span class="badge pl1">PL1</span>
                      </span>
                    </div>
                    <span class="btn_area">
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
                    </span>
                  </div>
                </div>
              </li>
            </ul>
            <div class="btn_wrap l_row_l">
              <m-button-3 lined color="primary" class="full">모두보기</m-button-3>
            </div>
            <div class="divider1 small" />
            <h3>
              태그
            </h3>
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
              <m-button-3 lined color="primary" class="full">모두보기</m-button-3>
            </div>
              </q-tab-panel>


              <q-tab-panel name="tab2">
              <!-- S 종목 -->
              <ul class="product_list">
                <li>
                  <div class="prd_img">
                    <div class="img_area">
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
                    <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                      indeterminate-icon="help" />
                  </div>
                </li>
                <li>
                  <div class="prd_img">
                    <div class="img_area">
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
                    <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                      indeterminate-icon="help" />
                  </div>
                </li>
                <li>
                  <div class="prd_img">
                    <div class="img_area">
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
                    <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                      indeterminate-icon="help" />
                  </div>
                </li>
              </ul>
              <div class="divider1 small" />
              <h3>
                추천종목
              </h3>
              <ul class="thumb_list mgt32">
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
                  <div class="ico_wrap right">
                    <span>2022.10.26</span>
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
                  <div class="con_wrap">
                    <div class="txt_area">
                      <div class="tit_txt">
                        <span class="txt01">목표가</span> 
                        <span class="txt02">$ 0.0000001234</span>
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
                  <div class="ico_wrap right">
                    <span>2022.10.26</span>
                  </div>
                </div>
              </li>
            </ul>
              <!-- E 종목 -->
              </q-tab-panel>

              <q-tab-panel name="tab3">
                 <!-- S 테마 -->
                <div class="mgt32">
                  <a href="#" class="link_view right">테마 분류</a>
                </div>
                <ul class="thema_list1">
                  <li>
                    <div class="prd_img">
                      <div class="badge_area">
                        <span class="badge1 semiconductor">반도체</span>
                      </div>
                      <div class="tit_area">
                        <span class="txt01">메모리반도체</span>
                        <span class="txt02">
                          반도체
                        </span>
                      </div>
                    </div>
                    <div class="ico_area">
                      <span class="tag_red">-0.81%</span>
                    </div>
                  </li>
                  <li>
                    <div class="prd_img">
                      <div class="badge_area">
                        <span class="badge1 display">디스플레이</span>
                      </div>
                      <div class="tit_area">
                        <span class="txt01">휴대폰</span>
                        <span class="txt02">
                          디스플레이
                        </span>
                      </div>
                    </div>
                    <div class="ico_area">
                      <span class="tag_blue">+4.26%</span>
                    </div>
                  </li>
                  <li>
                    <div class="prd_img">
                      <div class="badge_area">
                        <span class="badge1 display">디스플레이</span>
                      </div>
                      <div class="tit_area">
                        <span class="txt01">TV</span>
                        <span class="txt02">
                          디스플레이
                        </span>
                      </div>
                    </div>
                    <div class="ico_area">
                      <span class="tag_red">-0.81%</span>
                    </div>
                  </li>
                </ul>
                <div class="divider1 small" />
                <h3>
                  추천 테마
                </h3>
                <ul class="thema_list1">
                  <li>
                    <div class="prd_img">
                      <div class="num_area">
                        <span class="txt01">1</span><span class="txt_blue1"> ▲ </span>
                      </div>
                      <div class="badge_area">
                        <span class="badge1 semiconductor">반도체</span>
                      </div>
                      <div class="tit_area">
                        <span class="txt01">메모리반도체</span>
                        <span class="txt02">
                          반도체
                        </span>
                      </div>
                    </div>
                    <div class="ico_area">
                      <span class="tag_red">-0.81%</span>
                    </div>
                  </li>
                  <li>
                    <div class="prd_img">
                      <div class="num_area">
                        <span class="txt01">2</span><span class="txt_blue1"> ▲ </span>
                      </div>
                      <div class="badge_area">
                        <span class="badge1 display">디스플레이</span>
                      </div>
                      <div class="tit_area">
                        <span class="txt01">휴대폰</span>
                        <span class="txt02">
                          디스플레이
                        </span>
                      </div>
                    </div>
                    <div class="ico_area">
                      <span class="tag_blue">+4.26%</span>
                    </div>
                  </li>
                  <li>
                    <div class="prd_img">
                      <div class="num_area">
                        <span class="txt01">3</span> <span class="txt_red">▼</span>
                      </div>
                      <div class="badge_area">
                        <span class="badge1 display">디스플레이</span>
                      </div>
                      <div class="tit_area">
                        <span class="txt01">TV</span>
                        <span class="txt02">
                          디스플레이
                        </span>
                      </div>
                    </div>
                    <div class="ico_area">
                      <span class="tag_red">-0.81%</span>
                    </div>
                  </li>
                </ul>
                <!-- E 테마 -->
              </q-tab-panel>
              <q-tab-panel name="tab4">
                <div>
                  contents4
                </div>                
              </q-tab-panel>
              <q-tab-panel name="tab5">
              <ul class="ranking_user_list type1">
                <li>
                  <div class="my_profile">
                    <div class="tit_wrap">
                      <div class="tit_area">
                        <div class="img_area">
                          <img src="~assets/profile_img1.png" alt="profile" />
                        </div>
                        <span class="txt_tit">
                          몬스탁닉넴열글자까지
                          <span class="badge pro">PRO</span>
                          <span class="badge pl1">PL1</span>
                        </span>
                      </div>
                      <span class="btn_area">
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
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="my_profile">
                    <div class="tit_wrap">
                      <div class="tit_area">
                        <div class="img_area">
                          <img src="~assets/profile_img1.png" alt="profile" />
                        </div>
                        <span class="txt_tit">
                          몬스탁닉넴열글자까지
                          <span class="badge pro">PRO</span>
                          <span class="badge pl1">PL1</span>
                        </span>
                      </div>
                      <span class="btn_area">
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
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="my_profile">
                    <div class="tit_wrap">
                      <div class="tit_area">
                        <div class="img_area">
                          <img src="~assets/profile_img1.png" alt="profile" />
                        </div>
                        <span class="txt_tit">
                          몬스탁닉넴열글자까지
                          <span class="badge pro">PRO</span>
                          <span class="badge pl1">PL1</span>
                        </span>
                      </div>
                      <span class="btn_area">
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
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="divider1 small" />
              <h3>
                추천 플레이어
              </h3>
              <ul class="ranking_user_list type1">
                <li>
                  <div class="my_profile">
                    <div class="tit_wrap">
                      <div class="tit_area">
                        <div class="img_area">
                          <img src="~assets/profile_img1.png" alt="profile" />
                        </div>
                        <span class="txt_tit">
                          몬스탁닉넴열글자까지
                          <span class="badge pro">PRO</span>
                          <span class="badge pl1">PL1</span>
                        </span>
                      </div>
                      <span class="btn_area">
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
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="my_profile">
                    <div class="tit_wrap">
                      <div class="tit_area">
                        <div class="img_area">
                          <img src="~assets/profile_img1.png" alt="profile" />
                        </div>
                        <span class="txt_tit">
                          몬스탁닉넴열글자까지
                          <span class="badge pro">PRO</span>
                          <span class="badge pl1">PL1</span>
                        </span>
                      </div>
                      <span class="btn_area">
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
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="my_profile">
                    <div class="tit_wrap">
                      <div class="tit_area">
                        <div class="img_area">
                          <img src="~assets/profile_img1.png" alt="profile" />
                        </div>
                        <span class="txt_tit">
                          몬스탁닉넴열글자까지
                          <span class="badge pro">PRO</span>
                          <span class="badge pl1">PL1</span>
                        </span>
                      </div>
                      <span class="btn_area">
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
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
              </q-tab-panel>
              <q-tab-panel name="tab6">
                <ul class="tag_list mga32">
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
                <div class="divider1 small" />
                <h3>
                  추천 태그
                </h3>
                <ul class="tag_list">
                  <li>#삼성전자</li>
                  <li>#삼성전자</li>
                  <li>##삼성전자실적</li>
                  <li>##삼성전자매출</li>
                  <li>#삼성전자</li>
                  <li>#삼성전자실적</li>
                  <li>#삼성전자</li>
                  <li>#삼성전자</li>
                  <li>#최대스무자최대스무자최대스무자최대스무자</li>
                </ul>
              </q-tab-panel>
            </q-tab-panels>
          </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
  data() {
        return {
          tab1: ref('tab1'),
          tabs: [
            { id: 1, label: '전체', value: 'tab1', icon: '' },
            { id: 2, label: '종목', value: 'tab2', icon: '' },
            { id: 3, label: '테마', value: 'tab3', icon: '' },
            { id: 4, label: '콘텐츠', value: 'tab4', icon: '' },
            { id: 5, label: '플레이어', value: 'tab5', icon: '' },
            { id: 6, label: '#태그', value: 'tab6', icon: '' }     
          ],
          tab: ref('mails'),
          val: ref(true),
        }
    },
    methods: {
    }
};
</script>
<style scoped>

</style>

