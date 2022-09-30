<!-- 증권사별 앱링크 설정 버튼 -->
<i18n>
{
  "ko": {
    "template": {
      "label1": "증권사미설정"
    },
    "methods": {
      "modalTitle1": "증권사 앱 설정"
    }
  },
  "en": {
    "template": {
      "label1": "Security company not set"
    },
    "methods": {
      "modalTitle1": "Security company app settings"
    }
  }
}
</i18n>
<template>
    <div class="my-securities-company-setting-button">
        <div class="row align-center cursor-pointer" @click="setCompany">
            <m-icon name="settings" stroke-opacity="0" />
            <m-space-v size="8" />
            <div class="f-14-b-gt securities-company-name ellipsis" v-if="!company">{{ $t('template.label1') }}</div>
            <div class="f-14-b-gt securities-company-name ellipsis" v-else>{{$utils.getSecuritiesCompanyName(company)}}</div>
        </div>
    </div>
</template>

<script>
import _ from 'lodash';
import { mapState, mapActions, mapGetters } from 'vuex';
import { needLogin } from 'utils/dialog';

export default {
    name: 'MySecuritiesCompanySettingButton',
    props: {
    },
    data() {
        return {
            company: ''
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
        this.company = this.getCompanyCode();
    },
    beforeDestroy() {
    },
    methods: {
        getCompanyCode() {
            try {
                return localStorage.getItem('trade_company_name');
            } catch (err) {}
            return '';
        },
        // 증권사 셀렉터 호출
        async setCompany() {
            const MySecuritiesCompanySelector = (await import('pages/parts/common/MySecuritiesCompanySelector')).default;
            let dialog = null;
            const selected = ({ companyCode }) => {
                this.company = companyCode;
                dialog.hide();
            };
            dialog = this.$q.dialog({
                component: 'm-full-blank',
                parent: this,
                middleScroll: true,
                title: {
                    render: (h) => {
                        return (
                            <span class="f-16-b-mg ellipsis">{this.$t('methods.modalTitle1')}</span>
                        );
                    }
                },
                children: {
                    render: (h) => {
                        // console.log('text', text);
                        return (
                            <MySecuritiesCompanySelector style={{ margin: '0 12px' }} selected={selected} />
                        );
                    }
                }
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.my-securities-company-setting-button {
    .securities-company-name {
        max-width: 78px;
    }
}
</style>
