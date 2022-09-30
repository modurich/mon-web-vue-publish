<!-- 각종영역에 사용자 정보를 간단히 보여주는 파츠 -->
<i18n>
{
    "ko": {
        "template": {
            "label1": "플레이어 통계"
        }
    },
    "en": {
        "template": {
            "label1": "Player Stats"
        }
    }
}
</i18n>

<template>
    <div :class="{ 'user-simple-info': true, 'forced-small-size': forcedSmallSize }">
        <template v-if="user.div_code">
            <div class="row">
                <div class="f-16-b-mg">{{ $t('template.label1') }}</div>
                <q-space />
                <m-badge type="normal" v-if="user.div_code === 1" code="stock" :style="{ marginRight: '4px' }" />
                <m-badge type="normal" v-if="user.div_code === 2" code="coin" :style="{ marginRight: '4px' }" />
            </div>
            <m-space-h size="16" />
        </template>
        <div class="row align-center" v-if="!user.nick_name">
            <m-profile-photo :photo-path="user.photo_path" />
            <div class="f-16-500-lg nickname" :style="{ marginLeft: '8px' }">-</div>
        </div>
        <div class="row align-center" v-else>
            <router-link :to="getParameterDiv() ? { name: 'MyPageOthers', params: { userId: user.user_id }, query: { div: getParameterDiv() } } : { name: 'MyPageOthers', params: { userId: user.user_id } }">
                <m-profile-photo :photo-path="user.photo_path" :style="{ border: user.user_id === userInfo.user_id ? `2px solid ${$style.orange}` : 'none' }" />
            </router-link>
            <div class="large-screen-size row align-center" :style="{ marginLeft: '8px' }">
                <router-link :to="getParameterDiv() ? { name: 'MyPageOthers', params: { userId: user.user_id }, query: { div: getParameterDiv() } } : { name: 'MyPageOthers', params: { userId: user.user_id } }">
                    <div class="f-14-b-mg nickname" :style="{ marginRight: '4px' }">{{user.nick_name}}</div>
                </router-link>
                <UserSimpleStatusLine :user="user" :no-tooltip="!showTooltip" />
                <q-space />
                <FollowButton class="inline-flex" :user="user" v-if="showFollwable" />
                <slot name="followRight" />
            </div>
            <div class="small-screen-size" :style="{ marginLeft: '8px' }">
                <div class="row align-center flex-1">
                    <router-link :to="getParameterDiv() ? { name: 'MyPageOthers', params: { userId: user.user_id }, query: { div: getParameterDiv() } } : { name: 'MyPageOthers', params: { userId: user.user_id } }">
                        <div class="f-14-b-mg nickname">{{user.nick_name}}</div>
                    </router-link>
                    <q-space />
                    <FollowButton class="inline-flex" :user="user" v-if="showFollwable" />
                    <slot name="followRight" />
                </div>
                <div class="flex-1">
                    <UserSimpleStatusLine :user="user" :no-tooltip="!showTooltip" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import _ from 'lodash';
import { mapState, mapActions, mapGetters } from 'vuex';
import UserSimpleStatusLine from 'pages/parts/common/UserSimpleStatusLine';
import FollowButton from 'pages/parts/common/FollowButton';

export default {
    name: 'UserSimpleInfo',
    components: {
        UserSimpleStatusLine,
        FollowButton
    },
    props: {
        user: {
            type: Object,
            required: true
        },
        forcedSmallSize: {
            type: Boolean,
            default: function() {
                return false;
            }
        },
        showFollwable: {
            type: Boolean,
            default: function() {
                return true;
            }
        },
        showTooltip: Boolean
    },
    data() {
        return {
        };
    },
    computed: {
        ...mapState({
            userInfo: state => state.auth.userInfo
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
        getParameterDiv() {
            let result = null;
            const insightArea = ['InsightWriterInfo', 'InsightCardListItem', 'InsightCommentList', 'InsightSubCommentLsit', 'InsightSummary'];
            const blashArea = ['BlashCardListItem', 'BlashDetailView', 'BalshSummary', 'BlashCommentList', 'BlashSubCommentList'];
            const agendaArea = ['AgendaDetail'];
            // const socialArea = ['UserSummaryCardItem'];

            if ((this.$parent.$parent && this.$parent.$parent.$parent && this.$parent.$parent.$parent.$vnode !== undefined && this.$parent.$parent.$parent.$vnode.tag.replace(/vue-component-\d+-/i, '') === 'CarouselRanking') || (this.$parent.$vnode !== undefined && this.$parent.$vnode.tag.replace(/vue-component-\d+-/i, '') === 'SideMenu')) {
                return result;
            } else if (this.$utils.getParameterByName('div')) {
                result = Number(this.$utils.getParameterByName('div'));
            } else if (insightArea.includes(this.$parent.$vnode.tag.replace(/vue-component-\d+-/i, ''))) {
                let insightData = this.$parent.insightData;
                result = insightData.div_code;
            } else if (blashArea.includes(this.$parent.$vnode.tag.replace(/vue-component-\d+-/i, ''))) {
                let blashData = this.$parent.blashData || this.$parent.item;
                result = blashData.div_code;
            } else if (agendaArea.includes(this.$parent.$vnode.tag.replace(/vue-component-\d+-/i, ''))) {
                let agendaData = this.$parent.agenda;
                result = agendaData.target.div_code;
            } else {
                result = this.$store.state.common.div_code;
            }
            return result;
        }
    }
};
</script>

<style lang="scss" scoped>
.user-simple-info {
    .large-screen-size {
        display: none;
        flex: 1;
    }
    .small-screen-size {
        display: flex;
        flex: 1;
        flex-direction: column;
    }
    @media (min-width: $breakpoint-xs-max) {
        .large-screen-size {
            display: flex;
        }
        .small-screen-size {
            display: none;
        }
    }

    &.forced-small-size {
        .large-screen-size {
            display: none;
            flex: 1;
        }
        .small-screen-size {
            display: flex;
            flex: 1;
            flex-direction: column;
        }
    }
}
</style>
