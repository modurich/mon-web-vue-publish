<template>
    <q-dialog
        ref="dialog"
        :content-class="`m-confirm ${$attrs.class || ''}`"
        v-bind="$attrs"
        square
        v-on="$listeners"
    >
        <div class="dialog-content">
            <div class="row top-area items-center">
                <div>{{ $props.title }}</div>
                <q-space />
                <button @click="cancelClick" aria-label="close"><m-icon class="q-pr-4" name="close_big" width="28" height="28" /></button>
            </div>
            <div class="row mid-area">
                <div style="white-space: pre-wrap;" v-if="$props.content">{{ $props.content }}</div>
                <component :is="$props.children" v-if="$props.children" />
            </div>
            <div class="row bottom-area">
                <m-button3
                    :lined="leftButtonType === 'lined'"
                    :style="leftButtonStyle"
                    @click="leftButtonClick"
                    v-bind="objLeftButtonProps"
                >
                    {{ leftButtonLabel }}
                </m-button3>
                <m-button3
                    :lined="rightButtonType === 'lined'"
                    :style="rightButtonStyle"
                    @click="rightButtonClick"
                    v-bind="objRightButtonProps"
                >
                    {{ rightButtonLabel }}
                </m-button3>
            </div>
        </div>
    </q-dialog>
</template>

<script>
import _ from 'lodash';
export default {
    name: 'MConfirm',
    inheritAttrs: true,
    props: {
        title: String,
        leftButtonLabel: {
            type: String,
            default: function() {
                return '취소';
            }
        },
        rightButtonLabel: {
            type: String,
            default: function() {
                return '확인';
            }
        },
        leftButtonType: {
            type: String,
            default: function() {
                return 'lined';
            }
        },
        rightButtonType: {
            type: String,
            default: function() {
                return 'filled';
            }
        },
        leftButtonStyle: {
            type: Object
        },
        leftButtonProps: {
            type: [Object, Function],
            default: function() {
                return {};
            }
        },
        rightButtonStyle: {
            type: Object
        },
        rightButtonProps: {
            type: [Object, Function],
            default: function() {
                return {};
            }
        },
        onCancelClick: {
            type: Function,
            default: function() {
                return () => {};
            }
        },
        onLeftButtonClick: {
            type: Function,
            default: function() {
                return () => {};
            }
        },
        onRightButtonClick: {
            type: Function,
            default: function() {
                return () => {};
            }
        },
        content: {
            type: String,
            default: function() {
                return '';
            }
        },
        children: undefined
        // https://quasar.dev/vue-components/dialog#QDialog-API
    },
    data() {
        return {
        };
    },
    computed: {
        objLeftButtonProps() {
            if (_.isPlainObject(this.leftButtonProps)) return this.leftButtonProps;
            else return this.leftButtonProps();
        },
        objRightButtonProps() {
            try {
                if (_.isPlainObject(this.rightButtonProps)) return this.rightButtonProps;
                else return this.rightButtonProps();
            } catch (err) {}
            return {};
        }
    },
    created() {
    },
    mounted() {
        console.log('objRightButtonProps', this.objRightButtonProps);
        // console.log('MConfirm', this, this.$props, this.$attrs, this.$refs);
    },
    methods: {
        show() {
            this.$refs.dialog.show();
        },
        hide() {
            this.$refs.dialog.hide();
        },
        cancelClick() {
            console.log('cancelClick');
            this.onCancelClick();
            this.hide();
        },
        rightButtonClick() {
            // console.log('rightButtonClick');
            this.onRightButtonClick();
            this.hide();
        },
        leftButtonClick() {
            // console.log('leftButtonClick');
            this.onLeftButtonClick();
            this.$emit('hide');
        }
    }
};
</script>

<style lang="scss">
.m-confirm {
    .dialog-content {
        padding: 24px;
        width: 308px;
        background: $white;
        word-break: break-all;
        .top-area {
            font-size: 16px;
            line-height: 28px;
            font-weight: 900;
            color: $medium-grey;
            margin-bottom: 40px;
        }
        .mid-area {
            font-weight: 500;
            font-size: 16px;
        }
        .bottom-area {
            justify-content: space-between;
            margin-top: 40px;
            margin-bottom: 16px;
        }
    }
}
</style>
