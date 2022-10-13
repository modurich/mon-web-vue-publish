<template>
    <div class="centerarea_box1">
      <q-form>
        <div class="con_box">
          <h2 class="line_type">프로필</h2>
          <m-tabs class="line_type large" v-model="tab1" :items="tabs"/>
          <div class="tab_contents" v-if="tab1 == 'A'">
            <!-- S 팔로워-->
            <!-- S 추천 사용자 -->
            <div>
              <m-input v-model="search" filled placeholder="닉네임 입력" type="search" class="round_type">
                <template v-slot:append>
                  <button class="ico_ip_search" />
                </template>
              </m-input>
            </div>
            <div class="ico_top">
              <i class="ico_error"></i>
            </div>
            <div class="com_message">
              팔로워가 없습니다
              <!-- 이용자를 찾을 수 없습니다 -->
            </div>
            <div class="between">
              <span>총 00명</span>
              <div class="radio_wrap">
                  <m-radio v-model="rad1" val="A" label="최신순"/>
                  <m-radio v-model="rad1" val="B" label="오래된순"/>
              </div>
            </div>
            <ul class="follow_info_wrap">
              <li>
                <div class="my_profile">
                  <div class="img_area">
                    <img src="~assets/profile_img1.png" alt="profile"/>
                  </div>
                  <div class="tit_area">
                    <span class="txt_tit">몬스탁닉넴열글자까지</span>
                    <span class="badge_area">
                      <span class="badge type1">PRO</span>
                      <span class="badge type2">PL1</span>
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
                    <button class="ico_menu" color="secondary" label="Auto-Close Menu">
                      menu
                      <q-menu auto-close :offset="[30, 10]">
                        <q-list style="min-width: 80px">
                          <q-item clickable>
                            <q-item-section>?</q-item-section>
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
                    <img src="~assets/profile_img2.png" alt="profile"/>
                  </div>
                  <div class="tit_area">
                    <span class="txt_tit">몬스탁닉넴열글자까지</span>
                    <span class="badge_area">
                      <span class="badge type1">PRO</span>
                      <span class="badge type2">PL1</span>
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
                    <button class="ico_menu" color="secondary" label="Auto-Close Menu">
                      menu
                      <q-menu auto-close :offset="[30, 10]">
                        <q-list style="min-width: 80px">
                          <q-item clickable>
                            <q-item-section>?</q-item-section>
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
                    <img src="~assets/profile_img3.png" alt="profile"/>
                  </div>
                  <div class="tit_area">
                    <span class="txt_tit">몬스탁닉넴열글자까지</span>
                    <span class="badge_area">
                      <span class="badge type1">PRO</span>
                      <span class="badge type2">PL1</span>
                    </span>
                  </div>
                </div>
                <div class="follow_btn_wrap">
                    <button class="ico_user_ck" color="secondary" label="Auto-Close Menu">
                      user선택
                      <q-menu auto-close :offset="[30, 10]">
                        <q-list style="min-width: 80px">
                          <q-item clickable>
                            <q-item-section>차단해제</q-item-section>
                          </q-item>
                          <q-separator />
                        </q-list>
                      </q-menu>
                    </button>
                    <button class="ico_menu" color="secondary" label="Auto-Close Menu">
                      menu
                      <q-menu auto-close :offset="[30, 10]">
                        <q-list style="min-width: 80px">
                          <q-item clickable>
                            <q-item-section>?</q-item-section>
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
                    <img src="~assets/profile_img4.png" alt="profile"/>
                  </div>
                  <div class="tit_area">
                    <span class="txt_tit">몬스탁닉넴열글자까지</span>
                    <span class="badge_area">
                      <span class="badge type1">PRO</span>
                      <span class="badge type2">PL1</span>
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
                    <button class="ico_menu" color="secondary" label="Auto-Close Menu">
                      menu
                      <q-menu auto-close :offset="[30, 10]">
                        <q-list style="min-width: 80px">
                          <q-item clickable>
                            <q-item-section>?</q-item-section>
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
                    <img src="~assets/profile_img4.png" alt="profile"/>
                  </div>
                  <div class="tit_area">
                    <span class="txt_tit">몬스탁닉넴열글자까지</span>
                    <span class="badge_area">
                      <span class="badge type1">PRO</span>
                      <span class="badge type2">PL1</span>
                    </span>
                  </div>
                </div>
                <div class="follow_btn_wrap">
                    <button class="ico_user_ck" color="secondary" label="Auto-Close Menu">
                      user선택
                      <q-menu auto-close :offset="[30, 10]">
                        <q-list style="min-width: 80px">
                          <q-item clickable>
                            <q-item-section>차단해제</q-item-section>
                          </q-item>
                          <q-separator />
                        </q-list>
                      </q-menu>
                    </button>
                    <button class="ico_menu" color="secondary" label="Auto-Close Menu">
                      menu
                      <q-menu auto-close :offset="[30, 10]">
                        <q-list style="min-width: 80px">
                          <q-item clickable>
                            <q-item-section>?</q-item-section>
                          </q-item>
                          <q-separator />
                        </q-list>
                      </q-menu>
                    </button>
                </div>
              </li>
            </ul>
            <h3 class="between">
              <span>추천 사용자</span>
              <a href="#" class="link_view">더보기</a>
            </h3>
            <div class="swiper_wrap">
              <swiper class="swiper" :options="swiperOption">
                  <swiper-slide>
                    <div class="recommend_list">
                      <div class="img_area">
                        <img src="~assets/profile_img2.png" alt="profile"/>
                      </div>
                      <div class="txt_tit">몬스탁닉넴열글자까지</div>
                      <span class="badge_area">
                        <span class="badge type1">PRO</span>
                        <span class="badge type2">PL1</span>
                      </span>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="recommend_list">
                      <div class="img_area">
                        <img src="~assets/profile_img3.png" alt="profile"/>
                      </div>
                      <div class="txt_tit">몬스탁닉네임02</div>
                      <span class="badge_area">
                        <span class="badge type1">PRO</span>
                        <span class="badge type2">PL1</span>
                      </span>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="recommend_list">
                      <div class="img_area">
                        <img src="~assets/profile_img4.png" alt="profile"/>
                      </div>
                      <div class="txt_tit">몬스탁닉네임03</div>
                      <span class="badge_area">
                        <span class="badge type1">PRO</span>
                        <span class="badge type2">PL1</span>
                      </span>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="recommend_list">
                      <div class="img_area">
                        <img src="~assets/profile_img1.png" alt="profile"/>
                      </div>
                      <div class="txt_tit">몬스탁닉네임04</div>
                      <span class="badge_area">
                        <span class="badge type1">PRO</span>
                        <span class="badge type2">PL1</span>
                      </span>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="recommend_list">
                      <div class="img_area">
                        <img src="~assets/profile_img1.png" alt="profile"/>
                      </div>
                      <div class="txt_tit">몬스탁닉네임05</div>
                      <span class="badge_area">
                        <span class="badge type1">PRO</span>
                        <span class="badge type2">PL1</span>
                      </span>
                    </div>
                  </swiper-slide>
              </swiper>
            </div>
            <!-- E 추천 사용자 -->
            <!-- S 팔로워-->
          </div>
          <div class="tab_contents" v-if="tab1 == 'B'">
            <!-- S 팔로잉 -->
            <div>
              <m-input v-model="search" filled placeholder="닉네임 입력" type="search" class="round_type">
                <template v-slot:append>
                  <button class="ico_ip_search" />
                </template>
              </m-input>
            </div>
            <div class="between">
              <span>총 00명</span>
              <div class="radio_wrap">
                  <m-radio v-model="rad1" val="A" label="최신순"/>
                  <m-radio v-model="rad1" val="B" label="오래된순"/>
              </div>
            </div>
            <ul class="follow_info_wrap">
              <li>
                <div class="my_profile">
                  <div class="img_area">
                    <img src="~assets/profile_img1.png" alt="profile"/>
                  </div>
                  <div class="tit_area">
                    <span class="txt_tit">몬스탁닉넴열글자까지</span>
                    <span class="badge_area">
                      <span class="badge type1">PRO</span>
                      <span class="badge type2">PL1</span>
                    </span>
                  </div>
                </div>
                <div class="follow_btn_wrap">
                    <button class="ico_user_ck" color="secondary" label="Auto-Close Menu">
                      user선택
                      <q-menu auto-close :offset="[30, 10]">
                        <q-list style="min-width: 80px">
                          <q-item clickable>
                            <q-item-section>차단해제</q-item-section>
                          </q-item>
                          <q-separator />
                        </q-list>
                      </q-menu>
                    </button>
                    <button class="ico_menu" color="secondary" label="Auto-Close Menu">
                      menu
                      <q-menu auto-close :offset="[30, 10]">
                        <q-list style="min-width: 80px">
                          <q-item clickable>
                            <q-item-section>?</q-item-section>
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
                    <img src="~assets/profile_img2.png" alt="profile"/>
                  </div>
                  <div class="tit_area">
                    <span class="txt_tit">몬스탁닉넴열글자까지</span>
                    <span class="badge_area">
                      <span class="badge type1">PRO</span>
                      <span class="badge type2">PL1</span>
                    </span>
                  </div>
                </div>
                <div class="follow_btn_wrap">
                    <button class="ico_user_ck" color="secondary" label="Auto-Close Menu">
                      user선택
                      <q-menu auto-close :offset="[30, 10]">
                        <q-list style="min-width: 80px">
                          <q-item clickable>
                            <q-item-section>차단해제</q-item-section>
                          </q-item>
                          <q-separator />
                        </q-list>
                      </q-menu>
                    </button>
                    <button class="ico_menu" color="secondary" label="Auto-Close Menu">
                      menu
                      <q-menu auto-close :offset="[30, 10]">
                        <q-list style="min-width: 80px">
                          <q-item clickable>
                            <q-item-section>?</q-item-section>
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
                    <img src="~assets/profile_img3.png" alt="profile"/>
                  </div>
                  <div class="tit_area">
                    <span class="txt_tit">몬스탁닉넴열글자까지</span>
                    <span class="badge_area">
                      <span class="badge type1">PRO</span>
                      <span class="badge type2">PL1</span>
                    </span>
                  </div>
                </div>
                <div class="follow_btn_wrap">
                    <button class="ico_user_ck" color="secondary" label="Auto-Close Menu">
                      user선택
                      <q-menu auto-close :offset="[30, 10]">
                        <q-list style="min-width: 80px">
                          <q-item clickable>
                            <q-item-section>차단해제</q-item-section>
                          </q-item>
                          <q-separator />
                        </q-list>
                      </q-menu>
                    </button>
                    <button class="ico_menu" color="secondary" label="Auto-Close Menu">
                      menu
                      <q-menu auto-close :offset="[30, 10]">
                        <q-list style="min-width: 80px">
                          <q-item clickable>
                            <q-item-section>?</q-item-section>
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
                    <img src="~assets/profile_img4.png" alt="profile"/>
                  </div>
                  <div class="tit_area">
                    <span class="txt_tit">몬스탁닉넴열글자까지</span>
                    <span class="badge_area">
                      <span class="badge type1">PRO</span>
                      <span class="badge type2">PL1</span>
                    </span>
                  </div>
                </div>
                <div class="follow_btn_wrap">
                    <button class="ico_user_ck" color="secondary" label="Auto-Close Menu">
                      user선택
                      <q-menu auto-close :offset="[30, 10]">
                        <q-list style="min-width: 80px">
                          <q-item clickable>
                            <q-item-section>차단해제</q-item-section>
                          </q-item>
                          <q-separator />
                        </q-list>
                      </q-menu>
                    </button>
                    <button class="ico_menu" color="secondary" label="Auto-Close Menu">
                      menu
                      <q-menu auto-close :offset="[30, 10]">
                        <q-list style="min-width: 80px">
                          <q-item clickable>
                            <q-item-section>?</q-item-section>
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
                    <img src="~assets/profile_img4.png" alt="profile"/>
                  </div>
                  <div class="tit_area">
                    <span class="txt_tit">몬스탁닉넴열글자까지</span>
                    <span class="badge_area">
                      <span class="badge type1">PRO</span>
                      <span class="badge type2">PL1</span>
                    </span>
                  </div>
                </div>
                <div class="follow_btn_wrap">
                    <button class="ico_user_ck" color="secondary" label="Auto-Close Menu">
                      user선택
                      <q-menu auto-close :offset="[30, 10]">
                        <q-list style="min-width: 80px">
                          <q-item clickable>
                            <q-item-section>차단해제</q-item-section>
                          </q-item>
                          <q-separator />
                        </q-list>
                      </q-menu>
                    </button>
                    <button class="ico_menu" color="secondary" label="Auto-Close Menu">
                      menu
                      <q-menu auto-close :offset="[30, 10]">
                        <q-list style="min-width: 80px">
                          <q-item clickable>
                            <q-item-section>?</q-item-section>
                          </q-item>
                          <q-separator />
                        </q-list>
                      </q-menu>
                    </button>
                </div>
              </li>
            </ul>
            <!-- E 팔로잉 -->
          </div>
          <div class="tab_contents" v-if="tab1 == 'C'">
            <!-- S 차단 -->
            <!-- S 추천 사용자 -->
            <div>
              <m-input v-model="search" filled placeholder="닉네임 입력" type="search" class="round_type">
                <template v-slot:append>
                  <button class="ico_ip_search" />
                </template>
              </m-input>
            </div>
            <div class="between">
              <span>총 00명</span>
              <div class="radio_wrap">
                  <m-radio v-model="rad1" val="A" label="최신순"/>
                  <m-radio v-model="rad1" val="B" label="오래된순"/>
              </div>
            </div>
            <ul class="follow_info_wrap">
              <li>
                <div class="my_profile">
                  <div class="img_area">
                    <img src="~assets/profile_img1.png" alt="profile"/>
                  </div>
                  <div class="tit_area">
                    <span class="txt_tit">몬스탁닉넴열글자까지</span>
                    <span class="badge_area">
                      <span class="badge type1">PRO</span>
                      <span class="badge type2">PL1</span>
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
                    <button class="ico_menu" color="secondary" label="Auto-Close Menu">
                      menu
                      <q-menu auto-close :offset="[30, 10]">
                        <q-list style="min-width: 80px">
                          <q-item clickable>
                            <q-item-section>?</q-item-section>
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
                    <img src="~assets/profile_img2.png" alt="profile"/>
                  </div>
                  <div class="tit_area">
                    <span class="txt_tit">몬스탁닉넴열글자까지</span>
                    <span class="badge_area">
                      <span class="badge type1">PRO</span>
                      <span class="badge type2">PL1</span>
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
                    <button class="ico_menu" color="secondary" label="Auto-Close Menu">
                      menu
                      <q-menu auto-close :offset="[30, 10]">
                        <q-list style="min-width: 80px">
                          <q-item clickable>
                            <q-item-section>?</q-item-section>
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
                    <img src="~assets/profile_img3.png" alt="profile"/>
                  </div>
                  <div class="tit_area">
                    <span class="txt_tit">몬스탁닉넴열글자까지</span>
                    <span class="badge_area">
                      <span class="badge type1">PRO</span>
                      <span class="badge type2">PL1</span>
                    </span>
                  </div>
                </div>
                <div class="follow_btn_wrap">
                    <button class="ico_user_ck" color="secondary" label="Auto-Close Menu">
                      user선택
                      <q-menu auto-close :offset="[30, 10]">
                        <q-list style="min-width: 80px">
                          <q-item clickable>
                            <q-item-section>차단해제</q-item-section>
                          </q-item>
                          <q-separator />
                        </q-list>
                      </q-menu>
                    </button>
                    <button class="ico_menu" color="secondary" label="Auto-Close Menu">
                      menu
                      <q-menu auto-close :offset="[30, 10]">
                        <q-list style="min-width: 80px">
                          <q-item clickable>
                            <q-item-section>?</q-item-section>
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
                    <img src="~assets/profile_img4.png" alt="profile"/>
                  </div>
                  <div class="tit_area">
                    <span class="txt_tit">몬스탁닉넴열글자까지</span>
                    <span class="badge_area">
                      <span class="badge type1">PRO</span>
                      <span class="badge type2">PL1</span>
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
                    <button class="ico_menu" color="secondary" label="Auto-Close Menu">
                      menu
                      <q-menu auto-close :offset="[30, 10]">
                        <q-list style="min-width: 80px">
                          <q-item clickable>
                            <q-item-section>?</q-item-section>
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
                    <img src="~assets/profile_img4.png" alt="profile"/>
                  </div>
                  <div class="tit_area">
                    <span class="txt_tit">몬스탁닉넴열글자까지</span>
                    <span class="badge_area">
                      <span class="badge type1">PRO</span>
                      <span class="badge type2">PL1</span>
                    </span>
                  </div>
                </div>
                <div class="follow_btn_wrap">
                    <button class="ico_user_ck" color="secondary" label="Auto-Close Menu">
                      user선택
                      <q-menu auto-close :offset="[30, 10]">
                        <q-list style="min-width: 80px">
                          <q-item clickable>
                            <q-item-section>차단해제</q-item-section>
                          </q-item>
                          <q-separator />
                        </q-list>
                      </q-menu>
                    </button>
                    <button class="ico_menu" color="secondary" label="Auto-Close Menu">
                      menu
                      <q-menu auto-close :offset="[30, 10]">
                        <q-list style="min-width: 80px">
                          <q-item clickable>
                            <q-item-section>?</q-item-section>
                          </q-item>
                          <q-separator />
                        </q-list>
                      </q-menu>
                    </button>
                </div>
              </li>
            </ul>
            <!-- E 차단 -->
          </div>
         
        </div>
      </q-form>
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
                {label:'팔로워', value:'A', icon:''},
                {label:'팔로잉', value:'B', icon:''},
                {label:'차단', value:'C', icon:''}
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
