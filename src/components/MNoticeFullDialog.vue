<i18n>
{
  "ko": {
    "noOpen3": "3일간 열지 않음",
    "close": "닫기",
    "noticeTitle": "공지사항"
  },
  "en": {
    "noOpen3": "Don't open for 3 days",
    "close": "Close",
    "noticeTitle": "Notice"
  }
}
</i18n>
<template>
    <q-dialog
        ref="dialog"
        :content-class="`m-notice-full-dialog ${$attrs.class || ''}`"
        v-bind="$attrs"
        square
        v-on="$listeners"
        transition-show=""
        transition-hide=""
    >
        <div class="dialog-content">
            <!-- 공지 제목부분 -->
            <div class="row align-center no-wrap" :style="{ minHeight: '56px' }">
                <m-space-v size="12" />
                <span class="f-16-b-mg ellipsis">{{title}}</span>
                <q-space />
                <m-icon name="close_big" class="cursor-pointer" @click.prevent="onOKClick" />
                <m-space-v size="12" />
            </div>
            <m-space-h size="1" :style="{ backgroundColor: $style.ghostWhite }" />
            <!-- 공지 내용부분 -->
            <div class="square">
                <div class="content">
                    <carousel
                        ref="carousel"
                        v-model="slideIdx"
                        :navigate-to="slideIdx"
                        :per-page="1"
                        :pagination-enabled="false"
                        :navigation-enabled="false"
                        :mouse-drag="true"
                        :loop="true"
                        @mounted="handleCarouselMounted"
                    >
                        <slide
                            :class="'cursor-pointer'"
                            style="padding: 0;"
                            :key="`carousel-slide-${idx}`"
                            v-for="(item, idx) in notice"
                            :name="idx"
                            @slideclick="handleSlideClick"
                        >
                            <div v-if="item.image_path" class="text-center notice-wrapper notice-img-wrapper">
                                <img :src="`${IMG_URL}${item.image_path}`" @load="handleCarouselMounted" />
                            </div>
                            <div class="column no-wrap notice-wrapper" v-else-if="item.is_html" v-html="item.contents" style="position: relative;">
                            </div>
                            <div class="notice-wrapper" v-else-if="item.title && item.contents" style="position:relative;display:block;height: 100%;">
                                <div style="position:absolute;top:0;bottom:0;left:0;right:0;padding: 24px 24px 20px;" v-if="isClampReady">
                                    <v-clamp class="f-16-500-gt" autoresize max-height="100%" style="white-space: pre-wrap;">{{item.contents}}</v-clamp>
                                </div>
                            </div>
                        </slide>
                    </carousel>
                </div>
            </div>
            <m-space-h size="1" :style="{ backgroundColor: $style.ghostWhite }" />
            <!-- 인디케이터 영역 -->
            <div class="" style="min-height: 56px;" v-if="notice.length > 1">
                <m-space-h size="16" />
                <div class="row">
                    <m-space-v size="16" />
                    <m-icon class="cursor-pointer" name="chevron_left" stroke-opacity="0" v-if="notice.length > 1 && slideIdx > 0" @click="slideIdx -= 1" />
                    <m-space-v v-else size="24" />
                    <div class="row flex-1 justify-center align-center">
                        <div
                            :key="`carousel-slide-navi-${idx}`"
                            v-for="(item, idx) in notice"
                            :class="`cursor-pointer ${slideIdx === idx ? 'select-carosel' : 'unselect-carosel'}`"
                            @click="slideIdx = idx"
                        ></div>
                    </div>
                    <m-icon class="cursor-pointer" name="chevron_right" stroke-opacity="0" v-if="notice.length > 1 && slideIdx !== notice.length -1" @click="slideIdx += 1" />
                    <m-space-v v-else size="24" />
                    <m-space-v size="16" />
                </div>
                <m-space-h size="16" />
            </div>
            <div style="flex: 2;"></div>
            <m-space-h size="1" :style="{ backgroundColor: $style.ghostWhite }" />
            <div style="height:56px;min-height: 56px;">
                <div class="row flex-1" style="height: 100%;">
                    <div class="flex flex-1 justify-center align-center f-16-b-mg cursor-pointer left-btn" @click="onLeftClick">{{$t('noOpen3')}}</div>
                    <div class="flex flex-1 justify-center align-center f-16-b-wt cursor-pointer right-btn" @click="onOKClick">{{$t('close')}}</div>
                </div>
            </div>
        </div>
    </q-dialog>
</template>

<script>
import _ from 'lodash';
import { Cookies } from 'quasar';

export default {
    name: 'MNoticeFullDialog',
    inheritAttrs: true,
    props: {
        notice: {
            type: Array,
            default: function() {
                return [];
            }
        },
        children: undefined
        // https://quasar.dev/vue-components/dialog#QDialog-API
    },
    data() {
        return {
            slideIdx: _.random(0, this.notice.length - 1),
            isClampReady: false
        };
    },
    computed: {
        title() {
            try {
                return this.notice[this.slideIdx].title || this.$t('noticeTitle');
            } catch (err) {
            }
            return this.$t('noticeTitle');
        }
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
        handleSlideClick() {
            try {
                if (this.notice[this.slideIdx].link_url) {
                    window.open(this.notice[this.slideIdx].link_url, '_blank', 'noopener noreferrer');
                } else {
                    this.$router.push({ name: 'CustomerCenter', query: { tab: 'notice' }, hash: `#${this.notice[this.slideIdx].notice_seq}` });
                }
            } catch (err) {}
        },
        handleCarouselMounted(e) {
            setTimeout(() => {
                this.$refs.carousel.onResize();
                // v-clamp 가 자동으로 라인을 계산하는 단계가 carousel 에서의 영역 계산과 영향이 있어서 딜레이를 준다.
                setTimeout(() => {
                    this.isClampReady = true;
                }, 100);
            }, 0);
        }
    }
};
</script>

<style lang="scss">
.m-notice-full-dialog {
    .dialog-content {
        margin: 0;
        width: 692px;
        max-width: 692px;
        min-height: 100%;
        height: 100% !important;
        max-height: 100% !important;
        display: flex;
        // overflow: hidden;
        flex-flow: column;

        .select-carosel {
            position: relative;
            height: 20px;
            width: 20px;
            &::before {
                content: ' ';
                width: 8px;
                height: 8px;
                background-color: $orange;
                margin: 6px;
                position: absolute;
                border-radius: 50%;
            }
        }
        .unselect-carosel {
            position: relative;
            height: 20px;
            width: 20px;
            &::before {
                content: ' ';
                width: 8px;
                height: 8px;
                background-color: $grey-tabby;
                margin: 6px;
                position: absolute;
                border-radius: 50%;
            }
        }

        .content {
            position: relative;
            // overflow: hidden;
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
            .notice-wrapper {
                max-width: 100%;
                max-height: 100%;
                // display: table-cell;
                & * {
                    max-height: 100%;
                    // text-overflow: ellipsis;
                    // white-space: nowrap;
                    // overflow: hidden;
                }
            }
        }

        .left-btn {
            height: 100%;
            background-color: $white;
        }
        .right-btn {
            height: 100%;
            background-color: $medium-grey;
        }

        .square {
            display: flex;
            position: relative;
            overflow: auto;
            background-color: $white;
            width: 100%;
            height: 100%;
            &::after {
                content: "";
                display: block;
                padding-bottom: 100%;
            }
            & > .content {
                position: absolute;
                width: 100%;
                height: 100%;
            }
        }

        // VueCarousel 내부 클래스
        .VueCarousel-wrapper {
            height: 100% !important;
            .VueCarousel-inner {
                height: 100% !important;
            }
        }
    }
}
</style>
