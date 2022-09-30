<!-- 공유하기 팝업 -->
<i18n>
{
    "ko": {
        "template": {
            "label1": "원문 복사",
            "label2": "URL 복사",
            "label3": "공유쿼터",
            "label4": "네이버 종목토론실 바로가기",
            "label5": "공유하기 아이콘",
            "label6": "네이버카페",
            "label7": "다음카페",
            "label8": "인스타",
            "label9": "블로그",
            "label10": "트위터",
            "label11": "페이스북",
            "label12": "밴드",
            "label13": "카카오스토리",
            "label14": "앱으로 공유",
            "label15": "이벤트 주의사항",
            "label16": "1. 공유 게시글은 반드시 전체공개가 되어 있어야 하며 리워드 신청한 URL로 회원가입 없이 누구나 볼 수 있는 상태여야 합니다.",
            "label17": "2. 공유 게시글은 최소24시간 이상 공개가 되어있어야 하며 24시간 이내 삭제, 비공개 시에는 어뷰징으로 판단할 수 있습니다.",
            "label18": "3. 방문자가 거의 없어 트래픽을 기대하기 어려운 채널에 지속해서 공유하는 것은 어뷰징으로 판단할 수 있습니다.",
            "label19": "4. 어뷰징 적발 시 지급된 코인을 회수할 수 있습니다.",
            "label20": "5. 몬코인은 인사이트 공유 후 해당 인사이트에서 코인지급 요청까지 완료하여야 지급됩니다.",
            "label21": "URL이 복사되었습니다"
        },
        "computed": {
            "shareQuota": {
                "label1": "네이버 종목토론실",
                "label2": "네이버 종목토론실(종료)",
                "label3": "기타",
                "label4": "기타(종료)"
            }
        },
        "methods": {
            "copyToClipboard": {
                "label1": "URL이 복사되었습니다"
            },
            "shareBand": {
                "label1": "(출처 : 몬스탁)"
            },
            "shareTwitter": {
                "label1": "(출처 : 몬스탁)"
            },
            "insightContentCopyToClipboard": {
                "label1": "원문복사 완료",
                "label2": "복사에 실패하였습니다"
            },
            "notify1": "URL이 복사되었습니다"
        }
    },
    "en": {
        "template": {
            "label1": "Copy original text",
            "label2": "Copy URL",
            "label3": "Shared quota",
            "label4": "Go to Naver Event Discussion Room",
            "label5": "Share icon",
            "label6": "Naver Cafe",
            "label7": "Daum Cafe",
            "label8": "Instagram",
            "label9": "Blog",
            "label10": "Twitter",
            "label11": "Facebook",
            "label12": "Band",
            "label13": "Kakao Story",
            "label14": "Share as App",
            "label15": "Event notice",
            "label16": "1. Shared postings must be made public, and the URL for which you applied for rewards must be in a state where anyone can view them without registering as a member.",
            "label17": "2. Shared posts must be open for at least 24 hours, and deleted within 24 hours or private can be judged as abusing.",
            "label18": "3. Continuing to share with a channel with few visitors and difficult to expect traffic is considered abusive.",
            "label19": "4. When abusing is detected, you can recover the paid coins.",
            "label20": "5. Moncoin will be paid after sharing Insight and completing the request for coin payment on the Insight.",
            "label21": "URL copied"
        },
        "computed": {
            "shareQuota": {
               "label1": "Naver Event Discussion Room",
                "label2": "Naver Event Discussion Room (Closed)",
                "label3": "Other",
                "label4": "Other (exit)"
            }
        },
        "methods": {
            "copyToClipboard": {
                "label1": "URL copied"
            },
            "shareBand": {
                "label1": "(Source: Monstock)"
            },
            "shareTwitter": {
                "label1": "(Source: Monstock)"
            },
            "insightContentCopyToClipboard": {
                "label1": "Copy complete",
                "label2": "Copy failed"
            },
            "notify1": "URL copied."
        }
    }
}
</i18n>

<template>
    <div class="share-stock-insight">
        <div class="row">
            <div class="flex-1 align-center ellipsis copy-url f-12-500-gt">{{shareUrl}}</div>
        </div>
        <m-space-h size="16" />
        <div class="row">
            <m-button3 class="flex-1" lined @click="insightContentCopyToClipboard">{{ $t('template.label1') }}</m-button3>
            <m-button3 class="flex-1" @click="copyToClipboard">{{ $t('template.label2') }}</m-button3>
        </div>
        <m-space-h size="16" />
        <fragment v-if="type === 1 && shareRemaining && shareQuota">
            <div class="f-14-500-gt">{{ $t('template.label3') }}: {{shareQuota}} </div>
        </fragment>
        <m-space-h size="16" />
        <div v-if="div_code === 1" class="naver-link-button row align-center cursor-pointer" @click="shareNaver">
            <div class="flex-1">
                <div class="f-14-b-wt">{{ $t('template.label4') }}</div>
                <div class="f-12-500-wt" v-if="itemData && !_.isEmpty(itemData)">{{itemData.stockName}}({{itemData.issueCode}})</div>
                <div class="f-12-500-wt" v-else-if="relIsinCode && relIsinCode.length > 0">{{relIsinCode[0].name}}({{relIsinCode[0].code}})</div>
            </div>
            <m-icon name="naver" :color="$style.white" stroke-opacity="0" />
        </div>
        <m-space-h size="32" />
        <div class="row justify-start">
            <div class="share-icon-wrapper text-center cursor-pointer" @click="shareNaverCafe">
                <img src="/icons/outside/naverCafe.png" class="share-icon" :alt="$t('template.label5')" />
                <m-space-h size="8" />
                <div class="f-14-500-gt">{{ $t('template.label6') }}</div>
            </div>
            <div class="share-icon-wrapper text-center cursor-pointer" @click="shareDaumCafe">
                <img src="/icons/outside/daumCafe.png" class="share-icon" :alt="$t('template.label5')" />
                <m-space-h size="8" />
                <div class="f-14-500-gt">{{ $t('template.label7') }}</div>
            </div>
            <div class="share-icon-wrapper text-center cursor-pointer" @click="shareInstagram">
                <img src="/icons/outside/instagram.png" class="share-icon" :alt="$t('template.label5')" />
                <m-space-h size="8" />
                <div class="f-14-500-gt">{{ $t('template.label8') }}</div>
            </div>
            <div class="share-icon-wrapper text-center cursor-pointer" @click="shareBlog">
                <img src="/icons/outside/naverBlog.png" class="share-icon" :alt="$t('template.label5')" />
                <m-space-h size="8" />
                <div class="f-14-500-gt">{{ $t('template.label9') }}</div>
            </div>
            <div class="share-icon-wrapper text-center cursor-pointer" @click="shareTwitter">
                <img src="/icons/outside/twitter.png" class="share-icon" :alt="$t('template.label5')" />
                <m-space-h size="8" />
                <div class="f-14-500-gt">{{ $t('template.label10') }}</div>
            </div>
            <div class="share-icon-wrapper text-center cursor-pointer" @click="shareFacebook">
                <img src="/icons/outside/facebook.png" class="share-icon" :alt="$t('template.label5')" />
                <m-space-h size="8" />
                <div class="f-14-500-gt">{{ $t('template.label11') }}</div>
            </div>
            <div class="share-icon-wrapper text-center cursor-pointer" @click="shareBand">
                <img src="/icons/outside/band.png" class="share-icon" :alt="$t('template.label5')" />
                <m-space-h size="8" />
                <div class="f-14-500-gt">{{ $t('template.label12') }}</div>
            </div>
            <div class="share-icon-wrapper text-center cursor-pointer" @click="shareKakaoStory">
                <img src="/icons/outside/kakaoStory.png" class="share-icon" :alt="$t('template.label5')" />
                <m-space-h size="8" />
                <div class="f-14-500-gt">{{ $t('template.label13') }}</div>
            </div>
        </div>
        <m-space-h size="16" />
        <fragment v-if="showMobileNativeShare">
            <div class="row">
                <m-button3 class="flex-1" lined @click="shareMobileNative">{{ $t('template.label14') }}</m-button3>
            </div>
            <m-space-h size="32" />
        </fragment>
        <fragment v-if="type === 1">
            <div class="f-14-b-cfp">{{ $t('template.label15') }}</div>
            <div class="f-12-500-gt" :style="{ whiteSpace: 'pre-wrap' }">
                <span>{{`${$t('template.label16')}
${$t('template.label17')}
${$t('template.label18')}
${$t('template.label19')}
${$t('template.label20')}`}}</span>
            </div>
        </fragment>
    </div>
</template>

<script>
import _ from 'lodash';
import { mapState, mapActions, mapGetters } from 'vuex';
import { shareInsight } from 'utils/dialog';
import MobileDetect from 'mobile-detect';

export default {
    name: 'ShareStockInsight',
    props: {
        type: {
            type: Number,
            default: function() {
                return 0; // 0: 일반 공유, 1: 이벤트공유
            }
        },
        title: {
            type: String,
            required: true
        },
        shareUrl: {
            type: String,
            required: true
        },
        itemData: {
            type: Object
        },
        relIsinCode: {
            type: Array
        },
        externalContent: {
            type: String
        },
        shareRemaining: {
            type: Object
        }
    },
    data() {
        const md = new MobileDetect(window.navigator.userAgent);
        return {
            showMobileNativeShare: md.mobile() && navigator.share
        };
    },
    computed: {
        ...mapState({
            div_code: state => state.common.div_code
        }),
        isShareRemainNaver: function() {
            return this.shareInfoNaver && this.shareInfoNaver.remainings > 0;
        },
        isShareRemainEtc: function() {
            return this.shareInfoEtc && this.shareInfoEtc.remainings > 0;
        },
        // 네이버 공유보상 가능횟수 정보
        shareInfoNaver: function() {
            try {
                const { by_media, left_budget_coin, left_time_sec } = this.shareRemaining;
                const naver = _.filter(by_media, { media_code: 1 });
                if (naver.length > 0) return naver[0];
            } catch (err) {}
            return null;
        },
        // 기타 공유보상 가능횟수가 남아있는지
        shareInfoEtc: function() {
            try {
                const { by_media, left_budget_coin, left_time_sec } = this.shareRemaining;
                const etc = _.filter(by_media, { media_code: 9 });
                if (etc.length > 0) return etc[0];
            } catch (err) {}
            return null;
        },
        shareQuota() {
            try {
                const naverText = this.isShareRemainNaver ? this.$t('computed.shareQuota.label1', [ this.shareInfoNaver.quota - this.shareInfoNaver.remainings, this.shareInfoNaver.quota ]) : this.$t('computed.shareQuota.label2');
                const etcText = this.shareInfoEtc ? this.$t('computed.shareQuota.label3', [ this.shareInfoEtc.quota - this.shareInfoEtc.remainings, this.shareInfoEtc.quota ]) : this.$t('computed.shareQuota.label4');
                return `${naverText}, ${etcText}`;
            } catch (err) {}
            return null;
        }
    },
    beforeCreate() {
    },
    async created() {
    },
    async mounted() {
        this.copyToClipboard();
    },
    beforeDestroy() {
    },
    methods: {
        copyToClipboard() {
            this.$utils.copyToClipboard(this.shareUrl);
            this.$q.notify(this.$t('methods.notify1'));
        },
        shareNaver() {
            if (this.itemData && this.itemData.issueCode) {
                window.open(`https://m.stock.naver.com/item/main.nhn#/stocks/${this.itemData.issueCode}/discuss`, '_blank');
            } else if (this.relIsinCode && this.relIsinCode.length > 0) {
                window.open(`https://m.stock.naver.com/item/main.nhn#/stocks/${this.itemData.issueCode}/discuss`, '_blank');
            } else {
                window.open(`https://m.stock.naver.com`, '_blank');
            }
        },
        shareNaverCafe() {
            window.open(`https://section.cafe.naver.com/`, '_blank');
        },
        shareDaumCafe() {
            window.open(`https://top.cafe.daum.net/`, '_blank');
        },
        shareInstagram() {
            window.open(`https://www.instagram.com/`, '_blank');
        },
        shareKakao() {
            // kakao 링크는 처음 버튼에 클릭 이벤트를 sdk에서 걸어주는 방식
            try {
                const { Kakao } = window;
                Kakao.Link.sendScrap({
                    requestUrl: this.shareUrl
                });
            } catch (err) {}
        },
        shareKakaoStory() {
            window.open(`https://accounts.kakao.com/login/kakaostory`, '_blank');
        },
        shareBlog() {
            const title = `${this.title}`;
            window.open(`http://blog.naver.com/openapi/share?url=${encodeURIComponent(this.shareUrl)}&title=${encodeURIComponent(title)}`, '_blank');
        },
        shareBand() {
            const body = this.$t('methods.shareBand.label1', [ this.title, this.shareUrl ]);
            window.open(`https://band.us/plugin/share?body=${encodeURIComponent(body)}&route=${encodeURIComponent(this.shareUrl)}`, '_blank');
        },
        shareFacebook() {
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.shareUrl)}`, '_blank');
        },
        shareTwitter() {
            const text = this.$t('methods.shareTwitter.label1', [ this.title, this.shareUrl ]);
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
        },
        shareMobileNative() {
            navigator.share({
                title: this.title,
                url: this.shareUrl
            }).then(() => {
                console.log('Thanks for sharing!');
            }).catch(console.error);
        },
        // 원문복사
        async insightContentCopyToClipboard() {
            if (this.externalContent) {
                this.$utils.copyToClipboardWithHtml(this.externalContent);
                this.$q.notify(this.$t('methods.insightContentCopyToClipboard.label1'));
            } else {
                this.$q.notify(this.$t('methods.insightContentCopyToClipboard.label2'));
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.share-stock-insight {
    padding: 16px 12px;
    .share-icon-wrapper {
        width: 25%;
        height: auto;
        margin-bottom: 16px;

        .share-icon {
            width: 40px;
            height: 40px;
        }
    }

    .copy-url {
        border: 1px solid $ghost-white;
        box-sizing: border-box;
        border-radius: 2px;
        height: 40px;
        padding: 11px 16px;
    }

    .naver-link-button {
        background: #31B24A;
        color: $white;
        padding: 9px 12px 8px 16px;
        height: 56px;
    }

    @media (max-width: $breakpoint-xs-max) {
        .share-icon-wrapper {
            width: 25%;
            height: auto;
        }
    }
}
</style>
