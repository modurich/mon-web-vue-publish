<template>
  <div class="centerarea_box01">
    <q-form>
      <div class="con_box">
        <div style="padding:32px">
          <m-button-3 @click="dailog2 = true" lined color="primary">활동등급 미달</m-button-3>
        </div>
        <!-- S 활동등급 미달 -->
        <m-dialog v-model="dailog2">
          <div class="dailog_wrap">
            <div class="dailog_top">
              <q-btn icon="close" flat v-close-popup />
            </div>
            <q-card-section class="dailog_contents code_wrap">
              <p class="dialog_tit l_row_l">활동등급 미달</p>
              <p class="line26">활동 등급 기준에 도달하면 sMON을 소모하여 슬롯을 확장할 수 있습니다. 등급을 올린 후 다시 시도해 주세요.</p>
              <div class="l_row">
               <p class="tit mgb8">첫 번째 슬롯 확장</p>
               <p class="primary">귀족개미 / 5,000 sMON</p>
              </div>
              <div class="l_row_l">
                <p class="tit mgb8">두 번째 슬롯 확장</p>
                <p class="primary">몬스터개미 / 20,000 sMON</p>
              </div>
              <div class="btn_wrap l_row_l">
                <m-button-3 color="primary" size="large" class="full">초기화 시작</m-button-3>
              </div>
            </q-card-section>
          </div>
        </m-dialog>
        <!-- E 활동등급 미달 -->
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
    }
  },
  methods: {
  }
};
</script>
