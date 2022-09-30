<template>
    <!-- 가로로 꽉 차있는 빈공간의 줄 -->
    <div
        class="m-space-h"
        :style="{ height: `${size}px`, minHeight: `${size}px`, minWidth: '1px', ...$attrs.style }"
    />
</template>

<script>
export default {
    name: 'MSpaceH',
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
.m-space-h {
    display: flex;
    flex-wrap: wrap;
}
</style>
