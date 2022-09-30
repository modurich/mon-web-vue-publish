<template>
    <q-dialog
        ref="dialog"
        :content-class="`m-full-confirm ${$attrs.class || ''}`"
        v-bind="$attrs"
        square
        v-on="$listeners"
    >
        <div class="dialog-content">
            <!-- 제목부분 -->
            <div class="row align-center no-wrap" style="width: 100%;min-height: 56px;">
                <m-space-v size="12" />
                <span class="f-16-b-mg ellipsis">{{title}}</span>
                <q-space />
                <m-icon name="close_big" class="cursor-pointer" @click="cancelClick" />
                <m-space-v size="12" />
            </div>
            <m-space-h size="1" :style="{ backgroundColor: $style.ghostWhite }" />
            <div :class="{ 'middle-scroll': middleScroll }">
                <div v-if="content" class="f-16-500-gt">
                    {{ content }}
                </div>
                <component ref="children" :is="children" v-if="children" />
            </div>
            <div style="flex: 2;"></div>
            <m-space-h size="1" :style="{ backgroundColor: $style.ghostWhite }" />
            <div style="width: 100%;height:56px;max-height: 56px;">
                <div class="row flex-1" style="height: 100%;">
                    <div class="flex flex-1 justify-center align-center f-16-b-mg cursor-pointer left-btn" :style="leftButtonStyle" @click="onLeftClick">{{leftButtonLabel}}</div>
                    <div class="flex flex-1 justify-center align-center f-16-b-wt cursor-pointer right-btn" :style="rightButtonStyle" @click="onRightClick">{{rightButtonLabel}}</div>
                </div>
            </div>
        </div>
    </q-dialog>
</template>

<script>
import _ from 'lodash';
import { Cookies } from 'quasar';

export default {
    name: 'MFullConfirm',
    inheritAttrs: true,
    props: {
        title: String,
        middleScroll: {
            type: Boolean,
            default: function() {
                return false;
            }
        },
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
        leftButtonStyle: {
            type: Object
        },
        rightButtonStyle: {
            type: Object
        },
        onCancelClick: {
            type: Function,
            default: function() {
                return () => {};
            }
        },
        noCloseLeftClick: {
            type: Boolean,
            default: function() {
                return false;
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
        childrenComponent() {
            try {
                return this.$refs.children.$children[0];
            } catch (err) {
                console.error(err);
            }
            return undefined;
        }
    },
    created() {
    },
    mounted() {
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
        onLeftClick() {
            this.onLeftButtonClick({ children: this.childrenComponent });
            if (!this.noCloseLeftClick) {
                this.$emit('hide');
            }
        },
        onRightClick() {
            const rt = this.onRightButtonClick({ children: this.childrenComponent });
            if (rt !== false) {
                this.$emit('hide');
            }
        }
    }
};
</script>

<style lang="scss">
.m-full-confirm {
    .dialog-content {
        margin: 0;
        width: 692px;
        max-width: 692px;
        min-height: 100%;
        height: 100% !important;
        max-height: 100% !important;
        display: flex;
        // overflow: hidden;
        flex-flow: column;

        .left-btn {
            height: 100%;
            background-color: $white;
        }
        .right-btn {
            height: 100%;
            background-color: $medium-grey;
        }

        .middle-scroll {
            // overflow-x: auto;
            -ms-overflow-x: hidden;
            overflow-y: auto;
        }
    }
}
</style>
