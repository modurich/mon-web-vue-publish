<i18n>
{
    "ko": {
        "template": {
            "label1": "BLASH",
            "label2": "인사이트",
            "label3": "포스트",
            "label4": "랭킹",
            "label5": "거버넌스",
            "label6": "서비스소개"
        }
    },
    "en": {
        "template": {
            "label1": "BLASH",
            "label2": "Insight",
            "label3": "Post",
            "label4": "Ranking",
            "label5": "Governance",
            "label6": "Service Introdution "
        }
    }
}
</i18n>

<template>
    <!-- 탑 메뉴 네비게이션 바 -->
    <div class="top-menu-navigation">
        <!-- 홈화면 메인메뉴들 -->
        <nav :style="{ margin: '0 12px', whiteSpace: 'nowrap', overflow: 'hidden' }" v-dragscroll>
            <router-link :class="$route.name === 'Blash' ? 'f-18-b-mg' : 'f-18-500-gt'" :to="{ name: 'Blash' }" replace>{{ $t('template.label1') }}</router-link>
            <router-link :class="$route.name === 'Insight' ? 'f-18-b-mg' : 'f-18-500-gt'" :to="{ name: 'Insight' }" replace>{{ $t('template.label2') }}</router-link>
            <router-link :class="$route.name === 'Post' ? 'f-18-b-mg' : 'f-18-500-gt'" :to="{ name: 'Post' }" replace>{{ $t('template.label3') }}</router-link>
            <router-link :class="$route.name === 'PlayerRank' ? 'f-18-b-mg' : 'f-18-500-gt'" :to="{ name: 'PlayerRank' }" replace>{{ $t('template.label4') }}</router-link>
            <router-link :class="$route.name === 'Governance' ? 'f-18-b-mg' : 'f-18-500-gt'" :to="{ name: 'Governance' }" replace>{{ $t('template.label5') }}</router-link>
            <router-link :class="$route.name === 'Intro' ? 'f-18-b-mg' : 'f-18-500-gt'" :to="{ name: 'Intro' }" replace>{{ $t('template.label6') }}</router-link>
        </nav>
    </div>
</template>

<script>
import _ from 'lodash';
import { mapState, mapActions } from 'vuex';

export default {
    name: 'TopMenuNavigation',
    components: {
    },
    props: {
    },
    data() {
        return {
        };
    },
    computed: {
        ...mapState({
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
        })
    }
};
</script>

<style lang="scss" scoped>
.top-menu-navigation {
    background: $white;
    overflow-x: scroll;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;  /* IE 10+ */

    &::-webkit-scrollbar { /* WebKit */
        width: 0px;
        display: none;
    }
    nav > * {
        margin-right: 16px;
        @media (min-width: $breakpoint-md-max) {
            margin-right: 24px;
        }
    }

    nav > :last-child {
        margin-right: 0px;
    }
}
</style>
