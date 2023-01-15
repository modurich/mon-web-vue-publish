<template>
  <div class="centerarea_box01">
    <q-form>
      <div class="con_box">
        <div style="padding:32px">
          <m-button-3 @click="dailog2 = true" lined color="primary">목표 설정</m-button-3>
        </div>
        <!-- S 목표 설정 -->
        <m-dialog v-model="dailog2">
          <div class="dailog_wrap">
            <div class="dailog_top">
              <q-btn icon="close" flat v-close-popup />
            </div>
            <q-card-section class="dailog_contents">
              <p class="dialog_tit l_row_l">목표 설정</p>
              <m-tabs class="box_type large" v-model="tab1" :items="tabs" />
              <div v-if="tab1 == 'G'">
                <div class="tab_add_scroll">
                  <p class="txt_dk mga32">설정 가능 범위 : <span class="primary">매수고가의 5.0 ~ 1000.0</span></p>
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
                    <span class="txt_label">목표가</span>
                    <span class="txt_con">₩ 52,000</span>
                   </p>
                   <p class="between">
                    <span class="txt_label">목표수익률</span>
                    <span class="txt_con">5.01%</span>
                   </p>
                   <p class="font12">추매시 목표수익률을 기준으로 연동된 목표가가 자동으로 재설정됩니다.</p>
                  </div>
                  <h2 class="font16 bold txt_dk mgt32">성공시 기본보상</h2>
                  <div class="blash_small_wrap">
                    <div class="blash_small_box">
                      <p class="tit_wrap">프리미엄 BLASH</p>
                      <div class="con_wrap">
                        <p class="between">
                          <span class="txt_label">sMON</span>
                          <span class="txt_con primary">500</span>
                        </p>
                        <p class="between">
                          <span class="txt_label">리워드</span>
                          <span class="txt_con txt_red">₩ 5,000</span>
                        </p>
                      </div>
                    </div>
                    <div class="blash_small_box">
                      <p class="tit_wrap">일반 BLASH</p>
                      <div class="con_wrap">
                        <p class="between">
                          <span class="txt_label">sMON</span>
                          <span class="txt_con primary">500</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <p class="txt_info">🙌🏻 성공시 수익 1%당 일반 10 sMON , 프리미엄 100 sMON 씩 보상합니다<br/>
                    🙌🏻  예측중 보팅량에 비례하여 10 VP 당 일반 0.5 sMON , 프리미엄 1 sMON씩 추가지급합니다.</p>
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
                    <m-button-3 color="primary" lined class="full">+ 1호가</m-button-3>
                    <m-button-3 color="primary" lined class="full">+ 5호가</m-button-3>
                    <m-button-3 color="primary" lined class="full">초기화</m-button-3>
                  </div>
                  <div class="gray_box01">
                   <p class="between">
                    <span class="txt_label">목표수익률</span>
                    <span class="txt_con">5.01%</span>
                   </p>
                  </div>
                  <div class="btn_wrap l_row mgt32"><m-button-3 color="primary" class="full" size="large">저장하기</m-button-3></div>
                </div>
              </div>
            </q-card-section>
          </div>
        </m-dialog>
        <!-- E 목표 설정 -->
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
        { label: '수익률 / %', value: 'G', icon: '' },
        { label: '목표가 / 원', value: 'F', icon: '' }
      ],
    }
  },
  methods: {
  }
};
</script>
