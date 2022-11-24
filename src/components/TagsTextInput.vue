<template>
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
</template>

<script>
import TagsInput from 'src/components/external/TagsInput.vue';

export default {
  components: { TagsInput },
  name: 'TagsTextInput',
  data() {
    return {
        tag: '',
        tags: [],
        defaultHashTag: ['2차전지', '바이오']
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