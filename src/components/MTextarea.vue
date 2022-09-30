<i18n>
{
  "ko": {
    "textareaCounter": "{curr}/{maxlength}자"
  },
  "en": {
    "textareaCounter": "{curr}/{maxlength} letters"
  }
}
</i18n>
<template>
    <div :class="['m-textarea', { 'show-error': !!showError }]">
        <div class="m-textarea-border-wrapper">
            <textarea-autosize
                :value="value"
                @input="updateValue"
                :min-height="minHeight"
                v-bind="$attrs"
            />
            <div class="m-counter" v-if="counter">{{$t('textareaCounter', { curr: value.length, maxlength: $attrs.maxlength })}}</div>
            <div :style="{ clear: 'both' }"></div>
        </div>
        <div class="bottom-text" v-if="bottomMessage !== undefined">{{bottomMessage}}</div>
    </div>
</template>

<script>
export default {
    name: 'MTextarea',
    props: {
        value: String,
        counter: Boolean,
        minHeight: Number,
        showError: Boolean,
        bottomMessage: String
    },
    data() {
        return {
        };
    },
    computed: {
    },
    inheritAttrs: true,
    methods: {
        updateValue(value) {
            this.$emit('input', value);
        }
    },
    created() {
    },
    mounted() {
    }
};
</script>

<style lang="scss" scoped>
.m-textarea {
    .m-textarea-border-wrapper {
        // position: relative;
        border: 1px solid $ghost-white;
        padding: 16px;
        box-sizing: border-box;
        border-radius: 2px;

        textarea {
            width: 100%;
            height: 100%;
            resize: none;
            outline: none;
            border: none;
            // padding: 16px 16px 34px;
            color: $grey-tabby;

            &::placeholder {
                color: $light-grey !important;
            }
        }

        .m-counter {
            // display: inline-block;
            // position: absolute;
            // right: 16px;
            // bottom: 16px;
            float: right;
            font-size: 12px;
            color: $light-grey !important;
        }
    }
    .bottom-text {
        font-size: 12px;
        font-weight: 500;
        margin-top: 8px;
        height: 18px;
    }
    &.show-error {
        .m-textarea-border-wrapper {
            border: 1px solid $crayola-flamingo-pink;
        }
        .bottom-text {
            color: $crayola-flamingo-pink;
        }
    }
}
</style>
