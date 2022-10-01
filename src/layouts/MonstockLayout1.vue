<template>
    <q-layout view="lHh Lpr lFf">
        <div class="layout_full">
            <h1><router-link to="/publish"><img src="~assets/logo.svg" width="30px" height="30px" alt="monstock logo"/> Monstock</router-link ></h1>
            <q-page-container>
                <router-view />
            </q-page-container>
        </div>
    </q-layout>
</template>

<script>
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
.layout_full{
    background: #e4e4e4;
    height: 100vh;
    h1{color:#000;font-size:24px;font-weight:700;letter-spacing: -.05em;padding:10px;
     a{ display: flex;align-items: center;
        img{margin-right:5px}
    }
    }
}
</style>
