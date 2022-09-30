<!-- 증권사별 앱링크 설정 버튼 -->
<template>
    <div class="adsense-wrapper">
        <Adsense :type="type" v-if="adsense[type] && adsense[type].isActive" :style="wrapStyle" />
    </div>
</template>

<script>
import _ from 'lodash';
import { mapState, mapActions, mapGetters } from 'vuex';
import Adsense from 'pages/parts/common/Adsense';

export default {
    name: 'AdsenseWrapper',
    components: {
        Adsense
    },
    props: {
        /**
         * type 표시되는데 사용될 firebase 에 정의된 타입명
         */
        type: {
            type: String,
            required: true
        },
        wrapStyle: {
            type: [String, Object]
        }
    },
    data() {
        return {
        };
    },
    computed: {
        ...mapState({
            adsense: state => state.common.adsense
        })
    },
    beforeCreate() {
    },
    async created() {
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
.adsense-wrapper {
    max-width: 100%;
    overflow: hidden;
}
</style>
