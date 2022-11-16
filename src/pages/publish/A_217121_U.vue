<template>
  <div class="centerarea_box01">
    <q-form>
      <div class="con_box">
        <div style="padding:32px">
          <m-button-3 @click="dailog1 = true" lined color="primary">매수성공</m-button-3>
        </div>
        <!-- S 평단가수정 -->
        <q-dialog v-model="dailog1" position="bottom">
          <div class="bottom_sheet_wrap">
            <div class="l_area">
              <div class="between">
                <span class="ico_area mgb4">
                  <span class="badge3 brown">코인</span>
                  <span class="badge3 yellow">BEST</span>
                  <span class="badge3 pink"><i class="ico_crown" />프리미엄</span>
                </span>
                <span class="font12">D-120</span>
              </div>
              <p class="ellipsis font18 txt_dk bold mgt8">제목은 2글자 이상 최대 40자입니다제목은 2글자 이상 최대 40자입니다제목은 2글자 이상 최대 40자입니다제목은 2글자 이상 최대 40자입니다</p>
              <ul class="insight_list list6 mgt32">
                  <li>
                      <span class="txt01">누적 VP</span>
                      <span class="txt02 font14 primary">20,000</span>
                  </li>
                  <li>
                      <span class="txt01">sMON 보상</span>
                      <span class="txt02 font14 txt_red">500.5 sMON</span>
                  </li>
                  <li>
                      <span class="txt01">원화 보상</span>
                      <span class="txt02 font14 txt_red">₩ 5,000</span>
                  </li>
                  <li>
                      <span class="txt01">미리보기</span>
                      <span class="txt02 font14">999,000 명</span>
                  </li>
                  <li>
                      <span class="txt01">종목공개</span>
                      <span class="txt02 font14">999,000 명</span>
                  </li>
                  <li>
                      <span class="txt01">구독</span>
                      <span class="txt02 font14">999,000 명</span>
                  </li>
              </ul>
              <div class="divider1 xsmall"/>
              <div ref="s02" class="pro_header">
                <span class="logo">
                  <img src="~assets/prd_logo.png" alt="profile" />
                  삼성전자
                </span>    
                <span class="txt01">₩ 352,100</span> 
              </div>
              <div class="divider1 xsmall"/>
              <div class="chart_list_wrap">
                <div class="chart_area">
                  <!-- S 차트 들어가는 곳-->
                  <div class="gaug_wrap"><GaugeChart :fld01="100" :fld02="120"/></div>
                  <!-- E 차트 들어가는 곳-->
                </div>
                <div class="list_area">
                  <!-- S 리스트-->
                  <ul class="font12">
                    <li>
                      <span class="txt01">목표수익률</span>
                      <span class="ico_area txt_blue1 font12">+00.00%</span>
                    </li>
                    <li>
                      <span class="txt01">목표가</span>
                      <span class="ico_area txt_blue1 font12">＄0.0123456789</span>
                    </li>
                    <li>
                      <span class="txt01">투자비중</span>
                      <span class="ico_area txt_dk font12">100%</span>
                    </li>
                    <li>
                      <span class="txt01">투자기간</span>
                      <span class="ico_area txt_dk font12">100일</span>
                    </li>
                  </ul>
                  <!-- E 리스트-->
                </div>
              </div>
              <div class="btn_wrap mgb16">
                <m-button-3 lined color="red" class="full">
                  BLASH 취소 하기
                </m-button-3>
              </div>
              <div class="btn_wrap">
                <m-button-3 color="green" class="full">
                  추매
                </m-button-3>
                <m-button-3 color="orange" class="full">
                  홀딩
                </m-button-3>
                <m-button-3 color="red" class="full">
                  매도
                </m-button-3>
              </div>
              <div class="divider1 xsmall"/>
              <ul class="list_type1 font12">
                <li>
                  <span class="txt01 secondary">홀딩</span>
                  <span class="txt02">YYYY.MM.DD hh:mm:ss</span>
                </li>
                <li>
                  <span class="txt01 txt_blue1">최초매수</span>
                  <span class="txt02">YYYY.MM.DD hh:mm:ss</span>
                </li>
              </ul>
            </div>
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
