<template>
  <div class="centerarea_box01">
    <q-form>
      <div class="con_box">
        <div style="padding:32px">
          <m-button-3 @click="dailog2 = true" lined color="primary">럭키박스결과</m-button-3>
        </div>
        <!-- S 럭키박스결과 -->
        <m-dialog v-model="dailog2">
          <div class="dailog_wrap">
            <div class="dailog_top">
              <q-btn icon="close" flat v-close-popup />
            </div>
            <q-card-section class="dailog_contents">
              <p class="dialog_tit l_row_l">럭키박스 안내</p>
              <div class="luck_box">
                <p class="title">🎁  럭키박스(브론즈 ~ 골드) 받는 방법</p>
                <div class="list">
                  <i class="ico_thumbsUp_on1"/>
                  <span class="txt_area">작성한 포스트 ‘좋아요' 10개 받기</span>
                </div>
                <div class="list">
                  <i class="ico_write_on"/>
                  <span class="txt_area">포스트(자유 제외) 5자 이상 댓글 작성</span>
                </div>
                <div class="list">
                  <i class="ico_event_on"/>
                  <span class="txt_area">
                    일일 미션 연속 10일마다 지급<br/>
                    (100일차에는 골드+ 럭키박스 지급)</span>
                </div>
              </div>
              <div class="divider1 small" />
              <div class="luck_box">
                <p class="title">🎁  럭키박스(브론즈 ~ 골드) 받는 방법</p>
                <div class="list">
                  <i class="ico_box01"/>
                  <span class="txt_area1">
                    <span class="txt01">브론즈 럭키박스</span><br/>
                    당첨시 1 ~ 200 sMON</span>
                </div>
                <div class="list">
                  <i class="ico_box01"/>
                  <span class="txt_area1">
                    <span class="txt02">실버 럭키박스</span><br/>
                    당첨시 10 ~ 500 sMON</span>
                </div>
                <div class="list">
                  <i class="ico_box01"/>
                  <span class="txt_area1">
                    <span class="txt03">골드 럭키박스</span><br/>
                    당첨시 50 ~ 1,000 sMON</span>
                </div>
                <div class="message flex top font12">
                  <span>❗️</span>
                  <span>럭키박스는 꽝이 있을 수 있습니다.<br/>
                      단, '+'가 붙은 럭키박스는 꽝이 없습니다.
                  </span>
                </div>
              </div>
            </q-card-section>
          </div>
        </m-dialog>
        <!-- E 럭키박스결과 -->
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
