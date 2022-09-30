<!-- 증권사별 앱링크 설정 셀럭터 -->
<i18n>
{
  "ko": {
    "template": {
      "label1": "해당 앱으로 바로 연결하여 거래하실 수 있습니다. 이용자 편의를 위한 기능으로 증권사 수수료 외 <strong>별도 추가수수료가 없습니다.</strong>",
      "label2": "몬스탁은 증권사 시스템 장애에 따른 법적 책임을 지지 않습니다. 증권사 로그인 후 시스템 문제 발생시 증권사 고객센터를 이용하시기 바랍니다.",
      "label3": "회사이미지"
    }
  },
  "en": {
    "template": {
      "label1": "You can trade directly by connecting to the app. This is a feature for user convenience. <strong>There are no additional fees other than brokerage fees.</strong>",
      "label2": "Monstock is not liable for any system failure of the brokerage company. Please use the brokerage service center if a system problem occurs after logging in to the brokerage company.",
      "label3": "company image"
    }
  }
}
</i18n>
<template>
    <div class="my-securities-company-selector">
        <div>
            <m-space-h size="20" />
            <div class="f-14-500-gt" v-html="$t('template.label1')"></div>
            <m-space-h size="16" />
            <div class="grid">
                <div class="shadowed-box cursor-pointer company-btn" :key="`company-${idx}`" v-for="(company, idx) in companies" @click="select(company)">
                    <div class="company-img-wrap row align-center justify-center">
                        <img :src="`/img/company/${company}.png`" :alt="$t('template.label3')" />
                    </div>
                    <m-space-h size="4" />
                    <div class="f-12-500-gt text-center">{{$utils.getSecuritiesCompanyName(company)}}</div>
                </div>
            </div>
            <m-space-h size="16" />
            <div class="f-14-500-gt">{{ $t('template.label2') }}</div>
        </div>
    </div>
</template>

<script>
import _ from 'lodash';
import { mapState, mapActions, mapGetters } from 'vuex';
import MobileDetect from 'mobile-detect';

export default {
    name: 'MySecuritiesCompanySelector',
    props: {
        selected: {
            type: Function
        }
    },
    data() {
        return {
            companies: []
        };
    },
    computed: {
        ...mapState({
        })
    },
    beforeCreate() {
    },
    async created() {
    },
    async mounted() {
        this.setCompanyList();
    },
    beforeDestroy() {
    },
    methods: {
        setCompanyList() {
            const md = new MobileDetect(window.navigator.userAgent);
            const os = md.os();
            if (os === 'AndroidOS') {
                this.companies = [
                    '240', // 삼성증권
                    '243', // 한국투자증권
                    '289', // NH투자증권
                    '292', // 케이프투자증권
                    '209', // 유안타증권
                    '263', // 현대차증권
                    '278', // 신한금융투자
                    '280', // 유진투자증권
                    '238', // 미래에셋대우
                    '261', // 교보증권
                    '262', // 하이투자증권
                    '265', // 이베스트
                    '279', // DB금융투자
                    '227', // ktb투자증권
                    '270', // 하나금융투자
                    '267', // 대신증권
                    '264' // 키움증권
                ];
            } else {
                this.companies = [
                    '240', // 삼성증권
                    '243', // 한국투자증권
                    '289', // NH투자증권
                    '292', // 케이프투자증권
                    '209', // 유안타증권
                    '263', // 현대차증권
                    '278', // 신한금융투자
                    '280', // 유진투자증권
                    '238', // 미래에셋대우
                    '261', // 교보증권
                    '262', // 하이투자증권
                    // '265', // 이베스트
                    '279', // DB금융투자
                    '227', // ktb투자증권
                    '270', // 하나금융투자
                    '267', // 대신증권
                    '264' // 키움증권
                ];
            }
        },
        select(companyCode) {
            localStorage.setItem('trade_company_name', companyCode);
            if (this.selected) {
                this.selected({ companyCode });
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.my-securities-company-selector {
    .grid {
        display: grid;
        // grid-column-gap: 10px;
        grid-row-gap: 8px;
        grid-template-columns: repeat(auto-fill, 104px);
        justify-content: space-around;
    }
    .company-btn {
        width: 104px;
        height: 72px;
        padding: 16px 0;
        // background: #FFFFFF;
        // box-shadow: 0px 0px 16px rgba(236, 236, 237, 0.8);
        // border-radius: 16px;

        .company-img-wrap {
            height: 20px;
            overflow: hidden;

            img {
                width: 56px;
                height: 100%;
                max-height: 100%;
            }
        }
    }
}
</style>
