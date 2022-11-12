<template>
  <div class="centerarea_box01">
    <q-form>
      <div class="con_box">
        <div style="padding:32px">
          <m-button-3 @click="dailog2 = true" lined color="primary">평단가수정</m-button-3>
        </div>
        <!-- S 평단가수정 -->
        <m-dialog v-model="dailog2">
          <div class="dailog_wrap">
            <div class="dailog_top">
              <q-btn icon="close" flat v-close-popup />
            </div>
            <q-card-section class="dailog_contents">
              <p class="dialog_tit l_row_l">평단가수정</p>
              <div class="product_list">
                <div>
                  <div class="prd_img">
                    <div class="img_area">
                      <img src="~assets/prd_logo.png" alt="logo" />
                    </div>
                    <div>
                      <div class="font16 txt_dk">삼성전자우</div>
                      <div class="txt02">코스피 005930</div>
                    </div>
                  </div>
                  <div class="right">
                    <span class="tag_blue">+1.24%</span><br/>
                    <span class="font12">₩ 352,100</span>
                  </div> 
                </div>
              </div>
              <div class="divider1 small"/>
              <div class="l_row_l">
                <m-input filled v-model="text1" label="평단가 입력" class="round_type" />
              </div>
              <div class="between mga32">
                <span class="txt_dk">수익률</span>
                <span class="font24 txt_blue1">+9999.9%</span>
              </div>
              <div class="btn_wrap l_row_l">
                <m-button-3 color="primary" size="large" class="full">저장하기</m-button-3>
              </div>
            </q-card-section>
          </div>
        </m-dialog>
        <!-- E 평단가수정 -->
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
      text1: ref(''),
      text2: ref(''),
      text3: ref(''),
      check1: ref(true),
      check2: ref(false),
      check3: ref(false),
      check4: ref(false),
      check5: ref(false),
      check6: ref(false),
      select1: ref(null),
      options: [
        'South Korea (+82)', '선택1', '선택2', '선택3', '선택4'
      ],
      dailog2: ref(false),
      polcyType: ref('01')
    }
  },
  methods: {
    polcyPopup(type) {
      this.polcyType = type;
      this.dailog2 = true;
    }
  }
};
</script>
