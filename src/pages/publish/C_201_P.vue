<template>
  <div class="centerarea_box01">
    <q-form>
      <div class="con_box">
        <div style="padding:32px">
          <m-button-3 @click="dailog2 = true" lined color="primary">Kaikas 지갑 연결</m-button-3>
        </div>
        <!-- S Kaikas 지갑 연결 -->
        <m-dialog v-model="dailog2">
          <div class="dailog_wrap Kaikas_type">
            <div class="dailog_top">
              <q-btn icon="close" flat v-close-popup />
            </div>
            <q-card-section class="dailog_contents">
              <p class="dialog_tit l_row_l"><i class="ico_kaikas_w"/>Kaikas 지갑 연결</p>
              <div class="qr_wrap01">
                <p> 남은 시간 : <span class="txt_time">10분 00초</span></p>
                <p> Kaikas Mobile을 사용하시는 경우 앱으로 QR코드를<br> 스캔해주세요.</p>
                <p class="qr_area">
                  <img src="~assets/img_qr1.svg"/>
                </p>
                <p>크롬 브라우저용 카이카스 사용자는 크롬 웹 스토어에서 카이카스를 설치해 주세요.</p>
                <a href="#" class="underline flex_link mgb32 center">Kaikas 설치하기</a>
              </div>
            </q-card-section>
          </div>
        </m-dialog>
        <!-- E Kaikas 지갑 연결 -->
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
