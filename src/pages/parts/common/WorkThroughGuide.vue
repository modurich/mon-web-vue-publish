<i18n>
{
  "ko": {
    "template": {
      "label1": "퀵가이드"
    }
  },
  "en": {
    "template": {
      "label1": "Quick Guide"
    }
  }
}
</i18n>
<template>
    <div class="work-through-guide">
        <div class="sticky-head">
            <div class="row align-center">
                <div class="row align-center" :style="{ padding: '16px' }">
                    <m-icon class="cursor-pointer" name="chevron_left" stroke-opacity="0" v-if="maxPage > 1 && slideIdx > 0" @click="slideIdx -= 1" />
                    <div v-else :style="{ width: '24px', height: '24px' }"></div>
                </div>
                <div class="row align-center flex-1 justify-center f-16-b-gt">{{ $t('template.label1') }} ({{slideIdx + 1}}/{{maxPage}})</div>
                <div class="row align-center" :style="{ padding: '16px' }">
                    <m-icon class="cursor-pointer" name="chevron_right" stroke-opacity="0" v-if="maxPage > 1 && slideIdx !== maxPage -1" @click="slideIdx += 1" />
                    <m-icon class="cursor-pointer" name="close_big" v-else-if="slideIdx + 1 === maxPage" @click="$parent.$emit('hide')" />
                    <div v-else :style="{ width: '24px', height: '24px' }"></div>
                </div>
            </div>
            <m-space-h size="1" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>
        <div v-if="isDesktop" @click="slideIdx = Math.min(slideIdx + 1, maxPage - 1)">
            <img :src="`/workthrough/workthrough${slideIdx + 1}.png`" width="100%" alt="workthrough" />
        </div>
        <div v-else>
            <!-- 특정 PC의 크롬에서 원인을 알수없는 멈추는 현상이 있어서 모바일에서만 carousel 적용 -->
            <carousel
                v-model="slideIdx"
                :navigate-to="slideIdx"
                :per-page="1"
                :pagination-enabled="false"
                :navigation-enabled="false"
                :mouse-drag="true"
            >
                <slide
                    :key="`carousel-slide-${idx}`"
                    v-for="(item, idx) in [1,2,3,4,5,6,7]"
                    :name="idx"
                >
                    <img :src="`/workthrough/workthrough${item}.png`" width="100%" alt="workthrough" />
                </slide>
            </carousel>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
export default {
    name: 'WorkThroughGuide',
    inheritAttrs: true,
    props: {
        value: String
    },
    data() {
        return {
            slideIdx: 0,
            maxPage: 7
        };
    },
    computed: {
        ...mapState({
            isDesktop: state => state.common.isDesktop
        })
    },
    created() {
    },
    mounted() {
    },
    methods: {
    }
};
</script>

<style lang="scss" scoped>
.work-through-guide {
    background: $white;

    .sticky-head {
        position: static;
        position: sticky;
        background: $white;
        top: 0;
    }
}
</style>
