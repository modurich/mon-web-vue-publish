<template>
    <div class="centerarea_box1">
        <div class="con_box">
          <h2 class="line_type">
            포스트 작성
          </h2>
            <div class="box_contents">
              <m-select v-model="select1" :options="options"/>
              

              <p class="mgt32 mgb16 txt_dk font12">
                📍 본문 10자 이상 필수, $종목태그 사용가능
              </p>
              <div>
                <Froala
                    ref="froala"
                    v-model="content"
                    :config="{
                        placeholderText: '종목소개와 같은 내용 불가하며 작성 규정을 준수하여 기재해주세요',
                        charCounterMax: 10000
                    }"
                />
              </div>
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

              <p class="between">
                <m-checkbox size="md" v-model="check1" label="게시물 규정 동의 (필수)"/>
                <a href="#" class="link_view">보기</a>
              </p>
              <p>
                본 게시물은 저작권 및 몬스탁의 게시물 규정을 준수하여 작성하였습니다.
              </p>
              <div class="btn_wrap mga32">
                <m-button-3 color="primary" size="large" lined class="full">취소</m-button-3>
                <m-button-3 color="primary" size="large" class="full">등록</m-button-3>
              </div>

              <div class="divider"/>

              <p>
                <span class="font16 txt_dk bold">포스트 안내</span>
              </p>
              <p class="primary mga32">
                좋아요 10개 달성시 <a href="#" class="underline bold">럭키박스</a>(브론즈~골드) 지급
              </p>
              <div>
                <span class="txt_dk bold">공지</span>
              </div>
              <div class="list_info small">
                <p>관리자만 작성 가능</p>
              </div>
              <div>
                <span class="txt_dk bold">정보 (sMON 보상 지급)</span>
              </div>
              <div class="list_info small">
                <p>뉴스, 투자 관련 정보, 노하우, 칼럼 등 (인용글은 원본 링크 혹은 출처 표기 필수)<br>
                  <span class="flex mgt8 mgb8 bold">지급 기준 (등록 후 72시간 이내)</span>
                  좋아요 20개 → 10 sMON<br>
                  좋아요 50개 → 15 sMON 추가<br>
                  좋아요 100개 → 25 sMON 추가<br>
                </p>
              </div>
              <div>
                <span class="txt_dk bold">유머 (sMON 보상 지급)</span>
              </div>
              <div class="list_info small">
                <p>일반적으로 유머라고 통용될 수 있는 글</p>
              </div>
              <div>
                <span class="txt_dk bold">자유 (일 1회만 활동점수 지급)</span>
              </div>
              <div class="list_info small">
                <p>정보, 유머, 홍보 이 외 모든 글<br>
                  <span class="flex mgt8 mgb8 bold">지급 기준 (등록 후 72시간 이내)</span>
                  좋아요 20개 → 5 sMON<br>
                  좋아요 50개 → 7 sMON 추가<br>
                  좋아요 100개 → 13 sMON 추가<br>
                </p>
              </div>
              <div>
                <span class="txt_dk bold">홍보 (100 sMON)</span>
              </div>
              <div class="list_info small">
                <p>sMON 을 소모하여 소상공인을 비롯한 프리랜서, 기업 소개 등 홍보/광고 글 등록 가능</p>
              </div>
              <div>
                <span class="txt_dk bold">Q&A</span>
              </div>
              <div class="list_info small">
                <p>자유로운 주제로 누구나 질문/답변 가능</p>
              </div>
              <div>
                <span class="txt_dk bold">유의사항</span>
              </div>
              <div class="list_info small">
                <p>정보, 유머 콘텐츠 등록 후 72시간 이내 지급 기준 달성 시에만 sMON을 즉시 지급</p>
                <p>카테고리 미부합, 음란성, 불법성, 허위사실, 명예 훼손, 저작권 침해, 욕설, 의미 없는 문구 반복(도배)는 임의 삭제(sMON 환급 불가)</p>
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

