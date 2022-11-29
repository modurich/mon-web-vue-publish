<template>
    <div class="centerarea_box1">
        <div class="con_box">
          <h2 class="line_type">
            검색
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
              <h3 class="between mgt32">
                <span class="font16">최근 검색</span>
                <button class="ico_trash">전체삭제</button>
              </h3>
              <!-- <div class="no_data">최근 검색 내역 없음</div> -->
              <ul class="search_list">
                <li>
                  <span class="search_name">
                    삼성전자
                  </span>
                  <span>
                    <button class="ico_close">close</button>
                  </span>
                </li>
                <li>
                  <span class="search_name">
                    무명의하수
                  </span>
                  <span>
                    <button class="ico_close">close</button>
                  </span>
                </li>
                <li>
                  <span class="search_name">
                    신재생에너지
                  </span>
                  <span>
                    <button class="ico_close">close</button>
                  </span>
                </li>
                <li>
                  <span class="search_name">
                    윤석열
                  </span>
                  <span>
                    <button class="ico_close">close</button>
                  </span>
                </li>
                <li>
                  <span class="search_name">
                    mon
                  </span>
                  <span>
                    <button class="ico_close">close</button>
                  </span>
                </li>
              </ul>
              <div class="divider1 small"/>
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
            <div v-if="tab1 == 'C'">
              <ul class="product_list">
                <li>
                  <a href="#" class="link_area">
                    <div class="prd_img">
                      <div class="img_area">
                        <img src="~assets/prd_logo.png" alt="profile"/>
                      </div>
                      <div class="tit_area">
                        <span class="txt01">Ethereum</span>
                        <span class="txt02">
                          ETH
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
            { label: '검색', value: 'A', icon: '' },
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

