<template>
    <div class="centerarea_box1">
        <div class="con_box">
          <h2 class="line_type">
            거버넌스
          </h2>
          <q-tabs class="line_type large sticky_tab1" v-model="tab1">
            <q-tab name="A"  label="스테이킹"></q-tab>
            <q-tab name="B"  label="의제 투표" alert="red"></q-tab>
          </q-tabs>
          <q-tab-panels v-model="tab1" animated>
            <q-tab-panel name="A" class="tab_contents">
              <!-- S 스테이킹 현황 -->
              <h3 class="between mgt32">
                <span class="font16">MON 스테이킹 현황</span>
                <span class="ico_info font14">스테이킹이란?</span>
              </h3>
              <div class="ranking_box01">
                <p>총 스테이킹 수량</p>
                <span class="number_wrap">
                  <span class="number_area">9,000,000.9999999999</span>MON
                </span>
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
                      <span class="ico_sb sb_klip">klip</span>
                      <!-- <span class="ico_sb sb_metamask">metamask</span> -->
                      <span class="text_area">0xa590bc1aa0655d84f5e10xa590bc1aa0655d84f5e1</span>
                  </span>
                  <button class="ico_copy">copy</button>
               </div>
               <div class="gray_box">
                <p class="font16 txt_dk">스테이킹 수량</p>
                <p class="center mgb4"><span class="font20 bold primary">9,000,000.9999999999</span> <span class="txt_dk">MON</span></p>
                <p class="center">지분율<span class="primary">0.0331%</span></p>
                <div class="btn_wrap l_row_s mgt32">
                  <m-button-3 color="primary" class="full">예치</m-button-3>
                </div>
                <div class="btn_wrap small">
                  <m-button-3 color="primary" lined class="full">출금요청</m-button-3>
                  <m-button-3 color="primary" lined class="full">출금 / 내역</m-button-3>
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
            </q-tab-panel>

            <q-tab-panel name="B" class="tab_contents">
              <!--S 의제투표-->
              <div class="mgt16 mgb32">
                <m-select v-model="select1" :options="options" />
              </div>
              <div class="agenda_tit">
                <span class="font12">최근 작성일 순</span>
                <span class="ico_wrap">
                  <button class="ico_pen">기타의제 작성</button>
                  <span class="ico_info">의제투표란?</span>
                </span>
              </div>
              
              <ul class="agenda_list">
                <li class="active">
                  <span class="badge_wrap">
                      <span class="badge_area">
                        <span class="badge3 yellow">PRO</span>
                        <span class="badge3 primary">반영완료</span>
                        <span class="badge3 light_green">주식</span>
                      </span>
                      <span class="badge_area">
                        <span class="badge3 gray">부결</span>
                      </span>
                  </span>
                  <p class="txt_tit">호빵맨님의 PRO 승급 제안</p>
                  <p class="sub_tit mgt8">[식빵맨님의 BLASH]</p>
                  <div class="progress_bar">
                    <div class="progress_tit">
                      <span class="txt01">🗳 471 VP</span>
                      <span class="txt02">정족수 2,000 VP</span>
                    </div>
                    <q-linear-progress class="progress_type1" size="10px" :value="progress" />
                    <div class="txt_area">
                      <span>의제 종류 : 기타</span>
                      <span>투표 기간:  2022.09.20 10:16:39 ~  2022.09.23 10:16:39</span>
                    </div>
                  </div>
                </li>
                <li>
                  <span class="badge_wrap">
                      <span class="badge_area">
                        <span class="badge3 yellow">PRO</span>
                        <span class="badge3 primary">반영완료</span>
                        <span class="badge3 gray">종료</span>
                      </span>
                      <span class="badge_area">
                        <span class="badge3 green">가결</span>
                      </span>
                  </span>
                  <p class="txt_tit">호빵맨님의 PRO 승급 제안</p>
                  <div class="progress_bar">
                    <div class="progress_tit">
                      <span class="txt01">🗳 471 VP</span>
                      <span class="txt02">정족수 2,000 VP</span>
                    </div>
                    <q-linear-progress class="progress_type1" size="10px" :value="progress" />
                    <div class="txt_area">
                      <span>의제 종류 : 기타</span>
                      <span>투표 기간:  2022.09.20 10:16:39 ~  2022.09.23 10:16:39</span>
                    </div>
                  </div>
                </li>
                <li>
                  <span class="badge_wrap">
                      <span class="badge_area">
                        <span class="badge3 brown">코인</span>
                        <span class="badge3 yellow">BEST</span>
                        <span class="badge3 gray">취소</span>
                      </span>
                      <span class="badge_area">
                        <span class="badge3 green">가결</span>
                      </span>
                  </span>
                  <p class="txt_tit">호빵맨님의 PRO 승급 제안</p>
                  <div class="progress_bar">
                    <div class="progress_tit">
                      <span class="txt01">🗳 471 VP</span>
                      <span class="txt02">정족수 2,000 VP</span>
                    </div>
                    <q-linear-progress class="progress_type1" size="10px" :value="progress" />
                    <div class="txt_area">
                      <span>의제 종류 : 기타</span>
                      <span>투표 기간:  2022.09.20 10:16:39 ~  2022.09.23 10:16:39</span>
                    </div>
                  </div>
                </li>
              </ul>
              <!--E 의제투표-->
            </q-tab-panel>
          </q-tab-panels>
          <!--
          <m-tabs class="line_type large" v-model="tab1" :items="tabs" />
            <div class="tab_contents" v-if="tab1 == 'A'">

            </div>
            <div class="tab_contents" v-if="tab1 == 'B'">

            </div>
          -->
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

