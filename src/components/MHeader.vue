<template>
    <q-header
        ref="m-header"
        :class="`m-header text-primary ${$attrs.class || ''}`"
        v-bind="$attrs"
        v-on="$listeners"
    >
        <template v-for="(_, slot) of $scopedSlots" v-slot:[slot]="scope">
            <slot :name="slot" v-bind="scope" />
        </template>
    </q-header>
</template>

<script>
export default {
    name: 'MHeader',
    inheritAttrs: true,
    props: {
        items: Array,
        onMenuClick: Function
    },
    data() {
        return {
            text: false
        };
    },
    computed: {
    },
    created() {
    },
    mounted() {
    },
    methods: {
    }
};
</script>

<style lang="scss" scoped>
.m-header {
    position: static;
    position: -webkit-sticky; /* 사파리 브라우저 지원 */
    position: sticky;
    top: 0;
    min-width: 356px;
    // height: 56px;
    background-color: transparent;
    z-index: 10000;
}
</style>
