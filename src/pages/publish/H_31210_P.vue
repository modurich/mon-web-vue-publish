<template>
    <div class="centerarea_box1">
        <div class="con_box">
          <h2 class="line_type">삼성전자</h2>
          <div class="box_contents pdt16"> 
            <h3 class="between">
              <span class="font16">종료</span>
              <span class="font12 txt_gray medium flex"><span class="badge3 small primary mgr4 disabled">단기</span> 22..9.13 ~ 22.09.19</span>
            </h3>
            <div class="divider" />
            <div class="btn_wrap mgt16">
                <m-button-3 size="large" color="primary" class="full">차트보기</m-button-3>
            </div>
            <div class="divider" />
            <h3 class="between">
              <span class="font16">분석</span>
            </h3>
            <div class="mga32">
              루시드와 엘지 엔솔 관련 종목으로 부각받았던 이력이있는 나라엠엔디입니다. 최근 삼기를 비롯한 자동차 부품 관련 종목들의 흐름이 매우 강력합니다.<br/>
              기계 관련 종목이기도 합니다.<br/>
              <span class="primary">$삼성전자</span> 실적은 미미하지만 흑자상태를 보이고 있는 종목으로 최근 하락추세를 걷어 올리는 힘이 나오고 있습니다.
              다만, 조정과 매물소화 과정이 필요합니다. 단기 급등이후 숨고르기 국면으로 예상합니다.
            </div>
            <p class="tag_area">
              <span class="primary">＄관련종목</span>
              <span class="primary">#금리인상</span>
              <span class="primary">#친환경</span>
            </p>
            <p class="tag_area">
              <span>#금리인상</span>
              <span>#친환경</span>
              <span>#로봇관련주</span>
              <span>#최대스무자최대스무자최대스무자최대스무자</span>
            </p>
            <div class="btn_wrap mgt32">
                <m-button-3 size="large" color="darkYellow" class="full">BEST 제안 발의</m-button-3>
            </div>
            <div class="btn_wrap mgt32">
                <m-button-3 size="large" color="primary" class="full">
                  <i class="ico_vote big mgr16"/>보팅하기
                </m-button-3>
            </div>
            <div class="btn_area_center">
              <button class="active">
                <i class="btn_bookmark"/>
                <span class="txt_area">북마크</span>
              </button>
              <button class="active">
                <i class="btn_thumbsUp"/>
                <span class="txt_area">좋아요</span>
              </button>
              <button>
                <i class="btn_share"/>
                <span class="txt_area">공유</span>
              </button>
            </div>
            <div class="divider" />
            <h3 class="between">
              <span class="font16">보팅</span>
              <span class="font12 txt_gray medium"><i class="ico_time"/>2일 23:53:06</span>
            </h3>
            <div class="divider" />
            <h3 class="between">
              <span class="font16">콘텐츠 평점</span>
              <span class="font12 txt_gray medium">참여 123명</span>
            </h3>
            <div class="divider" />
            <h3 class="between">
              <span class="font16">댓글<span class="primary mgl4">23</span></span>
              <span class="font12 txt_gray medium">최근 작성순</span>
            </h3>
            <div class="contents_list_wrap">
              <div class="mgb16">
                <span class="font16 txt_dk">콘텐츠 평점</span> 
                <span class="font12 mgl8">평점은 작성 후 수정/삭제할 수 없습니다.</span>
              </div>
              <div class="list_area">
                <div class="txt_area">유용한가요?</div>
                <div class="star">
                  <q-rating
                    v-model="ratingModel"
                    size="21px"
                    color="primary"
                    icon="star_border"
                    icon-selected="star"
                  />
                  </div>
              </div>
              <div class="list_area">
                <div class="txt_area">논리적인가요?</div>
                <div class="star">
                  <q-rating
                    v-model="ratingModel"
                    size="21px"
                    color="primary"
                    icon="star_border"
                    icon-selected="star"
                  />
                  </div>
              </div>
              <div class="list_area">
                <div class="txt_area">정보가 확실한가요?</div>
                <div class="star">
                  <q-rating
                    v-model="ratingModel"
                    size="21px"
                    color="primary"
                    icon="star_border"
                    icon-selected="star"
                  />
                  </div>
              </div>
              <div class="list_area">
                <div class="txt_area">새로운 시각인가요?</div>
                <div class="star">
                  <q-rating
                    v-model="ratingModel"
                    size="21px"
                    color="primary"
                    icon="star_border"
                    icon-selected="star"
                  />
                  </div>
              </div>
              <div class="list_area">
                <div class="txt_area">읽기 편했나요?</div>
                <div class="star">
                  <q-rating
                    v-model="ratingModel"
                    size="21px"
                    color="primary"
                    icon="star_border"
                    icon-selected="star"
                  />
                  </div>
              </div>
            </div>
            <div class="mgt16">
              <m-textarea :maxlength="1000" :showError="false" :minHeight="textarea1.minHeight"
              :counter="textarea1.counter" :value="textarea1.value" :bottomMessage="textarea1.bottomMessage"
              :height="50" placeholder="저작권 등 다른 사람의 권리를 침해하거나 명예를 훼손하는 게시글은 이용약관과 관련 법률에 의해 제재를 받을 수 있습니다."/>
            </div>
            <div class="btn_wrap mgt16">
                <m-button-3 size="large" color="primary" class="full">등록</m-button-3>
            </div>
          
            <div class="mgt32 mgb16">최근 작성일 순</div>
            <!-- <div class="no_data_wrap">
              <div class="ico_top">
                <i class="ico_error"></i>
              </div>
              <div class="com_message">
                아직 작성된 토론글이 없습니다
              </div>
            </div> -->
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
            </ul>
            <div class="btn_wrap">
              <m-button-3 size="large" class="font16 full" color="textPrimary">더보기</m-button-3>
            </div>
            <div class="divider" />
            <div class="btn_wrap mgt16">
                <m-button-3 lined size="large" color="lightGrey" class="full">전체 인사이트 보기</m-button-3>
            </div>
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
import MChipList from 'src/components/MChipList.vue';
import MChip from 'src/components/MChip.vue';



export default {
  components: { MDialogBlank, Swiper, SwiperSlide, VClamp, MChipList, MChip },
    name: 'H_33200_T',
    
    data() {
        return {
            ratingModel: ref(0),
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
