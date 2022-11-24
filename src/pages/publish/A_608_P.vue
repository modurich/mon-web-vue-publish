<template>
  <div class="centerarea_box01">
    <q-form>
      <div class="con_box">
        <div style="padding:32px">
          <m-button-3 @click="dailog2 = true" lined color="primary">평점 상세</m-button-3>
        </div>
        <!-- S 평점 상세 -->
        <m-dialog v-model="dailog2">
          <div class="dailog_wrap">
            <div class="dailog_top">
              <q-btn icon="close" flat v-close-popup />
            </div>
            <q-card-section class="dailog_contents">
              <p class="dialog_tit l_row_l">평점 상세</p>
              <div class="top_wrap1">
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
              <div class="contents_list_wrap">
                <div class="list_area">
                  <span class="ico_info_bk">적시성</span>
                  <div class="star">
                    <q-rating
                      v-model="ratingModel"
                      size="25px"
                      color="primary"
                      icon="star_border"
                      icon-selected="star"
                    />
                    </div>
                </div>
                <div class="list_area">
                  <span class="ico_info_bk">논리성</span>
                  <div class="star">
                    <q-rating
                      v-model="ratingMode2"
                      size="25px"
                      color="primary"
                      icon="star_border"
                      icon-selected="star"
                    />
                    </div>
                </div>
                <div class="list_area">
                  <span class="ico_info_bk">정확성</span>
                  <div class="star">
                    <q-rating
                      v-model="ratingMode3"
                      size="25px"
                      color="primary"
                      icon="star_border"
                      icon-selected="star"
                    />
                    </div>
                </div>
                <div class="list_area">
                  <span class="ico_info_bk">독창성</span>
                  <div class="star">
                    <q-rating
                      v-model="ratingMode4"
                      size="25px"
                      color="primary"
                      icon="star_border"
                      icon-selected="star"
                    />
                    </div>
                </div>
                <div class="list_area">
                  <span class="ico_info_bk">가독성</span>
                  <div class="star">
                    <q-rating
                      v-model="ratingMode5"
                      size="25px"
                      color="primary"
                      icon="star_border"
                      icon-selected="star"
                    />
                    </div>
                </div>
              </div>
              <p class="mgt16 font12">2022.10.26 10:30</p>
            </q-card-section>
          </div>
        </m-dialog>
        <!-- E 평점 상세 -->
      </div>
    </q-form>
  </div>
</template>

<script>
import { ref } from 'vue';
import MDialogBlank from 'src/components/MDialogBlank.vue';

export default {
  components: { MDialogBlank },
  name: 'A_10000_P',
  data() {
    return {
      dailog2: ref(false),
      ratingModel: ref(3),
      ratingMode2: ref(0),
      ratingMode3: ref(0),
      ratingMode4: ref(0),
      ratingMode5: ref(0),
    }
  },
  methods: {
  }
};
</script>
