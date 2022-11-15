<template>
    <div class="centerarea_box1">
        <div class="con_box">
          <h2 class="line_type">팔로우 콘텐츠</h2>
          <m-tabs class="line_type large" v-model="tab1" :items="tabs"/>
          <div class="tab_contents" v-if="tab1 == 'A'">
              <ul class="thumb_list mgt16">
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
                          <span class="badge3 small dark_green">주식</span>
                          <span class="badge3 small yellow">BEST</span>
                      </span>
                      <span>매수대기</span>
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
                          <span class="txt02 red">₩ ??????</span>
                        </div>
                      </div>
                      <div class="img_area"><img src="~assets/graph_down.svg" class="ico_graph_up" alt=""/></div>
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
                      <span class="txt_area"><i class="ico_clock" />보팅 2일 남음</span>
                      <m-button-3 color="darkPurple" size="small"><i class="ico_check01" /><span class="point">1,200</span> / 2000 VP
                      </m-button-3>
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
                      <span>종료</span>
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
                      <div class="img_area"><img src="~assets/ico_stamp01.svg" alt="실패"/></div>
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
                      <span>종료</span>
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
                      <div class="img_area"><img src="~assets/ico_stamp.svg" alt="성공"/></div>
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
              <div class="btn_wrap">
                <m-button-3 class="font16 full" size="large" color="textPrimary">더보기</m-button-3>
              </div>
          </div>
          <div class="tab_contents" v-if="tab1 == 'B'">
            <ul class="thumb_list mgt16">
              <li>
                <div class="top_wrap">
                  <div class="my_profile">
                    <div class="img_area">
                      <img src="~assets/profile_img1.png" alt="profile" />
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


              <li>
                <div class="top_wrap">
                  <div class="my_profile">
                    <div class="img_area">
                      <img src="~assets/profile_img1.png" alt="profile" />
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
                    <span class="txt_area"><i class="ico_clock" />보팅 2일 남음</span>
                    <m-button-3 color="primary" size="small" @click="dailog1 = true"><i class="ico_vote" /><span class="point">1,200</span> / 2000 VP
                    </m-button-3>
                  </div>
                </div>
              </li>
              <li class="active">
                <div class="top_wrap">
                  <div class="my_profile">
                    <div class="img_area">
                      <img src="~assets/profile_img1.png" alt="profile" />
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
                    <span class="txt_area"><i class="ico_clock" />보팅 2일 남음</span>
                    <m-button-3 color="darkPurple" size="small" @click="dailog1 = true"><i class="ico_check01" /><span class="point">1,200</span> / 2000 VP
                    </m-button-3>
                  </div>
                </div>
              </li>
              <li class="active">
                <div class="top_wrap">
                  <div class="my_profile">
                    <div class="img_area">
                      <img src="~assets/profile_img1.png" alt="profile" />
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


              <li class="active">
                <div class="top_wrap">
                  <div class="my_profile">
                    <div class="img_area">
                      <img src="~assets/profile_img1.png" alt="profile" />
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
              <li  class="active">
                <div class="top_wrap">
                  <div class="my_profile">
                    <div class="img_area">
                      <img src="~assets/profile_img1.png" alt="profile" />
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
              <li class="active">
                <div class="top_wrap">
                  <div class="my_profile">
                    <div class="img_area">
                      <img src="~assets/profile_img1.png" alt="profile" />
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
            <div class="btn_wrap">
              <m-button-3 class="font16 full" size="large" color="textPrimary">더보기</m-button-3>
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
                {label:'인사이트', value:'A', icon:''},
                {label:'BLASH', value:'B', icon:''},
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
