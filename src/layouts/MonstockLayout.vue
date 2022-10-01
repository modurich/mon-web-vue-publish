<template>
    <q-layout view="lHh Lpr lFf">
        <Header/>
        <div class="contents_wrap">
            <div class="contents_area">
                <Laside/>
                <div class="centerarea_wrap">
                    <router-view />
                    <Footer />
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

export default {
  components: { Footer,Header,Raside,Laside},
    name: 'MainLayout',
    data() {
        return {
            leftDrawerOpen: false
        };
    }
};
</script>

<style lang="scss" scoped>
    .contents_wrap{
        width:100%;
        min-width: 320px;
        .contents_area{
            width: 1000px;
            margin:0 auto;
            display: flex;
            justify-content: space-between;
            .left_aside,.right_aside{width:280px;border:1px solid red;}
            .centerarea_wrap{width:692px;min-width: 320px;background:#fff;margin:0 auto;}
        }
        //700보다 작아질때
        @media (max-width: $breakpoint-xs-max) {
            border:1px solid red;
        }
        //1308보다 작아질때
        @media (max-width: 1000px) {
            .left_aside,.right_aside{display:none}
            .contents_area{
                width:100%;
            }
        }
    }
    
   
</style>
    
