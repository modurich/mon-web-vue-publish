<template>
    <q-input
        ref="input"
        :class="`m-input ${!isFocus && $attrs.value !== '' ? 'blur' : ''} border-${borderColor} ${$attrs.class || ''}`"
        style="min-width: 200px;width: 100%;"
        color="deep-purple"
        v-bind="$attrs"
        dense
        :outlined="!_.has($attrs, 'borderless')"
        :hint="$attrs.hint && $attrs.value && !isFocus ? $attrs.hint : undefined"
        :input-style="{ height: '46px', fontSize: '14px', fontWeight: 500, padding: 0, ...$attrs.inputStyle }"
        v-on="$listeners"
        @focus="function(evt){ isFocus = true; }"
        @blur="function(evt){ isFocus = false; }"
    >
        <template v-for="(_, slot) of $scopedSlots" v-slot:[slot]="scope">
            <slot :name="slot" v-bind="scope" />
        </template>
        <template v-if="!$scopedSlots.append && $attrs.value && !$attrs.disable && !$attrs.readonly" v-slot:append>
            <m-icon name="close" class="cursor-pointer" width="24" height="24" :color="$style.greyTabby" @click="$emit('input', '')" />
        </template>
    </q-input>
</template>

<script>
export default {
    name: 'MInput',
    inheritAttrs: true,
    data() {
        return {
            isFocus: false
        };
    },
    computed: {
        color: function() {
            if (this.$attrs.color) return this.$attrs.color;
            return this.$attrs.color || 'orange';
        },
        borderColor: function() {
            if (!!this.$attrs.value && !this.isFocus) return 'green';
            return 'grey';
        }
    },
    created() {
    },
    mounted() {
        // console.log('MInput', this, this.$attrs);
    },
    methods: {
        onClick() {
        },
        validate() {
            this.$refs.input.validate();
        },
        resetValidation() {
            this.$refs.input.resetValidation();
        },
        focus() {
            this.$refs.input.focus();
        }
    }
};
</script>

<style lang="scss">
.m-input {
    input {
        color: $grey-tabby;
    }
    &:not(.q-field--focused) .q-field__label {
        color: $light-grey;
        font-weight: 500;
    }
    &.q-field--dense .q-field__control, .q-field--dense .q-field__marginal {
        height: 46px;
    }
    &.q-textarea--autogrow .q-field__control {
        height: auto;
        min-height: 46px;
    }
    &.q-field--dense.q-field--float .q-field__label {
        transform: translateY(-100%) scale(0.875);
       // background-color: $white;
    }
    &.q-field--dense .q-field__label {
        z-index: 2;
        font-size: 14px;
        right: auto;
        top: 12px;
    }
    &.blur.q-field--dense .q-field__label {
        display: none;
    }
    // x 버튼 노출여부
    .q-field__append.q-field__marginal.row.no-wrap.items-center.q-anchor--skip {
        display: none;
    }
    .q-field__append.q-field__marginal.row.no-wrap.items-center {
        height: 100%;
    }
    &.q-field--outlined.q-field--disabled .q-field__append.q-field__marginal.row.no-wrap.items-center.q-anchor--skip {
        display: none;
    }
    &.q-field--outlined.q-field--readonly .q-field__append.q-field__marginal.row.no-wrap.items-center.q-anchor--skip {
        display: none;
    }
    .q-field__bottom.row.items-start.q-field__bottom--animated, .q-field__bottom.row.items-start.q-field__bottom--stale {
        padding-left: 12px;
        font-size: 12px;
    }
    &.q-field__label.no-pointer-events.absolute.ellipsis{
        color: $grey-tabby;
    }
    &.q-field--outlined .q-field__control {
        padding: 0 12px;
    }
    &.q-field--outlined .q-field__control:before {
        border-color: $ghost-white;
        border-width: 1px;
    }

    &.border-green.q-field--outlined .q-field__bottom {
        color: $clover;
        font-size: 12px;
        line-height: 21px;
    }

    // border color
    &.border-orange.q-field--outlined .q-field__control:before {
        border-color: $orange;
    }
    &.border-green.q-field--outlined .q-field__control:before {
        border-color: $clover;
    }
    &.border-red.q-field--outlined .q-field__control:before {
        border-color: $crayola-flamingo-pink;
        border-width: 1px;
    }
    &.q-field--outlined.q-field--error .q-field__control:after {
        border-color: $crayola-flamingo-pink;
        border-width: 1px;
    }
    &.q-field--outlined.q-field--error .q-field__bottom {
        color: $crayola-flamingo-pink;
        border-width: 1px;
    }
    &.q-field--outlined.q-field--disabled .q-field__control:before {
        z-index: 0;
        border-color: $ghost-white;
        background-color: $guyabano;
    }
    &.q-field--outlined.q-field--readonly .q-field__control:before {
        z-index: 0;
        border-color: $ghost-white;
        background-color: $guyabano;
        border-style: solid;
    }

    // input 아래 텍스트가 나오는 기본 여백이 padding으로 잡히는 부분(영역을 relative 로 잡는경우)
    // .q-field__bottom--animated {
    //     position: relative;
    //     transform: initial;
    // }

    // input 아래 텍스트가 나오는 기본 여백이 padding으로 잡히는 부분(영역을 absolute 로 잡는경우)
    &.q-field--with-bottom {
        padding-bottom: 32px;
    }

    // .phonenumber-input class 아래에 있을때는 숫자입력 화살표가 나오지 않도록
    &.phonenumber-input {
        /* Chrome, Safari, Edge, Opera */
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        /* Firefox */
        input[type=number] {
            -moz-appearance: textfield;
        }
    }

    // 후미에 붙는 suffix
    .q-field__suffix {
        font-weight: 500;
        font-size: 14px;
        color: $grey-tabby;
    }
}
</style>
