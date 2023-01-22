<template>
    <div class="centerarea_box1">
        <div class="con_box">
          <h2 class="line_type">
            스왑
          </h2>
          <q-tabs class="line_type large" v-model="tab1">
            <q-tab name="A"  label="sMON → MON"></q-tab>
            <q-tab name="B"  label="MON → sMON"></q-tab>
          </q-tabs>
          <q-tab-panels v-model="tab1">
            <q-tab-panel name="A" class="tab_contents">
              <div class="klip_box mgt16">
                  <span class="text_wrap">
                      <span class="ico_sb sb_klip">klip</span>
                      <span class="text_area">0xa590bc1aa0655d84f5e10xa590bc1aa0655d84f5e1</span>
                  </span>
                  <button class="ico_copy_g">copy</button>
               </div>
               
              <div class="gray_box">
                <p class="center txt_dk font16 mgb4">보유 수량</p>
                <p class="center mgb4"><span class="font20 bold primary">9,000,000.9999999999</span> <span class="txt_dk">sMON</span></p>
              </div>
              <h3 class="between mgt32 mgb26">
                <span class="font14">스왑할 sMON수량</span>
                <span class="font14 txt_gray">최소수량 1000 sMON</span>
              </h3>
              <div class="search_input l_row_sl">
                <div class="txt_input_wrap">
                  <m-input filled v-model="text1" class="round_type" placeholder="보낼 수량"></m-input>
                  <span class="txt_wrap">sMON</span>
                </div>
                <m-button-3 lined color="primary">최대</m-button-3>
              </div>
              <div class="divider1 small"/>
              <ul class="list_type1">
                <li>
                  <span class="txt01">제한량</span>
                  <span class="txt02">
                    1회 100,000 sMON<br>
                    1일 500,000 sMON
                  </span>
                </li>
                <li>
                  <span class="txt01">가격</span>
                  <span class="txt02">1 sMON = 1 MON</span>
                </li>
                <li>
                  <span class="txt01">수수료</span>
                  <span class="txt02 font16 bold">50 sMON</span>
                </li>
              </ul>
              <div class="list_info">
                <p>처음 스왑 시 최소수량 1,000 sMON, 수수료 50 sMON</p>
                <p>2회차부터 최소수량 100 sMON, 수수료 5 sMON 부과</p>
              </div>
              <div class="btn_wrap mgt32">
                <m-button-3 size="large" color="primary" class="full">스왑하기</m-button-3>
              </div>
            </q-tab-panel>

            <q-tab-panel name="B" class="tab_contents">
              <div class="klip_box mgt16">
                  <span class="text_wrap">
                      <span class="ico_sb sb_klip">klip</span>
                      <span class="text_area">0xa590bc1aa0655d84f5e10xa590bc1aa0655d84f5e1</span>
                  </span>
                  <button class="ico_copy_g">copy</button>
               </div>
               
              <div class="gray_box">
                <p class="center txt_dk font16 mgb4">보유 수량 (락업 제외)</p>
                <p class="center mgb4"><span class="font20 bold primary">9,000,000.9999999999</span> <span class="txt_dk">MON</span></p>
              </div>
              <h3 class="between mgt32 mgb26">
                <span class="font14">스왑할 MON수량</span>
                <span class="font14 txt_gray">최소수량 100 MON</span>
              </h3>
              <div class="search_input l_row_sl">
                <div class="txt_input_wrap">
                  <m-input filled v-model="text1" class="round_type" placeholder="보낼 수량"></m-input>
                  <span class="txt_wrap">MON</span>
                </div>
                <m-button-3 lined color="primary">최대</m-button-3>
              </div>
              <div class="divider1 small"/>
              <ul class="list_type1">
                <li>
                  <span class="txt01">가격</span>
                  <span class="txt02">1 sMON = 1 MON</span>
                </li>
                <li>
                  <span class="txt01">수수료</span>
                  <span class="txt02 font16 bold">? KLAY (연결된 지갑에서 확인)</span>
                </li>
              </ul>
              <div class="list_info">
                <p>최초 1회 sMON -> MON 스왑 후, MON -> sMON 스왑 기능 이용이 가능합니다.</p>
                <p>sMON 으로 스왑 시 트랜잭션 수수료로 KLAY가 부과됩니다.</p>
                <p>외부 지갑의 트랜잭션 수수료는 연결된 지갑의 정책에 따라 다르니 해당 지갑에서 수수료를 확인해주세요.</p>
                <p>트랜잭션 수수료가 부족한 경우 전송이 실패하니 전송 시 KLAY 잔고가 있는지 확인해주세요.</p>
              </div>
              <div class="btn_wrap mgt32">
                <m-button-3 size="large" color="primary" class="full">스왑하기</m-button-3>
              </div>
              
            </q-tab-panel>
          </q-tab-panels>
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

