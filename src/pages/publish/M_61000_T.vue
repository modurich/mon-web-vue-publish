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
              <ul class="cs_list">
                <li>
                  <a href="#" class="link_area">
                    <div class="cs_wrap">
                      <i class="ico_cs_mo"/>
                      <div class="tit_area">
                        <p class="txt01">채널톡 몬스탁</p>
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
                    <div class="cs_wrap">
                      <i class="ico_cs_na"/>
                      <div class="tit_area">
                        <p class="txt01">자주 묻는 질문</p>
                      </div>
                    </div>
                    <div class="ico_area">
                    <i class="link_view big gray"/>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" class="link_area">
                    <div class="cs_wrap">
                      <i class="ico_cs_ch"/>
                      <div class="tit_area">
                        <p class="txt01">권장브라우저 크롬 (Chrome)</p>
                      </div>
                    </div>
                    <div class="ico_area">
                    <i class="link_view big gray"/>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" class="link_area">
                    <div class="cs_wrap">
                      <i class="ico_cs_se"/>
                      <div class="tit_area">
                        <p class="txt01">support@modurich.com</p>
                      </div>
                    </div>
                    <div class="ico_area">
                    <i class="link_view big gray"/>
                    </div>
                  </a>
                </li>
              </ul>
              <div class="divider1 small"/>
              <p class="font12">성희롱, 폭언 등 업무방해 행위는 산업안전보건법 고객응대 근로자 보호 조치 시행으로 형법 및 정보통신망법 등에 의해 처벌받으실 수 있습니다.</p>
            </div>
            <div v-if="tab1 == 'B'">
              <ul class="cs_list">
                <li>
                  <a href="#" class="link_area">
                    <div class="cs_wrap">
                      <i class="ico_cs_tg"/>
                      <div class="tit_area">
                        <p class="txt01">몬스탁 토큰 공식 텔레그램방</p>
                        <span class="txt02">
                          에어드랍, 프리세일, 상장 일정 소식
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
                    <div class="cs_wrap">
                      <i class="ico_cs_nb"/>
                      <div class="tit_area">
                        <p class="txt01">네이버 블로그</p>
                      </div>
                    </div>
                    <div class="ico_area">
                    <i class="link_view big gray"/>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" class="link_area">
                    <div class="cs_wrap">
                      <i class="ico_cs_md"/>
                      <div class="tit_area">
                        <p class="txt01">미디엄</p>
                      </div>
                    </div>
                    <div class="ico_area">
                    <i class="link_view big gray"/>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" class="link_area">
                    <div class="cs_wrap">
                      <i class="ico_cs_tw"/>
                      <div class="tit_area">
                        <p class="txt01">트위터</p>
                      </div>
                    </div>
                    <div class="ico_area">
                    <i class="link_view big gray"/>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" class="link_area">
                    <div class="cs_wrap">
                      <i class="ico_cs_fb"/>
                      <div class="tit_area">
                        <p class="txt01">페이스북</p>
                      </div>
                    </div>
                    <div class="ico_area">
                    <i class="link_view big gray"/>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" class="link_area">
                    <div class="cs_wrap">
                      <i class="ico_cs_is"/>
                      <div class="tit_area">
                        <p class="txt01">인스타그램</p>
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

