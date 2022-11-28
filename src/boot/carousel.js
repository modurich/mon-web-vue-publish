import Vue from 'vue';
import { Carousel, Slide } from 'vue-carousel';

const extendedSlide = {
    extends: Slide,
    methods: {
        // https://github.com/SSENSE/vue-carousel/blob/395b01ec2b018b8715d4f7ea86d69e2a74fd68a5/src/Slide.vue
        // 기본동작이 x축만을 기반으로 하기에 y축도 추가한다.
        onTouchEnd(e) {
            /**
             * @event slideclick
             * @event slide-click
             * @type {Object}
             */
            const eventPosX =
                this.carousel.isTouch && e.changedTouches && e.changedTouches.length > 0
                    ? e.changedTouches[0].clientX
                    : e.clientX;
            const deltaX = this.carousel.dragStartX - eventPosX;

            const eventPosY =
                this.carousel.isTouch && e.changedTouches && e.changedTouches.length > 0
                    ? e.changedTouches[0].clientY
                    : e.clientY;
            const deltaY = this.carousel.dragStartY - eventPosY;

            if (
                this.carousel.minSwipeDistance === 0 ||
                (Math.abs(deltaX) < this.carousel.minSwipeDistance && Math.abs(deltaY) < this.carousel.minSwipeDistance)
            ) {
                this.$emit('slideclick', Object.assign({}, e.currentTarget.dataset));
                this.$emit('slide-click', Object.assign({}, e.currentTarget.dataset));
            }
        }
    }
};
Vue.component('carousel', Carousel);
Vue.component('slide', extendedSlide);

export default async({ Vue, ssrContext }) => {
};
