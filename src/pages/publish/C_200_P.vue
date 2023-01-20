<template>
  <div class="centerarea_box01">
    <q-form>
      <div class="con_box">
        <div style="padding:32px">
          <m-button-3 @click="dailog2 = true" lined color="primary">Klip지갑연결</m-button-3>
        </div>
        <!-- S Klip지갑연결 -->
        <m-dialog v-model="dailog2">
          <div class="dailog_wrap Klip_type">
            <div class="dailog_top">
              <q-btn icon="close" flat v-close-popup />
            </div>
            <q-card-section class="dailog_contents">
              <p class="dialog_tit l_row_l"><i class="ico_klip_w"/>Klip지갑연결</p>
              <div class="qr_wrap01">
                <p> 남은 시간 : <span class="txt_time">10분 00초</span></p>
                <p> 카카오톡 또는 클립 앱으로 QR코드를 스캔해주세요.</p>
                <p class="qr_area">
                  <img src="~assets/img_qr1.svg"/>
                </p>
                <p class="underline">모바일에서 클립이 열리지 않는다면 여기를 클릭해주세요.</p>
              </div>
            </q-card-section>
          </div>
        </m-dialog>
        <!-- E Klip지갑연결 -->
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
