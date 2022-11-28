

<template>
    <aside class="right_aside">
        <div class="aside_box">
            <swiper class="swiper"
            :options="this.swiperOption"
            >
                <swiper-slide class="slide" >
                    <p class="tit">KOSPI</p>
                    <div class="number_wrap">
                        <span class="txt01 blue">2402.59</span>
                        <span class="txt02 blue">▼ 17.15</span>
                        <span class="txt03 blue">-0.81%</span>
                    </div>
                </swiper-slide>
                <swiper-slide class="slide">
                    <p class="tit">KOSDAQ</p>
                    <div class="number_wrap">
                        <span class="txt01 red">795.16</span>
                        <span class="txt02 red">▲ 2.91</span>
                        <span class="txt03 red">+1.24%</span>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
        <div class="aside_box">
            <swiper class="swiper"
            :options="this.swiperOption1"
            @click="mouseOver"
            >
                <swiper-slide class="slide">
                    <p class="tit">Bitcoin</p>
                    <div class="number_wrap">
                        <span class="txt01 blue">795.16</span>
                        <span class="txt02 blue">▲ 2.91</span>
                        <span class="txt03 blue">+1.24%</span>
                    </div>
                </swiper-slide>
                <swiper-slide class="slide">
                    <p class="tit">Ethereum</p>
                    <div class="number_wrap">
                        <span class="txt01 red">795.16</span>
                        <span class="txt02 red">▲ 2.91</span>
                        <span class="txt03 red">+1.24%</span>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
        <div class="aside_box">
            <p class="main_tit">플레이어 랭킹</p>
            <p class="info_txt">BLASH 최근 3개월 콘텐츠 기준</p>
            <q-carousel v-model="slide" transition-prev="slide-right" transition-next="slide-left" swipeable animated
                        control-color="primary" class="ranking_slide" navigation padding arrows>
                <q-carousel-slide name="1" class="column no-wrap flex-center">
                    <ol class="ranking_list">
                        <li>
                            <span class="txt01">1</span>
                            <span class="img"><img src="~assets/ranking_pro1.png" alt="프로필사진"/></span>
                            <span class="txt02">몬스탁닉네임</span>
                        </li>
                        <li>
                            <span class="txt01">2</span>
                            <span class="img"><img src="~assets/ranking_pro2.png" alt="프로필사진"/></span>
                            <span class="txt02">호빵맨</span>
                        </li>
                        <li>
                            <span class="txt01">3</span>
                            <span class="img"><img src="~assets/ranking_pro3.png" alt="프로필사진"/></span>
                            <span class="txt02">식빵맨</span>
                        </li>
                        <li>
                            <span class="txt01">4</span>
                            <span class="img"><img src="~assets/ranking_pro4.png" alt="프로필사진"/></span>
                            <span class="txt02">쨜랑이</span>
                        </li>
                        <li>
                            <span class="txt01">5</span>
                            <span class="img"><img src="~assets/ranking_pro5.png" alt="프로필사진"/></span>
                            <span class="txt02">세균맨</span>
                        </li>
                    </ol>
                </q-carousel-slide>
                <q-carousel-slide name="2" class="column no-wrap flex-center">
                    <ol class="ranking_list">
                        <li>
                            <span class="txt01">6</span>
                            <span class="img"><img src="~assets/ranking_pro1.png" alt="프로필사진" /></span>
                            <span class="txt02">몬스탁닉네임</span>
                        </li>
                        <li>
                            <span class="txt01">7</span>
                            <span class="img"><img src="~assets/ranking_pro2.png" alt="프로필사진" /></span>
                            <span class="txt02">호빵맨</span>
                        </li>
                        <li>
                            <span class="txt01">8</span>
                            <span class="img"><img src="~assets/ranking_pro3.png" alt="프로필사진" /></span>
                            <span class="txt02">식빵맨</span>
                        </li>
                        <li>
                            <span class="txt01">9</span>
                            <span class="img"><img src="~assets/ranking_pro4.png" alt="프로필사진" /></span>
                            <span class="txt02">쨜랑이</span>
                        </li>
                        <li>
                            <span class="txt01">10</span>
                            <span class="img"><img src="~assets/ranking_pro5.png" alt="프로필사진" /></span>
                            <span class="txt02">세균맨</span>
                        </li>
                    </ol>
                </q-carousel-slide>
                <q-carousel-slide name="3" class="column no-wrap flex-center">
                    <ol class="ranking_list">
                        <li>
                            <span class="txt01">11</span>
                            <span class="img"><img src="~assets/ranking_pro1.png" alt="프로필사진" /></span>
                            <span class="txt02">몬스탁닉네임</span>
                        </li>
                        <li>
                            <span class="txt01">12</span>
                            <span class="img"><img src="~assets/ranking_pro2.png" alt="프로필사진" /></span>
                            <span class="txt02">호빵맨</span>
                        </li>
                        <li>
                            <span class="txt01">13</span>
                            <span class="img"><img src="~assets/ranking_pro3.png" alt="프로필사진" /></span>
                            <span class="txt02">식빵맨</span>
                        </li>
                        <li>
                            <span class="txt01">14</span>
                            <span class="img"><img src="~assets/ranking_pro4.png" alt="프로필사진" /></span>
                            <span class="txt02">쨜랑이</span>
                        </li>
                        <li>
                            <span class="txt01">15</span>
                            <span class="img"><img src="~assets/ranking_pro5.png" alt="프로필사진" /></span>
                            <span class="txt02">세균맨</span>
                        </li>
                    </ol>
                </q-carousel-slide>
            </q-carousel>
        </div>
    </aside>
</template>

<script>
import { ref, computed } from 'vue';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {

    components: { Swiper, SwiperSlide },

    data() {
        return {
            slide: ref('1'),
            dailog1:ref(false),
            active: false,
            swiperOption: {
                effect: 'slide',
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                spaceBetween: 30,
                centeredSlides: true,
                
            },
            swiperOption1: {
                effect: 'slide',
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                spaceBetween: 30,
                centeredSlides: true,
            }
        }
    }
};
</script>

<style lang="scss" scoped>
    
</style>
