

<template>
    <header class="header_wrap">
        <div class="header_area">
            <div class="nav_wrap">
                <h1>
                    <button class="ico_back">back</button>
                    <a href="#" class="m_logo">monstock</a>
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
                <button class="ico_search">seach</button>
                <button class="ico_luckybox">luckybox</button>
                <button class="ico_alarm01">alarm</button>
                <div class="user_img">
                    <div class="img_area"><img src="~assets/user_img.png" alt="profile"/></div>
                </div>
                <!-- <m-button-3  color="slateBlue" size="small">로그인</m-button-3> -->
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
    .header_wrap{
        height:80px;
        width:100%;
        background:#fff;
        border-bottom:1px solid #d4d9ea;
        margin-bottom:20px;
        
        .mob_only{display:none}
        .header_area{
            height:80px;
            width:1284px;margin:0 auto;
            display:flex;
            align-items: center;
            justify-content: space-between;
            .btn_wrap{
                display: inline-flex;
                align-items: center;
                .m-button3{margin-left:30px}
                .ico_search{
                    background: url('~assets/ico_search.svg') center right no-repeat;
                    display: inline-flex;
                    width:36px;
                    height: 36px;
                    text-indent: -999em;
                }
                .ico_luckybox{
                    background: url('~assets/ico_luckybox.svg') center right no-repeat;
                    background-size:contain;
                    display: inline-flex;
                    width:36px;
                    height: 36px;
                    text-indent: -999em;
                }
                .ico_alarm01{
                    background: url('~assets/ico_alarm01.svg') center right no-repeat;
                    display: inline-flex;
                    background-size:contain;
                    width:36px;
                    height: 36px;
                    text-indent: -999em;
                }
                .user_img{
                    width:36px;
                    height:36px;
                    border-radius:36px;
                    margin-left:20px;
                    overflow: hidden;
                    img{width:100%;height:100%}
                }
                button + button{margin-left:20px}
            }
            .nav_wrap{
                display:flex;
                nav{
                    display: flex;
                    align-items: center;
                    margin-left:134px;
                }
                .ico_back{
                    display: inline-flex;
                    width:36px;
                    height: 36px;
                    margin-right:10px;
                    text-indent: -999em;
                    background: url('~assets/ico_back.svg') center right no-repeat;
                }
                .m_logo{
                    display: inline-flex;
                    width:170px;
                    height: 36px;
                    margin-right:10px;
                    text-indent: -999em;
                    background: url('~assets/monstock_logo1.svg') center right no-repeat;
                    background-size:contain;
                }
                .nav_area{
                    display:flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 16px;
                    color:#9ca8ba;
                    width:540px;
                    a{
                        display: inline-flex;
                        align-items: center;
                    }
                    .ico{
                        display: inline-flex;
                        width:24px;
                        height: 24px;
                        margin-right:10px;
                    }
                    
                    .top_menu01{
                        background: url('~assets/top_menu01.svg') center right no-repeat;
                    }
                    .top_menu02{
                        background: url('~assets/top_menu02.svg') center right no-repeat;
                    }
                    .top_menu03{
                        background: url('~assets/top_menu03.svg') center right no-repeat;
                    }
                    .top_menu04{
                        background: url('~assets/top_menu04.svg') center right no-repeat;
                    }
                    .active{
                        color:$primary;
                        .top_menu01{
                        background: url('~assets/top_menu01_active.svg') center right no-repeat;
                        }
                        .top_menu02{
                            background: url('~assets/top_menu02_active.svg') center right no-repeat;
                        }
                        .top_menu03{
                            background: url('~assets/top_menu03_active.svg') center right no-repeat;
                        }
                        .top_menu04{
                            background: url('~assets/top_menu04_active.svg') center right no-repeat;
                        }
                    }

                }
            }
        }
        //1284보다 작아질때
        @media (max-width: 1284px) {
            padding:0 16px;
            height:60px;
            .header_area{width:100%;
                height: 60px;
                .btn_wrap{
                    display: inline-flex;
                    align-items: center;
                    button,.user_img{width:24px !important;
                    height:24px !important;
                    }
                    .ico_search{
                        background-size:contain !important;
                        width:24px !important;
                        height: 24px !important;
                    }
                }
            }
            .mob_only{
                display: block;
            }
            nav{display: none !important;}
            .nav_wrap{
                .m_logo{
                    display: inline-flex;
                    width:30px !important;
                    height: 30px;
                    margin-right:10px;
                    text-indent: -999em;
                    background: url('~assets/logo.svg') center right no-repeat !important;;
                    background-size:contain !important;
                }
            }
            
        }
    }
</style>
