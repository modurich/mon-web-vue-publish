<i18n>
  {
      "ko": {
          "computed": {
              "chartOptions": {
                  "xAxis": {
                      "label1": "적시성",
                      "label2": "논리성",
                      "label3": "정확성",
                      "label4": "독창성",
                      "label5": "가독성"
                  }
              }
          }
      },
      "en": {
          "computed": {
              "chartOptions": {
                  "xAxis": {
                      "label1": "Timely",
                      "label2": "Logical",
                      "label3": "Accuracy",
                      "label4": "Creatively",
                      "label5": "Readability"
                  }
              }
          }
      }
  }
  </i18n>
<template>
    <div class="centerarea_box1">
         <!-- S show header-->
         <div id="dynamic" class="sticky_header">
            <span class="logo">
              <img src="~assets/prd_logo.png" alt="profile" />
              삼성전자
            </span>    
            <span class="txt01">₩ 352,100</span> 
          </div>
          <!-- E show header-->
          <!-- <div class="fixed_btn_bottom">
           <m-button-3 size="large" color="primary">구독하기 (알림받기)</m-button-3 >
        </div> -->
        <div class="fixed_btn_bottom btn2">
          <m-button-3 lined size="large" color="primary">구독취소</m-button-3 >
          <m-button-3  size="large" color="primary"><i class="ico_alarm_off_w"/><i class="ico_alarm_on_w"/>알림켜기</m-button-3 >
        </div>
        <div class="con_box">
          
          <div class="box_contents pdt16"> 
            <div ref="s03" class="tit_type01">
              <h2 class="line_type">BLASH 미리보기</h2>
              <p class="badge_wrap">
                <span class="badge_area">
                  <span class="badge3 small green">주식</span>
                  <span class="badge3 small yellow">BEST</span>
                  <span class="badge3 small pink"><i class="ico_crown" />프리미엄</span>
                </span>
                <span>
                  <button class="ico_menu mgl8" color="secondary" label="Auto-Close Menu">
                    menu
                    <q-menu auto-close :offset="[30, 10]">
                      <q-list style="min-width: 80px">
                        <q-item clickable>
                          <q-item-section>락업정보</q-item-section>
                        </q-item>
                        <q-item clickable>
                          <q-item-section>보내기</q-item-section>
                        </q-item>
                      </q-list>
                    </q-menu>
                  </button>
                </span>
              </p>
              <p class="tit_area">제목은 2글자 이상 최대 40자입니다</p>
              <p class="badge_wrap">
                <span class="badge_area">
                  <span class="ico_f ico_view">7</span>
                  <span class="ico_f ico_pen">2022.10.26 10:30</span>
                </span>
                <button class="boost active">
                  <span class="txt_area">구독하기</span><i class="ico_boost"/>
                </button>
              </p>
              <div class="hashtag_wrap">
                <span class="txt_area">
                  <span>TX 해시</span>
                  0xe10b07920111e59e5bc93ca153ee2c7d46rdfg30xe10b07920111e59e5bc93ca153ee2c7d46rdfg30xe10b07920111e59e5bc93ca153ee2c7d46rdfg3
                </span>
                <span class="btn_area"><button class="ico_copy_w"/></span>
              </div>
               <!--S 투자 리스트-->
               <div class="invest_wrap">
                <div class="between">
                  <span class="badge_area">
                    <span class="badge3 small orange">투자주의환기</span>
                  </span>
                  <span class="font10 primary">장중 / 실시간</span>
                </div>
                <div ref="s01" class="pro_area" v-show="!isshow">
                  <p class="logo_wrap">
                    <span class="logo"><img src="~assets/prd_logo.png" alt="" /></span>
                    <span class="txt_area">
                      <span class="txt01">삼성전자 우</span>
                      <span class="txt02">코스닥 반도치 087600</span>
                    </span>
                  </p>
                  <p class="txt_wrap">
                    <span class="txt_area txt_blue1">
                      <span class="txt01">₩ 352,100</span>
                      <span class="ico_area"><span class="tag_blue small">+4.26%</span></span>
                      <span class="txt02">▲ 2,000</span>
                    </span>
                    <span class="bar_area">
                      <span class="line_bar_wrap blue">
                        <span class="line"></span>
                        <span class="bar" style="top:35%;height: 30%;"></span>
                      </span>
                    </span>
                  </p>
                </div>
              </div>
              <!-- S show header-->
              <div id="dynamic" class="sticky_header">
                  <span class="logo">
                    <img src="~assets/prd_logo.png" alt="profile" />
                    삼성전자
                  </span>    
                  <span class="txt01">₩ 352,100</span> 
                </div>
                <!-- E show header-->
              <!--E 투자 리스트-->
            </div>
           
            <m-tabs class="line_type large sticky_tab" v-model="tab1" :items="tabs"/>
            <div class="tab_contents" v-if="tab1 == 'A'">
              <h3 class="between mgb32">
                <span class="font16">D-27</span>
                <span class="font12 txt_gray medium flex">
                  <span class="badge3 short mgr4">단기</span>
                  <span class="badge3 middle mgr4">중기</span>
                  <span class="badge3 long mgr4">장기</span> 22..9.13 ~ 22.09.19
                </span>
              </h3>
              <div class="chart_message brown">최초 매수 대기중입니다.</div>
              <div class="chart_message blue">현재가가 추천 매수구간에 있습니다.</div>
              <div class="chart_message red">현재가가 추천매수밴드 구간을 벗어났습니다.</div>
              <ul class="insight_list list3 mgt32">
                  <li>
                      <span class="txt01">목표수익률</span>
                      <span class="txt02"><i class="tag_blue big">+1.24%</i></span>
                  </li>
                  <li>
                      <span class="txt01">투자비중</span>
                      <span class="txt02">100%</span>
                  </li>
                  <li>
                      <span class="txt01">투자기간</span>
                      <span class="txt02">100일</span>
                  </li>
              </ul>
              <div class="chart_list_wrap">
                <div class="chart_area">
                  <!-- S 차트 들어가는 곳-->
                  <div class="gaug_wrap"><GaugeChart :fld01="100" :fld02="120"/></div>
                  <!-- E 차트 들어가는 곳-->
                </div>
                <ul class="insight_list list3">
                    <li>
                        <span class="txt01">목표수익률</span>
                        <span class="txt02"><i class="tag_blue big">+1.24%</i></span>
                    </li>
                    <li>
                        <span class="txt01">투자비중</span>
                        <span class="txt02">100%</span>
                    </li>
                    <li>
                        <span class="txt01">투자기간</span>
                        <span class="txt02">100일</span>
                    </li>
                </ul>
              </div>
              <div class="chart_list_wrap">
                <div class="chart_area">
                  <div class="lcon_list">
                    <span class="txt_area">
                      <span class="txt01">목표가 달성률</span>
                      <span class="txt02">9999.9%</span>
                    </span>
                    <div class="img_area center">
                      <!-- <img src="~assets/ico_stamp.svg" alt="성공" />
                      <p class="center txt_blue1">목표가 도달</p>
                      <img src="~assets/ico_stamp01.svg" alt="실패" />
                      <p class="center txt_red">손절가 도달</p>
                      <img src="~assets/ico_stamp02.svg" alt="무효" />
                      <p class="center txt_brown">기간 종료 (수익)</p> -->
                      <img src="~assets/ico_stamp03.svg" alt="매수실패" /> 
                      <p class="center">취소</p>
                    </div>
                  </div>
                </div>
                <ul class="insight_list list3">
                    <li>
                        <span class="txt01">목표수익률</span>
                        <span class="txt02"><i class="tag_blue big">+1.24%</i></span>
                    </li>
                    <li>
                        <span class="txt01">투자비중</span>
                        <span class="txt02">100%</span>
                    </li>
                    <li>
                        <span class="txt01">투자기간</span>
                        <span class="txt02">100일</span>
                    </li>
                </ul>
              </div>
                <div class="voting_list_wrap">
                <ul class="voting_list">
                  <li>
                    <span class="font12">목표가</span>
                    <span class="font18 txt_blue1">$ 0.1234567890</span>
                  </li>
                  <li>
                    <span class="font12">기준가 (매수고가)</span>
                    <span class="font18 txt_dk">$ 0.1234567890</span>
                  </li>
                  <li>
                    <span class="font12">매수저가</span>
                    <span class="font18 txt_dk">$ 0.1234567890</span>
                  </li>
                  <li>
                    <span class="txt_red font12">손절가</span>
                    <span class="font18 txt_red"><span class="tag_red mgr8">-0.81%</span> $ 0.1234567890</span>
                  </li>
                </ul>
                <ul class="voting_list">
                  <li class="col2">
                    <span class="font12">최초 매수</span>
                    <span class="txt_dk">YYYY.MM.DD hh:mm:ss</span>
                  </li>
                  <li class="col2">
                    <span class="font12">1차 추매</span>
                    <span class="txt_dk">대기중</span>
                  </li>
                </ul>
              </div>
             
              <div class="divider" />
              <div class="btn_wrap mgt16">
                  <m-button-3 size="large" color="primary" class="full">차트보기</m-button-3>
              </div>
              <div class="divider" />
              <h3 class="between">
                <span class="font16">종목 소개</span>
              </h3>
              <div class="mga32">
                이 종목은 상승이후 지지라인을 이탈하는 모습을 보였으나 저항구간을 재차 돌파하며 상승의 의지를 보여주고 있는 종목으로 현재 돌파 이후 눌림목 구간으로 공략이 가능해보인다.
              </div>
              <div class="divider" />
              <h3 class="between">
                <span class="font16">분석</span>
              </h3>
              <div class="mga32">
                루시드와 엘지 엔솔 관련 종목으로 부각받았던 이력이있는 나라엠엔디입니다. 최근 삼기를 비롯한 자동차 부품 관련 종목들의 흐름이 매우 강력합니다.<br/>
                기계 관련 종목이기도 합니다.<br/>
                <span class="primary">$삼성전자</span> 실적은 미미하지만 흑자상태를 보이고 있는 종목으로 최근 하락추세를 걷어 올리는 힘이 나오고 있습니다.
                다만, 조정과 매물소화 과정이 필요합니다. 단기 급등이후 숨고르기 국면으로 예상합니다.
              </div>
              <p class="tag_area">
                <span class="primary">＄관련종목</span>
                <span class="primary">#금리인상</span>
                <span class="primary">#친환경</span>
              </p>
              <p class="tag_area">
                <span>#금리인상</span>
                <span>#친환경</span>
                <span>#로봇관련주</span>
                <span>#최대스무자최대스무자최대스무자최대스무자</span>
              </p>
              <div class="btn_wrap mgt32">
                  <m-button-3 size="large" color="darkYellow" class="full">
                    <i class="ico_prize_w big mgr16"/> BEST 제안 발의
                  </m-button-3>
              </div>
              <div class="btn_area_center">
                <button class="active">
                  <i class="btn_thumbsUp"/>
                  <span class="txt_area">좋아요</span>
                </button>
                <button>
                  <i class="btn_share"/>
                  <span class="txt_area">공유</span>
                </button>
              </div>
              <div class="divider" />
              <h3 class="between">
                <span class="font16">시그널</span>
              </h3>
              <div class="voting_list_wrap line">
                <div class="between mgt10">
                  <span class="ico_area">
                    <span class="badge3 big green">최초매수</span>
                    <span class="badge3 big orange icon"><i class="ico_result_type01"/></span>
                    <!-- <button class="badge3 big orange icon"><i class="ico_result_type01"/></button> -->
                  </span>
                  <span class="font12">2022.10.26 10:30</span>
                </div>
                <ul class="voting_list">
                  <li class="col2">
                    <span class="font12">매수가</span>
                    <span class="txt_blue1">₩ ????? ~ ?????</span>
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
                <div class="between mgt10">
                  <span class="badge3 big green">최초매수</span>
                  <span class="font12">2022.10.26 10:30</span>
                </div>
                <ul class="voting_list">
                  <li class="col2">
                    <span class="font12">매수가</span>
                    <span class="txt_blue1">₩ ????? ~ ?????</span>
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
              <div class="divider" />
              <div class="font10 mga32">
                본 자료는 몬스탁의 이용약관 및 게시물 작성규정에 동의하고 기준에 따라 작성 권한을 획득한 회원에 의해 작성된 자료입니다. 본 자료는 회원의 투자 판단을 돕기 위한 정보제공을 목적으로 작성된 참고용 자료이며 당사와 작성자는 제공되는 정보의 완전성이나 정확성을 보장하지 않습니다.
                모든 투자의사 결정은 투자자 자신의 판단과 책임하에 하시기 바랍니다. 본 자료는 어떠한 경우에도 고객의 증권투자 결과에 대한 법적 책임소재의 증빙자료로 사용될 수 없습니다.
              </div>
              <div class="divider" />
              <h3 class="between">
                <span class="font16">보팅</span>
                <span class="font12 txt_red medium flex">보팅이 종료되었어요</span>
                <!-- <span class="font12 secondary medium flex"><i class="ico_time_y"/>2일 23:53:06</span> -->
              </h3>
              <div class="voting_list_wrap">
                <ul class="voting_list">
                  <li>
                    <span class="font12">누적 보팅 파워 / 전체 보팅 한도</span>
                    <span><span class="primary">2,000</span> / 10,000VP</span>
                  </li>
                  <li>
                    <span class="font12">전체 보팅 보상 (예상)</span>
                    <span class="primary flex">324.1234567890<i class="ico_mon"/></span>
                  </li>
                </ul>
              </div>
              <div class="center txt_dk mgt32">
                종목 공개 후 보팅할 수 있어요
              </div>
              <div class="btn_wrap mgt32">
                  <m-button-3 size="large" color="primary" class="full">
                    <i class="ico_vote big mgr16"/>보팅하기
                  </m-button-3>
              </div>
              <div class="divider" />
              <h3 class="between">
                <span class="font16">콘텐츠 평점</span>
                <span class="font12 txt_gray medium">참여 123명</span>
              </h3>
              <div>
                <highcharts ref="chart" :constructor-type="'chart'" :options="chartOptions"></highcharts>
                <p class="center primary font16 bold">평균평점 4.44</p>
              </div>
              <div class="divider" />
              <h3 class="between">
                <span class="font16">댓글<span class="primary mgl4">23</span></span>
                <button class="font12 txt_gray medium">최근 작성순</button>
              </h3>
              <!-- <div class="contents_list_wrap">
                <div class="mgb16">
                  <span class="font16 txt_dk">콘텐츠 평점</span> 
                  <span class="font12 mgl8">평점은 작성 후 수정/삭제할 수 없습니다.</span>
                </div>
                <div class="list_area">
                  <div class="txt_area primary">유용한가요?</div>
                  <div class="star">
                    <q-rating
                      v-model="ratingModel"
                      size="21px"
                      color="primary"
                      icon="star_border"
                      icon-selected="star"
                    />
                    </div>
                </div>
                <div class="list_area">
                  <div class="txt_area">논리적인가요?</div>
                  <div class="star">
                    <q-rating
                      v-model="ratingMode2"
                      size="21px"
                      color="primary"
                      icon="star_border"
                      icon-selected="star"
                    />
                    </div>
                </div>
                <div class="list_area">
                  <div class="txt_area">정보가 확실한가요?</div>
                  <div class="star">
                    <q-rating
                      v-model="ratingMode3"
                      size="21px"
                      color="primary"
                      icon="star_border"
                      icon-selected="star"
                    />
                    </div>
                </div>
                <div class="list_area">
                  <div class="txt_area">새로운 시각인가요?</div>
                  <div class="star">
                    <q-rating
                      v-model="ratingMode4"
                      size="21px"
                      color="primary"
                      icon="star_border"
                      icon-selected="star"
                    />
                    </div>
                </div>
                <div class="list_area">
                  <div class="txt_area">읽기 편했나요?</div>
                  <div class="star">
                    <q-rating
                      v-model="ratingMode5"
                      size="21px"
                      color="primary"
                      icon="star_border"
                      icon-selected="star"
                    />
                    </div>
                </div>
              </div>
              <div class="mgt16">
                <m-textarea :maxlength="1000" :showError="false" :minHeight="textarea1.minHeight"
                :counter="textarea1.counter" :value="textarea1.value" :bottomMessage="textarea1.bottomMessage"
                :height="50" placeholder="저작권 등 다른 사람의 권리를 침해하거나 명예를 훼손하는 게시글은 이용약관과 관련 법률에 의해 제재를 받을 수 있습니다."/>
              </div> -->
              <div class="btn_wrap mgt16">
                  <m-button-3 size="large" color="primary" class="full">평점 / 댓글 작성</m-button-3>
              </div>
            
              
              <div class="no_data_wrap">
                <!-- <div class="ico_top">
                  <i class="ico_error"></i>
                </div> -->
                <div class="com_message font18 mga48">
                  아직 댓글이 없습니다.
                </div>
              </div>
              <!-- <div class="mgt32 mgb16">최근 작성일 순</div>
              <ul class="comment_list">
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
                  <div class="con_area">삼성전자 가즈아</div>
                  <div class="footer_area">
                    <div class="ico_wrap">
                      <span class="ico_area">
                        <button class="ico_f ico_thumbsUp">624</button>
                        <button class="ico_f ico_comment">7</button>
                      </span>
                      <span class="flex">
                        2022.10.26
                        <button class="ico_menu mgl8" color="secondary" label="Auto-Close Menu">
                          menu
                          <q-menu auto-close :offset="[30, 10]">
                            <q-list style="min-width: 80px">
                              <q-item clickable>
                                <q-item-section>락업정보</q-item-section>
                              </q-item>
                              <q-item clickable>
                                <q-item-section>보내기</q-item-section>
                              </q-item>
                            </q-list>
                          </q-menu>
                        </button>
                      </span>
                    </div>
                  </div>
                </li>
                <li class="reply_wrap">
                  <div class="ico_reply"></div>
                  <div class="reply_area">
                    <div class="top_wrap">
                      <div class="my_profile">
                        <div class="img_area">
                          <img src="~assets/profile_img1.png" alt="profile"/>
                        </div>
                        <div class="tit_area">
                          <span class="txt_tit">몬스탁닉넴열글자까지</span>
                          <span class="badge_area">
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
                    <div class="con_area">삼성전자 가즈아</div>
                    <div class="footer_area">
                      <div class="ico_wrap">
                        <span class="ico_area">
                          <button class="ico_f ico_thumbsUp active">624</button>
                          <button class="ico_f ico_comment">7</button>
                        </span>
                        <span class="flex">
                          2022.10.26
                          <button class="ico_menu mgl8" color="secondary" label="Auto-Close Menu">
                            menu
                            <q-menu auto-close :offset="[30, 10]">
                              <q-list style="min-width: 80px">
                                <q-item clickable>
                                  <q-item-section>락업정보</q-item-section>
                                </q-item>
                                <q-item clickable>
                                  <q-item-section>보내기</q-item-section>
                                </q-item>
                              </q-list>
                            </q-menu>
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="reply_wrap">
                  <div class="ico_reply"></div>
                  <div class="reply_area">
                    <div class="top_wrap">
                      <div class="my_profile">
                        <div class="img_area">
                          <img src="~assets/profile_img1.png" alt="profile"/>
                        </div>
                        <div class="tit_area">
                          <span class="txt_tit">몬스탁닉넴열글자까지</span>
                          <span class="badge_area">
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
                    <div class="con_area">삼성전자 가즈아</div>
                    <div class="footer_area">
                      <div class="ico_wrap">
                        <span class="ico_area">
                          <button class="ico_f ico_thumbsUp active">624</button>
                          <button class="ico_f ico_comment">7</button>
                        </span>
                        <span class="flex">
                          2022.10.26
                          <button class="ico_menu mgl8" color="secondary" label="Auto-Close Menu">
                            menu
                            <q-menu auto-close :offset="[30, 10]">
                              <q-list style="min-width: 80px">
                                <q-item clickable>
                                  <q-item-section>락업정보</q-item-section>
                                </q-item>
                                <q-item clickable>
                                  <q-item-section>보내기</q-item-section>
                                </q-item>
                              </q-list>
                            </q-menu>
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul> -->
              <!-- <div class="btn_wrap">
                <m-button-3 size="large" class="font16 full" color="textPrimary">더보기</m-button-3>
              </div> -->
              <div class="divider" />
              <div class="btn_wrap mgt16">
                  <m-button-3 lined size="large" color="lightGrey" class="full">전체 BLASH 보기</m-button-3>
              </div>
            </div>



            <div class="tab_contents" v-if="tab1 == 'B'">
             
            <!-- S 통계 -->
            <ul class="follow_info_wrap mga32">
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
              </ul>
           
             <div class="divider" />
             <div class="add_tab_tit">
              <h3>
                <span>통계</span>
              </h3>
              <m-tabs class="card_type small" v-model="tab2" :items="tabs1" />
            </div>
              <div v-if="tab2 == 'A'">
                <div class="radio_wrap right">
                    <m-radio v-model="rad1" val="A" label="전체"/>
                    <m-radio v-model="rad1" val="B" label="주식"/>
                    <m-radio v-model="rad1" val="C" label="코인"/>
                </div>
                <div class="l_row_l between">
                  <span class="font16 txt_dk">종료된 인사이트</span>
                  <span>YYYY.MM.DD hh:mm:ss (UTC+9)</span>
                </div>
                <div class="mgb32">
                  <m-select v-model="select1" :options="options" />
                </div>
                <ul class="insight_list">
                    <li>
                        <span class="txt01">총 예측 횟수</span>
                        <span class="txt02">27건</span>
                    </li>
                    <li>
                        <span class="txt01">평점</span>
                        <span class="txt02 primary"><i class="ico_star"/>4.60</span>
                    </li>
                    <li>
                        <span class="txt01">성공률</span>
                        <span class="txt02">72.61%</span>
                    </li>
                    <li>
                        <span class="txt01">수익률</span>
                        <span class="txt02 txt_blue1">7.84%</span>
                        <!-- 수익률 class txt_red,txt_blue1 -->
                    </li>
                </ul>
                <q-table
                  :data="tbRowData"
                  :columns="tbColInfo"
                  row-key="fld04"
                  no-data-label="데이터가 존재하지 않습니다."
                  hide-bottom
                  :visible-columns="table1"
                  :rows-per-page-options="[0]" 
                  :pagination.sync="table1page"
                >
                  <template v-slot:header="props">
                    <q-tr :props="porps">
                      <q-th key="fld01" :props="props">종료일자</q-th>
                      <q-th key="fld04" :props="props">자산</q-th>
                      <q-th key="fld05" :props="props">예측</q-th>
                      <q-th key="fld10" :props="props">예측결과</q-th>
                    </q-tr>
                  </template>
                  <template v-slot:body="props">
                    <q-tr :props="props">
                      <q-td key="fld01" :props="props">
                        {{ props.row.fld01 }}
                      </q-td>
                      <q-td key="fld04" :props="props">
                          {{ props.row.fld04 }}
                      </q-td>
                      <q-td key="fld05" :props="props">
                        <span v-if="props.row.fld05 == 'U'" class="ico_up">상승</span>
                        <span v-else class="ico_down">하락</span>
                      </q-td>
                      <q-td key="fld10" :props="props">
                        <span v-if="props.row.fld10 == 'S'" class="txt_blue1">성공</span>
                        <span v-else-if="props.row.fld10 == 'F'" class="txt_red">실패</span>
                        <span v-else-if="props.row.fld10 == 'N'" class="txt_brown">무효</span>
                        <span v-else class="txt_gray">취소</span>
                      </q-td>
                    </q-tr>
                  </template>
                </q-table>
                <div class="pagination_wrap">
                  <q-pagination
                    v-model="current"
                    :max="5"
                    direction-links
                    boundary-links
                    class="custom_type1"
                  />
                </div>
                <div class="divider1" />
                <div class="l_row_l between">
                  <span class="font16 txt_dk">진행중인 인사이트</span>
                  <!-- <span>22.09.20 ~ 22.09.20</span> -->
                </div>
                <div class="blash_wrap">
                  <div class="blash_chart">
                    <div class="chart_wrap">
                      <div class="chart_area">
                        <highcharts 
                          :options="chartOptions1"
                          >
                        </highcharts>
                      </div>
                      <ul class="regend_box">
                        <li>
                          <span class="tit"><i class="dot" style="background:#c1b7ff"/>단기</span>
                          <span class="con"><span class="primary">3</span>건</span>
                        </li>
                        <li>
                          <span class="tit"><i class="dot" style="background:#8673ff"/>중기</span>
                          <span class="con"><span class="primary">6</span>건</span>
                        </li>
                        <li>
                          <span class="tit"><i class="dot" style="background:#4c34dc"/>장기</span>
                          <span class="con"><span class="primary">31</span>건</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="blash_list">
                    <ul class="return_wrap">
                      <li>
                          <span class="txt01">상승 예측</span>
                          <span class="txt02">12건</span>
                      </li>
                      <li>
                          <span class="txt01">하락 예측</span>
                          <span class="txt02">45건</span>
                      </li>
                  </ul>
                  </div>
                </div>
                <q-table 
                  :data="tbRowData" 
                  :columns="tbColInfo" 
                  row-key="fld04" 
                  no-data-label="데이터가 존재하지 않습니다." 
                  hide-bottom
                  :visible-columns="table3"
                  :pagination.sync="table1page">
                  <template v-slot:header="props">
                    <q-tr :props="porps">
                      <q-th key="fld04" :props="props">자산</q-th>
                      <q-th key="fld03" :props="props">기간</q-th>
                      <q-th key="fld06" :props="props">목표</q-th>
                      <q-th key="fld05" :props="props">예측</q-th>
                      <q-th key="fld09" :props="props">달성률</q-th>
                    </q-tr>
                  </template>
                  <template v-slot:body="props">
                    <q-tr :props="props">
                      <q-td key="fld04" :props="props">
                        {{ props.row.fld04 }}
                      </q-td>
                      <q-td key="fld03" :props="props">
                        <span class="badge3" v-if="props.row.fld03 == '단기'" style="background:#c1b7ff">{{ props.row.fld03 }}</span>
                        <span class="badge3" v-else-if="props.row.fld03 == '중기'" style="background:#8673ff">{{ props.row.fld03 }}</span>
                        <span class="badge3" v-else style="background:#4c34dc">{{ props.row.fld03 }}</span>
                      </q-td>
                      <q-td key="fld06" :props="props">
                        <span v-if="props.row.fld05 == 'U'" class="ico_up">{{ props.row.fld06 }}%</span>
                        <span v-else class="ico_down">{{ props.row.fld06 }}%</span>
                      </q-td>
                      <q-td key="fld05" :props="props">
                        <span v-if="props.row.fld05 == 'U'" class="ico_up">상승</span>
                        <span v-else class="ico_down">하락</span>
                      </q-td>
                      <q-td key="fld09" :props="props">
                        {{ props.row.fld09 }}%
                      </q-td>
                    </q-tr>
                  </template>
                </q-table>
                <div class="pagination_wrap">
                  <q-pagination
                    v-model="current"
                    :max="5"
                    direction-links
                    boundary-links
                    class="custom_type1"
                  />
                </div>
              </div>
              <div v-if="tab2 == 'B'">
                <div class="radio_wrap right">
                    <m-radio v-model="rad1" val="A" label="전체"/>
                    <m-radio v-model="rad1" val="B" label="주식"/>
                    <m-radio v-model="rad1" val="C" label="코인"/>
                </div>
                <div class="l_row_l between">
                  <span class="font16 txt_dk">종료된 BLASH</span>
                  <span>YYYY.MM.DD hh:mm:ss (UTC+9)</span>
                </div>
                <div class="mgb32">
                  <m-select v-model="select1" :options="options" />
                </div>
                <ul class="insight_list list3">
                    <li>
                        <span class="txt01">총 예측 횟수</span>
                        <span class="txt02">27건</span>
                    </li>
                    <li>
                        <span class="txt01">성공률</span>
                        <span class="txt02">72.61%</span>
                    </li>
                    <li>
                        <span class="txt01">평점</span>
                        <span class="txt02 primary"><i class="ico_star"/>4.60</span>
                    </li>
                    <li>
                        <span class="txt01">수익률</span>
                        <span class="txt02 txt_blue1">3.84%</span>
                    </li>
                    <li>
                        <span class="txt01">최대 익절</span>
                        <span class="txt02 txt_blue1">18.05%</span>
                    </li>
                    <li>
                        <span class="txt01">최대 손절</span>
                        <span class="txt02 txt_red">-5.01%</span>
                        <!-- 수익률 class txt_red,txt_blue -->
                    </li>
                </ul>
                <q-table
                  :data="tbRowData"
                  :columns="tbColInfo"
                  row-key="fld04"
                  no-data-label="데이터가 존재하지 않습니다."
                  hide-bottom
                  :visible-columns="table2"
                  :pagination.sync="table1page"
                >
                  <template v-slot:body="props">
                    <q-tr :props="props">
                      <q-td key="fld02" :props="props">
                        {{ props.row.fld02 }}
                      </q-td>
                      <q-td key="fld04" :props="props">
                        {{ props.row.fld04 }}
                      </q-td>
                      <q-td key="fld06" :props="props">
                        {{props.row.fld06}}%
                      </q-td>
                      <q-td key="fld10" :props="props">
                        <span v-if="props.row.fld10 == 'S'" class="txt_blue1">성공</span>
                        <span v-else-if="props.row.fld10 == 'F'" class="txt_red">실패</span>
                        <span v-else-if="props.row.fld10 == 'N'" class="txt_brown">무효</span>
                        <span v-else class="txt_gray">취소</span>
                      </q-td>
                    </q-tr>
                  </template>
                </q-table>
                <div class="btn_wrap">
                  <m-button-3 class="font18 full" color="textPrimary">더보기</m-button-3>
                </div>
                <div class="divider1"/>
                <div class="l_row_l between">
                  <span class="font16 txt_dk">진행중인 BLASH</span>
                  <!-- <span>22.09.20 ~ 22.09.20</span> -->
                </div>
                <div class="blash_wrap">
                  <div class="blash_chart">
                    <div class="chart_wrap">
                      <div class="chart_area">
                        <highcharts 
                          :options="chartOptions1"
                          >
                        </highcharts>
                      </div>
                      <ul class="regend_box">
                        <li>
                          <span class="tit"><i class="dot" style="background:#c1b7ff"/>단기</span>
                          <span class="con"><span class="primary">3</span>건</span>
                        </li>
                        <li>
                          <span class="tit"><i class="dot" style="background:#8673ff"/>중기</span>
                          <span class="con"><span class="primary">6</span>건</span>
                        </li>
                        <li>
                          <span class="tit"><i class="dot" style="background:#4c34dc"/>장기</span>
                          <span class="con"><span class="primary">31</span>건</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="blash_list">
                    <ul class="return_wrap">
                      <li>
                          <span class="txt01">상승 예측</span>
                          <span class="txt02">12건</span>
                      </li>
                      <li>
                          <span class="txt01">하락 예측</span>
                          <span class="txt02">45건</span>
                      </li>
                  </ul>
                  </div>
                </div>
                <q-table 
                  :data="tbRowData" 
                  :columns="tbColInfo" 
                  row-key="fld04" 
                  no-data-label="데이터가 존재하지 않습니다." 
                  hide-bottom
                  :visible-columns="table3"
                  :pagination.sync="table1page">
                  <template v-slot:header="props">
                    <q-tr :props="porps">
                      <q-th key="fld04" :props="props">자산</q-th>
                      <q-th key="fld03" :props="props">기간</q-th>
                      <q-th key="fld06" :props="props">목표</q-th>
                      <q-th key="fld05" :props="props">예측</q-th>
                      <q-th key="fld09" :props="props">달성률</q-th>
                    </q-tr>
                  </template>
                  <template v-slot:body="props">
                    <q-tr :props="props">
                      <q-td key="fld04" :props="props">
                        {{ props.row.fld04 }}
                      </q-td>
                      <q-td key="fld03" :props="props">
                        <span class="badge3" v-if="props.row.fld03 == '단기'" style="background:#c1b7ff">{{ props.row.fld03 }}</span>
                        <span class="badge3" v-else-if="props.row.fld03 == '중기'" style="background:#8673ff">{{ props.row.fld03 }}</span>
                        <span class="badge3" v-else style="background:#4c34dc">{{ props.row.fld03 }}</span>
                      </q-td>
                      <q-td key="fld06" :props="props">
                        <span v-if="props.row.fld05 == 'U'" class="ico_up">{{ props.row.fld06 }}%</span>
                        <span v-else class="ico_down">{{ props.row.fld06 }}%</span>
                      </q-td>
                      <q-td key="fld05" :props="props">
                        <span v-if="props.row.fld05 == 'U'" class="ico_up">상승</span>
                        <span v-else class="ico_down">하락</span>
                      </q-td>
                      <q-td key="fld09" :props="props">
                        {{ props.row.fld09 }}%
                      </q-td>
                    </q-tr>
                  </template>
                </q-table>
                <div class="pagination_wrap">
                  <q-pagination
                    v-model="current"
                    :max="5"
                    direction-links
                    boundary-links
                    class="custom_type1"
                  />
                </div>
              </div>
            <!-- E 통계 -->
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
import MChipList from 'src/components/MChipList.vue';
import MChip from 'src/components/MChip.vue';
import GaugeChart from 'src/components/GaugeChart.vue';

const tbColInfo = [
  { name: 'fld01', align: 'center', label: '일자', field: 'fld01' },
  { name: 'fld02', align: 'center', label: '매도일자', field: 'fld02' },
  { name: 'fld03', align: 'center', label: '기간', field: 'fld03' },
  { name: 'fld04', align: 'center', label: '종목', field: 'fld04' },
  { name: 'fld05', align: 'center', label: '상승/하락', field: 'fld05' },
  { name: 'fld06', align: 'center', label: '목표수익률', field: 'fld06' },
  { name: 'fld07', align: 'center', label: '현재수익률', field: 'fld07' },
  { name: 'fld08', align: 'center', label: '비중', field: 'fld08' },
  { name: 'fld09', align: 'center', label: '달성률', field: 'fld09' },
  { name: 'fld10', align: 'center', label: '예측결과', field: 'fld10' }
];
const tbRowData = [
  { fld01: '22.09.14', fld02: '22.09.14', fld03: '단기', fld04: '삼성전자', fld05: 'U', fld06: '5', fld07: '3', fld08: '15', fld09: '3', fld10: 'S' },
  { fld01: '22.09.14', fld02: '22.09.14', fld03: '중기', fld04: 'SK하이닉스', fld05: 'D', fld06: '10', fld07: '-0.12', fld08: '5', fld09: '5', fld10: 'S' },
  { fld01: '22.09.14', fld02: '22.09.14', fld03: '중기', fld04: '네이버', fld05: 'U', fld06: '15', fld07: '1.25', fld08: '10', fld09: '9', fld10: 'S' },
  { fld01: '22.09.14', fld02: '22.09.14', fld03: '중기', fld04: '현대차', fld05: 'U', fld06: '5', fld07: '0', fld08: '5', fld09: '13', fld10: 'F' },
  { fld01: '22.09.14', fld02: '22.09.14', fld03: '장기', fld04: '신풍제약', fld05: 'D', fld06: '10', fld07: '-1.28', fld08: '5', fld09: '16', fld10: 'N' },
  { fld01: '22.09.14', fld02: '22.09.14', fld03: '단기', fld04: '안랩', fld05: 'U', fld06: '5', fld07: '3', fld08: '15', fld09: '3', fld10: 'F' },
  { fld01: '22.09.14', fld02: '22.09.14', fld03: '중기', fld04: '카카오', fld05: 'U', fld06: '10', fld07: '-0.12', fld08: '5', fld09: '5', fld10: 'S' },
  { fld01: '22.09.14', fld02: '22.09.14', fld03: '중기', fld04: 'KT&G', fld05: 'D', fld06: '15', fld07: '0.72', fld08: '10', fld09: '9', fld10: 'S' },
  { fld01: '22.09.14', fld02: '22.09.14', fld03: '중기', fld04: '셀트리온', fld05: 'U', fld06: '5', fld07: '-1.28', fld08: '5', fld09: '13', fld10: 'F' },
  { fld01: '22.09.14', fld02: '22.09.14', fld03: '장기', fld04: '미래에셋증권', fld05: 'U', fld06: '10', fld07: '2', fld08: '5', fld09: '16', fld10: 'F' }
];

export default {
  components: { MDialogBlank,GaugeChart, Swiper, SwiperSlide, VClamp, MChipList, MChip },
    name: 'H_33200_T',
    
    data() {
        return {
            select1: ref("전체"),
              options: [
              '전체', '선택1','선택2','선택3',
            ],
            table1page: {
              page: 1,
              rowsPerPage: 10
            },
            isshow: ref(false),
            table1: ref(['fld01', 'fld04', 'fld05', 'fld10']),
            table2: ref(['fld02', 'fld04', 'fld06', 'fld10']),
            table3: ref(['fld04', 'fld03', 'fld06', 'fld05', 'fld09']),
            ratingModel: ref(3),
            ratingMode2: ref(0),
            ratingMode3: ref(0),
            ratingMode4: ref(0),
            ratingMode5: ref(0),
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
            current: ref(3),
            v_true: ref(true),
            tabs: [
              { label: '투자정보', value: 'A', icon: '' },
              { label: '작성자 통계', value: 'B', icon: '' }
            ],
            tabs1:[
                {label:'인사이트', value:'A', icon:'mail'},
                {label:'BLASH', value:'B', icon:'photo'}
            ],
            dailog1:ref(false),
            polcyType:ref('01'),
            tbColInfo,
            tbRowData,
            chartOptions1: {
            colors: ['#c1b7ff', '#8673ff', '#4c34dc', '#B37CD2'],
            chart: {
                type: 'pie'
            },
            accessibility: {
                point: {
                    valueSuffix: '건'
                }
            },
            credits: {
              enabled: false
            },
              chartdata: { 'fil01': 100, 'fld02': 200, 'fld03': 200 },
            
            // title: {
            //     text: 'February 2020 Norway passenger auto registrations'
            // },
            // subtitle: {
            //     text: 'Source:<a href="https://cleantechnica.com/2020/03/07/pioneering-norway-rises-above-68-plug-in-vehicle-market-share-in-february/">cleantechnica</a>'
            // },
            // tooltip: {
            //     pointFormat: '{series.name}: <b>{point.percentage:.0f}%</b>'
            // },
            title: {
              text:'<div style="font-size: 20px;font-weight:700">30건</div>',
              align:'center',
              verticalAlign:'middle',
              x:0,
              y:25
            },
            plotOptions: {
                pie: {
                    //size: 100,
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false,
                        format: '{point.name}: {y} 건'
                    },
                    showInLegend: false
                  }
                },
                legend: {
                  align: 'right',
                  verticalAlign: 'top',
                  y: 50,
                  layout: 'vertical',
                  bubbleLegend: {
                    enabled: true
                  }
                },
                series: [{
                  name: 'Registrations',
                  colorByPoint: true,
                  innerSize: '75%',
                  data: [
                  {
                      name: '단기',
                      y: 3
                  }, 
                  {
                      name: '중기',
                      y: 6
                  }, 
                  {
                      name: '단기',
                      y: 21
                  }
                ]
              }]
            },
        }
    },
    methods: {
      scrollEvents:function(){
        if(window.scrollY > 300){
          document.querySelector('#dynamic').classList.add('show');
        }else{
          document.querySelector('#dynamic').classList.remove('show');
        }
      }
    },
    mounted() {
      document.addEventListener('scroll', this.scrollEvents);
    },
    unmounted() {
      document.removeEventListener('scroll', this.scrollEvents);
    },
    computed: {
        chartOptions() {
            const rating = this.rating || {
                score1: 2,
                score2: 3,
                score3: 1,
                score4: 4,
                score5: 5
            };
            return {
                title: {
                    text: ''
                },
                chart: {
                    polar: true,
                    height: 221
                },
                credits: {
                    enabled: false
                },
                xAxis: {
                    categories: [
                        this.$t('computed.chartOptions.xAxis.label1'),
                        this.$t('computed.chartOptions.xAxis.label2'),
                        this.$t('computed.chartOptions.xAxis.label3'),
                        this.$t('computed.chartOptions.xAxis.label4'),
                        this.$t('computed.chartOptions.xAxis.label5')
                    ],
                    tickmarkPlacement: 'on',
                    lineWidth: 0,
                    labels: {
                        format: '<span class="f-12-b-lg">{value}</span>',
                        useHTML: true
                        /* style: {
                            color: '#A8A8A8',
                            fontSize: '12px',
                            fontWeight: 'bold'
                        }, */
                    }
                },
                yAxis: {
                    title: {
                        text: ''
                    },
                    labels: {
                        enabled: false
                    },
                    gridLineInterpolation: 'polygon',
                    lineWidth: 0,
                    min: 0,
                    max: 5,
                    endOnTick: true,
                    showLastLabel: false,
                    gridLineWidth: 1,
                    minorTickInterval: 1,
                    tickInterval: 1,
                    minorGridLineWidth: 0
                },
                plotOptions: {
                    series: {
                        marker: {
                            enabled: false
                        },
                        states: {
                            hover: {
                                enabled: false
                            }
                        }
                    },
                    area: {
                        lineColor: 'rgba(134, 115, 255, 1)',
                        fillColor: 'rgba(134, 115, 255, 0.3)'
                    }
                },
                tooltip: {
                    enabled: false
                },
                legend: {
                    enabled: false
                },

                series: [{
                    type: 'area',
                    data: [rating.score2, rating.score5, rating.score3, rating.score1, rating.score4],
                    pointPlacement: 'on'
                }]
            };
        }
    },
};
</script>
<style scoped>

</style>
