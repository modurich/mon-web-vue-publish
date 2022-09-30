<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated>
            <q-toolbar>
                <q-btn
                    flat
                    dense
                    round
                    icon="menu"
                    aria-label="Menu"
                    @click="leftDrawerOpen = !leftDrawerOpen"
                />

                <q-toolbar-title>
                    Quasar App
                </q-toolbar-title>

                <div>Quasar v{{ $q.version }}</div>
            </q-toolbar>
        </q-header>
        <q-page-container>
            <router-view />
        </q-page-container>

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
