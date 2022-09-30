<!-- 내용 전체를 커스텀으로 넣기위한 다이어로그 컴포넌트
-->
<template>
    <q-dialog
        ref="dialog"
        :content-class="`m-dialog-blank ${$attrs.class || ''}`"
        v-bind="$attrs"
        v-on="$listeners"
        square
    >
        <div class="dialog-content" :style="{ ...dialogStyle }">
            <component ref="children" :is="children" v-if="children" @hide="hide" />
        </div>
    </q-dialog>
</template>

<script>
export default {
    name: 'MDialogBlank',
    data() {
        return {
        };
    },
    props: {
        children: undefined,
        dialogStyle: undefined
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

<style lang="scss">
.m-dialog-blank {
    .dialog-content {
        max-width: 480px;
        min-width: 200px;
    }
}
</style>
