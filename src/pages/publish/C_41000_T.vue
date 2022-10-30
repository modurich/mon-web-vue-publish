<template>
    <div class="centerarea_box1">
        <div class="con_box">
          <h2 class="line_type">
            임시저장
          </h2>
          <m-tabs class="line_type large" v-model="tab1" :items="tabs" />
            <div class="tab_contents" v-if="tab1 == 'A'">
              <!-- S 인사이트 -->
              <div class="radio_wrap right">
                  <m-radio v-model="rad1" val="A" label="주식"/>
                  <m-radio v-model="rad1" val="B" label="코인"/>
              </div>
              <ul class="temporary_list">
                <li>
                  <p class="between">
                    <span class="font12">2022.10.20 12:58:36 (UTC +9)</span>
                    <button class="ico_close">close</button>
                  </p>
                  <div class="prd_img">
                    <div class="img_area">
                      <img src="~assets/prd_logo.png" alt="삼성전자" />
                    </div>
                    <div class="tit_area">
                      <span class="txt01">삼성전자우</span>
                    </div>
                  </div>
                  <p class="tit_txt">내일 상한가 보장한다</p>
                </li>
                <li>
                  <p class="between">
                    <span class="font12">2022.10.20 12:58:36 (UTC +9)</span>
                    <button class="ico_close">close</button>
                  </p>
                  <div class="prd_img">
                    <div class="img_area">
                      <img src="~assets/prd_logo.png" alt="삼성전자" />
                    </div>
                    <div class="tit_area">
                      <span class="txt01">삼성전자우</span>
                    </div>
                  </div>
                  <p class="tit_txt">내일 상한가 보장한다</p>
                </li>
                <li>
                  <p class="between">
                    <span class="font12">2022.10.20 12:58:36 (UTC +9)</span>
                    <button class="ico_close">close</button>
                  </p>
                  <div class="prd_img">
                    <div class="img_area">
                      <img src="~assets/prd_logo.png" alt="삼성전자" />
                    </div>
                    <div class="tit_area">
                      <span class="txt01">삼성전자우</span>
                    </div>
                  </div>
                  <p class="tit_txt">내일 상한가 보장한다</p>
                </li>
              </ul>
              <!-- E 인사이트 -->
            </div>
            <div class="tab_contents" v-if="tab1 == 'B'">
              <!--S BLASH-->
              <div class="radio_wrap right">
                  <m-radio v-model="rad1" val="A" label="주식"/>
                  <m-radio v-model="rad1" val="B" label="코인"/>
              </div>
              <ul class="temporary_list">
                <li>
                  <p class="between">
                    <span class="font12">2022.10.20 12:58:36 (UTC +9)</span>
                    <button class="ico_close">close</button>
                  </p>
                  <div class="prd_img">
                    <div class="img_area">
                      <img src="~assets/sb_bitcoin.svg" alt="bitcoin" />
                    </div>
                    <div class="tit_area">
                      <span class="txt01">Bitcoin</span>
                    </div>
                  </div>
                  <p class="tit_txt">내일 상한가 보장한다</p>
                </li>
                <li>
                  <p class="between">
                    <span class="font12">2022.10.20 12:58:36 (UTC +9)</span>
                    <button class="ico_close">close</button>
                  </p>
                  <div class="prd_img">
                    <div class="img_area">
                      <img src="~assets/sb_bitcoin.svg" alt="bitcoin" />
                    </div>
                    <div class="tit_area">
                      <span class="txt01">Bitcoin</span>
                    </div>
                  </div>
                  <p class="tit_txt">내일 상한가 보장한다</p>
                </li>
                <li>
                  <p class="between">
                    <span class="font12">2022.10.20 12:58:36 (UTC +9)</span>
                    <button class="ico_close">close</button>
                  </p>
                  <div class="prd_img">
                    <div class="img_area">
                      <img src="~assets/sb_bitcoin.svg" alt="bitcoin" />
                    </div>
                    <div class="tit_area">
                      <span class="txt01">Bitcoin</span>
                    </div>
                  </div>
                  <p class="tit_txt">내일 상한가 보장한다</p>
                </li>
              </ul>
              <!--E BLASH-->
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
  data() {
        return {
          select1: ref("전체"),
          options: [
            '전체', '선택1','선택2','선택3'
          ],
          rad1:ref('A'),
          tab1: ref('A'),
          tabs: [
            { label: '인사이트', value: 'A', icon: '' },
            { label: 'BLASH', value: 'B', icon: '' },
           
          ],
          progress: 0.4
        }
    },
    methods: {
    }
};
</script>
<style scoped>

</style>

