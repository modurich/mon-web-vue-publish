<i18n>
{
    "ko": {
        "template": {
            "label1": "고객센터",
            "label2": "인포데스크",
            "serviceTerms": "서비스 약관",
            "terms": "약관",
            "label3": "개인정보 처리방침",
            "label4": "(주)모두리치 | 대표: 김병곤, 이승백 | 대표번호: 1666-4165",
            "label5": "경기도 성남시 분당구 대왕판교로 660, B동 1102호",
            "label6": "사업자등록번호: 756-86-01241",
            "label7": "통신판매번호: 2019-성남분당A-0725",
            "label8": "Copyright ©2019 MODURICH All rights reserved",
            "label9": "Updated"
        }
    },
    "en": {
         "template": {
            "label1": "Customer Center",
            "label2": "Infodesk",
            "serviceTerms": "Terms of Service",
            "terms": "Terms",
            "label3": "Privacy Policy",
            "label4": "Modurich Co., Ltd. | Representatives: Byung-Gon Kim, Seung-Baek Lee | Representative Number: 1666-4165",
            "label5": "No. 1102 B-dong, 660 Daewangpangyo-ro, Bundang-gu, Seongnam-si, Gyeonggi-do",
            "label6": "Business registration number: 756-86-01241",
            "label7": "Mail order number: 2019-Seongnam Bundang A-0725",
            "label8": "Copyright ©2019 MODURICH All rights reserved",
            "label9": "Updated"
        }
    }
}
</i18n>

<template>
    <footer class="footer">
        <m-space-h size="1" :style="{ backgroundColor: $style.ghostWhite, margin: '400px 0 16px 0' }" />
        <div class="show-wide">
            <div class="row align-center justify-center">
                <div class="row">
                    <router-link class="f-14-b-gt" :to="{ name: 'CustomerCenter', query: { tab: 'inquiry' } }" :style="{ marginRight: '40px' }">{{ $t('template.label1') }}</router-link>
                    <a href="https://modurich.notion.site/991b4b1517df49fcab3039370cbcf8ff" target="_blank" class="f-14-b-gt" :style="{ marginRight: '40px' }">{{ $t('template.label2') }}</a>
                    <router-link class="f-14-b-gt" :to="{ name: 'Terms', params: { type: 'Service' } }" :style="{ marginRight: '40px' }">{{ $t('template.serviceTerms') }}</router-link>
                    <router-link class="f-14-b-gt" :to="{ name: 'Terms', params: { type: 'Privacy' } }">{{ $t('template.label3') }}</router-link>
                </div>
            </div>
        </div>
        <div class="show-narrow">
            <div class="row align-center justify-center">
                <div class="row">
                    <router-link class="f-14-b-gt" :to="{ name: 'CustomerCenter', query: { tab: 'inquiry' } }" :style="{ marginRight: '16px' }">{{ $t('template.label1') }}</router-link>
                    <a href="https://modurich.notion.site/991b4b1517df49fcab3039370cbcf8ff" target="_blank" class="f-14-b-gt" :style="{ marginRight: '16px' }">{{ $t('template.label2') }}</a>
                    <router-link class="f-14-b-gt" :to="{ name: 'Terms', params: { type: 'Service' } }" :style="{ marginRight: '16px' }">{{ $t('template.terms') }}</router-link>
                    <router-link class="f-14-b-gt" :to="{ name: 'Terms', params: { type: 'Privacy' } }">{{ $t('template.label3') }}</router-link>
                </div>
            </div>
        </div>
        <m-space-h size="1" :style="{ backgroundColor: $style.ghostWhite, margin: '16px 0' }" />
        <div class="text-center show-wide">
            <div class="f-12-500-gt">{{ $t('template.label4') }}</div>
            <div class="f-12-500-gt">{{ $t('template.label5') }}</div>
            <div class="f-12-500-gt">{{ $t('template.label6') }} | {{ $t('template.label7') }}</div>
            <div class="f-12-500-gt">{{ $t('template.label8') }} | {{ $t('template.label9') }} {{version}} {{BUILD_TIME}}<!-- {{moment(BUILD_TIME).format('YYYY.MM.DD HH:mm:ss z')}} --></div>
        </div>
        <div class="text-center show-narrow">
            <div class="f-12-500-gt">{{ $t('template.label4') }}</div>
            <div class="f-12-500-gt">{{ $t('template.label5') }}</div>
            <div class="f-12-500-gt">{{ $t('template.label6') }}</div>
            <div class="f-12-500-gt">{{ $t('template.label7') }}</div>
            <div class="f-12-500-gt">{{ $t('template.label8') }}</div>
            <div class="f-12-500-gt">{{ $t('template.label9') }} {{version}}{{BUILD_TIME}}<!-- {{moment(BUILD_TIME).format('YYYY.MM.DD HH:mm:ss z')}} --></div>
        </div>
        <m-space-h size="100" />
    </footer>
</template>

<script>
import _ from 'lodash';
import { mapState } from 'vuex';
import { version } from 'app/package.json';

export default {
    name: 'Footer',
    components: {
    },
    data() {
        return {
            version
        };
    },
    props: {
    },
    computed: {
        ...mapState({
            isDesktop: state => state.common.isDesktop
        })
    },
    async preFetch({ store, currentRoute, previousRoute, redirect, ssrContext }) {
    },
    beforeCreate() {
    },
    async created() {
    },
    mounted() {
    },
    methods: {
    }
};
</script>

<style lang="scss" scoped>
.footer {
    .show-wide {
        display: block;
    }
    .show-narrow {
        display: none;
    }
    @media (max-width: $breakpoint-xs-max) {
        .show-wide {
            display: none;
        }
        .show-narrow {
            display: block;
        }
    }
}
</style>
