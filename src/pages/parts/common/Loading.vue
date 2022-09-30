<!-- Loading -->
<template>
    <div class="loading" v-if="active">
        <!-- 원래 :active.sync="loading" 으로 끝났어야 하지만 loader="bars" 와 함께 쓸때 백그라운드에서 렌더링이 계속되고있는 버그가 있다 -->
        <!-- https://github.com/ankurk91/vue-loading-overlay/tree/v3.x -->
        <!-- 분명 display: none 으로 확인되지만 safari 타임라인상에서는 레이아웃과 렌더링이 계속해서 돌아가는 문제가 있다 -->
        <LoadingOverlay
            :active.sync="active"
            loader="bars"
            :can-cancel="true"
            :is-full-page="true"
            :opacity="0"
            :enforce-focus="false"
            color="#929292"
        ></LoadingOverlay>
    </div>
</template>

<script>
import _ from 'lodash';
import { mapState, mapActions } from 'vuex';
import LoadingOverlay from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
    name: 'Loading',
    components: {
        LoadingOverlay
    },
    props: {
    },
    data() {
        return {
            active: false
        };
    },
    computed: {
        // ...mapState({
        //     loading: state => state.common.loading
        // })
    },
    watch: {
        // loading(newVal, oldVal) {
        //     this.active = !!newVal;
        // }
    },
    async mounted() {
    },
    beforeDestroy() {
    },
    methods: {
    }
};
</script>

<style lang="scss" scoped>
.loading {
    // position: fixed;
}
</style>
