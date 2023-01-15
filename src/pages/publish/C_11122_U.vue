<template>
  <div class="centerarea_box01">
    <q-form>
      <div class="con_box">
        <div style="padding:32px">
          <m-button-3 @click="dailog2 = true" lined color="primary">매수저가 설정</m-button-3>
        </div>
        <!-- S 매수저가 설정 -->
        <m-dialog v-model="dailog2">
          <div class="dailog_wrap">
            <div class="dailog_top">
              <q-btn icon="close" flat v-close-popup />
            </div>
            <q-card-section class="dailog_contents">
              <p class="dialog_tit l_row_l">매수저가 설정</p>
              <p class="txt_dk">설정 가능 범위 : <span class="primary">매수고가의 -5.0 ~ +5.0%</span></p>
              <div class="stepper_wrap01">
                <m-button-3 color="primary" lined>-</m-button-3>
                <m-input filled v-model="text1" class="round_type"/>
                <m-button-3 color="primary" lined>+</m-button-3>
              </div>
              <div class="btn_wrap l_row">
                <m-button-3 color="primary" lined class="full">+ 0.1%</m-button-3>
                <m-button-3 color="primary" lined class="full">+ 0.5%</m-button-3>
                <m-button-3 color="primary" lined class="full">초기화</m-button-3>
              </div>
              <div class="btn_wrap l_row"><m-button-3 color="primary" class="full" size="large">저장하기</m-button-3></div>
            </q-card-section>
          </div>
        </m-dialog>
        <!-- E 매수저가 설정 -->
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
      dailog2: ref(false),
      tab1: ref('G'),
      tabs: [
        { label: '은행', value: 'G', icon: '' },
        { label: '증권사', value: 'F', icon: '' }
      ],
    }
  },
  methods: {
  }
};
</script>
