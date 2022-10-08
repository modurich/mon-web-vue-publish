<template>
    <div class="centerarea_box">
      <q-form>
        <div class="con_box">
          <div class="ico_top">
            <i class="ico_success"></i>
          </div>
          <h2 class="s_mg">가입 완료</h2>
          <p class="l_row_l main_info">몬스탁 가입을 환영합니다!<br/>
          닉네임과 프로필 사진을 설정해주세요.</p>
          <h3>프로필 사진</h3>
          <p class="sub_info l_row_s">줌인하여 이미지를 편집하실 수 있습니다.</p>
          <div class="profile_wrap l_row_s">
            <img src="~assets/no_profile.png" alt="profile"/>
            <img src="~assets/profile_img1.png" alt="profile"/>
          </div>
          <div class="btn_wrap l_row_l"><m-button-3 color="primary" class="full">수정하기</m-button-3></div>
          <div class="btn_wrap l_row_l">
            <m-button-3 lined color="primary" class="full">취소</m-button-3>
            <m-button-3 color="primary" class="full">저장</m-button-3>
          </div>
          <h3>닉네임</h3>
          <p class="sub_info">
            <span class="txt_red">임시닉네임 입니다. 1회에 한해 변경 가능합니다.</span><br/>
            공백없이 한글, 영문, 숫자 3-10자로 입력해주세요.
          </p>
          <div class="l_row_s"><m-input filled v-model="text1"  class="round_type"/></div>
          <div class="btn_wrap l_row_l"><m-button-3 color="primary" class="full">저장하기</m-button-3></div>
          <h3>이메일</h3>
          <p class="sub_info">이메일 주소를 등록하시면 비밀번호 분실, 휴대폰 번호 변경 시에도 이메일을 통해 비밀번호를 찾으실 수 있습니다.</p>
          <div class="l_row"><m-input filled v-model="text2"  class="round_type"/></div>
          <div class="l_row_s"><m-input filled v-model="text3" class="round_type"/></div>
          <div class="btn_wrap l_row_s"><m-button-3 color="primary" class="full" disabled>인증번호발송(60s)</m-button-3></div>
          <div class="btn_wrap l_row"><m-button-3 size="large" color="primary" class="full">이메일 등록</m-button-3></div>
          <div class="btn_wrap center"><button class="btn_view">Skip</button></div>
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
