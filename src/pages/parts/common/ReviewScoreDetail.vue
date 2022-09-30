<!-- 평점 상세보기 -->
<i18n>
{
  "ko": {
    "template": {
      "label1": "적시성",
      "label2": "논리성",
      "label3": "정확성",
      "label4": "독창성",
      "label5": "가독성"
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
      "label1": "Timeliness",
      "label2": "Logic",
      "label3": "Accuracy",
      "label4": "Originality",
      "label5": "Readability"
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
    <div class="review-score-detail">
        <div class="row align-center">
            <m-profile-photo :photo-path="reply.user.photo_path" />
            <m-space-v size="16" />
            <div class="f-16-b-gt">{{reply.user.nick_name}}</div>
            <q-space />
            <m-badge type="grade" :code="reply.user.grade_code" :user-info="reply.user" />
        </div>
        <m-space-h size="16" />
        <m-space-h size="1" :style="{ backgroundColor: $style.ghostWhite }" />
        <m-space-h size="16" />
        <div class="row align-center">
            <div class="f-16-500-gt">{{ $t('template.label1') }}</div>
            <m-space-v size="4" />
            <StarRating :rating="reply.rating.score2" read-only :increment="1" />
            <q-space />
            <m-icon name="information_filled" class="cursor-pointer" :color="$style.lightGrey" stroke-opacity="0" @click="infoNoti(1)" />
        </div>
        <m-space-h size="8" />
        <div class="row align-center">
            <div class="f-16-500-gt">{{ $t('template.label2') }}</div>
            <m-space-v size="4" />
            <StarRating :rating="reply.rating.score5" read-only :increment="1" />
            <q-space />
            <m-icon name="information_filled" class="cursor-pointer" :color="$style.lightGrey" stroke-opacity="0" @click="infoNoti(2)" />
        </div>
        <m-space-h size="8" />
        <div class="row align-center">
            <div class="f-16-500-gt">{{ $t('template.label3') }}</div>
            <m-space-v size="4" />
            <StarRating :rating="reply.rating.score3" read-only :increment="1" />
            <q-space />
            <m-icon name="information_filled" class="cursor-pointer" :color="$style.lightGrey" stroke-opacity="0" @click="infoNoti(3)" />
        </div>
        <m-space-h size="8" />
        <div class="row align-center">
            <div class="f-16-500-gt">{{ $t('template.label4') }}</div>
            <m-space-v size="4" />
            <StarRating :rating="reply.rating.score1" read-only :increment="1" />
            <q-space />
            <m-icon name="information_filled" class="cursor-pointer" :color="$style.lightGrey" stroke-opacity="0" @click="infoNoti(4)" />
        </div>
        <m-space-h size="8" />
        <div class="row align-center">
            <div class="f-16-500-gt">{{ $t('template.label5') }}</div>
            <m-space-v size="4" />
            <StarRating :rating="reply.rating.score4" read-only :increment="1" />
            <q-space />
            <m-icon name="information_filled" class="cursor-pointer" :color="$style.lightGrey" stroke-opacity="0" @click="infoNoti(5)" />
        </div>
        <m-space-h size="18" />
        <div class="f-14-500-gt">{{moment(reply.regdt).format('YYYY.MM.DD HH:mm')}}</div>
    </div>
</template>

<script>
import _ from 'lodash';
import { mapState, mapActions, mapGetters } from 'vuex';
import StarRating from 'pages/parts/common/StarRating';

export default {
    name: 'ReviewScoreDetail',
    components: {
        StarRating
    },
    props: {
        reply: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
        };
    },
    computed: {
        ...mapState({
        })
    },
    watch: {
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
.review-score-detail {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    max-height: 100%;
}
</style>
