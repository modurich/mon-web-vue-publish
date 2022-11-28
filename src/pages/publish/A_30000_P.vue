<template>
  <div class="centerarea_box1">
      <div class="con_box">
        <h2 class="line_type between">
          혜택
        </h2>
        <div class="box_contents"> 
          <!-- S 멤버십 시작하기 -->
          <h3 class="between mgb32 mgt16">
            멤버십
          </h3>
          <div class="view_box">
            <p class="list_wrap">
              <i class="ico_luckybox_big"></i>
              <span>
                <strong>멥버십</strong>에 가입하고 몬스탁 서비스의 <strong>혜택</strong>을 누리세요
              </span>
            </p>
            <div class="btn_wrap l_row_l mgt32">
              <m-button-3 size="large" color="primary" class="full">멤버십 시작하기</m-button-3>
            </div>
          </div>
          <!-- E 멤버십 시작하기 -->
          <div class="divider"/>
          <!-- S 멤버십 이용중 -->
          <h3 class="between mgb32 mgt16">
            <span>멤버십 이용중</span>
            <a href="#" class="link_view gray">결제내역</a>
          </h3>
          <div class="btn_wrap l_row_l mgt32">
            <m-button-3 lined color="primary" class="full">2022.11.19종료예정(30일남음)</m-button-3>
          </div>
          <!-- E 멤버십 이용중 -->
          <div class="divider"/>
          <!-- S 럭키박스 -->
          <h3 class="between mgb32 mgt16">
            <span>럭키박스</span>
            <a href="#" class="link_view gray">내역</a>
          </h3>
          <q-carousel v-model="slide" 
            transition-prev="slide-right" 
            transition-next="slide-left" 
            swipeable 
            animated     
            height="350px"
            control-color="primary" 
            class="ranking_slide ico_box" 
            navigation padding arrows>
            <q-carousel-slide name="1">
              <div class="view_box">
                <div class="ico_box_wrap center">
                  <i class="ico_box01"></i>
                  <p class="font18 txt_dk">“<span class="primary">브론즈</span> 럭키박스” 도착</p>
                  <p class="primary">(9일 23시간 남음)</p>
                </div>
                <div class="btn_wrap l_row_l mgt32">
                  <m-button-3 size="large" color="primary" class="full">열기</m-button-3>
                </div>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="2">
              <div class="view_box">
                <div class="ico_box_wrap center">
                  <i class="ico_box02"></i>
                  <p class="font24 primary">아쉽지만 다음기회에</p>
                  <p class="txt_dk">몬스탁 멤버십에 가입하면 럭키박스에서 꽝이 나오지 않아요!</p>
                </div>
                <div class="btn_wrap l_row_l mgt32">
                  <m-button-3 size="large" color="primary" class="full">멤버십 가입하기</m-button-3>
                </div>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="3">
              <div class="view_box">
                <div class="ico_box_wrap center">
                  <div class="ico_top">
                    <i class="ico_luckybox"></i>
                  </div>
                  <div class="primary font30 bold">
                    + 57 sMON
                  </div>
                  <div class="txt_dk mgt16">
                    럭키박스에서 57sMON을 받았어요!
                  </div>
                </div>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="4">
              <div class="no_data_wrap">
                <div class="ico_top">
                  <i class="ico_error"></i>
                </div>
                <div class="com_message font18 mgb16">
                  선물 받은 럭키박스가 없어요
                </div>
                <div class="mgt16 center">
                  <button class="ico_info">럭키박스 획득 방법</button>
                </div>
              </div>
            </q-carousel-slide>
          </q-carousel>
          <!-- E 럭키박스 --> 
          <div class="divider"/>
          <!-- S 나의 활동 내역 -->
          <h3 class="between mgb32 mgt16">
            <span>나의 활동 내역</span>
            <a href="#" class="ico_info_gray txt_gray font14 medium">보팅파워 올리는 방법</a>
          </h3>
          <ul class="insight_list">
            <li>
                <span class="txt01">나의 보팅파워</span>
                <span class="txt02 primary">10 VP</span>
            </li>
            <li>
                <span class="txt01">나의 활동점수</span>
                <span class="txt02 txt_blue">45 P</span>
            </li>
        </ul>
          <!-- E 나의 활동 내역 -->
          <div class="divider"/>
           <!-- S 활동 등급 / 점수 -->
           <h3 class="between mgb32 mgt16">
            <span>활동 등급 / 점수</span>
          </h3>
          <div class="level_wrap">
            <div class="level_area">
              <span><span class="ico_level5 big">level5</span></span>
              <span class="txt01">몬스터개미</span>
              <button class="ico_info">등급 정보</button>
            </div>
            <div class="chart_wrap">
              <div class="chart_list_wrap">
                <div class="chart_area">
                  <!-- S 차트 들어가는 곳-->
                  <div class="gaug_wrap"><GaugeChart1 :fld01="100" :fld02="120"/></div>
                  <!-- E 차트 들어가는 곳-->
                </div>
              </div>
              <span class="txt_wrap">
               다음 등급까지 <span class="txt_blue mgl4">2499P</span>
              </span>
            </div>
          </div>
          <div class="divider1 small" />
          <p class="mgb32">❗ 활동점수 유효기간은 획득한 날부터 6개월입니다</p>
          <!-- S 활동점수 progress-->
          <div class="progress_wrap">
            <span class="ico_level1">level1</span>
            <span class="ico_level2">level2</span>
            <span class="ico_level3">level3</span>
            <span class="ico_level4">level4</span>
            <span class="ico_level5">level5</span>
            <div class="bar_wrap">
              <div class="bar" style="width:30%"/>
            </div>
          </div>
          <!-- E 활동점수 progress-->
          <!-- E 활동 등급 / 점수 -->
          <div class="divider"/>
          <!-- S 가입미션 -->
          <h3 class="between mgb16 mgt16">
            <span>가입미션</span>
            <span class="font14 txt_gray">2/6 완료</span>
          </h3>
          <p class="primary">가입미션 완료 즉시 50 sMON 지급!</p>
          <ul class="list_type1 mgt32">
            <li>
              <span class="txt_dk">🦄  닉네임 등록/설정/변경</span>
              <span class="font14 txt_gray">완료</span>
            </li>
            <li>
              <span class="txt_dk">📢  텔레그램 연동 (+50 sMON)</span>
              <button class="btn_view">연동</button>
            </li>
            <li>
              <span class="txt_dk">💬  인사이트 댓글, 대댓글 5건</span>
              <button class="btn_view"/>
            </li>
            <li>
              <span class="txt_dk">🗳️  보팅하기</span>
              <button class="btn_view"/>
            </li>
            <li>
              <span class="txt_dk">💓  팔로우 5명</span>
              <button class="btn_view"/>
            </li>
            <li>
              <span class="txt_dk">✍  포스트 1건</span>
              <button class="btn_view"/>
            </li>
          </ul>
          <!-- S 가입미션 -->
          <div class="divider"/>
          <!-- S 일일미션 -->
          <h3 class="between mgb16 mgt16">
            <span>일일미션</span>
            <span class="font14 txt_gray">UTC 0 기준 (KST 09:00)</span>
          </h3>
          <p class="primary">일일미션을 연속으로 달성하면 보상이 증가해요!</p>
          <div class="mission_wrap">
            <div class="col1">
              <p class="txt_dk">
                연속<span class="txt01">00</span>일
                <button class="ico_info_gray"/>
              </p>
              <p><img src="~assets/ico_stamp04.png" alt="미션성공" /></p>
              <!-- <p><span class="font30 primary">3</span><span class="font16 txt_dk">sMON</span></p> -->
              <span>다음 보상 5 sMON</span>
            </div>
            <div class="col2">
              <p class="txt_dk">연속<span class="txt01">5 <span class="txt_dk">/ 10</span></span>일</p>
              <p><i class="ico_box04 mgr0"></i></p>
              <span>브론즈 ~ 골드 럭키박스</span>
            </div>
            <div class="col2">
              <p class="txt_dk">연속<span class="txt01">99 <span class="txt_dk">/ 100</span></span>일</p>
              <p><i class="ico_box01"></i></p>
              <span>골드 + 럭키박스</span>
            </div>
          </div>
          <div class="divider1 small"/>
          <p class="primary mgb32">활동점수 10P 모아 일일 미션 달성하지!</p>
          <!-- S 활동점수 progress-->
          <div class="progress_number_wrap">
            <p class="tit_wrap">
              <span>오늘의 활동 점수</span>
              <span><span class="primary">5</span> / 10 P</span>
            </p>
            <div class="progress_wrap primary">
              <div class="bar_wrap">
                <div class="bar" style="width:30%"/>
              </div>
            </div>
            <p class="font12 mgt16">일일최대 30P 가능</p>
          </div>
          <div class="divider1 small"/>
          <p class="primary mgb32">아래 활동을 통해 활동 점수를 획득 할 수 있어요!</p>
          <ul class="list_type1 mgt32">
            <li>
              <span class="txt_dk">⭐  평점 작성</span>
              <span class="txt_only">2P</span>
            </li>
            <li>
              <span class="txt_dk">💬 댓글 작성</span>
              <span class="txt_only">2P</span>
            </li>
            <li>
              <span class="txt_dk">🗳 인사이트, BLASH 보팅</span>
              <span class="txt_only">2P</span>
            </li>
            <li>
              <span class="txt_dk">📝 포스트 작성 (자유 일 1회 제한)</span>
              <a href="#" class="link_view gray">2P</a>
            </li>
            <li>
              <span class="txt_dk">🗳 의제 투표</span>
              <span class="txt_only">2P</span>
            </li>
          </ul>
          <!-- E 활동점수 progress-->
          <!-- S 일일미션 -->
        </div>
      </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import GaugeChart1 from 'src/components/GaugeChart1.vue';
export default {
  components: { GaugeChart1,},
    name: 'Laside',
    data() {
        return {
            check1:ref(true),
            slide: ref('1'),
            progress: 0.4
        }
    }
   
};
</script>
<style scoped>

</style>
