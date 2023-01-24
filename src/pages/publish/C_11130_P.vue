<template>
    <div class="centerarea_box1">
        <div class="con_box">
          <h2 class="line_type">
            1차 추가매수 시그널 작성
          </h2>
            <div class="box_contents">
              <div class="invest_wrap">
                <div class="between">
                  <span class="badge_area">
                    <span class="badge3 small red">정리매매</span>
                  </span>
                  <span class="font10 primary">장중 / 실시간</span>
                </div>
                <div ref="s01" class="pro_area" v-show="!isshow">
                  <p class="logo_wrap">
                    <span class="logo"><img src="~assets/prd_logo.png" alt="" /></span>
                    <span class="txt_area">
                      <span class="txt01">삼성전자 우</span>
                      <span class="txt02">코스닥 반도치 087600</span>
                    </span>
                  </p>
                  <p class="txt_wrap">
                    <span class="txt_area txt_blue1">
                      <span class="txt01">₩ 352,100</span>
                      <span class="ico_area"><span class="tag_blue small">+4.26%</span></span>
                      <span class="txt02">▲ 2,000</span>
                    </span>
                    <span class="bar_area">
                      <span class="line_bar_wrap blue">
                        <span class="line"></span>
                        <span class="bar" style="top:35%;height: 30%;"></span>
                      </span>
                    </span>
                  </p>
                </div>
              </div>

              <div class="divider"/>

              <p class="font18 txt_dk bold">제목은 2글자 이상 최대 40자입니다</p>
              <ul class="list_type1 mgt32">
                  <li>
                    <span class="txt01">현재수익률</span>
                    <span class="font16 txt_blue1">+2.01%</span>
                  </li>
                  <li>
                    <span class="txt01">목표수익률</span>
                    <span class="font16 txt_blue1">+10.00%</span>
                  </li>
                  <li>
                    <span class="txt01">투자비중</span>
                    <span class="font16 txt_dk medium">100% (+0)</span>
                  </li>
                  <li>
                    <span class="txt01">투자기간</span>
                    <span class="font16 txt_dk medium">100일 (+0)</span>
                  </li>                
                </ul>
                <div class="divider1 xsmall"/>
                <ul class="list_type1">
                  <li>
                    <span class="txt01">목표가</span>
                    <span class="font16 txt_blue1 medium">₩ 221,000</span>
                  </li>
                  <li>
                    <span class="txt01">평단가</span>
                    <span class="font16 txt_dk medium">₩ 201,000</span>
                  </li>
                  <li>
                    <span class="txt01">손절가</span>
                    <span class="font16 txt_red1 medium">₩ 200,000</span>
                  </li>
                </ul>

                <div class="divider"/>

                <h3 class="between mgt32 mgb26">
                  <span class="font16">투자기간 연장</span>
                  <span class="medium font14 txt_gray">최대 5일 가능</span>
                </h3>
                <div class="btn_wrap small">
                  <m-button-3 color="primary" class="full">변동 없음</m-button-3>
                  <m-button-3 color="primary" lined class="full">+ 5일</m-button-3>
                  <m-button-3 color="primary" lined class="full">+ 20일</m-button-3>
                  <m-button-3 color="primary" lined class="full">+ 60일</m-button-3>
                </div>

                <div class="divider"/>

                <p class="between">
                  <button class="ico_info_bk font16 txt_dk bold">투자비중 추가</button>
                  <span>최대 100% 가능</span>
                </p>
                <div class="stepper_wrap01">
                  <m-button-3 color="primary" lined>-</m-button-3>
                  <m-input filled v-model="text1" class="round_type"/>
                  <m-button-3 color="primary" lined>+</m-button-3>
                </div>
                <div class="btn_wrap l_row">
                  <m-button-3 color="primary" lined class="full">+ 10%</m-button-3>
                  <m-button-3 color="primary" lined class="full">+ 50%</m-button-3>
                  <m-button-3 color="primary" lined class="full">초기화</m-button-3>
                </div>

                <div class="divider"/>

                <p class="between">
                  <button class="ico_info_bk font16 txt_dk bold">가격설정</button>
                  <button class="ico_reflesh"></button>
                </p>
                <p class="primary mgb32">
                  최소 5분 동안 매수밴드내에 존재해야 매수가 완료됩니다. 매수고가/저가 설정에 유의하세요.
                </p>
                <ul class="list_type1 configure">
                  <li>
                    <span class="txt01">매수고가(기준가)</span>
                    <span class="txt02">
                      ₩ 210,000
                      <button class="ico_configure"/>
                    </span>
                  </li>
                  <li>
                    <span class="txt01">매수저가</span>
                    <span class="txt02">
                      ₩ 210,000
                      <button class="ico_configure"/>
                    </span>
                  </li>
                </ul>

                <div class="divider"/>

                <p class="between">
                  <button class="ico_info_bk font16 txt_dk bold">시그널 후 변동 예정 항목</button>
                </p>
                <ul class="list_type1 mgt32">
                    <li>
                      <span class="txt01">평가수익률</span>
                      <span class="font16 txt_dk">-2.01%</span>
                    </li>
                    <li>
                      <span class="txt01">투자비중</span>
                      <span class="font16 txt_dk medium">100%</span>
                    </li>
                    <li>
                      <span class="txt01">투자기간</span>
                      <span class="font16 txt_dk medium">100일</span>
                    </li>                
                  </ul>
                  <div class="divider1 xsmall"/>
                  <ul class="list_type1">
                    <li>
                      <span class="txt01">손절가</span>
                      <span class="flex font16 txt_blue1 medium">
                        <span class="font12 txt_gray mgr16">▲ ₩ 2,000</span>₩ 1,000,000</span>
                    </li>
                    <li>
                      <span class="txt01">손절가</span>
                      <span class="flex font16 txt_dk medium">
                        <span class="font12 txt_gray mgr16">▲ ₩ 2,000</span>₩ 1,000,000</span>
                    </li>
                    <li>
                      <span class="txt01">손절가</span>
                      <span class="flex font16 txt_red1 medium">
                        <span class="font12 txt_gray mgr16">▼ ₩ 2,000</span>₩ 1,000,000</span>
                    </li>
                  </ul>

                <div class="divider"/>

                <p class="between">
                  <span class="font16 txt_dk bold">시그널 사유</span>
                  <span>50자 이상 필수</span>
                </p>
                <div class="mga32">
                  <Froala
                      ref="froala"
                      v-model="content"
                      :config="{
                          placeholderText: '시그널 사유에 대한 내용을 기재해주세요',
                          charCounterMax: 10000
                      }"
                  />
                </div>

                <div class="divider"/>

                <div class="btn_wrap l_row">
                  <m-button-3 color="green" size="large" class="full">추가매수 시그널 전송</m-button-3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Froala from 'src/components/external/Froala.vue';
import TagsInput from 'src/components/external/TagsInput.vue';

import { ref } from 'vue';
export default {
  components: { Froala,TagsInput },
  data() {
        return {
          select1: ref("전체"),
          check1:'',
          content: '',
          tag: '',
          tags: [],
          defaultHashTag: ['2차전지', '바이오'],
          options: [
            '전체', '선택1','선택2','선택3'
          ],
          tab1: ref('A'),
          progress: 0.4,
          textarea1: {
            value: "",
            counter: true,
            minHeight: 100,
            showError: false,
          },
          tab1: ref('G'),
          tabs: [
            { label: '일반', value: 'G' },
            { label: '프리미엄', value: 'F' }
          ],
        }
    },
    computed: {
      filteredAutoTagItems() {
          return this.defaultHashTag.map(text => ({ text }));
      }
    },
    methods: {
    }
};
</script>
<style scoped>

</style>

