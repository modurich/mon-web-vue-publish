<template>
    <div class="centerarea_box1">
        <div class="con_box">
          <h2 class="line_type">
            매도 시그널 작성
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

                <ul class="list_type1 configure">
                  <li>
                    <span class="txt01">매도가 (현재가고정)</span>
                    <span class="txt02">
                      ₩ 201,000
                    </span>
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
                  <m-button-3 color="red" size="large" class="full">매도 시그널 전송</m-button-3>
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

