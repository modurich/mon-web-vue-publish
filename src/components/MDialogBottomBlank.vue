<!-- 내용 전체를 커스텀으로 넣기위한 다이어로그 컴포넌트
-->
<template>
    <q-dialog
        ref="dialog"
        :content-class="`m-dialog-bottom-blank ${$attrs.class || ''}`"
        v-bind="$attrs"
        v-on="$listeners"
        transition-show="slide-up"
        transition-hide="slide-down"
        square
    >
        <div class="dialog-content">
            <component ref="children" :is="children" v-if="children" @hide="hide" />
        </div>
    </q-dialog>
</template>

<script>
export default {
    name: 'MDialogBottomBlank',
    data() {
        return {
        };
    },
    props: {
        children: undefined
    },
    computed: {
    },
    inheritAttrs: true,
    created() {
    },
    mounted() {
        // console.log('MDialog', this);
    },
    methods: {
        show() {
            this.$refs.dialog.show();
        },
        hide() {
            this.$refs.dialog.hide();
        }
    }
};
</script>

<style lang="scss" scoped>
.m-dialog-bottom-blank {
    .dialog-content {
        max-width: 692px;
        max-height: calc(100vh - 50px);
        width: 100%;
        min-width: 320px;
        position: absolute;
        bottom: 0px;
        border-radius: 16px 16px 0px 0px !important;
    }
}
</style>
