<template>
  <div class="centerarea_box01">
    <q-form>
      <div class="con_box">
        <div style="padding:32px">
          <m-button-3 @click="dailog2 = true" lined color="primary">Google OTP 초기화</m-button-3>
        </div>
        <!-- S Google OTP 초기화 -->
        <m-dialog v-model="dailog2">
          <div class="dailog_wrap">
            <div class="dailog_top">
              <q-btn icon="close" flat v-close-popup />
            </div>
            <q-card-section class="dailog_contents">
              <p class="dialog_tit l_row_l">Google OTP 초기화</p>
              <div class="l_row">
               <p class="line26">기존 OTP 등록 정보를 초기화 하시겠습니까?<br/>
                OTP를 초기화하려면 아래 사항을 진행하셔야 합니다.</p>
               <p class="primary line26">1.PIN 코드 확인<br/>
                  2.본인인증</p>
              </div>
              <div class="btn_wrap l_row_l">
                <m-button-3 color="primary" size="large" class="full">초기화 시작</m-button-3>
              </div>
            </q-card-section>
          </div>
        </m-dialog>
        <!-- E Google OTP 초기화 -->
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
