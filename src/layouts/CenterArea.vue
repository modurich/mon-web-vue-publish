<template>
    <main class="center-area">
        <TopBreadcrumbs v-if="$q.screen.gt.md" />
        <div class="middle-content">
            <VueRouterPageStack>
                <router-view :key="`${$route.path}`" />
            </VueRouterPageStack>
        </div>
        <Footer />
        <!-- 하단 fixed 가 필요한 경우 footer 의 하단에 여백이 필요할때 -->
        <div v-if="['Checkout'].indexOf($route.name) !== -1" style="display: block;">
            <m-space-h size="166" />
        </div>
    </main>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { VueRouterPageStack } from 'components/abstract/VueRouterPageStack';
import Footer from 'pages/parts/Footer';
import TopBreadcrumbs from 'pages/parts/gnb/TopBreadcrumbs';

export default {
    name: 'CenterArea',
    components: {
        VueRouterPageStack,
        Footer,
        TopBreadcrumbs
    },
    data() {
        return {
        };
    },
    computed: {
    },
    watch: {
    },
    methods: {
    },
    created() {
    },
    async mounted() {
    },
    updated() {
    }
};
</script>

<style lang="scss" scoped>
.center-area {
    .middle-content {
        max-width: 100%;
    }
}
</style>
