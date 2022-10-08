<template>
    <div class="centerarea_box">
      <q-form>
        <div class="con_box">
          <h2>비밀번호 변경</h2>
          <div class="l_row"><m-input label="현재 비밀번호 (영문, 숫자, 특수문자 필수 8~20자리)" filled v-model="text1" class="round_type"/></div>
          <div class="l_row"><m-input label="새 비밀번호 (영문, 숫자, 특수문자 필수 8~20자리)" filled v-model="text2"  class="round_type"/></div>
          <div class="l_row"><m-input label="새 비밀번호 확인" filled v-model="text3" class="round_type"/></div>
          <div class="btn_wrap l_row"><m-button-3 size="large" color="primary" class="full">변경</m-button-3></div>
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
            text1:ref(''),
            text2:ref(''),
            text3:ref(''),
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
