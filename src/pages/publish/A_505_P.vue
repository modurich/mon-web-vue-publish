<template>
  <div class="centerarea_box01">
    <q-form>
      <div class="con_box">
        <div style="padding:32px">
          <m-button-3 @click="dailog2 = true" lined color="primary">스테이킹 수량별 보상VP</m-button-3>
        </div>
        <!-- S 종목 공개하기 -->
        <m-dialog v-model="dailog2">
          <div class="dailog_wrap">
            <div class="dailog_top">
              <q-btn icon="close" flat v-close-popup />
            </div>
            <q-card-section class="dailog_contents">
              <p class="dialog_tit l_row_l">스테이킹 수량별 보상VP</p>
              <div class="between">
                <span>스테이킹 수량</span>
                <span>보상 (오전9시)</span>
              </div>
              <ul class="list_type1 line">
                <li>
                  <span class="txt_dk">10,000</span>
                  <span class="primary bold">5VP</span>
                </li>
                <li>
                  <span class="txt_dk">50,000</span>
                  <span class="primary bold">10VP</span>
                </li>
                <li>
                  <span class="txt_dk">100,000</span>
                  <span class="primary bold">15VP</span>
                </li>
                <li>
                  <span class="txt_dk">500,000</span>
                  <span class="primary bold">20VP</span>
                </li>
                <li>
                  <span class="txt_dk">1,000,000</span>
                  <span class="primary bold">25VP</span>
                </li>
                <li>
                  <span class="txt_dk">5,000,000</span>
                  <span class="primary bold">30VP</span>
                </li>
                
              </ul>
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
