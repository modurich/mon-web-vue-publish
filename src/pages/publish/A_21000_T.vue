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
            <div class="sub_info">
              <v-clamp autoresize :max-lines="2">
                {{ snipContent }}
                <template #after="{ toggle, expanded, clamped }">
                  <button v-if="expanded || clamped" class="btn_view_list" @click="toggle">{{ clamped ? '더보기' : '닫기' }}</button>
                </template>
              </v-clamp>
            </div>
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
            <div class="divider"/>
            <!-- S 콘텐츠 관리 -->
            <h3 class="between">
              <span>콘텐츠 관리</span>
              <a href="#" class="link_view">구독현황</a>
            </h3>
            <!-- E 콘텐츠 관리 -->
            <div class="divider"/>
            <!-- S 통계 -->
        
            <div class="add_tab_tit">
              <h3>
                <span>통계</span>
              </h3>
              <m-tabs class="card_type small" v-model="tab2" :items="tabs1" />
            </div>
              <div v-if="tab2 == 'A'">
                <div class="radio_wrap right">
                    <m-radio v-model="rad1" val="A" label="전체"/>
                    <m-radio v-model="rad1" val="B" label="주식"/>
                    <m-radio v-model="rad1" val="C" label="코인"/>
                </div>
                <q-table
                  :data="tbRowData"
                  :columns="tbColInfo"
                  row-key="category"
                  no-data-label="데이터가 존재하지 않습니다."
                  hide-bottom
                >
                  <template v-slot:body="props">
                    <q-tr :props="props">
                      <q-td key="date" :props="props">
                        {{ props.row.date }}
                      </q-td>
                      <q-td key="category" :props="props">
                          {{ props.row.category }}
                      </q-td>
                      <q-td key="updown" :props="props">
                        <span class="txt_blue">{{ props.row.updown }}</span>
                      </q-td>
                      <q-td key="isSuccess" :props="props">
                          <span class="txt_red">{{ props.row.isSuccess }}</span>
                      </q-td>
                    </q-tr>
                  </template>
                </q-table>
                <m-button-3 class="font18 full" color="textPrimary">더보기</m-button-3>
              </div>
              <div v-if="tab2 == 'B'">
                  contents2
              </div>
            <!-- E 통계 -->
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
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import VClamp from '@boyuai/vue-clamp';

const tbColInfo = [
  { name: 'date',       align: 'center', label: '일자',       field: 'date'},
  { name: 'category',   align: 'center', label: '종목',       field: 'category'},
  { name: 'updown',     align: 'center', label: '상승/하락',  field: 'updown'},
  { name: 'isSuccess',  align: 'center', label: '예측결과',   field: 'isSuccess'}
];
const tbRowData = [
  { date: '22.09.14', category: '삼성전자',   updown: '상승 ▲', isSuccess: '성공' },
  { date: '22.09.14', category: 'SK하이닉스', updown: '하락 ▼', isSuccess: '성공' },
  { date: '22.09.14', category: '네이버',     updown: '상승 ▲', isSuccess: '성공' },
  { date: '22.09.14', category: '현대차',     updown: '상승 ▲', isSuccess: '실패' },
  { date: '22.09.14', category: '신풍제약',   updown: '하락 ▼', isSuccess: '성공' },
  { date: '22.09.14', category: '안랩',       updown: '상승 ▲', isSuccess: '실패' },
  { date: '22.09.14', category: '카카오',     updown: '상승 ▲', isSuccess: '성공' },
  { date: '22.09.14', category: 'KT&G',       updown: '하락 ▼', isSuccess: '성공' },
  { date: '22.09.14', category: '셀트리온',    updown: '상승 ▲', isSuccess: '실패' },
  { date: '22.09.14', category: '미래에셋증권', updown: '상승 ▲', isSuccess: '실패'}
];


export default {
  components: { MDialogBlank, Swiper, SwiperSlide, VClamp },
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
            tab2:ref('A'),
            rad1:ref('A'),
            tabs:[
                {label:'마이페이지', value:'A', icon:'mail'},
                {label:'내지갑', value:'B', icon:'photo'}
            ],
            tabs1:[
                {label:'인사이트', value:'A', icon:'mail'},
                {label:'BLASH', value:'B', icon:'photo'}
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
                        slidesPerView: 4,
                        spaceBetween: 30
                    },
                    650: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    },
                    520: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    320: {
                        slidesPerView: 2.2,
                        spaceBetween: 10
                    }
                }
            },
          tbColInfo,
          tbRowData,
          snipContent: ref(`안녕하세요 경제와 금융 분야를 공부하다 보니, 재테크에 관한 지식이 많아졌습니다. 그래서 개인적으로는 돈을 모으는 것보다 잘 운용하는 것이 더 중요하다는 생각을 하게 되었습니다. 
실제로 대학에 재학하던 당시에 크고 속에서 희망의 가슴이 바로 붙잡아 있는 별과 것이다. 얼마나 방황하였으며, 사랑의 청춘의 천지는 생생하며, 물방아 더운지라 아니다. 영락과 쓸쓸한 같이, 얼음이 청춘 타오르고 이것이다. 사랑의 곳으로 인생의
황금시대의 그들은 속에서 이것이다. 있는 긴지라 싹이 인생을 얼마나 것이다. 같이, 안고, 기쁘며, 보라. 청춘 생명을 공자는 싸인 사막이다. 우리의 뜨고, 하는 역사를 것이다. 피고 청춘의 이상은 못할 봄바람이다.
너의 원대하고, 자신과 인생에 위하여 원질이 풍부하게 되는 교향악이다. 밝은 그들을 그들의 아름답고 웅대한 꽃이 바이며, 길을 것이다.길을 우리의 위하여, 있는 그와 있으랴? 주며, 그들은 풍부하게 피가 끓는다.
바로 예수는 피가 쓸쓸하랴? 천지는 그러므로 못할 인생을 그들에게 긴지라 인간의 봄바람이다. 목숨이 피가 피부가 하는 밥을 그들은 이상, 교향악이다. 같은 그들의 이상 그들의 평화스러운 그들은 인류의 청춘은 ?
인생을 힘차게 가치를 싸인 이는 무엇을 미인을 쓸쓸하랴? 있는 하는 얼마나 두손을 뿐이다. 힘차게 놀이 이것은 듣기만 웅대한 설산에서 이것이야말로 이것이다. 사는가 얼음에 인류의 인간이 그들의 얼음이
쓸쓸하랴?기쁘며, 그것은 창공에 공자는 커다란 그들을 위하여 때문이다. 설산에서 살았으며, 열락의 우리 것이다. 청춘의 청춘의 방황하여도, 피고, 날카로우나 보이는 이상이 이는 힘있다. 이상의 목숨을 너의 위하여
위하여서, 청춘에서만 물방아 힘있다. 있는 튼튼하며, 꽃이 것이다. 실현에 그들의 그와 만천하의 인생을 크고 맺어, 있는가? 구하기 넣는 되려니와, 피고 소리다.이것은 그들은 사막이다. 청춘은 이상, 꽃이 불어
미묘한 부패뿐이다. 이상의 속잎나고, 청춘은 군영과 힘차게 이 장식하는 것이다. 주는 그들에게 따뜻한 천고에 커다란 인생의 봄바람이다.`),
        }
    },
    methods: {
      polcyPopup(type) {
        this.polcyType = type;
        this.dailog1 = true;
      },
  }
};
</script>
<style scoped>

</style>
