<template>
    <div class="centerarea_box1">
        <div class="con_box">
          <h2 class="line_type">
            고객센터
          </h2>
          <div class="box_contents">  
            <div class="search_input l_row_s">
              <m-input filled v-model="text1" class="round_type" placeholder="검색어를 입력해 주세요">
                <template v-slot:prepend>
                  <q-icon class="ico_search" />
                </template>
              </m-input>
              <m-button-3 color="primary">검색</m-button-3>
            </div>
            <m-tabs class="line_type large mg0 sticky_tab1" v-model="tab1" :items="tabs" />
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
                        <span class="txt01">채널톡 몬스탁</span>
                        <span class="txt02">
                          평일 오전 10시 ~ 오후 5시 ( 주말/공휴일 휴무 )
                        </span>
                      </div>
                    </div>
                    <div class="ico_area">
                    <i class="link_view big gray"/>
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
                        <span class="txt01">자주 묻는 질문</span>
                      </div>
                    </div>
                    <div class="ico_area">
                    <i class="link_view big gray"/>
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
                        <span class="txt01">권장브라우저 크롬 (Chrome)</span>
                      </div>
                    </div>
                    <div class="ico_area">
                    <i class="link_view big gray"/>
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
                        <span class="txt01">support@modurich.com</span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div v-if="tab1 == 'B'">
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
                    <div class="ico_area">
                    <i class="link_view big gray"/>
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
                    <div class="ico_area">
                    <i class="link_view big gray"/>
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
                    <div class="ico_area">
                    <i class="link_view big gray"/>
                    </div>
                  </a>
                </li>
              </ul>
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
            { label: '상담 / 문의', value: 'A', icon: '' },
            { label: '알림 채널', value: 'B', icon: '' },
          ],
        }
    },
    methods: {
    }
};
</script>
<style scoped>

</style>

