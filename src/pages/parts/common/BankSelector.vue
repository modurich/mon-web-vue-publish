<!-- 금융기관 셀럭터 -->
<i18n>
{
  "ko": {
    "template": {
      "label1": "은행",
      "label2": "증권사",
      "label3": "회사이미지"
    }
  },
  "en": {
    "template": {
      "label1": "Bank",
      "label2": "Security company",
      "label3": "company image"
    }
  }
}
</i18n>
<template>
    <div class="bank-selector">
        <m-space-h size="16" />
        <m-tabs
            v-model="tab"
            :items="[
                { label: $t('template.label1'), value: 'bank' },
                { label: $t('template.label2'), value: 'securities' }
            ]"
        />
        <m-space-h size="16" />
        <div class="grid">
            <div :class="`shadowed-box cursor-pointer company-btn${prevSelectedCode === company.code ? ' prev-selected' : ''}`" :key="`company-${idx}`" v-for="(company, idx) in selectedList" @click="select(company)">
                <div class="company-img-wrap row align-center justify-center">
                    <img :src="`/img/company/${company.code}.png`" :alt="$t('template.label3')" />
                </div>
                <m-space-h size="4" />
                <div class="f-16-500-gt text-center" :style="{ padding: '0' }">{{company.shortname}}</div>
            </div>
        </div>
        <m-space-h size="16" />
    </div>
</template>

<script>
import _ from 'lodash';
import { mapState, mapActions, mapGetters } from 'vuex';
import { getFinancialInstitutionList } from 'utils/bank';

const BANK_CODE_LIST = [
    '002',
    '003',
    '004',
    '007',
    '011',
    '020',
    '023',
    '027',
    '031',
    '032',
    '034',
    '035',
    '037',
    '039',
    '045',
    '048',
    '050',
    '054',
    '055',
    '057',
    '060',
    '061',
    '062',
    '064',
    '067',
    '071',
    '081',
    '088',
    '089',
    '090'
];
const SECURITIES_COMPANY_LIST = [
    '209',
    '218',
    '224',
    '227',
    '238',
    '240',
    '243',
    '247',
    '261',
    '262',
    '263',
    '264',
    '265',
    '266',
    '267',
    '269',
    '270',
    '278',
    '279',
    '280',
    '287',
    '288',
    '290',
    '291',
    '292',
    '294'
];

export default {
    name: 'BankSelector',
    props: {
        prevSelectedCode: {
            type: String
        },
        selected: {
            type: Function
        }
    },
    data() {
        return {
            tab: 'bank'
        };
    },
    computed: {
        ...mapState({
        }),
        selectedList() {
            if (this.tab === 'bank') return getFinancialInstitutionList(BANK_CODE_LIST);
            else if (this.tab === 'securities') return getFinancialInstitutionList(SECURITIES_COMPANY_LIST);
            return [];
        }
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
        select(company) {
            if (this.selected) {
                this.selected(company);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.bank-selector {
    .grid {
        display: grid;
        grid-row-gap: 8px;
        grid-template-columns: repeat(auto-fill, 104px);
        justify-content: space-around;
    }
    .company-btn {
        width: 104px;
        height: 72px;
        padding: 16px 0;

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

    .prev-selected {
        background: linear-gradient(0deg, rgba(255, 165, 0, 0.04), rgba(255, 165, 0, 0.04)), #FFFFFF;
        border: 1px solid $orange;
        box-sizing: border-box;
        box-shadow: 0px 0px 16px rgba(236, 236, 237, 0.8);
        border-radius: 2px;
    }
}
</style>
