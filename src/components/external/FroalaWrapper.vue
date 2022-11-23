<!-- SSR 에서 로딩을 제외처리하기 위해 한단계 더 랩핑한다. -->
<template>
    <froala
        v-bind="$attrs"
        v-on="$listeners"
    />
</template>

<script>
import Vue from 'vue';
import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/js/languages/ko.js';
// import 'froala-editor/js/third_party/embedly.min';
// import 'froala-editor/js/third_party/font_awesome.min';
// import 'froala-editor/js/third_party/image_tui.min';
// import 'froala-editor/css/third_party/image_tui.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

// tributejs
import 'tributejs/dist/tribute.css';

// Import and use Vue Froala lib.
import VueFroala from 'vue-froala-wysiwyg';

// VueFroala 이 멍청한 놈은 따로 editor 만 별도로 분리하는 pr을 힘들게 올려준 사람꺼를 머지했다가 다시 빼버렸다. 전역 사용만 가능하게 만들어놓음;;
Vue.use(VueFroala);
Vue.config.productionTip = false;

export default {
    name: 'ExternalFroalaWrapper',
    data() {
        return {
        };
    },
    computed: {
    },
    inheritAttrs: false,
    methods: {
    },
    created() {
    },
    mounted() {
        console.log('Vue', Vue, this);
    }
};
</script>
<style lang="scss">
</style>
