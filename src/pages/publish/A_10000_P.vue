<template>
    <div class="login_wrap centerarea_box">
      <q-form>
        <div class="login_area">
          <div class="monstock_logo l_row"><img src="~assets/logo.svg" alt="monstock logo"/></div>
          <div class="l_row"><m-select v-model="select1" :options="options" /></div>
          <div class="l_row"><m-input filled v-model="text1" label="휴대폰 번호 또는 이메일 주소" class="round_type"/></div>
          <div class="l_row"><m-input filled v-model="text1" label="비밀번호" class="round_type"/></div>
          <div class="btn_wrap l_row"><m-button-3 color="primary" class="full">로그인</m-button-3></div>
          <div class="check_wrap">
            <div class="check_area"><m-checkbox size="md" v-model="check1" label="자동 로그인"/></div>
            <div class="link_area">
              <a href="#">비밀번호 찾기</a>
              <a href="#">회원가입</a>
            </div>
          </div>
        </div>
      </q-form>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'A_10000_P',
    data() {
        return {
            text1:ref(''),
            text2:ref(''),
            check1:ref(true),
            select1:ref(null),
            options:[
                'South Korea (+82)', '선택1', '선택2', '선택3', '선택4'
            ]
        }
    }
};
</script>
