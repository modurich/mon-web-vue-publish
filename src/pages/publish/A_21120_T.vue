<template>
    <div class="centerarea_box1">
      <q-form>
        <div class="con_box">
          <h2 class="line_type">내 정보 수정</h2>
          <m-tabs class="line_type large" v-model="tab1" :items="tabs"/>
          <div class="tab_contents" v-if="tab1 == 'A'">
          <!-- S 프로필 수정-->
          <h3 class="mgt16">프로필 사진</h3>
          <p class="sub_info l_row_s">줌인하여 이미지를 편집하실 수 있습니다.</p>
          <div class="profile_wrap l_row_s">
            <img src="~assets/profile_img1.png" alt="profile"/>
          </div>
          <div class="btn_wrap l_row_l">
            <m-button-3 lined color="primary" class="full">취소</m-button-3>
            <m-button-3 color="slateBlue" class="full">저장</m-button-3>
          </div>
          <h3>닉네임</h3>
          <p class="sub_info">
            <span class="txt_red">임시닉네임 입니다. 1회에 한해 변경 가능합니다.</span><br/>
            공백없이 한글, 영문, 숫자 3-10자로 입력해주세요.
          </p>
          <div class="l_row_s"><m-input filled v-model="text1"  class="round_type"/></div>
          <div class="btn_wrap l_row_l"><m-button-3 color="slateBlue" class="full">저장하기</m-button-3></div>
          <h3>소개</h3>
          <div class="l_row">
          <m-textarea 
            :maxlength="100"
            :showError="false"
            :minHeight="textarea1.minHeight" 
            :counter="textarea1.counter" 
            :value="textarea1.value" 
            :bottomMessage="textarea1.bottomMessage"
            :height="50"
            placeholder="예시) 모두 승투하세요~!"
          />
          </div>
          <div class="btn_wrap l_row_l"><m-button-3 size="large" color="slateBlue" class="full" disabled>저장</m-button-3></div>
          <h3>링크</h3>
          <div class="btn_wrap l_row_l"><m-button-3 size="large" color="slateBlue" class="full">추가</m-button-3></div>

            <!-- E 프로필 수정-->
          </div>
          <div class="tab_contents" v-if="tab1 == 'B'">
            <!-- S 계정정보 수정-->
            <ul class="my_list_wrap">
              <li>
                <div class="txt_area">
                  <span class="txt01">이름</span>
                  <span class="txt02">홍길동</span>
                </div>
                <div class="btn_area"><button class="btn_view">비밀번호 변경</button></div>
              </li>
              <li>
                <div class="txt_area">
                  <span class="txt01">휴대폰 번호</span>
                  <span class="txt02">+82 010-1234-5678</span>
                </div>
                <div class="btn_area"><button class="btn_view" @click="dailog1 = true">휴대폰 번호 변경</button></div>
                <!-- S 휴대폰 번호 변경 -->
                <m-dialog v-model="dailog1" class="cls_test">
                  <q-card class="dailog_wrap">
                        <q-card-section class="row items-center q-pb-none">
                            <q-space />
                            <q-btn icon="close" flat round dense v-close-popup />
                        </q-card-section>
                        <q-card-section class="dailog_contents">
                            <p class="dialog_tit">{{subject}}</p>
                            <div class="l_row"><m-select v-model="select1" :options="options" /></div>
                          <div class="l_row"><m-input filled v-model="text1" label="휴대폰 번호 또는 이메일 주소" class="round_type"/></div>
                          <div class="l_row"><m-input filled v-model="text1" label="비밀번호" class="round_type"/></div>
                          <div class="btn_wrap l_row"><m-button-3 color="slateBlue" class="full">로그인</m-button-3></div>
                        </q-card-section>
                    </q-card>
                </m-dialog>
                <!-- E 휴대폰 번호 변경 -->
              </li>
              <li>
                <div class="txt_area">
                  <span class="txt01">이메일</span>
                  <span class="txt02">example@monstock.com</span>
                </div>
                <div class="btn_area"><button class="btn_view">이메일 등록 / 변경</button></div>
              </li>
            </ul>
            <p class="secondary">
              회원가입, 약관정책 변경 등 비마케팅성 정보는 수신동의 여부와 관계없이 발송됩니다.
            </p>
            <div class="check_wrap">
              <div class="check_area"><m-checkbox size="md" v-model="check1" label="마케팅 정보 수신 동의 (선택)"/></div>
            </div>
            <p class="sub_info">
              회원가입, 약관정책 변경 등 비마케팅성 정보는 수신동의 여부와 관계없이 발송됩니다.
            </p>
            <!-- E 계정정보 수정-->
          </div>
         
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
            text2:ref(''),
            text3:ref(''),
            check1:ref(true),
            check2:ref(false),
            check3:ref(false),
            check4:ref(false),
            check5:ref(false),
            check6:ref(false),
            select1:ref(null),
            tab1:ref('A'),
            tabs:[
                {label:'프로필 수정', value:'A', icon:'mail'},
                {label:'계정정보 수정', value:'B', icon:'photo'}
            ],
            options:[
                'South Korea (+82)', '선택1', '선택2', '선택3', '선택4'
            ],
            dailog1:ref(false),
            polcyType:ref('01'),
            textarea1 : {
                value: "",
                counter: true,
                minHeight: 100,
                showError: true,
                //bottomMessage: "바닥메시지"
            },
            dailog1:ref(false),
            dailog2: ref(false),
            dailog3: ref(false),
            dailog4: ref(false),
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
