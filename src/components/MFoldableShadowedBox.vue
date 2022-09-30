<!-- 접었다폈다 할 수 있는 박스 -->
<template>
    <div class="m-foldable-shadowed-box shadowed-box">
        <div class="row align-center" :style="{ padding: '16px' }">
            <slot v-if="$scopedSlots.title" name="title"></slot>
            <q-space />
            <m-icon class="cursor-pointer" v-if="isOpen" name="chevron_up" stroke-opacity="0" @click="toggle" />
            <m-icon class="cursor-pointer" v-else name="chevron_down" stroke-opacity="0" @click="toggle" />
        </div>
        <div v-if="isOpen">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import _ from 'lodash';

export default {
    name: 'MFoldableShadowedBox',
    props: {
        isOpenStart: {
            type: Boolean,
            default: function() {
                return true;
            }
        }
    },
    data() {
        return {
            isOpen: this.isOpenStart
        };
    },
    created() {
    },
    mounted() {
    },
    methods: {
        toggle() {
            this.isOpen = !this.isOpen;
        }
    }
};
</script>

<style lang="scss" scoped>
.m-foldable-shadowed-box {
}
</style>
