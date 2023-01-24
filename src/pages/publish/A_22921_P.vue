<template>
    <div class="centerarea_box1">
        <div class="con_box">
          <h2 class="line_type">
            NFT 보내기
          </h2>
            <div class="box_contents">
              <div class="klip_box mgt0">
                  <span class="text_wrap">
                      <span class="ico_sb sb_klip">klip</span>
                      <span class="text_area">0xa590bc1aa0655d84f5e10xa590bc1aa0655d84f5e1</span>
                  </span>
                  <button class="ico_copy_g">copy</button>
               </div>
              <div class="gray_box mgt32">
                <div class="center mgb16"><img src="~assets/nft_img01.png" alt="" width="80px" height="80px" /></div>
                <p class="center primary font18 bold mgb8">웰컴 카드 - 골드</p>
                <p class="center txt_dk mgb0">몬스탁에 가입해주셔서 감사합니다. <br>
                웰컴 카드 보유자에게는 행운이 찾아올지도...!</p>
              </div>
              <h3 class="between mgt32 mgb26">
                <span class="font14 txt_gray">예상수수료</span>
                <span class="font16">? KLAY (연결된 지갑에서 확인)</span>
              </h3>
              <div>
                <m-input filled v-model="text1" class="round_type full" placeholder="받는 지갑 주소"></m-input>
              </div>
              <div class="divider1 small"/>
              
              <div class="list_info">
                <p>전송 후 취소할 수 없으니 보내기 전 주소와 NFT를 확인해주세요.</p>
                <p>지원하지 않는 지갑 혹은 잘못된 지갑 주소로 전송하여 발생하는 손해에 대하여 회사는 어떠한 책임도 지지 않습니다.</p>
                <p>외부 지갑의 트랜잭션 수수료는 연결된 지갑의 정책에 따라 다르니 해당 지갑에서 수수료를 확인해주세요.</p>
                <p>트랜잭션 수수료가 부족한 경우 전송이 실패하니 전송 시 KLAY 잔고가 있는지 확인해주세요.</p>
              </div>
              <p><m-checkbox size="md" v-model="check1" label="위 내용에 동의합니다."/></p>
              <div class="btn_wrap mgt32">
                <m-button-3 size="large" color="primary" class="full">다음</m-button-3>
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

