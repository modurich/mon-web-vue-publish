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
                  <div class="product_list" v-for="item in items" :key="item.name">
                    <div>
                      <div class="prd_img">
                        <div class="img_area">
                          <img :src="item.img" alt="profile" />
                        </div>
                        <div>
                          <div class="font16 txt_dk">{{item.name}}</div>
                          <div class="txt02">{{item.number}}</div>
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
        {name:'삼성전자우',number:'코스피 005930', img:'img/prd_logo.png'},
        {name:'SKBTV',number:'코스피 005930', img:'img/prd_logo.png'},
        {name:'삼성전자우2',number:'코스피 005930', img:'img/prd_logo.png'},
        {name:'LG전자',number:'코스피 005930', img:'img/prd_logo.png'},
        {name:'삼성전자우4',number:'코스피 005930', img:'img/prd_logo.png'},
        {name:'삼성전자우5',number:'코스피 005930', img:'img/prd_logo.png'},
      ]
    }
  },
  methods: {
  }
};
</script>
