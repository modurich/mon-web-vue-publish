<template>
    <q-radio
        class="m-radio"
        v-bind="$attrs"
        v-on="$listeners"
        :color="$attrs.color || 'orange'"
        dense
    >
        <template v-for="(_, slot) of $scopedSlots" v-slot:[slot]="scope"><slot :name="slot" v-bind="scope" /></template>
    </q-radio>
</template>

<script>
export default {
    name: 'MRadio',
    data() {
        return {
            text: false
        };
    },
    props: {
    },
    computed: {
    },
    inheritAttrs: true,
    methods: {
    },
    created() {
    },
    mounted() {
        // console.log('MToggle', this, this.$attrs);
    }
};
</script>

<style lang="scss">
.m-radio {
    .q-radio__label.q-anchor--skip {
        padding-left: 16px;
        font-size: 14px;
        font-weight: 500;
        line-height: 150%;
    }
    .q-radio__outer-circle.absolute-full {
        border-color: $grey-tabby;
    }
}
</style>
