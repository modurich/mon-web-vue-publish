<template>
    <div class="m-input-style-button">
        <button v-bind="$attrs" v-on="$listeners" @click="onClick">
            <div class="row align-center">
                <div :class="['f-14-500-lg', 'text-left', 'flex-1', { 'ellipsis': ellipsis }]" :style="{ margin: '12px 64px 11px 16px' }">
                    <slot />
                </div>
                <div v-if="$scopedSlots.icon" :style="{ position: 'absolute', right: '18px', top: '10px' }">
                    <slot name="icon"></slot>
                </div>
                <m-icon v-else-if="iconName" :name="iconName" stroke-opacity="0" width="24" height="24" :color="$style.lightGrey" :style="{ position: 'absolute', right: '18px', top: '10px' }" />
            </div>
            <router-link v-if="to || replace" v-show="false" :to="to || replace" />
        </button>
    </div>
</template>

<script>
export default {
    name: 'MInputStyleButton',
    props: {
        iconName: {
            type: String
        },
        ellipsis: {
            type: Boolean,
            default: function() {
                return false;
            }
        },
        to: {
            type: [String, Object],
            default: function() {
                return '';
            }
        },
        replace: {
            type: [String, Object],
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
    },
    methods: {
        onClick(e) {
            if (this.to) return this.$router.push(this.to);
            else if (this.replace) return this.$router.replace(this.replace);
        }
    }
};
</script>

<style lang="scss" scoped>
.m-input-style-button {
    display: block;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    border-radius: 2px;
    border: 1px solid $ghost-white;

    & > button {
        width: 100%;
    }
}
</style>
