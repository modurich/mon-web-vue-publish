<template>
    <div class="centerarea_box1">
        <div class="con_box">
          <h2 class="line_type">
            출금계좌 등록 / 변경
          </h2>
            <div class="box_contents">
              <h3 class="between mgt32 mgb26">
                <span>계좌 정보</span>
              </h3>
              <ul class="list_type1">
                <li>
                  <span class="txt01">등록상태</span>
                  <span class="txt02 txt_dk">미등록</span>
                </li>
              </ul>
              <div class="mga32">
                <m-select v-model="select1" :options="options" />
              </div>
              <div>
                <m-input filled v-model="text1" class="round_type" placeholder="계좌번호"></m-input>
              </div>
              <ul class="img_file_wrap">
                <li>
                  <span class="txt_list">통장사본.jpg</span>
                  <m-button-3 color="primary" lined>변경</m-button-3>
                </li>
              </ul>
              <div class="btn_wrap mgt32">
                <m-button-3 color="primary" class="full">통장 사본 첨부</m-button-3>
              </div>
              <div class="divider"/>
              <h3 class="between mgt32 mgb26">
                <span>예금주 정보</span>
              </h3>
              <div class="mga32">
                <m-select v-model="select1" :options="options" />
              </div>
              <div>
                <m-input filled v-model="text1" class="round_type" placeholder="예금주명"></m-input>
              </div>
              <p class="mgt32 txt_dk">주민등록번호</p>
              <div class="flex_form">
                <m-input filled type="password" v-model="text1" class="round_type"></m-input> &nbsp;&nbsp;-&nbsp;&nbsp; 
                <m-input filled type="password" v-model="text1" class="round_type"></m-input>
              </div>
              <ul class="img_file_wrap">
                <li>
                  <span class="txt_list">신분증사본.jpg</span>
                  <m-button-3 color="primary" lined>변경</m-button-3>
                </li>
              </ul>
              <div class="btn_wrap mgt32">
                <m-button-3 color="primary" class="full">신분증 사본 첨부</m-button-3>
              </div>
              <div class="divider"/>
              <p>통장사본과 신분증사본은 리워드 출금시 수익에 대한 원천징수를 위해 반드시 필요한 증빙서류입니다. 출금 계좌는 본인명의 계좌만 등록가능합니다. 출금 요청받은 계좌에 문제가 있을 경우 등록거절 될 수 있습니다. 심사에 최대 1영업일이 소요될 수 있습니다.</p>
              <div class="list_info">
                <p>첨부파일은 pdf, jpg, png 만 가능(개당 최대 10M 가능)</p>
                <p>신분증 사본은 주민등록증, 여권, 운전면허증 만 가능.</p>
              </div>
              <div class="btn_wrap mgt32">
                <m-button-3 size="large" color="primary" class="full">등록 심사 신청</m-button-3>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
  data() {
        return {
          select1: ref("전체"),
          options: [
            '전체', '선택1','선택2','선택3'
          ],
          tab1: ref('A'),
          progress: 0.4
        }
    },
    methods: {
    }
};
</script>
<style scoped>

</style>

