<template>
  <div class="centerarea_box1">
      <div class="con_box">
        <h2 class="line_type between">
          결제취소
        </h2>
        <div class="box_contents"> 
          <ul class="list_type1">
            <li>
              <span>환불 예정 금액</span>
              <span class="primary bold">33,000원</span>
            </li>
          </ul>
          <div class="mgt32 mgb32">
            <m-select v-model="select1" :options="options" />
          </div>
          <div>
            <m-input filled v-model="text1" label="‘-’ 없이 계좌번호" class="round_type" placeholder="‘-’ 없이 계좌번호"/>
          </div>
          <div class="mgt32">
            <m-input filled v-model="text1" label="예금주명" class="round_type" placeholder="예금주명"/>
          </div>
          <div class="btn_wrap l_row_l mgt32">
            <m-button-3 color="primary" size="large" class="full">
             확인</m-button-3>
          </div>
          <p class="font12">
            - 무통장입금 청약철회 및 청약철회 이외 환불은 최대 10영업일 이내 입력하신 계좌로 지급합니다. <br/>
            - 계좌번호 등의 입력 실수로 인한 오입금에 대한 책임은 환불 요청한 회원 본인에게 있습니다.
          </p>
        </div>
      </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'Laside',
    data() {
        return {
            check1:ref(true),
            slide: ref('1'),
        }
    }
   
};
</script>
<style scoped>

</style>
