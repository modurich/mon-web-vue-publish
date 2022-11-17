<template>
  <div class="centerarea_box1">
      <div class="con_box">
        <m-tabs class="line_type large" v-model="tab1" :items="tabs" />
          <div class="tab_contents" v-if="tab1 == 'A'">
            <!-- S 내종목 -->
              <!-- S 구독중 매매시그널 -->
              <q-expansion-item
                class="accordion_type1"
                expand-separator
                default-opened
                label="구독중 매매시그널"
              >
              <p class="pdb32">구독중인 콘텐츠의 시그널을 확인해보세요</p>
              <ul class="product_list">
                <li>
                  <div class="prd_img">
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
                    <span class="badge3 big gray">추매취소</span>
                  </div>
                </li>
                <li>
                  <div class="prd_img">
                    <div class="img_area small">
                      <img src="~assets/prd_logo.png" alt="profile" />
                    </div>
                    <div class="tit_area">
                      <span class="txt01">삼성전자우</span>
                      <span class="txt02">
                        코스피 005931
                      </span>
                    </div>
                  </div>
                  <div class="ico_area">
                    <span class="badge3 big red">자동매도</span>
                  </div>
                </li>
                <li>
                  <div class="prd_img">
                    <div class="img_area small">
                      <img src="~assets/prd_logo.png" alt="profile" />
                    </div>
                    <div class="tit_area">
                      <span class="txt01">삼성전자우</span>
                      <span class="txt02">
                        코스피 005932
                      </span>
                    </div>
                  </div>
                  <div class="ico_area">
                    <span class="badge3 big green">최초매수</span>
                  </div>
                </li>
                <li>
                  <div class="prd_img">
                    <div class="img_area small">
                      <img src="~assets/prd_logo.png" alt="profile" />
                    </div>
                    <div class="tit_area">
                      <span class="txt01">삼성전자우</span>
                      <span class="txt02">
                        코스피 005932
                      </span>
                    </div>
                  </div>
                  <div class="ico_area">
                    <span class="badge3 big orange">홀딩</span>
                  </div>
                </li>
              </ul>
              <div class="btn_wrap mgt16">
                <m-button-3 size="large" lined color="primary" class="full">모두보기</m-button-3>
              </div>
              </q-expansion-item>
              <!-- E 구독중 매매시그널 -->
              <div class="divider"/>
              <!-- S 내가 작성한 콘텐츠 -->
              <div class="accordion_wrap">
                <q-expansion-item
                  class="accordion_type1"
                  expand-separator
                  default-opened
                  label="내가 작성한 콘텐츠"
                >
                <p class="pdb32">진행중인 콘텐츠를 확인해보세요</p>
                <m-tabs class="card_type small mgt16" v-model="tab4" :items="tabs3" />
                <div v-if="tab4 == 'A'">
                  <div class="between font12 mgt32">
                    <span>전체 00개</span>
                    <span>현재 달성률</span>
                  </div>
                  <div class="no_data_wrap">
                    <div class="ico_top">
                      <i class="ico_error"></i>
                    </div>
                    <div class="com_message mgb32 font18">
                      작성된 인사이트가 없어요!
                    </div>
                    <div class="btn_wrap l_row_l">
                      <m-button-3 size="large" color="primary" class="full">인사이트 작성하기</m-button-3>
                    </div>
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
                  <div class="btn_wrap mgt32">
                    <m-button-3 size="large" lined color="primary" class="full">모두보기</m-button-3>
                  </div>
                </div>
                <div v-if="tab4 == 'B'">
                  <div class="between font12 mgt32">
                    <span>전체 00개</span>
                    <span>
                      현재수익률(비중)
                    </span>
                  </div>
                  <div class="divider1 small mga16"/>
                  <ul class="list_type2 w100">
                    <li>
                      <div class="l_area">
                        <p class="txt_tit">CJ제일제당 장기 상승</p>
                        <span class="logo_area">
                          <span>
                            <img src="~assets/prd_logo.png" alt="profile" />
                            삼성전자
                          </span>
                          <span class="font20 txt_blue1">
                            +15.29%
                            <span class="txt_dk font16">(5%)</span>
                          </span>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div class="l_area">
                        <p class="txt_tit">긴 횡보구간의 터널을 빠져나오다.</p>
                        <span class="logo_area">
                          <span>
                            <img src="~assets/prd_logo.png" alt="profile" />
                            삼성전자
                          </span>
                          <span class="font20 txt_blue1">
                            +0.34%
                            <span class="txt_dk font16">(10%)</span>
                          </span>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div class="l_area">
                        <p class="txt_tit">고려산업, 식량 위기 테마</p>
                        <span class="logo_area">
                          <span>
                            <img src="~assets/prd_logo.png" alt="profile" />
                            삼성전자
                          </span>
                          <span class="font20 txt_red">
                            -2.58%
                            <span class="txt_dk font16">(15%)</span>
                          </span>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div class="l_area">
                        <p class="txt_tit">단기 눌림목 공략!</p>
                        <span class="logo_area">
                          <span>
                            <img src="~assets/prd_logo.png" alt="profile" />
                            삼성전자
                          </span>
                          <span class="font20 txt_red">
                            -1.79%
                            <span class="txt_dk font16">(5%)</span>
                          </span>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div class="l_area">
                        <span class="ico_area mgb4">
                          <span class="badge3 small pink"><i class="ico_crown" />프리미엄</span>
                        </span>
                        <p class="txt_tit">최대사십자최대사십자최대사십자최대사십자최대사십자최대사십자최대사사십자최대사십자최대사십자최대사십자최대사</p>
                        <span class="logo_area">
                          <span>
                            <img src="~assets/prd_logo.png" alt="profile" />
                            삼성전자
                          </span>
                          <span class="font20 txt_blue1">
                            +1000.42%
                            <span class="txt_dk font16">(100%)</span>
                          </span>
                        </span>
                      </div>
                    </li>
                  </ul>
                  <div class="btn_wrap mgt32">
                    <m-button-3 size="large" lined color="primary" class="full">모두보기</m-button-3>
                  </div>
                </div>
                </q-expansion-item>
              </div>
              <!-- E 내가 작성한 콘텐츠 -->
              <div class="divider"/>
              <!-- S 관심자산 -->
              <div class="accordion_wrap">
                <button class="tit_btn">편집하기</button>
                <q-expansion-item
                  class="accordion_type1"
                  expand-separator
                  default-opened
                  label="관심자산"
                >
                <m-tabs class="card_type small mgt16" v-model="tab2" :items="tabs1" />
                <div v-if="tab2 == 'A'">
                  <div class="no_data_wrap">
                    <div class="ico_top">
                      <i class="ico_error"></i>
                    </div>
                    <div class="com_message mgb32 font18">
                      관심자산을 추가하고 관찰해보세요!
                    </div>
                    <div class="btn_wrap l_row_l">
                      <m-button-3 size="large" color="primary" class="full">관심자산 추가하기</m-button-3>
                    </div>
                  </div>
                  <ul class="product_list">
                    <li>
                      <div class="prd_img">
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
                      <div class="ico_area wrap">
                        <span class="tag_red">-12.26%</span>
                        <div class="txt01">₩ 352,100</div>
                      </div>
                    </li>
                    <li>
                      <div class="prd_img">
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
                      <div class="ico_area wrap">
                        <span class="tag_blue">+1.24%</span>
                        <div class="txt01">₩ 352,100</div>
                      </div>
                    </li>
                    <li>
                      <div class="prd_img">
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
                      <div class="ico_area wrap">
                        <span class="tag_blue">+1.24%</span>
                        <div class="txt01">₩ 352,100</div>
                      </div>
                    </li>
                    <li>
                      <div class="prd_img">
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
                      <div class="ico_area wrap">
                        <span class="tag_blue">+1.24%</span>
                        <div class="txt01">₩ 352,100</div>
                      </div>
                    </li>
                    <li>
                      <div class="prd_img">
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
                      <div class="ico_area wrap">
                        <span class="tag_blue">+1.24%</span>
                        <div class="txt01">₩ 352,100</div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div v-if="tab2 == 'B'">
                  contents2
                </div>
                </q-expansion-item>
              </div>
              <!-- E 관심자산 -->
              <div class="divider"/>
              <!-- S 관심자산추천 -->
              <q-expansion-item
                class="accordion_type1"
                expand-separator
                default-opened
                label="관심 자산 추천"
              >
              <p>관심 자산 등록하고  빠르게 소식 받아가세요</p>
              <m-tabs class="card_type small mgt16" v-model="tab3" :items="tabs2" />
              <div v-if="tab3 == 'A'">
                
                <m-select class="mgt32" v-model="select1" :options="options" />
                <ul class="product_list">
                  <li>
                    <div class="prd_img">
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
                      <q-checkbox v-model="v_true" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                        indeterminate-icon="help" />
                    </div>
                  </li>
                  <li>
                    <div class="prd_img">
                      <div class="img_area small">
                        <img src="~assets/prd_logo.png" alt="profile" />
                      </div>
                      <div class="tit_area">
                        <span class="txt01">삼성전자우</span>
                        <span class="txt02">
                          코스피 005931
                        </span>
                      </div>
                    </div>
                    <div class="ico_area">
                      <q-checkbox v-model="v_true" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                      indeterminate-icon="help" />
                    </div>
                  </li>
                  <li>
                    <div class="prd_img">
                      <div class="img_area small">
                        <img src="~assets/prd_logo.png" alt="profile" />
                      </div>
                      <div class="tit_area">
                        <span class="txt01">삼성전자우</span>
                        <span class="txt02">
                          코스피 005932
                        </span>
                      </div>
                    </div>
                    <div class="ico_area">
                      <q-checkbox v-model="v_true" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                      indeterminate-icon="help" />
                    </div>
                  </li>
                  <li>
                    <div class="prd_img">
                      <div class="img_area small">
                        <img src="~assets/prd_logo.png" alt="profile" />
                      </div>
                      <div class="tit_area">
                        <span class="txt01">삼성전자우</span>
                        <span class="txt02">
                          코스피 005932
                        </span>
                      </div>
                    </div>
                    <div class="ico_area">
                      <q-checkbox v-model="v_true" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                      indeterminate-icon="help" />
                    </div>
                  </li>
                  <li>
                    <div class="prd_img">
                      <div class="img_area small">
                        <img src="~assets/prd_logo.png" alt="profile" />
                      </div>
                      <div class="tit_area">
                        <span class="txt01">삼성전자우</span>
                        <span class="txt02">
                          코스피 005932
                        </span>
                      </div>
                    </div>
                    <div class="ico_area">
                      <q-checkbox v-model="v_true" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                      indeterminate-icon="help" />
                    </div>
                  </li>
                </ul>
                <div class="btn_wrap l_row_l">
                  <m-button-3 lined size="large" color="primary" class="full">모두보기</m-button-3>
                </div>
              </div>
              <div v-if="tab3 == 'B'">
                contents2
              </div>
              <div v-if="tab3 == 'C'">
                contents2
              </div>
              </q-expansion-item>
              <!-- E 관심자산추천 -->
              <div class="divider"/>
               <!-- S 최근본자산 -->
               <q-expansion-item
                class="accordion_type1"
                expand-separator
                default-opened
                label="최근본자산"
              >
                       
            <swiper class="swiper" :options="swiperOption">
                <swiper-slide>    
                <div class="assets_list">              
                  <div class="blue_box">
                    <button class="ico_close_gray">close</button>
                    <div class="logo"><img src="~assets/prd_logo.png" alt="삼성전자우" /></div>
                    <span class="txt01">삼성전자우삼성전자우삼성전자우</span>
                    <span class="txt02">+29.24%</span>
                  </div>
                </div>
                </swiper-slide>                    
                <swiper-slide>   
                  <div class="assets_list">                 
                 <div class="blue_box">
                  <button class="ico_close_gray">close</button>
                  <div class="logo"><img src="~assets/prd_logo.png" alt="삼성전자우" /></div>
                  <span class="txt01">삼성전자우</span>
                  <span class="txt02">+29.24%</span>
                </div>
              </div>
                </swiper-slide>                    
                <swiper-slide>   
                <div class="assets_list">                 
                  <div class="red_box">
                    <button class="ico_close_gray">close</button>
                    <div class="logo"><img src="~assets/prd_logo.png" alt="삼성전자우" /></div>
                    <span class="txt01">삼성전자우</span>
                    <span class="txt02">+29.24%</span>
                  </div>
                </div>
                </swiper-slide>                    
                <swiper-slide>     
                  <div class="assets_list">               
                  <div class="red_box">
                    <button class="ico_close_gray">close</button>
                    <div class="logo"><img src="~assets/prd_logo.png" alt="삼성전자우" /></div>
                    <span class="txt01">삼성전자우</span>
                    <span class="txt02">+29.24%</span>
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide>     
                  <div class="assets_list">               
                  <div class="blue_box">
                    <button class="ico_close_gray">close</button>
                    <div class="logo"><img src="~assets/prd_logo.png" alt="삼성전자우" /></div>
                    <span class="txt01">삼성전자우</span>
                    <span class="txt02">+29.24%</span>
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide>     
                  <div class="assets_list">               
                  <div class="red_box">
                    <button class="ico_close_gray">close</button>
                    <div class="logo"><img src="~assets/prd_logo.png" alt="삼성전자우" /></div>
                    <span class="txt01">삼성전자우</span>
                    <span class="txt02">+29.24%</span>
                    </div>
                  </div>
                </swiper-slide>
                </swiper>                               
            
            </q-expansion-item>
               <!-- E 최근본자산 -->
              <div class="divider mgb0"/>
               <!-- S 배너 -->
              <div class="banner_box mg0">
                  <img src="~assets/banner_img01.png" alt="BLASH 구독하고 실시간 시그널 기능을 경험해보세요!" class="pc">
                  <img src="~assets/mob_banner_img01.png" alt="BLASH 구독하고 실시간 시그널 기능을 경험해보세요!" class="mob">
              </div>
               <!-- E 배너 -->
              <div class="divider mgt0"/>
                <!-- S 팔로우 인사이트 -->
                <q-expansion-item
                class="accordion_type1"
                expand-separator
                default-opened
                label="팔로우 인사이트"
              >
              <p class="pdb32">나의 팔로우가 작성한 인사이트 종목</p>
              <div class="no_data_wrap">
                <div class="ico_top">
                  <i class="ico_error"></i>
                </div>
                <div class="com_message mgb32 font18">
                  팔로우하고 친구의 콘텐츠를 확인해보세요
                </div>
                <div class="btn_wrap l_row_l">
                  <m-button-3 size="large" color="primary" class="full">플레이어 둘러보기</m-button-3>
                </div>
              </div>
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
                    <span class="badge3 big red">하락예측</span>
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
                    <span class="badge3 big green">상승예측</span>
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
                    <span class="badge3 big green">상승예측</span>
                  </div>
                </li>
              </ul>
              <div class="btn_wrap l_row_l">
                  <m-button-3 lined size="large" color="primary" class="full">모두보기</m-button-3>
                </div>
              </q-expansion-item>
              <!-- E 팔로우 인사이트 -->
              <div class="divider"/>
               <!-- S 보러가기 -->
               <div class="view_box">
                  <p class="list_wrap">
                    <i class="ico_alarm_new"></i>
                    <span>
                    팔로우가 작성한 BLASH 콘텐츠 <strong>12</strong>개가 추가됐어요!
                    </span>
                  </p>
                  <div class="btn_wrap l_row_l">
                    <m-button-3 size="large" color="primary" class="full">보러가기</m-button-3>
                  </div>
              </div>
               <!-- E 보러가기 -->
              <div class="divider"/>
                <!-- S 보팅 -->
                <q-expansion-item
                class="accordion_type1"
                expand-separator
                default-opened
                label="보팅"
              >
              <p class="pdb32">내가 보팅중인 콘텐츠 종목</p>
              <div class="no_data_wrap">
                <div class="ico_top">
                  <i class="ico_error"></i>
                </div>
                <div class="com_message mgb32 font18">
                  보팅중인 콘텐츠가 없어요
                </div>
                <div class="btn_wrap l_row_l">
                  <m-button-3 size="large" color="primary" class="full">보팅하고 보상받기</m-button-3>
                </div>
              </div>
              <!-- <div class="between font12 mgt32">
                <span>전체 00개</span>
              </div>
              <div class="divider1 xsmall"/> -->
              <ul class="list_type3 mgt32">
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
              <div class="btn_wrap mgt32">
                <m-button-3 size="large" lined color="primary" class="full">모두보기</m-button-3>
              </div>
              </q-expansion-item>
              <!-- E 보팅 -->
           <!-- E 내종목 -->
            
            
          </div>
          <div class="tab_contents" v-if="tab1 == 'B'">
            <!--S 발견-->
            <!--E 발견-->
          </div>
      </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
components: { Swiper, SwiperSlide },
name:"H_10000_P", 
data() {
      return {
        select1: ref("전체"),
        options: [
          '전체', '선택1','선택2','선택3'
        ],
        rad1:ref('A'),
        tab1: ref('A'),
        tabs: [
          { label: '내종목', value: 'A', icon: '' },
          { label: '발견', value: 'B', icon: '' },
         
        ],
        tab2: ref('A'),
        tabs1: [
          { label: '기본', value: 'A', icon: '' },
          { label: '그룹1', value: 'B', icon: '' },
         
        ],
        tab3: ref('A'),
        tabs2: [
          { label: '전체', value: 'A', icon: '' },
          { label: '주식', value: 'B', icon: '' },
          { label: '코인', value: 'C', icon: '' },
         
        ],
        tab4: ref('A'),
        tabs3: [
          { label: '인사이트', value: 'A', icon: '' },
          { label: 'BLASH', value: 'B', icon: '' },
         
        ],
        v_true: ref(true),
        progress: 0.4,
        swiperOption: {
              slidesPerView: 5,
              spaceBetween: 24,
              breakpoints: {
                  1024: {
                      slidesPerView: 5,
                      spaceBetween: 24
                  },
                  768: {
                      slidesPerView: 5,
                      spaceBetween: 24
                  },
                  650: {
                      slidesPerView: 5,
                      spaceBetween: 24
                  },
                  520: {
                      slidesPerView: 3,
                      spaceBetween: 24
                  },
                  320: {
                      slidesPerView: 3,
                      spaceBetween: 24
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

