<template>
    <Froala
            ref="froala"
            v-model="content"
            :config="{
                placeholderText: '- 타인 글 인용 시 저작자와 출처, 원문링크 필요\n- 카테고리에 미부합, 음란성, 불법성, 허위사실, 명예 훼손, 저작권 침해, 욕설, 의미 없는 문구 반복(도배) 등이 포함된 게시글 금지',
                charCounterMax: 10000
            }"
        />
</template>

<script>
import Froala from 'src/components/external/Froala.vue';

export default {
  components: { Froala },
  name: 'FroalaEditor',
  data() {
    return {
        content: ''
    }
  },
  methods: {
  }
};
</script>