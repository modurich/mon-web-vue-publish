<template>
    <q-dialog
        ref="dialog"
        :content-class="`m-full-blank ${$attrs.class || ''}`"
        v-bind="$attrs"
        square
        v-on="$listeners"
    >
        <div class="dialog-content" :style="{ ...dialogStyle }">
            <!-- 제목부분 -->
            <fragment v-if="!noTitle">
                <div class="row align-center no-wrap" style="width: 100%;min-height: 56px;">
                    <m-space-v size="12" />
                    <span class="f-16-b-mg ellipsis" v-if="_.isString(title)">{{title}}</span>
                    <span class="f-16-b-mg ellipsis" v-else>
                        <component :is="title" />
                    </span>
                    <q-space />
                    <m-icon name="close_big" class="cursor-pointer" @click="onCancelClick" v-if="!hideCloseButton" />
                    <m-space-v size="12" />
                </div>
                <m-space-h size="1" :style="{ backgroundColor: $style.ghostWhite }" />
            </fragment>
            <div :style="{ overflow: 'auto', height: '100%', ...contentWraperStyle }">
                <slot>
                    <component ref="children" :is="children" v-if="children" @ok="onOKClick" @hide="hide" />
                </slot>
            </div>
        </div>
    </q-dialog>
</template>

<script>
import _ from 'lodash';

export default {
    name: 'MFullBlank',
    inheritAttrs: true,
    props: {
        title: [String, Object],
        noTitle: {
            type: Boolean,
            default: function() {
                return false;
            }
        },
        hideCloseButton: {
            type: Boolean,
            default: function() {
                return false;
            }
        },
        dialogStyle: [String, Object],
        contentWraperStyle: [String, Object],
        children: {
            type: Object
        }
        // https://quasar.dev/vue-components/dialog#QDialog-API
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
    },
    methods: {
        show() {
            this.$refs.dialog.show();
        },
        hide() {
            this.$refs.dialog.hide();
        },
        onOKClick(val) {
            this.$emit('ok', val);
            this.hide();
        },
        onCancelClick() {
            this.$emit('hide');
        }
    }
};
</script>

<style lang="scss">
.m-full-blank {
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
