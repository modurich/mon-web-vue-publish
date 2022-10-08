<template>
    <div class="centerarea_box1">
      <q-form>
        <div class="con_box">
          <h2 class="line_type">프로필</h2>
          <m-tabs class="line_type large" v-model="tab1" :items="tabs"/>
          <div class="tab_contents" v-if="tab1 == 'A'">
            <!-- S 마이페이지-->
            <div class="mypage_info_wrap">
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
              <ul class="follow_wrap">
                  <li>
                      <span class="txt01">콘텐츠</span>
                      <span class="txt02">215</span>
                  </li>
                  <li>
                      <span class="txt01">팔로워</span>
                      <span class="txt02">58</span>
                  </li>
                  <li>
                      <span class="txt01">팔로잉</span>
                      <span class="txt02">361</span>
                  </li>
              </ul>
            </div>
            <!-- S PRO정보 -->
            <div class="pro_info_wrap">
              <div class="tit_area">
                <span class="tit_txt">PRO 정보</span>
                <span class="ico_info">PRO란?</span>
              </div>
              <ul class="pro_list">
                <li>
                  <span class="txt_tit">프로승급일</span>
                  <span class="txt_date">2022.08.25</span>
                </li>
                <li>
                  <span class="txt_tit">재신임예정일</span>
                  <span class="txt_date">2022.08.25</span>
                </li>
              </ul>
              <!-- <div class="btn_wrap">
                <m-button-3 color="primary" class="full">PRO 제안 발의</m-button-3>
              </div> -->
            </div>
            <!-- E PRO정보 -->
            <p class="sub_info">
              안녕하세요 경제와 금융 분야를 공부하다 보니, 재테크에 관한 지식이 많아졌습니다. 그래서 개인적으로는 돈을 모으는 것보다 잘 운용하는 것이 더 중요하다는 생각을 하게 되었습니다. 실제로 대학에 재학하던 당시에...
            </p>
            <div class="link_info">
              <p class="tit">
                <span class="txt01">링크2</span>
                <button class="ico_trash">삭제</button>
              </p>
              <p class="link_txt"><a href="#">https://docs.google.com/presentation/d/1XSMUivsrJcxYabsD7D7ZLqHiDLfwaF2KdFUpxtZmlj4/edit#slide=id.g15918d493b0_0_49</a></p>
            </div>
            <div class="btn_wrap l_row_l">
              <m-button-3 color="primary" class="full">추천코드</m-button-3>
              <m-button-3 color="primary" class="full">내 정보 수정</m-button-3>
              <m-button-3 lined color="primary" class="ico_add">추가</m-button-3>
            </div>
            <!-- S 추천 사용자 -->
            <h3 class="between">
              <span>추천 사용자</span>
              <a href="#" class="link_view">더보기</a>
            </h3>
            <div>
              <swiper class="swiper" :options="swiperOption">
                  <swiper-slide>
                    <div class="recommend_list">
                      <div class="img_area">
                        <img src="~assets/profile_img1.png" alt="profile"/>
                      </div>
                      <div class="txt_tit">몬스탁닉네임01</div>
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
                  <div class="txt_tit">몬스탁닉네임01</div>
                  <span class="badge_area">
                    <span class="badge type1">PRO</span>
                    <span class="badge type2">PL1</span>
                  </span>
                </div>
                  </swiper-slide>
                  <swiper-slide>Slide 3</swiper-slide>
                  <swiper-slide>Slide 4</swiper-slide>
                  <swiper-slide>Slide 5</swiper-slide>
                  <swiper-slide>Slide 6</swiper-slide>
                  <swiper-slide>Slide 7</swiper-slide>
                  <swiper-slide>Slide 8</swiper-slide>
                  <swiper-slide>Slide 9</swiper-slide>
                  <swiper-slide>Slide 10</swiper-slide>
                  <!--
                  <div class="swiper-pagination" slot="pagination"></div>
                  <div class="swiper-button-prev" slot="button-prev"></div>
                  <div class="swiper-button-next" slot="button-next"></div>
                  -->
              </swiper>
            </div>
            <!-- E 추천 사용자 -->
            <!-- E 마이페이지-->
          </div>
          <div class="tab_contents" v-if="tab1 == 'B'">
            <!-- S 내지갑 -->
            <ul class="my_list_wrap">
              <li>
                <div class="txt_area">
                  <span class="txt01">이름</span>
                  <span class="txt02">홍길동</span>
                </div>
                <div class="btn_area"><button class="btn_view">비밀번호 변경</button></div>
              </li>
              <li>
                <div class="txt_area">
                  <span class="txt01">휴대폰 번호</span>
                  <span class="txt02">+82 010-1234-5678</span>
                </div>
                <div class="btn_area"><button class="btn_view" @click="dailog1 = true">휴대폰 번호 변경</button></div>
                <!-- S 휴대폰 번호 변경 -->
                <m-dialog v-model="dailog1">
                  <div class="dailog_wrap">
                    <div class="dailog_top">
                        <q-btn icon="close" flat  v-close-popup />
                    </div>
                    <q-card-section class="dg_con">
                        <p class="dialog_tit l_row_l">휴대폰 인증</p>
                        <div class="l_row"><m-input filled v-model="text1" label="생년월일 8자리" class="round_type"/></div>
                        <div class="l_row"><m-select v-model="select1" :options="options" /></div>
                        <div class="l_row"><m-input filled v-model="text1" label="휴대폰 번호" class="round_type"/></div>
                        <!-- <div class="l_row_s"><m-input filled v-model="text1" label="인증번호" class="round_type"/></div> -->
                        <div class="btn_wrap l_row_l"><m-button-3 color="primary" class="full" disabled>인증번호 재발송 (60s)</m-button-3></div>
                        <div class="btn_wrap l_row_l"><m-button-3 color="primary" size="large" class="full">확인</m-button-3></div>
                    </q-card-section>
                  </div>
                </m-dialog>
                <!-- E 휴대폰 번호 변경 -->
              </li>
              <li>
                <div class="txt_area">
                  <span class="txt01">이메일</span>
                  <span class="txt02">example@monstock.com</span>
                </div>
                <div class="btn_area"><button class="btn_view" @click="dailog2 = true">이메일 등록 / 변경</button></div>
                <!-- S 이메일 인증 -->
                <m-dialog v-model="dailog2">
                  <div class="dailog_wrap">
                      <div class="dailog_top">
                          <q-btn icon="close" flat  v-close-popup />
                      </div>
                      <q-card-section class="dailog_contents">
                          <p class="dialog_tit l_row_l">이메일 인증</p>
                          <div class="l_row"><m-input filled v-model="text1" label="생년월일 8자리" class="round_type"/></div>
                          <div class="l_row"><m-input filled v-model="text1" label="이메일 주소" class="round_type"/></div>
                          <!-- <div class="l_row_s"><m-input filled v-model="text1" label="인증번호" class="round_type"/></div> -->
                          <div class="btn_wrap l_row_l"><m-button-3 color="primary" class="full" disabled>인증번호 재발송</m-button-3></div>
                          <div class="btn_wrap l_row_l"><m-button-3 color="primary" size="large" class="full">확인</m-button-3></div>
                      </q-card-section>
                    </div>
                </m-dialog>
                <!-- E 이메일 인증 -->
              </li>
            </ul>
            <p class="secondary">
              회원가입, 약관정책 변경 등 비마케팅성 정보는 수신동의 여부와 관계없이 발송됩니다.
            </p>
            <div class="check_wrap">
              <div class="check_area"><m-checkbox size="md" v-model="check1" label="마케팅 정보 수신 동의 (선택)"/></div>
            </div>
            <p class="sub_info">
              회원가입, 약관정책 변경 등 비마케팅성 정보는 수신동의 여부와 관계없이 발송됩니다.
            </p>
            <!-- E 내지갑 -->
          </div>
         
        </div>
      </q-form>
    </div>
</template>

<script>
import { ref } from 'vue';
import MDialogBlank from 'src/components/MDialogBlank.vue';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  components: { MDialogBlank ,Swiper, SwiperSlide },
    name: 'A_10000_P',
    data() {
        return {
            text1:ref('호빵맨'),
            text2:ref(''),
            text3:ref(''),
            check1:ref(true),
            check2:ref(false),
            check3:ref(false),
            check4:ref(false),
            check5:ref(false),
            check6:ref(false),
            select1:ref(null),
            tab1:ref('A'),
            tabs:[
                {label:'마이페이지', value:'A', icon:'mail'},
                {label:'내지갑', value:'B', icon:'photo'}
            ],
            options:[
                'South Korea (+82)', '선택1', '선택2', '선택3', '선택4'
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
            dailog1:ref(false),
            dailog2: ref(false),
            swiperOption: {
                slidesPerView: 5,
                spaceBetween: 50,
                breakpoints: {
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    320: {
                        slidesPerView: 2.2,
                        spaceBetween: 10
                    }
                }
            }
        }
    },
    methods: {
      polcyPopup(type) {
        this.polcyType = type;
        this.dailog1 = true;
      }
  }
};
</script>
<style scoped>

</style>
