<template>
    <div>
        <m-tabs :items="[
            {'label':'Tab1', 'value':'Tab1', 'to':'#aa'},
            {'label':'Tab2', 'value':'Tab2', 'to':'#bb'}]"
        />
        <!--
        <m-alert :content="내용" :button-label="확인">
        </m-alert>

        <m-header />

        <m-dialog />
        -->
        <div>
            <h1>메뉴</h1> 
        <m-menu :items="[
            {'label':'Menu1', 'value':'Menu1', 'to':'#aa'},
            {'label':'Menu2', 'value':'Menu2', 'to':'#bb'}]"/>

        </div>
        <div>
            <h1>버튼</h1>
        <m-button-3 >
            버튼테스트
        </m-button-3>
        </div>
        <m-input />
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
