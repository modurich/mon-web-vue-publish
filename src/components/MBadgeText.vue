<template>
    <div
        :class="{
            'm-badge-text': true,
            lined: lined,
            ...$attrs.class
        }"
        @click.prevent.stop="showing = !showing"
        v-bind="$attrs"
        v-on="$listeners"
    >
        <slot></slot>
        <q-tooltip
            v-model="showing"
            v-if="!_.isEmpty(tooltip)"
            anchor="bottom middle"
            self="top middle"
            content-class="m-badge-tooltip"
        >
            <div class="content">{{tooltip}}</div>
        </q-tooltip>
    </div>
</template>

<script>
export default {
    name: 'MBadgeText',
    data() {
        return {
            showing: false
        };
    },
    props: {
        text: {
            type: String,
            default: function() {
                return '';
            }
        },
        tooltip: {
            type: String,
            default: function() {
                return '';
            }
        },
        lined: {
            type: Boolean,
            default: function() {
                return false;
            }
        }
    },
    computed: {
    },
    inheritAttrs: true,
    methods: {
    },
    created() {
    },
    mounted() {
    },
    beforeDestroy() {
    }
};
</script>

<style lang="scss">
.m-badge-text {
    display: flex;
    align-items: center;
    text-align: center;

    padding: 0px 8px;
    height: 24px;
    background: $grey-tabby;
    box-sizing: border-box;
    border-radius: 2px;

    font-weight: bold;
    font-size: 12px;
    line-height: 150%;
    color: $white;

    &.lined {
        padding: 3px 8px;
        border: 1px solid $grey-tabby;
        background: $white;
        box-sizing: border-box;
        border-radius: 2px;

        font-weight: bold;
        font-size: 12px;
        line-height: 150%;
        color: $grey-tabby;
    }
}

.m-badge-text-tooltip {
    z-index: 1000000000;
    background-color: $medium-grey;
    color: $white;
    font-size: 12px;
    font-weight: bold;
    white-space: pre-wrap;
    word-break: break-all;
    word-wrap: break-word;
    text-align: center;
}
</style>
