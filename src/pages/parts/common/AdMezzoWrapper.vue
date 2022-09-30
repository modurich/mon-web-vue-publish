<template>
    <div class="ad-mezzo-wrapper" v-if="showAdMezzo">
        <q-no-ssr>
            <div>
                <AdMezzo ref="adMezzo" :contents-code="contentsCode" :contents-seq="contentsSeq" :ended-callback="ended" :section-code="sectionCode" />
            </div>
        </q-no-ssr>
    </div>
    <AdsenseWrapper type="adMezzoEnded" v-else-if="isEnded" />
</template>

<script>
import _ from 'lodash';
import AdMezzo from 'pages/parts/common/AdMezzo.vue';
import AdsenseWrapper from 'pages/parts/common/AdsenseWrapper';

export default {
    name: 'AdMezzoWrapper',
    components: {
        AdMezzo,
        AdsenseWrapper
    },
    props: {
        contentsCode: {
            type: Number
        },
        contentsSeq: {
            type: String
        },
        sectionCode: {
            type: String,
            required: true
        },
        endedCallback: {
            type: Function,
            default: () => {}
        }
    },
    data() {
        return {
            showAdMezzo: true,
            isEnded: false
        };
    },
    mounted() {
    },
    activated() {
        this.showAdMezzo = true;
    },
    deactivated() {
        this.showAdMezzo = false;
        this.isEnded = false;
    },
    methods: {
        clear() {
            if (this.$refs.adMezzo) {
                this.$refs.adMezzo.clear();
            }
        },
        ended() {
            this.endedCallback();
            this.showAdMezzo = false;
            this.isEnded = true;
        }
    }
};
</script>

<style lang="scss" scoped>
.ad-mezzo-wrapper {
}
</style>
