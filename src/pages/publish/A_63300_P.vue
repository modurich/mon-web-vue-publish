<template>
  <div class="centerarea_box1">
      <div class="con_box">
        <h2 class="line_type between">
          결제 취소 완료
        </h2>
        <div class="box_contents"> 
          <ul class="list_type1">
            <li>
              <span>결제 주문번호</span>
              <span class="txt_dk">20221115045825779_7EJY</span>
            </li>
            <li>
              <span>상품명</span>
              <span class="txt_dk">멤버십 가입 (30일)</span>
            </li>
            <li>
              <span>결제수단</span>
              <span class="txt_dk">무통장입금</span>
            </li>
            <li>
              <span>결제상태</span>
              <span class="txt_dk">결제완료</span>
            </li>
            <li>
              <span>결제일시</span>
              <span class="txt_dk">2022.11.15 13:58:25</span>
            </li>
          </ul>
          <ul class="list_type1 mgt32">
            <li>
              <span>상품가격</span>
              <span class="txt_dk">30,000원</span>
            </li>
            <li>
              <span>부가세</span>
              <span class="txt_dk">3,000원</span>
            </li>
            <li>
              <span>할인금액</span>
              <span class="txt_dk">0원</span>
            </li>
            <li>
              <span>최종결제금액</span>
              <span class="txt_dk">33,000원</span>
            </li>
          </ul>
          <ul class="list_type1 mgt32">
            <li>
              <span>청약철회 / 환불일시</span>
              <span class="txt_dk">2022.11.15 13:58:25</span>
            </li>
          </ul>
          <div class="btn_wrap l_row_l mgt32">
            <m-button-3 lined color="primary" size="large" class="full">
             영수증 열기</m-button-3>
          </div>
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
