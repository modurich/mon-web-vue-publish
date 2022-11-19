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
            control-color="primary" 
            class="ranking_slide ico_box" 
            navigation padding arrows>
            <q-carousel-slide name="1" class="column no-wrap flex-center">
              <div class="view_box">
                <div class="ico_box_wrap center">
                  <i>😭</i>
                  <p class="font24 primary">아쉽지만 다음기회에</p>
                  <p class="txt_dk">몬스탁 멤버십에 가입하면 럭키박스에서 꽝이 나오지 않아요!</p>
                </div>
                <div class="btn_wrap l_row_l mgt32">
                  <m-button-3 size="large" color="primary" class="full">열기</m-button-3>
                </div>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="2" class="column no-wrap flex-center">
              <div class="view_box">
                <div class="ico_box_wrap center">
                  <i class="ico_box01"></i>
                  <p class="font18 txt_dk">“<span class="primary">브론즈</span> 럭키박스” 도착</p>
                  <p class="primary">(9일 23시간 남음)</p>
                </div>
                <div class="btn_wrap l_row_l mgt32">
                  <m-button-3 size="large" color="primary" class="full">멤버십 가입하기</m-button-3>
                </div>
              </div>
            </q-carousel-slide>
            
            <q-carousel-slide name="3" class="column no-wrap flex-center">
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
          </q-carousel>
          <!-- E 럭키박스 -->
          <div class="divider"/>
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
        </div>
      </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'Laside',
    data() {
        return {
            check1:ref(true),
            slide: ref('1'),
        }
    }
   
};
</script>
<style scoped>

</style>
