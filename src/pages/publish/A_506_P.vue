<template>
  <div class="centerarea_box01">
    <q-form>
      <div class="con_box">
        <div style="padding:32px">
          <m-button-3 @click="dailog2 = true" lined color="primary">NFT 추가보상 안내</m-button-3>
        </div>
        <!-- S 종목 공개하기 -->
        <m-dialog v-model="dailog2">
          <div class="dailog_wrap">
            <div class="dailog_top">
              <q-btn icon="close" flat v-close-popup />
            </div>
            <q-card-section class="dailog_contents">
              <p class="dialog_tit l_row_l">NFT 추가보상 안내</p>
              <div class="ico_top center mgb32">
                <i class="ico_reward"></i>
              </div>
              <div class="l_row">
               <p class="line26">스테이킹 보상 기능이 있는 NFT를 장착하고 MON을 스테이킹하면 sMON을 추가 보상 받을 수 있습니다.<br/><br/>
                다음 스냅샷 (한국시간 오전9시, UTC 0시)까지 수령하지 않은 보상은 자동소멸하니 매일 방문하여 보상 수령을 해주세요.</p>
              </div>
            </q-card-section>
          </div>
        </m-dialog>
        <!-- E 종목 공개하기 -->
      </div>
    </q-form>
  </div>
</template>

<script>
import { ref } from 'vue';
import MDialogBlank from 'src/components/MDialogBlank.vue';

export default {
  components: { MDialogBlank },
  name: 'A_10000_P',
  data() {
    return {
      dailog2: ref(false),
    }
  },
  methods: {
  }
};
</script>
