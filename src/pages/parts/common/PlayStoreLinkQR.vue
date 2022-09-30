<!-- Play 스토어 링크가 담긴 QR 코드 노출 컴포넌트 -->
<i18n>
{
  "ko": {
    "template": {
      "label1": "몬스탁 안드로이드 앱",
      "label2": "몬스탁 안드로이드 앱 다운로드 링크"
    }
  },
  "en": {
    "template": {
      "label1": "Monstock Android App",
      "label2": "Monstock Android App Download Link"
    }
  }
}
</i18n>
<template>
    <div class="play-store-link-qr">
        <div class="f-14-b-mg" :style="{ marginBottom: '16px' }">{{ $t('template.label1') }}</div>
        <Qrcode :text="playUrl" :style="{ backgroundColor: $style.white }" :width="120" />
        <a :href="playUrl" target="_blank" rel="noopener noreferrer nofollow" :style="{ display: 'block' }">
            <img src="/img/download_playstore.png" width="180px" height="70px" :alt="$t('template.label2')" />
        </a>
    </div>
</template>

<script>
import Qrcode from 'pages/parts/common/Qrcode';

export default {
    name: 'PlayStoreLinkQR',
    components: {
        Qrcode
    },
    props: {
    },
    data() {
        return {
            playUrl: 'https://play.google.com/store/apps/details?id=com.modurich.monstock'
        };
    },
    computed: {
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
.play-store-link-qr {
    text-align: center;
}
</style>
