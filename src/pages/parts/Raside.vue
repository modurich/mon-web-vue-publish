

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
        <div class="aside_box no_pd">
            <m-tabs class="line_type large" v-model="tab1" :items="tabs" />
            <div class="tab_contents" v-if="tab1 == 'A'">
                <q-carousel v-model="slide1" transition-prev="slide-right" transition-next="slide-left" swipeable animated
                        control-color="primary" class="tag_slide ranking_slide" navigation padding arrows>
                <q-carousel-slide name="1" class="column no-wrap flex-center">
                     <ol class="tag_list01">
                        <li><a href="#"><span class="txt_num">1</span>#삼성전자<span class="round_tag">3,266</span></a></li>
                        <li><a href="#"><span class="txt_num">2</span>#삼성전자<span class="round_tag">3,266</span></a></li>
                        <li><a href="#"><span class="txt_num">3</span>#삼성전자<span class="round_tag">3,266</span></a></li>
                        <li><a href="#"><span class="txt_num">4</span>#삼성전자<span class="round_tag">3,266</span></a></li>
                        <li><a href="#"><span class="txt_num">5</span>#삼성전자<span class="round_tag">3,266</span></a></li>
                        <li><a href="#"><span class="txt_num">6</span>#삼성전자<span class="round_tag">3,266</span></a></li>
                        <li><a href="#"><span class="txt_num">7</span>#삼성전자<span class="round_tag">3,266</span></a></li>
                        <li><a href="#"><span class="txt_num">8</span>#삼성전자<span class="round_tag">3,266</span></a></li>
                        <li><a href="#"><span class="txt_num">9</span>#삼성전자<span class="round_tag">3,266</span></a></li>
                        <li><a href="#"><span class="txt_num">10</span>#삼성전자<span class="round_tag">3,266</span></a></li>
                    </ol>
                </q-carousel-slide>
                <q-carousel-slide name="2" class="column no-wrap flex-center">
                   <ol class="tag_list01">
                        <li><a href="#"><span class="txt_num">1</span>#삼성전자<span class="round_tag">3,266</span></a></li>
                        <li><a href="#"><span class="txt_num">2</span>#삼성전자<span class="round_tag">3,266</span></a></li>
                        <li><a href="#"><span class="txt_num">3</span>#삼성전자<span class="round_tag">3,266</span></a></li>
                        <li><a href="#"><span class="txt_num">4</span>#삼성전자<span class="round_tag">3,266</span></a></li>
                        <li><a href="#"><span class="txt_num">5</span>#삼성전자<span class="round_tag">3,266</span></a></li>
                        <li><a href="#"><span class="txt_num">6</span>#삼성전자<span class="round_tag">3,266</span></a></li>
                        <li><a href="#"><span class="txt_num">7</span>#삼성전자<span class="round_tag">3,266</span></a></li>
                        <li><a href="#"><span class="txt_num">8</span>#삼성전자<span class="round_tag">3,266</span></a></li>
                        <li><a href="#"><span class="txt_num">9</span>#삼성전자<span class="round_tag">3,266</span></a></li>
                        <li><a href="#"><span class="txt_num">10</span>#삼성전자<span class="round_tag">3,266</span></a></li>
                    </ol>
                </q-carousel-slide>
                <q-carousel-slide name="3" class="column no-wrap flex-center">
                    <ol class="tag_list01">
                        <li><a href="#"><span class="txt_num">1</span>#삼성전자<span class="round_tag">3,266</span></a></li>
                        <li><a href="#"><span class="txt_num">2</span>#삼성전자<span class="round_tag">3,266</span></a></li>
                        <li><a href="#"><span class="txt_num">3</span>#삼성전자<span class="round_tag">3,266</span></a></li>
                        <li><a href="#"><span class="txt_num">4</span>#삼성전자<span class="round_tag">3,266</span></a></li>
                        <li><a href="#"><span class="txt_num">5</span>#삼성전자<span class="round_tag">3,266</span></a></li>
                        <li><a href="#"><span class="txt_num">6</span>#삼성전자<span class="round_tag">3,266</span></a></li>
                        <li><a href="#"><span class="txt_num">7</span>#삼성전자<span class="round_tag">3,266</span></a></li>
                        <li><a href="#"><span class="txt_num">8</span>#삼성전자<span class="round_tag">3,266</span></a></li>
                        <li><a href="#"><span class="txt_num">9</span>#삼성전자<span class="round_tag">3,266</span></a></li>
                        <li><a href="#"><span class="txt_num">10</span>#삼성전자<span class="round_tag">3,266</span></a></li>
                    </ol>
                </q-carousel-slide>
            </q-carousel>
            </div>
             <div class="tab_contents" v-if="tab1 == 'B'">
                <q-carousel v-model="slide1" transition-prev="slide-right" transition-next="slide-left" swipeable animated
                        control-color="primary" class="product_slide ranking_slide" navigation padding arrows>
                <q-carousel-slide name="1" class="column no-wrap flex-center">
                    <ul class="product_list aside">
                        <li>
                            <a href="#">
                                <div class="prd_img">
                                <span class="txt_number">1</span>
                                <div class="img_area">
                                    <img src="~assets/prd_logo.png" alt="profile" />
                                </div>
                                <div class="tit_area">
                                    <span class="txt01">삼성전자우</span>
                                </div>
                                </div>
                            </a>
                            <div class="ico_area">
                            <q-checkbox v-model="v_true" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                                indeterminate-icon="help" />
                            </div>
                        </li>
                        <li>
                            <a href="#">
                                <div class="prd_img">
                                <span class="txt_number">2</span>
                                <div class="img_area">
                                    <img src="~assets/prd_logo.png" alt="profile" />
                                </div>
                                <div class="tit_area">
                                    <span class="txt01">삼성전자우</span>
                                </div>
                                </div>
                            </a>
                            <div class="ico_area">
                            <q-checkbox v-model="v_true" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                                indeterminate-icon="help" />
                            </div>
                        </li>
                        <li>
                            <a href="#">
                                <div class="prd_img">
                                <span class="txt_number">3</span>
                                <div class="img_area">
                                    <img src="~assets/prd_logo.png" alt="profile" />
                                </div>
                                <div class="tit_area">
                                    <span class="txt01">삼성전자우</span>
                                </div>
                                </div>
                            </a>
                            <div class="ico_area">
                            <q-checkbox v-model="v_true" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                                indeterminate-icon="help" />
                            </div>
                        </li>
                        <li>
                            <a href="#">
                                <div class="prd_img">
                                <span class="txt_number">4</span>
                                <div class="img_area">
                                    <img src="~assets/prd_logo.png" alt="profile" />
                                </div>
                                <div class="tit_area">
                                    <span class="txt01">삼성전자우</span>
                                </div>
                                </div>
                            </a>
                            <div class="ico_area">
                            <q-checkbox v-model="v_true" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                                indeterminate-icon="help" />
                            </div>
                        </li>
                        <li>
                            <a href="#">
                                <div class="prd_img">
                                <span class="txt_number">5</span>
                                <div class="img_area">
                                    <img src="~assets/prd_logo.png" alt="profile" />
                                </div>
                                <div class="tit_area">
                                    <span class="txt01">삼성전자우</span>
                                </div>
                                </div>
                            </a>
                            <div class="ico_area">
                            <q-checkbox v-model="v_true" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                                indeterminate-icon="help" />
                            </div>
                        </li>
                        <li>
                            <a href="#">
                                <div class="prd_img">
                                <span class="txt_number">6</span>
                                <div class="img_area">
                                    <img src="~assets/prd_logo.png" alt="profile" />
                                </div>
                                <div class="tit_area">
                                    <span class="txt01">삼성전자우</span>
                                </div>
                                </div>
                            </a>
                            <div class="ico_area">
                            <q-checkbox v-model="v_true" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                                indeterminate-icon="help" />
                            </div>
                        </li>
                        <li>
                            <a href="#">
                                <div class="prd_img">
                                <span class="txt_number">7</span>
                                <div class="img_area">
                                    <img src="~assets/prd_logo.png" alt="profile" />
                                </div>
                                <div class="tit_area">
                                    <span class="txt01">삼성전자우</span>
                                </div>
                                </div>
                            </a>
                            <div class="ico_area">
                            <q-checkbox v-model="v_true" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                                indeterminate-icon="help" />
                            </div>
                        </li>
                        <li>
                            <a href="#">
                                <div class="prd_img">
                                <span class="txt_number">8</span>
                                <div class="img_area">
                                    <img src="~assets/prd_logo.png" alt="profile" />
                                </div>
                                <div class="tit_area">
                                    <span class="txt01">삼성전자우</span>
                                </div>
                                </div>
                            </a>
                            <div class="ico_area">
                            <q-checkbox v-model="v_true" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                                indeterminate-icon="help" />
                            </div>
                        </li>
                        <li>
                            <a href="#">
                                <div class="prd_img">
                                <span class="txt_number">9</span>
                                <div class="img_area">
                                    <img src="~assets/prd_logo.png" alt="profile" />
                                </div>
                                <div class="tit_area">
                                    <span class="txt01">삼성전자우</span>
                                </div>
                                </div>
                            </a>
                            <div class="ico_area">
                            <q-checkbox v-model="v_true" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                                indeterminate-icon="help" />
                            </div>
                        </li>
                        <li>
                            <a href="#">
                                <div class="prd_img">
                                <span class="txt_number">10</span>
                                <div class="img_area">
                                    <img src="~assets/prd_logo.png" alt="profile" />
                                </div>
                                <div class="tit_area">
                                    <span class="txt01">삼성전자우</span>
                                </div>
                                </div>
                            </a>
                            <div class="ico_area">
                            <q-checkbox v-model="v_true" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                                indeterminate-icon="help" />
                            </div>
                        </li>
                    </ul>
                </q-carousel-slide>
                 <q-carousel-slide name="2" class="column no-wrap flex-center">
                    <ul class="product_list aside">
                        <li>
                            <a href="#">
                                <div class="prd_img">
                                <span class="txt_number">1</span>
                                <div class="img_area">
                                    <img src="~assets/prd_logo.png" alt="profile" />
                                </div>
                                <div class="tit_area">
                                    <span class="txt01">삼성전자우</span>
                                </div>
                                </div>
                            </a>
                            <div class="ico_area">
                            <q-checkbox v-model="v_true" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                                indeterminate-icon="help" />
                            </div>
                        </li>
                        <li>
                            <a href="#">
                                <div class="prd_img">
                                <span class="txt_number">2</span>
                                <div class="img_area">
                                    <img src="~assets/prd_logo.png" alt="profile" />
                                </div>
                                <div class="tit_area">
                                    <span class="txt01">삼성전자우</span>
                                </div>
                                </div>
                            </a>
                            <div class="ico_area">
                            <q-checkbox v-model="v_true" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                                indeterminate-icon="help" />
                            </div>
                        </li>
                        <li>
                            <a href="#">
                                <div class="prd_img">
                                <span class="txt_number">3</span>
                                <div class="img_area">
                                    <img src="~assets/prd_logo.png" alt="profile" />
                                </div>
                                <div class="tit_area">
                                    <span class="txt01">삼성전자우</span>
                                </div>
                                </div>
                            </a>
                            <div class="ico_area">
                            <q-checkbox v-model="v_true" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                                indeterminate-icon="help" />
                            </div>
                        </li>
                        <li>
                            <a href="#">
                                <div class="prd_img">
                                <span class="txt_number">4</span>
                                <div class="img_area">
                                    <img src="~assets/prd_logo.png" alt="profile" />
                                </div>
                                <div class="tit_area">
                                    <span class="txt01">삼성전자우</span>
                                </div>
                                </div>
                            </a>
                            <div class="ico_area">
                            <q-checkbox v-model="v_true" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                                indeterminate-icon="help" />
                            </div>
                        </li>
                        <li>
                            <a href="#">
                                <div class="prd_img">
                                <span class="txt_number">5</span>
                                <div class="img_area">
                                    <img src="~assets/prd_logo.png" alt="profile" />
                                </div>
                                <div class="tit_area">
                                    <span class="txt01">삼성전자우</span>
                                </div>
                                </div>
                            </a>
                            <div class="ico_area">
                            <q-checkbox v-model="v_true" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                                indeterminate-icon="help" />
                            </div>
                        </li>
                        <li>
                            <a href="#">
                                <div class="prd_img">
                                <span class="txt_number">6</span>
                                <div class="img_area">
                                    <img src="~assets/prd_logo.png" alt="profile" />
                                </div>
                                <div class="tit_area">
                                    <span class="txt01">삼성전자우</span>
                                </div>
                                </div>
                            </a>
                            <div class="ico_area">
                            <q-checkbox v-model="v_true" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                                indeterminate-icon="help" />
                            </div>
                        </li>
                        <li>
                            <a href="#">
                                <div class="prd_img">
                                <span class="txt_number">7</span>
                                <div class="img_area">
                                    <img src="~assets/prd_logo.png" alt="profile" />
                                </div>
                                <div class="tit_area">
                                    <span class="txt01">삼성전자우</span>
                                </div>
                                </div>
                            </a>
                            <div class="ico_area">
                            <q-checkbox v-model="v_true" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                                indeterminate-icon="help" />
                            </div>
                        </li>
                        <li>
                            <a href="#">
                                <div class="prd_img">
                                <span class="txt_number">8</span>
                                <div class="img_area">
                                    <img src="~assets/prd_logo.png" alt="profile" />
                                </div>
                                <div class="tit_area">
                                    <span class="txt01">삼성전자우</span>
                                </div>
                                </div>
                            </a>
                            <div class="ico_area">
                            <q-checkbox v-model="v_true" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                                indeterminate-icon="help" />
                            </div>
                        </li>
                        <li>
                            <a href="#">
                                <div class="prd_img">
                                <span class="txt_number">9</span>
                                <div class="img_area">
                                    <img src="~assets/prd_logo.png" alt="profile" />
                                </div>
                                <div class="tit_area">
                                    <span class="txt01">삼성전자우</span>
                                </div>
                                </div>
                            </a>
                            <div class="ico_area">
                            <q-checkbox v-model="v_true" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                                indeterminate-icon="help" />
                            </div>
                        </li>
                        <li>
                            <a href="#">
                                <div class="prd_img">
                                <span class="txt_number">10</span>
                                <div class="img_area">
                                    <img src="~assets/prd_logo.png" alt="profile" />
                                </div>
                                <div class="tit_area">
                                    <span class="txt01">삼성전자우</span>
                                </div>
                                </div>
                            </a>
                            <div class="ico_area">
                            <q-checkbox v-model="v_true" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                                indeterminate-icon="help" />
                            </div>
                        </li>
                    </ul>
                </q-carousel-slide>
                 <q-carousel-slide name="3" class="column no-wrap flex-center">
                    <ul class="product_list aside">
                        <li>
                            <a href="#">
                                <div class="prd_img">
                                <span class="txt_number">1</span>
                                <div class="img_area">
                                    <img src="~assets/prd_logo.png" alt="profile" />
                                </div>
                                <div class="tit_area">
                                    <span class="txt01">삼성전자우</span>
                                </div>
                                </div>
                            </a>
                            <div class="ico_area">
                            <q-checkbox v-model="v_true" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                                indeterminate-icon="help" />
                            </div>
                        </li>
                        <li>
                            <a href="#">
                                <div class="prd_img">
                                <span class="txt_number">2</span>
                                <div class="img_area">
                                    <img src="~assets/prd_logo.png" alt="profile" />
                                </div>
                                <div class="tit_area">
                                    <span class="txt01">삼성전자우</span>
                                </div>
                                </div>
                            </a>
                            <div class="ico_area">
                            <q-checkbox v-model="v_true" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                                indeterminate-icon="help" />
                            </div>
                        </li>
                        <li>
                            <a href="#">
                                <div class="prd_img">
                                <span class="txt_number">3</span>
                                <div class="img_area">
                                    <img src="~assets/prd_logo.png" alt="profile" />
                                </div>
                                <div class="tit_area">
                                    <span class="txt01">삼성전자우</span>
                                </div>
                                </div>
                            </a>
                            <div class="ico_area">
                            <q-checkbox v-model="v_true" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                                indeterminate-icon="help" />
                            </div>
                        </li>
                        <li>
                            <a href="#">
                                <div class="prd_img">
                                <span class="txt_number">4</span>
                                <div class="img_area">
                                    <img src="~assets/prd_logo.png" alt="profile" />
                                </div>
                                <div class="tit_area">
                                    <span class="txt01">삼성전자우</span>
                                </div>
                                </div>
                            </a>
                            <div class="ico_area">
                            <q-checkbox v-model="v_true" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                                indeterminate-icon="help" />
                            </div>
                        </li>
                        <li>
                            <a href="#">
                                <div class="prd_img">
                                <span class="txt_number">5</span>
                                <div class="img_area">
                                    <img src="~assets/prd_logo.png" alt="profile" />
                                </div>
                                <div class="tit_area">
                                    <span class="txt01">삼성전자우</span>
                                </div>
                                </div>
                            </a>
                            <div class="ico_area">
                            <q-checkbox v-model="v_true" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                                indeterminate-icon="help" />
                            </div>
                        </li>
                        <li>
                            <a href="#">
                                <div class="prd_img">
                                <span class="txt_number">6</span>
                                <div class="img_area">
                                    <img src="~assets/prd_logo.png" alt="profile" />
                                </div>
                                <div class="tit_area">
                                    <span class="txt01">삼성전자우</span>
                                </div>
                                </div>
                            </a>
                            <div class="ico_area">
                            <q-checkbox v-model="v_true" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                                indeterminate-icon="help" />
                            </div>
                        </li>
                        <li>
                            <a href="#">
                                <div class="prd_img">
                                <span class="txt_number">7</span>
                                <div class="img_area">
                                    <img src="~assets/prd_logo.png" alt="profile" />
                                </div>
                                <div class="tit_area">
                                    <span class="txt01">삼성전자우</span>
                                </div>
                                </div>
                            </a>
                            <div class="ico_area">
                            <q-checkbox v-model="v_true" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                                indeterminate-icon="help" />
                            </div>
                        </li>
                        <li>
                            <a href="#">
                                <div class="prd_img">
                                <span class="txt_number">8</span>
                                <div class="img_area">
                                    <img src="~assets/prd_logo.png" alt="profile" />
                                </div>
                                <div class="tit_area">
                                    <span class="txt01">삼성전자우</span>
                                </div>
                                </div>
                            </a>
                            <div class="ico_area">
                            <q-checkbox v-model="v_true" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                                indeterminate-icon="help" />
                            </div>
                        </li>
                        <li>
                            <a href="#">
                                <div class="prd_img">
                                <span class="txt_number">9</span>
                                <div class="img_area">
                                    <img src="~assets/prd_logo.png" alt="profile" />
                                </div>
                                <div class="tit_area">
                                    <span class="txt01">삼성전자우</span>
                                </div>
                                </div>
                            </a>
                            <div class="ico_area">
                            <q-checkbox v-model="v_true" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                                indeterminate-icon="help" />
                            </div>
                        </li>
                        <li>
                            <a href="#">
                                <div class="prd_img">
                                <span class="txt_number">10</span>
                                <div class="img_area">
                                    <img src="~assets/prd_logo.png" alt="profile" />
                                </div>
                                <div class="tit_area">
                                    <span class="txt01">삼성전자우</span>
                                </div>
                                </div>
                            </a>
                            <div class="ico_area">
                            <q-checkbox v-model="v_true" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                                indeterminate-icon="help" />
                            </div>
                        </li>
                    </ul>
                </q-carousel-slide>
            </q-carousel>
            </div>
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
            slide1: ref('1'),
            dailog1:ref(false),
            active: false,
            tab1: ref('A'),
            v_true: ref(true),
            tabs: [
            { label: '인기 태그', value: 'A', icon: '' },
            { label: '인기 종목', value: 'B', icon: '' },
            
            ],
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
            },
        }
    }
};
</script>

<style lang="scss" scoped>
    
</style>
