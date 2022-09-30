<template>
    <div>
        <div :style="{ width: `${ buttonWidth }px`, height: `${ buttonHeight }px` }" @click="login">
            <div :style="{ width: `${ buttonWidth }px`, height: `${ buttonHeight }px`, position: 'absolute', 'z-index': 100, background: 'red', opacity: 0, cursor: 'pointer' }"></div>
            <slot name="button" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'SnsRedirectButton',
    props: {
        buttonWidth: {
            type: Number,
            required: true
        },
        buttonHeight: {
            type: Number,
            required: true
        }
    },
    methods: {
        login() {
            this.$emit('click');
        }
    }
};
</script>
