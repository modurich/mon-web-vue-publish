<template>
  <div class="centerarea_box01">
    <q-form>
      <div class="con_box">
        <div style="padding:32px">
          <m-button-3 @click="dailog2 = true" lined color="primary">로컬 설정</m-button-3>
        </div>
        <!-- S 로컬 설정 -->
        <m-dialog v-model="dailog2">
          <div class="dailog_wrap">
            <div class="dailog_top">
              <q-btn icon="close" flat v-close-popup />
            </div>
            <q-card-section class="dailog_contents">
              <p class="dialog_tit l_row_l">로컬 설정</p>
              <div class="l_row">
                <p class="txt_dk">📝 언어</p>
                <div class="mgb32 mgt16">
                  <m-select v-model="select1" :options="options" />
                </div>
                <p class="txt_dk">💵 통화</p>
                <div class="mgb32 mgt16">
                  <m-select v-model="select1" :options="options" />
                </div>
                <p class="txt_dk">🕰 타임존</p>
                <div class="mgb32 mgt16">
                  <m-select v-model="select1" :options="options" />
                </div>
              </div>
              <div class="btn_wrap l_row_l">
                <m-button-3 color="primary" size="large" class="full">저장</m-button-3>
              </div>
            </q-card-section>
          </div>
        </m-dialog>
        <!-- E 로컬 설정 -->
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
