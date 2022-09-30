<template>
    <q-dialog
        ref="dialog"
        :content-class="`m-full-alert ${$attrs.class || ''}`"
        v-bind="$attrs"
        square
        v-on="$listeners"
    >
        <div class="dialog-content">
            <!-- 제목부분 -->
            <div class="row align-center no-wrap" style="width: 100%;min-height: 56px;">
                <m-space-v size="12" />
                <span class="f-16-b-mg ellipsis" v-if="_.isString(title)">{{title}}</span>
                <span class="f-16-b-mg ellipsis" v-else>
                    <component :is="title" />
                </span>
                <q-space />
                <m-icon name="close_big" class="cursor-pointer" @click="onCancelClick" />
                <m-space-v size="12" />
            </div>
            <m-space-h size="1" :style="{ backgroundColor: $style.ghostWhite }" />
            <div :style="{ overflow: middleScroll ? 'auto' : 'initial' }">
                <div v-if="content" class="f-16-500-gt">
                    {{ content }}
                </div>
                <component ref="children" :is="children" v-if="children" />
            </div>
            <div style="flex: 2;"></div>
            <m-space-h size="1" :style="{ backgroundColor: $style.ghostWhite }" />
            <div style="width: 100%;height:56px;min-height: 56px;max-height: 56px;">
                <div class="row flex-1" style="height: 100%;">
                    <m-button3 size="large" class="flex-1" @click="onOKClick">{{buttonLabel}}</m-button3>
                </div>
            </div>
        </div>
    </q-dialog>
</template>

<script>
import _ from 'lodash';

export default {
    name: 'MFullAlert',
    inheritAttrs: true,
    props: {
        title: [String, Object],
        middleScroll: {
            type: Boolean,
            default: function() {
                return false;
            }
        },
        buttonLabel: {
            type: String,
            default: function() {
                return '확인';
            }
        },
        buttonStyle: {
            type: Object
        },
        buttonClick: {
            type: Function,
            default: function() {
                return ({ children } = {}) => {};
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
        onOKClick() {
            this.buttonClick({ children: this.childrenComponent });
            this.$emit('ok');
            this.hide();
        },
        onCancelClick() {
            this.$emit('hide');
        }
    }
};
</script>

<style lang="scss">
.m-full-alert {
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
    }
}
</style>
