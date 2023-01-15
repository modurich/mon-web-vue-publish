<template>
  <div class="centerarea_box01">
    <q-form>
      <div class="con_box">
        <div style="padding:32px">
          <m-button-3 @click="dailog2 = true" lined color="primary">매수고가 설정</m-button-3>
        </div>
        <!-- S 매수고가 설정 -->
        <m-dialog v-model="dailog2">
          <div class="dailog_wrap">
            <div class="dailog_top">
              <q-btn icon="close" flat v-close-popup />
            </div>
            <q-card-section class="dailog_contents">
              <p class="dialog_tit l_row_l">매수고가 설정</p>
              <div class="gray_box01">
                <p class="between">
                <span class="txt_label">선택한 가격</span>
                <span class="txt_con primary">3,020원</span>
                </p>
              </div>
              <div class="setting_scroll">
              <ul class="list_type1 line01">
                <li>
                  <a href="#">
                    <span class="txt_area">
                      <span class="txt01 txt_blue1">3,020</span>
                      <span class="tag_blue small">+1.24%</span>
                    </span>
                    <span class="ico_area">
                      <i class="ico_check"/>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="txt_area">
                      <span class="txt01 txt_blue1">3,020</span>
                      <span class="tag_blue small">+1.24%</span>
                    </span>
                    <span class="ico_area">
                      <i class="ico_check"/>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="txt_area">
                      <span class="txt01 txt_blue1">3,020</span>
                      <span class="tag_blue small">+1.24%</span>
                    </span>
                    <span class="ico_area">
                      <i class="ico_check"/>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" class="active">
                    <span class="txt_area">
                      <span class="txt01 txt_blue1">3,020</span>
                      <span class="tag_blue small">+1.24%</span>
                    </span>
                    <span class="ico_area">
                      <i class="ico_check"/>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="txt_area">
                      <span class="txt01 txt_red1">3,020</span>
                      <span class="tag_red small">-3.61%</span>
                    </span>
                    <span class="ico_area">
                      <i class="ico_check"/>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="txt_area">
                      <span class="txt01 txt_red1">3,020</span>
                      <span class="tag_red small">-3.61%</span>
                    </span>
                    <span class="ico_area">
                      <span class="primary">현재가</span>
                      <i class="ico_check"/>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                  <span class="txt_area">
                    <span class="txt01 txt_red1">3,020</span>
                    <span class="tag_red small">-3.61%</span>
                  </span>
                  <span class="ico_area">
                    <i class="ico_check"/>
                  </span>
                  </a>
                </li>
                
              </ul>
              </div>
              <div class="btn_wrap l_row mgt32"><m-button-3 color="primary" class="full" size="large">저장하기</m-button-3></div>
            </q-card-section>
          </div>
        </m-dialog>
        <!-- E 매수고가 설정 -->
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
