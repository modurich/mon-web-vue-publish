<template>
    <q-select
        class="m-select gpu-layer"
        v-bind="$attrs"
        v-on="$listeners"
        color="orange"
        hide-dropdown-icon
        outlined
        behavior="menu"
        dense
        options-dense
    >
        <template slot="append"><m-icon name="chevron_down" stroke-opacity="0" /></template>
        <template v-for="(_, slot) of $scopedSlots" v-slot:[slot]="scope"><slot :name="slot" v-bind="scope" /></template>
    </q-select>
</template>

<script>
export default {
    name: 'MSelect',
    data() {
        return {
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
.m-select {
    font-size: 14px;
    font-weight: 500;
    .q-focus-helper {
        background-color: $orange;
    }
    .q-field__native {
        font-size: 14px;
        font-weight: 500;
        color: $grey-tabby;
    }
    .q-field__label {
        font-size: 14px;
        font-weight: 500;
        color: $light-grey;
        top: 12px;
    }
    &.q-field--dense .q-field__marginal {
        height: 44px;
    }
    &.q-field--auto-height.q-field--dense .q-field__control {
        min-height: 44px;
    }
    &.q-field--outlined .q-field__control:before {
        border-color: $ghost-white;
    }
    &.q-field--outlined .q-field__control {
        padding: 0 16px;
    }
    &.q-field--disabled {
        background: $guyabano;
        .q-field__control > div {
            opacity: 1 !important;
        }
        .q-field__native {
            color: $grey-tabby;
        }
        .q-field__append {
            display: none;
        }
    }
}
.q-item.q-item-type.row.no-wrap.q-item--clickable.q-link.cursor-pointer.q-manual-focusable.q-item--dense {
    min-height: 44px;
}
</style>
