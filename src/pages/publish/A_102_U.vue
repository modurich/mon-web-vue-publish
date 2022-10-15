<template>
  <div class="centerarea_box01">
    <q-form>
      <div class="con_box">
        <div style="padding:32px">
          <m-button-3 @click="dailog2 = true" lined color="primary">추천코드</m-button-3>
        </div>
        <!-- S 추천코드 -->
        <m-dialog v-model="dailog2">
          <div class="dailog_wrap">
            <div class="dailog_top">
              <q-btn icon="close" flat v-close-popup />
            </div>
            <q-card-section class="dailog_contents code_wrap">
              <p class="dialog_tit l_row_l">추천코드</p>
              <div class="l_row">
               <p class="tit">본인 추천코드<button class="ico_copy">copy</button></p>
               <p class="primary font20 bold">EAI3LE2D</p>
              </div>
              <div class="l_row">
                <p class="tit">회원가입 초대링크<button class="ico_copy">copy</button></p>
                <p>https://monstock.app/joinGuide?rcode=EAI3LE2D</p>
              </div>
              <div class="l_row_s">
               <p class="primary font16 bold">🙌🏻 회원가입 추천시 1명당 최대 700 sMON!</p>
              </div>
              <div class="code_list">
                <p>추천인 가입만 해도 50 sMON</p>
                <p>추천가입자 가입미션 완료 시 추가 50 sMON</p>
                <p>추천가입자 활동등급 진급시 총 370 sMON</p>
                <p>추천가입자 예측콘텐츠 활동시 총 230 sMON</p>
              </div>
              <div class="btn_wrap l_row_l">
                <m-button-3 color="primary" size="large" class="full">확인</m-button-3>
              </div>
            </q-card-section>
          </div>
        </m-dialog>
        <!-- E 추천코드 -->
      </div>
    </q-form>
  </div>
</template>

<script>
import { ref } from 'vue';
import MDialogBlank from 'src/components/MDialogBlank.vue';

export default {
  components: { MDialogBlank },
  name: 'A_10000_P',
  data() {
    return {
      text1: ref('호빵맨'),
      text2: ref('monstock@monstock.com'),
      text3: ref('**********'),
      check1: ref(true),
      check2: ref(false),
      check3: ref(false),
      check4: ref(false),
      check5: ref(false),
      check6: ref(false),
      select1: ref(null),
      options: [
        'South Korea (+82)', '선택1', '선택2', '선택3', '선택4'
      ],
      dailog2: ref(false),
      polcyType: ref('01')
    }
  },
  methods: {
    polcyPopup(type) {
      this.polcyType = type;
      this.dailog2 = true;
    }
  }
};
</script>
