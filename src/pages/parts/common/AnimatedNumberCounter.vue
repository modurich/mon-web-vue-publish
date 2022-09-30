<template>
    <span>{{formatValue(animatedValue)}}</span>
</template>
<script>
export default {
    name: 'AnimatedNumberCounter',
    props: {
        value: {
            type: [Number, String],
            default: '0',
            required: true
        },
        duration: {
            type: Number,
            default: 1000
        },
        formatValue: {
            type: Function,
            default: value => value
        },
        fixedCount: Number
    },
    data() {
        return {
            animatedValue: 0
        };
    },
    mounted() {
        // this.animateValue(this.value, 0);
        this.animatedValue = this.value;
    },
    beforeDestroy() {
        clearTimeout(this.reanimateTimeout);
    },
    activated() {
    },
    deactivated() {
        clearTimeout(this.reanimateTimeout);
    },
    watch: {
        value(newVal, oldVal) {
            if (newVal !== oldVal) {
                if (this.$utils.getCurrentVisibility()) {
                    this.animateValue(oldVal, newVal);
                }
            }
        }
    },
    methods: {
        animateValue(start, end) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / this.duration, 1);
                const animatedValue = this.MonBigNumber(progress).multipliedBy(this.MonBigNumber(end).minus(start)).plus(start).toString(10);
                if (this.fixedCount) {
                    this.animatedValue = this.MonBigNumber(animatedValue).toFixed(10);
                } else {
                    this.animatedValue = animatedValue;
                }
                if (progress < 1) {
                    this.reanimateTimeout = setTimeout(() => window.requestAnimationFrame(step), 40);
                }
            };
            window.requestAnimationFrame(step);
        }
    }
};
</script>
