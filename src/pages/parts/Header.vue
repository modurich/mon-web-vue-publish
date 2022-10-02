

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
                        <li><a href="#"><i class="ico top_menu01"/><span class="txt">홈</span></a></li>
                        <li><a href="#"><i class="ico top_menu02"/><span class="txt">랭킹</span></a></li>
                        <li><a href="#"><i class="ico top_menu03"/><span class="txt">콘텐츠</span></a></li>
                        <li><a href="#"><i class="ico top_menu04"/><span class="txt">거버넌스</span></a></li>
                    </ul>
                </nav>
            </div>
            <div class="search_wrap">
                <button class="ico_search">seach</button>
                <m-button-3  color="slateBlue" size="small" class="mob_only">로그인</m-button-3>
            </div>
        </div>
    </header>
</template>

<script>


export default {
    name: 'header',
   
};
</script>

<style lang="scss" scoped>
    .header_wrap{
        height:80px;
        width:100%;
        background:#fff;
        border-bottom:1px solid #d4d9ea;
        margin-bottom:20px;
        
       .mob_only{display:block}
        .header_area{
            height:80px;
            width:1284px;margin:0 auto;
            display:flex;
            align-items: center;
            justify-content: space-between;
            .search_wrap{
                display: inline-flex;
                align-items: center;
                .ico_search{
                    background: url('~assets/ico_search.svg') center right no-repeat;
                    display: inline-flex;
                    width:36px;
                    height: 36px;
                    text-indent: -999em;
                }
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
                    background: url('~assets/monstock_logo1.png') center right no-repeat;
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

                }
            }
        }
        //1284보다 작아질때
        @media (max-width: 1284px) {
            border:1px solid red;
            .header_area{width:100%}
            .mob_only{
                display: block;
            }
            nav{display: none !important;}
        }
    }
</style>
