<template>
    <div class="mid-ellipsis ellipsis row align-center no-wrap" v-on="$listeners">
        <div class="row no-wrap ellipsis flex-1">
            <span class="ellipsis">{{text.substr(0, text.length - lastCharCount)}}</span>
            <span>{{text.substr(-lastCharCount)}}</span>
        </div>
        <slot />
    </div>
</template>

<script>
export default {
    name: 'MidEllipsis',
    components: {
    },
    props: {
        text: {
            type: String,
            default() {
                return '';
            }
        },
        lastCharCount: {
            type: Number,
            default() {
                return 5;
            }
        }
    },
    data() {
        return {
        };
    },
    computed: {
    },
    watch: {
    },
    async mounted() {
    },
    beforeDestroy() {
    },
    methods: {
    }
};
</script>

<style lang="scss" scoped>
.mid-ellipsis {
}
</style>
