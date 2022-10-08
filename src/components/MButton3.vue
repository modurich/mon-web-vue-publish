<template>
    <button v-ripple v-bind="$attrs" v-on="$listeners" :class="['m-button3', `size-${size}`, `color-${color}`, { 'lined': lined }, { 'round': round }]" @click="onClick">
        <div class="row align-center justify-center">
            <slot />
        </div>
        <router-link v-if="to || replace" v-show="false" :to="to || replace" />
        <a v-else-if="href" :href="href" target="_blank" rel="noopener noreferrer nofollow" tabindex="-1" />
    </button>
</template>

<script>
export default {
    name: 'MButton3',
    props: {
        filled: Boolean,
        lined: {
            type: Boolean,
            default: function() {
                return false;
            }
        },
        color: {
            type: String,
            default: function() {
                return 'mediumGrey';
            }
        },
        size: {
            type: String,
            default: function() {
                return 'medium';
            }
        },
        round: {
            type: Boolean,
            default: function() {
                return true;
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
        },
        href: {
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
        onClick(e) {
            if (this.to) return this.$router.push(this.to);
            else if (this.replace) return this.$router.replace(this.replace);
            else if (this.href) return window.open(this.href, '_blank', 'noopener noreferrer');
        }
    }
};
</script>

<style lang="scss" scoped>
.m-button3 {
    display: inline-block;
    // cursor: pointer !important;
    max-width: 100%;
    box-sizing: border-box;
    position: relative;
    border-radius: 0;
    border: 1px solid transparent;
    // outline: none;
    &.full{width:100% !important}
    &:disabled {
        opacity: 0.2 !important;
    }

    &.round {
        border-radius: 2px;
    }
    &.size-medium {
        height: 46px;
        min-height: 46px;
        width: 120px;
        font-size: 14px;
        font-weight: 500;
        line-height: 21px;
    }
    &.size-large {
        height: 56px;
        min-height: 56px;
        width: 120px;
        font-size: 20px;
        font-weight: 500;
        line-height: 21px;
    }

    &.lined {
        font-weight: 500;
    }

    &.color-mediumGrey {
        background-color: $medium-grey;
        color: $white;
        &:disabled {
            // background-color: $ghost-white;
            color: $white;
        }
        &.lined {
            background-color: $white;
            color: $medium-grey;
            border: 0.5px solid $medium-grey;
            &:disabled {
                // color: $ghost-white;
                border: 1px solid $medium-grey;
            }
        }
    }
    &.color-yellow{
        background-color: #fee500;
        color: #141414;
        &:disabled {
            // background-color: $ghost-white;
            color: $white;
        }
        &.lined {
            background-color: $white;
            color: $medium-grey;
            border: 0.5px solid $medium-grey;
            &:disabled {
                // color: $ghost-white;
                border: 1px solid $medium-grey;
            }
        }
    }
    &.color-lightGrey {
        background-color: #f8f9fd;
        color:#141414;
        border:1px solid #d4d9ea;
        &:disabled {
            // background-color: $ghost-white;
            //color: $white;
        }
        &.lined {
            background-color: #ffffff;
            color: #9CA8BA;
            border: 1px solid #9ca8ba;
            &:disabled {
                // color: $ghost-white;
                border: 1px solid $medium-grey;
            }
        }
    }

    &.color-orange {
        background-color: $orange;
        color: $white;
        &:disabled {
            // background-color: $orange-20;
            color: $white;
        }
        &.lined {
            background-color: $white;
            color: $orange;
            border: 0.5px solid $orange;
            &:disabled {
                // color: $orange-20;
                border: 1px solid $orange;
            }
        }
    }

    &.color-crayolaFlamingoPink {
        background-color: $crayola-flamingo-pink;
        color: $white;
        &:disabled {
            // background-color: $crayola-flamingo-pink-20;
            color: $white;
        }
        &.lined {
            background-color: $white;
            color: $crayola-flamingo-pink;
            border: 0.5px solid $crayola-flamingo-pink;
            &:disabled {
                // color: $crayola-flamingo-pink-20;
                border: 1px solid $crayola-flamingo-pink;
            }
        }
    }

    &.color-slateBlue {
        background-color: $slate-blue;
        color: $white;
        &:disabled {
            // background-color: $slate-blue-20;
            color: $white;
        }
        &.lined {
            background-color: $white;
            color: $slate-blue;
            border: 0.5px solid $slate-blue;
            &:disabled {
                // color: $slate-blue-20;
                border: 1px solid $slate-blue;
            }
        }
    }

    &.color-primary {
        background-color: $slate-blue;
        color: $white;
        &:disabled {
            // background-color: $slate-blue-20;
            color: $white;
        }
        &.lined {
            background-color: $white;
            color: $slate-blue;
            border: 0.5px solid $slate-blue;
            &:disabled {
                // color: $slate-blue-20;
                border: 1px solid $slate-blue;
            }
        }
    }

    &.color-vividRaseberry {
        background-color: $vivid-raseberry;
        color: $white;
        &:disabled {
            // background-color: $vivid-raseberry-20;
            color: $white;
        }
        &.lined {
            background-color: $white;
            color: $vivid-raseberry;
            border: 0.5px solid $vivid-raseberry;
            &:disabled {
                // color: $vivid-raseberry-20;
                border: 1px solid $vivid-raseberry;
            }
        }
    }

    &.color-duronResonantBlue {
        background-color: $duron-resonant-blue;
        color: $white;
        &:disabled {
            // background-color: $duron-resonant-blue-20;
            color: $white;
        }
        &.lined {
            background-color: $white;
            color: $duron-resonant-blue;
            border: 0.5px solid $duron-resonant-blue;
            &:disabled {
                // color: $duron-resonant-blue-20;
                border: 1px solid $duron-resonant-blue;
            }
        }
    }
}
</style>
