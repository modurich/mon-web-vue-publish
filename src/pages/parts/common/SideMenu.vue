<!-- 사이드메뉴 -->
<i18n>
{
  "ko": {
    "template": {
      "label1": "팔로워",
      "label2": "팔로잉",
      "label3": "로그아웃",
      "label4": "지갑없음",
      "label5": "지갑연결",
      "label6": "활동점수",
      "label7": "보팅파워",
      "label8": "리워드",
      "label9": "멤버십 사용중",
      "label10": "멤버십 시작",
      "label11": "가입미션",
      "label12": "일일 미션",
      "label13": "닫기",
      "label14": "- MON과 몬스탁에서 발행한 NFT 와 KLAY 만 받을 수 있습니다.",
      "label15": "- 지원하지 않는 자산을 입금한 경우에 발생하는 오류 및 손실은 복구가 불가하며 회사는 이에 대한 책임을 지지 않습니다.",
      "label16": "새 알림",
      "label17": "새로운 알림이 없습니다",
      "label18": "활동",
      "label19": "마이페이지",
      "label20": "내 지갑",
      "label21": "활동내역",
      "label22": "소셜",
      "label23": "보팅",
      "label24": "럭키박스",
      "label25": "NFT샵",
      "label26": "종목예측",
      "label27": "내 종목",
      "label28": "구독현황",
      "label29": "BLASH 관리",
      "label30": "최근열람",
      "label31": "안내",
      "label32": "인포데스크",
      "label33": "퀵가이드",
      "label34": "이벤트",
      "label35": "고객센터",
      "label36": "홈화면 전환"
    },
    "methods": {
        "notify1": "복사되었습니다"
    }
  },
  "en": {
    "template": {
      "label1": "followers",
      "label2": "following",
      "label3": "logout",
      "label4": "no wallet",
      "label5": "wallet link",
      "label6": "activity score",
      "label7": "voting power",
      "label8": "reward",
      "label9": "Membership in use",
      "label10": "Start Membership",
      "label11": "Join Mission",
      "label12": "daily mission",
      "label13": "Close",
      "label14": "- You can only receive NFT and KLAY issued by MON and Monstock.",
      "label15": "- Errors and losses caused by depositing unsupported assets cannot be recovered and the company is not responsible for them.",
      "label16": "New Notification",
      "label17": "No new notifications",
      "label18": "Activity",
      "label19": "My Page",
      "label20": "My wallet",
      "label21": "Activity history",
      "label22": "Social",
      "label23": "voting",
      "label24": "lucky box",
      "label25": "NFT Shop",
      "label26": "Stock prediction",
      "label27": "My sport",
      "label28": "Subscription Status",
      "label29": "Manage BLASH",
      "label30": "Recently viewed",
      "label31": "Guide",
      "label32": "Infodesk",
      "label33": "quick",
      "label34": "Event",
      "label35": "Customer Center",
      "label36": "Switch home screen"
    },
    "methods": {
        "notify1": "Copied"
    }
  }
}
</i18n>

<template>
    <div class="side-menu">
        <div :class="{ 'top-sticky': isPopup }">
            <div :style="{ padding: '16px 12px' }">
                <div class="row align-top">
                    <UserSimpleInfo class="flex-1" :user="{ ...userInfo, ...userStats }" :show-tooltip="true" />
                    <button class="flex" aria-label="setting" @click="$router.push({ name: 'MemberProfile' })">
                        <m-icon name="settings" stroke-opacity="0" />
                    </button>
                    <button class="flex" aria-label="close" v-if="isPopup" @click="hideSidemenu">
                        <m-icon name="close_big" :style="{ marginLeft: '24px' }" />
                    </button>
                </div>
                <div class="row align-center" :style="{ marginTop: '8px' }">
                    <router-link class="f-12-500-gt" :to="{ name: 'Social', query: { tab: 'follower' } }">{{ $t('template.label1') }} <span class="f-14-b-gt">{{$utils.numberWithAlphabet(userStats.follower_cnt)}}</span></router-link>
                    <m-space-v size="16" />
                    <router-link class="f-12-500-gt" :to="{ name: 'Social', query: { tab: 'following' } }">{{ $t('template.label2') }} <span class="f-14-b-gt">{{$utils.numberWithAlphabet(userStats.following_cnt)}}</span></router-link>
                    <q-space />
                    <button class="f-14-b-lg" @click="logout">{{ $t('template.label3') }}</button>
                </div>
            </div>
            <m-space-h size="1" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>
        <div :style="{ margin: '16px 12px 0' }" v-if="!showQR">
            <div class="row align-center" v-if="!walletBalance.address">
                <router-link class="flex" :to="{ name: 'Wallet' }">
                    <m-icon name="wallet" stroke-opacity="0" :color="$style.greyTabby" />
                </router-link>
                <div class="row align-center flex-1" :style="{ marginLeft: '24px', padding: '8px 16px', backgroundColor: $style.guyabano, border: `1px solid ${$style.ghostWhite}` }">
                    <div class="f-12-500-lg">{{ $t('template.label4') }}</div>
                </div>
                <div class="row align-center cursor-pointer" @click="createWallet">
                    <div class="f-14-b-gt" :style="{ marginLeft: '24px' }">{{ $t('template.label5') }}</div>
                    <m-icon name="chevron_right" stroke-opacity="0" />
                </div>
            </div>
            <div class="row align-center" v-else>
                <router-link class="flex" :to="{ name: 'Wallet' }">
                    <WalletIcon :wallet-balance="walletBalance" />
                </router-link>
                <button class="row align-center flex-1 cursor-pointer no-wrap ellipsis" aria-label="wallet address" :style="{ margin: '0 24px', padding: '8px 16px', backgroundColor: $style.guyabano, border: `1px solid ${$style.ghostWhite}` }" @click="copyToClipboard(walletBalance.address)">
                    <div class="f-14-500-lg row align-center no-wrap ellipsis flex-1"><span class="ellipsis">{{walletBalance.address.substr(0, walletBalance.address.length - 5)}}</span><span v-if="isPopup">{{walletBalance.address.substr(-5)}}</span></div>
                    &nbsp;
                    <m-icon name="copy" stroke-opacity="0" :color="$style.lightGrey" />
                </button>
                <button class="flex" aria-label="qrcode" @click="openQR">
                    <m-icon name="qrcode" stroke-opacity="0" />
                </button>
            </div>
            <fragment v-if="isPopup && $q.screen.gt.xs">
                <router-link :to="{ name: 'Wallet' }" class="row" :style="{ margin: '16px 0 8px 0' }">
                    <div class="flex-1 text-left">
                        <div class="row align-center">
                            <div class="f-16-b-cfp">{{$utils.numberWithCommas(MonBigNumber(walletBalance.balance).toString(10))}} MON</div>
                        </div>
                    </div>
                    <m-space-v size="1" :style="{ backgroundColor: $style.ghostWhite, margin: '0 8px' }" />
                    <div class="flex-1 text-left">
                        <div class="row align-center">
                            <div class="f-16-b-cfp">{{$utils.numberWithCommas(MonBigNumber(totalMoncoin).toString(10))}} sMON</div>
                        </div>
                    </div>
                </router-link>
            </fragment>
            <router-link :to="{ name: 'Wallet' }" class="block" :style="{ margin: '16px 0' }" v-else>
                <div class="f-14-b-cfp">{{$utils.numberWithCommas(MonBigNumber(walletBalance.balance).toString(10))}} MON</div>
                <div class="f-14-b-cfp">{{$utils.numberWithCommas(MonBigNumber(totalMoncoin).toString(10))}} sMON</div>
            </router-link>
            <div class="row">
                <div class="flex-1 text-left">
                    <router-link :style="{ display: 'inline-block', textAlign: 'left' }" :to="{ name: 'Activity' }">
                        <div class="f-12-500-gt">{{ $t('template.label6') }}</div>
                        <div class="f-14-b-og">{{$utils.numberWithCommas(userStats.mon_point)}}P</div>
                    </router-link>
                </div>
                <m-space-v size="1" :style="{ backgroundColor: $style.ghostWhite, margin: '0 8px' }" />
                <div class="flex-1 text-left">
                    <router-link :style="{ display: 'inline-block', textAlign: 'left' }" :to="{ name: 'Activity' }">
                        <div class="f-12-500-gt">{{ $t('template.label7') }}</div>
                        <div class="f-14-b-sb">{{remainsVotingPower}} VP</div>
                    </router-link>
                </div>
                <div class="row flex-1" v-if="!isForeigner">
                    <m-space-v size="1" :style="{ backgroundColor: $style.ghostWhite, margin: '0 8px' }" />
                    <div class="flex-1 text-left">
                        <router-link :style="{ display: 'inline-block', textAlign: 'left' }" :to="{ name: 'Wallet', query: { tab: 'assets' }}">
                            <div class="f-12-500-gt">{{ $t('template.label8') }}</div>
                            <div class="row align-center">
                                <div class="f-14-b-drb">₩ {{$utils.numberWithCommas(rewardMoncoin)}}</div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="row align-center flex-1" :style="{ marginTop: '16px' }">
                <div class="row flex-1" v-if="activeSubscrpt && activeSubscrpt.remaining_days >= 0">
                    <m-button3 class="flex-1" :to="{ name: 'Activity' }" lined>{{ $t('template.label9') }}</m-button3>
                </div>
                <div class="row flex-1" v-else>
                    <m-button3 class="flex-1" :to="{ name: 'Checkout', params: { type: 'unlimited' } }" lined>{{ $t('template.label10') }}</m-button3>
                </div>
                <m-space-v size="8" />
                <div class="row flex-1" v-if="!clearAllFirstMission">
                    <m-button3 class="flex-1" :to="{ name: 'Activity' }" lined color="orange">🎉 {{ $t('template.label11') }} ({{clearFirstMissionCount}}/6)</m-button3>
                </div>
                <div class="row flex-1" v-else>
                    <m-button3 class="flex-1" :to="{ name: 'Activity' }" lined color="orange">🗓 {{ $t('template.label12') }}</m-button3>
                </div>
            </div>
        </div>
        <div v-if="showQR" :style="{ padding: '24px 12px 16px', backgroundColor: $style.guyabano }">
            <div class="row justify-center" :style="{ position: 'relative' }">
                <Qrcode :text="walletBalance.address" :style="{ display: 'flex', padding: '10px', backgroundColor: $style.white }" />
                <button class="f-14-b-gt" :style="{ position: 'absolute', top: 0, right: 0 }" @click="showQR = false">{{ $t('template.label13') }}</button>
            </div>
            <div class="f-12-500-lg" :style="{ marginTop: '18px', whiteSpace: 'pre-wrap', wordBreak: 'break-all' }">
                <span>{{`${$t('template.label14')}
${$t('template.label15')}`}}</span>
            </div>
        </div>
        <m-space-h size="1" :style="{ backgroundColor: $style.ghostWhite, margin: '16px 0' }" />
        <div :style="{ margin: '0 12px' }">
            <div :style="{ lineHeight: 1 }">
                <router-link class="row align-center inline" :to="{ name: 'Notification', query: { tab: 'all' } }">
                    <m-icon name="alarm_on" stroke-opacity="0" width="20" height="20" />
                    <div class="f-12-500-gt" :style="{ marginLeft: '8px' }">{{ $t('template.label16') }} <span class="f-12-b-gt">{{unreadPushCnt ? `+${unreadPushCnt}` : 0}}</span></div>
                </router-link>
            </div>
            <NotificationListItem :key="`noti-item-${item.noti_seq}`" v-for="item in notiItems" :style="{ marginTop: '8px' }" :noti-seq="item.noti_seq" />
            <div class="f-14-500-lg row align-center justify-center" v-if="!notiItemsTotal" :style="{ height: '110px' }"><span v-if="notiItemsTotal === 0">{{ $t('template.label17') }}</span></div>
        </div>

        <div class="side-menu-list" :style="{ margin: '16px 12px 0' }">
            <section>
                <h3>{{ $t('template.label18') }}</h3>
                <ul>
                    <li>
                        <router-link class="side-menu-button" :to="{ name: 'MyPage' }">
                            <m-icon name="user" stroke-opacity="0" width="20" height="20" />
                            <div class="f-12-500-gt">{{ $t('template.label19') }}</div>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="side-menu-button" :to="{ name: 'Wallet', query: { tab: 'assets' } }">
                            <m-icon name="wallet" stroke-opacity="0" width="20" height="20" />
                            <div class="f-12-500-gt">{{ $t('template.label20') }}</div>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="side-menu-button" :to="{ name: 'Activity' }">
                            <m-icon name="ant" stroke-opacity="0" width="20" height="20" />
                            <div class="f-12-500-gt">{{ $t('template.label21') }}</div>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="side-menu-button" :to="{ name: 'Social', query: { tab: 'follower' } }">
                            <m-icon name="channel" stroke-opacity="0" width="20" height="20" />
                            <div class="f-12-500-gt">{{ $t('template.label22') }}</div>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="side-menu-button" :to="{ name: 'Voting' }">
                            <m-icon name="vote" stroke-opacity="0" width="20" height="20" />
                            <div class="f-12-500-gt">{{ $t('template.label23') }}</div>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="side-menu-button" :to="{ name: 'LuckyBox' }">
                            <m-icon name="luckybox" stroke-opacity="0" width="20" height="20" />
                            <div :class="['notable-icon', { 'on': userInfoTotal.luckybox_cnt > 0 }]">
                                <div class="f-12-500-gt">{{ $t('template.label24') }}</div>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="side-menu-button" :to="{ name: 'NftShop', query: { tab: 'progress' } }">
                            <m-icon name="image" stroke-opacity="0" width="20" height="20" />
                            <div class="f-12-500-gt">{{ $t('template.label25') }}</div>
                        </router-link>
                    </li>
                </ul>
            </section>
            <section :style="{ marginTop: '16px' }">
                <h3>{{ $t('template.label26') }}</h3>
                <ul>
                    <li>
                        <router-link class="side-menu-button" :to="{ name: 'MyStocks', query: { tab: 'myStocks' } }">
                            <m-icon name="group" stroke-opacity="0" width="20" height="20" />
                            <div class="f-12-500-gt">{{ $t('template.label27') }}</div>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="side-menu-button" :to="{ name: 'SubscriptionStatus' }">
                            <m-icon name="flash" stroke-opacity="0" width="20" height="20" />
                            <div class="f-12-500-gt">{{ $t('template.label28') }}</div>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="side-menu-button" :to="{ name: 'BlashManage' }">
                            <m-icon name="write" stroke-opacity="0" width="20" height="20" />
                            <div class="f-12-500-gt">{{ $t('template.label29') }}</div>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="side-menu-button" :to="{ name: 'Archive' }">
                            <m-icon name="time" stroke-opacity="0" width="20" height="20" />
                            <div class="f-12-500-gt">{{ $t('template.label30') }}</div>
                        </router-link>
                    </li>
                </ul>
            </section>
            <section :style="{ marginTop: '16px' }">
                <h3>{{ $t('template.label31') }}</h3>
                <ul>
                    <li>
                        <a href="https://modurich.notion.site/modurich/991b4b1517df49fcab3039370cbcf8ff" class="side-menu-button" target="_blank" rel="noopener noreferrer nofollow">
                            <m-icon name="info" stroke-opacity="0" width="20" height="20" />
                            <div class="f-12-500-gt">{{ $t('template.label32') }}</div>
                        </a>
                    </li>
                    <li>
                        <button class="side-menu-button" @click="showQuickGuide">
                            <m-icon name="question" stroke-opacity="0" width="20" height="20" />
                            <div class="f-12-500-gt">{{ $t('template.label33') }}</div>
                        </button>
                    </li>
                    <li>
                        <router-link class="side-menu-button" :to="{ name: 'Event' }">
                            <m-icon name="event" stroke-opacity="0" width="20" height="20" />
                            <div class="f-12-500-gt">{{ $t('template.label34') }}</div>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="side-menu-button" :to="{ name: 'CustomerCenter', query: { tab: 'inquiry' } }">
                            <m-icon name="cs" stroke-opacity="0" width="20" height="20" />
                            <div class="f-12-500-gt">{{ $t('template.label35') }}</div>
                        </router-link>
                    </li>
                </ul>
            </section>
        </div>
        <div :style="{ margin: '16px 12px 0' }">
            <m-button3 :style="{ width: '100%' }" @click="toggleTutorialHome" lined>
                <div class="f-14-b-gt">{{ $t('template.label36') }}</div>
                <m-icon name="switch" width="16" height="16" stroke-opacity="0" :style="{ marginLeft: '4px' }" />
            </m-button3>
        </div>
        <m-space-h size="120" />
    </div>
</template>

<script>
import _ from 'lodash';
import { mapState, mapGetters, mapActions } from 'vuex';
import WalletIcon from 'pages/parts/wallet/WalletIcon.vue';
import UserSimpleInfo from 'pages/parts/common/UserSimpleInfo';
import Qrcode from 'pages/parts/common/Qrcode';
import NotificationListItem from 'pages/parts/notification/NotificationListItem';
import { getUserInfo, listNotiHistory } from 'apis/user';

export default {
    name: 'SideMenu',
    components: {
        WalletIcon,
        UserSimpleInfo,
        NotificationListItem,
        Qrcode
    },
    props: {
        isPopup: {
            type: Boolean,
            default: function() {
                return false;
            }
        }
    },
    data() {
        return {
            notiItems: [],
            notiItemsTotal: null,
            showQR: false,
            userInfo: {},
            userStats: {},
            isForeigner: false
        };
    },
    computed: {
        ...mapState({
            userInfoTotal: state => state.auth.userInfoTotal,
            // userInfo: state => state.auth.userInfo,
            // userStats: state => state.auth.userStats,
            unreadPushCnt: state => state.auth.unreadPushCnt,
            activeSubscrpt: state => state.auth.activeSubscrpt,
            remainsVotingPower: state => state.auth.votingPower.remains,
            walletBalance: state => state.wallet.walletBalance,
            div_code: state => state.common.div_code
        }),
        ...mapGetters({
            totalMoncoin: 'auth/totalMoncoin',
            rewardMoncoin: 'auth/rewardMoncoin',
            isForeignerMember: 'auth/isForeignerMember'
        }),
        // 가입미션 전체완료여부
        clearAllFirstMission() {
            try {
                const { email, follow, nick_name, post, push, reply } = this.userStats.first_mission;
                // push 는 원래 웹푸시였지만 보팅을 이 용도로 쓰라고함
                return email && follow && nick_name && post && push && reply;
            } catch (err) {}
            return false;
        },
        // 가입미션 클리어 갯수
        clearFirstMissionCount() {
            try {
                const { email, follow, nick_name, post, push, reply } = this.userStats.first_mission;
                // push 는 원래 웹푸시였지만 보팅을 이 용도로 쓰라고함
                return email + follow + nick_name + post + push + reply;
            } catch (err) {}
            return 0;
        }
    },
    beforeCreate() {
    },
    async created() {
    },
    mounted() {
        this.getUserInfo();
        this.getListNotiHistory();
        this.$store.dispatch('auth/getVotingPower', { options: { ignoreLoading: true, ignoreAlert: true } });
        this.$store.dispatch('wallet/refreshWalletBalance', { options: { ignoreLoading: true, ignoreAlert: true } });
        // this.$store.dispatch('auth/refreshUserInfo', { options: { ignoreLoading: true, ignoreAlert: true } });
        if (this.activeSubscrpt === null) {
            this.$store.dispatch('auth/refreshActiveSubscrpt', { options: { ignoreLoading: true, ignoreAlert: true } });
        }
    },
    methods: {
        ...mapActions({
            hideSidemenu: 'common/hideSidemenu',
            toggleTutorialHome: 'common/toggleTutorialHome'
        }),
        // 유저 정보 가져오기
        async getUserInfo() {
            try {
                const userInfo = await getUserInfo({ user_id: this.$store.state.auth.userInfo.user_id, div_code: this.div_code }, { ignoreLoading: true, ignoreAlert: true });
                const { user_info, user_stats } = userInfo;
                this.userInfo = user_info;
                this.userStats = user_stats;
                this.isForeigner = await this.isForeignerMember({ userInfo: userInfo });
            } catch (err) {
                console.error(err);
            }
        },
        logout() {
            this.$store.dispatch('auth/logout', null);
        },
        async getListNotiHistory() {
            try {
                const body = {
                    paging: {
                        offset: 0,
                        size: 1
                    },
                    order_by: {
                        column: 0,
                        sort: 1
                    },
                    filter: {
                        type: 0,
                        is_viewed: 2
                    }
                };
                const { noti_history, total_cnt, unread_cnt } = await listNotiHistory(body, { ignoreLoading: true });
                await this.$store.dispatch('auth/updateUserInfo', { unread_cnt });
                await this.$store.dispatch('auth/setNotiItems', noti_history);
                this.notiItems = noti_history;
                this.notiItemsTotal = total_cnt;
            } catch (err) {
                console.error('getListNotiHistory err', err);
            }
        },
        // 첫방문 가이드
        async showQuickGuide() {
            this.$store.dispatch('common/showQuickGuide', { parent: this });
        },
        // 지갑생성
        createWallet() {
            this.$router.push({ name: 'RegisterWallet' });
        },
        // 복사
        copyToClipboard(text) {
            this.$utils.copyToClipboard(text);
            this.$q.notify(this.$t('methods.notify1'));
        },
        openQR() {
            this.showQR = true;
        }
    }
};
</script>

<style lang="scss" scoped>
.side-menu {
    .top-sticky {
        position: static;
        position: sticky;
        top: 0;
        background: white;
        z-index: 999999;
    }
}
</style>
