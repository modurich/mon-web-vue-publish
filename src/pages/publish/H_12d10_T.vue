<template>
  <div class="centerarea_box1">
      <div class="con_box">
        <h2 class="line_type between">
          <span>상승률 TOP 100</span>
        </h2>
        <m-tabs class="line_type large" v-model="tab1" :items="tabs"/>
        <div class="tab_contents" v-if="tab1 == 'A'">
          <m-select v-model="select1" :options="options" class="mgt16"/>
          <!-- S 상승 -->
          <ul class="product_list">
            <li>
              <div class="prd_img">
                <span class="txt_number primary">1</span>
                <div class="img_area small">
                  <img src="~assets/prd_logo.png" alt="profile" />
                </div>
                <div class="tit_area">
                  <span class="txt01">삼성전자우</span>
                  <span class="txt02">
                    코스피 005930
                  </span>
                </div>
              </div>
              <div class="right flex">
                <span>
                  <span class="tag_blue mgb4">+1.24%</span><br/>
                  <span class="font12">₩ 352,100</span>
                </span>
              </div> 
            </li>
            <li>
              <div class="prd_img">
                <span class="txt_number primary">1</span>
                <div class="img_area small">
                  <img src="~assets/prd_logo.png" alt="profile" />
                </div>
                <div class="tit_area">
                  <span class="txt01">삼성전자우</span>
                  <span class="txt02">
                    코스피 005930
                  </span>
                </div>
              </div>
              <div class="right flex">
                <span>
                  <span class="tag_blue mgb4">+1.24%</span><br/>
                  <span class="font12">₩ 352,100</span>
                </span>
              </div> 
            </li>
            <li>
              <div class="prd_img">
                <span class="txt_number primary">100</span>
                <div class="img_area small">
                  <img src="~assets/prd_logo.png" alt="profile" />
                </div>
                <div class="tit_area">
                  <span class="txt01">삼성전자우</span>
                  <span class="txt02">
                    코스피 005930
                  </span>
                </div>
              </div>
              <div class="right flex">
                <span>
                  <span class="tag_blue mgb4">+1.24%</span><br/>
                  <span class="font12">₩ 352,100</span>
                </span>
              </div> 
            </li>
          </ul>
          <!-- <div class="btn_wrap">
            <m-button-3 size="large" class="font16 full" color="textPrimary">더보기</m-button-3>
          </div> -->
          <!-- E 상승 -->
          <!-- S 하락 -->
          <ul class="product_list">
            <li>
              <div class="prd_img">
                <span class="txt_number primary">1</span>
                <div class="img_area small">
                  <img src="~assets/prd_logo.png" alt="profile" />
                </div>
                <div class="tit_area">
                  <span class="txt01">삼성전자우</span>
                  <span class="txt02">
                    코스피 005930
                  </span>
                </div>
              </div>
              <div class="right flex">
                <span>
                  <span class="tag_red mgb4">-1.24%</span><br/>
                  <span class="font12">₩ 352,100</span>
                </span>
              </div> 
            </li>
            <li>
              <div class="prd_img">
                <span class="txt_number primary">1</span>
                <div class="img_area small">
                  <img src="~assets/prd_logo.png" alt="profile" />
                </div>
                <div class="tit_area">
                  <span class="txt01">삼성전자우</span>
                  <span class="txt02">
                    코스피 005930
                  </span>
                </div>
              </div>
              <div class="right flex">
                <span>
                  <span class="tag_red mgb4">-1.24%</span><br/>
                  <span class="font12">₩ 352,100</span>
                </span>
              </div> 
            </li>
            <li>
              <div class="prd_img">
                <span class="txt_number primary">100</span>
                <div class="img_area small">
                  <img src="~assets/prd_logo.png" alt="profile" />
                </div>
                <div class="tit_area">
                  <span class="txt01">삼성전자우</span>
                  <span class="txt02">
                    코스피 005930
                  </span>
                </div>
              </div>
              <div class="right flex">
                <span>
                  <span class="tag_red mgb4">-1.24%</span><br/>
                  <span class="font12">₩ 352,100</span>
                </span>
              </div> 
            </li>
          </ul>
          <!-- <div class="btn_wrap">
            <m-button-3 size="large" class="font16 full" color="textPrimary">더보기</m-button-3>
          </div> -->
          <!-- E 하락 -->
        </div>
      </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'Laside',
    data() {
        return {
            check1:ref(true),
            check2:ref(true),
            check3:ref(true),
            check4:ref(true),
            check5:ref(true),
            slide: ref('1'),
            toggle1: ref(false),
            tab1:ref('A'),
            val: ref(false),
            tabs:[
                {label:'전체', value:'A', icon:''},
                {label:'주식', value:'B', icon:''},
                {label:'코인', value:'C', icon:''},
            ],
        }
    }
   
};
</script>
<style scoped>

</style>
