<template>
  <div class="centerarea_box1">
      <div class="con_box">
        <h2 class="line_type between">
          <span>가격대별 종목</span>
        </h2>
        <m-tabs class="line_type large" v-model="tab1" :items="tabs"/>
        <div class="tab_contents" v-if="tab1 == 'A'">
          <h3 class="between mgt16">
            <span>1,000원 미만</span>
            <span class="font12 txt_gray">전일종가 기준</span>
          </h3>
          <ul class="product_list">
            <li>
              <div class="prd_img">
                <div class="img_area small">
                  <img src="~assets/prd_logo.png" alt="logo" />
                </div>
                <div>
                  <div class="font16 txt_dk">삼성전자우</div>
                  <div class="txt02">코스피 005930</div>
                </div>
              </div>
              <div class="right flex">
                <span class="txt_blue1">
                  <span class="font16">₩ 2,049,000</span><br/>
                  <span class="tag_blue mgt4 small">+1.24%</span>
                </span>
                <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                indeterminate-icon="help" />
              </div> 
            </li>
            <li>
              <div class="prd_img">
                <div class="img_area small">
                  <img src="~assets/prd_logo.png" alt="logo" />
                </div>
                <div>
                  <div class="font16 txt_dk">삼성전자우</div>
                  <div class="txt02">코스피 005930</div>
                </div>
              </div>
              <div class="right flex">
                <span class="txt_blue1">
                  <span class="font16">₩ 2,049,000</span><br/>
                  <span class="tag_blue mgt4 small">+1.24%</span>
                </span>
                <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                indeterminate-icon="help" />
              </div> 
            </li>
            <li>
              <div class="prd_img">
                <div class="img_area small">
                  <img src="~assets/prd_logo.png" alt="logo" />
                </div>
                <div>
                  <div class="font16 txt_dk">삼성전자우</div>
                  <div class="txt02">코스피 005930</div>
                </div>
              </div>
              <div class="right flex">
                <span class="txt_red">
                  <span class="font16">₩ 2,049,000</span><br/>
                  <span class="tag_red mgt4 small">-1.24%</span>
                </span>
                <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                indeterminate-icon="help" />
              </div> 
            </li>
            <li>
              <div class="prd_img">
                <div class="img_area small">
                  <img src="~assets/prd_logo.png" alt="logo" />
                </div>
                <div>
                  <div class="font16 txt_dk">삼성전자우</div>
                  <div class="txt02">코스피 005930</div>
                </div>
              </div>
              <div class="right flex">
                <span class="txt_blue1">
                  <span class="font16">₩ 2,049,000</span><br/>
                  <span class="tag_blue mgt4 small">+1.24%</span>
                </span>
                <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                indeterminate-icon="help" />
              </div> 
            </li>
            <li>
              <div class="prd_img">
                <div class="img_area small">
                  <img src="~assets/prd_logo.png" alt="logo" />
                </div>
                <div>
                  <div class="font16 txt_dk">삼성전자우</div>
                  <div class="txt02">코스피 005930</div>
                </div>
              </div>
              <div class="right flex">
                <span class="txt_blue1">
                  <span class="font16">₩ 2,049,000</span><br/>
                  <span class="tag_blue mgt4 small">+1.24%</span>
                </span>
                <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                indeterminate-icon="help" />
              </div> 
            </li>
          </ul>
          <div class="btn_wrap">
            <m-button-3 size="large" class="font16 full" color="textPrimary">더보기</m-button-3>
          </div>
          <div class="divider"/>
          <h3 class="between mgt16">
            <span>1,000원 ~ 5,000원 미만</span>
          </h3>
          <ul class="product_list">
            <li>
              <div class="prd_img">
                <div class="img_area small">
                  <img src="~assets/prd_logo.png" alt="logo" />
                </div>
                <div>
                  <div class="font16 txt_dk">삼성전자우</div>
                  <div class="txt02">코스피 005930</div>
                </div>
              </div>
              <div class="right flex">
                <span class="txt_blue1">
                  <span class="font16">₩ 2,049,000</span><br/>
                  <span class="tag_blue mgt4 small">+1.24%</span>
                </span>
                <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                indeterminate-icon="help" />
              </div> 
            </li>
            <li>
              <div class="prd_img">
                <div class="img_area small">
                  <img src="~assets/prd_logo.png" alt="logo" />
                </div>
                <div>
                  <div class="font16 txt_dk">삼성전자우</div>
                  <div class="txt02">코스피 005930</div>
                </div>
              </div>
              <div class="right flex">
                <span class="txt_blue1">
                  <span class="font16">₩ 2,049,000</span><br/>
                  <span class="tag_blue mgt4 small">+1.24%</span>
                </span>
                <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                indeterminate-icon="help" />
              </div> 
            </li>
            <li>
              <div class="prd_img">
                <div class="img_area small">
                  <img src="~assets/prd_logo.png" alt="logo" />
                </div>
                <div>
                  <div class="font16 txt_dk">삼성전자우</div>
                  <div class="txt02">코스피 005930</div>
                </div>
              </div>
              <div class="right flex">
                <span class="txt_red">
                  <span class="font16">₩ 2,049,000</span><br/>
                  <span class="tag_red mgt4 small">-1.24%</span>
                </span>
                <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                indeterminate-icon="help" />
              </div> 
            </li>
            <li>
              <div class="prd_img">
                <div class="img_area small">
                  <img src="~assets/prd_logo.png" alt="logo" />
                </div>
                <div>
                  <div class="font16 txt_dk">삼성전자우</div>
                  <div class="txt02">코스피 005930</div>
                </div>
              </div>
              <div class="right flex">
                <span class="txt_blue1">
                  <span class="font16">₩ 2,049,000</span><br/>
                  <span class="tag_blue mgt4 small">+1.24%</span>
                </span>
                <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                indeterminate-icon="help" />
              </div> 
            </li>
            <li>
              <div class="prd_img">
                <div class="img_area small">
                  <img src="~assets/prd_logo.png" alt="logo" />
                </div>
                <div>
                  <div class="font16 txt_dk">삼성전자우</div>
                  <div class="txt02">코스피 005930</div>
                </div>
              </div>
              <div class="right flex">
                <span class="txt_blue1">
                  <span class="font16">₩ 2,049,000</span><br/>
                  <span class="tag_blue mgt4 small">+1.24%</span>
                </span>
                <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                indeterminate-icon="help" />
              </div> 
            </li>
          </ul>
          <div class="btn_wrap">
            <m-button-3 size="large" class="font16 full" color="textPrimary">더보기</m-button-3>
          </div>
          <div class="divider"/>
          <h3 class="between mgt16">
            <span>5,000원 ~ 10,000원 미만</span>
          </h3>
          <ul class="product_list">
            <li>
              <div class="prd_img">
                <div class="img_area small">
                  <img src="~assets/prd_logo.png" alt="logo" />
                </div>
                <div>
                  <div class="font16 txt_dk">삼성전자우</div>
                  <div class="txt02">코스피 005930</div>
                </div>
              </div>
              <div class="right flex">
                <span class="txt_blue1">
                  <span class="font16">₩ 2,049,000</span><br/>
                  <span class="tag_blue mgt4 small">+1.24%</span>
                </span>
                <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                indeterminate-icon="help" />
              </div> 
            </li>
            <li>
              <div class="prd_img">
                <div class="img_area small">
                  <img src="~assets/prd_logo.png" alt="logo" />
                </div>
                <div>
                  <div class="font16 txt_dk">삼성전자우</div>
                  <div class="txt02">코스피 005930</div>
                </div>
              </div>
              <div class="right flex">
                <span class="txt_blue1">
                  <span class="font16">₩ 2,049,000</span><br/>
                  <span class="tag_blue mgt4 small">+1.24%</span>
                </span>
                <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                indeterminate-icon="help" />
              </div> 
            </li>
            <li>
              <div class="prd_img">
                <div class="img_area small">
                  <img src="~assets/prd_logo.png" alt="logo" />
                </div>
                <div>
                  <div class="font16 txt_dk">삼성전자우</div>
                  <div class="txt02">코스피 005930</div>
                </div>
              </div>
              <div class="right flex">
                <span class="txt_red">
                  <span class="font16">₩ 2,049,000</span><br/>
                  <span class="tag_red mgt4 small">-1.24%</span>
                </span>
                <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                indeterminate-icon="help" />
              </div> 
            </li>
            <li>
              <div class="prd_img">
                <div class="img_area small">
                  <img src="~assets/prd_logo.png" alt="logo" />
                </div>
                <div>
                  <div class="font16 txt_dk">삼성전자우</div>
                  <div class="txt02">코스피 005930</div>
                </div>
              </div>
              <div class="right flex">
                <span class="txt_blue1">
                  <span class="font16">₩ 2,049,000</span><br/>
                  <span class="tag_blue mgt4 small">+1.24%</span>
                </span>
                <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                indeterminate-icon="help" />
              </div> 
            </li>
            <li>
              <div class="prd_img">
                <div class="img_area small">
                  <img src="~assets/prd_logo.png" alt="logo" />
                </div>
                <div>
                  <div class="font16 txt_dk">삼성전자우</div>
                  <div class="txt02">코스피 005930</div>
                </div>
              </div>
              <div class="right flex">
                <span class="txt_blue1">
                  <span class="font16">₩ 2,049,000</span><br/>
                  <span class="tag_blue mgt4 small">+1.24%</span>
                </span>
                <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                indeterminate-icon="help" />
              </div> 
            </li>
          </ul>
          <div class="btn_wrap">
            <m-button-3 size="large" class="font16 full" color="textPrimary">더보기</m-button-3>
          </div>
          <div class="divider"/>
          <h3 class="between mgt16">
            <span>10,000원 ~ 50,000원 미만</span>
          </h3>
          <ul class="product_list">
            <li>
              <div class="prd_img">
                <div class="img_area small">
                  <img src="~assets/prd_logo.png" alt="logo" />
                </div>
                <div>
                  <div class="font16 txt_dk">삼성전자우</div>
                  <div class="txt02">코스피 005930</div>
                </div>
              </div>
              <div class="right flex">
                <span class="txt_blue1">
                  <span class="font16">₩ 2,049,000</span><br/>
                  <span class="tag_blue mgt4 small">+1.24%</span>
                </span>
                <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                indeterminate-icon="help" />
              </div> 
            </li>
            <li>
              <div class="prd_img">
                <div class="img_area small">
                  <img src="~assets/prd_logo.png" alt="logo" />
                </div>
                <div>
                  <div class="font16 txt_dk">삼성전자우</div>
                  <div class="txt02">코스피 005930</div>
                </div>
              </div>
              <div class="right flex">
                <span class="txt_blue1">
                  <span class="font16">₩ 2,049,000</span><br/>
                  <span class="tag_blue mgt4 small">+1.24%</span>
                </span>
                <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                indeterminate-icon="help" />
              </div> 
            </li>
            <li>
              <div class="prd_img">
                <div class="img_area small">
                  <img src="~assets/prd_logo.png" alt="logo" />
                </div>
                <div>
                  <div class="font16 txt_dk">삼성전자우</div>
                  <div class="txt02">코스피 005930</div>
                </div>
              </div>
              <div class="right flex">
                <span class="txt_red">
                  <span class="font16">₩ 2,049,000</span><br/>
                  <span class="tag_red mgt4 small">-1.24%</span>
                </span>
                <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                indeterminate-icon="help" />
              </div> 
            </li>
            <li>
              <div class="prd_img">
                <div class="img_area small">
                  <img src="~assets/prd_logo.png" alt="logo" />
                </div>
                <div>
                  <div class="font16 txt_dk">삼성전자우</div>
                  <div class="txt02">코스피 005930</div>
                </div>
              </div>
              <div class="right flex">
                <span class="txt_blue1">
                  <span class="font16">₩ 2,049,000</span><br/>
                  <span class="tag_blue mgt4 small">+1.24%</span>
                </span>
                <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                indeterminate-icon="help" />
              </div> 
            </li>
            <li>
              <div class="prd_img">
                <div class="img_area small">
                  <img src="~assets/prd_logo.png" alt="logo" />
                </div>
                <div>
                  <div class="font16 txt_dk">삼성전자우</div>
                  <div class="txt02">코스피 005930</div>
                </div>
              </div>
              <div class="right flex">
                <span class="txt_blue1">
                  <span class="font16">₩ 2,049,000</span><br/>
                  <span class="tag_blue mgt4 small">+1.24%</span>
                </span>
                <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                indeterminate-icon="help" />
              </div> 
            </li>
          </ul>
          <div class="btn_wrap">
            <m-button-3 size="large" class="font16 full" color="textPrimary">더보기</m-button-3>
          </div>
          <div class="divider"/>
          <h3 class="between mgt16">
            <span>50,000원 ~ 100,000원 미만</span>
          </h3>
          <ul class="product_list">
            <li>
              <div class="prd_img">
                <div class="img_area small">
                  <img src="~assets/prd_logo.png" alt="logo" />
                </div>
                <div>
                  <div class="font16 txt_dk">삼성전자우</div>
                  <div class="txt02">코스피 005930</div>
                </div>
              </div>
              <div class="right flex">
                <span class="txt_blue1">
                  <span class="font16">₩ 2,049,000</span><br/>
                  <span class="tag_blue mgt4 small">+1.24%</span>
                </span>
                <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                indeterminate-icon="help" />
              </div> 
            </li>
            <li>
              <div class="prd_img">
                <div class="img_area small">
                  <img src="~assets/prd_logo.png" alt="logo" />
                </div>
                <div>
                  <div class="font16 txt_dk">삼성전자우</div>
                  <div class="txt02">코스피 005930</div>
                </div>
              </div>
              <div class="right flex">
                <span class="txt_blue1">
                  <span class="font16">₩ 2,049,000</span><br/>
                  <span class="tag_blue mgt4 small">+1.24%</span>
                </span>
                <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                indeterminate-icon="help" />
              </div> 
            </li>
            <li>
              <div class="prd_img">
                <div class="img_area small">
                  <img src="~assets/prd_logo.png" alt="logo" />
                </div>
                <div>
                  <div class="font16 txt_dk">삼성전자우</div>
                  <div class="txt02">코스피 005930</div>
                </div>
              </div>
              <div class="right flex">
                <span class="txt_red">
                  <span class="font16">₩ 2,049,000</span><br/>
                  <span class="tag_red mgt4 small">-1.24%</span>
                </span>
                <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                indeterminate-icon="help" />
              </div> 
            </li>
            <li>
              <div class="prd_img">
                <div class="img_area small">
                  <img src="~assets/prd_logo.png" alt="logo" />
                </div>
                <div>
                  <div class="font16 txt_dk">삼성전자우</div>
                  <div class="txt02">코스피 005930</div>
                </div>
              </div>
              <div class="right flex">
                <span class="txt_blue1">
                  <span class="font16">₩ 2,049,000</span><br/>
                  <span class="tag_blue mgt4 small">+1.24%</span>
                </span>
                <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                indeterminate-icon="help" />
              </div> 
            </li>
            <li>
              <div class="prd_img">
                <div class="img_area small">
                  <img src="~assets/prd_logo.png" alt="logo" />
                </div>
                <div>
                  <div class="font16 txt_dk">삼성전자우</div>
                  <div class="txt02">코스피 005930</div>
                </div>
              </div>
              <div class="right flex">
                <span class="txt_blue1">
                  <span class="font16">₩ 2,049,000</span><br/>
                  <span class="tag_blue mgt4 small">+1.24%</span>
                </span>
                <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                indeterminate-icon="help" />
              </div> 
            </li>
          </ul>
          <div class="btn_wrap">
            <m-button-3 size="large" class="font16 full" color="textPrimary">더보기</m-button-3>
          </div>
          <div class="divider"/>
          <h3 class="between mgt16">
            <span>100,000원 이상</span>
          </h3>
          <ul class="product_list">
            <li>
              <div class="prd_img">
                <div class="img_area small">
                  <img src="~assets/prd_logo.png" alt="logo" />
                </div>
                <div>
                  <div class="font16 txt_dk">삼성전자우</div>
                  <div class="txt02">코스피 005930</div>
                </div>
              </div>
              <div class="right flex">
                <span class="txt_blue1">
                  <span class="font16">₩ 2,049,000</span><br/>
                  <span class="tag_blue mgt4 small">+1.24%</span>
                </span>
                <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                indeterminate-icon="help" />
              </div> 
            </li>
            <li>
              <div class="prd_img">
                <div class="img_area small">
                  <img src="~assets/prd_logo.png" alt="logo" />
                </div>
                <div>
                  <div class="font16 txt_dk">삼성전자우</div>
                  <div class="txt02">코스피 005930</div>
                </div>
              </div>
              <div class="right flex">
                <span class="txt_blue1">
                  <span class="font16">₩ 2,049,000</span><br/>
                  <span class="tag_blue mgt4 small">+1.24%</span>
                </span>
                <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                indeterminate-icon="help" />
              </div> 
            </li>
            <li>
              <div class="prd_img">
                <div class="img_area small">
                  <img src="~assets/prd_logo.png" alt="logo" />
                </div>
                <div>
                  <div class="font16 txt_dk">삼성전자우</div>
                  <div class="txt02">코스피 005930</div>
                </div>
              </div>
              <div class="right flex">
                <span class="txt_red">
                  <span class="font16">₩ 2,049,000</span><br/>
                  <span class="tag_red mgt4 small">-1.24%</span>
                </span>
                <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                indeterminate-icon="help" />
              </div> 
            </li>
            <li>
              <div class="prd_img">
                <div class="img_area small">
                  <img src="~assets/prd_logo.png" alt="logo" />
                </div>
                <div>
                  <div class="font16 txt_dk">삼성전자우</div>
                  <div class="txt02">코스피 005930</div>
                </div>
              </div>
              <div class="right flex">
                <span class="txt_blue1">
                  <span class="font16">₩ 2,049,000</span><br/>
                  <span class="tag_blue mgt4 small">+1.24%</span>
                </span>
                <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                indeterminate-icon="help" />
              </div> 
            </li>
            <li>
              <div class="prd_img">
                <div class="img_area small">
                  <img src="~assets/prd_logo.png" alt="logo" />
                </div>
                <div>
                  <div class="font16 txt_dk">삼성전자우</div>
                  <div class="txt02">코스피 005930</div>
                </div>
              </div>
              <div class="right flex">
                <span class="txt_blue1">
                  <span class="font16">₩ 2,049,000</span><br/>
                  <span class="tag_blue mgt4 small">+1.24%</span>
                </span>
                <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                indeterminate-icon="help" />
              </div> 
            </li>
          </ul>
          <div class="btn_wrap">
            <m-button-3 size="large" class="font16 full" color="textPrimary">더보기</m-button-3>
          </div>
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
                {label:'주식', value:'A', icon:''},
                {label:'코인', value:'B', icon:''},
            ],
        }
    }
   
};
</script>
<style scoped>

</style>
