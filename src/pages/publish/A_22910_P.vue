<template>
    <div class="centerarea_box1">
        <div class="con_box">
          <h2 class="line_type">
            NFT 상세
          </h2>
            <div class="box_contents">
              <div class="nft_img_wrap"><img src="~assets/img_insight1.png" alt=""/></div>
              <p class="center primary font18 bold mgb8">인사이트 랭킹 2위</p>
              <p class="center txt_dk">2022년 3분기 몬스탁 인사이트 수익률 랭킹 2위</p>
              <div class="btn_wrap mga32">
                <m-button-3 color="primary" lined class="full">보내기</m-button-3>
                <m-button-3 color="primary" class="full">슬롯장착</m-button-3>
              </div>
              <div class="divider"/>
              <h3 class="between mga32">
                <span>NFT 정보</span>
              </h3>
              <ul class="list_type1 nft">
                <li>
                  <span class="txt01">종류</span>
                  <span class="txt02 txt_dk">인사이트 랭킹</span>
                </li>
                <li>
                  <span class="txt01">등급</span>
                  <span class="txt02 txt_dk">실버</span>
                </li>
                <li>
                  <span class="txt01">토큰 ID</span>
                  <span class="txt02 txt_blue1 underline">
                    <span class="ellipsis">235046802863194112235046802863194112</span><button class="ico_copy"/>
                  </span>
                </li>
                <li>
                  <span class="txt01">소유자</span>
                  <span class="txt02">
                    <span class="ellipsis">0xe310f69879e9d0940e99</span><button class="ico_copy"/>
                  </span>
                </li>
                <li>
                  <span class="txt01">TX 해시</span>
                  <span class="txt02">
                    <span class="ellipsis">0xe310f69879e9d0940e99</span><button class="ico_copy"/>
                  </span>
                </li>
                <li>
                  <span class="txt01">받은 시각</span>
                  <span class="txt02">
                    2022.10.11 23:32:07
                  </span>
                </li>
              </ul>
              <div class="divider"/>
              <h3 class="between mga32">
                <span>최근 거래내역</span>
                <a href="#" class="link_view gray">전체보기</a>
              </h3>
              <p class="txt_dk">2022.02.05 11:59:48</p>
              <div class="hash_item">
                <div class="item">
                  <span class="txt_label">From</span>
                  <span class="txt_hash">0xe30e990xe30e990xe30e99</span>
                  <button class="ico_copy"/>
                </div>
                <i class="ico_arrow_right_p"/>
                <div class="item">
                  <span class="txt_label">To</span>
                  <span class="txt_hash">0xe30e990xe30e990xe30e99</span>
                  <button class="ico_copy"/>
                </div>
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

