<template>
    <q-layout view="lHh Lpr lFf">
        <Header/>
        <div class="contents_wrap">
            <div class="contents_area">
                <aside class="left_aside">왼쪽영역</aside>
                <div class="centerarea_wrap">
                    <router-view />
                </div>
                <aside class="right_aside">오른쪽영역</aside>
            </div>
        </div>
        <Footer />
    </q-layout>
</template>

<script>
import Header from 'src/pages/parts/Header.vue';
import Footer from 'src/pages/parts/Footer.vue';

export default {
  components: { Footer,Header},
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
            //width: 1308px;
            width: 1000px;
            margin:0 auto;
            border:1px solid blue;
            display: flex;
            justify-content: space-between;
            .left_aside,.right_aside{width:280px;background: blue;}
            .centerarea_wrap{width:692px;min-width: 320px;margin:0 auto;}
        }
        //700보다 작아질때
        @media (max-width: $breakpoint-xs-max) {
            border:1px solid red;
        }
        @media (max-width: 1000px) {
            .left_aside,.right_aside{display:none}
            .contents_area{
                width:100%;
            }
        }
    }
    
   
</style>
    
