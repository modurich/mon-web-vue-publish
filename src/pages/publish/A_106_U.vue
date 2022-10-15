<template>
  <div class="centerarea_box01">
    <q-form>
      <div class="con_box">
        <div style="padding:32px">
          <m-button-3 @click="dailog2 = true" lined color="primary">NFT 장착 안내</m-button-3>
        </div>
        <!-- S NFT 장착 안내 -->
        <m-dialog v-model="dailog2">
          <div class="dailog_wrap">
            <div class="dailog_top">
              <q-btn icon="close" flat v-close-popup />
            </div>
            <q-card-section class="dailog_contents code_wrap">
              <p class="dialog_tit l_row_l">NFT 장착 안내</p>
              <p class="line26 l_row_l">
                보유 중인 NFT를 슬롯에 장착해보세요.<br/>
                장착 효과를 보유한 NFT를 장착하면 효과가 활성화됩니다.
                지갑 해제 시 장착도 해제되니 주의해주세요.
              </p>
            
              <div class="btn_wrap l_row_l">
                <m-button-3 color="primary" size="large" class="full">내 NTF 보기</m-button-3>
              </div>
            </q-card-section>
          </div>
        </m-dialog>
        <!-- E NFT 장착 안내 -->
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
