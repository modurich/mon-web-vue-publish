<template>
    <div class="centerarea_box1">
        <div class="con_box">
          <h2 class="line_type">프로필</h2>
          <m-tabs class="line_type large" v-model="tab1" :items="tabs"/>
          <div class="tab_contents" v-if="tab1 == 'A'">
            <!-- S 마이페이지-->
            <div class="mypage_info_wrap">
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
              <ul class="follow_wrap">
                  <li>
                      <span class="txt01">콘텐츠</span>
                      <span class="txt02">215</span>
                  </li>
                  <li>
                      <span class="txt01">팔로워</span>
                      <span class="txt02">58</span>
                  </li>
                  <li>
                      <span class="txt01">팔로잉</span>
                      <span class="txt02">361</span>
                  </li>
              </ul>
            </div>
            <!-- S PRO정보 -->
            <div class="pro_info_wrap">
              <div class="tit_area">
                <span class="tit_txt">PRO 정보</span>
                <span class="ico_info">PRO란?</span>
              </div>
              <ul class="pro_list">
                <li>
                  <span class="txt_tit">프로승급일</span>
                  <span class="txt_date">2022.08.25</span>
                </li>
                <li>
                  <span class="txt_tit">재신임예정일</span>
                  <span class="txt_date">2022.08.25</span>
                </li>
              </ul>
              <!-- <div class="btn_wrap">
                <m-button-3 color="primary" class="full">PRO 제안 발의</m-button-3>
              </div> -->
            </div>
            <!-- E PRO정보 -->
            <div class="sub_info">
              <v-clamp autoresize :max-lines="2">
                {{ snipContent }}
                <template #after="{ toggle, expanded, clamped }">
                  <button v-if="expanded || clamped" class="btn_view_list" @click="toggle">{{ clamped ? '더보기' : '닫기' }}</button>
                </template>
              </v-clamp>
            </div>
            <div class="link_info">
              <div>
                <p class="tit">
                  <span class="txt01">링크2</span>
                </p>
                <p class="link_txt"><a href="#">https://docs.google.com/presentation/d/1XSMUivsrJcxYabsD7D7ZLqHiDLfwaF2KdFUpxtZmlj4/edit#slide=id.g15918d493b0_0_49</a></p>
              </div>
            </div>
            <div class="btn_wrap l_row_l mgt32">
              <m-button-3 color="primary" class="full">추천코드</m-button-3>
              <m-button-3 color="primary" class="full">내 정보 수정</m-button-3>
              <m-button-3 lined color="primary" class="ico_add">추가</m-button-3>
            </div>
            <!-- S 추천 사용자 -->
            <h3 class="between">
              <span>추천 사용자</span>
              <a href="#" class="link_view">더보기</a>
            </h3>
            <div class="swiper_wrap">
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
            <!-- E 추천 사용자 -->
            <div class="divider"/>
            <!-- S 콘텐츠 관리 -->
            <h3 class="between">
              <span>콘텐츠 관리</span>
            </h3>
            <div class="ico_content_box">
              <i class="ico_contents"/>
              <span class="txt_area">내가 작성,구독, 보팅, 관심등록한
              콘텐츠를 확인할 수 있으며<br/>
              BLASH 시그널도 보낼 수 있어요
              </span>
            </div>
            <div class="btn_wrap l_row_l mgt32">
              <m-button-3 color="primary" class="full">바로가기</m-button-3>
            </div>
            <!-- E 콘텐츠 관리 -->
            <div class="divider"/>
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
              <div class="between">
                <span class="font16 txt_dk bold">인사이트 작성 당시 플레이어 등급</span>
                <span data-v-ab911258="" class="badge pl1">PL1</span>
              </div>
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
                        <span class="txt01">평균수익률</span>
                        <span class="txt02 txt_blue1">7.84%</span>
                        <!-- 수익률 class txt_red,txt_blue1 -->
                    </li>
                </ul>
                <!-- 
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
                -->
                <default-table tbl-type="1"/>


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
                          :options="chartOptions"
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
                <!--
                <q-table 
                  :data="tbRowData" 
                  :columns="tbColInfo" 
                  row-key="fld04" 
                  no-data-label="데이터가 존재하지 않습니다." 
                  hide-bottom
                  :visible-columns="table3"
                  :rows-per-page-options="[0]" 
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
                -->
                <default-table tbl-type="2"/>
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
                <!--
                <q-table
                  :data="tbRowData"
                  :columns="tbColInfo"
                  row-key="fld04"
                  no-data-label="데이터가 존재하지 않습니다."
                  hide-bottom
                  :visible-columns="table2"
                  :rows-per-page-options="[0]" 
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
                <div class="pagination_wrap">
                  <q-pagination
                    v-model="current"
                    :max="5"
                    direction-links
                    boundary-links
                    class="custom_type1"
                  />
                </div>
                -->

                <default-table tbl-type="3"/>

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
                          :options="chartOptions"
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
                          <span class="txt01">평가 수익률</span>
                          <span class="txt02 txt_red">-5.01%</span>
                      </li>
                      <li>
                          <span class="txt01">투자 비중</span>
                          <span class="txt02">80%</span>
                      </li>
                  </ul>
                  </div>
                </div>
                <!--
                <q-table 
                  :data="tbRowData" 
                  :columns="tbColInfo" 
                  row-key="fld04" 
                  no-data-label="데이터가 존재하지 않습니다." 
                  hide-bottom
                  :visible-columns="table4"
                  :rows-per-page-options="[0]" 
                  :pagination.sync="table1page"
                  >
                  <template v-slot:header="props">
                    <q-tr :props="porps">
                      <q-th key="fld04" :props="props">자산</q-th>
                      <q-th key="fld03" :props="props">기간</q-th>
                      <q-th key="fld06" :props="props">목표</q-th>
                      <q-th key="fld08" :props="props">비중</q-th>
                      <q-th key="fld12" :props="props">현재</q-th>
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
                      <q-td key="fld08" :props="props">
                        {{ props.row.fld08 }}%
                      </q-td>
                      <q-td key="fld12" :props="props">
                        <span v-if="props.row.fld11 == 'R'" class="txt_red">{{ props.row.fld12 }}%</span>
                        <span v-else class="txt_blue1">{{ props.row.fld12 }}%</span>
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
                -->

                <default-table tbl-type="4"/>


              </div>
            <!-- E 통계 -->
            <!-- E 마이페이지-->
          </div>
          <div class="tab_contents" v-if="tab1 == 'B'">
            <!-- S 내지갑 -->
            <!-- S 지갑연결 -->
            <div class="swap_wrap">
              <div>
                <a href="#" class="link_view right">내역보기</a>
              </div>
              <div class="btn_wrap">
                <m-button-3 size="large" color="primary" class="full">
                  지갑 연결
                  <q-tooltip anchor="top middle" :content-class="{ 'tooltip_type1':true}" self="bottom middle" :offset="[10, 30]">
                    🎁 최초 연결 시 7.7777777 MON 지급
                  </q-tooltip>
                </m-button-3>
              </div>
            </div>
            <!-- E 지갑연결 -->
           
             <!-- S 스왑하기 -->
             <div class="title_type1">
              <div class="txt_area">
                <span class="txt01"><span class="ico_sb sb_metamask"/><span class="bold">Metamask</span> 지갑 연결중</span>
                <a href="#" class="link_view">주소보기</a>
              </div>
              <button class="ico_menu" color="secondary" label="Auto-Close Menu">
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
            </div>
            <div class="swap_wrap">
              <div class="icon_area">
                <span class="ico_sb sb_klaytn"/> MON
              </div>
              <p class="txt01">999,999,999.9999999999<span>MON</span></p>
              <p class="txt02">$ 999,999,999.99</p>
              <p class="txt03">( ₩ 999,999,999,999 )</p>
              <div class="btn_wrap"><m-button-3 size="large" color="primary" class="full"><i class="ico_swap"/>스왑하기</m-button-3></div>
            </div>
            <div class="btn_wrap l_row_l">
              <m-button-3 lined color="primary" class="full">PIN코드 변경</m-button-3>
              <m-button-3 lined color="primary" class="full">PIN코드 찾기</m-button-3>
              <m-button-3 lined color="primary" class="full">OTP 설정</m-button-3>
            </div>
            <div class="between">
              <a href="#" class="link_view gray">지갑해제</a>
              <a href="#" class="link_view gray">내역보기</a>
            </div>
            <!-- E 스왑하기 -->
           
            <div class="divider1 small"/>
            <div class="between">
              <span class="txt_dk">sMON</span>
              <span class="primary font20 bold">288,897,913.21</span>
            </div>
            <div class="divider1 small"/>
            <div class="between">
              <span class="txt_dk">원화</span>
              <span class="primary font20 bold">₩ 900,000</span>
            </div>
            <ul class="list_type1">
              <li>
                <span class="txt01">등록상태</span>
                <span class="txt02 txt_blue">승인완료</span>
              </li>
              <li>
                <span class="txt01">금융기관명</span>
                <span class="txt02">기업은행</span>
              </li>
              <li>
                <span class="txt01">계좌번호</span>
                <span class="txt02">12345678901234567890</span>
              </li>
              <li>
                <span class="txt01">예금주명</span>
                <span class="txt02">홍길동</span>
              </li>
            </ul>
            <div class="btn_wrap l_row_l">
              <m-button-3 lined color="primary" class="full">출금 계좌 등록 / 변경</m-button-3>
              <m-button-3 lined color="primary" class="full">원화 출금 신청</m-button-3>
            </div>
            <div class="divider mgb0"/>
            <m-tabs class="box_type large mg0" v-model="tab3" :items="tabs2"/>
            <div class="mgt32" v-if="tab3 == 'A'">
              <!-- S 코인 -->
              <ul class="coin_list">
                <li>
                  <div class="icon_area">
                    <span class="ico_sb sb_klaytn"/>
                  </div>
                  <div class="txt_area">
                    <p class="txt01">9,739,432,138.3832 MON</p>
                    <p class="txt02">＄9,432,138.3832</p>
                    <p class="txt02">(￦ 000,000)</p>
                    <p class="txt03 right">1 MON ≒ $ 0.001</p>
                  </div>
                </li>
                <li>
                  <div class="icon_area">
                    <span class="ico_sb sb_klaytn"/>
                  </div>
                  <div class="txt_area">
                    <p class="txt01">9,739,432,138.3832 MON</p>
                    <p class="txt02">＄9,432,138.3832</p>
                    <p class="txt02">(￦ 000,000)</p>
                    <p class="txt03 right">1 MON ≒ $ 0.001</p>
                  </div>
                </li>
                <li>
                  <div class="icon_area">
                    <span class="ico_sb sb_klaytn"/>
                  </div>
                  <div class="txt_area">
                    <p class="txt01">9,739,432,138.3832 MON</p>
                    <p class="txt02">＄9,432,138.3832</p>
                    <p class="txt02">(￦ 000,000)</p>
                    <p class="txt03 right">1 MON ≒ $ 0.001</p>
                  </div>
                </li>
                <li>
                  <div class="icon_area">
                    <span class="ico_sb sb_klaytn"/>
                  </div>
                  <div class="txt_area">
                    <p class="txt01">9,739,432,138.3832 MON</p>
                    <p class="txt02">＄9,432,138.3832</p>
                    <p class="txt02">(￦ 000,000)</p>
                    <p class="txt03 right">1 MON ≒ $ 0.001</p>
                  </div>
                </li>
              </ul>
              <!-- E 코인 -->
            </div>
            <div class="mgt32" v-if="tab3 == 'B'">
              <!-- S NFT -->
              <div class="flex right mgt16 l_row_l">
                <span class="txt_dk mgr10">비공개</span> <m-toggle v-model="toggle1" />
              </div>
              <div class="between">
                <span class="txt_dk font16 bold">보유중인 NFT</span>
                <a href="#" class="primary">슬롯확장 &nbsp;&nbsp; +</a>
              </div>
              <ul class="nft_wrap">
                <li><button class="ico_plus">upload</button></li>
                <li><button class="ico_lock">lock</button></li>
                <li><button class="ico_lock">lock</button></li>
              </ul>
              <div class="between">
                <span class="txt_dk font16 bold">보유중인 NFT</span>
                <a href="#" class="link_view">전체보기</a>
              </div>
              <ul class="nft_wrap">
                <li><img src="~assets/nft_img01.png" alt="" /></li>
                <li><img src="~assets/nft_img02.png" alt="" /></li>
              </ul>
              <div class="between">
                <span class="txt_dk font16 bold">보유중인 NFT</span>
                <a href="#" class="link_view">전체보기</a>
              </div>
              <div class="ico_top">
                <i class="ico_error"></i>
              </div>
              <div class="com_message">
                보유중인 NFT가 없습니다
              </div>
              <!-- E NFT -->
            </div>
            <!-- E 내지갑 -->
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
import DefaultTable from 'src/components/DefaultTeble.vue';

/*
const tbColInfo = [
  { name: 'fld01', align: 'center', label: '일자', field: 'fld01' },
  { name: 'fld02', align: 'center', label: '매도일자', field: 'fld02' },
  { name: 'fld03', align: 'center', label: '기간', field: 'fld03' },
  { name: 'fld04', align: 'center', label: '자산', field: 'fld04' },
  { name: 'fld05', align: 'center', label: '상승/하락', field: 'fld05' },
  { name: 'fld06', align: 'center', label: '목표수익률', field: 'fld06' },
  { name: 'fld07', align: 'center', label: '현재수익률', field: 'fld07' },
  { name: 'fld08', align: 'center', label: '비중', field: 'fld08' },
  { name: 'fld09', align: 'center', label: '달성률', field: 'fld09' },
  { name: 'fld10', align: 'center', label: '예측결과', field: 'fld10' },
  { name: 'fld11', align: 'center', label: '상승/하락', field: 'fld11' },
  { name: 'fld12', align: 'center', label: '현재', field: 'fld12' }
];
const tbRowData = [
  { fld01: '22.09.14', fld02: '22.09.14', fld03: '단기', fld04: '삼성전자', fld05: 'U', fld06: '5', fld07: '3', fld08: '15', fld09: '3', fld10: 'S',fld11: 'R',fld12: '-24.24' },
  { fld01: '22.09.14', fld02: '22.09.14', fld03: '중기', fld04: 'SK하이닉스', fld05: 'D', fld06: '10', fld07: '-0.12', fld08: '5', fld09: '5', fld10: 'S',fld11: 'B',fld12: '+4.24' },
  { fld01: '22.09.14', fld02: '22.09.14', fld03: '중기', fld04: '네이버', fld05: 'U', fld06: '15', fld07: '1.25', fld08: '10', fld09: '9', fld10: 'S',fld11: 'R',fld12: '-24.24' },
  { fld01: '22.09.14', fld02: '22.09.14', fld03: '중기', fld04: '현대차', fld05: 'U', fld06: '5', fld07: '0', fld08: '5', fld09: '13', fld10: 'F',fld11: 'R',fld12: '-24.24' },
  { fld01: '22.09.14', fld02: '22.09.14', fld03: '장기', fld04: '신풍제약', fld05: 'D', fld06: '10', fld07: '-1.28', fld08: '5', fld09: '16', fld10: 'N',fld11: 'B' ,fld12: '+4.24'},
  { fld01: '22.09.14', fld02: '22.09.14', fld03: '단기', fld04: '안랩', fld05: 'U', fld06: '5', fld07: '3', fld08: '15', fld09: '3', fld10: 'F',fld11: 'R' ,fld12: '-24.24'},
  { fld01: '22.09.14', fld02: '22.09.14', fld03: '중기', fld04: '카카오', fld05: 'U', fld06: '10', fld07: '-0.12', fld08: '5', fld09: '5', fld10: 'F',fld11: 'B',fld12: '+4.24' },
  { fld01: '22.09.14', fld02: '22.09.14', fld03: '중기', fld04: 'KT&G', fld05: 'D', fld06: '15', fld07: '0.72', fld08: '10', fld09: '9', fld10: 'S',fld11: 'B',fld12: '+4.24' },
  { fld01: '22.09.14', fld02: '22.09.14', fld03: '중기', fld04: '셀트리온', fld05: 'U', fld06: '5', fld07: '-1.28', fld08: '5', fld09: '13', fld10: 'F',fld11: 'R' ,fld12: '-24.24'},
  { fld01: '22.09.14', fld02: '22.09.14', fld03: '장기', fld04: '미래에셋증권', fld05: 'U', fld06: '10', fld07: '2', fld08: '5', fld09: '16', fld10: 'F',fld11: 'R' ,fld12: '-24.24'}
];
*/
export default {
  components: { MDialogBlank, Swiper, SwiperSlide, VClamp, DefaultTable },
    name: 'A_10000_P',
    
    data() {
        return {
          /*
          table1page: {
            page: 1,
            rowsPerPage: 10
          },

          table1: ref(['fld01', 'fld04', 'fld05', 'fld10']),
          table2: ref(['fld02', 'fld04', 'fld06', 'fld10']),
          table3: ref(['fld04', 'fld03', 'fld06', 'fld05', 'fld09']),
          table4: ref(['fld04', 'fld03', 'fld06', 'fld08', 'fld12']),
          tbColInfo,
          tbRowData,
          */
          chartOptions: {
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
            text1:ref('호빵맨'),
            text2:ref(''),
            text3:ref(''),
            check1:ref(true),
            check2:ref(false),
            check3:ref(false),
            check4:ref(false),
            check5:ref(false),
            check6:ref(false),
            select1:ref(null),
            toggle1: ref(false),
            tab1:ref('A'),
            tab2:ref('A'),
            tab3:ref('A'),
            rad1:ref('A'),
            tabs:[
                {label:'마이페이지', value:'A', icon:'mail'},
                {label:'내지갑', value:'B', icon:'photo'}
            ],
            tabs1:[
                {label:'인사이트', value:'A', icon:'mail'},
                {label:'BLASH', value:'B', icon:'photo'}
            ],
            tabs2:[
                {label:'코인', value:'A', icon:'mail'},
                {label:'NFT', value:'B', icon:'photo'}
            ],
            options:[
                '전체', '선택1', '선택2', '선택3', '선택4'
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
            dailog1:ref(false),
            dailog2: ref(false),
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
          snipContent: ref(`안녕하세요 경제와 금융 분야를 공부하다 보니, 재테크에 관한 지식이 많아졌습니다. 그래서 개인적으로는 돈을 모으는 것보다 잘 운용하는 것이 더 중요하다는 생각을 하게 되었습니다. 
실제로 대학에 재학하던 당시에 크고 속에서 희망의 가슴이 바로 붙잡아 있는 별과 것이다. 얼마나 방황하였으며, 사랑의 청춘의 천지는 생생하며, 물방아 더운지라 아니다. 영락과 쓸쓸한 같이, 얼음이 청춘 타오르고 이것이다. 사랑의 곳으로 인생의
황금시대의 그들은 속에서 이것이다. 있는 긴지라 싹이 인생을 얼마나 것이다. 같이, 안고, 기쁘며, 보라. 청춘 생명을 공자는 싸인 사막이다. 우리의 뜨고, 하는 역사를 것이다. 피고 청춘의 이상은 못할 봄바람이다.
너의 원대하고, 자신과 인생에 위하여 원질이 풍부하게 되는 교향악이다. 밝은 그들을 그들의 아름답고 웅대한 꽃이 바이며, 길을 것이다.길을 우리의 위하여, 있는 그와 있으랴? 주며, 그들은 풍부하게 피가 끓는다.
바로 예수는 피가 쓸쓸하랴? 천지는 그러므로 못할 인생을 그들에게 긴지라 인간의 봄바람이다. 목숨이 피가 피부가 하는 밥을 그들은 이상, 교향악이다. 같은 그들의 이상 그들의 평화스러운 그들은 인류의 청춘은 ?
인생을 힘차게 가치를 싸인 이는 무엇을 미인을 쓸쓸하랴? 있는 하는 얼마나 두손을 뿐이다. 힘차게 놀이 이것은 듣기만 웅대한 설산에서 이것이야말로 이것이다. 사는가 얼음에 인류의 인간이 그들의 얼음이
쓸쓸하랴?기쁘며, 그것은 창공에 공자는 커다란 그들을 위하여 때문이다. 설산에서 살았으며, 열락의 우리 것이다. 청춘의 청춘의 방황하여도, 피고, 날카로우나 보이는 이상이 이는 힘있다. 이상의 목숨을 너의 위하여
위하여서, 청춘에서만 물방아 힘있다. 있는 튼튼하며, 꽃이 것이다. 실현에 그들의 그와 만천하의 인생을 크고 맺어, 있는가? 구하기 넣는 되려니와, 피고 소리다.이것은 그들은 사막이다. 청춘은 이상, 꽃이 불어
미묘한 부패뿐이다. 이상의 속잎나고, 청춘은 군영과 힘차게 이 장식하는 것이다. 주는 그들에게 따뜻한 천고에 커다란 인생의 봄바람이다.`),
        }
    },
    methods: {
      polcyPopup(type) {
        this.polcyType = type;
        this.dailog1 = true;
      },
  }
};
</script>
<style scoped>

</style>

