<template>
    <div class="centerarea_box01">
      <div class="con_box">
        <div class="ico_top">
          <i class="ico_error"></i>
        </div>
        <h2 class="s_mg mgb16">비밀번호 찾기</h2>
        <p class="center txt_dk">대한민국 내국인 가입자라면</p>
        <div class="btn_wrap l_row_s">
          <m-button-3 size="large" color="primary" class="full">내국인 본인인증으로 찾기</m-button-3>
        </div>
         <p class="center txt_dk mgt16">이메일 2차 인증을 설정했다면</p>
        <div class="btn_wrap l_row_s">
          <m-button-3 size="large" color="primary" class="full">이메일 인증으로 찾기</m-button-3>
        </div>
         <p class="center txt_dk mgt16">해외 / 외국인 가입자라면</p>
        <div class="btn_wrap l_row_s">
          <m-button-3 size="large" color="primary" class="full">해외 휴대폰 번호 인증으로 찾기</m-button-3>
        </div>
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
