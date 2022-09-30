<!--
    Virtualscroll 라이브러리들이 스크롤 높이계산을 제대로 하지못해서 직접만든 컴포넌트
    추가적으로 중간중간 adsense가 들어가는 문제때문에 개별객체없이 여백으로만 채우면 문제가 있음.
    이를 해결하기 위해 slot 을 사용한 내부 요소에서 직접 on/off 를 해주는게 최선
    스크롤 기준은 window 를 기준으로 한다.
-->
<template>
    <ul class="virtual-scroll-list">
        <VirtualScrollListItem
            ref="item"
            v-for="(item, idx) in items"
            :key="`virtual-${$parent.$options.name}-item-${itemKey && _.get(item, itemKey) ? _.get(item, itemKey) : idx}`"
            :item="item"
            :class="itemClass"
            :min-height="itemMinHeight"
            :max-height="itemMaxHeight"
        >
            <slot :idx="idx" :item="item" :is-visible="!IS_SSR && itemsVisible[item[itemKey]] !== undefined ? itemsVisible[item[itemKey]] : true"></slot>
        </VirtualScrollListItem>
    </ul>
</template>

<script>
import _ from 'lodash';
import VirtualScrollListItem from 'pages/parts/common/VirtualScrollListItem';

export default {
    name: 'VirtualScrollList',
    components: {
        VirtualScrollListItem
    },
    props: {
        itemMinHeight: {
            type: [Number, String],
            default() {
                return 50;
            }
        },
        itemMaxHeight: {
            type: [Number, String]
        },
        itemKey: {
            type: String,
            required: true
        },
        items: {
            type: Array,
            default() {
                return [];
            }
        },
        itemClass: {
            type: String
        },
        // 화면에서 위아래로 미리 랜더링할 영역 여유분
        rootMargin: {
            type: Number,
            default() {
                return 0;
            }
        }
    },
    data() {
        return {
            itemsVisible: {}
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
        // 펼치기/접기 UX 발생시 virtual list 에서 감지가 안되어 빈 요소가 등장하는걸 막기위한 ResizeObserver
        this.ro = new ResizeObserver((entries, observer) => {
            this.onScroll();
        });
        this.ro.observe(document.body);
        document.addEventListener('scroll', this.onScroll, {
            passive: false
        });
        document.body.addEventListener('resize', () => { console.log('itemsVisible resize'); });
        this.onScroll();
    },
    beforeDestroy() {
        this.ro.disconnect();
        document.removeEventListener('scroll', this.onScroll);
    },
    activated() {
        this.ro.observe(document.body);
        document.addEventListener('scroll', this.onScroll, {
            passive: false
        });
        this.onScroll();
    },
    deactivated() {
        this.ro.disconnect();
        document.removeEventListener('scroll', this.onScroll);
    },
    methods: {
        onScroll(evt) {
            if (this.items && this.items.length > 0) {
                // console.log('onScroll', document.documentElement.scrollTop, evt, this.$refs.item);

                // quasar dialog 가 자동으로 scroll 을 없애면서 위치가 조정되서 생기는 q-body--prevent-scroll class 의 문제때문에 임시처방
                let bodyFixedTopOffset = 0;
                if (document.documentElement.scrollHeight === document.documentElement.clientHeight) {
                    bodyFixedTopOffset = parseInt(document.body.style.top);
                }
                const clientOffsetTop = document.documentElement.scrollTop;
                const clientHeight = document.documentElement['clientHeight'] || document.body['clientHeight'];
                const clientOffsetBottom = clientOffsetTop + clientHeight;

                const itemsVisible = {};
                for (const component of this.$refs.item) {
                    const offsetTop = component.$el.offsetTop + bodyFixedTopOffset;
                    const offsetBottom = offsetTop + component.$el.offsetHeight;
                    if (clientOffsetTop - this.rootMargin > offsetBottom || clientOffsetBottom + this.rootMargin < offsetTop) {
                        itemsVisible[component.item[this.itemKey]] = false;
                    } else {
                        itemsVisible[component.item[this.itemKey]] = true;
                    }
                }
                if (!_.isEqual(this.itemsVisible, itemsVisible)) {
                    this.itemsVisible = Object.freeze(itemsVisible);
                }
                // console.log('itemsVisible', itemsVisible);
            }
        }
    },
    async serverPrefetch() {
    }
};
</script>

<style lang="scss" scoped>
.virtual-scroll-list {
    max-width: 100%;
    overflow: hidden;
}
</style>
