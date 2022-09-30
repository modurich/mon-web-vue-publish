<i18n>
{
  "ko": {
    "template": {
      "label1": "사이트 언어 선택"
    }
  },
  "en": {
    "template": {
      "label1": "choice language"
    }
  }
}
</i18n>
<template>
    <div class="language-n-currency-detail">
        <m-space-h size="8" />
        <!-- language/화폐단위 탭 -->
        <m-tabs
            v-model="tab"
            :items="[
                { label: 'Language', value: 'language', onClick: tabClick },
            ]"
        />
        <!-- 사이트 언어 선택 탭 -->
        <m-space-h size="4" />
        <fragment v-if="tab === 'language'">
            <div class="align-center" :style="{ margin: '0 12px' }">
                <div class="f-16-b-gt">{{ $t('template.label1') }}</div>
                <m-space-h size="4" />
                <q-option-group
                    :options="allowedLangList"
                    type="radio"
                    v-model="lang"
                />
            </div>
        </fragment>
    </div>
</template>

<script>
import _ from 'lodash';
import moment from 'moment';
import { lang, allowedLangList, changeLangPack } from 'boot/i18n';
import MSpaceH from 'src/components/MSpaceH.vue';

export default {
    name: 'LanguageNCurrencyDetail',
    components: {
        MSpaceH
    },
    data() {
        return {
            tab: 'language',
            lang: lang,
            allowedLangList: allowedLangList.map(lang => { return { label: lang === 'ko' ? '한국어' : 'English', value: lang }; })
        };
    },
    computed: {
    },
    watch: {
        lang: function(newVal) {
            changeLangPack(newVal);
        }
    },
    async mounted() {
    },
    methods: {
        tabClick() {
            return false;
        },
        onchangLang(newVal) {
            changeLangPack(newVal);
            // 1. url 리프레시 하는 로직(새알림 팝업에서 화면이동하는 부분 참고하면 될듯), 2. 로컬스토리지에 저장하는 로직, 3. 가입시 언어 저장되는 로직 검토
        }
    }
};
</script>

<style lang="scss">
.language-n-currency-detail {
}
</style>
