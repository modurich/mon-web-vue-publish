<template>
    <q-layout view="lHh Lpr lFf">
        <header>
           121212121212
        </header>
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
import EssentialLink from 'components/EssentialLink.vue';
import Footer from 'src/pages/parts/Footer.vue';

export default {
  components: { Footer },
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
        margin:0 auto;
        .contents_area{
            display: flex;
            .left_aside,.right_aside{width:280px}
            .centerarea_wrap{width:692px}
        }
        @media (max-width: $breakpoint-xs-max) {
            border:1px solid red;
        }
    }
    
   
</style>
    
