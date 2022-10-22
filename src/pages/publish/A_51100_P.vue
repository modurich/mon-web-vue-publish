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
            <q-tabs
              v-model="tab1"
              dense
              class="bg-grey-3 text-grey-7"
              active-color="primary"
              indicator-color="purple"
              align="justify">
              
              <template v-for="itm in tabs">
                <q-tab :key="itm.id" :name="itm.value" :label="itm.label"></q-tab>
              </template>
            </q-tabs> 
            
            <q-tab-panels
              v-model="tab1"
              animated
              swipeable
              infinite
            >
            
            <q-tab-panel name="tab1">
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
            <div class="btn_wrap l_row_l">
              <m-button-3 lined color="primary" class="full">모두보기</m-button-3>
            </div>
            <!-- E 종목 -->
            <div class="divider1 small" />
            <!-- S 테마 -->
            <h3>
              테마
            </h3>
            <ul class="thema_list">
              <li>
                <div class="tit_area">
                  <span class="txt01">메모리반도체</span>
                  <span class="txt02">
                    반도체
                  </span>
                </div>
                <div class="ico_area">
                  <span class="tag_red">-0.81%</span>
                </div>
              </li>
              <li>
                <div class="prd_img">
                  <div class="tit_area">
                    <span class="txt01">메모리반도체</span>
                    <span class="txt02">
                      반도체
                    </span>
                  </div>
                </div>
                <div class="ico_area">
                  <span class="tag_blue">+1.24%</span>
                </div>
              </li>
              <li>
                <div class="tit_area">
                  <span class="txt01">휴대폰</span>
                  <span class="txt02">
                    전자기기
                  </span>
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
              <div class="btn_wrap l_row_l">
                <m-button-3 lined color="primary" class="full">모두보기</m-button-3>
              </div>
              <div class="divider1 small" />
              <h3>
                추천종목
              </h3>
              <!-- E 종목 -->
              </q-tab-panel>

              <q-tab-panel name="tab3">
                <div>
                  contents3
                </div>
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

            <!--
            <m-tabs class="line_type large mg0" v-model="tab1" :items="tabs" />
            -->
<div v-if="tab1 == 'A'">
              <!-- S 종목 -->
              <ul class="product_list">
                <li>
                  <div class="prd_img">
                    <div class="img_area">
                      <img src="~assets/prd_logo.png" alt="profile"/>
                    </div>
<div class="tit_area">
                      <span class="txt01">삼성전자우</span>
                      <span class="txt02">
                        코스피 005930
                      </span>
                    </div>
                  </div>
<div class="ico_area">
                    <q-checkbox
                      v-model="val"
                      size="24"
                      checked-icon="favorite"
                      unchecked-icon="favorite_border"
                      indeterminate-icon="help"
                    />
                  </div>
                </li>
<li>
                  <div class="prd_img">
                    <div class="img_area">
                      <img src="~assets/prd_logo.png" alt="profile"/>
                    </div>
                    <div class="tit_area">
                      <span class="txt01">삼성전자우</span>
                      <span class="txt02">
                        코스피 005930
                      </span>
                    </div>
                  </div>
                  <div class="ico_area">
                    <q-checkbox
                      v-model="val"
                      size="24"
                      checked-icon="favorite"
                      unchecked-icon="favorite_border"
                      indeterminate-icon="help"
                    />
                  </div>
                </li>
<li>
                  <div class="prd_img">
                    <div class="img_area">
                      <img src="~assets/prd_logo.png" alt="profile"/>
                    </div>
                    <div class="tit_area">
                      <span class="txt01">삼성전자우</span>
                      <span class="txt02">
                        코스피 005930
                      </span>
                    </div>
                  </div>
                  <div class="ico_area">
                    <q-checkbox
                      v-model="val"
                      size="24"
                      checked-icon="favorite"
                      unchecked-icon="favorite_border"
                      indeterminate-icon="help"
                    />
                  </div>
                </li>
              </ul>
<div class="btn_wrap l_row_l">
                <m-button-3 lined color="primary" class="full">모두보기</m-button-3>
              </div>
<!-- E 종목 -->
              <div class="divider1 small"/>
              <!-- S 테마 -->
<h3>
                테마
              </h3>
<ul class="thema_list">
                <li>
                  <div class="tit_area">
                      <span class="txt01">메모리반도체</span>
                      <span class="txt02">
                        반도체
                      </span>
                    </div>
                  <div class="ico_area">
                    <span class="tag_red">-0.81%</span>
                  </div>
                </li>
                <li>
                  <div class="prd_img">
                    <div class="tit_area">
                      <span class="txt01">메모리반도체</span>
                      <span class="txt02">
                        반도체
                      </span>
                    </div>
                  </div>
                  <div class="ico_area">
                    <span class="tag_blue">+1.24%</span>
                  </div>
                </li>
                <li>
                  <div class="tit_area">
                      <span class="txt01">휴대폰</span>
                      <span class="txt02">
                        전자기기
                      </span>
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
              <div class="divider1 small"/>
<h3>
                인사이트 / BLASH
              </h3>
<div class="btn_wrap l_row_l">
                <m-button-3 lined color="primary" class="full">모두보기</m-button-3>
</div>
              <div class="divider1 small"/>
<h3>
                플레이어
              </h3>
<ul class="ranking_user_list type1">
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
                </li>
              </ul>
<div class="btn_wrap l_row_l">
                <m-button-3 lined color="primary" class="full">모두보기</m-button-3>
</div>
              <div class="divider1 small"/>
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
            </div>
<div v-if="tab1 == 'B'">
              <!-- S 종목 -->
              <ul class="product_list">
                <li>
                  <div class="prd_img">
                    <div class="img_area">
                      <img src="~assets/prd_logo.png" alt="profile"/>
                    </div>
<div class="tit_area">
                      <span class="txt01">삼성전자우</span>
                      <span class="txt02">
                        코스피 005930
                      </span>
                    </div>
                  </div>
<div class="ico_area">
                    <q-checkbox
                      v-model="val"
                      size="24"
                      checked-icon="favorite"
                      unchecked-icon="favorite_border"
                      indeterminate-icon="help"
                    />
                  </div>
                </li>
<li>
                  <div class="prd_img">
                    <div class="img_area">
                      <img src="~assets/prd_logo.png" alt="profile"/>
                    </div>
                    <div class="tit_area">
                      <span class="txt01">삼성전자우</span>
                      <span class="txt02">
                        코스피 005930
                      </span>
                    </div>
                  </div>
                  <div class="ico_area">
                    <q-checkbox
                      v-model="val"
                      size="24"
                      checked-icon="favorite"
                      unchecked-icon="favorite_border"
                      indeterminate-icon="help"
                    />
                  </div>
                </li>
<li>
                  <div class="prd_img">
                    <div class="img_area">
                      <img src="~assets/prd_logo.png" alt="profile"/>
                    </div>
                    <div class="tit_area">
                      <span class="txt01">삼성전자우</span>
                      <span class="txt02">
                        코스피 005930
                      </span>
                    </div>
                  </div>
                  <div class="ico_area">
                    <q-checkbox
                      v-model="val"
                      size="24"
                      checked-icon="favorite"
                      unchecked-icon="favorite_border"
                      indeterminate-icon="help"
                    />
                  </div>
                </li>
              </ul>
<div class="btn_wrap l_row_l">
                <m-button-3 lined color="primary" class="full">모두보기</m-button-3>
</div>
              <div class="divider1 small"/>
<h3>
                추천종목
              </h3>
              <!-- E 종목 -->
            </div>
<div v-if="tab1 == 'C'">
              contents2
            </div>
<div v-if="tab1 == 'D'">
              contents2
            </div>
<div v-if="tab1 == 'E'">
              <ul class="ranking_user_list type1">
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
                </li>
</ul>
              <div class="divider1 small"/>
<h3>
                추천 플레이어
              </h3>
<ul class="ranking_user_list type1">
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
                </li>
              </ul>
            </div>
<div v-if="tab1 == 'F'">
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
              <div class="divider1 small"/>
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
            </div>
            
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
            { id:1, label: '전체',      value: 'tab1', icon: '' },
            { id:2, label: '종목',      value: 'tab2', icon: '' },
            { id:3, label: '테마',      value: 'tab3', icon: '' },
            { id:4, label: '콘텐츠',    value: 'tab4', icon: '' },
            { id:5, label: '플레이어',  value: 'tab5', icon: '' },
            { id:6, label: '#태그',     value: 'tab6', icon: '' },
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

