<template>
    <div class="centerarea_box1">
        <div class="con_box">
          <h2 class="line_type">
            테마 카테고리
          </h2>
          <div class="box_contents">  
            <ul class="thema_list mgt0">
              <li>
                <div class="tit_area">
                  <span class="badge2 semiconductor">반도체</span>
                  <span class="txt01 font20">메모리반도체</span>
                </div>
                <div class="ico_area">
                  <span class="tag_red">-0.81%</span>
                </div>
              </li>
            </ul>
            <p>메모리 반도체란 반도체의 회로를 전기적으로 제어함으로써 데이터를 저장하는 반도체 회로장치다.</p>
            <m-tabs class="line_type large mg0" v-model="tab1" :items="tabs" />
            <div v-if="tab1 == 'A'">
              <!-- <div class="no_data">최근 검색 내역 없음</div> -->
              <ul class="product_list">
                <li>
                  <a href="#" class="link_area">
                    <div class="prd_img">
                      <div class="img_area">
                        <img src="~assets/prd_logo.png" alt="profile"/>
                      </div>
                      <div class="tit_area">
                        <span class="txt01">삼성전자우</span>
                        <span class="txt02">
                          코스피 005930
                        </span>
                      </div>
                    </div>
                    <div class="ico_area txt_red">
                      <div class="right font16 mgb4">52,100</div>
                      <span class="font12 mgr4"><span class="font10">▼</span> 1,200</span>
                      <span class="tag_red small">-0.81%</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" class="link_area">
                    <div class="prd_img">
                      <div class="img_area">
                        <img src="~assets/prd_logo.png" alt="profile"/>
                      </div>
                      <div class="tit_area">
                        <span class="txt01">삼성전자우</span>
                        <span class="txt02">
                          코스피 005930
                        </span>
                      </div>
                    </div>
                    <div class="ico_area txt_blue1">
                      <div class="right font16 mgb4">352,100</div>
                      <span class="font12 mgr4"><span class="font10">▲</span> 1,200</span>
                      <span class="tag_blue small">+29.24%</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" class="link_area">
                    <div class="prd_img">
                      <div class="img_area">
                        <img src="~assets/prd_logo.png" alt="profile"/>
                      </div>
                      <div class="tit_area">
                        <span class="txt01">삼성전자우</span>
                        <span class="txt02">
                          코스피 005930
                        </span>
                      </div>
                    </div>
                    <div class="ico_area txt_red">
                      <div class="right font16 mgb4">52,100</div>
                      <span class="font12 mgr4"><span class="font10">▼</span> 1,200</span>
                      <span class="tag_red small">-0.81%</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div v-if="tab1 == 'B'">
            </div>
            <div v-if="tab1 == 'C'">
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
  data() {
        return {
          tab1: ref('A'),
          tabs: [
            { label: '전체', value: 'A', icon: '' },
            { label: '주식', value: 'B', icon: '' },
            { label: '코인', value: 'C', icon: '' },
          ],
        }
    },
    methods: {
    }
};
</script>
<style scoped>

</style>

