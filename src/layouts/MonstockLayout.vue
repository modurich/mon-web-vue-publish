<template>
    <q-layout view="lHh Lpr lFf">
        <Header/>
        <div class="main_wrap">
            <div class="main_area">
                <Laside/>
                <div class="centerarea_wrap">
                    <div class="centerarea_area">
                        <router-view />
                        <Footer />
                        <FooterMenu />
                    </div>
                </div>
                <Raside/>
            </div>
        </div>
    </q-layout>
</template>

<script>
import Header from 'src/pages/parts/Header.vue';
import Footer from 'src/pages/parts/Footer.vue';
import Laside from 'src/pages/parts/Laside.vue';
import Raside from 'src/pages/parts/Raside.vue';
import FooterMenu from 'src/pages/parts/FooterMenu.vue';

export default {
  components: { Footer,Header,Raside,Laside, FooterMenu},
    name: 'MainLayout',
    data() {
        return {
            leftDrawerOpen: false
        };
    }
};
</script>

<style lang="scss" scoped>
    .main_wrap{
        width:100%;
        min-width: 320px;
        .main_area{
            width: 1284px;
            margin:0 auto;
            display: flex;
            justify-content: space-between;
            .left_aside,.right_aside{width:280px;}
            .centerarea_wrap{width:692px;min-width: 320px;margin:0 auto;}
            .centerarea_area{width:100%;background:#fff}
        }
        //700보다 작아질때
        @media (max-width: $breakpoint-xs-max) {
            // border:1px solid red;
        }
        //1284보다 작아질때
        @media (max-width: 1284px) {
            .left_aside,.right_aside{display:none}
            .main_area{
                width:100%;
                .centerarea_wrap{padding-bottom:100px}
            }
        }
    }
    
   
</style>
    
