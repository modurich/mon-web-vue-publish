<template>
    <div :class="{ 'm-toggle': true, 'cursor-pointer': true, 'on': value }" @click="toggle">
    </div>
</template>

<script>
export default {
    name: 'MToggle',
    data() {
        return {
        };
    },
    props: {
        value: {
            type: Boolean,
            required: true
        }
    },
    computed: {
    },
    inheritAttrs: true,
    methods: {
        toggle() {
            this.$emit('input', !this.value);
        }
    },
    created() {
    },
    mounted() {
    }
};
</script>

<style lang="scss" scoped>
.m-toggle {
    display: inline-block;
    padding: 0;
    height: 24px;
    width: 48px;
    background-size: cover;
    background-image: url(/components/mtoggle_off.png);

    &.on {
        background-image: url(/components/mtoggle_on.png);
    }
}
</style>
