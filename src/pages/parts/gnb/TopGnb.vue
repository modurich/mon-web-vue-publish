<i18n>
{
    "ko": {
        "dialog": {
            "onValueChangeToStockMode": {
                "title": "코인 → 주식 커뮤니티 변경",
                "content": "해당 페이지는 주식 커뮤니티 상태로 변경 후 페이지 이동됩니다.",
                "buttonLabel": "확인"
            },
            "onValueChangeToCoinMode": {
                "title": "주식 → 코인 커뮤니티 변경",
                "content": "해당 페이지는 코인 커뮤니티 상태로 변경 후 페이지 이동됩니다.",
                "buttonLabel": "확인"
            }
        },
        "tooltip": {
            "title": "코인 예측 베타 서비스 오픈!<br/>지금 코인모드로 전환해 보세요."
        },
        "methods": {
            "modalTitle1": "인사이트작성 나가기",
            "modalContent1": "작성중인 인사이트 페이지를 나가시겠습니까? 이 페이지를 나가면 작성했던 글은 모두 삭제됩니다.",
            "modalButtonLabel1": "나가기"
        }
    },
    "en": {
        "dialog": {
            "onValueChangeToStockMode": {
                "title": "Coin → Stocks community change",
                "content": "The page can be moved after changing to the stock community status.",
                "buttonLabel": "Confirm"
            },
            "onValueChangeToCoinMode": {
                "title": "Stocks → Coin community change",
                "content": "The page can be moved after changing to the coin community status.",
                "buttonLabel": "Confirm"
            }
        },
        "tooltip": {
            "title": "Coin prediction beta service open!<br/>Try switching to coin mode now."
        },
        "methods": {
            "modalTitle1": "Exit Insights",
            "modalContent1": "Are you sure you want to leave the Insights page you are writing? Leaving this page will delete all your posts.",
            "modalButtonLabel1": "Exit"
        }
    }
}
</i18n>

<template>
    <!-- 최상단 GNB -->
    <div class="top-gnb">
        <div class="row header-wrap bg-white align-center" :style="{ padding: '0 12px' }">
            <div class="row" v-if="isAvailableBackButton && ['Home', 'Insight', 'Blash', 'Post', 'PlayerRank', 'Governance', 'Intro'].indexOf($route.name) === -1">
                <button class="flex" aria-label="back" @click="$router.back()">
                    <m-icon name="arrow_left" stroke-opacity="0" width="19.5" height="15" />
                </button>
                <m-space-v size="16" />
            </div>
            <h1>
                <q-select
                    borderless
                    :value="divCode"
                    @input="onValueChange"
                    :options="options"
                    emit-value
                    dense
                    behavior="menu"
                >
                    <template v-slot:selected>
                        <router-link :to="{ name: 'Home' }" class="inline-block" @click.native="$event.stopImmediatePropagation()">
                            <img v-if="divCode === 1" src="/logo/logo_stock.svg">
                            <img v-if="divCode === 2" src="/logo/logo_coin.svg">
                        </router-link>
                    </template>
                    <template v-slot:option="{ itemProps, itemEvents, opt }">
                        <q-item
                            v-bind="itemProps"
                            v-on="itemEvents"
                            v-if="opt.value !== divCode"
                        >
                            <q-item-section>
                                <div><img style="vertical-align:middle;" src="/logo/exchange.svg"><m-space-v :size="8" /><img :src="opt.src"></div>
                            </q-item-section>
                        </q-item>
                    </template>
                </q-select>
            </h1>
            <q-space />
            <fragment v-if="!onlyLogo">
                <router-link v-if="div_code === 1" class="row" :to="{ name: 'FindStocks' }" @click.native="reloadFindStock" :style="{ marginRight: '24px' }">
                    <m-icon class="menu" name="search" stroke-opacity="0" />
                </router-link>
                <router-link v-if="div_code === 2" class="row" :to="{ name: 'FindCoins' }" @click.native="reloadFindCoin" :style="{ marginRight: '24px' }">
                    <m-icon class="menu" name="search" stroke-opacity="0" />
                </router-link>
                <button :class="['row', 'menu-wrapper', { 'unread': unreadPushCnt !== 0 }]" @click="showSidemenu">
                    <m-icon class="menu" name="menu" stroke-opacity="0" />
                </button>
            </fragment>
        </div>
    </div>
</template>

<script>
import _ from 'lodash';
import { mapState, mapActions } from 'vuex';

export default {
    name: 'TopGnb',
    components: {
    },
    data() {
        return {
            isAvailableBackButton: false,
            divCode: 1,
            options: [
                {
                    src: '/logo/logo_stock.svg',
                    value: 1
                },
                {
                    src: '/logo/logo_coin.svg',
                    value: 2
                }
            ]
        };
    },
    props: {
        onlyLogo: {
            type: Boolean,
            default: function() {
                return false;
            }
        }
    },
    computed: {
        ...mapState({
            unreadPushCnt: state => state.auth.unreadPushCnt,
            div_code: state => state.common.div_code
        })
    },
    watch: {
        '$route': async function(newVal, oldVal) {
            if (!this._inactive) { // page stack으로 deactivated 되었을때도 watch가 돌아가서 문제되는걸 방지
                this.isAvailableBackButton = this.getIsAvailableBackButton();
            }
        },
        '$store.state.common.div_code': function(newVal) {
            if (this.divCode !== newVal) {
                this.onValueChange(newVal);
            }
        }
    },
    beforeCreate() {
    },
    async created() {
        this.divCode = Number(localStorage.getItem('div_code'));
    },
    mounted() {
        this.$nextTick(() => {
            const that = this;
            setTimeout(function() {
                const isUsedCoinMode = localStorage.getItem('isUsedCoinMode');
                if (!isUsedCoinMode) {
                    let header = document.querySelector('.header-wrap');
                    let dom = `<div  id="tooltip" class="row tooltip" style="background-color: rgb(255, 0, 108); width: 228px; height: 56px; position: absolute; border-radius: 2px; top: 48.8906px; left: 44px;"><div  class="m-space-v" style="width: 20px; min-width: 20px; min-height: 1px;"></div><div  style="color: white !important; font-size: 12px; align-self: center;">` + that.$t('tooltip.title') + `</div><div  class="q-space"></div><div  id="close" style="color: white !important; cursor: pointer;">X</div><div  class="m-space-v" style="width: 10px; min-width: 10px; min-height: 1px;"></div></div>`;
                    const parser = new DOMParser();
                    let doc = parser.parseFromString(dom, 'text/html');
                    header.appendChild(doc.body.children[0]);
                    document.querySelector('#close').addEventListener('click', that.closeTooltip);

                    let triangleIcon = document.getElementsByClassName('q-icon');
                    let rect = triangleIcon[0].getBoundingClientRect();
                    const tooltip = document.getElementById('tooltip');
                    tooltip.style.top = (rect.bottom + 5) + 'px';
                    console.log('top::', tooltip.style.top);
                    tooltip.style.left = (rect.left - 100) + 'px';
                    console.log('left::', tooltip.style.left);
                }
            }, 2000);
        });
    },
    methods: {
        ...mapActions({
            showSidemenu: 'common/showSidemenu',
            reload: 'common/reload',
            getIsAvailableBackButton: 'common/getIsAvailableBackButton',
            setDivCode: 'common/setDivCode',
            setCanLeavePage: 'common/setCanLeavePage',
            refresh: 'common/refresh'
        }),
        reloadFindStock() {
            if (this.$route.name === 'FindStocks') {
                this.reload();
            }
        },
        reloadFindCoin() {
            if (this.$route.name === 'FindCoins') {
                this.reload();
            }
        },
        onValueChange(newVal) {
            if (this.$route.name === 'WriteInsight') {
                this.$q.dialog({
                    component: 'm-alert',
                    parent: this,
                    title: this.$t('methods.modalTitle1'),
                    content: this.$t('methods.modalContent1'),
                    buttonLabel: this.$t('methods.modalButtonLabel1'),
                    buttonStyle: `background-color: ${this.$style.crayolaFlamingoPink};border-color: ${this.$style.crayolaFlamingoPink};`,
                    buttonClick: () => {
                        this.divCode = newVal;
                        localStorage.setItem('div_code', this.divCode);
                        localStorage.setItem('isUsedCoinMode', true);
                        this.setDivCode(this.divCode);
                        this.setCanLeavePage(true);
                        this.$router.push({ path: '/' });
                        this.refresh();
                    }
                }).onDismiss(() => {
                });
            } else {
                this.divCode = newVal;
                localStorage.setItem('div_code', this.divCode);
                localStorage.setItem('isUsedCoinMode', true);
                this.setDivCode(this.divCode);

                if (this.$route.name === 'Home') {
                    this.$router.go('/');
                    this.refresh();
                } else {
                    this.$router.push({ path: '/' });
                    this.refresh();
                }
            }
        },
        closeTooltip() {
            const tooltip = document.getElementById('tooltip');
            tooltip.style.display = 'none';
        }
    }
};
</script>

<style lang="scss" scoped>
.top-gnb {
    .header-wrap {
        min-height: 56px;
        height: 56px;
        border-bottom: 1px solid $ghost-white;
        margin: 0 auto;

        .logo {
            position: relative;
            cursor: pointer !important;
            width: 158px;
            height: 24px;
        }
        .menu {
            cursor: pointer !important;
        }

        .menu-wrapper {
            position: relative;
            &.unread::before {
                content: ' ';
                position: absolute;
                top: 0px;
                right: 1.5px;
                width: 8px;
                height: 8px;
                background-color: $crayola-flamingo-pink;
                border-radius: 50%;
                box-shadow: 0px 0px 0px 3px white;
            }
        }
    }
}
.top-gnb::v-deep .tooltip {
    animation: fade 0.5s linear;
}
.top-gnb::v-deep .tooltip::after {
    content: '';
    border-width: 6px;
    border-style: solid;
    border-color: transparent;
    border-top-color: #FF006C; /* 50% 투명한 검정색 6px 테두리선 */
    width: 0; /* 가상 요소의 크기가 0이기 때문에 테두리선이 삼각형 모양이 됨 */
    height: 0;
    position: absolute;
    left: 50%; /* 버튼 너비 50% 크기만큼 오른쪽으로 이동 */
    bottom: 100%; /* 버튼 높이만큼 위로 방향 팁 밑 부분 이동 */
    transform: rotate(180deg) translate(50%, 0);
    opacity: 1;
}
@keyframes fade {
    0% { opacity: 0 }
    100% { opacity: 1 }
}
</style>
