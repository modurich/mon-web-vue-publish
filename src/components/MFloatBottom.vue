<template>
    <div class="m-float-bottom gpu-layer" style="position: fixed; bottom: 0px;width: 100%;left: 0px;">
        <div class="row align-center justify-center" :style="{ maxWidth: '692px', width: '100%', margin: '0 auto' }">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import _ from 'lodash';

export default {
    name: 'MFloatBottom',
    props: {
    },
    data() {
        return {
            input: this.value,
            showInput: false
        };
    },
    created() {
    },
    mounted() {
    },
    methods: {
    }
};
</script>

<style lang="scss" scoped>
.m-float-bottom {
}
</style>
