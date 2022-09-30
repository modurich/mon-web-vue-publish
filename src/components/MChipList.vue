<template>
    <div class="m-chip-list gpu-layer">
        <div ref="listWrapper" class="m-chip-list-wrappper" :class="{ 'no-pointer-event': !enableChildrenClick }" v-dragscroll.pass @dragscrollstart="dragStart" @dragscrollend="dragEnd">
            <slot />
        </div>
        <div class="touch-hide prev-arrow row cursor-pointer" v-if="showLeftArrow" @click="moveLeft">
            <m-icon name="chevron_left" stroke-opacity="0" :color="$style.greyTabby" :style="{ background: 'white', padding: '12px 0 12px 12px' }" />
            <div :style="{ width: '16px', background: 'linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)' }" />
        </div>
        <div class="touch-hide next-arrow row cursor-pointer" v-if="showRightArrow" @click="moveRight">
            <div :style="{ width: '16px', background: 'linear-gradient(270deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)' }" />
            <m-icon name="chevron_right" stroke-opacity="0" :color="$style.greyTabby" :style="{ background: 'white', padding: '12px 12px 12px 0' }" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'MChipList',
    props: {
    },
    data() {
        return {
            timer: null,
            enableChildrenClick: true,
            showLeftArrow: false,
            showRightArrow: false
        };
    },
    created() {
    },
    mounted() {
        if (this.$refs.listWrapper.scrollWidth > this.$refs.listWrapper.offsetWidth) {
            this.showRightArrow = true;
        }
        // this.$refs.listWrapper.addEventListener('scroll', this.onScroll);
    },
    beforeDestroy() {
        this.$refs.listWrapper.removeEventListener('scroll', this.onScroll);
    },
    activated() {
        this.$refs.listWrapper.addEventListener('scroll', this.onScroll);
        this.onScroll();
    },
    deactivated() {
        this.$refs.listWrapper.removeEventListener('scroll', this.onScroll);
    },
    methods: {
        dragStart() {
            this.timer = setTimeout(() => {
                this.timer = null;
                this.enableChildrenClick = false;
            }, 200);
        },
        dragEnd(e) {
            if (this.timer) {
                clearTimeout(this.timer);
                this.timer = null;
            }
            this.enableChildrenClick = true;
        },
        onScroll() {
            const target = this.$refs.listWrapper;
            if (target.scrollWidth > target.offsetWidth) {
                if (target.scrollLeft < 48) {
                    this.showLeftArrow = false;
                    this.showRightArrow = true;
                } else if (target.scrollLeft + 48 > target.scrollWidth - target.offsetWidth) {
                    this.showLeftArrow = true;
                    this.showRightArrow = false;
                } else {
                    this.showLeftArrow = true;
                    this.showRightArrow = true;
                }
            } else {
                this.showLeftArrow = false;
                this.showRightArrow = false;
            }
            // console.log('event', target.scrollLeft);
        },
        moveLeft() {
            const target = this.$refs.listWrapper;
            target.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        },
        moveRight() {
            const target = this.$refs.listWrapper;
            target.scrollTo({ top: 0, left: target.scrollWidth, behavior: 'smooth' });
        }
    }
};
</script>

<style lang="scss">
.m-chip-list {
    position: relative;
    padding: 8px 12px;
    max-width: 100%;

    .prev-arrow {
        top: 0;
        bottom: 0;
        left: 0;
        position: absolute;
    }

    .next-arrow {
        top: 0;
        bottom: 0;
        right: 0;
        position: absolute;
    }

    .m-chip-list-wrappper {
        display: flex;
        white-space: nowrap;
        overflow: auto;
        .m-chip + .m-chip {
            margin-left: 16px;
        }

        &::-webkit-scrollbar {
            display: none;
        }

        &.no-pointer-event > * {
            pointer-events: none;
        }
    }
}
</style>
