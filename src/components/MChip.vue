<template>
    <div class="m-chip">
        <button
            v-if="!IS_SSR"
            v-ripple
            v-bind="$attrs"
            :class="`m-chip-inner ${$slots.default ? 'with-default' : ''} ${filled ? 'filled' : ''}  ${lined ? 'lined' : ''}`"
            v-on="$listeners"
            @click="onClick"
        >
            <div class="row align-center no-wrap" :class="`${$slots.icon ? 'with-icon' : ''}`">
                <slot name="icon" />
                <m-space-v size="4" v-if="$slots.icon" />
                <div v-if="$scopedSlots.default" class="ellipsis">
                    <slot />
                </div>
            </div>
        </button>
        <router-link v-else :to="to || replace" :replace="!!replace" :class="`m-chip-inner ${$slots.default ? 'with-default' : ''} ${filled ? 'filled' : ''}  ${lined ? 'lined' : ''}`">
            <slot />
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'MChip',
    props: {
        filled: Boolean,
        lined: Boolean,
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
        // console.log(this.$attrs);
    },
    methods: {
        onClick(e) {
            if (this.to) return this.$router.push(this.to).catch(() => this.$store.dispatch('common/reload'));
            else if (this.replace) return this.$router.replace(this.replace).catch(() => this.$store.dispatch('common/reload'));
        }
    }
};
</script>

<style lang="scss">
.m-chip {
    .m-chip-inner {
        display: inline-block;
        cursor: pointer !important;
        color: $white;
        background-color: $medium-grey;
        padding: 0px 16px;
        line-height: 30px;
        text-align: center;
        // width: 100%;
        // height: 32px;
        font-weight: bold;
        font-size: 14px;
        // line-height: 40px;
        justify-content: center;
        align-items: center;
        border-radius: 16px;
        border: 1px solid $medium-grey;
        // box-shadow: 0px 0px 16px rgba(236, 236, 237, 0.8);
        position: relative;

        & div {
            align-items: center;
            justify-content: center;
            text-align: center;
            // line-height: 38px;
        }
        &.with-icon {
            width: 40px;
            height: 40px;
            justify-content: center;
        }
        & .with-icon {
            justify-content: space-between;
        }

        & img {
            width: 24px;
            height: 24px;
            margin-top: auto;
            margin-bottom: auto;
        }

        & svg {
            pointer-events: none;
            width: 24px;
            height: 24px;
            margin-top: auto;
            margin-bottom: auto;
        }

        &.filled {
        }

        &.lined {
            border: 1px solid $ghost-white;
            // box-shadow: 0px 0px 16px rgba(236, 236, 237, 0.8);
            background-color: $white;
            color: $grey-tabby;
            font-weight: 500;
        }
        &:disabled {
            border: 1px solid $ghost-white;
            background-color: $ghost-white;
            color: $white;
            cursor: not-allowed !important
        }

        &.lined img {
            filter: invert(100%);
        }

        &.lined svg {
            pointer-events: none;
        }

        &:focus:not(.lined) {
            border-color: $grey-tabby;
        }
    }
}
</style>
