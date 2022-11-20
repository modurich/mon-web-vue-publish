<template>
  <div class="centerarea_box01">
    <q-form>
      <div class="con_box">
        <div style="padding:32px">
          <m-button-3 @click="dailog2 = true" lined color="primary">알림상세</m-button-3>
        </div>
        <!-- S 알림상세 -->
        <m-dialog v-model="dailog2">
          <div class="dailog_wrap">
            <div class="dailog_top">
              <q-btn icon="close" flat v-close-popup />
            </div>
            <q-card-section class="dailog_contents">
              <p class="dialog_tit l_row_l">BLASH 매도 알림 - 성공 종료</p>
              <p>어드민메시지어드민메시지어드민메시지어드민메시지어드민메시지어드민메시지어드민메시지어드민메시지어드민메시지어드민메시지어드민메시지어드민메시지어드민메시지어드민메시지어드민메시지어드민메시지어드민메시지어드민메시지어드민메시지어드민메시지어드민메시지어드민메시지어드민메시지어드민메시지어드민메시지어드민메시지어드민메시지어드민메시지어드민메시지어드민메시지어드민메시지어드어드민메시지어드민메시지</p>
              <div class="btn_wrap l_row_l mgt32">
                <m-button-3 size="large" color="primary" class="full">보러가기</m-button-3>
              </div>
            </q-card-section>
          </div>
        </m-dialog>
        <!-- E 알림상세 -->
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
      text1: ref(''),
      text2: ref(''),
      text3: ref(''),
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
