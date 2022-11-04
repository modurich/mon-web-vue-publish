<template>
  <div class="centerarea_box01">
    <q-form>
      <div class="con_box">
        <div style="padding:32px">
          <m-button-3 @click="dailog2 = true" lined color="primary">자산 순서 변경</m-button-3>
        </div>
        <!-- S 자산 순서 변경 -->
        <m-dialog v-model="dailog2">
          <div class="dailog_wrap fixed_btn">
            <div class="dailog_top">
              <q-btn icon="close" flat v-close-popup />
            </div>
            <q-card-section class="dg_con">
              <p class="dialog_tit">자산 순서 변경</p>
              <draggable v-model="items">
                <transition-group>
                  <div class="product_list" v-for="item in items" :key="item">
                    <div>
                      <div class="prd_img">
                        <div class="img_area">
                          <img src="~assets/prd_logo.png" alt="profile" />
                        </div>
                        <div>
                          <span class="font16 txt_dk">{{item.name}}</span>
                          <span class="txt02">
                            {{item.number}}
                          </span>
                        </div>
                      </div>
                      <div class="ico_area">
                        <i class="ico_menu01" />
                      </div> 
                    </div>
                  </div>
                  </transition-group>
              </draggable>
              <!-- S 전체-->
            </q-card-section>
            <q-card-actions class="fixed_btn_wrap">
              <m-button-3 flat size="large" color="primary" v-close-popup class="full">저장하기</m-button-3>
            </q-card-actions>
          </div>
        </m-dialog>
        <!-- E 자산 순서 변경 -->
      </div>
    </q-form>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import { ref } from 'vue';
import MDialogBlank from 'src/components/MDialogBlank.vue';

export default {
  components: { MDialogBlank,draggable },
  name: 'A_10000_P',
  data() {
    return {
      dailog2: ref(false),
      items:[
        {name:'삼성전자우',number:'코스피 005930'},
        {name:'삼성전자우1',number:'코스피 005930'},
        {name:'삼성전자우2',number:'코스피 005930'},
        {name:'삼성전자우3',number:'코스피 005930'},
        {name:'삼성전자우4',number:'코스피 005930'},
        {name:'삼성전자우5',number:'코스피 005930'},
      ]
    }
  },
  methods: {
  }
};
</script>
