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
</style>
    
