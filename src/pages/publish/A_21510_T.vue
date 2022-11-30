<template>
    <div class="centerarea_box1">
        <div class="con_box">
          <h2 class="line_type">프로필</h2>
          <m-tabs class="line_type large sticky_tab1" v-model="tab1" :items="tabs"/>
          <div class="tab_contents" v-if="tab1 == 'A'">
            <!-- S 인기추천 -->
            <div class="l_row_s mgt16 right">
              <span>UTC +9 14:02 기준</span>
            </div>
            <ul class="follow_info_wrap">
              <li>
                <div class="my_profile">
                  <div class="img_area">
                    <a href="#"><img src="~assets/profile_img1.png" alt="profile"/></a>
                  </div>
                  <div class="tit_area">
                    <span class="txt_tit"><a href="#">몬스탁닉넴열글자까지</a></span>
                    <span class="badge_area">
                      <button class="badge pro">PRO</button>
                      <button class="badge pl1">PL1</button>
                    </span>
                  </div>
                </div>
                <div class="follow_btn_wrap">
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
              </li>
              <li>
                <div class="my_profile">
                  <div class="img_area">
                    <a href="#"><img src="~assets/profile_img2.png" alt="profile"/></a>
                  </div>
                  <div class="tit_area">
                    <span class="txt_tit">몬스탁닉넴열글자까지</span>
                    <span class="badge_area">
                      <span class="badge pro">PRO</span>
                      <span class="badge pl1">PL1</span>
                    </span>
                  </div>
                </div>
                <div class="follow_btn_wrap">
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
              </li>
              <li>
                <div class="my_profile">
                  <div class="img_area">
                    <a href="#"><img src="~assets/profile_img3.png" alt="profile"/></a>
                  </div>
                  <div class="tit_area">
                    <span class="txt_tit"><a href="#">몬스탁닉넴열글자까지</a></span>
                    <span class="badge_area">
                      <button class="badge pro">PRO</button>
                      <button class="badge pl1">PL1</button>
                    </span>
                  </div>
                </div>
                <div class="follow_btn_wrap">
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
              </li>
              <li>
                <div class="my_profile">
                  <div class="img_area">
                    <a href="#"><img src="~assets/profile_img4.png" alt="profile"/></a>
                  </div>
                  <div class="tit_area">
                    <span class="txt_tit"><a href="#">몬스탁닉넴열글자까지</a></span>
                    <span class="badge_area">
                      <button class="badge pro">PRO</button>
                      <button class="badge pl1">PL1</button>
                    </span>
                  </div>
                </div>
                <div class="follow_btn_wrap">
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
              </li>
              <li>
                <div class="my_profile">
                  <div class="img_area">
                    <a href="#"><img src="~assets/profile_img4.png" alt="profile"/></a>
                  </div>
                  <div class="tit_area">
                    <span class="txt_tit"><a href="#">몬스탁닉넴열글자까지</a></span>
                    <span class="badge_area">
                      <button class="badge pro">PRO</button>
                      <button class="badge pl1">PL1</button>
                    </span>
                  </div>
                </div>
                <div class="follow_btn_wrap">
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
              </li>
            </ul>
            <!-- E 인기추천 -->
          </div>
          <div class="tab_contents" v-if="tab1 == 'B'">
            <!-- S 신규가입 -->
            <div class="l_row_s mgt16 right">
              <span>UTC +9 14:02 기준</span>
            </div>
            <ul class="follow_info_wrap">
              <li>
                <div class="my_profile">
                  <div class="img_area">
                    <a href="#"><img src="~assets/profile_img1.png" alt="profile"/></a>
                  </div>
                  <div class="tit_area">
                    <span class="txt_tit"><a href="#">몬스탁닉넴열글자까지</a></span>
                    <span class="badge_area">
                      <button class="badge pro">PRO</button>
                      <button class="badge pl1">PL1</button>
                    </span>
                  </div>
                </div>
                <div class="follow_btn_wrap">
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
              </li>
              <li>
                <div class="my_profile">
                  <div class="img_area">
                    <a href="#"><img src="~assets/profile_img2.png" alt="profile"/></a>
                  </div>
                  <div class="tit_area">
                    <span class="txt_tit">몬스탁닉넴열글자까지</span>
                    <span class="badge_area">
                      <span class="badge pro">PRO</span>
                      <span class="badge pl1">PL1</span>
                    </span>
                  </div>
                </div>
                <div class="follow_btn_wrap">
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
              </li>
              <li>
                <div class="my_profile">
                  <div class="img_area">
                    <a href="#"><img src="~assets/profile_img3.png" alt="profile"/></a>
                  </div>
                  <div class="tit_area">
                    <span class="txt_tit"><a href="#">몬스탁닉넴열글자까지</a></span>
                    <span class="badge_area">
                      <button class="badge pro">PRO</button>
                      <button class="badge pl1">PL1</button>
                    </span>
                  </div>
                </div>
                <div class="follow_btn_wrap">
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
              </li>
              <li>
                <div class="my_profile">
                  <div class="img_area">
                    <a href="#"><img src="~assets/profile_img4.png" alt="profile"/></a>
                  </div>
                  <div class="tit_area">
                    <span class="txt_tit"><a href="#">몬스탁닉넴열글자까지</a></span>
                    <span class="badge_area">
                      <button class="badge pro">PRO</button>
                      <button class="badge pl1">PL1</button>
                    </span>
                  </div>
                </div>
                <div class="follow_btn_wrap">
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
              </li>
              <li>
                <div class="my_profile">
                  <div class="img_area">
                    <a href="#"><img src="~assets/profile_img4.png" alt="profile"/></a>
                  </div>
                  <div class="tit_area">
                    <span class="txt_tit"><a href="#">몬스탁닉넴열글자까지</a></span>
                    <span class="badge_area">
                      <button class="badge pro">PRO</button>
                      <button class="badge pl1">PL1</button>
                    </span>
                  </div>
                </div>
                <div class="follow_btn_wrap">
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
              </li>
            </ul>
            <!-- E 신규가입 -->
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
            text1:ref('호빵맨'),
            text2:ref(''),
            text3:ref(''),
            tab1:ref('A'),
            tab2:ref('A'),
            rad1:ref('A'),
            tabs:[
                {label:'인기 추천', value:'A', icon:''},
                {label:'신규 가입', value:'B', icon:''},
            ],
            dailog1:ref(false),
            polcyType:ref('01'),
            textarea1 : {
                value: "",
                counter: true,
                minHeight: 100,
                showError: true,
                //bottomMessage: "바닥메시지"
            },
            swiperOption: {
                slidesPerView: 5,
                spaceBetween: 50,
                breakpoints: {
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 30
                    },
                    650: {
                        slidesPerView: 4,
                        spaceBetween: 30
                    },
                    520: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    320: {
                        slidesPerView: 2.2,
                        spaceBetween: 30
                    }
                }
            },
        }
    },
    methods: {
  }
};
</script>
<style scoped>

</style>
