<template>
  <div class="centerarea_box1">
      <div class="con_box">
        <h2 class="line_type between">
          <span>푸시설정</span>
        </h2>
        <div class="box_contents"> 
          <h3 class="between mgb32 mgt16">
            <span>활성화 여부</span>
            <m-toggle v-model="toggle1" />
          </h3>
          <div class="between font12 mgb32">
            <span>현재 브라우저 스펙</span>
            <span class="txt_blue1">푸시 지원</span>
            <!-- <span class="txt_red">푸시 불가</span> -->
          </div>
          <p class="font12">본 설정은 로그인된 모든 기기에 유효하며, 기기와 브라우저 스펙에 따라 웹푸시 기능이 작동하지 않을 수 있습니다.</p>
          <p class="font12 mgt32"><span class="ico_info">웹푸시 설정이 안되시나요?</span></p>
          <div class="divider1 small"/>
          <div>
            <ul class="list_type1">
              <li>
                <span>구독현황/BLASH 관리 콘텐츠별 설정</span>
                <span><m-checkbox size="md" v-model="check1"/></span>
              </li>
              <li>
                <span>새 댓글, 대댓글</span>
                <span><m-checkbox size="md" v-model="check2"/></span>
              </li>
              <li>
                <span>새 팔로워</span>
                <span><m-checkbox size="md" v-model="check3"/></span>
              </li>
              <li>
                <span>일일보상 완료</span>
                <span><m-checkbox size="md" v-model="check4"/></span>
              </li>
              <li>
                <span>본인 추천코드 신규가입 보상</span>
                <span><m-checkbox size="md" v-model="check5"/></span>
              </li>
            </ul>
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
            check2:ref(true),
            check3:ref(true),
            check4:ref(true),
            check5:ref(true),
            slide: ref('1'),
            toggle1: ref(false),
        }
    }
   
};
</script>
<style scoped>

</style>
