<template>
    <q-dialog
        ref="dialog"
        :content-class="`m-alert ${$attrs.class || ''}`"
        v-bind="$attrs"
        square
        v-on="$listeners"
    >
        <div class="dialog-content">
            <div class="row top-area items-center">
                <div>{{ $props.title }}</div>
                <q-space />
                <button @click="onCancelClick" aria-label="close"><m-icon class="q-pr-4" name="close_big" width="28" height="28" /></button>
            </div>
            <div class="row mid-area">
                <div style="white-space: pre-wrap;" v-if="$props.content">{{ $props.content }}</div>
                <component :is="$props.children" v-if="$props.children" />
            </div>
            <div class="row bottom-area" v-if="!noButton">
                <div v-if="leftCheckboxLabel" class="row align-center">
                    <m-checkbox v-model="check" :label="leftCheckboxLabel" />
                </div>
                <q-space />
                <m-button3
                    :lined="buttonType === 'lined'"
                    v-if="_.isString(buttonLabel)"
                    :style="buttonStyle"
                    @click="onOKClick"
                >
                    {{ buttonLabel }}
                </m-button3>
                <component :is="buttonLabel" v-if="_.isObject(buttonLabel)" @click="onOKClick" />
            </div>
        </div>
    </q-dialog>
</template>

<script>
export default {
    name: 'MAlert',
    inheritAttrs: true,
    props: {
        title: String,
        buttonLabel: {
            type: [String, Object],
            default: function() {
                return '확인';
            }
        },
        buttonType: {
            type: String,
            default: function() {
                return 'filled';
            }
        },
        content: {
            type: String,
            default: function() {
                return '';
            }
        },
        noButton: {
            type: Boolean,
            default: function() {
                return false;
            }
        },
        buttonClick: {
            type: Function,
            default: function() {
                return () => {};
            }
        },
        buttonStyle: {
            type: [String, Object],
            default: function() {
                return '';
            }
        },
        children: undefined,
        leftCheckboxLabel: {
            type: String,
            default: function() {
                return '';
            }
        }
        // https://quasar.dev/vue-components/dialog#QDialog-API
    },
    data() {
        return {
            check: false
        };
    },
    computed: {
    },
    created() {
    },
    mounted() {
        // console.log('MAlert', this, this.$props, this.$attrs, this.$refs);
    },
    methods: {
        show() {
            this.$refs.dialog.show();
        },
        hide() {
            this.$refs.dialog.hide();
        },
        onOKClick() {
            this.buttonClick({ check: this.check });
            this.$emit('ok');
            this.$emit('hide');
        },
        onCancelClick() {
            this.$emit('hide');
        }
    }
};
</script>

<style lang="scss">
.m-alert {
    .dialog-content {
        margin: 24px;
        padding: 24px;
        width: 308px;
        .top-area {
            font-size: 16px;
            line-height: 28px;
            font-weight: 900;
            color: $medium-grey;
            margin-bottom: 44px;
        }
        .mid-area {
            font-weight: 500;
            font-size: 16px;
            pre {
                white-space: pre-wrap;
                width: 288px;
                height: 320px;
                overflow-x: hidden;
                overflow-y: auto;
                font-size: 12px;
                font-weight: normal;
                color: $grey-tabby;
            }
        }
        .bottom-area {
            margin-top: 40px;
            margin-bottom: 16px;
        }
    }
}
</style>
