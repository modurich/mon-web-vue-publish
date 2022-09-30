<!-- 신고하기 다이어로그 -->
<i18n>
{
  "ko": {
    "inputPlaceholder": "50자 이내",
    "postBlockReasonLabel": "게시물 삭제/차단 사유",
    "postBlockReasonContent": "허위신고는 서비스 이용이 제한될 수 있으니 신중하게 신고해 주세요.",
    "reportModalTitle": "신고사유",
    "reportButtonLabel": "신고",
    "reportSelector1": "저작권 침해, 명예훼손",
    "reportSelector2": "허위사실 유포, 불공정거래 법규 위반",
    "reportSelector3": "음란물, 홍보물, 욕설",
    "reportSelector4": "반복적인 내용 도배",
    "reportSelector5": "부정행위",
    "reportSelector6": "카테고리 미부합 등 기타"
  },
  "en": {
    "inputPlaceholder": "Less than 50 letters",
    "postBlockReasonLabel": "Reasons for deletion/blocking",
    "postBlockReasonContent": "Use of false reports may be restricted, so caution is required.",
    "reportModalTitle": "Reasons for report",
    "reportButtonLabel": "Report",
    "reportSelector1": "Infringement of copyright, Defamation",
    "reportSelector2": "Spread false information, Violation of unfair trade laws",
    "reportSelector3": "pornography, publicity material, profanity",
    "reportSelector4": "Repetitive content",
    "reportSelector5": "Malfeasance",
    "reportSelector6": "Category non-conforming, etc"
  }
}
</i18n>
<template>
    <q-dialog
        ref="dialog"
        :content-class="`m-report-dialog ${$attrs.class || ''}`"
        v-bind="$attrs"
        square
        v-on="$listeners"
    >
        <div class="dialog-content">
            <div class="row align-center">
                <div class="f-16-b-mg">{{title}}</div>
                <q-space />
                <m-icon class="q-pr-4 close-btn cursor-pointer" name="close_big" width="28" height="28" @click="cancelClick" />
            </div>
            <m-space-h size="16" />
            <div :key="`accuse-${idx}`" v-for="(item, idx) in items">
                <m-radio v-model="accuseCode" :label="item.label" :val="item.value" color="orange" class="f-16-500-gt" />
                <m-space-h size="16" />
            </div>
            <m-input v-model="comments" maxlength="50" :label="$t('inputPlaceholder')" />
            <m-space-h size="16" />
            <a href="https://modurich.notion.site/0e0e8eb6ef7348a091911ecec60cbc8d" target="_blank" class="row align-center">
                <div class="f-14-b-gt">{{$t('postBlockReasonLabel')}}</div>
                <m-icon name="chevron_right" stroke-opacity="0" />
            </a>
            <div class="f-14-500-cfp" :style="{ marginTop: '16px' }">{{$t('postBlockReasonContent')}}</div>
            <m-space-h size="24" />
            <div class="row">
                <q-space />
                <m-button3 :disabled="accuseCode === 0" @click="rightButtonClick">{{rightButtonLabel}}</m-button3>
            </div>
        </div>
    </q-dialog>
</template>

<script>
export default {
    name: 'MReportDialog',
    inheritAttrs: true,
    props: {
        title: {
            type: String,
            default: function() {
                return this.$t('reportModalTitle');
            }
        },
        rightButtonLabel: {
            type: String,
            default: function() {
                return this.$t('reportButtonLabel');
            }
        },
        onCancelClick: {
            type: Function,
            default: function() {
                return () => {};
            }
        },
        onRightButtonClick: {
            type: Function,
            default: function() {
                return () => {};
            }
        },
        items: {
            type: Array,
            default: function() {
                return [
                    { label: this.$t('reportSelector1'), value: 1 },
                    { label: this.$t('reportSelector2'), value: 2 },
                    { label: this.$t('reportSelector3'), value: 3 },
                    { label: this.$t('reportSelector4'), value: 4 },
                    { label: this.$t('reportSelector5'), value: 5 },
                    { label: this.$t('reportSelector6'), value: 6 }
                ];
            }
        }
    },
    data() {
        return {
            accuseCode: 0,
            comments: ''
        };
    },
    computed: {
    },
    created() {
    },
    mounted() {
        console.log('m-report-dialog', this.item);
    },
    methods: {
        show() {
            this.$refs.dialog.show();
        },
        hide() {
            this.$refs.dialog.hide();
        },
        cancelClick() {
            console.log('cancelClick');
            this.onCancelClick();
            this.hide();
        },
        rightButtonClick() {
            this.onRightButtonClick({ accuse_code: this.accuseCode, comments: this.comments });
            this.hide();
        }
    }
};
</script>

<style lang="scss">
.m-report-dialog {
    .dialog-content {
        padding: 24px;
        width: 308px;
        background: $white;
        word-break: break-all;
    }
}
</style>
