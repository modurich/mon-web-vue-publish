/* routes.js */
import { needLogin, newAlert } from 'utils/dialog';
import { getInsightComment } from 'apis/insight';
import { getPostComment } from 'apis/post';
import { getBlashReview } from 'apis/blash';
import { i18n, lang as currentLang, allowedLangList } from 'boot/i18n';

/* 현재 SSR 모드에서 next 또는 preFetch 에서 redirect 를 하게되면 서버에서
(node:43979) UnhandledPromiseRejectionWarning: undefined
(node:43979) UnhandledPromiseRejectionWarning: Unhandled promise rejection.
This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 38)
와 같은 에러가 발생한다. vue-router 측에서 이 부분에 대한 해결이 아직 이루어지지 않은 상태라 해결이 어려운 상황.
route와 prefetch에서 동시에 작업하게 될 경우 서버와 클라이언트간의 Virtual Dom 간에 차이가 벌어져서 화면에 보이는 문제가 발생한다.
이 문제가 해결되기 전에는 어떻게 하기 힘들듯...

이슈: https://github.com/vuejs/vue-router/issues/3089
PR: https://github.com/vuejs/vue-router/pull/3047
누군가가 pr 올려놓은게 머지가 된다면 해결될까 싶다.(2020.02.17)
 */

export const getRoutes = ({ store, ssrContext }) => {
    // 회원 가입시 정상 가입플로우를 벗어나면 강제로 첫 가입페이지로
    const requireJoinAuth = (to, from, next) => {
        // console.log('requireJoinAuth', from, to);
        if (ssrContext) {
            return next({ name: 'JoinGuide' });
        }
        if (to.name === 'JoinForm' && to.params && to.params.authInfo) return next();
        if (from.name === 'JoinForm' && to.name === 'JoinComplete') return next();
        return next({ name: 'JoinGuide' });
    };

    // 로그인이 필요한 페이지인데 접근하면 강제로 로그인 페이지로
    const requireLoginAuth = (to, from, next) => {
        // console.log('isLogin', store.state.auth.isLogin);
        // console.log('from.path', from.path);
        if (ssrContext) {
            // console.log('ssrContext', to, from);
            return next({ name: 'Login' });
        }
        // console.log('ssrContext', to, from);
        try {
            if (store.state.auth.isLogin === false) {
                if (from.matched.length > 0) {
                    // 서버에서는 이 라우팅을 타서 실제로 봇으로의 리턴은 로그인페이지가 리턴이 된다.
                    // 하지만 클라이언트에 로딩되면서 한번 더 이 라우팅에 진입하게되는데 URL이 Redirect 된 상태는 아니기 때문에 충돌이 발생한다.
                    // 때문에 이 상태를 확인하기 위해 from.matched의 길이를 체크
                    next(false);
                    return needLogin(to.fullPath);
                } else {
                    return next({ name: 'Login', query: { returnUrl: to.fullPath } });
                }
            } else if (to.name === 'MyPage' && store.state.auth.userInfo.user_id) {
                return next({ name: 'MyPageOthers', params: { userId: store.state.auth.userInfo.user_id }, query: { ...to.query } });
            }
        } catch (err) {
            console.error(err);
        }
        return next();
    };

    // 전문가 계약이 필요한 페이지인데 전문가계약이 없을때
    const requireExpertAuth = (to, from, next) => {
        if (ssrContext) {
            return next({ name: 'Login' });
        }
        try {
            if (store.state.auth.isLogin === false) {
                if (from.matched.length > 0) {
                    next(false);
                    return needLogin(to.fullPath);
                } else {
                    return next({ name: 'Login', query: { returnUrl: to.fullPath } });
                }
            } else if (!store.getters['auth/isForeignerMember'] && store.state.auth.userInfo.user_type !== 2) {
                store.dispatch('auth/doContract');
                return next({ name: 'Home' });
            }
        } catch (err) {
            console.error(err);
        }
        return next();
    };

    // OTP 등록이 필요한 페이지일때
    const requireOtp = async(to, from, next) => {
        if (ssrContext) {
            return next({ name: 'Login' });
        }
        try {
            if (store.state.auth.isLogin === false) {
                if (from.matched.length > 0) {
                    next(false);
                    return needLogin(to.fullPath);
                } else {
                    return next({ name: 'Login', query: { returnUrl: to.fullPath } });
                }
            } else if (store.state.wallet.walletBalance.is_otp === null) {
                await store.dispatch('wallet/getWalletBalance');
            }
            if (store.state.wallet.walletBalance.is_otp === false) {
                store.dispatch('wallet/registOtp', { parent: this });
                return next({ name: 'Wallet' });
            }
        } catch (err) {
            console.error(err);
        }
        return next();
    };

    // 비로그인 사용자만 접근가능한 페이지인데 접근하면 강제로 홈화면으로
    const requireGuestAuth = (to, from, next) => {
        if (store.state.auth.isLogin === true) {
            return next({ name: 'Home' });
        }
        return next();
    };

    // 지갑을 가진사람만
    const requireWallet = async(to, from, next) => {
        if (store.state.auth.isLogin === false) {
            if (from.matched.length > 0) {
                next(false);
                return needLogin(to.fullPath);
            } else {
                return next({ name: 'Login', query: { returnUrl: to.fullPath } });
            }
        } else {
            if (store.state.wallet.walletBalance.wallet_type === 0) {
                await store.dispatch('wallet/getWalletBalance');
            }
            if (store.state.wallet.walletBalance.wallet_type === 0) {
                next({ name: 'Wallet' });
                return newAlert({ title: i18n.t('routeModalTitle1'), content: i18n.t('routeModalContent1') });
            }
        }
        return next();
    };

    // 외부지갑을 가진사람만
    const requireWalletOnlyExternal = async(to, from, next) => {
        if (store.state.auth.isLogin === false) {
            if (from.matched.length > 0) {
                next(false);
                return needLogin(to.fullPath);
            } else {
                return next({ name: 'Login', query: { returnUrl: to.fullPath } });
            }
        } else {
            if (store.state.wallet.walletBalance.wallet_type === 0) {
                await store.dispatch('wallet/getWalletBalance');
            }
            if (store.state.wallet.walletBalance.wallet_type === 0) {
                next({ name: 'Wallet' });
                return newAlert({ title: i18n.t('routeModalTitle1'), content: i18n.t('routeModalContent1') });
            } else if (store.state.wallet.walletBalance.wallet_type === 1) {
                next({ name: 'Wallet' });
                return newAlert({ title: i18n.t('routeModalTitle1'), content: i18n.t('routeModalContent2') });
            }
        }
        return next();
    };

    // 지갑을 가지고 있고 항상 OTP도 필수일때
    const requireWalletAndOtp = async(to, from, next) => {
        if (store.state.auth.isLogin === false) {
            if (from.matched.length > 0) {
                next(false);
                return needLogin(to.fullPath);
            } else {
                return next({ name: 'Login', query: { returnUrl: to.fullPath } });
            }
        } else {
            if (store.state.wallet.walletBalance.wallet_type === 0) {
                await store.dispatch('wallet/getWalletBalance');
            }
            if (store.state.wallet.walletBalance.wallet_type === 0) {
                next({ name: 'Wallet' });
                return newAlert({ title: i18n.t('routeModalTitle1'), content: i18n.t('routeModalContent1') });
            }
        }
        return requireOtp(to, from, next);
    };

    // 지갑을 가지고있고 KAS지갑이면 OTP 등록여부가 필수일때
    const requireWalletAndKasOtp = async(to, from, next) => {
        if (store.state.auth.isLogin === false) {
            if (from.matched.length > 0) {
                next(false);
                return needLogin(to.fullPath);
            } else {
                return next({ name: 'Login', query: { returnUrl: to.fullPath } });
            }
        } else {
            if (store.state.wallet.walletBalance.wallet_type === 0) {
                await store.dispatch('wallet/getWalletBalance');
            }
            if (store.state.wallet.walletBalance.wallet_type === 0) {
                next({ name: 'Wallet' });
                return newAlert({ title: i18n.t('routeModalTitle1'), content: i18n.t('routeModalContent1') });
            }
        }
        if (store.state.wallet.walletBalance.wallet_type === 1) {
            return requireOtp(to, from, next);
        }
        return next();
    };

    // 몬스탁 지갑과 OTP를 가진사람만(외부지갑은 이용불가)
    const requireMonWalletAndOtp = async(to, from, next) => {
        if (store.state.auth.isLogin === false) {
            if (from.matched.length > 0) {
                next(false);
                return needLogin(to.fullPath);
            } else {
                return next({ name: 'Login', query: { returnUrl: to.fullPath } });
            }
        } else {
            if (store.state.wallet.walletBalance.wallet_type === 0) {
                await store.dispatch('wallet/getWalletBalance');
            }
            if (store.state.wallet.walletBalance.wallet_type === 0) {
                return next({ name: 'Wallet' });
            } else if (store.state.wallet.walletBalance.wallet_type !== 1) {
                next({ name: 'Wallet' });
                return newAlert({ title: i18n.t('routeModalTitle2'), content: i18n.t('routeModalContent3') });
            }
        }
        return requireOtp(to, from, next);
    };

    const routes = [
        {
            path: `/:lang(${allowedLangList.join('|')})`,
            component: () => import('layouts/MonstockLayout.vue'),
            children: [
                { name: 'Home', path: '', component: () => import(/* webpackChunkName: "Home" */ 'pages/Home.vue'), props: true },
                { path: 'Home', component: () => import(/* webpackChunkName: "Home" */ 'pages/Home.vue') },
                { name: 'Login', path: 'Login', component: () => import(/* webpackChunkName: "Login" */ 'pages/Login.vue'), beforeEnter: requireGuestAuth },
                { name: 'JoinGuide', path: 'JoinGuide', component: () => import(/* webpackChunkName: "JoinGuide" */ 'pages/JoinGuide.vue'), beforeEnter: requireGuestAuth },
                { name: 'Intro', path: 'Intro', component: () => import(/* webpackChunkName: "Intro" */ 'pages/Intro.vue'), props: true },
                { name: 'JoinUs', path: 'JoinUs', component: () => import(/* webpackChunkName: "Intro" */ 'pages/Intro.vue'), props: true },
                { name: 'JoinException', path: 'JoinException', component: () => import(/* webpackChunkName: "JoinException" */ 'pages/JoinException.vue'), props: true },
                { name: 'JoinForm', path: 'JoinForm', component: () => import(/* webpackChunkName: "JoinForm" */ 'pages/JoinForm.vue'), beforeEnter: requireJoinAuth, props: true },
                { name: 'JoinFormGlobal', path: 'JoinFormGlobal', component: () => import(/* webpackChunkName: "JoinFormGlobal" */ 'pages/JoinFormGlobal.vue'), props: true },
                { name: 'JoinComplete', path: 'JoinComplete', component: () => import(/* webpackChunkName: "JoinComplete" */ 'pages/JoinComplete.vue'), beforeEnter: requireJoinAuth, props: true },
                { name: 'FindPassword', path: 'FindPassword', component: () => import(/* webpackChunkName: "FindPassword" */ 'pages/FindPassword.vue'), props: true },
                { name: 'PasswordChange', path: 'PasswordChange', component: () => import('pages/PasswordChange.vue'), beforeEnter: requireLoginAuth, props: true },
                { name: 'CustomerCenter', path: 'CustomerCenter', component: () => import('pages/CustomerCenter.vue'), props: true },
                // { name: 'UseGuide', path: 'UseGuide', component: () => import('pages/UseGuide.vue'), props: true },
                { name: 'Insight', path: 'Insight', component: () => import(/* webpackChunkName: "Insight" */ 'pages/Insight.vue'), props: true },
                { name: 'InsightDetail', path: 'Insight/:insightSeq', component: () => import('pages/InsightDetail.vue'), props: true },
                { name: 'InsightReply',
                    path: 'InsightReply/:replySeq',
                    beforeEnter: async(to, from, next) => {
                        try {
                            const { header, reply } = await getInsightComment({ reply_seq: to.params.replySeq });
                            return next({ name: 'InsightDetail', params: { insightSeq: reply.insight_seq } });
                        } catch (err) {
                            console.log('InsightReply', err);
                        }
                        next(false);
                    }
                },
                { name: 'OpinionDetail', path: 'Opinion/:insightSeq', component: () => import('pages/OpinionDetail.vue'), props: true },
                { name: 'OpinionPreview', path: 'Opinion/Preview/:insightSeq', component: () => import('pages/OpinionPreview.vue'), props: true },
                { name: 'Post', path: 'Post', component: () => import('pages/Post.vue'), props: true },
                { name: 'PostDetail', path: 'Post/:postSeq', component: () => import('pages/PostDetail.vue'), props: true },
                { name: 'PostReply',
                    path: 'PostReply/:replySeq',
                    beforeEnter: async(to, from, next) => {
                        try {
                            const { header, reply } = await getPostComment({ reply_seq: to.params.replySeq });
                            return next({ name: 'PostDetail', params: { postSeq: reply.post_seq } });
                        } catch (err) {
                            console.log('PostReply', err);
                        }
                        next(false);
                    }
                },

                // 거버넌스
                { name: 'Governance', path: 'Governance', component: () => import('pages/Governance.vue'), props: true },
                // 거버넌스 - 스테이킹
                { name: 'StakingDeposit', path: 'Governance/StakingDeposit', component: () => import('pages/StakingDeposit.vue'), props: true, beforeEnter: requireWalletOnlyExternal },
                { name: 'StakingWithdraw', path: 'Governance/StakingWithdraw', component: () => import('pages/StakingWithdraw.vue'), props: true, beforeEnter: requireWalletOnlyExternal },
                { name: 'StakingWithdrawList', path: 'Governance/StakingWithdrawList', component: () => import('pages/StakingWithdrawList.vue'), props: true, beforeEnter: requireWalletOnlyExternal },
                { name: 'StakingTransactionApprove', path: 'Governance/StakingTransactionApprove', component: () => import('pages/StakingTransactionApprove.vue'), props: true, beforeEnter: requireWalletOnlyExternal },
                // 거버넌스 - 의제 투표
                { name: 'AgendaDetail', path: 'Governance/AgendaDetail/:agendaSeq', component: () => import('pages/AgendaDetail.vue'), props: true },
                { name: 'WriteAgenda', path: 'Governance/WriteAgenda/:type', component: () => import('pages/WriteAgenda.vue'), props: true, beforeEnter: requireLoginAuth },

                { name: 'Archive', path: 'Archive', component: () => import('pages/Archive.vue'), beforeEnter: requireLoginAuth },
                { name: 'FindStocks', path: 'FindStocks', component: () => import('pages/FindStocks.vue') },
                { name: 'FindCoins', path: 'FindCoins', component: () => import('pages/FindCoins.vue') },
                { name: 'StocksInfo', path: 'Stocks/:issueCode', component: () => import('pages/Stocks.vue'), props: true },
                { name: 'CoinsInfo', path: 'Coins/:issueCode', component: () => import('pages/Coins.vue'), props: true },
                { name: 'MyStocks', path: 'MyStocks', component: () => import('pages/MyStocks.vue'), props: true, beforeEnter: requireLoginAuth },
                { name: 'MyStocksAdd', path: 'MyStocks/Add', component: () => import('pages/MyStocksAdd.vue'), beforeEnter: requireLoginAuth },
                { name: 'MyStocksRemove', path: 'MyStocks/Remove', component: () => import('pages/MyStocksRemove.vue'), beforeEnter: requireLoginAuth },
                { name: 'MyStocksOrderEdit', path: 'MyStocks/OrderEdit', component: () => import('pages/MyStocksOrderEdit.vue'), beforeEnter: requireLoginAuth },
                { name: 'MyPage', path: 'MyPage', component: () => import('pages/MyPage.vue'), beforeEnter: requireLoginAuth, props: true },
                { name: 'MyPageOthers', path: 'MyPage/:userId', component: () => import('pages/MyPage.vue'), props: true },
                { name: 'MemberProfile', path: 'MemberProfile', component: () => import('pages/MemberProfile.vue'), beforeEnter: requireLoginAuth },
                { name: 'WriteInsightGuide', path: 'WriteInsightGuide', component: () => import('pages/WriteInsightGuide.vue'), beforeEnter: requireLoginAuth, props: true },
                { name: 'WriteInsight', path: 'WriteInsight', component: () => import('pages/WriteInsight.vue'), beforeEnter: requireLoginAuth, props: true },
                // { name: 'WriteOpinion', path: 'WriteOpinion', component: () => import('pages/WriteOpinion.vue'), beforeEnter: requireLoginAuth, props: true },
                // { name: 'ModifyOpinion', path: 'WriteOpinion/:insightSeq', component: () => import('pages/WriteOpinion.vue'), beforeEnter: requireLoginAuth, props: true },
                { name: 'WriteOpinion', path: 'WriteOpinion', redirect: { name: 'Error404' } },
                { name: 'ModifyOpinion', path: 'WriteOpinion/:insightSeq', redirect: { name: 'Error404' } },
                { name: 'ModifyPost', path: 'WritePost/:postSeq', component: () => import('pages/WritePost.vue'), beforeEnter: requireLoginAuth, props: true },
                { name: 'WritePost', path: 'WritePost', component: () => import('pages/WritePost.vue'), beforeEnter: requireLoginAuth, props: true },
                { name: 'TempSave', path: 'TempSave', component: () => import('pages/TempSave.vue'), beforeEnter: requireLoginAuth },
                { name: 'CheckOpinion', path: 'CheckOpinion', component: () => import('pages/CheckOpinion.vue'), beforeEnter: requireLoginAuth },
                // 활동내역
                { name: 'Activity', path: 'Activity', component: () => import('pages/Activity.vue'), beforeEnter: requireLoginAuth },

                // 몬스탁 멤버십 취소
                { name: 'SubscriptInfo', path: 'SubscriptInfo', component: () => import('pages/SubscriptInfo.vue'), beforeEnter: requireLoginAuth },
                { name: 'CancelSubscriptRequest', path: 'CancelSubscriptRequest', component: () => import('pages/CancelSubscriptRequest.vue'), beforeEnter: requireLoginAuth },

                // 종목추천 관련
                { name: 'Blash', path: 'Blash', component: () => import('pages/Blash.vue') },
                { name: 'WriteBlashGuide', path: 'WriteBlashGuide', component: () => import('pages/WriteBlashGuide.vue'), beforeEnter: requireLoginAuth },
                { name: 'WriteBlash', path: 'WriteBlash', component: () => import('pages/WriteBlash.vue'), beforeEnter: requireExpertAuth, props: true },
                { name: 'BlashPreview', path: 'Blash/Preview/:blashSeq', component: () => import('pages/BlashDetail.vue'), props: true },
                { name: 'BlashDetail', path: 'Blash/:blashSeq', component: () => import('pages/BlashDetail.vue'), props: true },
                { name: 'BlashReview',
                    path: 'BlashReview/:reviewSeq',
                    beforeEnter: async(to, from, next) => {
                        try {
                            const { header, review } = await getBlashReview({ review_seq: to.params.reviewSeq });
                            return next({ name: 'BlashDetail', params: { blashSeq: review.blash_seq } });
                        } catch (err) {
                            console.log('BlashReview', err);
                        }
                        next(false);
                    }
                },
                { name: 'BlashManage', path: 'BlashManage', component: () => import('pages/BlashManage.vue'), beforeEnter: requireLoginAuth },
                { name: 'BlashListManage', path: 'BlashListManage', component: () => import('pages/BlashListManage.vue'), beforeEnter: requireLoginAuth },
                { name: 'WriteBlashSignalBuy', path: 'WriteBlashSignalBuy/:blashSeq', component: () => import('pages/WriteBlashSignalBuy.vue'), beforeEnter: requireLoginAuth, props: true },
                { name: 'WriteBlashSignalHold', path: 'WriteBlashSignalHold/:blashSeq', component: () => import('pages/WriteBlashSignalHold.vue'), beforeEnter: requireLoginAuth, props: true },
                { name: 'WriteBlashSignalSell', path: 'WriteBlashSignalSell/:blashSeq', component: () => import('pages/WriteBlashSignalSell.vue'), beforeEnter: requireLoginAuth, props: true },
                { name: 'BlashSignalDetail', path: 'BlashSignal/:signalSeq', component: () => import('pages/BlashSignalDetail.vue') },
                { name: 'SubscriptionStatus', path: 'SubscriptionStatus', component: () => import('pages/SubscriptionStatus.vue'), beforeEnter: requireLoginAuth },

                { name: 'PlayerRank', path: 'PlayerRank', component: () => import('pages/PlayerRank.vue'), props: true },
                { name: 'Social', path: 'Social', component: () => import('pages/Social.vue'), beforeEnter: requireLoginAuth, props: true },
                { name: 'Notification', path: 'Notification', component: () => import('pages/Notification.vue'), beforeEnter: requireLoginAuth, props: true },
                { name: 'NotificationSetting', path: 'NotificationSetting', component: () => import('pages/NotificationSetting.vue'), beforeEnter: requireLoginAuth, props: true },
                { name: 'PayHistory', path: 'PayHistory', component: () => import('pages/PayHistory.vue'), beforeEnter: requireLoginAuth, props: true },
                { name: 'PayComplete', path: 'PayComplete/:orderNo', component: () => import('pages/PayComplete.vue'), beforeEnter: requireLoginAuth, props: true },

                // 결제내역 상세(카드&차이)
                { name: 'PayDetail', path: 'PayDetail/:orderNo', component: () => import('pages/PayDetail.vue'), beforeEnter: requireLoginAuth, props: true },
                // 결제내역 상세(무통장)
                { name: 'DepositHistoryDetail', path: 'DepositHistoryDetail/:orderNo', component: () => import('pages/DepositHistoryDetail.vue'), beforeEnter: requireLoginAuth, props: true },

                // 지갑
                { name: 'Wallet', path: 'Wallet', component: () => import('pages/Wallet.vue'), beforeEnter: requireLoginAuth, props: true },
                { name: 'RegisterWallet', path: 'RegisterWallet', component: () => import('pages/RegisterWallet.vue'), beforeEnter: requireLoginAuth, props: true },
                { name: 'Swap', path: 'Swap', component: () => import('pages/Swap.vue'), beforeEnter: requireOtp, props: true },
                { name: 'LockupInfo', path: 'LockupInfo', component: () => import('pages/LockupInfo.vue'), beforeEnter: requireLoginAuth, props: true },
                { name: 'RegistOtp', path: 'RegistOtp', component: () => import('pages/RegistOtp.vue'), beforeEnter: requireLoginAuth, props: true },
                { name: 'SendCoin', path: 'SendCoin', component: () => import('pages/SendCoin.vue'), beforeEnter: requireMonWalletAndOtp, props: true },
                { name: 'Nft', path: 'Nft/:userId', component: () => import('pages/Nft.vue'), props: true },
                { name: 'NftDetail', path: 'NftDetail/:contract/:tokenId', component: () => import('pages/NftDetail.vue'), props: true },
                { name: 'SendNft', path: 'SendNft/:tokenId', component: () => import('pages/SendNft.vue'), beforeEnter: requireWalletAndKasOtp, props: true },
                { name: 'BurnNft', path: 'BurnNft/:tokenId', component: () => import('pages/BurnNft.vue'), beforeEnter: requireWalletAndKasOtp, props: true },
                { name: 'NftShop', path: 'NftShop', component: () => import('pages/NftShop.vue'), props: true },
                { name: 'NftShopDetail', path: 'NftShop/:nftGoodsSeq', component: () => import('pages/NftShopDetail.vue'), props: true },
                { name: 'NftBidDeposit', path: 'NftBidDeposit/:nftGoodsSeq', component: () => import('pages/NftBidDeposit.vue'), beforeEnter: requireWalletAndKasOtp, props: true },
                { name: 'NftBidPayBalance', path: 'NftBidPayBalance/:nftGoodsSeq', component: () => import('pages/NftBidPayBalance.vue'), beforeEnter: requireWalletAndKasOtp, props: true },

                // 프리세일
                // { name: 'PreSale', path: 'PreSale', component: () => import('src/pages/PreSale.vue'), props: true },
                // { name: 'PrivateSale', path: 'PrivateSale', component: () => import('src/pages/PrivateSale.vue'), props: true },

                // 보팅
                { name: 'Voting', path: 'Voting', component: () => import('pages/Voting.vue'), beforeEnter: requireLoginAuth, props: true },

                // 이벤트
                { name: 'Event', path: 'Event', component: () => import('pages/Event.vue'), props: true },

                // 럭키박스
                { name: 'LuckyBox', path: 'LuckyBox', component: () => import('pages/LuckyBox.vue'), beforeEnter: requireLoginAuth, props: true },

                { name: 'SendMoneyGuide', path: 'SendMoneyGuide/:orderNo', component: () => import('pages/SendMoneyGuide.vue'), beforeEnter: requireLoginAuth, props: true },
                { name: 'Withdraw', path: 'Withdraw', component: () => import('pages/Withdraw.vue'), beforeEnter: requireLoginAuth, props: true },
                { name: 'WithdrawalSetting', path: 'WithdrawalSetting', component: () => import('pages/WithdrawalSetting.vue'), beforeEnter: requireLoginAuth, props: true },
                { name: 'Checkout', path: 'Checkout/:type', component: () => import('pages/Checkout.vue'), beforeEnter: requireLoginAuth, props: true },
                { name: 'Terms', path: 'Terms/:type', component: () => import('pages/Terms.vue'), props: true },
                { name: 'PassCallback',
                    path: 'PassCallback',
                    beforeEnter: async(to, from, next) => {
                        try {
                            const { opener } = window;
                            if (opener && opener.document && (opener.document.domain.match(/monstock/i) || opener.document.domain.match(/localhost/i))) {
                                // 팝업창인 상태라면
                                opener.$router.push(to);
                                return window.close();
                            }
                            if (to.query.code && to.query.state) {
                                if (to.query.state.startsWith('1')) { // 가입플로우라면
                                    await store.dispatch('auth/resolvePassJoin', { passCode: to.query.code });
                                } else if (to.query.state.startsWith('2')) { // 로그인플로우라면
                                    const isAutoLogin = to.query.state.endsWith('1');
                                    await store.dispatch('auth/resolvePassLogin', { passCode: to.query.code, isAutoLogin });
                                }
                            } else {
                                next({ name: 'Home' });
                            }
                        } catch (err) {}
                    }
                },
                { name: 'ChaiCallback',
                    path: 'ChaiCallback',
                    beforeEnter: async(to, from, next) => {
                        try {
                            const completeResponse = await store.dispatch('pay/completePayment', {
                                pay_order_no: to.query.merchant_uid
                            });
                            console.log('completeResponse', completeResponse);
                            // 팝업창으로 뜨지 않았거나 부모창을 인식할 수 없는 상태라면
                            next({ name: 'PayComplete', params: { orderNo: to.query.merchant_uid } });
                        } catch (err) {
                            console.error(err);
                        }
                    }
                },
                { name: 'TossCallback',
                    path: 'TossCallback',
                    beforeEnter: async(to, from, next) => {
                        try {
                            const { opener } = window;
                            if (opener && opener.document && (opener.document.domain.match(/monstock/i) || opener.document.domain.match(/localhost/i)) && opener.getTossCallback) {
                                // 팝업창인 상태라면
                                opener.getTossCallback(to.query);
                                return window.close();
                            } else {
                                // 팝업창으로 뜨지 않았거나 부모창을 인식할 수 없는 상태라면
                                next({ name: 'PayComplete', params: { orderNo: to.query.orderNo } });
                            }
                        } catch (err) {
                            console.error(err);
                        }
                    }
                },
                { name: 'TossCancelCallback',
                    path: 'TossCancelCallback',
                    beforeEnter: async(to, from, next) => {
                        try {
                            const { opener } = window;
                            if (opener && opener.document && (opener.document.domain.match(/monstock/i) || opener.document.domain.match(/localhost/i))) {
                                // 팝업창인 상태라면
                                opener.getTossCallback({ status: 'PAY_CANCEL' });
                                return window.close();
                            } else {
                                next({ name: 'Home' });
                            }
                        } catch (err) {
                            console.error(err);
                        }
                    }
                },
                // { name: 'NaverLoginCallback', path: 'NaverLoginCallback', component: () => import('pages/parts/common/NaverLoginCallback.vue'), props: true },
                // { name: 'KakaoLoginCallback', path: 'KakaoLoginCallback', component: () => import('pages/parts/common/KakaoLoginCallback.vue'), props: true },
                // { name: 'FacebookLoginCallback', path: 'FacebookLoginCallback', component: () => import('pages/parts/common/FacebookLoginCallback.vue'), props: true },
                // { name: 'GoogleLoginCallback', path: 'GoogleLoginCallback', component: () => import('pages/parts/common/GoogleLoginCallback.vue'), props: true },
                { name: 'VerifyEmail', path: 'VerifyEmail', component: () => import('pages/VerifyEmail.vue'), props: true },
                { name: 'Reload', path: 'Reload', component: () => import('pages/Reload.vue') },
                { name: 'KlipTest', path: 'KlipTest', component: () => import('pages/KlipTest.vue'), props: true },
                { name: 'GrpcTest', path: 'GrpcTest', component: () => import('pages/GrpcTest.vue'), props: true },
                { name: 'Error401', path: 'Error401', component: () => import('pages/Error401.vue') },
                { name: 'Error404', path: 'Error404', component: () => import('pages/Error404.vue') },
                { path: '*', component: () => import('pages/Error404.vue') }
            ]
        },
        {
            path: '/',
            beforeEnter: (to, from, next) => {
                console.log('루트경로(/)로 접근');
                next({ name: 'Home', params: { lang: currentLang }, query: { ...to.query } });
            }
        },
        {
            path: '*',
            beforeEnter: (to, from, next) => {
                console.log('LANG 값 없이 접근', to.fullPath);
                if (!to.params || allowedLangList.indexOf(to.params.lang) === -1) {
                    next(`/${currentLang}${to.fullPath}`);
                } else next('/');
            }
        }
    ];

    // routes.push({
    //     path: '*',
    //     component: () => import('pages/Error404.vue')
    // });

    return routes;
};

export default {
    getRoutes
};
