<template>
  <div class="centerarea_box1">
      <div class="con_box">
        <h2 class="line_type">실시간 순위 TOP 100</h2>
        <m-tabs class="line_type large" v-model="tab1" :items="tabs" />
          <div class="tab_contents" v-if="tab1 == 'A'">
            <!-- S 전체 -->
              <m-tabs class="card_type small mgt16" v-model="tab2" :items="tabs1" />
              <div v-if="tab2 == 'A'">
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
                    <div class="ico_area wrap">
                      <span class="tag_red">-12.26%</span>
                      <div class="txt01">₩ 352,100</div>
                    </div>
                  </li>
                  <li>
                    <div class="prd_img">
                      <span class="txt_number primary">2</span>
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
                    <div class="ico_area wrap">
                      <span class="tag_blue">+1.24%</span>
                      <div class="txt01">₩ 352,100</div>
                    </div>
                  </li>
                  <li>
                    <div class="prd_img">
                      <span class="txt_number primary">3</span>
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
                    <div class="ico_area wrap">
                      <span class="tag_blue">+1.24%</span>
                      <div class="txt01">₩ 352,100</div>
                    </div>
                  </li>
                  <li>
                    <div class="prd_img">
                      <span class="txt_number primary">4</span>
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
                    <div class="ico_area wrap">
                      <span class="tag_blue">+1.24%</span>
                      <div class="txt01">₩ 352,100</div>
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
                    <div class="ico_area wrap">
                      <span class="tag_blue">+1.24%</span>
                      <div class="txt01">₩ 352,100</div>
                    </div>
                  </li>
                </ul>
                <div class="btn_wrap">
                  <m-button-3 size="large" class="font16 full" color="textPrimary">더보기</m-button-3>
                </div>
              </div>
              <div v-if="tab2 == 'B'">
                contents2
              </div>
            </div>
           <!-- E 전체 -->
          <div class="tab_contents" v-if="tab1 == 'B'">
            <!--S 주식-->
            <!--E 주식-->
          </div>
          <div class="tab_contents" v-if="tab1 == 'C'">
            <!--S 코인-->
            <!--E 코인-->
          </div>
      </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
components: { Swiper, SwiperSlide },
name:"H_10000_P", 
data() {
      return {
        select1: ref("전체"),
        options: [
          '전체', '선택1','선택2','선택3'
        ],
        rad1:ref('A'),
        tab1: ref('A'),
        tabs: [
          { label: '전체', value: 'A', icon: '' },
          { label: '주식', value: 'B', icon: '' },
          { label: '코인', value: 'C', icon: '' },
         
        ],
        tab2: ref('A'),
        tabs1: [
          { label: '급상승', value: 'A', icon: '' },
          { label: '급하락', value: 'B', icon: '' },
          { label: '거래량', value: 'C', icon: '' },
          { label: '인기', value: 'D', icon: '' },
          { label: '관심', value: 'E', icon: '' },
        ],
      }
  },
  methods: {
  }
};
</script>
<style scoped>

</style>

