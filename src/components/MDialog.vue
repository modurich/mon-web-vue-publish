<!-- 이 다이어로그 컴포넌트는 특정페이지에서만 특별하게 나타나는 팝업들에 대응하기 위한 커스텀하게 나타나는 다이어로그 입니다.
v-model 을 통해 노출여부를 판별합니다. 페이지내에서 컨트롤이 아니라 함수내에서 컨트롤하고자 하거나 $q.dialog() 와 같은 형태로 사용하려면 다음페이지를 참고
https://quasar.dev/quasar-plugins/dialog
-->
<template>
    <q-dialog
        :content-class="`m-dialog ${$attrs.class || ''}`"
        v-bind="$attrs"
        v-on="$listeners"
        square
        persistent
    >
        <!-- <template v-for="(_, slot) of $scopedSlots" v-slot:[slot]="scope"><slot :name="slot" v-bind="scope"/></template> -->
        <div class="dialog-content">
            <slot></slot>
        </div>
    </q-dialog>
</template>

<script>
export default {
    name: 'MDialog',
    data() {
        return {
        };
    },
    props: {
        // https://quasar.dev/vue-components/dialog#QDialog-API
    },
    computed: {
    },
    inheritAttrs: true,
    methods: {
    },
    created() {
    },
    mounted() {
        // console.log('MDialog', this, this.$attrs, this.$refs);
    }
};
</script>

<style lang="scss">
.m-dialog {
}
</style>
