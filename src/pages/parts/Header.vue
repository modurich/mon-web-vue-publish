

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
                            <a :class="`${item.val == menu ? 'active' : 'inactive'}`" href="#" class="ico_new">
                                <i :class="`ico top_${item.val}`"><!--<i class="ico_new">알림</i>--></i>
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
                <!--럭키박스 스타일 ico_luckybox,ico_luckybox_new-->
                <button class="ico_luckybox_new">luckybox</button>
                <!--알람 스타일 ico_alarm_new, ico_alarm_off, ico_alarm_on-->
                <button class="ico_alarm_new">alarm</button>
                <div class="user_img">
                    <div class="img_area">
                        <i class="alarm_dot">updated</i>
                        <!-- <img src="~assets/ico_user_noimg.svg" alt="profile"/> -->
                        <img src="~assets/user_img.png" alt="profile"/>
                    </div>
                </div>
                <!-- <m-button-3  color="primary" size="small">로그인</m-button-3> -->
            </div>
        </div>
        
        <div class="top_banner_wrap" v-if="isBanner">
            <div class="box_wrap">
                📢 의제 투표가 진행중입니다. 지금 투표에 참여하여 몬스탁의 주요 의제를 직접 결정하고 활동점수도 받으세요.
                <button class="ico_close_w" @click="isBanner = false" />
            </div>
        </div>
        <!-- <div class="top_banner_wrap bg_dk">
            <a href="javascript:void(0)" role="button" class="flex">
                <div class="box_wrap">
                    <img src="~assets/logo.svg" width="24px" height="24px" alt="monstock logo" class="mgr16"/>몬스탁 앱 설치
                </div>
            </a>
        </div> -->
        <m-chip-list v-dragscroll class="marquee top_info_wrap">
        <ul class="marquee__content top_info_area">
            <li>
                <span class="txt01">KOSPI</span>
                <span class="txt_blue1">₩ 2,814.49</span>
                <span class="tag_blue small">-0.81%</span>
            </li>
            <li>
                <span class="txt01">KOSPI</span>
                <span class="txt_red">₩ 2,814.49</span>
                <span class="tag_red small">-0.81%</span>
            </li>
            <li>
                <span class="txt01">KOSPI</span>
                <span class="txt_red">₩ 2,814.49</span>
                <span class="tag_red small">-0.81%</span>
            </li>
            <li>
                <span class="txt01">KOSPI</span>
                <span class="txt_red">₩ 2,814.49</span>
                <span class="tag_red small">-0.81%</span>
            </li>
        </ul>
        <ul aria-hidden="true" class="marquee__content top_info_area">
            <li>
                <span class="txt01">KOSPI</span>
                <span class="txt_blue1">₩ 2,814.49</span>
                <span class="tag_blue small">-0.81%</span>
            </li>
            <li>
                <span class="txt01">KOSPI</span>
                <span class="txt_red">₩ 2,814.49</span>
                <span class="tag_red small">-0.81%</span>
            </li>
            <li>
                <span class="txt01">KOSPI</span>
                <span class="txt_red">₩ 2,814.49</span>
                <span class="tag_red small">-0.81%</span>
            </li>
            <li>
                <span class="txt01">KOSPI</span>
                <span class="txt_red">₩ 2,814.49</span>
                <span class="tag_red small">-0.81%</span>
            </li>
        </ul>
        </m-chip-list>
    </header>
</template>

<script>
export default {
    name: 'header',
    data() {
        return {
            isBanner: true,
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
.marquee {
  --gap: 1rem;
  position: relative;
  overflow: hidden;
  user-select: none;
  gap: var(--gap);
}

.marquee__content {
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  gap: var(--gap);
  min-width: 100%;
  animation: scroll 20s linear infinite;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
}

/* Pause on hover */
.top_info_wrap:hover .marquee__content{
  -moz-animation-play-state: paused;
  -webkit-animation-play-state: paused;
  animation-play-state: paused;
}

</style>
