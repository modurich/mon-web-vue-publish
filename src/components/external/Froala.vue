<i18n>
{
  "ko": {
    "template": {
      "label1": "결과 없음"
    }
  },
  "en": {
    "template": {
      "label1": "No result"
    }
  }
}
</i18n>
<template>
    <q-no-ssr>
        <FroalaWrapper
            v-if="config"
            v-bind="$attrs"
            v-on="$listeners"
            :config="{
                ...config,
                ...$attrs.config
            }"
        />
    </q-no-ssr>
</template>

<script>
import FroalaMixin from 'mixins/FroalaMixin';

export default {
    name: 'ExternalFroala',
    components: {
        FroalaWrapper: () => import('components/external/FroalaWrapper.vue')
    },
    mixins: [
        FroalaMixin
    ],
    props: {
        onChangedImageList: {
            type: Function,
            default: innerImgList => {}
        }
    },
    data() {
        return {
        };
    },
    computed: {
    },
    inheritAttrs: false,
    methods: {
    },
    created() {
    },
    mounted() {
    }
};
</script>
<style lang="scss">
</style>
