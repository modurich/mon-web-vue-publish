<template>
  <div class="centerarea_box01">
    <q-form>
      <div class="con_box">
        <div style="padding:32px">
          <m-button-3 @click="dailog1 = true" lined color="primary">휴대폰 번호 인증</m-button-3>
        </div>
        <!-- S 휴대폰 번호 변경 -->
        <m-dialog v-model="dailog1">
          <div class="dailog_wrap">
            <div class="dailog_top">
              <q-btn icon="close" flat v-close-popup />
            </div>
            <q-card-section class="dg_con">
              <p class="dialog_tit l_row_l">휴대폰 인증</p>
              <div class="l_row">
                <m-input filled v-model="text1" label="생년월일 8자리" class="round_type" />
              </div>
              <div class="l_row">
                <m-select v-model="select1" :options="options" />
              </div>
              <div class="l_row">
                <m-input filled v-model="text1" label="휴대폰 번호" class="round_type" />
              </div>
              <!-- <div class="l_row_s"><m-input filled v-model="text1" label="인증번호" class="round_type"/></div> -->
              <div class="btn_wrap l_row_l">
                <m-button-3 color="primary" class="full" disabled>인증번호 재발송 (60s)</m-button-3>
              </div>
              <div class="btn_wrap l_row_l">
                <m-button-3 color="primary" size="large" class="full">확인</m-button-3>
              </div>
            </q-card-section>
          </div>
        </m-dialog>
        <!-- E 휴대폰 번호 변경 -->
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
      dailog1: ref(false),
      polcyType: ref('01')
    }
  },
  methods: {
    polcyPopup(type) {
      this.polcyType = type;
      this.dailog1 = true;
    }
  }
};
</script>
