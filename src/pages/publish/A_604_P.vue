<template>
  <div class="centerarea_box01">
    <q-form>
      <div class="con_box">
        <div style="padding:32px">
          <m-button-3 @click="dailog2 = true" lined color="primary">공유하기</m-button-3>
        </div>
        <!-- S 공유하기 -->
        <m-dialog v-model="dailog2">
          <div class="dailog_wrap">
            <div class="dailog_top">
              <q-btn icon="close" flat v-close-popup />
            </div>
            <q-card-section class="dailog_contents">
              <p class="dialog_tit l_row_l">공유하기</p>
              <p class="between">
                <button class="flex txt_dk">URL 복사<i class="ico_copy"/></button>
                <button class="flex primary">원문 복사<i class="ico_copy_p"/></button>
              </p>
              <p>https://docs.google.com/presentation/d/1K5aJf626CD9MCxq2...</p>
              <div class="btn_area_center big">
                <button>
                  <i class="ico ico_share_na"/>
                  <span class="txt_area">네이버카페</span>
                </button>
                <button>
                  <i class="ico ico_share_da"/>
                  <span class="txt_area">다음카페</span>
                </button>
                <button>
                  <i class="ico ico_share_in01"/>
                  <span class="txt_area">인스타</span>
                </button>
                <button>
                  <i class="ico ico_share_in02"/>
                  <span class="txt_area">인스타</span>
                </button>
                <button>
                  <i class="ico ico_share_tw"/>
                  <span class="txt_area">트위터</span>
                </button>
                <button>
                  <i class="ico ico_share_fa"/>
                  <span class="txt_area">페이스북</span>
                </button>
                <button>
                  <i class="ico ico_share_ba"/>
                  <span class="txt_area">밴드</span>
                </button>
                <button>
                  <i class="ico ico_share_ka"/>
                  <span class="txt_area">카카오스토리</span>
                </button>
              </div>
            </q-card-section>
          </div>
        </m-dialog>
        <!-- E 공유하기 -->
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
      text1: ref(''),
      text2: ref(''),
      text3: ref(''),
      check1: ref(true),
      check2: ref(false),
      check3: ref(false),
      check4: ref(false),
      check5: ref(false),
      check6: ref(false),
      select1: ref(null),
      options: [
        'South Korea (+82)', '선택1', '선택2', '선택3', '선택4'
      ],
      dailog2: ref(false),
      polcyType: ref('01')
    }
  },
  methods: {
    polcyPopup(type) {
      this.polcyType = type;
      this.dailog2 = true;
    }
  }
};
</script>
