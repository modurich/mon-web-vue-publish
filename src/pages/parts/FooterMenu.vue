
<template>
    <div class="footer_menu">
        <nav>
            <ul class="nav_area">
                <li><a href="#" class="active"><i class="ico top_menu01"/></a></li>
                <li><a href="#"><i class="ico top_menu02"/></a></li>
                <li><a href="#"><i class="ico top_menu03"/></a></li>
                <li><a href="#"><i class="ico top_menu04"/></a></li>
                <li><a href="#"><i class="ico top_menu05"/></a></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    components: {
    },
    data() {
        return {
            
        };
    },
};
</script>

<style lang="scss" scoped>
.footer_menu{display: none;}
@media (max-width: 1284px) {
    .footer_menu{
        position:fixed;
        bottom:0;
        display:flex;
        left:0;
        right:0;
        width:100%;
        height:80px;
        background:#fff;
        border-top:1px solid #d4d9ea;
        nav{
            display: flex;
            align-items: center;
            width:100%;
        }
        .nav_area{
            display:flex;
            justify-content: space-around;
            align-items: center;
            font-size: 16px;
            color:#9ca8ba;
            width:100%;
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
            .top_menu05{
                background: url('~assets/top_menu05.svg') center right no-repeat;
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
                .top_menu05{
                    background: url('~assets/top_menu05_active.svg') center right no-repeat;
                }
            }

        }
    }
}

</style>
