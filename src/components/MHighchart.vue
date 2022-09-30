<i18n>
{
  "ko": {
    "resetZoom": "확대 취소",
    "resetZoomTitle": "확대된 차트를 처음상태로 되돌립니다."
  },
  "en": {
    "resetZoom": "Zoom cancel",
    "resetZoomTitle": "Revert to the original size"
  }
}
</i18n>
<template>
    <q-no-ssr>
        <highcharts
            v-if="isMounted"
            v-bind="$attrs"
            v-on="$listeners"
        />
    </q-no-ssr>
</template>

<script>
export default {
    name: 'MHighchart',
    components: {
        highcharts: async() => (await import('highcharts-vue')).Chart
    },
    data() {
        return {
            isMounted: false
        };
    },
    computed: {
    },
    inheritAttrs: false,
    methods: {
    },
    created() {
    },
    async mounted() {
        const Highcharts = (await import('highcharts')).default;
        const HighchartsMore = (await import('highcharts/highcharts-more')).default;
        HighchartsMore(Highcharts);
        if (typeof Highcharts === 'object') {
            Highcharts.setOptions({
                lang: {
                    resetZoom: this.$t('resetZoom'),
                    resetZoomTitle: this.$t('resetZoomTitle')
                }
            });
        }
        this.isMounted = true;
    }
};
</script>

<style lang="scss">
.m-highchart {
}
</style>
