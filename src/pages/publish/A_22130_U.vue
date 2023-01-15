<template>
  <div class="centerarea_box01">
    <q-form>
      <div class="con_box">
        <div style="padding:32px">
          <m-button-3 @click="dailog2 = true" lined color="primary">PIN코드 입력</m-button-3>
        </div>
        <!-- S PIN코드 입력 -->
        <m-dialog v-model="dailog2">
          <div class="dailog_wrap">
            <div class="dailog_top">
              <q-btn icon="close" flat v-close-popup />
            </div>
            <q-card-section class="dailog_contents">
              <p class="dialog_tit l_row_l">PIN코드 입력</p>
              <p>등록한 PIN코드 숫자 6자리를 입력해주세요.</p>
              <div class="input_wrap">
                <m-input v-model="text1" size="large"/>
                <m-input v-model="text1" />
                <m-input v-model="text1" />
                <m-input v-model="text1" />
                <m-input v-model="text1" />
                <m-input v-model="text1" />
              </div>
              <div class="btn_wrap l_row mgt32"><m-button-3 color="textPrimary" class="full"><span class="btn_view">PIN코드 찾기</span></m-button-3></div>
            </q-card-section>
          </div>
        </m-dialog>
        <!-- E PIN코드 입력 -->
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
      tab1: ref('G'),
      tabs: [
        { label: '은행', value: 'G', icon: '' },
        { label: '증권사', value: 'F', icon: '' }
      ],
    }
  },
  methods: {
  }
};
</script>
