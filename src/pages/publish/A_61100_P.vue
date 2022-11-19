<template>
  <div class="centerarea_box1">
      <div class="con_box">
        <h2 class="line_type between">
          혜택
        </h2>
        <div class="box_contents"> 
          <div class="center mgt16 mgb32">
            <i class="ico_success"></i>
          </div>
          <p class="l_row_l main_info">결제 신청이 완료되었습니다. <br/>
          아래 계좌로 입금해주시면 확인 후 결제가 완료됩니다.</p>
          <div class="divider"/>
         
          <h3 class="between mgb16 mgt16">
            <span>무통장입금 계좌 정보</span>
          </h3>
          <ul class="list_type1 mgt32">
            <li>
              <span>입금할 계좌번호</span>
              <span class="txt_dk flex">487-050176-04-020<button class="ico_export"/></span>
            </li>
            <li>
              <span>금융기관</span>
              <span class="txt_dk">기업은행</span>
            </li>
            <li>
              <span>예금주명</span>
              <span class="txt_dk">주식회사 모두리치</span>
            </li>
            <li>
              <span>상품명</span>
              <span class="txt_dk">멤버십 가입 (30일)</span>
            </li>
            <li>
              <span>입금할 금액</span>
              <span class="txt_dk">33,000원</span>
            </li>
            <li>
              <span>입금기한</span>
              <span class="txt_dk">2022.12.00</span>
            </li>
          </ul>
          <div class="divider1 small" />
          <p class="font12">
            - 원활한 입금 확인을 위해 입금자명은 반드시 몬스탁 계정 실명으로 부탁드립니다. <br/>
            - 입금자명이 다르거나, 최종결제금액과 입금액이 다를 경우 입금이 지연될 수 있습니다. <br/>
            - 무통장입금의 경우 현금영수증 발급을 위해 휴대폰 번호 또는 주민등록번호를 수집하여 처리함을 안내해 드립니다. <br/>
            - 17시 이전 입금 분은 당일 처리, 이후 입금 분은 익일 처리됩니다. <br/>
            - 빠른 처리를 원하시면 입금 후 채널톡으로 문의 바랍니다.
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
