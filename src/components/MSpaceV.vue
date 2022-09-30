<template>
    <!-- 가로로 꽉 차있는 빈공간의 줄 -->
    <div
        class="m-space-v"
        :style="{ width: `${size}px`, minWidth: `${size}px`, minHeight: '1px', ...$attrs.style }"
    />
</template>

<script>
export default {
    name: 'MSpaceV',
    inheritAttrs: true,
    props: {
        size: {
            type: [String, Number],
            default: function() {
                return 16;
            }
        }
    },
    data() {
        return {
            text: false
        };
    },
    computed: {
    },
    created() {
    },
    mounted() {
    },
    methods: {
    }
};
</script>

<style lang="scss">
.m-space-v {
    display: inline-flex;
    flex-wrap: wrap;
    // height: 100%;
}
</style>
