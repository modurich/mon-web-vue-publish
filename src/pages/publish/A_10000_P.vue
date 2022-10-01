<template>
    <div class="login_wrap">
      <q-form>
        <div class="login_area">
          <div class="monstock_logo l_row"><img src="~assets/logo.svg" alt="monstock logo"/></div>
          <div class="l_row"><m-select v-model="model" :options="options" label="Standard"/></div>
          <div class="l_row"><m-input filled v-model="text1" label="filled" class="round_type"/></div>
          <div class="l_row"><m-input filled v-model="text1" label="filled" class="round_type"/></div>
          <div class="btn_wrap l_row"><m-button-3 color="slateBlue" class="full">slateBlue</m-button-3></div>
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
export default {
    name: 'A_10000_P',
    setup() {
        return {
            text1:ref(''),
            check1:ref(true),
            check2:ref(false),
            check3:ref(['A', 'C']),
            check4:ref(['A', 'B', 'C']),
            rad1:ref('B'),
            model:ref(null),
            options:[
                'Google', 'Facebook'
            ]
        }
    }
};
</script>
