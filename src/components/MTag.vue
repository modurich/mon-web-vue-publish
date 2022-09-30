<template>
    <div
        :class="`m-tag`"
    >
        <slot />
    </div>
</template>

<script>
export default {
    name: 'MTag',
    data() {
        return {
        };
    },
    props: {
    },
    computed: {
    },
    inheritAttrs: true,
    methods: {
    },
    created() {
    },
    mounted() {
        // console.log('MTag', this, this.$attrs);
    }
};
</script>

<style lang="scss" scoped>
.row > .m-tag {
    margin-left: 6px;
}
.row > .m-tag:first-child {
    margin-left: 0px;
}
div.m-tag {
    min-height: 24px;
    font-weight: bold;
    font-size: 12px;
    line-height: 1.5;
    color: $grey-tabby;
    justify-content: center;
    align-items: center;
    display: flex;
}
</style>
