<!-- QR CODE -->
<template>
    <div class="qrcode">
        <canvas ref="qrcode" />
    </div>
</template>

<script>
import _ from 'lodash';
import QRCode from 'qrcode';

export default {
    name: 'Qrcode',
    components: {
    },
    props: {
        width: {
            type: Number,
            default() {
                return 140;
            }
        },
        text: {
            type: String,
            required: true
        }
    },
    data() {
        return {
        };
    },
    async mounted() {
        this.createQR();
    },
    beforeDestroy() {
    },
    methods: {
        async createQR() {
            try {
                await QRCode.toCanvas(this.$refs.qrcode, this.text, { margin: 0, width: this.width });
            } catch (err) {
                console.error(err);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.qrcode {
}
</style>
