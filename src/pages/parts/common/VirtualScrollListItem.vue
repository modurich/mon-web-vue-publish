<!--
    Virtualscroll 라이브러리들이 스크롤 높이계산을 제대로 하지못해서 직접만든 컴포넌트
    추가적으로 중간중간 adsense가 들어가는 문제때문에 개별객체없이 여백으로만 채우면 문제가 있음.
    이를 해결하기 위해 slot 을 사용한 내부 요소에서 직접 on/off 를 해주는게 최선
-->
<template>
    <li ref="item" class="virtual-scroll-list-item" :style="{ minHeight: renderedHeight, maxHeight: maxHeight }">
        <slot></slot>
    </li>
</template>

<script>
import _ from 'lodash';

export default {
    name: 'VirtualScrollListItem',
    components: {
    },
    props: {
        minHeight: {
            type: [Number, String],
            default() {
                return 50;
            }
        },
        maxHeight: {
            type: [Number, String],
            default() {
                return 'inherit';
            }
        },
        item: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    data() {
        return {
            renderedHeight: typeof this.minHeight === 'string' ? this.minHeight : `${this.minHeight}px`
        };
    },
    computed: {
    },
    watch: {
    },
    beforeCreate() {
    },
    async created() {
    },
    async mounted() {
        this.$nextTick(() => {
            // this.renderedHeight = this.$refs.item.offsetHeight;
            // console.log('this.$refs.item', this.$refs.item);
            this.setRenderedHeight();

            // adsense 가 간헐적으로 없어지는 문제 때문에 체크가 필요
            const adsenseElmt = this.$refs.item.querySelector('.adsense-component');
            if (adsenseElmt) {
                const style = adsenseElmt.currentStyle || window.getComputedStyle(adsenseElmt);
                if (style.display !== 'none') {
                    this.hasAdsense = true;
                }
            }
        });
    },
    updated() {
        if (!this._inactive) {
            this.checkAdsense();
            this.$nextTick(() => {
                this.setRenderedHeight();
            });
        }
        // if (!this._inactive && this.$refs.item.children && this.$refs.item.children[0] && this.$refs.item.children[0].offsetHeight &&
        //     this.$refs.item.children[0].offsetHeight !== 0 && this.renderedHeight !== this.$refs.item.children[0].offsetHeight) { // page stack으로 deactivated 되었을때 renderedHeight 를 0으로 만들어버리는 문제 예방
        //     // if (this.item.post_seq === '43533909571141632') {
        //     //     console.log('updated', this.item, this.$refs.item, this.$refs.item.children[0].offsetHeight);
        //     // }
        //     this.renderedHeight = this.$refs.item.children[0].offsetHeight;
        // }
    },
    beforeDestroy() {
    },
    methods: {
        setRenderedHeight() {
            if (this.$refs.item.children && this.$refs.item.children.length) {
                const currHeight = `${this.$refs.item.offsetHeight}px`;
                if (currHeight !== this.renderedHeight && parseInt(this.renderedHeight) < parseInt(currHeight)) {
                    this.renderedHeight = currHeight;
                    // console.log('height가 왜 달라지지?', currHeight);
                }
            }
        },
        checkAdsense() {
            // adsense 가 간헐적으로 없어지는 문제 때문에 체크가 필요
            if (this.hasAdsense) {
                const adsenseElmt = this.$refs.item.querySelector('.adsense-component');
                if (adsenseElmt) {
                    const style = adsenseElmt.currentStyle || window.getComputedStyle(adsenseElmt);
                    if (adsenseElmt && style.display === 'none') {
                        this.renderedHeight = '0px';
                        this.hasAdsense = false;
                    }
                    // console.log('adsenseElmt', adsenseElmt);
                }
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.virtual-scroll-list-item {
    max-width: 100%;
}
</style>
