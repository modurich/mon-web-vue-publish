<template>
    <span class="m-icon">
        <inline-svg
            v-if="noTransform"
            :src="`svgs/icon/${name}.svg`"
            :height="$props.height"
            :width="$props.width"
            v-bind="$attrs"
            v-on="$listeners"
            @loaded="log"
            @unloaded="log"
            @error="log"
        />
        <inline-svg
            v-if="!noTransform"
            :src="`svgs/icon/${name}.svg`"
            :fill="$props.color"
            :stroke="$props.color"
            :fill-opacity="$props.fillOpacity || $props.opacity"
            :stroke-opacity="$props.strokeOpacity || $props.opacity"
            :transform-source="transform"
            v-bind="$attrs"
            :height="$props.height"
            :width="$props.width"
            v-on="$listeners"
            @loaded="log"
            @unloaded="log"
            @error="log"
        />
    </span>
</template>

<script>
export default {
    name: 'MIcon',
    inheritAttrs: true,
    props: {
        name: {
            type: String,
            default: function() {
                return 'add';
            }
        },
        height: [Number, String],
        width: [Number, String],
        color: {
            type: String,
            default: function() {
                return this.$style.greyTabby;
            }
        },
        fillOpacity: {
            type: [Number, String]
        },
        strokeOpacity: {
            type: [Number, String]
        },
        opacity: {
            type: [Number, String],
            default: function() {
                return 1;
            }
        },
        noTransform: {
            type: Boolean,
            default: function() {
                return false;
            }
        }
    },
    data() {
        return {
        };
    },
    computed: {
    },
    created() {
    },
    mounted() {
        // console.log('m-icon mounted');
        // console.log('micon', this.$props.color);
    },
    methods: {
        transform(svg) {
            if (svg.querySelectorAll('path[fill]')) {
                Array.from(svg.querySelectorAll('path[fill]')).forEach(e => e.removeAttribute('fill'));
            }
            if (svg.querySelectorAll('path[stroke]')) {
                Array.from(svg.querySelectorAll('path[stroke]')).forEach(e => e.removeAttribute('stroke'));
            }
            return svg;
        },
        log: m => {
            // if (m) console.log(m);
        }
    }
};
</script>

<style lang="scss">
.m-icon {
    display: inline-flex;
}
</style>
