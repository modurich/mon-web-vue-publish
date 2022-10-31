<template>
  <div class="centerarea_box01">
    <q-form>
      <div class="con_box">
        <div style="padding:32px">
          <m-button-3 @click="dailog2 = true" lined color="primary">그룹명 변경</m-button-3>
        </div>
        <!-- S 그룹명 변경 -->
        <m-dialog v-model="dailog2">
          <div class="dailog_wrap fixed_btn">
            <div class="dailog_top">
              <q-btn icon="close" flat v-close-popup />
            </div>
            <q-card-section class="dg_con">
              <p class="dialog_tit l_row_l">그룹명 변경</p>
              <div><m-input filled v-model="text1" placeholder="그룹명을 입력하세요 (10자 이내)" class="round_type"/></div>
            </q-card-section>
            <q-card-actions class="fixed_btn_wrap">
              <m-button-3 flat size="large" color="primary" v-close-popup class="full">저장하기</m-button-3>
            </q-card-actions>
          </div>
        </m-dialog>
        <!-- E 그룹명 변경 -->
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
