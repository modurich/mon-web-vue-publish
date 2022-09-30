<i18n>
{
  "ko": {
    "noView3": "3일간 보지않기",
    "confirm": "확인"
  },
  "en": {
    "noView3": "No viewing for 3days",
    "confirm": "Confirm"
  }
}
</i18n>
<template>
    <q-dialog
        ref="dialog"
        :content-class="`m-notice-alert ${$attrs.class || ''}`"
        v-bind="$attrs"
        square
        v-on="$listeners"
    >
        <div class="dialog-content">
            <div class="carousel-wrapper">
                <carousel
                    ref="carousel"
                    v-model="slideIdx"
                    :navigate-to="slideIdx"
                    :per-page="1"
                    :pagination-enabled="false"
                    :navigation-enabled="false"
                    :mouse-drag="true"
                    :loop="true"
                    :adjustable-height="true"
                    @mounted="handleCarouselMounted"
                >
                    <slide
                        :class="item.link_url ? 'cursor-pointer' : ''"
                        style="padding: 0;"
                        :key="`carousel-slide-${idx}`"
                        v-for="(item, idx) in notice"
                        :name="idx"
                        @slideclick="handleSlideClick(idx)"
                    >
                        <div v-if="item.image_path" class="text-center notice-wrapper notice-img-wrapper">
                            <img :src="`${IMG_URL}${item.image_path}`" @load="handleCarouselMounted" />
                        </div>
                        <div class="column no-wrap notice-wrapper" v-else-if="item.is_html" v-html="item.contents" style="position: relative;">
                        </div>
                        <div class="column no-wrap notice-wrapper" v-else-if="item.title && item.contents" style="padding: 0px 24px;">
                            <m-space-h size="32" />
                            <div class="f-16-b-mg">{{item.title}}</div>
                            <m-space-h size="40" />
                            <div class="f-16-500-gt" style="white-space: pre-wrap;">{{item.contents}}</div>
                            <m-space-h size="32" />
                        </div>
                    </slide>
                </carousel>
                <div class="navigate-controller row justify-between">
                    <m-icon name="chevron_left" v-if="notice.length > 1 && slideIdx > 0" @click="slideIdx -= 1" />
                    <m-space-v v-else size="24" />
                    <div class="row flex-1 justify-center align-center">
                        <div
                            :key="`carousel-slide-navi-${idx}`"
                            v-for="(item, idx) in notice"
                            :class="`cursor-pointer ${slideIdx === idx ? 'select-carosel' : 'unselect-carosel'}`"
                            @click="slideIdx = idx"
                        ></div>
                    </div>
                    <m-icon name="chevron_right" v-if="notice.length > 1 && slideIdx !== notice.length -1" @click="slideIdx += 1" />
                    <m-space-v v-else size="24" />
                </div>
            </div>
            <m-space-h size="12" />
            <div class="row justify-center align-center">
                <m-button3 lined @click="onLeftClick">{{$t('noView3')}}</m-button3>
                <m-space-v size="20" />
                <m-button3 @click="onOKClick">{{ buttonLabel }}</m-button3>
            </div>
            <m-space-h size="40" />
        </div>
    </q-dialog>
</template>

<script>
import _ from 'lodash';
import { Cookies } from 'quasar';

export default {
    name: 'MNoticeAlert',
    inheritAttrs: true,
    props: {
        notice: {
            type: Array,
            default: function() {
                return [];
            }
        },
        buttonLabel: {
            type: [String, Object],
            default: function() {
                return this.$t('confirm');
            }
        },
        buttonClick: {
            type: Function,
            default: function() {
                return () => {};
            }
        },
        children: undefined
        // https://quasar.dev/vue-components/dialog#QDialog-API
    },
    data() {
        return {
            slideIdx: _.random(0, this.notice.length - 1)
        };
    },
    computed: {
    },
    created() {
    },
    mounted() {
        // console.log('MAlert', this, this.$props, this.$attrs, this.$refs);
    },
    methods: {
        show() {
            this.$refs.dialog.show();
        },
        hide() {
            this.$refs.dialog.hide();
        },
        onOKClick() {
            this.$emit('ok');
            this.buttonClick({ check: this.check });
            this.hide();
        },
        onCancelClick() {
            this.$emit('hide');
        },
        onLeftClick() {
            console.log('3일간 보지않기가 선택되었습니다.');
            Cookies.set('notice_popup_ignore', 1, { path: '/', expires: '3d' });
            this.$emit('hide');
        },
        handleSlideClick(idx) {
            try {
                if (this.notice[idx].link_url) {
                    window.open(this.notice[idx].link_url, '_blank', 'noopener noreferrer nofollow');
                }
            } catch (err) {}
        },
        handleCarouselMounted(e) {
            setTimeout(() => this.$refs.carousel.onResize(), 0);
        }
    }
};
</script>

<style lang="scss">
.m-notice-alert {
    .dialog-content {
        margin: 24px;
        // max-height: initial;
        max-height: calc(100vh - 48px);
        // padding: 24px;
        // padding: 0px 8px;

        .select-carosel {
            height: 24px;
            width: 24px;
            background: url(/icons/timeline/enable.png) no-repeat center center / cover;
        }
        .unselect-carosel {
            height: 24px;
            width: 24px;
            background: url(/icons/timeline/disable.png) no-repeat center center / cover;
        }

        // .notice-alert-carousel {
        //     width: 600px;
        //     max-width: 100%;
        //     max-height: 800px;
        // }
        // @media (max-width: $breakpoint-xs-max) {
        //     .notice-alert-carousel {
        //         width: calc(100vw - 20px);
        //         max-width: calc(100vw - 20px);
        //         min-height: 100px;
        //     }
        // }

        .carousel-wrapper {
            position: relative;
            img {
                max-width: 100%;
            }

            .notice-img-wrapper {
                img {
                    width: 100%;
                    // max-width: 100%;
                    max-height: 800px;
                }
            }
            // .navigate-controller {
            //     position: absolute;
            //     width: 100%;
            //     bottom: 0px;
            // }
            .notice-wrapper {
                display: table-cell;
            }
        }
    }
}
</style>
