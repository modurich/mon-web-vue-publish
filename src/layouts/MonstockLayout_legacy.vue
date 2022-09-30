<i18n>
{
  "ko": {
    "postLabel": "포스트",
    "insightLabel": "인사이트/오피니언",
    "blashLabel": "BLASH"
  },
  "en": {
    "postLabel": "Post",
    "insightLabel": "Insight/Opinion",
    "blashLabel": "BLASH"
  }
}
</i18n>
<template>
    <q-layout view="lHh Lpr lFf" :class="{ 'monstock-layout': true }">
        <fragment v-if="maintenance.isActive !== true || isWhiteListIp || !isShowMaintainance">
            <!-- 데탑 사이즈 헤더 -->
            <m-header reveal :height-hint="56" :elevated="false" v-if="$q.screen.gt.md" @reveal="setHeaderState">
                <div :style="{ marginBottom: '16px', backgroundColor: $style.white, borderBottom: `1px solid ${$style.ghostWhite}` }">
                    <div :style="{ maxWidth: '1308px', margin: '0 auto' }">
                        <!-- 최상단 GNB -->
                        <TopGnbWide />
                    </div>
                    <!-- 긴급공지 -->
                    <UrgentNotice v-if="urgentNotice && urgentNotice.isActive" />

                    <!-- 몬스탁 앱 설치 -->
                    <A2HS v-else />
                </div>
            </m-header>
            <!-- 모바일 사이즈 헤더 -->
            <m-header reveal :height-hint="56" :elevated="false" v-else @reveal="setHeaderState">
                <div :style="{ maxWidth: '692px', margin: '0 auto' }">
                    <!-- 최상단 GNB -->
                    <TopGnb />

                    <!-- 긴급공지 -->
                    <UrgentNotice v-if="urgentNotice && urgentNotice.isActive" />

                    <!-- 몬스탁 앱 설치 -->
                    <A2HS v-else />

                    <!-- 최상단 SUB GNB -->
                    <SubGnb :key="`sub-gnb`" />
                </div>
            </m-header>

            <!-- 팝업메뉴 -->
            <m-full-blank :no-title="true" :value="sidemenu" @input="setSidemenu" transition-show="" transition-hide="">
                <FullPopupMenu />
            </m-full-blank>

            <div class="row">
                <!-- 고해상도 좌측영역 -->
                <aside class="row flex-1 gt-md" v-if="isShowSideArea && $q.screen.gt.md">
                    <q-space />
                    <div class="left-area" :style="{ width: '280px', margin: '0 16px 0 12px' }">
                        <div :style="{ background: $style.white }">
                            <div v-if="isLogin">
                                <SideMenu />
                            </div>
                            <LoginCommon type="side" v-else />
                        </div>
                    </div>
                </aside>
                <!-- 중앙 컨텐츠영역 -->
                <CenterArea class="center-area" :key="`center-area-${isLogin}`" v-if="isLogin !== null" />

                <!-- 고해상도 우측영역 -->
                <aside class="row flex-1 gt-md" v-if="isShowSideArea && $q.screen.gt.md">
                    <div class="right-area gt-md" :style="{ width: '280px', margin: '0 12px 0 16px' }">
                        <div :style="{ background: $style.white }">
                            <IndexWidget />
                        </div>
                        <div :style="{ background: $style.white, marginTop: '16px' }">
                            <CarouselRanking :type="div_code === 1 ? 'blash' : 'insight'" />
                        </div>
                        <div :style="{ background: $style.white, marginTop: '16px', padding: '32px 0 16px 0' }">
                            <PlayStoreLinkQR />
                        </div>
                        <div :style="{ marginTop: '16px' }">
                            <AdsenseWrapper type="sideRight" />
                        </div>
                    </div>
                    <q-space />
                </aside>
            </div>

            <!-- 우측 하단 플로팅액션버튼 -->
            <m-float-bottom :style="{ zIndex: 1 }">
                <div :style="{ position: 'relative', width: '100%' }">
                    <div class="write-fab" v-if="(['Home', 'Insight', 'Blash', 'Post'].indexOf($route.name) !== -1)">
                        <q-fab
                            tabindex="0"
                            style="pointer-events: initial;"
                            :outline="isExpandedFab"
                            v-model="isExpandedFab"
                            vertical-actions-align="right"
                            color="mg"
                            text-color="mg"
                            icon="img:/svgs/icon/write.svg"
                            direction="up"
                        >
                            <q-fab-action label-position="left" color="gt" text-color="white" padding="12px 32px" :label="$t('postLabel')" :to="{ name: 'WritePost' }" />
                            <q-fab-action label-position="left" color="gt" text-color="white" padding="12px 32px" :label="$t('insightLabel')" :to="{ name: 'WriteInsightGuide' }" />
                            <q-fab-action label-position="left" color="gt" text-color="white" padding="12px 32px" :label="$t('blashLabel')" :to="{ name: 'WriteBlashGuide' }" />
                        </q-fab>
                    </div>
                </div>
            </m-float-bottom>
        </fragment>
        <!-- 점검이 걸렸을때 -->
        <fragment v-else>
            <Maintainance />
        </fragment>
    </q-layout>
</template>

<script>
import moment from 'moment';
import { mapState, mapActions } from 'vuex';
import { Cookies } from 'quasar';
import CenterArea from 'layouts/CenterArea';
import FullPopupMenu from 'pages/parts/common/FullPopupMenu';
import TopGnb from 'pages/parts/gnb/TopGnb';
import TopGnbWide from 'pages/parts/gnb/TopGnbWide';
import SubGnb from 'pages/parts/gnb/SubGnb';
import A2HS from 'pages/parts/gnb/A2HS';
import UrgentNotice from 'pages/parts/gnb/UrgentNotice';
import Maintainance from 'pages/parts/maintainance/Maintainance';
import LoginCommon from 'pages/parts/LoginCommon';
import SideMenu from 'pages/parts/common/SideMenu';
import CarouselRanking from 'pages/parts/ranking/CarouselRanking';
import PlayStoreLinkQR from 'pages/parts/common/PlayStoreLinkQR';
import IndexWidget from 'pages/parts/stock/IndexWidget';
import AdsenseWrapper from 'pages/parts/common/AdsenseWrapper';
import { getListNotice } from 'apis/common';
import { requestIP } from 'apis/cloudfunctions';
import 'froala-editor/css/froala_editor.pkgd.css';

export default {
    name: 'MonstockLayout',
    components: {
        CenterArea,
        FullPopupMenu,
        TopGnb,
        TopGnbWide,
        SubGnb,
        UrgentNotice,
        A2HS,
        Maintainance,
        LoginCommon,
        SideMenu,
        CarouselRanking,
        PlayStoreLinkQR,
        IndexWidget,
        AdsenseWrapper
    },
    data() {
        return {
            notice: [],
            isExpandedFab: false,
            clientIp: '',
            isShowMaintainance: true // 점검페이지를 보여줄지 여부(사용중이었다면 팝업이 닫혀야 점검페이지가 뜨도록해야함)
        };
    },
    computed: {
        ...mapState({
            isLogin: state => state.auth.isLogin,
            userInfo: state => state.auth.userInfo,
            sidemenu: state => state.common.sidemenu,
            t: state => state.common.t,
            unreadPushCnt: state => state.auth.unreadPushCnt,
            maintenance: state => state.common.maintenance,
            urgentNotice: state => state.common.urgentNotice,
            div_code: state => state.common.div_code
        }),
        isWhiteListIp() {
            try {
                if (this.maintenance.whiteList.indexOf(this.clientIp) !== -1) {
                    return true;
                }
            } catch (err) {}
            return false;
        },
        // 고해상도일떄만 나타나는 사이드영역을 노출해도 되는지
        isShowSideArea() {
            if (['Login', 'JoinGuide', 'JoinForm', 'JoinException', 'JoinComplete'].indexOf(this.$route.name) === -1) {
                return true;
            }
            return false;
        }
    },
    watch: {
        'maintenance.isActive': async function(newVal, oldVal) {
            this.getClientIp();
            if (newVal === true) {
                this.isShowMaintainance = false;
                this.$q.dialog({
                    component: 'm-alert',
                    parent: this,
                    content: this.maintenance.message
                }).onDismiss(() => {
                    this.isShowMaintainance = true;
                });
            }
        }
    },
    methods: {
        ...mapActions({
            setHeaderState: 'common/setHeaderState',
            setSidemenu: 'common/setSidemenu'
        }),
        // 인앱 홈에 추가
        addToHome() {
            const { deferredPrompt } = window;
            try {
                deferredPrompt.prompt();
            } catch (err) {}
        },
        // 공지사항 팝업내용 불러오기
        async getListNotice() {
            try {
                const body = {
                    paging: {
                        offset: 0,
                        size: 10
                    },
                    order_by: {
                        column: 0,
                        sort: 0
                    },
                    filter: {
                        is_main: true
                    }
                };
                const { notice } = await getListNotice(body);
                this.notice = notice;
            } catch (err) {}
        },
        async getClientIp() {
            try {
                if (this.maintenance.isActive === true && this.maintenance.whiteList.length > 0 && !this.clientIp) {
                    this.clientIp = await requestIP();
                }
            } catch (err) {}
        },
        checkLoginStatus() {
            // 로그인된 상태인데 핸드폰번호가 NULL 로 초기화 되어있다면 폰번호를 다시 세팅하기 전에는 사이트이용불가
            if (this.$route.name !== 'JoinException' && this.isLogin && this.userInfo.nick_name && !this.userInfo.phone_no) {
                this.$router.push({ name: 'JoinException', params: { type: 10 } });
            }
        }
    },
    created() {
        // console.log('MonstockLayout created');
        // 캐시슬라이드 클릭키 저장
        if (this.$route.query.click_key) {
            this.$store.dispatch('common/setCacheSlideClickKey', this.$route.query.click_key);
        }

        // 핀크럭스 클릭키 저장
        if (this.$route.query.pinkey) {
            try {
                localStorage.setItem('pincruxKey', JSON.stringify({ key: this.$route.query.pinkey, expire: moment().add(1, 'hours').valueOf() }));
            } catch (err) {}
            this.$store.dispatch('common/setPincruxKey', this.$route.query.pinkey);
        } else {
            try {
                const pincruxKey = JSON.parse(localStorage.getItem('pincruxKey'));
                if (moment(pincruxKey.expire) > moment()) {
                    this.$store.dispatch('common/setPincruxKey', pincruxKey.key);
                }
            } catch (err) {}
        }

        // 회원가입 초대링크를 타고왔을때 추천인코드 저장
        if (this.$route.query.rcode) {
            this.$store.dispatch('common/setLinkedRecommandCode', this.$route.query.rcode);
        }
    },
    async mounted() {
        if (this.maintenance.isActive !== true) {
            if (!Cookies.get('notice_popup_ignore')/* 3일동안 안보기가 체크되지 않았으면 */ && ['Home', 'Insight'].indexOf(this.$route.name) !== -1 && !(this.$route.params && this.$route.params.hideNotice)) {
                await this.getListNotice();
                if (this.notice.length) {
                    this.$q.dialog({
                        parent: this,
                        component: 'm-notice-full-dialog',
                        notice: this.notice
                    });
                }
            }

            if (this.$route.query && this.$route.query.noti_seq) {
                this.$store.dispatch('auth/showNotificationDetail', { noti_seq: this.$route.query.noti_seq, parent: this });
            }
        } else {
            this.getClientIp();
        }

        this.checkLoginStatus();
    },
    updated() {
        this.checkLoginStatus();
    }
};
</script>

<style lang="scss">
.monstock-layout {
    position: relative;
    // background-color: $white;

    .center-area {
        position: relative;
        flex: 10;
        min-width: 356px;
        width: 100%;
        max-width: 692px;
        min-height: calc(100vh - 97px);
        background-color: $white;
        margin: 0 auto;
    }

    .write-fab {
        position: absolute;
        margin: 16px;
        bottom: 0px;
        right: 0px;
        pointer-events: none;
        text-align: right;

        .q-btn--outline {
            background-color: white !important;
        }
    }
}
</style>
