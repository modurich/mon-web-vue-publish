<i18n>
{
  "ko": {
    "template": {
      "label1": "몬스탁 로고",
      "label2": "로그인",
      "label3": "휴대폰 번호 또는 이메일 주소",
      "label4": "입력한 정보와 일치하는 계정이 없습니다",
      "label5": "비밀번호",
      "label6": "비밀번호를 입력해주세요",
      "label7": "한영키 변환을 확인해주세요",
      "label8": "비밀번호가 계정정보와 일치하지 않습니다",
      "label9": "PASS 연동회원입니다. PASS로 로그인하세요.",
      "label10": "휴대폰 번호 로그인",
      "label11": "자동 로그인",
      "label12": "개인정보 보호를 위해, 개인 PC에서만 사용해 주세요.",
      "label13": "비밀번호 찾기",
      "label14": "회원가입",
      "label15": "활동",
      "label16": "NFT샵",
      "label17": "안내",
      "label18": "인포데스크",
      "label19": "퀵가이드",
      "label20": "이벤트",
      "label21": "고객센터",
      "label22": "홈화면 전환"
    }
  },
  "en": {
    "template": {
      "label1": "Monstock logo",
      "label2": "Login",
      "label3": "Mobile phone number or email address",
      "label4": "No accounts match the information you entered",
      "label5": "password",
      "label6": "Please enter your password",
      "label7": "Please check the Korean-English key conversion",
      "label8": "Password does not match account information",
      "label9": "I am a PASS linked member. Please log in with PASS.",
      "label10": "Sign in with your mobile number",
      "label11": "Auto login",
      "label12": "For privacy protection, please use only on a personal PC.",
      "label13": "Forgot password",
      "label14": "Register",
      "label15": "Activity",
      "label16": "NFT Shop",
      "label17": "Guide",
      "label18": "infodesk",
      "label19": "Quick Guide",
      "label20": "event",
      "label21": "Customer Center",
      "label22": "Switch home screen"
    }
  }
}
</i18n>
<template>
    <div class="login-common">
        <div :style="{ maxWidth: '356px', margin: '0 auto' }">
            <div :style="{ margin: '0 12px' }">
                <div class="row justify-center">
                    <img src="/icons/icon-nomargin-240x240.png" :alt="$t('template.label1')" width="80px" height="80px" />
                </div>
                <div class="f-16-b-mg text-center" :style="{ marginTop: '16px' }" v-if="type !== 'side'">{{ $t('template.label2') }}</div>
                <m-button3 @click="loginByPass" size="large" :style="{ marginTop: '32px', width: '100%', background: '#8951FF', border: 'none' }">
                    <inline-svg
                        :src="`/svgs/outside/pass_login_btn.svg`"
                        style="width:127px;height:16px;"
                    />
                </m-button3>
            </div>
            <m-space-h size="1" :style="{ backgroundColor: $style.ghostWhite, margin: '32px 12px' }" />
            <div :style="{ margin: '0 12px' }">
                <m-select ref="localeSelector" v-model="selectedOption" :options="selectOptions" :style="{ marginBottom: '32px' }" hide-bottom-space :error="!selectedOption" />
                <!-- 크롬에서 비밀번호 자동저장 기능을 활용하려면 type 이 text 여야 한다. -->
                <m-input
                    name="id"
                    ref="id"
                    v-model="id"
                    type="text"
                    :label="$t('template.label3')"
                    :rules="[
                        val => loginResult !== 1 || $t('template.label4'),
                        val => loginResult !== 6 || $t('template.label4')
                    ]"
                    lazy-rules
                />
                <m-input
                    name="password"
                    ref="password-input"
                    v-model="password"
                    :type="isHidePwd ? 'password' : 'text'"
                    :label="$t('template.label5')"
                    :rules="[
                        val => val.length > 0 || $t('template.label6'),
                        val => /[ㄱ-ㅎ가-힣]/.test(val) ? $t('template.label7') : true,
                        val => loginResult !== 2 || $t('template.label8'),
                        val => loginResult !== 8 || $t('template.label9')
                    ]"
                    bottom-slots
                    lazy-rules
                    @keypress.enter="login"
                >
                    <template v-slot:append>
                        <m-icon
                            :name="isHidePwd ? 'view_off' : 'view'"
                            stroke-opacity="0"
                            class="cursor-pointer"
                            :color="$style.greyTabby"
                            :opacity="0.5"
                            width="21"
                            height="21"
                            @click="isHidePwd = !isHidePwd"
                        />
                    </template>
                </m-input>
            </div>

            <div class="row">
                <m-button3 class="flex-1" lined size="large" @click="login" :style="{ margin: '0 12px', width: '100%' }">{{ $t('template.label10') }}</m-button3>
            </div>
            <!--
            <div class="row">
                <NaverLogin
                    client-id="rKexqq9RR96NDn6VSUq9"
                    callback-url="https://local.dev.monstock.app:8081/NaverLoginCallback"
                    :is-popup="false"
                    :button-type="3"
                    :button-height="40"
                />
            </div>
            <div class="row">
                <KakaoLogin
                    api-key="55ef8cd8b139e7ca06a4d01b3951dd70"
                    callback-url="https://local.dev.monstock.app:8081/KakaoLoginCallback"
                    :on-success=onSuccessKakao
                    :on-failure=onFailureKakao
                    :is-popup="false"
                    :button-width="180"
                />
            </div>
            <div class="row">
                <FacebookLogin
                    app-id="1280798072751697"
                    callback-url="https://local.dev.monstock.app:8081/FacebookLoginCallback"
                    :on-success=onSuccessFacebook
                    :on-failure=onFailureFacebook
                    :is-popup="false"
                    :buttonW-width="170"
                    :button-height="30"
                />
            </div>
            <div class="row">
                <GoogleLogin
                    client-id="888468291387-1gu08amh7lp18j4bnhifdv70qmn4cgmo.apps.googleusercontent.com"
                    callback-url="https://local.dev.monstock.app:8081/GoogleLoginCallback"
                    :on-success=onSuccessGoogle
                    :on-failure=onFailureGoogle
                    :is-popup="false"
                    :button-width="200"
                    :button-height="40"
                />
            </div>
            -->

            <div :style="{ margin: '16px 12px 0 12px' }">
                <m-checkbox v-model="autologin" :label="$t('template.label11')" />
                <div class="f-14-500-gt">{{ $t('template.label12') }}</div>
                <div class="row" :style="{ margin: '16px 0' }">
                    <router-link class="f-14-b-gt" :to="{ name: 'FindPassword' }">{{ $t('template.label13') }}</router-link>
                    <m-space-v size="1" :style="{ backgroundColor: $style.ghostWhite, margin: '0 16px' }" />
                    <router-link class="f-14-b-gt" :to="{ name: 'JoinGuide' }">{{ $t('template.label14') }}</router-link>
                </div>
            </div>

            <div class="side-menu-list" :style="{ margin: '32px 12px 0' }">
                <section>
                    <h3>{{ $t('template.label15') }}</h3>
                    <ul>
                        <li>
                            <router-link class="side-menu-button" :to="{ name: 'NftShop', query: { tab: 'progress' } }">
                                <m-icon name="image" stroke-opacity="0" width="20" height="20" />
                                <div class="f-12-500-gt">{{ $t('template.label16') }}</div>
                            </router-link>
                        </li>
                    </ul>
                </section>
                <section :style="{ marginTop: '16px' }">
                    <h3>{{ $t('template.label17') }}</h3>
                    <ul>
                        <li>
                            <a href="https://modurich.notion.site/modurich/991b4b1517df49fcab3039370cbcf8ff" class="side-menu-button" target="_blank" rel="noopener noreferrer nofollow">
                                <m-icon name="info" stroke-opacity="0" width="20" height="20" />
                                <div class="f-12-500-gt">{{ $t('template.label18') }}</div>
                            </a>
                        </li>
                        <li>
                            <button class="side-menu-button" @click="showQuickGuide">
                                <m-icon name="question" stroke-opacity="0" width="20" height="20" />
                                <div class="f-12-500-gt">{{ $t('template.label19') }}</div>
                            </button>
                        </li>
                        <li>
                            <router-link class="side-menu-button" :to="{ name: 'Event' }">
                                <m-icon name="event" stroke-opacity="0" width="20" height="20" />
                                <div class="f-12-500-gt">{{ $t('template.label20') }}</div>
                            </router-link>
                        </li>
                        <li>
                            <router-link class="side-menu-button" :to="{ name: 'CustomerCenter', query: { tab: 'inquiry' } }">
                                <m-icon name="cs" stroke-opacity="0" width="20" height="20" />
                                <div class="f-12-500-gt">{{ $t('template.label21') }}</div>
                            </router-link>
                        </li>
                    </ul>
                </section>
            </div>
            <CarouselBanner type="login" :style="{ margin: '32px 12px 0' }" />
            <div :style="{ margin: '32px 12px 0' }">
                <m-button3 :style="{ width: '100%' }" @click="toggleTutorialHome" lined>{{ $t('template.label22') }}</m-button3>
            </div>
        </div>
        <m-space-h size="120" />
    </div>
</template>

<script>
import _ from 'lodash';
import { mapState, mapActions } from 'vuex';
import CarouselBanner from 'pages/parts/CarouselBanner';
import { getLocaleNumberInfoList, getDefaultLocaleNumberInfo, setDefaultLocaleValue } from 'utils/locale';
// import NaverLogin from 'pages/parts/common/NaverLogin';
// import KakaoLogin from 'pages/parts/common/KakaoLogin';
// import FacebookLogin from 'pages/parts/common/FacebookLogin';
// import GoogleLogin from 'pages/parts/common/GoogleLogin';

export default {
    name: 'LoginCommon',
    components: {
        CarouselBanner
    },
    props: {
        type: {
            type: String,
            default: function() {
                return 'page';
            }
        }
    },
    data() {
        return {
            id: '',
            password: '',
            isHidePwd: true,
            autologin: true,
            loginResult: 0,
            selectedOption: getDefaultLocaleNumberInfo()
        };
    },
    watch: {
        password() {
            if (this.loginResult !== 0) {
                this.loginResult = 0;
                this.$refs['password-input'].resetValidation();
                this.$refs['password-input'].validate();
            }
        }
    },
    computed: {
        ...mapState({
            isLogin: state => state.auth.isLogin
        }),
        selectOptions() {
            return getLocaleNumberInfoList();
        }
    },
    beforeCreate() {
    },
    async created() {
    },
    mounted() {
    },
    methods: {
        ...mapActions({
            toggleTutorialHome: 'common/toggleTutorialHome'
        }),
        async login() {
            if (this.password.length === 0 || /[ㄱ-ㅎ가-힣]/.test(this.password)) {
                this.$refs['password-input'].resetValidation();
                this.$refs['password-input'].validate();
                return;
            }
            if (!this.selectedOption) {
                console.log(`this.$refs['localeSelector']`, this.$refs['localeSelector']);
                this.$refs['localeSelector'].focus();
                this.$refs['localeSelector'].reset();
                return;
            }
            setDefaultLocaleValue(this.selectedOption.value);

            this.$store.dispatch('common/showLoading');
            let result = null;
            if (this.$utils.checkValidateEmail(this.id)) {
                result = await this.$store.dispatch('auth/loginByEmail', { email: this.id.trim(), password: this.password, isAutoLogin: this.autologin });
            } else {
                result = await this.$store.dispatch('auth/loginByPhoneNo', { phoneNumber: `${this.selectedOption.value}-${this.id.trim()}`, password: this.password, isAutoLogin: this.autologin });
            }
            this.$store.dispatch('common/hideLoading');
            if (result > 0) {
                this.loginResult = result;
                this.$refs['id'].resetValidation();
                this.$refs['id'].validate();
                this.$refs['password-input'].resetValidation();
                this.$refs['password-input'].validate();
            } else {
                this.$store.dispatch('auth/moveAfterLogin');
            }
        },
        loginByPass() {
            this.$store.dispatch('auth/loginByPass', { isAutoLogin: this.autologin });
        },
        // 첫방문 가이드
        async showQuickGuide() {
            this.$store.dispatch('common/showQuickGuide', { parent: this });
        },
        onSuccessKakao: function(res) {
            console.log(res);
        },
        onFailureKakao: function(err) {
            if (err) {
                console.log(err);
                // console.log(err.errorMessage);
            }
        },
        onSuccessFacebook: function(res) {
            console.log(res);
        },
        onFailureFacebook: function(err) {
            if (err) {
                console.log(err);
                // console.log(err.errorMessage);
            }
        },
        onSuccessGoogle: function(res) {
            console.log(res);
        },
        onFailureGoogle: function(err) {
            if (err) {
                console.log(err);
                // console.log(err.errorMessage);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.login-common {
    padding-top: 32px;
}
</style>
