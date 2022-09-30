<!-- 사이드메뉴가 없어지고 생긴 풀사이즈 팝업메뉴창 -->
<template>
    <div class="full-popup-menu">
        <SideMenu :is-popup="true" />
    </div>
</template>

<script>
import SideMenu from 'pages/parts/common/SideMenu';

export default {
    name: 'FullPopupMenu',
    components: {
        SideMenu
    },
    props: {
    },
    data() {
        return {
        };
    },
    computed: {
    },
    beforeCreate() {
    },
    async created() {
    },
    mounted() {
    },
    methods: {
    }
};
</script>

<style lang="scss" scoped>
.full-popup-menu {
}
</style>
