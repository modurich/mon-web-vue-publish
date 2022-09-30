<!--
별점 표시 컴포넌트
https://www.npmjs.com/package/vue-star-rating
<StarRating :rating="3.2" read-only />
-->
<template>
    <q-no-ssr>
        <div class="star-rating gpu-layer">
            <vue-star-rating
                active-on-click
                :border-width="3"
                border-color="#d8d8d8"
                :rounded-corners="false"
                :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"
                :max-rating="5"
                :show-rating="false"
                active-color="#FFA500"
                active-border-color="#FFA500"
                inactive-color="#FFFFFF"
                inactive-border-color="#ECECED"
                :star-size="starSize"
                :padding="padding"
                :inline="true"
                clearable
                v-on="$listeners"
                v-bind="$attrs"
                :value="value"
                @rating-selected="input"
            ></vue-star-rating>
        </div>
    </q-no-ssr>
</template>

<script>

export default {
    name: 'StarRating',
    inheritAttrs: true,
    components: {
        // 사용중인 Vue 2.6.11 버전은 아래처럼 비동기 component 등록방식을 쓸때 메모리릭(memory leak)이 발생하는듯 함
        // 해당 이슈는 존재했던것 같지만 분명 이전에 수정이 된거같은데 왜 지금도 발생하는지 모르겠음.
        // https://github.com/vuejs/vue/issues/8740
        // 일단 사용중인 버전에서는 메모리릭 문제가 있다. 어차피 vue3에서는 동일한 문제가 있지는 않을테니 그전까지는 비동기 컴포넌트 등록방식을 피해서 사용해야할듯하다
        // VueStarRating: () => import('vue-star-rating')
    },
    props: {
        value: [Number, String],
        starSize: {
            type: Number,
            default: function() {
                return 18;
            }
        },
        padding: {
            type: Number,
            default: function() {
                return 8;
            }
        }
    },
    data() {
        return {
        };
    },
    computed: {
    },
    methods: {
        input(rating) {
            this.$emit('input', rating);
        }

    },
    created() {
    },
    mounted() {
    }
};
</script>

<style lang="scss">
.star-rating {
    display: inline-block;
    // padding-top: 3px;
    padding-bottom: 0px;
    margin-left: -2px;
    overflow: hidden;

    .vue-star-rating {
        line-height: 100%;
    }
}
</style>
