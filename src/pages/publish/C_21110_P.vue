<template>
    <div class="centerarea_box1">
        <div class="con_box">
          <h2 class="line_type">
            인사이트 작성
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

              <h3 class="between mgt32 mgb26">
                <span class="font16">투자기간</span>
                <span class="font16 primary">5 거래일</span>
              </h3>
              <div class="btn_wrap small">
                <m-button-3 color="primary" class="full">단기</m-button-3>
                <m-button-3 color="primary" lined class="full">중기</m-button-3>
                <m-button-3 color="primary" lined class="full">장기</m-button-3>
              </div>
              <ul class="list_type1 configure mga32">
                <li>
                  <span class="txt01">기준가</span>
                  <span class="txt02">
                    ₩ 210,000
                  </span>
                </li>
                <li>
                  <span class="txt01">목표가</span>
                  <span class="txt02">
                    <span class="tag_blue small">+1.24%</span>
                    <span class="txt_blue1">₩ 210,000</span>
                  </span>
                </li>
                <li>
                  <span class="txt01">실패가</span>
                  <span class="txt02">
                    <span class="tag_red small">-0.81%</span>
                    <span class="txt_red1">₩ 210,000</span>
                  </span>
                </li>
              </ul>

              <div class="divider"/>

              <p class="between">
                <span class="font16 txt_dk bold">제목</span>
                <span>2~40자 필수</span>
              </p>
              <div class="mga32">
                <m-input filled v-model="text1" class="round_type" placeholder="종목을 유추 할 수 없도록 작성해주세요"/>
              </div>

              <div class="divider"/>

              <p class="between">
                <button class="font16 txt_dk bold">본문</button>
                <span>200자 이상 필수, $종목태그</span>
              </p>
              <div class="mga32">
                <Froala
                    ref="froala"
                    v-model="content"
                    :config="{
                        placeholderText: '종목소개와 같은 내용 불가하며 작성 규정을 준수하여 기재해주세요',
                        charCounterMax: 10000
                    }"
                />
              </div>

              <div class="divider"/>

              <p class="between">
                <span class="font16 txt_dk bold">태그</span>
              </p>
              <!-- <p class="primary">
                태그는 종목명을 유추할 수 없는 키워드만 사용해주세요.
              </p> -->
              <div class="mga32">
                <TagsInput
                    v-model="tag"
                    :tags="tags"
                    @tags-changed="newTags => tags = newTags"
                    :autocomplete-items="filteredAutoTagItems"
                    :placeholder="'#태그(선택)'"
                    :autocomplete-min-length="0"
                    :maxlength="20"
                    :max-tags="50"
                />
              </div>

              <div class="divider"/>

              <p class="between">
                <m-checkbox size="md" v-model="check1" label="게시물 규정 동의 (필수)"/>
                <a href="#" class="link_view">보기</a>
              </p>
              <p>
                본 게시물은 저작권 및 몬스탁의 게시물 규정을 준수하여 작성하였습니다.
              </p>
              <p class="txt_red1">
                등록 후 수정 및 삭제 불가한 블록체인으로 저장됩니다.
              </p>

              <div class="divider"/>

              <div class="btn_wrap l_row">
                <m-button-3 color="primary" size="large" lined class="full">임시저장</m-button-3>
                <m-button-3 color="primary" size="large" class="full">등록</m-button-3>
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

