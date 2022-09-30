<!-- QR CODE -->
<i18n>
{
  "ko": {
    "methods": {
      "notify1": "카메라 접근 권한을 부여해야 합니다",
      "notify2": "연결된 카메라가 없습니다",
      "notify3": "카메라 접근을 위해서는 HTTPS URL로 접속되어야합니다",
      "notify4": "카메라가 이미 사용중입니다",
      "notify5": "설치된 카메라가 적합하지 않습니다",
      "notify6": "이 브라우저에서는 카메가가 지원되지 않습니다",
      "notify7": "알 수 없는 카메라 에러 - {0}"
    }
  },
  "en": {
    "methods": {
      "notify1": "Please grant the camera access",
      "notify2": "No camera is connected",
      "notify3": "You must connect to the HTTPS URL to access the camera",
      "notify4": "The camera is already in use",
      "notify5": "The installed camera is not suitable",
      "notify6": "Camera is not supported in this browser",
      "notify7": "Unknown camera error - {0}"
    }
  }
}
</i18n>
<template>
    <div class="qrcode-reader">
        <QrcodeStream v-if="activated" @decode="onDecode" @init="onInit" />
    </div>
</template>

<script>
import _ from 'lodash';
import { QrcodeStream } from 'vue-qrcode-reader';

export default {
    name: 'QrcodeReader',
    components: {
        QrcodeStream
    },
    props: {
    },
    data() {
        return {
            activated: true,
            result: ''
        };
    },
    async mounted() {
    },
    activated() {
        this.activated = true;
    },
    deactivated() {
        this.activated = false;
    },
    beforeDestroy() {
    },
    methods: {
        async onInit(promise) {
            try {
                await promise;
            } catch (error) {
                if (error.name === 'NotAllowedError') {
                    // this.error = 'ERROR: you need to grant camera access permission';
                    this.$q.notify(this.$t('methods.notify1'));
                } else if (error.name === 'NotFoundError') {
                    // this.error = "ERROR: no camera on this device"
                    this.$q.notify(this.$t('methods.notify2'));
                } else if (error.name === 'NotSupportedError') {
                    // this.error = 'ERROR: secure context required (HTTPS, localhost)';
                    this.$q.notify(this.$t('methods.notify3'));
                } else if (error.name === 'NotReadableError') {
                    // this.error = 'ERROR: is the camera already in use?';
                    this.$q.notify(this.$t('methods.notify4'));
                } else if (error.name === 'OverconstrainedError') {
                    // this.error = 'ERROR: installed cameras are not suitable';
                    this.$q.notify(this.$t('methods.notify5'));
                } else if (error.name === 'StreamApiNotSupportedError') {
                    // this.error = 'ERROR: Stream API is not supported in this browser';
                    this.$q.notify(this.$t('methods.notify6'));
                } else if (error.name === 'InsecureContextError') {
                    // this.error = 'ERROR: Camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.';
                    this.$q.notify(this.$t('methods.notify3'));
                } else {
                    // this.error = `ERROR: Camera error (${error.name})`;
                    this.$q.notify(this.$t('methods.notify7', [error.name]));
                }
            }
        },
        onDecode(result) {
            console.log('QR CODE', result);
            this.$emit('input', result);
        }
    }
};
</script>

<style lang="scss" scoped>
.qrcode-reader {
}
</style>
