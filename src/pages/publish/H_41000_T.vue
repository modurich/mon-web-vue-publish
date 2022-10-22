<template>
    <div class="centerarea_box1">
        <div class="con_box">
          <h2 class="line_type">
            거버넌스
          </h2>
          <m-tabs class="line_type large" v-model="tab1" :items="tabs" />
            <div class="tab_contents" v-if="tab1 == 'A'">
              <!-- S 스테이킹 현황 -->
              <h3 class="between mgt32">
                <span class="font16">MON 스테이킹 현황</span>
                <span class="ico_info font14">스테이킹이란?</span>
              </h3>
              <div class="ranking_box01">
                <p>총 스테이킹 수량</p>
                <span class="center"><span class="font20 bold">9,000,000.9999999999</span> MON</span>
              </div>
              <div><span class="ico_info_bk">예상 보상률</span></div>
              <ul class="expect_list">
                <li>
                  <span class="txt_tit">APR</span>
                  <span class="txt_con primary">1,000,000,000.99 %</span>
                </li>
                <li>
                  <span class="txt_tit">APY</span>
                  <span class="txt_con txt_dk">1,000,000,000.99 %</span>
                </li>
              </ul>
              <!-- E 스테이킹 현황 -->
              <div class="divider1 small"/>
              <!-- S 내 스테이킹 정보 -->
              <h3 class="between mgt32">
                <span class="font16">내 스테이킹 정보</span>
                <span class="ico_info font14">VIP 보상</span>
              </h3>
              <div class="klip_box">
                  <span class="text_wrap">
                      <span class="ico_klip">klip</span>
                      <span class="text_area">0xa590bc1aa0655d84f5e10xa590bc1aa0655d84f5e1</span>
                  </span>
                  <button class="ico_copy">copy</button>
               </div>
               <div class="gray_box">
                <p class="font16 txt_dk">총 스테이킹 수량</p>
                <p class="center mgb4"><span class="font20 bold primary">9,000,000.9999999999</span> <span class="txt_dk">MON</span></p>
                <p class="center">지분율<span class="primary">0.0331%</span></p>
                <div class="btn_wrap l_row_s mgt32">
                  <m-button-3 color="primary" class="full">지갑 연결하기</m-button-3>
                </div>
                <div class="btn_wrap">
                  <m-button-3 color="primary" lined class="full">지갑 연결하기</m-button-3>
                  <m-button-3 color="primary" lined class="full">지갑 연결하기</m-button-3>
                </div>
              </div>
              <div class="gray_box">
                <p class="center font16 medium mgb4">보상수량</p>
                <p class="center mgb4"><span class="font20 bold txt_dk">10,000,000.9999999999 sMON</span></p>
                <div class="btn_wrap l_row_s mgt32">
                  <m-button-3 color="primary" lined size="large" class="full">보상수령</m-button-3>
                </div>
              </div>
              <div class="ico_top">
                <i class="ico_error"></i>
              </div>
              <div class="com_message font14 mgb32">
                지갑이 연결되어 있지 않습니다.<br>
                지갑을 연결하고 스테이킹하면 실시간으로 이자를 받을 수 있습니다.
              </div>
              <div class="btn_wrap l_row_l">
                <m-button-3 color="primary" size="large" class="full">지갑 연결하기</m-button-3>
              </div>
              <!-- E 내 스테이킹 정보 -->
              <div class="divider1 small"/>
              <!-- S NFT 슬롯 -->
              <h3 class="between mgt32">
                <span class="font16">NFT 슬롯</span>
                <span class="ico_info font14">NFT 추가 보상</span>
              </h3>
              <ul class="nft_wrap add_footer">
                <li>
                  <button class="ico_plus">upload</button>
                  <span class="footer_box"></span>
                </li>
                <li>
                  <button class="ico_lock">lock</button>
                  <span class="footer_box"></span>
                </li>
                <li>
                  <button class="ico_lock">lock</button>
                  <span class="footer_box"></span>
                </li>
              </ul>
              <ul class="nft_wrap add_footer">
                <li>
                  <img src="~assets/nft_img01.png" alt="" />
                  <span class="footer_box active">5%</span>
                </li>
                <li class="disabled">
                  <img src="~assets/nft_img01.png" alt="" />
                  <span class="footer_box"></span>
                </li>
              </ul>
              <div>
                <p class="txt_dk bold mgb4 between">
                  <span>스테이킹 추가 보상</span>
                  <span class="font16 primary bold">100 %</span>
                </p>
                <p>추가 보상을 받을 수 있는 NFT가 장착되어 있지 않습니다.</p>
              </div>
              <div class="gray_box add_footer">
                <p class="center font16 medium mgb4">오늘의 보상</p>
                <p class="center mgb4"><span class="font20 bold primary">9,000,000.9999999999</span> <span class="txt_dk">MON</span></p>
                <div class="btn_wrap mgt32">
                  <m-button-3 color="primary" lined size="large" class="full">보상수령</m-button-3>
                </div>
                <div class="footer_message">📌️  NFT 추가 보상은 하루 1번 수령이 가능하며 매일 오전 9시까지 수령하지 않은 보상은 초기화됩니다.</div>
              </div>
              <!-- E NFT 슬롯 -->
            </div>
            <div class="tab_contents" v-if="tab1 == 'B'">
             
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
  data() {
        return {
          tab1: ref('A'),
          tabs: [
            { label: '스테이킹', value: 'A', icon: '' },
            { label: '의제 투표', value: 'B', icon: '' },
           
          ],
        }
    },
    methods: {
    }
};
</script>
<style scoped>

</style>

