<template>
    <button
        v-ripple
        :class="`row align-center justify-center m-overflow-menu ${$attrs.class || ''}`"
        @click.prevent.stop="$emit('click', $event)"
    >
        <slot>
            <m-icon name="menu_overflow" :color="color || $style.greyTabby" stroke-opacity="0" />
        </slot>
        <m-menu
            v-bind="$attrs"
            :items="items"
            anchor="bottom right"
            self="top right"
            v-on="$listeners"
        />
    </button>
</template>

<script>
export default {
    name: 'MOverflowMenu',
    inheritAttrs: true,
    props: {
        items: Array,
        color: String
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
    }
};
</script>

<style lang="scss">
.m-overflow-menu {
    color: $grey-tabby;
    border: none;
    padding: 0;
    display: flex;
    position: relative;
    background-color: transparent;
}
</style>
