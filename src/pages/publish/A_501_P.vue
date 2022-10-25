<template>
  <div class="centerarea_box01">
    <q-form>
      <div class="con_box">
        <div style="padding:32px">
          <m-button-3 @click="dailog2 = true" lined color="primary">BLASH 랭킹 기준</m-button-3>
        </div>
        <!-- S 종목 공개하기 -->
        <m-dialog v-model="dailog2">
          <div class="dailog_wrap">
            <div class="dailog_top">
              <q-btn icon="close" flat v-close-popup />
            </div>
            <q-card-section class="dailog_contents">
              <p class="dialog_tit l_row_l">BLASH 랭킹 기준</p>
              <div class="l_row">
               <p class="txt_dk">🏆  참여 플레이어</p>
               <p class="font12">최소 1건 이상 BLASH를 등록한 플레이어부터 랭킹에 포함됩니다. (단, 대기중인 BLASH 제외)</p>
               <p class="txt_dk">🏆  등급</p>
               <p class="font12">이벤트 기간 산정한 등급뱃지와 성공률은 현재랭킹과 다를 수 있습니다.</p>
              </div>
              <div class="btn_wrap l_row_l">
                <m-button-3 color="primary" size="large" class="full">확인</m-button-3>
              </div>
            </q-card-section>
          </div>
        </m-dialog>
        <!-- E 종목 공개하기 -->
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
