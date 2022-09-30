<!-- 메조미디어 동영상 광고 -->
<i18n>
{
  "ko": {
    "methods": {
      "dispatchTitle": "럭키박스에 당첨되었습니다."
    }
  },
  "en": {
    "methods": {
      "dispatchTitle": "You have won the lucky box."
    }
  }
}
</i18n>
<template>
    <div class="ad-mezzo">
        <video id="adArea_mezzo" class="ad-mezzo-video"></video>
        <!-- <div id="adArea_mezzo" class="ad-mezzo-video"></div> -->
    </div>
</template>

<script>
import _ from 'lodash';
import VueScript2 from 'vue-script2';
import { mapState, mapActions, mapGetters } from 'vuex';
import { prepareAdView, completeAdView } from 'apis/common';
import bcrypt from 'external/bcrypt';

// https://publisher.man-plus.com/Service/media/media_list
// http://docs.meba.kr/s-plus/sample_v200/video_step1.html
// http://docs.meba.kr/s-plus/sdk/javascript_v200/video/
export default {
    name: 'AdMezzo',
    props: {
        /* enum ContentsCode {
            CC_NA = 0; // N/A
            INSIGHT = 1; // 인사이트
            INSIGHT_REPLY = 2; // 인사이트댓글
            POST = 3; // 포스트
            POST_REPLY = 4; // 포스트댓글
            BLASH = 5; // 추천종목
            BLASH_REVIEW = 6; // 추천종목리뷰
        } */
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
            secret: null
        };
    },
    computed: {
        ...mapState({
            userInfo: state => state.auth.userInfo
        })
    },
    beforeCreate() {
    },
    async created() {
    },
    async mounted() {
        this.init();
    },
    activated() {
        this.init();
    },
    deactivated() {
        this.clear();
    },
    beforeDestroy() {
        // 메조미디어 광고가 로딩되는 타이밍에 페이지가 전환되버리면 인터벌 에러가 발생할수도 있다
        this.beforeDestroied = true;
        this.clear();
    },
    methods: {
        init: _.debounce(function() {
            VueScript2.load('https://advimg.ad-mapps.com/sdk/js/ver/201/ad_movie_script.js').then(() => {
                if (!this.beforeDestroied) {
                    this.adStart();
                }
            });
        }, 300),
        async adStart() {
            if (this.contentsCode && this.contentsSeq) {
                const { header, salt } = await prepareAdView({
                    contents_code: this.contentsCode,
                    contents_seq: this.contentsSeq
                });
                const sha256hash = this.$utils.getSha256Hash(this.userInfo.user_id + this.contentsCode + this.contentsSeq);
                this.secret = bcrypt.hashSync(sha256hash, salt);
            }

            const { MezzoVideoAD } = window;
            const mezzo_movie = new MezzoVideoAD();
            this.mezzo_movie = mezzo_movie;
            const targetId = 'adArea_mezzo';

            // screen mode : INJECTION, OVERLAY
            // target id : DOM element id
            // resolution : 1024, 800, 480
            mezzo_movie.setView('INJECTION', targetId, 1024,
                {
                    'close_btn': {
                        'show': true,
                        'images': [
                            'https://advimg.ad-mapps.com/sdk/M_PLUS/Image/script/movie/close.png'
                        ]
                    },
                    'auto_play': true,
                    'auto_replay': false,
                    'click_full_area': false,
                    'muted': true,
                    'viewability': false,
                    'sound_btn': {
                        'show': true,
                        'images': [
                            'https://advimg.ad-mapps.com/sdk/M_PLUS/Image/script/movie/on.png',
                            'https://advimg.ad-mapps.com/sdk/M_PLUS/Image/script/movie/mute.png'
                        ]
                    },
                    'click_btn': {
                        'show': true
                    },
                    'post_click': '2',
                    'skip_btn': {
                        'show': true
                    }
                }
            );

            // mezzo_movie.setArea(false);
            mezzo_movie.setArea(true, 100);

            const codes = {
                'adid': '',
                'mPublisher': '1618',
                'mMedia': '32399',
                'mSection': this.sectionCode,
                'uAgeLevel': '1', // 0: 만 13세 이하, 1 : 만 13세 이상
                'keyword': '' // encodeURIComponent(키워드1^키워드2^키워드3)
            };

            mezzo_movie.request(codes,
                {
                    success: (type, status, data) => {
                        console.log('[SUCCESS] type : ' + type + ' status : ' + status + ' data : ' + JSON.stringify(data));
                    },
                    fail: (type, status, data) => {
                        console.log('[FAIL] type : ' + type + ' status : ' + status + ' data : ' + JSON.stringify(data));
                        this.failAdView();
                    },
                    event: async(type, status, data) => {
                        if (type === 'ended') {
                            this.completeAdView();
                        }
                        console.log('[EVENT] type : ' + type + ' status : ' + status + ' data : ' + JSON.stringify(data));
                    }
                }
            );
        },
        async completeAdView() {
            this.endedCallback();
            if (this.contentsCode && this.contentsSeq) {
                const { header, result, ad_view_cnt, vp, luckybox } = await completeAdView({
                    contents_code: this.contentsCode,
                    contents_seq: this.contentsSeq,
                    secret: this.secret
                });
                if (vp && vp.ad > 0) {
                    // 추가 VP획득 시 vp 값이 리턴된다
                    await this.$store.dispatch('auth/getVotingPower');
                    this.$q.notify(`${vp.ad}VP 획득`);
                }
                if (luckybox && luckybox.lucky_seq) {
                    await this.$store.dispatch('common/showOpenLuckybox', { parent: this, luckybox, title: this.$t('methods.dispatchTitle') });
                }
            }
        },
        failAdView() {
            this.endedCallback();
        },
        clear() {
            try {
                if (this.mezzo_movie && this.mezzo_movie.clear) this.mezzo_movie.clear();
            } catch (err) {
                console.warn('clear 호출 에러발생', err);
            }
        }
    }
};
</script>

<style lang="scss">
.ad-mezzo {
}
.ad-mezzo-video {
    width: 100%;
}
</style>
