<template>
  <div class="centerarea_box01">
    <q-form>
      <div class="con_box">
        <div style="padding:32px">
          <m-button-3 @click="dailog2 = true" lined color="primary">관심 자산 그룹 선택</m-button-3>
        </div>
        <!-- S 관심 자산 그룹 선택 -->
        <m-dialog v-model="dailog2">
          <div class="dailog_wrap fixed_btn">
            <div class="dailog_top">
              <q-btn icon="close" flat v-close-popup />
            </div>
            <q-card-section class="dg_con">
              <p class="dialog_tit">관심 자산 그룹 선택</p>
              <p class="mgt32 mgb32">추가할 그룹을 선택해 주세요</p>
              <div class="btn_list_wrap">
                <m-button-3 lined color="primary" class="full">그룹명1</m-button-3>
                <m-button-3 lined color="primary" class="full active">그룹명2</m-button-3>
                <m-button-3 lined color="primary" class="full">그룹명3</m-button-3>
                <m-button-3 lined color="primary" class="full">그룹명4</m-button-3>
                <m-button-3 lined color="primary" class="full active">그룹명5</m-button-3>
                <m-button-3 lined color="primary" class="full">그룹명6</m-button-3>
                <m-button-3 lined color="primary" class="full">그룹명7</m-button-3>
                <m-button-3 lined color="primary" class="full">그룹명8</m-button-3>
              </div>
            </q-card-section>
            <q-card-actions class="fixed_btn_wrap">
              <m-button-3 flat size="large" color="primary" v-close-popup class="full">확인</m-button-3>
            </q-card-actions>
          </div>
        </m-dialog>
        <!-- E 관심 자산 그룹 선택 -->
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
