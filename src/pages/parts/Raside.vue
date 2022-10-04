

<template>
    <aside class="right_aside">
        <div class="aside_box">
            <p class="tit">KOSPI</p>
            <div class="number_wrap">
                <span class="txt01 blue">2402.59</span>
                <span class="txt02 blue">▼ 17.15</span>
                <span class="txt03 blue">-0.81%</span>
            </div>
        </div>
        <div class="aside_box">
            <p class="tit">KOSDAQ</p>
            <div class="number_wrap">
                <span class="txt01 red">795.16</span>
                <span class="txt02 red">▲ 2.91</span>
                <span class="txt03 red">+1.24%</span>
            </div>
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
                            <span class="txt01">1</span>
                            <span class="img"><img src="~assets/ranking_pro1.png" alt="프로필사진" /></span>
                            <span class="txt02">몬스탁닉네임</span>
                        </li>
                        <li>
                            <span class="txt01">2</span>
                            <span class="img"><img src="~assets/ranking_pro2.png" alt="프로필사진" /></span>
                            <span class="txt02">호빵맨</span>
                        </li>
                        <li>
                            <span class="txt01">3</span>
                            <span class="img"><img src="~assets/ranking_pro3.png" alt="프로필사진" /></span>
                            <span class="txt02">식빵맨</span>
                        </li>
                        <li>
                            <span class="txt01">4</span>
                            <span class="img"><img src="~assets/ranking_pro4.png" alt="프로필사진" /></span>
                            <span class="txt02">쨜랑이</span>
                        </li>
                        <li>
                            <span class="txt01">5</span>
                            <span class="img"><img src="~assets/ranking_pro5.png" alt="프로필사진" /></span>
                            <span class="txt02">세균맨</span>
                        </li>
                    </ol>
                </q-carousel-slide>
                <q-carousel-slide name="3" class="column no-wrap flex-center">
                    <ol class="ranking_list">
                        <li>
                            <span class="txt01">1</span>
                            <span class="img"><img src="~assets/ranking_pro1.png" alt="프로필사진" /></span>
                            <span class="txt02">몬스탁닉네임</span>
                        </li>
                        <li>
                            <span class="txt01">2</span>
                            <span class="img"><img src="~assets/ranking_pro2.png" alt="프로필사진" /></span>
                            <span class="txt02">호빵맨</span>
                        </li>
                        <li>
                            <span class="txt01">3</span>
                            <span class="img"><img src="~assets/ranking_pro3.png" alt="프로필사진" /></span>
                            <span class="txt02">식빵맨</span>
                        </li>
                        <li>
                            <span class="txt01">4</span>
                            <span class="img"><img src="~assets/ranking_pro4.png" alt="프로필사진" /></span>
                            <span class="txt02">쨜랑이</span>
                        </li>
                        <li>
                            <span class="txt01">5</span>
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

export default {
    data() {
        return {
            slide: ref('1'),
        }
    }
};
</script>

<style lang="scss" scoped>
    .right_aside{
        .aside_box{
            padding:25px 20px;
            background: #fff;
            .tit{color:#141414;font-size:16px;font-weight: 700;}
            .main_tit{color:#141414;margin: 0 0 10px;font-size:20px;font-weight: 700;}
            .info_txt{margin: 0 0 32px;}
            .number_wrap{
                font-size: 16px;
                .blue{color:#2c80ff}
                .red{color:#fb1f1f}
                .txt01{font-size:24px;}
                .txt03{
                    padding:2px 10px;
                    display: inline-flex;
                    border-radius: 4px;
                    &.blue{background:#eef5ff}
                    &.red{background:#fff0f0}
                }
                span + span{margin-left:10px}
            }
        }
        .aside_box + .aside_box{margin-top:20px}
        .ranking_list{
            width:240px;
            li{display:flex;align-items: center;
                margin-bottom:32px
            }
            .img{width:40px;height:40px;overflow: hidden;margin-right:8px;
                img{width:100%;height:100%}
            }
            .txt01{color: $primary;font-weight: 700;display: inline-flex;width:30px;justify-content: center;margin-right:8px}
            .txt02{color:#141414;font-size:16px;font-weight: 700;}
        }
    }
</style>
