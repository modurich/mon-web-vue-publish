<template>
  <div class="centerarea_box1">
      <div class="con_box">
        <h2 class="line_type between">
          럭키박스 내역
        </h2>
        <div class="box_contents"> 
          <div class="between">
            <div class="flex mgb16">
              <m-toggle v-model="toggle1" :label="`Model is (flipped boolean)`" />
              <span class="txt_dk mgl8">확인한 럭키박스 모두 보기</span>
            </div>
            <button class="ico_info_gray"/>
          </div>
          <ul class="lucky_list">
            <li class="active">
              <p>
                <span class="badge3 primary">NEW</span>
                <span class="txt_dk mgl8">브론즈+ 럭키박스 🎁</span>
              </p>
              <div class="ico_box_wrap center">
                <i class="ico_box01"></i>
                <p class="primary">(9일 23시간 남음)</p>
              </div>
              <div class="between font12 mgb16">
                <span class="flex"><i class="ico_luckybox_small"/>2022.12.00</span>
                <span>랜덤이벤트 지급</span>
              </div>
              <div class="btn_wrap">
                <m-button-3 size="large" color="primary" class="full" >열기</m-button-3>
               </div>
            </li>
            <li class="active">
              <p>
                <span class="badge3 primary">NEW</span>
                <span class="txt_dk mgl8">브론즈+ 럭키박스 🎁</span>
              </p>
              <div class="ico_box_wrap center">
                <i class="ico_box01"></i>
                <p class="primary">(9일 23시간 남음)</p>
              </div>
              <div class="between font12 mgb16">
                <span class="flex"><i class="ico_luckybox_small"/>2022.12.00</span>
                <span>랜덤이벤트 지급</span>
              </div>
              <div class="btn_wrap">
                <m-button-3 size="large" color="primary" class="full" >열기</m-button-3>
               </div>
            </li>
            <li>
              <p class="flex">
                <span class="badge3 green">당첨</span>
                <span class="txt_dk mgl8">실버 럭키박스 🎁</span>
              </p>
              <p class="txt_dk font12">럭키박스에서<span class="primary"> + 489 sMON</span>을 획득하셨어요.</p>
              <div class="between font12">
                <span class="flex"><i class="ico_luckybox_small"/>2022.12.00</span>
                <span>관리자 지급</span>
              </div>
            </li>
            <li>
              <p class="flex">
                <span class="badge3 red">꽝</span>
                <span class="mgl8">브론즈 럭키박스 🎁</span>
              </p>
              <p class="font12">아쉽지만 다음 기회에 다시 도전해주세요.</p>
              <div class="between font12">
                <span class="flex"><i class="ico_luckybox_small"/>2022.12.00</span>
                <span>관리자 지급</span>
              </div>
            </li>
            <li>
              <p class="flex">
                <span class="badge3 gray">만료</span>
                <span class="mgl8">브론즈 럭키박스 🎁</span>
              </p>
              <p class="font12">아쉽지만 다음 기회에 다시 도전해주세요.</p>
              <div class="between font12">
                <span class="flex"><i class="ico_luckybox_small"/>2022.12.00</span>
                <span>관리자 지급</span>
              </div>
            </li>
          </ul>
          <div class="no_data_wrap">
            <div class="ico_top">
              <i class="ico_error"></i>
            </div>
            <div class="com_message font18">
              새로운 럭키박스가 없어요
            </div>
          </div>
          <div class="divider1 small" />
          <div class="luck_box">
            <p class="title">🎁  럭키박스(브론즈 ~ 골드) 받는 방법</p>
            <div class="list">
              <i class="ico_thumbsUp_on1"/>
              <span class="txt_area">작성한 포스트 ‘좋아요' 10개 받기</span>
            </div>
            <div class="list">
              <i class="ico_write_on"/>
              <span class="txt_area">포스트(자유 제외) 5자 이상 댓글 작성</span>
            </div>
            <div class="list">
              <i class="ico_event_on"/>
              <span class="txt_area">
                일일 미션 연속 10일마다 지급<br/>
                (100일차에는 골드+ 럭키박스 지급)</span>
            </div>
          </div>
          <div class="divider1 small" />
          <div class="luck_box">
            <p class="title">🎁  럭키박스(브론즈 ~ 골드) 받는 방법</p>
            <div class="list">
              <i class="ico_box01"/>
              <span class="txt_area1">
                <span class="txt01">브론즈 럭키박스</span><br/>
                당첨시 1 ~ 200 sMON</span>
            </div>
            <div class="list">
              <i class="ico_box01"/>
              <span class="txt_area1">
                <span class="txt02">실버 럭키박스</span><br/>
                당첨시 10 ~ 500 sMON</span>
            </div>
            <div class="list">
              <i class="ico_box01"/>
              <span class="txt_area1">
                <span class="txt03">골드 럭키박스</span><br/>
                당첨시 50 ~ 1,000 sMON</span>
            </div>
            <div class="message flex top font12">
              <span>❗️</span>
              <span>럭키박스는 꽝이 있을 수 있습니다.<br/>
                  단, '+'가 붙은 럭키박스는 꽝이 없습니다.
              </span>
            </div>
          </div>
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
            toggle1: ref(false),
        }
    }
   
};
</script>
<style scoped>

</style>
