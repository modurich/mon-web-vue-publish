<template>
    <div class="m-candle-stick" :style="{ width: computedWidth }">
        <div class="thick" :style="{ background: color, height: `${thickHeightPercentage}%`, top: `${thickTopPercentage}%` }" />
        <div class="thin" :style="{ background: color, height: `${thinHeightPercentage}%` }" />
    </div>
</template>

<script>
import _ from 'lodash';
export default {
    name: 'MCandleStick',
    props: {
        width: {
            type: [String, Number],
            default: function() {
                return 8;
            }
        },
        ohlc: {
            type: Object,
            default: function() {
                return {
                    opnprc: 0,
                    lwprc: 0,
                    hgprc: 0,
                    trdPrc: 0
                };
            }
        }
    },
    data() {
        return {
        };
    },
    computed: {
        status() {
            // 0: 보합, 1: 상승, 2: 하락, 3: 변화없음
            try {
                if (this.ohlc.opnprc === this.ohlc.lwprc && this.ohlc.opnprc === this.ohlc.trdPrc && this.ohlc.opnprc === this.ohlc.hgprc) return 3;
                else if (this.ohlc.opnprc === this.ohlc.trdPrc) return 0;
                else if (this.ohlc.opnprc < this.ohlc.trdPrc) return 1;
                else if (this.ohlc.opnprc > this.ohlc.trdPrc) return 2;
            } catch (err) {
            }
            return 0;
        },
        color() {
            try {
                const { color } = this.$utils.getPriceColor(this.ohlc.opnprc, this.ohlc.trdPrc);
                return color || this.$style.rubineRed;
            } catch (err) {}
            return this.$style.rubineRed;
        },
        computedWidth() {
            if (_.isNumber(this.width)) return `${this.width}px`;
            return this.width;
        },
        thinHeightPercentage() {
            if (this.status === 3) return 0;
            return 100;
        },
        thickHeightPercentage() {
            try {
                return Math.abs(this.ohlc.opnprc - this.ohlc.trdPrc) / (this.ohlc.hgprc - this.ohlc.lwprc) * 100;
            } catch (err) {}
            return 0;
        },
        thickTopPercentage() {
            try {
                const totalRange = this.ohlc.hgprc - this.ohlc.lwprc;
                if (this.status === 0) {
                    const topTailRange = this.ohlc.hgprc - this.ohlc.trdPrc;
                    return topTailRange / totalRange * 100;
                } else if (this.status === 1) {
                    const topTailRange = this.ohlc.hgprc - this.ohlc.trdPrc;
                    // const bottomTailRange = this.ohlc.opnprc - this.ohlc.lwprc;
                    // const bodyRange = totalRange - topTailRange - bottomTailRange;
                    return topTailRange / totalRange * 100;
                } else if (this.status === 2) {
                    const topTailRange = this.ohlc.hgprc - this.ohlc.opnprc;
                    // const bottomTailRange = this.ohlc.trdPrc - this.ohlc.lwprc;
                    // const bodyRange = totalRange - topTailRange - bottomTailRange;
                    return topTailRange / totalRange * 100;
                } else if (this.status === 3) {
                    return 50;
                }
            } catch (err) {
                console.error('thickTopPercentage', err);
            }
            return 50;
        }
    },
    created() {
    },
    mounted() {
    },
    methods: {
    }
};
</script>

<style lang="scss">
.m-candle-stick {
    display: inline-flex;
    position: relative;
    min-height: 1px;
    overflow: hidden;

    .thick {
        position: absolute;
        width: 100%;
        min-height: 1px;
    }
    .thin {
        position: absolute;
        top: 0px;
        bottom: 0px;
        left: 50%;
        right: 0px;
        transform: translateX(-50%);
        width: 1px;
    }
}
</style>
