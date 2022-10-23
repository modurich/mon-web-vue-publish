<template>
  <div class="centerarea_box1">
      <div class="con_box">
        <h2 class="line_type">
          검색
        </h2> 
        <m-tabs class="line_type large" v-model="tab1" :items="tabs" />
          <div class="tab_contents" v-if="tab1 == 'A'">
            <div>
              <swiper class="swiper">
                <swiper-slide class="slide">
                  <div class="banner_wrap">
                    <div class="banner_img">
                      <img src="~assets/banner_txt.png" 
                      alt="2022년 3분기 blash 수익률 대회! 
                      텐배거에 도전하라! 1-3등 한정판 NFT 지급!">
                      <img src="~assets/banner_img.png">
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide class="slide">
                  <div class="banner_wrap">
                    <div class="banner_img">
                      <img src="~assets/banner_txt.png" alt="2022년 3분기 blash 수익률 대회! 텐배거에 도전하라!">
                      <img src="~assets/banner_img.png">
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide class="slide">
                  <div class="banner_wrap">
                    <div class="banner_img">
                      <img src="~assets/banner_txt.png" alt="2022년 3분기 blash 수익률 대회! 텐배거에 도전하라!">
                      <img src="~assets/banner_img.png">
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide class="slide">
                  <div class="banner_wrap">
                    <div class="banner_img">
                      <img src="~assets/banner_txt.png" alt="2022년 3분기 blash 수익률 대회! 텐배거에 도전하라!">
                      <img src="~assets/banner_img.png">
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
            <m-tabs class="box_type large mg0" v-model="tab2" :items="tabs1" />
            <div v-if="tab2 == 'A'">
              <div class="radio_wrap mgb16 right">
                  <m-radio v-model="rad1" val="A" label="기간별 순위"/>
                  <m-radio v-model="rad1" val="B" label="이벤트 순위"/>
              </div>
              <div>
                <m-select v-model="select1" :options="options" />
              </div>
              <div class="sub_title_wrap">
                <span class="txt01"><span class="ico_info_bk">성공률 순위</span></span>
                <span class="txt02">참여 9999 명 09.12 16:40 (UTC+9)</span>
              </div>
              <div class="ranking_box">
                <span class="txt01">나의 랭킹<span>224,856위</span></span>
                <span class="txt02">23.71%</span>
              </div>
              <div class="ranking_box01">
                <p class="txt01">
                  <span class="point">인사이트 작성</span>하고 랭킹에 도전해보세요!</p>
                <span class="center"><a data-v-31bdaa54="" href="#" class="link_view wh">인사이트 작성하기</a></span>
              </div>
              <div class="ranking_user">
                <div class="user_area">
                    <div class="user_img">
                        <p class="user_txt">
                          <span class="txt01">2</span>
                          <span class="txt_up"><span class="font11">▲</span> 172</span>
                        </p>
                        <div class="img_area"><img src="~assets/user_img.png" alt="profile"/></div>
                    </div>
                    <p class="user_name">닉네임열두</p>
                    <p class="user_grade">
                        <!-- <span class="ico_level1">level</span> -->
                        <span class="badge pro">PRO</span>
                        <span class="badge pl1">PL1</span>
                    </p>
                    <p class="txt_num">
                      994.87%
                      <q-tooltip :content-class="{ 'tooltip_type2':true}" anchor="bottom middle" self="bottom middle" :offset="[80, 80]">
                          <ul class="result_list">
                            <li>
                              <span class="txt01">평가</span>
                              <span class="txt02">527 건</span>
                            </li>
                            <li>
                              <span class="txt01">성공률</span>
                              <span class="txt02">100.00%</span>
                            </li>
                            <li>
                              <span class="txt01">수익률</span>
                              <span class="txt02">9,999.00%</span>
                            </li>
                          </ul>
                        </q-tooltip>
                    </p>
                    <p class="btn_area">
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
                    </p>
                </div>
                <div class="user_area">
                    <div class="user_img">
                        <p class="user_txt">
                          <span class="txt01">1</span>
                          <span class="txt_up"><span class="font11">▲</span> 172</span>
                        </p>
                        <div class="img_area ranking1"><img src="~assets/user_img.png" alt="profile"/></div>
                    </div>
                    <p class="user_name">닉네임열두글자하나둘셋넷</p>
                    <p class="user_grade">
                        <!-- <span class="ico_level1">level</span> -->
                        <span class="badge pro">PRO</span>
                        <span class="badge pl1">PL1</span>
                    </p>
                    <p class="txt_num">
                      994.87%
                      <q-tooltip :content-class="{ 'tooltip_type2':true}" anchor="bottom middle" self="bottom middle" :offset="[80, 80]">
                          <ul class="result_list">
                            <li>
                              <span class="txt01">평가</span>
                              <span class="txt02">527 건</span>
                            </li>
                            <li>
                              <span class="txt01">성공률</span>
                              <span class="txt02">100.00%</span>
                            </li>
                            <li>
                              <span class="txt01">수익률</span>
                              <span class="txt02">9,999.00%</span>
                            </li>
                          </ul>
                        </q-tooltip>
                    </p>
                    <p class="btn_area">
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
                    </p>
                </div>
                <div class="user_area">
                    <div class="user_img">
                        <p class="user_txt">
                          <span class="txt01">3</span>
                          <span class="txt_up"><span class="font11">▲</span> 172</span>
                        </p>
                        <div class="img_area"><img src="~assets/user_img.png" alt="profile"/></div>
                    </div>
                    <p class="user_name">닉네임열두글자하나둘셋넷</p>
                    <p class="user_grade">
                        <!-- <span class="ico_level1">level</span> -->
                        <span class="badge pro">PRO</span>
                        <span class="badge pl1">PL1</span>
                    </p>
                    <p class="txt_num">
                      994.87%
                      <q-tooltip :content-class="{ 'tooltip_type2':true}" anchor="bottom middle" self="bottom middle" :offset="[80, 80]">
                          <ul class="result_list">
                            <li>
                              <span class="txt01">평가</span>
                              <span class="txt02">527 건</span>
                            </li>
                            <li>
                              <span class="txt01">성공률</span>
                              <span class="txt02">100.00%</span>
                            </li>
                            <li>
                              <span class="txt01">수익률</span>
                              <span class="txt02">9,999.00%</span>
                            </li>
                          </ul>
                        </q-tooltip>
                    </p>
                    <p class="btn_area">
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
                    </p>
                </div>
              </div>
              <!-- S ranking user list -->
              <ul class="ranking_user_list">
                <li>
                  <div class="my_profile">
                    <div class="tit_wrap">
                      <div class="tit_area">
                        <div class="img_area">
                          <img src="~assets/profile_img1.png" alt="profile"/>
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
                  <div class="number_wrap">
                      <div class="user_txt">
                        <span class="txt01">3</span>
                        <span class="txt_up"><span class="font11">▲</span> 172</span>
                      </div>
                      <div class="txt_num">
                        889.62%
                        <q-tooltip :content-class="{ 'tooltip_type2':true}" anchor="bottom middle" self="bottom middle" :offset="[80, 80]">
                          <ul class="result_list">
                            <li>
                              <span class="txt01">평가</span>
                              <span class="txt02">527 건</span>
                            </li>
                            <li>
                              <span class="txt01">성공률</span>
                              <span class="txt02">100.00%</span>
                            </li>
                            <li>
                              <span class="txt01">수익률</span>
                              <span class="txt02">9,999.00%</span>
                            </li>
                          </ul>
                        </q-tooltip>
                      </div>
                  </div>
                </li>
                <li>
                  <div class="my_profile">
                    <div class="tit_wrap">
                      <div class="tit_area">
                        <div class="img_area">
                          <img src="~assets/profile_img1.png" alt="profile"/>
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
                  <div class="number_wrap">
                      <div class="user_txt">
                        <span class="txt01">3</span>
                        <span>-</span>
                      </div>
                      <div class="txt_num">
                        889.62%
                        <q-tooltip :content-class="{ 'tooltip_type2':true}" anchor="bottom middle" self="bottom middle" :offset="[80, 80]">
                          <ul class="result_list">
                            <li>
                              <span class="txt01">평가</span>
                              <span class="txt02">527 건</span>
                            </li>
                            <li>
                              <span class="txt01">성공률</span>
                              <span class="txt02">100.00%</span>
                            </li>
                            <li>
                              <span class="txt01">수익률</span>
                              <span class="txt02">9,999.00%</span>
                            </li>
                          </ul>
                        </q-tooltip>
                      </div>
                  </div>
                </li>
                <li>
                  <div class="my_profile">
                    <div class="tit_wrap">
                      <div class="tit_area">
                        <div class="img_area">
                          <img src="~assets/profile_img1.png" alt="profile"/>
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
                  <div class="number_wrap">
                      <div class="user_txt">
                        <span class="txt01">6</span>
                        <span class="txt_down"><span class="font11">▼</span> 5</span>
                      </div>
                      <div class="txt_num">
                        889.62%
                        <q-tooltip :content-class="{ 'tooltip_type2':true}" anchor="bottom middle" self="bottom middle" :offset="[80, 80]">
                          <ul class="result_list">
                            <li>
                              <span class="txt01">평가</span>
                              <span class="txt02">527 건</span>
                            </li>
                            <li>
                              <span class="txt01">성공률</span>
                              <span class="txt02">100.00%</span>
                            </li>
                            <li>
                              <span class="txt01">수익률</span>
                              <span class="txt02">9,999.00%</span>
                            </li>
                          </ul>
                        </q-tooltip>
                      </div>
                  </div>
                </li>
              </ul>
              <!-- E ranking user list -->
              <div class="btn_wrap mgt32">
                <m-button-3 class="font18 full" color="textPrimary">더보기</m-button-3>
              </div>
            </div>
            <div v-if="tab2 == 'B'">
              contents2
            </div>
            <div v-if="tab2 == 'C'">
              contents2
            </div>
          </div>
          <div class="tab_contents" v-if="tab1 == 'B'">
            <div>
              <swiper class="swiper">
                <swiper-slide class="slide">
                  <div class="banner_wrap">
                    <div class="banner_img">
                      <img src="~assets/banner_txt.png" 
                      alt="2022년 3분기 blash 수익률 대회! 
                      텐배거에 도전하라! 1-3등 한정판 NFT 지급!">
                      <img src="~assets/banner_img.png">
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide class="slide">
                  <div class="banner_wrap">
                    <div class="banner_img">
                      <img src="~assets/banner_txt.png" alt="2022년 3분기 blash 수익률 대회! 텐배거에 도전하라!">
                      <img src="~assets/banner_img.png">
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide class="slide">
                  <div class="banner_wrap">
                    <div class="banner_img">
                      <img src="~assets/banner_txt.png" alt="2022년 3분기 blash 수익률 대회! 텐배거에 도전하라!">
                      <img src="~assets/banner_img.png">
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide class="slide">
                  <div class="banner_wrap">
                    <div class="banner_img">
                      <img src="~assets/banner_txt.png" alt="2022년 3분기 blash 수익률 대회! 텐배거에 도전하라!">
                      <img src="~assets/banner_img.png">
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
            <m-tabs class="box_type large mg0" v-model="tab3" :items="tabs2" />
            <div v-if="tab3 == 'A'">
              <div class="radio_wrap mgb16 right">
                  <m-radio v-model="rad1" val="A" label="기간별 순위"/>
                  <m-radio v-model="rad1" val="B" label="이벤트 순위"/>
              </div>
              <div>
                <m-select v-model="select1" :options="options" />
              </div>
              <div class="sub_title_wrap">
                <span class="txt01"><span class="ico_info_bk">성공률 순위</span></span>
                <span class="txt02">참여 9999 명 09.12 16:40 (UTC+9)</span>
              </div>
              <div class="ranking_box">
                <span class="txt01">나의 랭킹<span>224,856위</span></span>
                <span class="txt02">23.71%</span>
              </div>
              <div class="ranking_box01">
                <p class="txt01">
                  <span class="point">BLASH 작성</span>하고 랭킹에 도전해보세요!</p>
                  <span class="center"><a data-v-31bdaa54="" href="#" class="link_view wh">BLASH 작성하기</a></span>
              </div>
              <div class="ranking_user">
                <div class="user_area">
                    <div class="user_img">
                        <p class="user_txt">
                          <span class="txt01">2</span>
                          <span class="txt_up"><span class="font11">▲</span> 172</span>
                        </p>
                        <div class="img_area"><img src="~assets/user_img.png" alt="profile"/></div>
                    </div>
                    <p class="user_name">닉네임열두</p>
                    <p class="user_grade">
                        <!-- <span class="ico_level1">level</span> -->
                        <span class="badge pro">PRO</span>
                        <span class="badge pl1">PL1</span>
                    </p>
                    <p class="txt_num">
                      994.87%
                      <q-tooltip :content-class="{ 'tooltip_type2':true}" anchor="bottom middle" self="bottom middle" :offset="[80, 80]">
                          <ul class="result_list">
                            <li>
                              <span class="txt01">평가</span>
                              <span class="txt02">527 건</span>
                            </li>
                            <li>
                              <span class="txt01">성공률</span>
                              <span class="txt02">100.00%</span>
                            </li>
                            <li>
                              <span class="txt01">수익률</span>
                              <span class="txt02">9,999.00%</span>
                            </li>
                          </ul>
                        </q-tooltip>
                    </p>
                    <p class="btn_area">
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
                    </p>
                </div>
                <div class="user_area">
                    <div class="user_img">
                        <p class="user_txt">
                          <span class="txt01">1</span>
                          <span class="txt_up"><span class="font11">▲</span> 172</span>
                        </p>
                        <div class="img_area ranking1"><img src="~assets/user_img.png" alt="profile"/></div>
                    </div>
                    <p class="user_name">닉네임열두글자하나둘셋넷</p>
                    <p class="user_grade">
                        <!-- <span class="ico_level1">level</span> -->
                        <span class="badge pro">PRO</span>
                        <span class="badge pl1">PL1</span>
                    </p>
                    <p class="txt_num">
                      994.87%
                      <q-tooltip :content-class="{ 'tooltip_type2':true}" anchor="bottom middle" self="bottom middle" :offset="[80, 80]">
                          <ul class="result_list">
                            <li>
                              <span class="txt01">평가</span>
                              <span class="txt02">527 건</span>
                            </li>
                            <li>
                              <span class="txt01">성공률</span>
                              <span class="txt02">100.00%</span>
                            </li>
                            <li>
                              <span class="txt01">수익률</span>
                              <span class="txt02">9,999.00%</span>
                            </li>
                          </ul>
                        </q-tooltip>
                    </p>
                    <p class="btn_area">
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
                    </p>
                </div>
                <div class="user_area">
                    <div class="user_img">
                        <p class="user_txt">
                          <span class="txt01">3</span>
                          <span class="txt_up"><span class="font11">▲</span> 172</span>
                        </p>
                        <div class="img_area"><img src="~assets/user_img.png" alt="profile"/></div>
                    </div>
                    <p class="user_name">닉네임열두글자하나둘셋넷</p>
                    <p class="user_grade">
                        <!-- <span class="ico_level1">level</span> -->
                        <span class="badge pro">PRO</span>
                        <span class="badge pl1">PL1</span>
                    </p>
                    <p class="txt_num">
                      994.87%
                      <q-tooltip :content-class="{ 'tooltip_type2':true}" anchor="bottom middle" self="bottom middle" :offset="[80, 80]">
                          <ul class="result_list">
                            <li>
                              <span class="txt01">평가</span>
                              <span class="txt02">527 건</span>
                            </li>
                            <li>
                              <span class="txt01">성공률</span>
                              <span class="txt02">100.00%</span>
                            </li>
                            <li>
                              <span class="txt01">수익률</span>
                              <span class="txt02">9,999.00%</span>
                            </li>
                          </ul>
                        </q-tooltip>
                    </p>
                    <p class="btn_area">
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
                    </p>
                </div>
              </div>
              <!-- S ranking user list -->
              <ul class="ranking_user_list">
                <li>
                  <div class="my_profile">
                    <div class="tit_wrap">
                      <div class="tit_area">
                        <div class="img_area">
                          <img src="~assets/profile_img1.png" alt="profile"/>
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
                  <div class="number_wrap">
                      <div class="user_txt">
                        <span class="txt01">3</span>
                        <span class="txt_up"><span class="font11">▲</span> 172</span>
                      </div>
                      <div class="txt_num">
                        889.62%
                        <q-tooltip :content-class="{ 'tooltip_type2':true}" anchor="bottom middle" self="bottom middle" :offset="[80, 80]">
                          <ul class="result_list">
                            <li>
                              <span class="txt01">평가</span>
                              <span class="txt02">527 건</span>
                            </li>
                            <li>
                              <span class="txt01">성공률</span>
                              <span class="txt02">100.00%</span>
                            </li>
                            <li>
                              <span class="txt01">수익률</span>
                              <span class="txt02">9,999.00%</span>
                            </li>
                          </ul>
                        </q-tooltip>
                      </div>
                  </div>
                </li>
                <li>
                  <div class="my_profile">
                    <div class="tit_wrap">
                      <div class="tit_area">
                        <div class="img_area">
                          <img src="~assets/profile_img1.png" alt="profile"/>
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
                  <div class="number_wrap">
                      <div class="user_txt">
                        <span class="txt01">3</span>
                        <span>-</span>
                      </div>
                      <div class="txt_num">
                        889.62%
                        <q-tooltip :content-class="{ 'tooltip_type2':true}" anchor="bottom middle" self="bottom middle" :offset="[80, 80]">
                          <ul class="result_list">
                            <li>
                              <span class="txt01">평가</span>
                              <span class="txt02">527 건</span>
                            </li>
                            <li>
                              <span class="txt01">성공률</span>
                              <span class="txt02">100.00%</span>
                            </li>
                            <li>
                              <span class="txt01">수익률</span>
                              <span class="txt02">9,999.00%</span>
                            </li>
                          </ul>
                        </q-tooltip>
                      </div>
                  </div>
                </li>
                <li>
                  <div class="my_profile">
                    <div class="tit_wrap">
                      <div class="tit_area">
                        <div class="img_area">
                          <img src="~assets/profile_img1.png" alt="profile"/>
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
                  <div class="number_wrap">
                      <div class="user_txt">
                        <span class="txt01">6</span>
                        <span class="txt_down"><span class="font11">▼</span> 5</span>
                      </div>
                      <div class="txt_num">
                        889.62%
                        <q-tooltip :content-class="{ 'tooltip_type2':true}" anchor="bottom middle" self="bottom middle" :offset="[80, 80]">
                          <ul class="result_list">
                            <li>
                              <span class="txt01">평가</span>
                              <span class="txt02">527 건</span>
                            </li>
                            <li>
                              <span class="txt01">성공률</span>
                              <span class="txt02">100.00%</span>
                            </li>
                            <li>
                              <span class="txt01">수익률</span>
                              <span class="txt02">9,999.00%</span>
                            </li>
                          </ul>
                        </q-tooltip>
                      </div>
                  </div>
                </li>
              </ul>
              <!-- E ranking user list -->
              <div class="btn_wrap mgt32">
                <m-button-3 class="font18 full" color="textPrimary">더보기</m-button-3>
              </div>
            </div>
            <div v-if="tab3 == 'B'">
              contents2
            </div>
            <div v-if="tab3 == 'C'">
              contents3
            </div>
          </div>
        </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
components: {
  Swiper,
  SwiperSlide
},
data() {
      return {
        tabs: [
          { label: '인사이트', value: 'A', icon: '' },
          { label: 'BLASH', value: 'B', icon: '' }
        ],
        tab1:ref('A'),
        tabs1: [
          { label: '전체', value: 'A', icon: '' },
          { label: '주식', value: 'B', icon: '' },
          { label: '코인', value: 'C', icon: '' }
        ],
        tab2:ref('A'),
        tabs2: [
          { label: '전체', value: 'A', icon: '' },
          { label: '주식', value: 'B', icon: '' },
          { label: '코인', value: 'C', icon: '' }
        ],
        tab3:ref('A'),
        rad1:ref('A'),
        select1: ref("전체"),
        options: [
        '전체', '선택1','선택2','선택3',
      ],
      }
  },
  methods: {
  }
};
</script>
<style scoped>

</style>

