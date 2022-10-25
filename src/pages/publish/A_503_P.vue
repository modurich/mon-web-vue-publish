<template>
  <div class="centerarea_box01">
    <q-form>
      <div class="con_box">
        <div style="padding:32px">
          <m-button-3 @click="dailog2 = true" lined color="primary">팔로우 취소</m-button-3>
        </div>
        <!-- S 종목 공개하기 -->
        <m-dialog v-model="dailog2">
          <div class="dailog_wrap">
            <div class="dailog_top">
              <q-btn icon="close" flat v-close-popup />
            </div>
            <q-card-section class="dailog_contents">
              <p class="dialog_tit l_row_l">팔로우 취소</p>
              <div class="ico_top center mgb16">
                <i class="ico_error"></i>
              </div>
              <div class="l_row">
               <p class="font12">해당 플레이어 팔로잉을 취소하시겠습니까? <br/>
                취소시 플레이어가 작성한 새 콘텐츠 알림을 받을 수 없습니다.</p>
              </div>
              <div class="btn_wrap l_row_l">
                <m-button-3 color="red" size="large" class="full">취소하기</m-button-3>
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
