<!-- 리스트에서의 이미지뷰어 -->
<i18n>
{
    "ko": {
        "template": {
            "label1": "포스트 이미지"
        }
    },
    "en": {
        "template": {
            "label1": "post image"
        }
    }
}
</i18n>

<template>
    <div class="image-viewer-in-list">
        <div v-if="enableViewer" @click.stop="() => {}">
            <div class="img-scale-wrapper" :style="{ backgroundImage: `url('${$utils.get668ThumbnailImageUrl(imgPath)}')`, maxHeight: maxHeight }" @click.prevent.stop="handleClick">
                <img :src="$utils.get668ThumbnailImageUrl(imgPath)" :data-fallbacks="imgPath" @error="$utils.imgErrorFallback" width="100%" :alt="$t('template.label1')" />
            </div>
            <q-no-ssr>
                <vue-easy-lightbox
                    move-disabled
                    :visible="visible"
                    :imgs="[imgPath]"
                    :index="0"
                    @hide="handleHide"
                ></vue-easy-lightbox>
            </q-no-ssr>
        </div>
        <div v-else>
            <div class="img-scale-wrapper" :style="{ backgroundImage: `url('${$utils.get668ThumbnailImageUrl(imgPath)}')`, maxHeight: maxHeight }">
                <img :src="$utils.get668ThumbnailImageUrl(imgPath)" :data-fallbacks="imgPath" @error="$utils.imgErrorFallback" width="100%" :alt="$t('template.label1')" />
            </div>
        </div>
    </div>
</template>

<script>
import _ from 'lodash';
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
    name: 'ImageViewerInList',
    components: {
        'vue-easy-lightbox': () => import('vue-easy-lightbox')
    },
    props: {
        imgPath: {
            type: String,
            default() {
                return 0;
            }
        },
        enableViewer: {
            type: Boolean,
            default() {
                return false;
            }
        },
        maxHeight: {
            type: String,
            default() {
                return '440px';
            }
        }
    },
    data() {
        return {
            visible: false
        };
    },
    computed: {
        ...mapState({
        })
    },
    beforeCreate() {
    },
    async created() {
    },
    async mounted() {
    },
    beforeDestroy() {
    },
    methods: {
        handleClick() {
            if (this.enableViewer) {
                this.visible = true;
            }
        },
        handleHide() {
            this.visible = false;
        }
    }
};
</script>

<style lang="scss" scoped>
.image-viewer-in-list {
    .img-scale-wrapper {
        width: 100%;
        height: auto;
        min-height: 160px;
        background-size: cover;
        background-position: top center;
        background-repeat: no-repeat;
        overflow: hidden;
    }
}
</style>
