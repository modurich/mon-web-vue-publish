<template>
    <div
        v-bind="$attrs"
        :class="`m-linear-progress gpu-layer ${filled ? 'filled' : ''} ${$attrs.class || ''}`"
        :style="{
            height,
            minHeight: height
        }"
        v-on="$listeners"
    >
        <div class="track" :style="{ backgroundColor: trackColor }">
            <div class="processing" :style="{ transform: `scale3d(${Math.min(value, 1)}, 1, 1)`, backgroundColor: color }" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'MLinearProgress',
    props: {
        value: {
            type: [String, Number],
            default: function() {
                return 1;
            }
        },
        filled: {
            type: Boolean,
            default: function() {
                return false;
            }
        },
        color: {
            type: String,
            default: function() {
                return '';
            }
        },
        trackColor: {
            type: String,
            default: function() {
                return '';
            }
        },
        height: {
            type: String,
            default: function() {
                return '';
            }
        }
    },
    data() {
        return {
        };
    },
    created() {
    },
    mounted() {
        // console.log(this.$attrs);
    },
    methods: {
        onClick() {
        }
    }
};
</script>

<style lang="scss" scoped>
.m-linear-progress {
    display: flex;
    position: relative;
    // min-height: 12px;
    height: 100%;
    min-width: 77px;
    width: 100%;
    background-color: transparent;
    align-items: center;
    vertical-align: middle;

    .track {
        // position: absolute;
        // height: 12px;
        height: 100%;
        width: 100%;
        transform: scale3d(1, 1, 1);
        background-color: $guyabano;
    }

    .processing {
        // position: absolute;
        left: 0px;
        right: 0px;
        // height: 12px;
        height: 100%;
        margin: 0;
        padding: 0;
        background-color: $grey-tabby;
        transition: transform .3s;
        transform-origin: 0 0;
    }

    &.filled .track, &.filled .processing {
        height: 100% !important;
    }
}
</style>
