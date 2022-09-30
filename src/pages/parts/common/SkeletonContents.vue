<!-- 스켈레톤 컨텐츠 -->
<template>
    <div class="skeleton-contents">
        <div class="skeleton-wrap" v-if="!isReady">
            <div>
                <q-skeleton width="50%" :style="{ margin: '16px 0' }" />
                <q-skeleton width="100%" :style="{ margin: '16px 0' }" />
            </div>
        </div>
        <div class="content-wrap">
            <slot />
        </div>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
export default {
    name: 'SkeletonContents',
    components: {
    },
    data() {
        return {
        };
    },
    props: {
    },
    computed: {
        ...mapState({
            isReady: state => state.master.isReady
        })
    },
    created() {
    },
    mounted() {
    },
    methods: {
    }
};
</script>

<style lang="scss" socped>
.skeleton-contents {
    .skeleton-wrap {
        position: relative;
        & > div {
            position: absolute;
            padding: 16px;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
        }
    }
}
</style>
