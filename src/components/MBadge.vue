<!-- 유저정보: 뱃지 (툴팁) -->
<i18n>
{
  "ko": {
    "methods": {
      "label1": "가입 시 기본 등급",
      "label2": "최근 6개월 등록 5건",
      "label3": "최근 6개월 평가 10건",
      "label4": "최근 6개월 평가 10건\n성공률 60%~",
      "label5": "최근 6개월 평가 20건\n성공률 70.00~74.99%",
      "label6": "최근 6개월 평가 20건\n성공률 75.00~79.99%",
      "label7": "최근 6개월 평가 20건\n성공률 80.00~84.99%",
      "label8": "최근 6개월 평가 20건\n성공률 85.00~89.99%",
      "label9": "최근 6개월 평가 30건\n성공률 90.00~94.99%",
      "label10": "최근 6개월 평가 30건\n성공률 95.00%~",
      "label11": "최근 6개월 평가 30건\n성공률 95%~, 괴리율 {0}10%",
      "label12": "조건1 또는 2 중 하나 충족\n1)최근 6개월 평가 50건\n성공률 95.00%~\n2)최근 6개월 평가 30건\n성공률 95.00%~, 괴리율 {0}2.00%",
      "label13": "일개미\n활동점수 300P 이하",
      "label14": "병정개미\n활동점수 300P 이상",
      "label15": "귀족개미\n활동점수 800P 이상",
      "label16": "여왕개미\n활동점수 1500P 이상",
      "label17": "몬스터개미\n활동점수 2500P 이상",
      "label18": "- R★이상\n- BLASH 5건 이상 평가, 성공률 50% 이상, 수익률 0% 이상\n- 거버넌스 의제로 PRO 제안 가결",
      "label19": "경력/자격 인증"
    }
  },
  "en": {
    "methods": {
      "label1": "Basic level upon signup",
      "label2": "5 registrations in last 6 months",
      "label3": "10 evaluations in last 6 months",
      "label4": "In last 6 month evaluation, 10 cases\nsuccess rate 60%~",
      "label5": "In last 6 month evaluation, 20 cases\nsuccess rate 70.00~74.99%",
      "label6": "In last 6 month evaluation, 20 cases\nsuccess rate 75.00~79.99%",
      "label7": "In last 6 month evaluation, 20 cases\nsuccess rate 80.00~84.99%",
      "label8": "In last 6 month evaluation, 20 cases\nsuccess rate 85.00~89.99%",
      "label9": "In last 6 month evaluation, 30 cases\nsuccess rate 90.00~94.99%",
      "label10": "In last 6 month evaluation, 30 cases\nsuccess rate 95.00%~",
      "label11": "In last 6 month evaluation, 30 cases\nsuccess rate 95%~, gap rate {0}10%",
      "label12": "Either condition 1 or 2 is met\n1) 50 evaluations in last 6 months\nSuccess rate 95.00%~\n2)In the last 6 months, 30 cases\nsuccess rate 95.00%~, gap rate {0} 2.00%",
      "label13": "일개미\nActivity score below 300p",
      "label14": "병정개미\nActivity score of 300P or higher",
      "label15": "귀족개미\nActivity score of 800P or higher",
      "label16": "여왕개미\nActivity score of 1500P or higher",
      "label17": "몬스터개미\nActivity score of 2500P or higher",
      "label18": "- R★ or higher\n- 5 or more BLASH evaluations, success rate over 50%, yield over 0%\n- Approval of PRO proposal as a governance agenda",
      "label19": "Experience/Qualify certification"
    }
  }
}
</i18n>
<template>
    <div
        class="m-badge"
        v-if="codeName && tooltipMessage"
        @click.prevent.stop="showTooltip"
    >
        <div :class="`m-badge-${codeName} m-badge-${codeName}-dims`" />
        <q-tooltip
            v-model="showing"
            v-if="!_.isEmpty(tooltipMessage)"
            anchor="bottom middle"
            self="top middle"
            content-class="m-tooltip"
        >
            <div class="content">{{tooltipMessage}}</div>
        </q-tooltip>
    </div>
    <div :class="`m-badge m-badge-${codeName} m-badge-${codeName}-dims`" v-else-if="codeName" />
</template>

<script>
export default {
    name: 'MBadge',
    data() {
        return {
            showing: false
        };
    },
    props: {
        type: {
            // grade / activity / normal
            type: String,
            required: true
        },
        code: {
            type: [String, Number],
            default: function() {
                return '';
            }
        },
        // type 이 grade 일때 admin 또는 bot 을 구분하기 위한 부가정보
        userInfo: {
            type: Object,
            default: function() {
                return {};
            }
        },
        tooltip: {
            type: String
        }
    },
    computed: {
        isAdmin: function() {
            try {
                if (this.userInfo && this.userInfo.user_type === 3) return true;
            } catch (err) {}
            return false;
        },
        isBot() {
            return this.$utils.isBotId(this.userInfo.user_id);
        },
        tooltipMessage: function() {
            return this.getTooltip();
        },
        codeName: function() {
            if (this.type === 'grade') {
                if (this.isAdmin) {
                    return `adm`;
                } else if (this.isBot) {
                    return `bot`;
                } else {
                    return `${this.type.toLowerCase()}_${this.getGradeCodeName().toLowerCase()}`;
                }
            } else if (!this.code) {
                return '';
            } else if (this.type === 'activity') {
                return `${this.type.toLowerCase()}_${`${this.code}`.toLowerCase()}`;
            } else {
                return `${`${this.code}`.toLowerCase()}`;
            }
        }
    },
    inheritAttrs: true,
    methods: {
        showTooltip() {
            if (this.tooltipMessage) {
                this.showing = true;
            }
        },
        hideTooltip() {
            this.showing = false;
        },
        /**
         * 뱃지의 코드명으로 툴팁 내용을 가져온다.
         * @param {String} code 뱃지의 코드명(r, r1, ...)
         * @param {String} defaultMsg 맞는 내용이 없을때 기본적으로 리턴할 메시지
         */
        getTooltip() {
            if (this.tooltip !== undefined) return this.tooltip;
            const code = `${this.code}`.toLowerCase();
            if (this.type === 'grade' && this.isAdmin) {
                return '';
            } else if (this.type === 'grade' && this.isBot) {
                return '';
            } else if (this.type === 'grade') {
                const gradeCode = this.getGradeCodeName();
                switch (gradeCode) {
                case 'r1':
                    return this.$t('methods.label1');
                case 'r2':
                    return this.$t('methods.label2');
                case 'r3':
                    return this.$t('methods.label3');
                case 'rs':
                    return this.$t('methods.label4');
                case 'pl1':
                    return this.$t('methods.label5');
                case 'pl2':
                    return this.$t('methods.label6');
                case 'pl3':
                    return this.$t('methods.label7');
                case 'pls':
                    return this.$t('methods.label8');
                case 'cl1':
                    return this.$t('methods.label9');
                case 'cl2':
                    return this.$t('methods.label10');
                case 'cls':
                    return this.$t('methods.label11', ['<']);
                case 'monster':
                    return this.$t('methods.label12', ['<']);
                default:
                    break;
                }
            } else if (this.type === 'activity') {
                switch (code) {
                case '1':
                    return this.$t('methods.label13');
                case '2':
                    return this.$t('methods.label14');
                case '3':
                    return this.$t('methods.label15');
                case '4':
                    return this.$t('methods.label16');
                case '5':
                    return this.$t('methods.label17');
                default:
                    break;
                }
            } else if (this.type === 'normal') {
                switch (code) {
                case 'pro':
                    return this.$t('methods.label18');
                case 'cert':
                    return this.$t('methods.label19');
                default:
                    break;
                }
            }
            return '';
        },
        getGradeCodeName() {
            switch (this.code) {
            case 1:
                return 'r1';
            case 2:
                return 'r2';
            case 3:
                return 'r3';
            case 4:
                return 'rs';
            case 11:
                return 'pl1';
            case 12:
                return 'pl2';
            case 13:
                return 'pl3';
            case 14:
                return 'pls';
            case 21:
                return 'cl1';
            case 22:
                return 'cl2';
            case 23:
                return 'monster';
            default:
                return '';
            }
        }
    },
    created() {
    },
    mounted() {
        document.body.addEventListener('touchend', this.hideTooltip);
    },
    beforeDestroy() {
        document.body.removeEventListener('touchend', this.hideTooltip);
    }
};
</script>

<style lang="scss">
.m-badge {
    display: inline-block;
}
</style>
