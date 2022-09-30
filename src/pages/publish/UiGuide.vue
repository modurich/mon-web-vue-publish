<template>
    <div>
        <router-link to="/publish">
            uiguide
        </router-link>
    </div>
</template>

<script>
import MTabs from 'src/components/MTabs.vue';
import MAlert from 'src/components/MAlert.vue';
import MHeader from 'src/components/MHeader.vue';
import MMenu from 'src/components/MMenu.vue';
import MButton3 from 'src/components/MButton3.vue';
import MInput from 'src/components/MInput.vue';
export default {
    components: { MTabs, MAlert, MHeader, MMenu, MButton3 },
        MInputname: 'publish'
};
</script>
