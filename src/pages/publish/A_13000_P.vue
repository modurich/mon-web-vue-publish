<template>
    <div class="centerarea_box01">
        <div class="con_box">
           <!-- S 가입뿔가 -->
          <div class="ico_top">
            <div class="monstock_logo"><img src="~assets/logo.svg" alt="monstock logo"/></div>
          </div>
          <h2 class="s_mg">회원 가입 안내</h2>
          <p class="l_row_l main_info">
           블록체인 기반 투자정보 커뮤니티 몬스탁입니다.<br/>
            비밀번호 걱정없이 간편하게 몬스탁에 가입하고<br/>
            다양한 혜택을 받아보세요.</p>
            <div class="btn_wrap"><m-button-3 size="large" color="primary" class="full">내국인 본인인증 가입</m-button-3></div>
            <div class="btn_wrap mgt16"><m-button-3 lined size="large" color="primary" class="full">해외 / 외국인 가입</m-button-3></div>
           <!-- E 가입불가 -->
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
