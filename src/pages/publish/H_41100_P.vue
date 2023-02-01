<template>
    <div class="centerarea_box1">
        <div class="con_box">
          <h2 class="line_type">
            예치
          </h2>
            <div class="box_contents">
              <div class="klip_box mgt0">
                  <span class="text_wrap">
                      <!-- <span class="ico_sb sb_klip">klip</span> -->
                      <span class="ico_sb ico_wallet_g">wallet</span>
                      <span class="text_area">0xa590bc1aa0655d84f5e10xa590bc1aa0655d84f5e1</span>
                  </span>
                  <button class="ico_copy_g">copy</button>
               </div>
               <div class="txt_info01 mgt8">
                <p>지갑 세션이 종료되었습니다.</p>
               </div>
               
              <div class="gray_box mgt32">
                <p class="center txt_dk font16 mgb4">보유 수량 (락업 제외)</p>
                <p class="center mgb4"><span class="font20 bold primary">9,000,000.9999999999</span> <span class="txt_dk">MON</span></p>
              </div>
              <div class="search_input mgt32">
                <m-input filled v-model="text1" class="round_type" placeholder="예치 수량"></m-input>
                <m-button-3 lined color="primary">최대</m-button-3>
              </div>
              <div class="divider1 small"/>
              <ul class="list_type1">
                <li>
                  <span class="txt01">예상수수료</span>
                  <span class="txt02 font16 bold">? KLAY</span>
                </li>
              </ul>
              <div class="list_info">
                <p>출금 요청 시 7일의 출금 대기기간 후 최종 출금이 가능합니다.</p>
                <p>예치한 지갑의 비밀번호, 시드 문구 등은 사용자가 관리하여야 하며 분실 시 복구가 절대 불가능합니다.</p>
              </div>
              <p><m-checkbox size="md" v-model="check1" label="위 내용에 동의합니다."/></p>
              <div class="btn_wrap mgt32">
                <m-button-3 size="large" color="primary" class="full">예치</m-button-3>
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
          check1:'',
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

