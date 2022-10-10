<template>
    <div class="centerarea_box01">
      <q-form>
        <div class="con_box">
          <div class="ico_top">
            <i class="ico_error"></i>
          </div>
          <h2 class="s_mg mgb16">비밀번호 찾기</h2>
          <div class="btn_wrap l_row_s"><m-button-3 size="large" color="primary" class="full">휴대폰 번호 인증</m-button-3></div>
          <div class="btn_wrap"><m-button-3 size="large" color="primary" class="full">이메일 인증</m-button-3></div>
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
