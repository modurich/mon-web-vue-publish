<!-- 사용자 정보 중 뱃지와 별점등이 한줄로 표시되는 파츠 -->
<template>
    <div class="user-simple-status-line row align-center" v-if="user.nick_name">
        <m-badge type="normal" code="pro" :tooltip="noTooltip ? '' : undefined" v-if="isShowProNGradeBadges && user.pro_code === 1" />
        <m-badge type="normal" code="sup" :tooltip="noTooltip ? '' : undefined" v-if="user.user_sub_type === 1" />
        <m-badge type="normal" code="cert" :tooltip="noTooltip ? '' : undefined" v-if="user.is_cert" />
        <m-badge type="grade" :code="user.grade_code" :tooltip="noTooltip ? '' : undefined" :user-info="user" v-if="isShowProNGradeBadges" />
        <m-badge type="activity" :code="`${user.activity_level}`" :tooltip="noTooltip ? '' : undefined" />
        <div class="f-12-b-gt" v-if="ratingScore">{{ratingScore | toFixed(2)}} ★</div>
    </div>
</template>

<script>
import _ from 'lodash';
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
    name: 'UserSimpleStatusLine',
    components: {
    },
    props: {
        user: {
            type: Object,
            required: true
        },
        noTooltip: Boolean
    },
    data() {
        return {
            namesOfParentComps2ShowProNGradeBadge: ['SideMenu', 'BlashCardListItem', 'InsightCardListItem', 'MyPage', 'InsightDetail', 'InsightWriterInfo', 'InsightSummary', 'BlashSummary', 'AgendaDetail', 'BlashDetailView', 'BlashPreview']
        };
    },
    computed: {
        ...mapState({
        }),
        ratingScore() {
            if (this.user.rating) {
                return this.user.rating.avg_score;
            } else if (this.user.avg_rating_score) {
                return this.user.avg_rating_score;
            }
            return 0;
        },
        isShowProNGradeBadges() {
            // 기본적으로는 Pro 뱃지와 등급 뱃지를 모두 안보여주도록 하고,
            // Pro 뱃지와 등급 뱃지를 보여줘야 하는 섹션(기획에서 보여줘야한다고 판단하는 모든 부분에 해당될 것임)에
            // 해당하는 부모 컴포넌트의 이름을 가져와서, 현재 로드된 섹션과 비교하여 true, false를 반환한다.
            if (this.$parent.$parent.$vnode.tag.replace(/vue-component-\d+-/i, '').includes('Comment')) {
                return false;
            }
            return this.namesOfParentComps2ShowProNGradeBadge.includes(this.$parent.$vnode.tag.replace(/vue-component-\d+-/i, '')) || this.namesOfParentComps2ShowProNGradeBadge.includes(this.$parent.$parent.$vnode.tag.replace(/vue-component-\d+-/i, '')) || this.namesOfParentComps2ShowProNGradeBadge.includes(this.$parent.$parent.$parent.$vnode.tag.replace(/vue-component-\d+-/i, ''));
        }
    },
    beforeCreate() {
    },
    async created() {
    },
    async mounted() {
        console.log('this.$parent.$parent.$vnode.tag', this.$parent.$parent.$vnode.tag.replace(/vue-component-\d+-/i, ''), this.namesOfParentComps2ShowProNGradeBadge.includes(this.$parent.$parent.$vnode.tag.replace(/vue-component-\d+-/i, '')));
    },
    beforeDestroy() {
    },
    methods: {
    }
};
</script>

<style lang="scss" scoped>
.user-simple-status-line {
    * + * {
        margin-left: 4px;
    }
}
</style>
