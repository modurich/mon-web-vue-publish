<template>
    <div class="centerarea_box">
      <q-form>
        <div class="con_box">
          <h2>회원가입</h2>
          <div class="l_row"><m-input filled v-model="text1" label="이름" class="round_type"/></div>
          <div class="l_row"><m-input filled v-model="text1" label="생년월일 8자리" class="round_type"/></div>
          <div class="l_row"><m-input filled v-model="text1" label="비밀번호 (영문, 숫자, 특수문자 필수 8~20자리)" class="round_type" :rules="[val => val.length === 0 ? '휴대폰 또는 이메일 주소를 입력하세요' : true]"/></div>
          <div class="l_row"><m-input filled v-model="text1" label="비밀번호 확인" class="round_type"/></div>
          <div class="l_row"><m-select v-model="select1" :options="options" /></div>
          <div class="l_row_s"><m-input filled v-model="text1" label="010-1234-5678" class="round_type"/></div>
          <!-- <div class="btn_wrap l_row"><m-button-3 color="primary" class="full" disabled>인증번호발송</m-button-3></div> -->
          <div class="l_row between">
            <span class="font16 txt_dk mgt16">추천인 코드 (선택)</span>
            <span class="font12">입력시 <span class="primary bold">100 SMON</span> 즉시 지급!</span>
          </div>
          <div class="l_row"><m-input filled v-model="text1" label="영문, 숫자 혼합 8자리" class="round_type"/></div>
          <div class="check_wrap l_row">
            <div class="check_area"><m-checkbox size="md" v-model="check1" label="만 14세 이상입니다"/></div>
            <div class="check_area">
              <div class="between">
                <m-checkbox size="md" v-model="check2" label="전체약관 동의"/>
                <span class="secondary font12">필수 이용 약관에 모두 동의해주세요.</span>
              </div>
              <div class="view_wrap">
                <div class="between">
                  <m-checkbox size="md" v-model="check3" label="서비스 이용약관 (필수)"/>
                  <a href="javascript:void(0)" @click="polcyPopup('01')" class="link_view">보기</a>
                </div>
                <div class="between">
                  <m-checkbox size="md" v-model="check4" label="개인정보 처리방침 (필수)"/>
                  <a href="javascript:void(0)" @click="polcyPopup('02')" class="link_view">보기</a>
                </div>
                <div class="between">
                  <m-checkbox size="md" v-model="check5" label="게시물 작성규정 (필수)"/>
                  <a href="javascript:void(0)" @click="polcyPopup('03')" class="link_view">보기</a>
                </div>
                <m-dialog v-model="dailog1" class="cls_test">
                  <Polycy v-bind:polcyType="polcyType" />
                </m-dialog>
              </div>
            </div>
            <div class="check_area"><m-checkbox size="md" v-model="check6" label="마케팅 정보 수신 동의 (선택)"/></div>
          </div>
          <div class="btn_wrap"><m-button-3 size="large" color="primary" class="full" disabled>가입하기</m-button-3></div>
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
