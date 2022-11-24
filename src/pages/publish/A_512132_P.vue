<template>
  <div class="centerarea_box1">
      <div class="con_box">
        <h2 class="line_type between">
          <span>토론글 상세</span>
        </h2>
        <div class="box_contents"> 
          <div class="between mgb32">
            <span class="img_area_wrap">
              <img src="~assets/prd_logo.png" alt="profile" />
              <span class="txt01">삼성전자</span>
            </span>
            <span class="font18 txt_blue1">
              ₩ 2,403,000
            </span>
          </div>
          <div class="divider" />
          <p class="badge_list">
              <span class="font12">1분전</span>
              <span class="btn_area">
                <button class="ico_menu mgl8" color="secondary" label="Auto-Close Menu">
                    menu
                    <q-menu auto-close :offset="[30, 10]">
                      <q-list style="min-width: 80px">
                        <q-item clickable>
                          <q-item-section>신고</q-item-section>
                        </q-item>
                      </q-list>
                    </q-menu>
                  </button>
              </span>
            </p> 
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
            <div class="divider"/>
            <div class="list_box">
              <span class="img_area"><img src="~assets/test_img.png" alt=""/></span>
              <div class="txt_area">
                <div class="tit">오늘 미국장 움직일 이슈: 러시아 2월 침공설 언급한 백악관, 아마존 실적발표 명암, 미 고용 호조에 긴축 우려오늘 미국장 움직일 이슈: 러시아 2월 침공설 언급한 백악관, 아마존 실적발표 명암, 미 고용 호조에 긴축 우려</div>
                <div class="con">타이틀타이틀타이틀</div>
                <div class="link_txt"><a href="#">https://news.mt.co.kr/mtviewtviewtvimtviewtviewtvimtviewtviewtvimtviewtviewtvimtviewtviewimtviewtviewtvimtviewtviewtvimtviewtviewimtviewtviewtvimtviewtviewtvimtviewtviewimtviewtviewtvimtviewtviewtvimtviewtview</a></div>
              </div>
            </div>
            <div class="mga32">
              🔆 몬스탁 디자인 리뉴얼 등 향후 계획 안내지난 8월 25일 몬스탁 향후 일정에 대해 공지한 바 있습니다.공지 이후 계획이 일부 수정되고 조금 더 명확해진 부분이 있기에 결정된 사항 다시 공지드립니다.<br/>
            🔸디자인 리뉴얼 및 UI/UX 개선서비스 디자인을 전면 개편하고 UI/UX를 개선할 예정입니다. 첨부된 이미지는 리뉴얼 컨셉이니 참고해주십시오.<br/>
            🔸모드 통합 및 큐레이션 기능 강화주식/코인 모드로 분리되어 있는 구조를 통합할 예정입니다. 통계, 등급 등도 모두 통합되며 그에 따른 정책 변경이 있을 것입니다. 큐레이션 기능과 통합검색 등 신규 기능도 개발 예정입니다.<br/>
            🔸지원 지갑 추가메타마스크, 디센트 등 연결 가능한 지갑의 종류를 추가할 예정입니다.이상의 내용은 2022년 연내 개발 완료를 목표로 하고 있습니다. 단, 일정을 타이트하게 잡은만큼 약간의 딜레이는 있을 수 있다는 점 미리 양해 부탁드립니다.
            </div>
            <p class="tag_area">
              <span>#금리인상</span>
              <span>#친환경</span>
              <span>#로봇관련주</span>
              <span>#최대스무자최대스무자최대스무자최대스무자</span>
            </p>
            <!-- <div class="btn_wrap mgt32">
                <m-button-3 size="large" color="darkYellow" class="full">
                  <i class="ico_prize_w big mgr16"/> BEST 제안 발의
                </m-button-3>
            </div> -->
            <div class="btn_area_center">
              <button class="active">
                <i class="btn_thumbsUp"/>
                <span class="txt_area">좋아요</span>
              </button>
              <button>
                <i class="btn_share"/>
                <span class="txt_area">공유</span>
              </button>
            </div>
            <div class="divider"/>
            <h3 class="between">
              <span class="font16">댓글<span class="primary mgl4">23</span></span>
              <button class="font12 txt_gray medium">최근 작성순</button>
            </h3>
            <div class="mgt32">
              <m-textarea :maxlength="300" :showError="false" :minHeight="textarea1.minHeight"
              :counter="textarea1.counter" :value="textarea1.value" :bottomMessage="textarea1.bottomMessage"
              :height="50" 
              placeholder="- 음란성, 불법성, 허위사실, 욕설 등 정책에 위반되는 글은 금지합니다."/>
            </div>
            <div class="btn_wrap mgt16">
                <m-button-3 size="large" color="primary" class="full">댓글 등록</m-button-3>
            </div>
            
            <ul class="comment_list mgt32">
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
                      <button class="ico_f ico_thumbsUp">624</button>
                      <button class="ico_f ico_comment">7</button>
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
                        <button class="ico_f ico_thumbsUp active">624</button>
                        <button class="ico_f ico_comment">7</button>
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
                        <button class="ico_f ico_thumbsUp active">624</button>
                        <button class="ico_f ico_comment">7</button>
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
              <m-button-3 class="font16 full" color="textPrimary">더보기</m-button-3>
            </div>
            
        </div>
      </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import TagsInput from 'src/components/external/TagsInput.vue';
import Froala from 'src/components/external/Froala.vue';
export default {
    components: { Froala,TagsInput },
    name: 'Laside',
    data() {
        return {
          textarea1: {
              value: "",
              counter: true,
              minHeight: 100,
              showError: true,
              //bottomMessage: "바닥메시지"
            },
          content: '',
          check1:ref(true),
          check2:ref(true),
          check3:ref(true),
          check4:ref(true),
          check5:ref(true),
          slide: ref('1'),
          toggle1: ref(false),
        }
    },
    computed: {
    },
   
};
</script>
<style scoped>

</style>
