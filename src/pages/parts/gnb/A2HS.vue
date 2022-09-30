<!-- Add To Home Screen -->
<i18n>
{
  "ko": {
    "installMonstockApp": "몬스탁 앱 설치"
  },
  "en": {
    "installMonstockApp": "Install Monstock app"
  }
}
</i18n>
<template>
    <div class="a2hs">
        <div v-if="isSupportedBrowser && !isApp && expiredNotAllow && alreadyInstalled === false" class="a2hs-btn row align-center cursor-pointer flex-1" :style="{ padding: '8px 12px' }" @click="addToHomeScreen">
            <div class="row align-center justify-center flex-1">
                <img src="/icons/icon-nomargin-240x240.png" alt="monstock logo" width="24px" height="24px" />
                <div class="f-16-b-wt" :style="{ marginLeft: '8px' }">{{$t('installMonstockApp')}}</div>
            </div>
            <m-icon name="close" :color="$style.white" @click.prevent.stop="close" />
        </div>
    </div>
</template>

<script>
import _ from 'lodash';
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
    name: 'A2HS',
    props: {
    },
    data() {
        return {
            expiredNotAllow: false,
            alreadyInstalled: null
        };
    },
    computed: {
        ...mapState({
            isAndroid: state => state.common.isAndroid
        }),
        isSupportedBrowser() {
            try {
                return !!window.deferredPrompt;
            } catch (err) {
                return false;
            }
        },
        isApp() {
            try {
                if (navigator.standalone) {
                    // standalone-ios
                    return true;
                }
                if (window.matchMedia('(display-mode: standalone)').matches) {
                    return true;
                }
                return false;
            } catch (err) {
                return false;
            }
        }
    },
    beforeCreate() {
    },
    async created() {
    },
    async mounted() {
        this.checkNotAllow();
        this.checkAlreadyInstalled();
    },
    beforeDestroy() {
    },
    methods: {
        addToHomeScreen() {
            if (this.isAndroid) {
                const a = document.createElement('a');
                a.href = 'https://play.google.com/store/apps/details?id=com.modurich.monstock';
                a.target = '_blank';
                a.click();
            } else {
                window.deferredPrompt.prompt();
                window.deferredPrompt.userChoice.then(choiceResult => {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('유저가 A2HS 를 승인한 상태');
                        this.close();
                    } else {
                        console.log('유저가 A2HS 를 거절한 상태');
                    }
                });
            }
        },
        close() {
            localStorage.setItem('a2hs_not_allow', new Date().getTime() + 1000 * 60 * 60 * 24 * 7);
            this.checkNotAllow();
        },
        checkNotAllow() {
            try {
                const time = Number(localStorage.getItem('a2hs_not_allow')) || 0;
                if (new Date().getTime() > time) {
                    this.expiredNotAllow = true;
                    return;
                }
            } catch (err) {}
            this.expiredNotAllow = false;
        },
        async checkAlreadyInstalled() {
            try {
                // https://stackoverflow.com/questions/51735869/check-if-user-has-already-installed-pwa-to-homescreen-on-chrome
                // check if browser version supports the api
                if ('getInstalledRelatedApps' in window.navigator) {
                    const relatedApps = await navigator.getInstalledRelatedApps();
                    relatedApps.forEach((app) => {
                        // if your PWA exists in the array it is installed
                        console.log(app.platform, app.url);
                    });
                    if (relatedApps.length > 0) {
                        this.alreadyInstalled = true;
                    } else {
                        this.alreadyInstalled = false;
                        console.log('alreadyInstalled', relatedApps);
                    }
                }
            } catch (err) {
                this.alreadyInstalled = false;
                console.log(err);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.a2hs {
    .a2hs-btn {
        background: $medium-grey;
        height: 42px;
    }
}
</style>
