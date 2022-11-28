<template>
    <carousel
            ref="carousel"
            v-model="slideIdx"
            autoplay
            :autoplay-timeout="1000"
            :navigate-to="slideIdx"
            :per-page="1"
            :pagination-enabled="false"
            :navigation-enabled="false"
            :mouse-drag="true"
            :loop="true"
        >
            <slide
                :class="item.link ? 'cursor-pointer' : ''"
                style="padding: 0;"
                :key="`carousel-slide-${idx}`"
                v-for="(item, idx) in banWord"
                :name="idx"
            >
                <span>{{item}}</span>
            </slide>
        </carousel>
</template>

<script>
import 'src/boot/carousel';
import { mapState, mapActions, mapGetters } from 'vuex';
export default {
    name: 'CarouselSample',
    components: {
    },
    data() {
        return {
            slideIdx: 0,
            banWord: ['나쁜말', '몬스탁', '몬코인']
        };
    },
    props: {
    },
    computed: {
        ...mapState({
        })
    },
    created() {
    },
    mounted() {
    },
    methods: {
    }
};
</script>

<style lang="scss">
</style>
