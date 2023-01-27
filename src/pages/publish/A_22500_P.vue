<template>
    <div class="centerarea_box1">
        <div class="con_box">
          <h2 class="line_type">
            보내기
          </h2>
            <div class="box_contents">
              <div class="klip_box mgt0">
                  <span class="text_wrap">
                      <span class="ico_sb sb_klip">klip</span>
                      <span class="text_area">0xa590bc1aa0655d84f5e10xa590bc1aa0655d84f5e1</span>
                  </span>
                  <button class="ico_copy_g">copy</button>
               </div>
               <p class="mga32"> 
                <m-select v-model="select1"
                  :options="options"
                  >
                  <template v-slot:option="scope">
                    <q-item
                      v-bind="scope.itemProps"
                      v-on="scope.itemEvents"
                    >
                      <q-item-section avatar>
                        <q-avatar :class="scope.opt.icon">
                        </q-avatar>
                      </q-item-section>
                      <q-item-section>
                        <q-item-label v-html="scope.opt.label"></q-item-label>
                      </q-item-section>
                    </q-item>
                  </template>
                </m-select>
              </p>
              <div class="gray_box">
                <p class="center txt_dk font16 mgb4">보유 수량 (락업 제외)</p>
                <p class="center mgb4"><span class="font20 bold primary">9,000,000.9999999999</span> <span class="txt_dk">MON</span></p>
              </div>
              <div class="search_input mga32">
                <div class="txt_input_wrap">
                  <m-input filled v-model="text1" class="round_type" placeholder="보낼 수량"></m-input>
                  <span class="txt_wrap">MON</span>
                </div>
                <m-button-3 lined color="primary">최대</m-button-3>
              </div>
              <div class="divider1 small"/>
              <h3 class="between mgt32 mgb26">
                <span class="font14 txt_gray">예상수수료</span>
                <span class="font16">0 KLAY (무료이벤트중)</span>
              </h3>
              <div class="list_info">
                <p>전송 후 취소할 수 없으니 보내기 전 주소와 수량을 확인해주세요.</p>
                <p>지원하지 않는 지갑 혹은 잘못된 지갑 주소로 전송하여 발생하는 손해에 대하여 회사는 어떠한 책임도 지지 않습니다.</p>
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
          select1: ref(1),
          check1:'',
          options: [
        { value: 1, label: "몬코인", icon: "ico_mon1" },
        { value: 2, label: "klay", icon: "ico_klay" },
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

