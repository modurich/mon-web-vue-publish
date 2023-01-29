<template>
    <div class="centerarea_box1">
        <div class="con_box">
          <h2 class="line_type">
            NFT 상세
          </h2>
            <div class="box_contents">
              <div class="nft_img_wrap"><img src="~assets/nft_bronze.png" alt=""/></div>
              <p class="center primary font18 bold mgb8">웰컴 카드 - 브론즈</p>
              <p class="center txt_dk font12">몬스탁에 가입해주셔서 감사합니다. <br>
              웰컴 카드 보유자에게는 행운이 찾아올지도...!</p>
              <p class="flex center mgt32"><span class="date_type01"><i class="ico_clock_w"/>1월 1일, 12시</span></p>
              
              <div class="divider"/>

              <h3 class="between mga32 font16">
                <span>NFT 정보</span>
              </h3>
              <ul class="list_type1 nft">
                <li>
                  <span class="txt01">종류</span>
                  <span class="txt02 txt_dk">웰컴 카드</span>
                </li>
                <li>
                  <span class="txt01">등급</span>
                  <span class="txt02 txt_dk">브론즈</span>
                </li>
              </ul>

              <div class="divider"/>

              <h3 class="between mga32 font16">
                <span>입찰내역</span>
              </h3>
              <div class="error_wrap">
                <div class="ico_top">
                  <i class="ico_error"></i>
                </div>
                <div class="com_message font16">
                  입찰정보가 없어요!
                </div>
              </div>

              <div class="divider"/>

              <h3 class="between mga32 font16">
                <span>구매 주의사항</span>
              </h3>
              <ol class="num_list_wrap">
                <li><span class="txt_number">1.</span> 남은 시간은 서비스 제공사의 서버 시간을 기준으로 하며, 네트워크 사정 등으로 인해 실제 시간과 약간의 오차가 발생할 수 있습니다.</li>
                <li><span class="txt_number">2.</span> 판매 기한 종료, 최대 수량 도달하면 즉시 종료됩니다.</li>
                <li><span class="txt_number">3.</span> 몬스탁에서 민팅한 NFT는 몬스탁에서 지원하는 지갑에서만 전송, 보관할 수 있습니다. </li>
                <li><span class="txt_number">4.</span> 구매 후 취소할 수 없으며 환불이 불가합니다.</li>
              </ol>

              <div class="divider"/>

              <h3 class="between mgb16 font16">
                <span>입찰 안내</span>
              </h3>
              <p class="txt_dk mgt32 mgb16">입찰</p>
              <div class="list_info mgt0">
                <p>입찰은 취소할 수 없습니다.</p>
                <p>현재 최고 입찰가의 +5% ~ +30% 범위로 입찰할 수 있습니다.</p>
                <p>1명이 3회 연속 입찰할 수 없습니다.</p>
                <p>동일 금액으로 동시 입찰이 발생한 경우 낙찰 순위는 시간순으로 결정됩니다.</p>
                <p>경매 마감 10분 전부터는 최초 입찰이 불가하며 기입찰자만 입찰할 수 있습니다.</p>
              </div>
              <p class="txt_dk mgt32 mgb16">Pro 승급</p>
              <div class="list_info mgt0">
                <p>가장 높은 금액을 입찰한 1명이 낙찰자가 됩니다.</p>
                <p>2번째~ 5번째 높은 금액을 입찰한 4명은 예비 낙찰자가 됩니다.</p>
                <p>1명이 여러 번 입찰한 경우 낙찰자, 예비 낙찰자 선정에는 최고 입찰가만 반영합니다.</p>
              </div>
              <p class="txt_dk mgt32 mgb16">입찰 보증금</p>
              <div class="list_info mgt0">
                <p>부정 입찰 방지를 위해 품목별 최초 입찰 시 보증금을 예치해야 합니다.</p>
                <p>낙찰자와 예비 낙찰자를 제외한 입찰자의 보증금은 경매 종료 즉시 환불됩니다.</p>
                <p>낙찰자와 예비 낙찰자의 보증금은 구매자가 확정될 때까지 홀딩합니다.</p>
                <p>낙찰자가 잔금 입금을 하지 않거나 낙찰 취소를 하면 보증금은 환불되지 않습니다.</p>
                <p>구매 기회를 받지 못한 예비 낙찰자의 보증금은 구매자 확정 즉시 환불됩니다.</p>
              </div>
              <p class="txt_dk mgt32 mgb16">낙찰 과정</p>
              <div class="list_info mgt0">
                <p>경매 시간 종료 후 낙찰자에게 24시간의 구매 기회가 주어집니다.</p>
                <p>낙찰자가 시간 안에 잔금 입금을 완료하면 최종 구매자가 됩니다.</p>
                <p>낙찰자가 잔금 입금을 하지 않거나 낙찰 취소를 하면 다음 예비 낙찰자에게 24시간의 구매 기회가 주어집니다.</p>
                <p>예비 낙찰자를 포함한 전원이 낙찰 취소를 하면 유찰됩니다.</p>
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

