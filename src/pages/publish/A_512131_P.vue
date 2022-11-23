<template>
  <div class="centerarea_box1">
      <div class="con_box">
        <h2 class="line_type between">
          <span>토론글 작성</span>
        </h2>
        <div class="box_contents"> 
          <p class="txt_dk font12">📍 본문 10자 이상 필수, $종목태그 사용가능</p>
          <div class="mgb32">
            <Froala
              ref="froala"
              v-model="content"
              :config="{
                  placeholderText: '- 타인 글 인용 시 저작자와 출처, 원문링크 필요\n- 카테고리에 미부합, 음란성, 불법성, 허위사실, 명예 훼손, 저작권 침해, 욕설, 의미 없는 문구 반복(도배) 등이 포함된 게시글 금지',
                  charCounterMax: 10000
              }"
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
import Froala from 'src/components/external/Froala.vue';
export default {
    components: { Froala },
    name: 'Laside',
    data() {
        return {
          content: '',
          check1:ref(true),
          check2:ref(true),
          check3:ref(true),
          check4:ref(true),
          check5:ref(true),
          slide: ref('1'),
          toggle1: ref(false),
        }
    }
   
};
</script>
<style scoped>

</style>
