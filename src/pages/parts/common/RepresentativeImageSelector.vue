<!--
이미지 리스트 중 대표이미지를 선택하는 컴포넌트
-->
<i18n>
{
  "ko": {
    "template": {
      "label1": "썸네일(본문이미지 자동선택)"
    }
  },
  "en": {
    "template": {
      "label1": "Thumbnail (automatic selection of image)"
    }
  }
}
</i18n>
<template>
    <div class="representative-image-selector">
        <div class="img-list" v-if="imgList.length > 0">
            <div class="img-list-item" :key="`imgList-${idx}`" v-for="(src, idx) in imgList">
                <div :class="{ 'cursor-pointer': true, 'selectable-image': true, 'selected': value === src }" :style="{ backgroundImage: `url(${src})` }" :src="src" @click="selectImg(src)" />
            </div>
        </div>
        <div v-else class="selector-empty">
            <div class="f-14-500-lg">{{ $t('template.label1') }}</div>
            <m-icon name="image" :color="$style.greyTabby" stroke-opacity="0" />
        </div>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
export default {
    name: 'RepresentativeImageSelector',
    inheritAttrs: true,
    components: {
    },
    props: {
        imgList: {
            type: Array,
            required: true
        },
        value: {
            type: String,
            default() {
                return null;
            }
        }
    },
    computed: {
    },
    data() {
        return {
        };
    },
    watch: {
        imgList(newVal, oldVal) {
            if (oldVal.length > 0 && newVal.length === 0) {
                this.$emit('input', null);
            } else if (newVal.length > 0 && oldVal.length === 0 && newVal.indexOf(this.value) === -1) {
                this.$emit('input', newVal[0]);
            }
        }
    },
    created() {
    },
    mounted() {
    },
    methods: {
        selectImg(src) {
            this.$emit('input', src);
        }
    }
};
</script>

<style lang="scss">
.representative-image-selector {
    padding: 8px 0;
    overflow-x: auto;
    overflow-y: hidden;
    & > div {
        height: 104px;
    }
    .img-list {
        white-space: nowrap;

        .img-list-item {
            display: inline-block;
            margin-right: 8px;
            .selectable-image {
                background-size: cover;
                background-position: top center;
                background-repeat: no-repeat;
                width: 104px;
                height: 104px;
                &.selected {
                    border: 2px solid $orange;
                }
            }

            &:first-child {
                margin-left: 32px;
            }

            &:last-child {
                margin-right: 32px;
            }
        }
    }

    .selector-empty {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}
</style>
