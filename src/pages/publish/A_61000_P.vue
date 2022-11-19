<template>
  <div class="centerarea_box1">
      <div class="fixed_con_bottom">
        <m-checkbox size="md" v-model="check1" label="주문내역 확인 및 결제 동의(필수)"/>
        <m-button-3 size="small" color="primary">결제하기</m-button-3 >
      </div>
      <div class="con_box">
        <h2 class="line_type between">
          멤버십 결제
        </h2>
        <div class="box_contents"> 
          <h3 class="between mgb32 mgt16">
            상품 정보
          </h3>
          <div class="list_box1">
            <p class="txt_dk">멤버십 가입 혜택</p>
            <p>
              - 모든 콘텐츠 sMON 소모 없이 무제한 열람 가능<br/>
              - 매일 보팅파워 10 VP 추가 지급<br/>
              - 럭키박스에서 꽝이 나올 확률 100% 제거<br/>
            </p>
          </div>
          <div class="mgb32 mgt32">
            <m-select v-model="select1" :options="options" />
          </div>
          <div class="divider" />
          <h3 class="between mgb32 mgt16">
            결제 예정 금액
          </h3>
          <ul class="list_type1">
            <li>
              <span class="txt01">상품가격</span>
              <span class="txt02">30,000원</span>
            </li>
            <li>
              <span class="txt01">+ 부가세</span>
              <span class="txt02">3,000원</span>
            </li>
            <li class="total">
              <span class="txt01">최종 결제 금액</span>
              <span class="txt02 primary">33,000원</span>
            </li>
          </ul>
          <div class="divider" />
          <h3 class="between mgb32 mgt16">
            결제 수단
          </h3>
          <m-tabs class="card_type small" v-model="tab1" :items="tabs" />
          <div v-if="tab1 == 'A'">
            <div class="mgt32">
              <p><img src="~assets/card_img01.png" alt=""/></p>
              <p><img src="~assets/card_img02.png" alt=""/></p>
              <p><img src="~assets/card_img03.png" alt=""/></p>
            </div>
          </div>
          <div v-if="tab1 == 'B'">
            <div class="mgt32">
              <p><img src="~assets/card_img04.png" alt=""/></p>
            </div>
          </div>
          <div v-if="tab1 == 'C'">
            <div class="radio_wrap">
                <m-radio v-model="rad1" val="A" label="비사업자 (개인)"/>
                <m-radio v-model="rad1" val="B" label="사업자"/>
            </div>
            <div class="mgb32">
            <m-input filled v-model="text1" label="filled" class="round_type" placeholder="전화번호"/>
            </div>
            <p class="font12">
              - 원활한 입금 확인을 위해 입금자명은 반드시 몬스탁 계정 실명으로 부탁드립니다. <br/>
              - 입금자명이 다르거나, 최종결제금액과 입금액이 다를 경우 입금이 지연될 수 있습니다. <br/>
              - 무통장입금의 경우 현금영수증 발급을 위해 휴대폰 번호 또는 주민등록번호를 수집하여 처리함을 안내해 드립니다. <br/>
              - 17시 이전 입금 분은 당일 처리, 이후 입금 분은 익일 처리됩니다. 
              - 빠른 처리를 원하시면 입금 후 채널톡으로 문의 바랍니다. 
            </p>
          </div>
          <div class="divider1 small" />
          <p class="font12">
            본 서비스는 결제 후 7일 이내 sMON이 소모되는 콘텐츠를 1건도 열람하지 않은 경우 청약 철회가 가능합니다. <br/>
            콘텐츠 상품 특성상 청약철회 이외 중도해지는 불가합니다.  <br/>
            - 몬스탁의 날짜 변경 기준은 UTC +0 입니다. (한국시간 오전 9시) 
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
            rad1:ref('A'),
            toggle1: ref(false),
            tab1:ref('A'),
            check1:ref(true),
            tabs:[
                {label:'카드', value:'A', icon:''},
                {label:'차이 간편결제', value:'B', icon:''},
                {label:'무통장입금', value:'C', icon:''}
            ],
        }
    }
   
};
</script>
<style scoped>

</style>
