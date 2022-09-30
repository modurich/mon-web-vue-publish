<!-- 애드센스 -->
<template>
    <div class="adsense-component">
        <q-no-ssr v-if="adsense[type] && adsense[type].isActive">
            <script2
                type="text/javascript"
                async="true"
                src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
            />
            <ins
                ref="adsenseIns"
                class="adsbygoogle"
                style="display:block"
                :data-ad-format="adsense[type].adFormat"
                :data-ad-client="ADSENSE_AD_CLIENT_KEY"
                :data-ad-slot="adsense[type].adSlot"
                :data-full-width-responsive="adsense[type].fullWidthResponsive"
            >
            </ins>
            <script2 type="text/javascript">
                (adsbygoogle = window.adsbygoogle || []).push({});
            </script2>
        </q-no-ssr>
    </div>
</template>

<script>
import _ from 'lodash';
import { mapState, mapActions, mapGetters } from 'vuex';

// Adsense 빈광고 처리
// 구글 광고를 항상 나오는것이 아니며 나오지 않게되었을때는 resize-me 라는 메시지를 리턴한다.
// https://support.google.com/adsense/thread/73423586?hl=ko
// https://stackoverflow.com/questions/64465927/adsense-ad-iframe-has-an-empty-html-body-1-3-of-the-time
// https://stackoverflow.com/questions/49677547/how-to-programmatically-collapse-space-in-empty-div-when-google-ad-does-not-show
try {
    window.addEventListener('message', event => {
        try {
            let message = JSON.parse(event.data);
            if (message.msg_type === 'resize-me') {
                let shouldCollapseAd = false;
                let qid = '';

                for (let index in message.key_value) {
                    let key = message.key_value[index].key;
                    let value = message.key_value[index].value;

                    if (key === 'r_nh' && value === '0') {
                        shouldCollapseAd = true;
                    }
                    if (key === 'qid') {
                        qid = value;
                    }
                }

                if (shouldCollapseAd) {
                    setTimeout(() => {
                        try {
                            const elmt = document.querySelector(`iframe[data-google-query-id="${qid}"`).closest('.adsense-component');
                            // console.log('shouldCollapseAd', qid, message, elmt);
                            // elmt.style.backgroundColor = 'red';
                            elmt.style.display = 'none';
                        } catch (err) {
                            console.error(`Adsense resize-me error '${qid}'`, err);
                        }
                    }, 0);
                }
            }
        } catch (e) {
            // console.error(e, event);
        }
    });
} catch (err) {}

export default {
    name: 'Adsense',
    props: {
        /**
         * type 표시되는데 사용될 firebase 에 정의된 타입명
         */
        type: {
            type: String,
            required: true
        }
    },
    data() {
        return {
        };
    },
    computed: {
        ...mapState({
            adsense: state => state.common.adsense
        })
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
    }
};
</script>

<style lang="scss" scoped>
.adsense-component {
}
</style>
