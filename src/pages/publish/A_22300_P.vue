<template>
    <div class="centerarea_box1">
        <div class="con_box">
          <h2 class="line_type">
            OTP등록 / 초기화
          </h2>
          <div class="box_contents">  
            <h3 class="font16">1. 구글 OTP 앱을 설치해주세요.</h3>
            <div class="google_otp">
              <button class="btn_google">google play</button>
              <button class="btn_app">app store</button>
            </div>
            <div class="divider"/>
            <h3 class="font16">2. QR코드 스캔 또는 설정 키를 입력해주세요.</h3>
            <div class="divider"/>
            <h3 class="font16">3. OTP 앱 화면에 생성된 인증번호를 입력해주세요.</h3>
            <div class="mgt32">
              <m-input filled v-model="text1" placeholder="인증번호 6자리" class="round_type" />
            </div>
            <div class="divider"/>
            <div class="btn_wrap l_row_l">
                <m-button-3 size="large" color="primary" class="full">OTP 등록</m-button-3>
              </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
        return {
        }
    },
    methods: {
    }
};
</script>
<style scoped>

</style>

