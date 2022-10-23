
<template>
    <div class="footer_menu">
        <nav>
            <ul class="nav_area">
                <li :key="`m-menu-item-${idx}`" v-for="(item, idx) in menuList" @click="handleClick(item)">
                    <a :class="`${item.val == menu ? 'active' : 'inactive'}`" href="#">
                        <i :class="`ico top_${item.val}`" />
                        <span class="txt_area">{{item.label}}</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            menu: "menu01",
            menuList: [
                { label: "홈", val: "menu01", to: "" },
                { label: "랭킹", val: "menu02", to: "" },
                { label: "콘텐츠", val: "menu03", to: "" },
                { label: "거버넌스", val: "menu04", to: "" },
                { label: "더보기", val: "menu05", to: "" },
            ]
        };
    },
    methods: {
        handleClick(item) {
            // console.log('menu item clicked!!!!', item.val);
            // console.log(this.menu);
            this.menu = item.val;
            if (!item.to) this.$emit('input', item.val);
            if (item.onClick) {
                this.$nextTick(() => item.onClick(item));
            }
        }
    },
    created() {
    },
    updated() {

    },
    mounted() {
    }
};
</script>

<style lang="scss" scoped>
</style>
