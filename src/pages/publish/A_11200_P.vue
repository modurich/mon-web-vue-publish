<template>
    <div class="centerarea_box01">
        <div class="con_box">
           <!-- S 가입뿔가 -->
          <div class="ico_top">
            <i class="ico_error"></i>
          </div>
          <h2 class="s_mg">가입불가</h2>
          <p class="l_row_l main_info">
           서비스 정책에 따라 회원가입이 불가합니다.<br/>
            자세한 사항은 <a href="#" class="txt_blue1 underline">채널톡</a>으로 문의하시기 바랍니다.</p>
            <div class="btn_wrap"><m-button-3 size="large" color="primary" class="full">서비스 둘러보기</m-button-3></div>
           <!-- E 가입불가 -->
            <!-- S 기 가입회원 안내 -->
          <div class="ico_top">
            <i class="ico_error"></i>
          </div>
          <h2 class="s_mg">기 가입회원 안내</h2>
          <p class="l_row_l main_info">
          이미 가입된 회원입니다.<br/>
          비밀번호를 모르시는 경우 비밀번호 찾기를 해주세요.</p>
            <div class="btn_wrap"><m-button-3 size="large" color="primary" class="full">비밀번호 찾기</m-button-3></div>
           <!-- E 기 가입회원 안내 -->
          <!-- S 임시 비밀 번호 발급-->
          <div class="ico_top">
            <i class="ico_error"></i>
          </div>
          <h2 class="s_mg">임시 비밀 번호 발급</h2>
          <p class="l_row_l main_info">
          임시 비밀 번호가 발급되었습니다.<br/>
          로그인 후 비밀번호를 변경해주세요.
            <div class="btn_wrap"><m-button-3 size="large" color="primary" class="full">로그인 하기</m-button-3></div>
           <!-- E 임시 비밀 번호 발급 -->
          <!-- S 휴면 해제 -->
          <div class="ico_top">
            <i class="ico_error"></i>
          </div>
          <h2 class="s_mg">휴면 해제</h2>
          <p class="l_row_l main_info">
            <span class="primary">닉네임</span>님 환영합니다.<br/>
            회원님의 계정은 1년 이상 로그인을 하지 않아 현재 휴면상태입니다.<br/>
            서비스 사용을 희망하시면 아래 휴면해제 버튼을 클릭해주세요.</p>
            <div class="btn_wrap"><m-button-3 size="large" color="primary" class="full">휴면 해제</m-button-3></div>
           <!-- E 휴면 해제 -->
            <!-- S 재가입 안내 -->
            <div class="ico_top">
            <i class="ico_error"></i>
          </div>
          <h2 class="s_mg">재가입 안내</h2>
          <p class="l_row_l main_info">
            어뷰징 방지를 위해 탈퇴 후 7일간은 재가입을 할 수 없습니다.<br/>
            탈퇴 7일 이후 다시 시도해주세요.</p>
          <div class="btn_wrap"><m-button-3 size="large" color="primary" class="full">서비스 둘러보기</m-button-3></div>
          <!-- E 재가입 안내 -->
          <!-- S 임시 비밀번호 발급 완료 -->
          <div class="ico_top">
            <i class="ico_success"></i>
          </div>
          <h2 class="s_mg">임시 비밀번호 발급 완료</h2>
          <p class="l_row_l main_info">
            임시 비밀번호가 발급되었습니다. <br/>
            임시 비밀번호를 확인하시고 비밀번호를 변경해주세요.</p>
          <div class="btn_wrap"><m-button-3 size="large" color="primary" class="full">비밀번호 변경</m-button-3></div>
          <!-- E 임시 비밀번호 발급 완료 -->
        </div>
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
            text1:ref('호빵맨'),
            text2:ref('monstock@monstock.com'),
            text3:ref('**********'),
            check1:ref(true),
            check2:ref(false),
            check3:ref(false),
            check4:ref(false),
            check5:ref(false),
            check6:ref(false),
            select1:ref(null),
            options:[
                'South Korea (+82)', '선택1', '선택2', '선택3', '선택4'
            ],
            dailog1:ref(false),
            polcyType:ref('01')
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
