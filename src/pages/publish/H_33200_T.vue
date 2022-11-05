<template>
    <div class="centerarea_box1">
        <div class="con_box">
          <h2 class="line_type">삼성전자</h2>
          <div class="box_contents pdt32">  
            <div class="button_list_wrap">
              <button>
                <i class="ico ico_insite"/>
                <span>인사이트</span>
              </button>
              <button class="active">
                <i class="ico ico_blash"/>
                <span>BLASH</span>
              </button>
              <button>
                <i class="ico ico_post"/>
                <span>포스트</span>
              </button>
              <button>
                <i class="ico ico_plus">+</i>
                <span>자산추가</span>
              </button>
            </div>
            <!-- S banner -->
            <swiper class="swiper">
              <swiper-slide class="slide">
                <div class="banner_wrap">
                  <img src="~assets/pc_banner1.png" 
                  alt="2022년 3분기 blash 수익률 대회! 
                  텐배거에 도전하라! 1-3등 한정판 NFT 지급!" class="pc_banner">
                  <img src="~assets/mob_banner1.png" 
                  alt="2022년 3분기 blash 수익률 대회! 
                  텐배거에 도전하라! 1-3등 한정판 NFT 지급!" class="mob_banner">
                </div>
              </swiper-slide>
              <swiper-slide class="slide">
                <div class="banner_wrap">
                  <img src="~assets/pc_banner1.png" 
                  alt="2022년 3분기 blash 수익률 대회! 
                  텐배거에 도전하라! 1-3등 한정판 NFT 지급!" class="pc_banner">
                  <img src="~assets/mob_banner1.png" 
                  alt="2022년 3분기 blash 수익률 대회! 
                  텐배거에 도전하라! 1-3등 한정판 NFT 지급!" class="mob_banner">
                </div>
              </swiper-slide>
              <swiper-slide class="slide">
                <div class="banner_wrap">
                  <img src="~assets/pc_banner1.png" 
                  alt="2022년 3분기 blash 수익률 대회! 
                  텐배거에 도전하라! 1-3등 한정판 NFT 지급!" class="pc_banner">
                  <img src="~assets/mob_banner1.png" 
                  alt="2022년 3분기 blash 수익률 대회! 
                  텐배거에 도전하라! 1-3등 한정판 NFT 지급!" class="mob_banner">
                </div>
              </swiper-slide>
            </swiper>
            <!-- E banner -->
            <div class="mgt16">
              <m-textarea :maxlength="1000" :showError="false" :minHeight="textarea1.minHeight"
              :counter="textarea1.counter" :value="textarea1.value" :bottomMessage="textarea1.bottomMessage"
              :height="50" placeholder="저작권 등 다른 사람의 권리를 침해하거나 명예를 훼손하는 게시글은 이용약관과 관련 법률에 의해 제재를 받을 수 있습니다."/>
            </div>
            <div class="btn_wrap mgt16">
                <m-button-3 size="large" color="primary" class="full">댓글 등록</m-button-3>
            </div>
          
            <div class="mgt32 mgb16">최근 작성일 순</div>
            <div class="no_data_wrap">
              <div class="ico_top">
                <i class="ico_error"></i>
              </div>
              <div class="com_message">
                아직 작성된 토론글이 없습니다
              </div>
            </div>
            <ul class="comment_list">
              <li>
                <div class="top_wrap">
                  <div class="my_profile">
                    <div class="img_area">
                      <img src="~assets/profile_img1.png" alt="profile"/>
                    </div>
                    <div class="tit_area">
                      <span class="txt_tit">몬스탁닉넴열글자까지</span>
                      <span class="badge_area">
                        <span class="badge pro">PRO</span>
                        <span class="badge pl1">PL1</span>
                      </span>
                    </div>
                  </div>
                  <button class="ico_user_pl" color="secondary" label="Auto-Close Menu">
                    user추가
                    <q-menu auto-close :offset="[30, 10]">
                      <q-list style="min-width: 80px">
                        <q-item clickable>
                          <q-item-section>차단해제</q-item-section>
                        </q-item>
                        <q-separator />
                      </q-list>
                    </q-menu>
                  </button>
                </div>
                <div class="con_area">삼성전자 가즈아</div>
                <div class="footer_area">
                  <div class="ico_wrap">
                    <span class="ico_area">
                      <span class="ico_f ico_thumbsUp">624</span>
                      <span class="ico_f ico_comment">7</span>
                      <!-- <span class="ico_f ico_view">1.2</span>
                      <span class="ico_f ico_star_s primary">4.7</span> -->
                    </span>
                    <span class="flex">
                      2022.10.26
                      <button class="ico_menu mgl8" color="secondary" label="Auto-Close Menu">
                        menu
                        <q-menu auto-close :offset="[30, 10]">
                          <q-list style="min-width: 80px">
                            <q-item clickable>
                              <q-item-section>락업정보</q-item-section>
                            </q-item>
                            <q-item clickable>
                              <q-item-section>보내기</q-item-section>
                            </q-item>
                          </q-list>
                        </q-menu>
                      </button>
                    </span>
                  </div>
                </div>
              </li>
              <li class="reply_wrap">
                <div class="ico_reply"></div>
                <div class="reply_area">
                  <div class="top_wrap">
                    <div class="my_profile">
                      <div class="img_area">
                        <img src="~assets/profile_img1.png" alt="profile"/>
                      </div>
                      <div class="tit_area">
                        <span class="txt_tit">몬스탁닉넴열글자까지</span>
                        <span class="badge_area">
                          <span class="badge sup">SUP</span>
                          <span class="badge pl1">PL1</span>
                        </span>
                      </div>
                    </div>
                    <button class="ico_user_pl" color="secondary" label="Auto-Close Menu">
                      user추가
                      <q-menu auto-close :offset="[30, 10]">
                        <q-list style="min-width: 80px">
                          <q-item clickable>
                            <q-item-section>차단해제</q-item-section>
                          </q-item>
                          <q-separator />
                        </q-list>
                      </q-menu>
                    </button>
                  </div>
                  <div class="con_area">삼성전자 가즈아</div>
                  <div class="footer_area">
                    <div class="ico_wrap">
                      <span class="ico_area">
                        <span class="ico_f ico_thumbsUp active">624</span>
                        <span class="ico_f ico_comment">7</span>
                        <!-- <span class="ico_f ico_view">1.2</span>
                        <span class="ico_f ico_star_s primary">4.7</span> -->
                      </span>
                      <span class="flex">
                        2022.10.26
                        <button class="ico_menu mgl8" color="secondary" label="Auto-Close Menu">
                          menu
                          <q-menu auto-close :offset="[30, 10]">
                            <q-list style="min-width: 80px">
                              <q-item clickable>
                                <q-item-section>락업정보</q-item-section>
                              </q-item>
                              <q-item clickable>
                                <q-item-section>보내기</q-item-section>
                              </q-item>
                            </q-list>
                          </q-menu>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="reply_wrap">
                <div class="ico_reply"></div>
                <div class="reply_area">
                  <div class="top_wrap">
                    <div class="my_profile">
                      <div class="img_area">
                        <img src="~assets/profile_img1.png" alt="profile"/>
                      </div>
                      <div class="tit_area">
                        <span class="txt_tit">몬스탁닉넴열글자까지</span>
                        <span class="badge_area">
                          <span class="badge sup">SUP</span>
                          <span class="badge pl1">PL1</span>
                        </span>
                      </div>
                    </div>
                    <button class="ico_user_pl" color="secondary" label="Auto-Close Menu">
                      user추가
                      <q-menu auto-close :offset="[30, 10]">
                        <q-list style="min-width: 80px">
                          <q-item clickable>
                            <q-item-section>차단해제</q-item-section>
                          </q-item>
                          <q-separator />
                        </q-list>
                      </q-menu>
                    </button>
                  </div>
                  <div class="con_area">삼성전자 가즈아</div>
                  <div class="footer_area">
                    <div class="ico_wrap">
                      <span class="ico_area">
                        <span class="ico_f ico_thumbsUp active">624</span>
                        <span class="ico_f ico_comment">7</span>
                        <!-- <span class="ico_f ico_view">1.2</span>
                        <span class="ico_f ico_star_s primary">4.7</span> -->
                      </span>
                      <span class="flex">
                        2022.10.26
                        <button class="ico_menu mgl8" color="secondary" label="Auto-Close Menu">
                          menu
                          <q-menu auto-close :offset="[30, 10]">
                            <q-list style="min-width: 80px">
                              <q-item clickable>
                                <q-item-section>락업정보</q-item-section>
                              </q-item>
                              <q-item clickable>
                                <q-item-section>보내기</q-item-section>
                              </q-item>
                            </q-list>
                          </q-menu>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="reply_wrap">
                <div style="width:100%">
                  <m-textarea :maxlength="1000" :showError="false" :minHeight="textarea1.minHeight"
                  :counter="textarea1.counter" :value="textarea1.value" :bottomMessage="textarea1.bottomMessage"
                  :height="50" placeholder="저작권 등 다른 사람의 권리를 침해하거나 명예를 훼손하는 게시글은 이용약관과 관련 법률에 의해 제재를 받을 수 있습니다."/>
                  <div class="btn_wrap mgt16">
                      <m-button-3 size="large" color="primary" class="full">답글 등록</m-button-3>
                  </div>
                  </div>
              </li>
            </ul>
          </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import MDialogBlank from 'src/components/MDialogBlank.vue';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import VClamp from '@boyuai/vue-clamp';



export default {
  components: { MDialogBlank, Swiper, SwiperSlide, VClamp },
    name: 'A_10000_P',
    
    data() {
        return {
            textarea1: {
              value: "",
              counter: true,
              minHeight: 100,
              showError: true,
              //bottomMessage: "바닥메시지"
            },
            toggle1: ref(false),
            text1:ref('호빵맨'),
            text2:ref(''),
            text3:ref(''),
            tab1:ref('A'),
            tab2:ref('A'),
            rad1:ref('A'),
            v_true: ref(true),
            tabs:[
                {label:'전체', value:'A', icon:''},
                {label:'주식', value:'B', icon:''},
                {label:'코인', value:'C', icon:''}
            ],
            dailog1:ref(false),
            polcyType:ref('01'),
        }
    },
    methods: {
  }
};
</script>
<style scoped>

</style>
