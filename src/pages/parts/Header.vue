

<template>
    <header class="header_wrap">
        <div class="header_area">
            <div class="nav_wrap">
                <h1>
                    <button class="ico_back">back</button>
                    <router-link to="/publish" class="m_logo">monstock</router-link>
                </h1>
                <nav>
                    <ul class="nav_area">
                        <li :key="`m-menu-item-${idx}`" v-for="(item, idx) in menuList" @click="handleClick(item)">
                            <a :class="`${item.val == menu ? 'active' : 'inactive'}`" href="#">
                                <i :class="`ico top_${item.val}`" />
                                <span class="txt">{{item.label}}</span>
                            </a>
                        </li>
                        <!--
                        <li><a href="#" class="active"><i class="ico top_menu01"/><span class="txt">홈</span></a></li>
                        <li><a href="#"><i class="ico top_menu02"/><span class="txt">랭킹</span></a></li>
                        <li><a href="#"><i class="ico top_menu03"/><span class="txt">콘텐츠</span></a></li>
                        <li><a href="#"><i class="ico top_menu04"/><span class="txt">거버넌스</span></a></li>
                        -->
                    </ul>
                </nav>
            </div>
            <div class="btn_wrap">
                <button class="ico_search">search</button>
                <button class="ico_luckybox">luckybox</button>
                <!--알람 스타일 ico_alarm_new, ico_alarm_off, ico_alarm_on-->
                <button class="ico_alarm_new">alarm</button>
                <div class="user_img">
                    <div class="img_area">
                        <!-- <i class="alarm_dot">updated</i> -->
                        <!-- <img src="~assets/ico_user_noimg.svg" alt="profile"/> -->
                        <img src="~assets/user_img.png" alt="profile"/>
                    </div>
                </div>
                <!-- <m-button-3  color="primary" size="small">로그인</m-button-3> -->
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'header',
    data() {
        return {
            menu:"menu01",
            menuList: [
                { label: "홈", val: "menu01", to:""},
                { label: "랭킹", val: "menu02", to: "" },
                { label: "콘텐츠", val: "menu03", to: "" },
                { label: "거버넌스", val: "menu04", to: "" },
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
