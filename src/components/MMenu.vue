<template>
    <q-menu
        v-bind="$attrs"
        v-on="$listeners"
    >
        <q-item
            dense
            clickable
            v-close-popup
            v-for="(item, idx) in $props.items"
            :key="`m-menu-item-${idx}`"
            @click="() => item.click(data)"
            v-bind="item.attrs"
            :style="item.itemStyle"
        >
            <q-item-section>{{item.label}}</q-item-section>
        </q-item>
    </q-menu>
</template>

<script>
export default {
    name: 'MMenu',
    data() {
        return {
            text: false
        };
    },
    props: {
        items: Array,
        data: [Object, Array]
    },
    computed: {
    },
    inheritAttrs: true,
    methods: {
    },
    created() {
    },
    mounted() {
        // console.log('MMenu', this, this.$attrs);
    }
};
</script>

<style lang="scss">
.q-menu {
    .q-item {
        min-height: 40px;
    }
}
</style>
