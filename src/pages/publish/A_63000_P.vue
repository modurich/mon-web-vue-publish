<template>
  <div class="centerarea_box1">
      <div class="con_box">
        <h2 class="line_type between">
          멤버십 이용정보
        </h2>
        <div class="box_contents"> 
          <h3 class="between mgb16 mgt16">
            <span>상품정보</span>
          </h3>
          <ul class="list_type1 mgt32">
            <li>
              <span>상품명</span>
              <span class="txt_dk">멤버십 가입 (30일)</span>
            </li>
            <li>
              <span>결제일시</span>
              <span class="txt_dk">2022.11.15 13:58:25</span>
            </li>
            <li>
              <span>상품기간</span>
              <span class="txt_dk">2022.11.15~2022.12.16</span>
            </li>
            <li>
              <span>상품사용기간</span>
              <span class="txt_dk">0일차</span>
            </li>
          </ul>
          <div class="btn_wrap l_row_l mgt32">
            <m-button-3 lined color="primary" size="large" class="full">
             결제내역 상세</m-button-3>
          </div>
          <div class="right">
            <a href="#" class="link_view gray right">결제취소</a>
          </div>
          <div class="divider1 small" />
          <p class="font12">
            - 결제 후 7일 이내 sMON이 소모되는 콘텐츠를 1건도 열람하지 않은 경우 청약 철회가 가능합니다. <br/>
            - 청약 철회 시 카드 및 차이 결제는 결제 취소 처리됩니다. <br/>
            - 무통장입금의 청약철회 시 환불금은 최대 10 영업일 이내 입력하신 계좌로 지급합니다.<br/>
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
