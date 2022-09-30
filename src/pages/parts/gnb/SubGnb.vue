<template>
    <!-- 서브 GNB -->
    <div class="sub-gnb">
        <!-- 홈화면 메인메뉴들 -->
        <div v-if="['Home', 'Insight', 'Blash', 'Post', 'PlayerRank', 'Governance', 'Intro', 'Event'].indexOf($route.name) !== -1">
            <div class="gnb-navbar row align-center">
                <TopMenuNavigation />
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>

        <TopBreadcrumbs v-else />
    </div>
</template>

<script>
import _ from 'lodash';
import { mapState, mapActions } from 'vuex';
import TopMenuNavigation from 'pages/parts/gnb/TopMenuNavigation';
import TopBreadcrumbs from 'pages/parts/gnb/TopBreadcrumbs';

export default {
    name: 'SubGnb',
    components: {
        TopMenuNavigation,
        TopBreadcrumbs
    },
    props: {
    },
    data() {
        return {
            homeTab: ''
        };
    },
    computed: {
        ...mapState({
            userInfo: state => state.auth.userInfo
        })
    },
    watch: {
    },
    beforeCreate() {
    },
    async created() {
    },
    mounted() {
    },
    methods: {
        ...mapActions({
            reload: 'common/reload'
        }),
        scroll($evt) {
            const screenWidth = screen.width;
            const totalWidth = $evt.target.closest('.q-tabs').offsetWidth;
            const offsetLeft = $evt.target.closest('.q-tab').offsetLeft;
            const wrapper = $evt.target.closest('.gnb-navbar');
            if (totalWidth > screenWidth) {
                if (offsetLeft > screenWidth) {
                    wrapper.scrollTo(offsetLeft, 0);
                } else if (offsetLeft < screenWidth) {
                    wrapper.scrollTo(offsetLeft - 50, 0);
                }
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.sub-gnb {
    // overflow: auto;
    background: $white;
    // border-bottom: 1px solid $ghost-white;
    .gnb-navbar {
        min-height: 40px;
        // overflow: visible;
        overflow-x: auto;
        &::-webkit-scrollbar {
            display: none;
        }
    }
    &:empty {
        border-bottom: none;
    }
}
</style>
