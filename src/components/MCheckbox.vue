<template>
    <q-checkbox
        v-bind="$attrs"
        v-on="$listeners"
        dense
    >
        <template v-for="(_, slot) of $scopedSlots" v-slot:[slot]="scope"><slot :name="slot" v-bind="scope" /></template>
    </q-checkbox>
</template>

<script>
export default {
    name: 'MCheckbox',
    data() {
        return {
            title: 'Index Page',
            desc: 'DESC'
        };
    },
    inheritAttrs: true,
    methods: {
        onClick() {
        }
    },
    created() {
    },
    mounted() {
        // console.log('MCheckbox', this, this.$attrs);
    }
};
</script>

<style lang="scss">
.q-checkbox {
    padding-left: 0px;
    align-items: flex-start;
}
.q-checkbox__label {
    font-size: 14px;
    font-weight: bold;
}
.q-checkbox--dense .q-checkbox__label {
    padding-left: 8px;
}
div[aria-checked="false"] .q-checkbox__label {
    color: $light-grey;
    font-weight: 500;
}
.q-checkbox__bg.absolute {
    border: 1.5px solid $ghost-white;
    background: $guyabano;
}
.q-checkbox__inner--truthy {
    .q-checkbox__bg.absolute {
        border: 1.5px solid currentColor;
    }
}
.q-checkbox__inner--truthy, .q-checkbox__inner--indeterminate {
    padding: 0px;
}
.q-checkbox__inner--truthy .q-checkbox__bg, .q-checkbox__inner--indeterminate .q-checkbox__bg {
    background-color: $orange;
}
.q-checkbox__inner--truthy, .q-checkbox__inner--indeterminate {
    color: $orange;
}
svg > .q-checkbox__indet {
    display: none;
}
</style>
