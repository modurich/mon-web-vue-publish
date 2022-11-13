<template>
    <div class="centerarea_box1">
        <div class="con_box">
          <h2 class="line_type">콘텐츠 관리</h2>
          <m-tabs class="line_type large" v-model="tab1" :items="tabs"/>
          <div class="tab_contents" v-if="tab1 == 'A'">
            <div class="right mgt16">
              <m-tabs class="card_type small" v-model="tab2" :items="tabs1" />
            </div>
            <div v-if="tab2 == 'A'">
              <!-- S 인사이트-->
              <div class="mga32">
                <m-select v-model="select1" :options="options" />
              </div>
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
              <div class="btn_wrap">
                <m-button-3 size="large" class="font16 full" color="textPrimary">더보기</m-button-3>
              </div>
               <!-- E 인사이트 -->
            </div>
            <div v-if="tab2 == 'B'">
              <!-- S BLASH -->
              <div class="mga32">
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
                <m-button-3 size="large" color="primary"  class="full">BLASH 작성하기</m-button-3>
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
                  <span class="mgr48">실현 수익률</span>
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
              <!-- S BLASH -->
            </div>
            <div v-if="tab2 == 'C'">
            <!-- S 포스트 -->
            <div class="no_data_wrap">
                <div class="ico_top pdt32">
                  <i class="ico_error"></i>
                </div>
                <div class="com_message mgb32">
                  작성된 포스트가 없어요
                </div>
              </div>
              <div class="btn_wrap mgb32">
                <m-button-3 size="large" color="primary"  class="full">포스트 작성하기</m-button-3>
              </div>
            <p class="font12 mgt32">전체 00개</p>
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
                  <button class="primary mgb16">상세보기</button>
                  <div class="list_box">
                    <span class="img_area"><img src="~assets/test_img.png" alt=""/></span>
                    <div class="txt_area">
                      <div class="tit">오늘 미국장 움직일 이슈: 러시아 2월 침공설 언급한 백악관, 아마존 실적발표 명암, 미 고용 호조에 긴축 우려오늘 미국장 움직일 이슈: 러시아 2월 침공설 언급한 백악관, 아마존 실적발표 명암, 미 고용 호조에 긴축 우려</div>
                      <div class="con">타이틀타이틀타이틀</div>
                      <div class="link_txt"><a href="#">https://news.mt.co.kr/mtviewtviewtvimtviewtviewtvimtviewtviewtvimtviewtviewtvimtviewtviewimtviewtviewtvimtviewtviewtvimtviewtviewimtviewtviewtvimtviewtviewtvimtviewtviewimtviewtviewtvimtviewtviewtvimtviewtview</a></div>
                    </div>
                  </div>
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
                  <button class="primary mgb16">상세보기</button>
                </div>
                <div class="footer_area">
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
            <div class="btn_wrap">
              <m-button-3 class="font16 full" color="textPrimary">더보기</m-button-3>
            </div>
            <!-- E 포스트 -->
            </div>
          </div>
          <div class="tab_contents" v-if="tab1 == 'B'">
            <!-- S 관심 -->
            <div class="right mgt16">
              <m-tabs class="card_type small" v-model="tab3" :items="tabs2" />
            </div>
            <div v-if="tab3 == 'A'">
              <div class="mga32">
                <m-select v-model="select1" :options="options" />
              </div>
              <!-- S 인사이트-->
              <div class="no_data_wrap">
                <div class="ico_top pdt32">
                  <i class="ico_error"></i>
                </div>
                <div class="com_message mgb32">
                  북마크한 인사이트가 없어요
                </div>
              </div>
              <div class="btn_wrap mgb32">
                  <m-button-3 size="large" color="primary" class="full">북마크 하기</m-button-3>
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
              <div class="btn_wrap">
                <m-button-3 size="large" class="font16 full" color="textPrimary">더보기</m-button-3>
              </div>
              <!-- E 인사이트 -->
            </div>
            <div v-if="tab3 == 'B'">
               <!-- S BLASH -->
              <div class="mga32">
                <m-select v-model="select1" :options="options" />
              </div>
              <div class="no_data_wrap">
                <div class="ico_top pdt32">
                  <i class="ico_error"></i>
                </div>
                <div class="com_message mgb32">
                  구독한 BLASH가 없어요
                </div>
              </div>
              <div class="btn_wrap mgb32">
                <m-button-3 size="large" color="primary"  class="full">BLASH 작성하기</m-button-3>
              </div>
              <div class="voting_list_wrap line">
                <p class="logo_wrap">
                  <img src="~assets/prd_logo.png" alt="profile" />
                  삼성전자
                </p>
                <div class="between mgt10">
                  <span class="ico_area">
                    <span class="badge3 big green">최초매수</span>
                    <span class="badge3 big orange icon"><i class="ico_result_type01"/></span>
                    <!-- <button class="badge3 big orange icon"><i class="ico_result_type01"/></button> -->
                  </span>
                  <span class="font12">2022.10.26 10:30</span>
                </div>
                <ul class="voting_list">
                  <li>
                    <span class="font12">매도가</span>
                    <span class="txt_red">₩ 1,000,000</span>
                  </li>
                  <li>
                    <span class="font12">실현수익률</span>
                    <span class="txt_blue1">+10%</span>
                  </li>
                </ul>
                <ul class="voting_list">
                  <li>
                    <span class="font12">투자비중</span>
                    <span class="txt_dk">100%</span>
                  </li>
                  <li>
                    <span class="font12">투자기간</span>
                    <span class="txt_dk">100일</span>
                  </li>
                </ul>
              </div>
              <div class="voting_list_wrap line">
                <p class="logo_wrap">
                  <img src="~assets/prd_logo.png" alt="profile" />
                  삼성전자
                </p>
                <div class="between mgt10">
                  <span class="badge3 big red">매도</span>
                  <span class="font12">2022.10.26 10:30</span>
                </div>
                <ul class="voting_list">
                  <li>
                    <span class="font12">매도가</span>
                    <span class="txt_red">₩ 1,000,000</span>
                  </li>
                  <li>
                    <span class="font12">실현수익률</span>
                    <span class="txt_red">-10%</span>
                  </li>
                </ul>
                <ul class="voting_list">
                  <li>
                    <span class="font12">투자비중</span>
                    <span class="txt_dk">100%</span>
                  </li>
                  <li>
                    <span class="font12">투자기간</span>
                    <span class="txt_dk">100일</span>
                  </li>
                </ul>
              </div>
              <div class="btn_wrap">
                <m-button-3 size="large" class="font16 full" color="textPrimary">더보기</m-button-3>
              </div>
              <div class="between font12 mgt32">
                <span>전체 00개</span>
                <span>
                  <span class="mgr48">실현 수익률</span>
                  <span>예측 결과</span>
                </span>
              </div>
              <div class="divider1 small mga16"/>
              <ul class="list_type2 w100">
                <li>
                  <div class="l_area">
                    <span class="ico_area mgb4">
                      <span class="badge3 small pink"><i class="ico_crown" />프리미엄</span>
                    </span>
                    <p class="txt_tit">몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지</p>
                    <span class="logo_area">
                      <span>
                        <img src="~assets/prd_logo.png" alt="profile" />
                        삼성전자
                      </span>
                      <span class="font20 txt_blue1">
                        +20.26%
                        <span class="txt_dk font16">(5%)</span>
                      </span>
                    </span>
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
                      <span class="font20 txt_blue1">
                        +20.26%
                        <span class="txt_dk font16">(5%)</span>
                      </span>
                    </span>
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
                      <span class="font20 txt_red">
                        -2.58%
                        <span class="txt_dk font16">(5%)</span>
                      </span>
                    </span>
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
                      <span class="font20 txt_blue1">
                        +20.26%
                        <span class="txt_dk font16">(5%)</span>
                      </span>
                    </span>
                  </div>
                </li>
              </ul>
              <div class="btn_wrap">
                <m-button-3 size="large" class="font16 full" color="textPrimary">더보기</m-button-3>
              </div>
              <div class="between font12 mgt32">
                <span>전체 00개</span>
                <span>
                  <span class="mgr48">실현 수익률</span>
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
              <!-- E BLASH -->
            </div>
            <div v-if="tab3 == 'C'">
            <!-- S 포스트 -->
            <div class="no_data_wrap">
                <div class="ico_top pdt32">
                  <i class="ico_error"></i>
                </div>
                <div class="com_message mgb32">
                  북마크한 포스트가 없어요
                </div>
              </div>
              <div class="btn_wrap mgb32">
                <m-button-3 size="large" color="primary"  class="full">북마크 하기</m-button-3>
              </div>
            <p class="font12 mgt32">전체 00개</p>
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
                  <button class="primary mgb16">상세보기</button>
                  <div class="list_box">
                    <span class="img_area"><img src="~assets/test_img.png" alt=""/></span>
                    <div class="txt_area">
                      <div class="tit">오늘 미국장 움직일 이슈: 러시아 2월 침공설 언급한 백악관, 아마존 실적발표 명암, 미 고용 호조에 긴축 우려오늘 미국장 움직일 이슈: 러시아 2월 침공설 언급한 백악관, 아마존 실적발표 명암, 미 고용 호조에 긴축 우려</div>
                      <div class="con">타이틀타이틀타이틀</div>
                      <div class="link_txt"><a href="#">https://news.mt.co.kr/mtviewtviewtvimtviewtviewtvimtviewtviewtvimtviewtviewtvimtviewtviewimtviewtviewtvimtviewtviewtvimtviewtviewimtviewtviewtvimtviewtviewtvimtviewtviewimtviewtviewtvimtviewtviewtvimtviewtview</a></div>
                    </div>
                  </div>
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
                  <button class="primary mgb16">상세보기</button>
                </div>
                <div class="footer_area">
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
            <div class="btn_wrap">
              <m-button-3 class="font16 full" color="textPrimary">더보기</m-button-3>
            </div>
            <!-- E 포스트 -->
            </div>
            <!-- E 관심 -->
          </div>
          <div class="tab_contents" v-if="tab1 == 'C'">
            <!-- S 보팅 -->
            <div class="right mgt16">
              <m-tabs class="card_type small" v-model="tab4" :items="tabs3" />
            </div>
            <div v-if="tab4 == 'A'">
              <!-- S 인사이트-->
              <div class="no_data_wrap">
                <div class="ico_top pdt32">
                  <i class="ico_error"></i>
                </div>
                <div class="com_message mgb32">
                  보팅한 인사이트가 없어요
                </div>
              </div>
              <div class="btn_wrap mgb32">
                  <m-button-3 size="large" color="primary" class="full">보팅하고 보상받기</m-button-3>
              </div>
              <div class="between font12">
                <span>전체 00개</span>
                <span>현재 달성률</span>
              </div>
              <div class="divider1 xsmall"/>
              <ul class="list_type3">
                <li>
                  <div class="tit_wrap">
                    <span class="txt_tit">몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지</span>
                    <span class="badge3 green">성공</span>
                  </div>
                  <div class="logo_area">
                    <img src="~assets/prd_logo.png" alt="profile" />
                      삼성전자
                  </div>
                  <div class="txt_area">
                    <span class="txt01">sMON보상 / 보팅량</span>
                    <span class="txt_box">
                      <span class="txt_blue1">0.9785300935</span> <span class="primary">/ 5VP</span>
                    </span>
                  </div>
                </li>
                <li>
                  <div class="tit_wrap">
                    <span class="txt_tit">몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지</span>
                    <span class="badge3 red">실패</span>
                  </div>
                  <div class="logo_area">
                    <img src="~assets/prd_logo.png" alt="profile" />
                      삼성전자
                  </div>
                  <div class="txt_area">
                    <span class="txt01">sMON보상 / 보팅량</span>
                    <span class="txt_box">
                      <span class="txt_blue1">0.9785300935</span> <span class="primary">/ 5VP</span>
                    </span>
                  </div>
                </li>
                <li>
                  <div class="tit_wrap">
                    <span class="txt_tit">몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지</span>
                    <span class="badge3 gray">진행중</span>
                  </div>
                  <div class="logo_area">
                    <img src="~assets/prd_logo.png" alt="profile" />
                      삼성전자
                  </div>
                  <div class="txt_area">
                    <span class="txt01">sMON보상 / 보팅량</span>
                    <span class="txt_box">
                      <span class="txt_blue1">0.9785300935</span> <span class="primary">/ 5VP</span>
                    </span>
                  </div>
                </li>
              </ul>
              <div class="btn_wrap">
                <m-button-3 size="large" class="font16 full" color="textPrimary">더보기</m-button-3>
              </div>
               <!-- E 인사이트 -->
            </div>
            <div v-if="tab4 == 'B'">
              <!-- S BLASH -->
              <div class="no_data_wrap">
                <div class="ico_top pdt32">
                  <i class="ico_error"></i>
                </div>
                <div class="com_message mgb32">
                  보팅한 BLASH가 없어요
                </div>
              </div>
              <div class="btn_wrap mgb32">
                  <m-button-3 size="large" color="primary" class="full">보팅하고 보상받기</m-button-3>
              </div>
              <div class="between font12">
                <span>전체 00개</span>
                <span>현재 달성률</span>
              </div>
              <div class="divider1 xsmall"/>
              <ul class="list_type3">
                <li>
                  <span class="ico_area mgb4">
                    <span class="badge3 small pink"><i class="ico_crown" />프리미엄</span>
                  </span>
                  <div class="tit_wrap">
                    <span class="txt_tit">몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지</span>
                    <span class="badge3 green">성공</span>
                  </div>
                  <div class="logo_area">
                    <img src="~assets/prd_logo.png" alt="profile" />
                      삼성전자
                  </div>
                  <div class="txt_area">
                    <span class="txt01">sMON보상 / 보팅량</span>
                    <span class="txt_box">
                      <span class="txt_blue1">0.9785300935</span> <span class="primary">/ 5VP</span>
                    </span>
                  </div>
                </li>
                <li>
                  <div class="tit_wrap">
                    <span class="txt_tit">몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지</span>
                    <span class="badge3 red">실패</span>
                  </div>
                  <div class="logo_area">
                    <img src="~assets/prd_logo.png" alt="profile" />
                      삼성전자
                  </div>
                  <div class="txt_area">
                    <span class="txt01">sMON보상 / 보팅량</span>
                    <span class="txt_box">
                      <span class="txt_blue1">0.9785300935</span> <span class="primary">/ 5VP</span>
                    </span>
                  </div>
                </li>
                <li>
                  <div class="tit_wrap">
                    <span class="txt_tit">몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지몬스탁닉넴열글자까지</span>
                    <span class="badge3 gray">진행중</span>
                  </div>
                  <div class="logo_area">
                    <img src="~assets/prd_logo.png" alt="profile" />
                      삼성전자
                  </div>
                  <div class="txt_area">
                    <span class="txt01">sMON보상 / 보팅량</span>
                    <span class="txt_box">
                      <span class="txt_blue1">0.9785300935</span> <span class="primary">/ 5VP</span>
                    </span>
                  </div>
                </li>
              </ul>
              <div class="btn_wrap">
                <m-button-3 size="large" class="font16 full" color="textPrimary">더보기</m-button-3>
              </div>
              <!-- S BLASH -->
            </div>
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
            tab3:ref('A'),
            tab4:ref('A'),
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
            tabs2:[
                {label:'인사이트', value:'A'},
                {label:'BLASH', value:'B'},
                {label:'포스트', value:'C'}
            ],
            tabs3:[
                {label:'인사이트', value:'A'},
                {label:'BLASH', value:'B'},
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
