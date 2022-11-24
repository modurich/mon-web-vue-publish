<template>
  <div class="centerarea_box1">
      <div class="con_box">
        <h2 class="line_type between">
          <span>토론글 작성</span>
        </h2>
        <div class="box_contents"> 
          <div class="between mgb32">
            <span class="img_area_wrap">
              <img src="~assets/prd_logo.png" alt="profile" />
              <span class="txt01">삼성전자</span>
            </span>
            <span class="font18 txt_blue1">
              ₩ 2,403,000
            </span>
          </div>
          <p class="txt_dk font12">📍 본문 10자 이상 필수, $종목태그 사용가능</p>
          <div class="mgb32">
            <Froala
              ref="froala"
              v-model="content"
              :config="{
                  placeholderText: '- 다른 사람의 글을 인용할 때는 저작자와 출처, 원문링크를 반드시 포함해주세요.\n- 음란성, 불법성, 허위사실, 욕설 등 정책에 위반되는 글은 금지합니다.',
                  charCounterMax: 10000
              }"
            />
          </div>
          <div class="mgb32">
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
          <p class="txt_dk font12 between">
            <m-checkbox size="md" v-model="check2" label="게시물 규정 동의 (필수)"/>
            <button class="btn_view">보기</button>
          </p>
          <p class="font12">본 게시물은 저작권 및 몬스탁의 게시물 규정을 준수하여 작성하였습니다.</p>
          <div class="btn_wrap mgt32">
            <m-button-3 size="large" color="gray" class="full">취소</m-button-3>
              <m-button-3 size="large" color="primary" class="full">등록</m-button-3>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import TagsInput from 'src/components/external/TagsInput.vue';
import Froala from 'src/components/external/Froala.vue';
export default {
    components: { Froala,TagsInput },
    name: 'Laside',
    data() {
        return {
          tag: '',
          tags: [],
          defaultHashTag: ['2차전지', '바이오'],
          content: '',
          check1:ref(true),
          check2:ref(true),
          check3:ref(true),
          check4:ref(true),
          check5:ref(true),
          slide: ref('1'),
          toggle1: ref(false),
        }
    },
    computed: {
    filteredAutoTagItems() {
        return this.defaultHashTag.map(text => ({ text }));
    }
  },
   
};
</script>
<style scoped>

</style>
