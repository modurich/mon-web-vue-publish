<i18n>
{
  "ko": {
    "isDelisting": "상장폐지",
    "haltYn": "거래정지",
    "admisuYn": "관리종목",
    "mktWarnTpCd01": "투자주의",
    "mktWarnTpCd02": "투자경고",
    "mktWarnTpCd03": "투자위험",
    "invstcautnRemndIsuYn": "투자주의환기",
    "srttrmOverheatIsuTpCd": "단기과열종목"
  },
  "en": {
    "isDelisting": "Delisting",
    "haltYn": "Suspension of trading",
    "admisuYn": "Managing stocks",
    "mktWarnTpCd01": "Investment Cautions",
    "mktWarnTpCd02": "Investment Warning",
    "mktWarnTpCd03": "Investment Risk",
    "invstcautnRemndIsuYn": "Investor Alerts",
    "srttrmOverheatIsuTpCd": "short-term overheating stock"
  }
}
</i18n>
<template>
    <div class="m-vi-status row align-center" :style="style">
        <div v-if="item.isDelisting" :style="{ color: $style.crayolaFlamingoPink }">
            {{$t('isDelisting')}}
        </div>
        <fragment v-if="!item.isDelisting">
            <div v-if="item.haltYn === 'Y'" :style="{ color: $style.crayolaFlamingoPink }">
                {{$t('haltYn')}}
            </div>
            <div v-if="item.admisuYn === 'Y'" :style="{ color: $style.crayolaFlamingoPink }">
                {{$t('admisuYn')}}
            </div>
            <div v-if="item.mktWarnTpCd === '01'" :style="{ color: $style.orange }">
                {{$t('mktWarnTpCd01')}}
            </div>
            <div v-if="item.mktWarnTpCd === '02'" :style="{ color: $style.orange }">
                {{$t('mktWarnTpCd02')}}
            </div>
            <div v-if="item.mktWarnTpCd === '03'" :style="{ color: $style.orange }">
                {{$t('mktWarnTpCd03')}}
            </div>
            <div v-if="item.invstcautnRemndIsuYn === 'Y'" :style="{ color: $style.orange }">
                {{$t('invstcautnRemndIsuYn')}}
            </div>
            <div v-if="item.srttrmOverheatIsuTpCd === '2'" :style="{ color: $style.orange }">
                {{$t('srttrmOverheatIsuTpCd')}}
            </div>
        </fragment>
    </div>
</template>

<script>
export default {
    name: 'MViStatus',
    props: {
        item: Object,
        existStyle: {
            type: [Object, String]
        }
    },
    computed: {
        style() {
            if (this.item.isDelisting || this.item.haltYn === 'Y' || this.item.admisuYn === 'Y' || this.item.mktWarnTpCd === '01' ||
                this.item.mktWarnTpCd === '02' || this.item.mktWarnTpCd === '03' || this.item.invstcautnRemndIsuYn === 'Y' ||
                this.item.srttrmOverheatIsuTpCd === '2') {
                return this.existStyle;
            }
            return {};
        }
    },
    methods: {
    }
};
</script>

<style lang="scss">
.m-vi-status {
    font-size: 14px;
    font-weight: bold;
        & > div:not(:first-child) {
        margin-left: 8px;
    }
}
</style>
