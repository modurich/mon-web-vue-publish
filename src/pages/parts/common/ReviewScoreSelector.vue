<!-- 평점 작성 -->
<i18n>
{
  "ko": {
    "template": {
      "label1": "유용한가요?",
      "label2": "논리적인가요?",
      "label3": "정보가 정확한가요?",
      "label4": "새로운 시각인가요?",
      "label5": "읽기 편했나요?"
    },
    "methods": {
      "notify1": "필요한 정보가 적시에 제공이 되었나요?",
      "notify2": "정보전개가 논리적으로 되었나요?",
      "notify3": "거짓없는 정확한 정보가 전달 되었나요?",
      "notify4": "퍼오거나 발췌한 내용이 아닌 직접 작성한 내용으로 구성되었나요?",
      "notify5": "읽기 좋은 구도로 글과 이미지가 잘 구성되었나요?"
    }
  },
  "en": {
    "template": {
      "label1": "Is it useful?",
      "label2": "Is it logical?",
      "label3": "Is the information correct?",
      "label4": "Is this a new view?",
      "label5": "Is it easy to read?"
    },
    "methods": {
      "notify1": "Is the necessary information provided in a timely manner?",
      "notify2": "Is the information distribution logical?",
      "notify3": "Is accurate information delivered without falsehood?",
      "notify4": "Does this consist of content you wrote yourself, not copied or excerpted?",
      "notify5": "Is the text and images well organized in a readable composition?"
    }
  }
}
</i18n>
<template>
    <div class="review-score-selector">
        <div class="row align-center">
            <div class="f-14-500-og" :style="{ width: '130px' }" v-if="score2">{{ $t('template.label1') }}</div>
            <div class="f-14-500-lg" :style="{ width: '130px' }" v-else>{{ $t('template.label1') }}</div>
            <StarRating :rating="score2" :increment="1" @input="val => score2 = val" />
            <q-space />
        </div>
        <m-space-h size="32" />
        <div class="row align-center">
            <div class="f-14-500-og" :style="{ width: '130px' }" v-if="score5">{{ $t('template.label2') }}</div>
            <div class="f-14-500-lg" :style="{ width: '130px' }" v-else>{{ $t('template.label2') }}</div>
            <StarRating :rating="score5" :increment="1" @input="val => score5 = val" />
            <q-space />
        </div>
        <m-space-h size="32" />
        <div class="row align-center">
            <div class="f-14-500-og" :style="{ width: '130px' }" v-if="score3">{{ $t('template.label3') }}</div>
            <div class="f-14-500-lg" :style="{ width: '130px' }" v-else>{{ $t('template.label3') }}</div>
            <StarRating :rating="score3" :increment="1" @input="val => score3 = val" />
            <q-space />
        </div>
        <m-space-h size="32" />
        <div class="row align-center">
            <div class="f-14-500-og" :style="{ width: '130px' }" v-if="score1">{{ $t('template.label4') }}</div>
            <div class="f-14-500-lg" :style="{ width: '130px' }" v-else>{{ $t('template.label4') }}</div>
            <StarRating :rating="score1" :increment="1" @input="val => score1 = val" />
            <q-space />
        </div>
        <m-space-h size="32" />
        <div class="row align-center">
            <div class="f-14-500-og" :style="{ width: '130px' }" v-if="score4">{{ $t('template.label5') }}</div>
            <div class="f-14-500-lg" :style="{ width: '130px' }" v-else>{{ $t('template.label5') }}</div>
            <StarRating :rating="score4" :increment="1" @input="val => score4 = val" />
            <q-space />
        </div>
    </div>
</template>

<script>
import _ from 'lodash';
import { mapState, mapActions, mapGetters } from 'vuex';
import StarRating from 'pages/parts/common/StarRating';

export default {
    name: 'ReviewScoreSelector',
    components: {
        StarRating
    },
    props: {
        value: {
            type: Object,
            default() {
                return () => {};
            }
        }
    },
    data() {
        return {
            score1: 0, // 독창성
            score2: 0, // 적시성
            score3: 0, // 정확성
            score4: 0, // 가독성
            score5: 0 // 논리성
        };
    },
    computed: {
        ...mapState({
        })
    },
    watch: {
        score1(newVal, oldVal) {
            this.emitInput();
        },
        score2(newVal, oldVal) {
            this.emitInput();
        },
        score3(newVal, oldVal) {
            this.emitInput();
        },
        score4(newVal, oldVal) {
            this.emitInput();
        },
        score5(newVal, oldVal) {
            this.emitInput();
        }
    },
    beforeCreate() {
    },
    async created() {
    },
    async mounted() {
        this.score1 = this.value.score1 || 0;
        this.score2 = this.value.score2 || 0;
        this.score3 = this.value.score3 || 0;
        this.score4 = this.value.score4 || 0;
        this.score5 = this.value.score5 || 0;
    },
    beforeDestroy() {
    },
    methods: {
        emitInput() {
            this.$emit('input', {
                score1: this.score1,
                score2: this.score2,
                score3: this.score3,
                score4: this.score4,
                score5: this.score5
            });
        },
        infoNoti(num) {
            if (num === 1) {
                this.$q.notify(this.$t('methods.notify1'));
            } else if (num === 2) {
                this.$q.notify(this.$t('methods.notify2'));
            } else if (num === 3) {
                this.$q.notify(this.$t('methods.notify3'));
            } else if (num === 4) {
                this.$q.notify(this.$t('methods.notify4'));
            } else if (num === 5) {
                this.$q.notify(this.$t('methods.notify5'));
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.review-score-selector {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    max-height: 100%;
}
</style>
