<template>
  <div class="centerarea_box01">
    <q-form>
      <div class="con_box">
        <div style="padding:32px">
          <m-button-3 @click="dailog2 = true" lined color="primary">연속 보상 안내</m-button-3>
        </div>
        <!-- S 연속 보상 안내 -->
        <m-dialog v-model="dailog2">
          <div class="dailog_wrap">
            <div class="dailog_top">
              <q-btn icon="close" flat v-close-popup />
            </div>
            <q-card-section class="dailog_contents">
              <p class="dialog_tit l_row_l">연속 보상 안내</p>
              <p class="mgb32">연속보상은 7일 이후부터는 20 sMON씩 받게됩니다</p>
              <p class="txt_red mgb32">📍일일미션 달성 후 활동점수가 마이너스가 되는 경우 보상을 회수합니다. (1회에 한해 재지급)</p>
              <div class="between">
                <span>연속일수</span>
                <span>보상</span>
              </div>
              <ul class="list_type1 line">
                <li>
                  <span class="txt_dk">1일차</span>
                  <span class="primary bold">3 sMON</span>
                </li>
                <li>
                  <span class="txt_dk">2일차</span>
                  <span class="primary bold">5 sMON</span>
                </li>
                <li>
                  <span class="txt_dk">3일차</span>
                  <span class="primary bold">7 sMON</span>
                </li>
                <li>
                  <span class="txt_dk">4일차</span>
                  <span class="primary bold">10 sMON</span>
                </li>
                <li>
                  <span class="txt_dk">5일차</span>
                  <span class="primary bold">13 sMON</span>
                </li>
                <li>
                  <span class="txt_dk">6일차</span>
                  <span class="primary bold">16 sMON</span>
                </li>
                <li>
                  <span class="txt_dk">7일차 이상</span>
                  <span class="primary bold">20 sMON</span>
                </li>
                
              </ul>
            </q-card-section>
          </div>
        </m-dialog>
        <!-- E 연속 보상 안내 -->
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
