<template>
  <div class="centerarea_box01">
    <q-form>
      <div class="con_box">
        <div style="padding:32px">
          <m-button-3 @click="dailog2 = true" lined color="primary">손절 설정</m-button-3>
        </div>
        <!-- S 손절 설정 -->
        <m-dialog v-model="dailog2">
          <div class="dailog_wrap">
            <div class="dailog_top">
              <q-btn icon="close" flat v-close-popup />
            </div>
            <q-card-section class="dailog_contents">
              <p class="dialog_tit l_row_l">손절 설정</p>
              <m-tabs class="box_type large" v-model="tab1" :items="tabs" />
              <div v-if="tab1 == 'G'">
                <div class="tab_add_scroll">
                  <p class="txt_dk mga32">설정 가능 범위 : <span class="primary">5.01 ~ 90%</span></p>
                  <div class="stepper_wrap01">
                    <m-button-3 color="primary" lined>-</m-button-3>
                    <m-input filled v-model="text1" class="round_type"/>
                    <m-button-3 color="primary" lined>+</m-button-3>
                  </div>
                  <div class="btn_wrap l_row">
                    <m-button-3 color="primary" lined class="full">+ 10%</m-button-3>
                    <m-button-3 color="primary" lined class="full">+ 30%</m-button-3>
                    <m-button-3 color="primary" lined class="full">초기화</m-button-3>
                  </div>
                  <div class="gray_box01">
                   <p class="between">
                    <span class="txt_label">손절가</span>
                    <span class="txt_con txt_red">₩ 50,000</span>
                   </p>
                   <p class="between">
                    <span class="txt_label">손절률</span>
                    <span class="txt_con txt_red">5.01%</span>
                   </p>
                  </div>
                  <div class="btn_wrap l_row mgt32"><m-button-3 color="primary" class="full" size="large">저장하기</m-button-3></div>
                </div>
              </div>
              <div v-if="tab1 == 'F'">
                <div class="tab_add_scroll">
                  <p class="txt_dk mga32">설정 가능 범위 : <span class="primary">210,000 이하</span></p>
                  <div class="stepper_wrap01">
                    <m-button-3 color="primary" lined>-</m-button-3>
                    <m-input filled v-model="text1" class="round_type"/>
                    <m-button-3 color="primary" lined>+</m-button-3>
                  </div>
                  <div class="btn_wrap l_row">
                    <m-button-3 color="primary" lined class="full">- 1호가</m-button-3>
                    <m-button-3 color="primary" lined class="full">- 5호가</m-button-3>
                    <m-button-3 color="primary" lined class="full">초기화</m-button-3>
                  </div>
                  <div class="gray_box01">
                   <p class="between">
                    <span class="txt_label">손절률</span>
                    <span class="txt_con txt_red">5.01%</span>
                   </p>
                  </div>
                  <div class="btn_wrap l_row mgt32"><m-button-3 color="primary" class="full" size="large">저장하기</m-button-3></div>
                </div>
              </div>
            </q-card-section>
          </div>
        </m-dialog>
        <!-- E 손절 설정 -->
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
      tab1: ref('G'),
      tabs: [
        { label: '손절률 / %', value: 'G', icon: '' },
        { label: '손절가 / 원', value: 'F', icon: '' }
      ],
    }
  },
  methods: {
  }
};
</script>
