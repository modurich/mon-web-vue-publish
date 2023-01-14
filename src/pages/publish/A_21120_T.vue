<template>
    <div class="centerarea_box1">
      <q-form>
        <div class="con_box">
          <h2 class="line_type">내 정보 수정</h2>
          <m-tabs class="line_type large sticky_tab1" v-model="tab1" :items="tabs"/>
          <div class="tab_contents" v-if="tab1 == 'A'">
          <!-- S 프로필 수정-->
          <h3 class="mgt16">프로필 사진</h3>
          <p class="sub_info l_row_s mgt8">줌인하여 이미지를 편집하실 수 있습니다.</p>
          <div class="profile_wrap l_row_s">
            <img src="~assets/profile_img1.png" alt="profile"/>
          </div>
          <div class="btn_wrap l_row_l">
            <m-button-3 size="large" lined color="primary" class="full">취소</m-button-3>
            <m-button-3 size="large" color="primary" class="full">저장</m-button-3>
          </div>
          <h3>닉네임</h3>
          <p class="sub_info mgt8">
            <span class="txt_red">임시닉네임 입니다. 1회에 한해 변경 가능합니다.</span><br/>
            공백없이 한글, 영문, 숫자 3-10자로 입력해주세요.
          </p>
          <div class="l_row_s"><m-input filled v-model="text1"  class="round_type"/></div>
          <div class="btn_wrap l_row_l"><m-button-3 size="large" color="primary" class="full">저장</m-button-3></div>
          <h3>소개</h3>
          <div class="mgb16 mgt16">
          <m-textarea 
            :maxlength="100"
            :showError="false"
            :minHeight="textarea1.minHeight" 
            :counter="textarea1.counter" 
            :value="textarea1.value" 
            :bottomMessage="textarea1.bottomMessage"
            :height="50"
            placeholder="예시) 모두 승투하세요~!"
          />
          </div>
          <div class="btn_wrap l_row_l"><m-button-3 size="large" color="primary" class="full" disabled>저장</m-button-3></div>
          <h3 class="between">
            링크
            <span class="font14 txt_gray medium">최대 5개</span>
          </h3>
          <div class="link_info mgt16">
            <div>
              <p class="tit">
                <span class="txt01">링크1</span>
                <button class="ico_trash">삭제</button>
              </p>
              <p class="link_txt"><a href="#">https://www.naver.com/</a></p>
            </div>
            <div>
              <p class="tit">
                <span class="txt01">링크2</span>
                <button class="ico_trash">삭제</button>
              </p>
              <p class="link_txt"><a href="#">https://docs.google.com/presentation/d/1XSMUivsrJcxYabsD7D7ZLqHiDLfwaF2KdFUpxtZmlj4/edit#slide=id.g15918d493b0_0_49</a></p>
            </div>
            <div>
              <p class="tit">
                <span class="txt01">링크3</span>
                <button class="ico_trash">삭제</button>
              </p>
              <p class="link_txt"><a href="#">https://www.naver.com/</a></p>
            </div>
          </div>
          <div class="btn_wrap l_row_l"><m-button-3 size="large" color="primary" class="full">추가</m-button-3></div>

            <!-- E 프로필 수정-->
          </div>
          <div class="tab_contents" v-if="tab1 == 'B'">
            <div class="mgt16">
              <div>
                <p class="font16 txt_dk mgb8">이름</p>
                <p>홍길동</p>
              </div>
              <div class="mgt32">
                <p class="between mgb8">
                  <span class="font16 txt_dk">휴대폰 번호</span>
                  <a href="#" class="link_view">휴대폰 번호 변경</a>
                </p>
                <p>+82 &nbsp;&nbsp;&nbsp; 010-1234-5678</p>
              </div>
              <div class="mgt32">
                <p><m-checkbox size="md" v-model="check1" label="마케팅 정보 수신 동의 (선택)"/></p>
                회원가입, 약관정책 변경 등 비마케팅성 정보는 수신동의 여부와 관계없이 발송됩니다.
              </div>
              <div class="btn_wrap mgt32"><m-button-3 size="large" color="primary" class="full" disabled>저장</m-button-3></div>
            </div>
          </div>
          <div class="tab_contents" v-if="tab1 == 'C'">
            <div class="mgt16">
              <div class="between">
                <span class="font16 txt_dk">비밀번호</span>
                <a href="#" class="link_view">변경</a>
              </div>
              <div class="between mgt32">
                <span class="font16 txt_dk">이메일 2차 인증</span>
                <a href="#" class="link_view">등록 / 변경</a>
              </div>
              <p class="mgt16 font12 txt_red">등록된 이메일이 없습니다.</p>
              <p class="font12">이메일 주소를 등록하시면 로그인과 비밀번호 찾기를 이메일 인증으로 하실 수 있습니다.</p>
              <div class="between mgt32">
                <span>
                  <span class="font16 txt_dk">본인 인증 (KYC)</span>
                  <span class="badge3 gray mgl8">미인증</span>
                  <span class="badge3 dark_green mgl8">인증완료</span>
                </span>
                <a href="#" class="link_view">인증</a>
              </div>
              <div class="between mgt32">
                <span>
                  <span class="font16 txt_dk">PIN코드</span>
                  <span class="badge3 gray mgl8">미설정</span>
                  <span class="badge3 dark_green mgl8">설정완료</span>
                </span>
                <a href="#" class="link_view">설정 / 초기화</a>
              </div>
              <div class="between mgt32">
                <span>
                  <span class="font16 txt_dk">OTP</span>
                  <span class="badge3 gray mgl8">미설정</span>
                  <span class="badge3 dark_green mgl8">설정완료</span>
                </span>
                <a href="#" class="link_view">설정 / 변경</a>
              </div>
               <div class="between mgt32">
                <span class="font16 txt_dk">생체 인증 설정</span>
                 <m-toggle v-model="toggle1" />
              </div>
              <p class="mgt16 font12 txt_red">생체 인증은 앱 전용 기능으로 웹에서는 사용할 수 없습니다.</p>
            </div>
          </div>
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
            toggle1: ref(false),
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
                {label:'프로필 수정', value:'A', icon:''},
                {label:'계정정보 수정', value:'B', icon:''},
                {label:'보안/인증', value:'C', icon:''}
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
