<template>
  <div class="centerarea_box01">
    <q-form>
      <div class="con_box">
        <div style="padding:32px">
          <m-button-3 @click="dailog2 = true" lined color="primary">등급/뱃지</m-button-3>
        </div>
        <!-- S 등급/뱃지 -->
        <m-dialog v-model="dailog2">
          <div class="dailog_wrap">
            <div class="dailog_top">
              <q-btn icon="close" flat v-close-popup />
            </div>
            <q-card-section class="dailog_contents grade_wrap">
              <p class="dialog_tit l_row_l">등급/뱃지</p>
               <!--S user-->
                <div class="user_wrap">
                    <div class="user_area">
                        <div class="user_img">
                            <div class="img_area"><img src="~assets/user_img.png" alt="profile"/></div>
                        </div>
                        <p class="user_name">닉네임열두글자하나둘셋넷</p>
                        <p class="user_grade">
                            <!-- <span class="ico_level1">level</span> -->
                            <span class="badge confirm">인증</span>
                            <!-- <span class="badge pl1">PL1</span> -->
                        </p>
                    </div>
                    <ul class="follow_wrap">
                        <li>
                            <span class="txt01">PRO</span>
                            <span><span class="badge type1">PRO</span></span>
                        </li>
                        <li>
                            <span class="txt01">등급</span>
                            <span><span class="badge pl1">PL1</span></span>
                        </li>
                        <li>
                            <span class="txt01">활동</span>
                            <span><span class="ico_level1">level1</span></span>
                        </li>
                        <li>
                            <span class="txt01">평점</span>
                            <span><span class="txt02">4.60 ★</span></span>
                        </li>
                    </ul>
                </div>
                <!--E user-->
             
              <div class="btn_wrap l_row_l">
                <m-button-3 color="primary" size="large" class="full">확인</m-button-3>
              </div>
            </q-card-section>
          </div>
        </m-dialog>
        <!-- E 등급/뱃지 -->
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
      text1: ref('호빵맨'),
      text2: ref('monstock@monstock.com'),
      text3: ref('**********'),
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
