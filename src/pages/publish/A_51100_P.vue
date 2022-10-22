<template>
    <div class="centerarea_box1">
        <div class="con_box">
          <h2 class="line_type">
            검색
          </h2>
          <div class="box_contents">  
            <div class="search_input l_row_s">
              <m-input filled v-model="text1" class="round_type" placeholder="검색어를 입력해 주세요">
                <template v-slot:prepend>
                  <q-icon class="ico_search" />
                </template>
              </m-input>
              <m-button-3 color="primary">검색</m-button-3>
            </div>
            <!-- <q-tabs
              v-model="tab"
              inline-label
              outside-arrows
              mobile-arrows
              class="bg-primary text-white shadow-2"
            >
              <q-tab name="mails" icon="mail" label="Mails" />
              <q-tab name="alarms" icon="alarm" label="Alarms" />
              <q-tab name="movies" icon="movie" label="Movies" />
              <q-tab name="photos" icon="photo" label="Photos" />
              <q-tab name="videos" icon="slow_motion_video" label="Videos" />
              <q-tab name="addressbook" icon="people" label="Address Book" />
            </q-tabs> -->
            <m-tabs class="line_type large mg0" v-model="tab1" :items="tabs" />
            <div v-if="tab1 == 'A'">
              <!-- S 종목 -->
              <ul class="product_list">
                <li>
                  <div class="prd_img">
                    <div class="img_area">
                      <img src="~assets/prd_logo.png" alt="profile"/>
                    </div>
                    <div class="tit_area">
                      <span class="txt01">삼성전자우</span>
                      <span class="txt02">
                        코스피 005930
                      </span>
                    </div>
                  </div>
                  <div class="ico_area">
                    <q-checkbox
                      v-model="val"
                      size="24"
                      checked-icon="favorite"
                      unchecked-icon="favorite_border"
                      indeterminate-icon="help"
                    />
                  </div>
                </li>
                <li>
                  <div class="prd_img">
                    <div class="img_area">
                      <img src="~assets/prd_logo.png" alt="profile"/>
                    </div>
                    <div class="tit_area">
                      <span class="txt01">삼성전자우</span>
                      <span class="txt02">
                        코스피 005930
                      </span>
                    </div>
                  </div>
                  <div class="ico_area">
                    <q-checkbox
                      v-model="val"
                      size="24"
                      checked-icon="favorite"
                      unchecked-icon="favorite_border"
                      indeterminate-icon="help"
                    />
                  </div>
                </li>
                <li>
                  <div class="prd_img">
                    <div class="img_area">
                      <img src="~assets/prd_logo.png" alt="profile"/>
                    </div>
                    <div class="tit_area">
                      <span class="txt01">삼성전자우</span>
                      <span class="txt02">
                        코스피 005930
                      </span>
                    </div>
                  </div>
                  <div class="ico_area">
                    <q-checkbox
                      v-model="val"
                      size="24"
                      checked-icon="favorite"
                      unchecked-icon="favorite_border"
                      indeterminate-icon="help"
                    />
                  </div>
                </li>
              </ul>
              <div class="btn_wrap l_row_l">
                <m-button-3 lined color="primary" class="full">모두보기</m-button-3>
              </div>
              <!-- E 종목 -->
              <div class="divider1 small"/>
              <!-- S 테마 -->
              <h3>
                테마
              </h3>
               <ul class="thema_list">
                <li>
                  <div class="tit_area">
                      <span class="txt01">메모리반도체</span>
                      <span class="txt02">
                        반도체
                      </span>
                    </div>
                  <div class="ico_area">
                    <span class="tag_red">-0.81%</span>
                  </div>
                </li>
                <li>
                  <div class="prd_img">
                    <div class="tit_area">
                      <span class="txt01">메모리반도체</span>
                      <span class="txt02">
                        반도체
                      </span>
                    </div>
                  </div>
                  <div class="ico_area">
                    <span class="tag_blue">+1.24%</span>
                  </div>
                </li>
                <li>
                  <div class="tit_area">
                      <span class="txt01">휴대폰</span>
                      <span class="txt02">
                        전자기기
                      </span>
                    </div>
                  <div class="ico_area">
                    <span class="tag_red">-0.81%</span>
                  </div>
                </li>
              </ul>
              <div class="btn_wrap l_row_l">
                <m-button-3 lined color="primary" class="full">모두보기</m-button-3>
              </div>
              <!-- E 테마 -->
              <div class="divider1 small"/>
              <h3>
                인사이트 / BLASH
              </h3>
              <div class="btn_wrap l_row_l">
                <m-button-3 lined color="primary" class="full">모두보기</m-button-3>
              </div>
              <div class="divider1 small"/>
              <h3>
                플레이어
              </h3>
              <ul class="ranking_user_list type1">
                <li>
                  <div class="my_profile">
                    <div class="tit_wrap">
                      <div class="tit_area">
                        <div class="img_area">
                          <img src="~assets/profile_img1.png" alt="profile"/>
                        </div>
                        <span class="txt_tit">
                          몬스탁닉넴열글자까지
                          <span class="badge pro">PRO</span>
                          <span class="badge pl1">PL1</span>
                        </span>
                      </div>
                      <span class="btn_area">
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
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="my_profile">
                    <div class="tit_wrap">
                      <div class="tit_area">
                        <div class="img_area">
                          <img src="~assets/profile_img1.png" alt="profile"/>
                        </div>
                        <span class="txt_tit">
                          몬스탁닉넴열글자까지
                          <span class="badge pro">PRO</span>
                          <span class="badge pl1">PL1</span>
                        </span>
                      </div>
                      <span class="btn_area">
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
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="my_profile">
                    <div class="tit_wrap">
                      <div class="tit_area">
                        <div class="img_area">
                          <img src="~assets/profile_img1.png" alt="profile"/>
                        </div>
                        <span class="txt_tit">
                          몬스탁닉넴열글자까지
                          <span class="badge pro">PRO</span>
                          <span class="badge pl1">PL1</span>
                        </span>
                      </div>
                      <span class="btn_area">
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
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="btn_wrap l_row_l">
                <m-button-3 lined color="primary" class="full">모두보기</m-button-3>
              </div>
              <div class="divider1 small"/>
              <h3>
                태그
              </h3>
              <ul class="tag_list">
                <li>#삼성전자<span class="round_tag">3,266</span></li>
                <li>#삼성전자<span class="round_tag">3,266</span></li>
                <li>##삼성전자실적<span class="round_tag">3,266</span></li>
                <li>##삼성전자매출<span class="round_tag">3,266</span></li>
                <li>#삼성전자<span class="round_tag">3,266</span></li>
                <li>#삼성전자실적<span class="round_tag">3,266</span></li>
                <li>#삼성전자<span class="round_tag">3,266</span></li>
                <li>#삼성전자<span class="round_tag">3,266</span></li>
                <li>#최대스무자최대스무자최대스무자최대스무자<span class="round_tag">3,266</span></li>
              </ul>
              <div class="btn_wrap l_row_l">
                <m-button-3 lined color="primary" class="full">모두보기</m-button-3>
              </div>
            </div>
            <div v-if="tab1 == 'B'">
              <!-- S 종목 -->
              <ul class="product_list">
                <li>
                  <div class="prd_img">
                    <div class="img_area">
                      <img src="~assets/prd_logo.png" alt="profile"/>
                    </div>
                    <div class="tit_area">
                      <span class="txt01">삼성전자우</span>
                      <span class="txt02">
                        코스피 005930
                      </span>
                    </div>
                  </div>
                  <div class="ico_area">
                    <q-checkbox
                      v-model="val"
                      size="24"
                      checked-icon="favorite"
                      unchecked-icon="favorite_border"
                      indeterminate-icon="help"
                    />
                  </div>
                </li>
                <li>
                  <div class="prd_img">
                    <div class="img_area">
                      <img src="~assets/prd_logo.png" alt="profile"/>
                    </div>
                    <div class="tit_area">
                      <span class="txt01">삼성전자우</span>
                      <span class="txt02">
                        코스피 005930
                      </span>
                    </div>
                  </div>
                  <div class="ico_area">
                    <q-checkbox
                      v-model="val"
                      size="24"
                      checked-icon="favorite"
                      unchecked-icon="favorite_border"
                      indeterminate-icon="help"
                    />
                  </div>
                </li>
                <li>
                  <div class="prd_img">
                    <div class="img_area">
                      <img src="~assets/prd_logo.png" alt="profile"/>
                    </div>
                    <div class="tit_area">
                      <span class="txt01">삼성전자우</span>
                      <span class="txt02">
                        코스피 005930
                      </span>
                    </div>
                  </div>
                  <div class="ico_area">
                    <q-checkbox
                      v-model="val"
                      size="24"
                      checked-icon="favorite"
                      unchecked-icon="favorite_border"
                      indeterminate-icon="help"
                    />
                  </div>
                </li>
              </ul>
              <div class="btn_wrap l_row_l">
                <m-button-3 lined color="primary" class="full">모두보기</m-button-3>
              </div>
              <div class="divider1 small"/>
              <h3>
                추천종목
              </h3>
              <!-- E 종목 -->
            </div>
            <div v-if="tab1 == 'C'">
              contents2
            </div>
            <div v-if="tab1 == 'D'">
              contents2
            </div>
            <div v-if="tab1 == 'E'">
              <ul class="ranking_user_list type1">
                <li>
                  <div class="my_profile">
                    <div class="tit_wrap">
                      <div class="tit_area">
                        <div class="img_area">
                          <img src="~assets/profile_img1.png" alt="profile"/>
                        </div>
                        <span class="txt_tit">
                          몬스탁닉넴열글자까지
                          <span class="badge pro">PRO</span>
                          <span class="badge pl1">PL1</span>
                        </span>
                      </div>
                      <span class="btn_area">
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
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="my_profile">
                    <div class="tit_wrap">
                      <div class="tit_area">
                        <div class="img_area">
                          <img src="~assets/profile_img1.png" alt="profile"/>
                        </div>
                        <span class="txt_tit">
                          몬스탁닉넴열글자까지
                          <span class="badge pro">PRO</span>
                          <span class="badge pl1">PL1</span>
                        </span>
                      </div>
                      <span class="btn_area">
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
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="my_profile">
                    <div class="tit_wrap">
                      <div class="tit_area">
                        <div class="img_area">
                          <img src="~assets/profile_img1.png" alt="profile"/>
                        </div>
                        <span class="txt_tit">
                          몬스탁닉넴열글자까지
                          <span class="badge pro">PRO</span>
                          <span class="badge pl1">PL1</span>
                        </span>
                      </div>
                      <span class="btn_area">
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
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="divider1 small"/>
              <h3>
                추천 플레이어
              </h3>
              <ul class="ranking_user_list type1">
                <li>
                  <div class="my_profile">
                    <div class="tit_wrap">
                      <div class="tit_area">
                        <div class="img_area">
                          <img src="~assets/profile_img1.png" alt="profile"/>
                        </div>
                        <span class="txt_tit">
                          몬스탁닉넴열글자까지
                          <span class="badge pro">PRO</span>
                          <span class="badge pl1">PL1</span>
                        </span>
                      </div>
                      <span class="btn_area">
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
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="my_profile">
                    <div class="tit_wrap">
                      <div class="tit_area">
                        <div class="img_area">
                          <img src="~assets/profile_img1.png" alt="profile"/>
                        </div>
                        <span class="txt_tit">
                          몬스탁닉넴열글자까지
                          <span class="badge pro">PRO</span>
                          <span class="badge pl1">PL1</span>
                        </span>
                      </div>
                      <span class="btn_area">
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
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="my_profile">
                    <div class="tit_wrap">
                      <div class="tit_area">
                        <div class="img_area">
                          <img src="~assets/profile_img1.png" alt="profile"/>
                        </div>
                        <span class="txt_tit">
                          몬스탁닉넴열글자까지
                          <span class="badge pro">PRO</span>
                          <span class="badge pl1">PL1</span>
                        </span>
                      </div>
                      <span class="btn_area">
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
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div v-if="tab1 == 'F'">
              <ul class="tag_list mga32">
                <li>#삼성전자<span class="round_tag">3,266</span></li>
                <li>#삼성전자<span class="round_tag">3,266</span></li>
                <li>##삼성전자실적<span class="round_tag">3,266</span></li>
                <li>##삼성전자매출<span class="round_tag">3,266</span></li>
                <li>#삼성전자<span class="round_tag">3,266</span></li>
                <li>#삼성전자실적<span class="round_tag">3,266</span></li>
                <li>#삼성전자<span class="round_tag">3,266</span></li>
                <li>#삼성전자<span class="round_tag">3,266</span></li>
                <li>#최대스무자최대스무자최대스무자최대스무자<span class="round_tag">3,266</span></li>
              </ul>
              <div class="divider1 small"/>
              <h3>
                추천 태그
              </h3>
              <ul class="tag_list">
                <li>#삼성전자</li>
                <li>#삼성전자</li>
                <li>##삼성전자실적</li>
                <li>##삼성전자매출</li>
                <li>#삼성전자</li>
                <li>#삼성전자실적</li>
                <li>#삼성전자</li>
                <li>#삼성전자</li>
                <li>#최대스무자최대스무자최대스무자최대스무자</li>
              </ul>
            </div>
            
          </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
  data() {
        return {
          tab1: ref('A'),
          tabs: [
            { label: '전체', value: 'A', icon: '' },
            { label: '종목', value: 'B', icon: '' },
            { label: '테마', value: 'C', icon: '' },
            { label: '콘텐츠', value: 'D', icon: '' },
            { label: '플레이어', value: 'E', icon: '' },
            { label: '#태그', value: 'F', icon: '' },
          ],
          tab: ref('mails'),
          val: ref(true),
        }
    },
    methods: {
    }
};
</script>
<style scoped>

</style>

