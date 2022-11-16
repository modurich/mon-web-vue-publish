<template>
  <div class="centerarea_box01">
    <q-form>
      <div class="con_box">
        <div style="padding:32px">
          <m-button-3 @click="dailog1 = true" lined color="primary">A_217222_U</m-button-3>
        </div>
        <!-- S 평단가수정 -->
        <q-dialog v-model="dailog1" position="bottom">
          <div class="bottom_sheet_wrap">
            <div class="top_wrap1">
              <div class="my_profile">
                <div class="img_area">
                  <img src="~assets/profile_img1.png" alt="profile"/>
                </div>
                <div class="tit_area">
                  <span class="txt_tit">몬스탁닉넴열글자까지</span>
                  <span class="badge_area">
                    <span class="badge pro">PRO</span>
                    <span class="badge pl1">PL1</span>
                  </span>
                </div>
              </div>
              <button class="ico_user_pl" color="secondary" label="Auto-Close Menu">
                user추가
                <q-menu auto-close :offset="[30, 10]">
                  <q-list style="min-width: 80px">
                    <q-item clickable>
                      <q-item-section>차단해제</q-item-section>
                    </q-item>
                    <q-separator />
                  </q-list>
                </q-menu>
              </button>
            </div>
            <div class="divider1 xsmall"/>
            <div class="between">
              <span class="ico_area mgb4">
                <span class="badge3 brown">코인</span>
                <span class="badge3 yellow">BEST</span>
                <span class="badge3 pink"><i class="ico_crown" />프리미엄</span>
              </span>
              <span class="font12">종료</span>
            </div>
            <p class="ellipsis font18 txt_dk bold mgt8">제목은 2글자 이상 최대 40자입니다제목은 2글자 이상 최대 40자입니다제목은 2글자 이상 최대 40자입니다제목은 2글자 이상 최대 40자입니다</p>
            <div class="divider1 xsmall"/>
            <div ref="s02" class="pro_header">
              <span class="logo">
                <img src="~assets/prd_logo.png" alt="profile" />
                삼성전자
              </span>    
              <span class="txt01">₩ 352,100</span> 
            </div>
            <div class="divider1 xsmall"/>
            <ul class="list_type2">
              <li>
                <div class="l_area v_center">
                  <span class="font12">
                    실현 수익률
                  </span>
                  <span class="mgl16 font24 txt_blue1">
                    15.00%
                  </span>
                </div>
                <div class="r_area">
                  <img src="~assets/ico_stamp.svg" alt="성공" />
                </div>
              </li>
            </ul>
            <ul class="list_type1 font12">
              <li>
                <span class="txt01 txt_red">매도</span>
                <span class="txt02">YYYY.MM.DD hh:mm:ss</span>
              </li>
              <li>
                <span class="txt01 txt_blue1">최초매수</span>
                <span class="txt02">YYYY.MM.DD hh:mm:ss</span>
              </li>
            </ul>
            <div class="btn_wrap mgt32">
                <m-button-3 color="primary" class="full">
                  BLASH 상세 보기
                </m-button-3>
            </div>
          </div>
        </q-dialog>
        <!-- E 평단가수정 -->
      </div>
    </q-form>
  </div>
</template>

<script>
import { ref } from 'vue';
import MDialogBlank from 'src/components/MDialogBlank.vue';
import GaugeChart from 'src/components/GaugeChart.vue';
export default {
  components: { MDialogBlank,GaugeChart },
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
      dailog1: ref(false),
      polcyType: ref('01')
    }
  },
  methods: {
    polcyPopup(type) {
      this.polcyType = type;
      this.dailog1 = true;
    }
  }
};
</script>
