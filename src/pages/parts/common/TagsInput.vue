<!--
태그 입력 컴포넌트
https://www.npmjs.com/package/@johmun/vue-tags-input
<TagsInput
    v-model="tag"
    :tags="tags"
    @tags-changed="newTags => tags = newTags"
/>
-->
<i18n>
{
  "ko": {
    "methods": {
      "notify1": "더이상 태그를 추가할 수 없습니다",
      "notify2": "태그할 수 없는 표현입니다"
    }
  },
  "en": {
    "methods": {
      "notify1": "Cannot add any more tags",
      "notify2": "This expression cannot be tagged"
    }
  }
}
</i18n>
<template>
    <q-no-ssr>
        <div class="tags-input">
            <VueTagsInput
                :value="value"
                :max-tags-reached="maxTagsReached"
                @before-adding-tag="validationCheck"
                v-on="$listeners"
                v-bind="$attrs"
            />
        </div>
    </q-no-ssr>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
export default {
    name: 'TagsInput',
    inheritAttrs: true,
    components: {
        VueTagsInput: () => import('@johmun/vue-tags-input')
    },
    data() {
        return {
        };
    },
    props: {
        value: String
    },
    computed: {
        ...mapState({
            banWord: state => state.common.config.banWord
        })
    },
    created() {
    },
    mounted() {
    },
    methods: {
        maxTagsReached() {
            this.$q.notify(this.$t('methods.notify1'));
        },
        validationCheck({ addTag, tag }) {
            const banWords = this.banWord;
            for (const word of banWords) {
                if (tag.text.indexOf(word) !== -1) {
                    this.$q.notify(this.$t('methods.notify2'));
                    return false;
                }
            }
            tag.text = tag.text.replace(/^#*/, '');
            addTag();
        }
    }
};
</script>

<style lang="scss">
@mixin placeholder {
  ::-webkit-input-placeholder { @content }
  :-moz-placeholder           { @content }
  ::-moz-placeholder          { @content }
  :-ms-input-placeholder      { @content }
}
.tags-input {
    .vue-tags-input {
        max-width: none !important;
        width: 100%;

        .ti-tag {
            padding:0;
            height: 16px;
            margin-top: 8px;
            margin-bottom: 8px;
            position: relative;
            background: transparent;
            color: $grey-tabby;
            font-size: 14px;
            font-weight: bold;

            .ti-actions {
                color: $light-grey;
            }

            .ti-tag-center::before {
                content: '#'
            }
        }
        .ti-new-tag-input-wrapper {
            padding:0;
            height: 28px;
        }
        .ti-input {
            padding: 4px 14px;
            border: 1px solid $ghost-white;
            box-sizing: border-box;
            border-radius: 2px;

            input {
                font-size: 14px;
                font-weight: 500;
                color: $grey-tabby;
            }

            @include placeholder {
                font-size: 14px;
                font-weight: 500;
                color: $light-grey !important;
            }
        }
        .ti-autocomplete {
            padding: 16px;
            ul {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                .ti-item {
                    color: $light-grey;
                    font-size: 14px;
                    font-weight: 500;
                    &.ti-selected-item {
                        background: transparent;
                        color: $grey-tabby;
                    }

                    & > div {
                        padding: 2px 16px 2px 0px;
                    }
                }
            }
        }
    }
}
</style>
