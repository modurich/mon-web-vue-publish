<template>
    <div class="centerarea_box1">
        <div class="con_box">
          <m-tabs class="line_type large" v-model="tab1" :items="tabs" />
            <div class="tab_contents" v-if="tab1 == 'A'">
              <!-- S 내종목 -->
                <!-- S 구독중 매매시그널 -->
                <q-expansion-item
                  class="accordion_type1"
                  expand-separator
                  default-opened
                  label="구독중 매매시그널"
                >
                <p class="pdb32">구독중인 콘텐츠의 시그널을 확인해보세요</p>
                <ul class="product_list">
                  <li>
                    <div class="prd_img">
                      <div class="img_area">
                        <img src="~assets/prd_logo.png" alt="profile" />
                      </div>
                      <div class="tit_area">
                        <span class="txt01">삼성전자우</span>
                        <span class="txt02">
                          코스피 005930
                        </span>
                      </div>
                    </div>
                    <div class="ico_area">
                      <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                        indeterminate-icon="help" />
                    </div>
                  </li>
                  <li>
                    <div class="prd_img">
                      <div class="img_area">
                        <img src="~assets/prd_logo.png" alt="profile" />
                      </div>
                      <div class="tit_area">
                        <span class="txt01">삼성전자우</span>
                        <span class="txt02">
                          코스피 005931
                        </span>
                      </div>
                    </div>
                    <div class="ico_area">
                      <q-checkbox v-model="v_true" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                        indeterminate-icon="help" />
                    </div>
                  </li>
                  <li>
                    <div class="prd_img">
                      <div class="img_area">
                        <img src="~assets/prd_logo.png" alt="profile" />
                      </div>
                      <div class="tit_area">
                        <span class="txt01">삼성전자우</span>
                        <span class="txt02">
                          코스피 005932
                        </span>
                      </div>
                    </div>
                    <div class="ico_area">
                      <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                        indeterminate-icon="help" />
                    </div>
                  </li>
                </ul>
                </q-expansion-item>
                <!-- E 구독중 매매시그널 -->
                <div class="divider"/>
                <!-- S 관심자산 -->
                <q-expansion-item
                  class="accordion_type1"
                  expand-separator
                  default-opened
                  label="관심자산"
                >
                <m-tabs class="card_type small mgt16" v-model="tab2" :items="tabs1" />
                <div v-if="tab2 == 'A'">
                  <ul class="product_list">
                    <li>
                      <div class="prd_img">
                        <div class="img_area">
                          <img src="~assets/prd_logo.png" alt="profile" />
                        </div>
                        <div class="tit_area">
                          <span class="txt01">삼성전자우</span>
                          <span class="txt02">
                            코스피 005930
                          </span>
                        </div>
                      </div>
                      <div class="ico_area right">
                        <span class="tag_red">-12.26%</span>
                        <div class="mgt8">₩ 352,100</div>
                      </div>
                    </li>
                    <li>
                      <div class="prd_img">
                        <div class="img_area">
                          <img src="~assets/prd_logo.png" alt="profile" />
                        </div>
                        <div class="tit_area">
                          <span class="txt01">삼성전자우</span>
                          <span class="txt02">
                            코스피 005930
                          </span>
                        </div>
                      </div>
                      <div class="ico_area right">
                        <span class="tag_blue">+1.24%</span>
                        <div class="mgt8">₩ 352,100</div>
                      </div>
                    </li>
                    <li>
                      <div class="prd_img">
                        <div class="img_area">
                          <img src="~assets/prd_logo.png" alt="profile" />
                        </div>
                        <div class="tit_area">
                          <span class="txt01">삼성전자우</span>
                          <span class="txt02">
                            코스피 005930
                          </span>
                        </div>
                      </div>
                      <div class="ico_area right">
                        <span class="tag_blue">+1.24%</span>
                        <div class="mgt8">₩ 352,100</div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div v-if="tab2 == 'B'">
                  contents2
                </div>
                </q-expansion-item>
                <!-- E 관심자산 -->
                <div class="divider"/>
                <!-- S 관심자산추천 -->
                <q-expansion-item
                  class="accordion_type1"
                  expand-separator
                  default-opened
                  label="관심자산"
                >
                <p>관심 자산 등록하고  빠르게 소식 받아가세요</p>
                <m-tabs class="card_type small mgt16" v-model="tab3" :items="tabs2" />
                <div v-if="tab3 == 'A'">
                  
                  <m-select class="mgt32" v-model="select1" :options="options" />
                  <ul class="product_list">
                    <li>
                      <div class="prd_img">
                        <div class="img_area">
                          <img src="~assets/prd_logo.png" alt="profile" />
                        </div>
                        <div class="tit_area">
                          <span class="txt01">삼성전자우</span>
                          <span class="txt02">
                            코스피 005930
                          </span>
                        </div>
                      </div>
                      <div class="ico_area">
                        <q-checkbox v-model="v_true" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                          indeterminate-icon="help" />
                      </div>
                    </li>
                    <li>
                      <div class="prd_img">
                        <div class="img_area">
                          <img src="~assets/prd_logo.png" alt="profile" />
                        </div>
                        <div class="tit_area">
                          <span class="txt01">삼성전자우</span>
                          <span class="txt02">
                            코스피 005931
                          </span>
                        </div>
                      </div>
                      <div class="ico_area">
                        <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                        indeterminate-icon="help" />
                      </div>
                    </li>
                    <li>
                      <div class="prd_img">
                        <div class="img_area">
                          <img src="~assets/prd_logo.png" alt="profile" />
                        </div>
                        <div class="tit_area">
                          <span class="txt01">삼성전자우</span>
                          <span class="txt02">
                            코스피 005932
                          </span>
                        </div>
                      </div>
                      <div class="ico_area">
                        <q-checkbox v-model="v_true" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                        indeterminate-icon="help" />
                      </div>
                    </li>
                  </ul>
                  <div class="btn_wrap l_row_l">
                    <m-button-3 lined color="primary" class="full">모두보기</m-button-3>
                  </div>
                </div>
                <div v-if="tab3 == 'B'">
                  contents2
                </div>
                <div v-if="tab3 == 'C'">
                  contents2
                </div>
                </q-expansion-item>
                <!-- E 관심자산추천 -->
                <div class="divider mgb0"/>
                 <!-- S 배너 -->
                 <div class="banner_box mg0">
                    <img src="~assets/banner_img01.png" alt="BLASH 구독하고 실시간 시그널 기능을 경험해보세요!" class="pc">
                    <img src="~assets/mob_banner_img01.png" alt="BLASH 구독하고 실시간 시그널 기능을 경험해보세요!" class="mob">
                </div>
                 <!-- E 배너 -->
                <div class="divider mgt0"/>
                 <!-- S 보러가기 -->
                 <div class="view_box">
                    <p class="list_wrap">
                      <i class="ico_alarm_new"></i>
                      <span>
                      팔로우가 작성한 BLASH 콘텐츠 <strong>12</strong>개가 추가됐어요!
                      </span>
                    </p>
                    <div class="btn_wrap l_row_l">
                      <m-button-3 color="primary" class="full">보러가기</m-button-3>
                    </div>
                </div>
                 <!-- E 보러가기 -->
                <div class="divider"/>
                  <!-- S 보팅 -->
                  <q-expansion-item
                  class="accordion_type1"
                  expand-separator
                  default-opened
                  label="보팅"
                >
                <p class="pdb32">내가 보팅중인 콘텐츠 종목</p>
                <ul class="product_list">
                  <li>
                    <div class="prd_img">
                      <div class="img_area">
                        <img src="~assets/prd_logo.png" alt="profile" />
                      </div>
                      <div class="tit_area">
                        <span class="txt01">삼성전자우</span>
                        <span class="txt02">
                          코스피 005930
                        </span>
                      </div>
                    </div>
                    <div class="ico_area">
                      <q-checkbox v-model="v_true" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                        indeterminate-icon="help" />
                    </div>
                  </li>
                  <li>
                    <div class="prd_img">
                      <div class="img_area">
                        <img src="~assets/prd_logo.png" alt="profile" />
                      </div>
                      <div class="tit_area">
                        <span class="txt01">삼성전자우</span>
                        <span class="txt02">
                          코스피 005930
                        </span>
                      </div>
                    </div>
                    <div class="ico_area">
                      <q-checkbox v-model="val" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                        indeterminate-icon="help" />
                    </div>
                  </li>
                  <li>
                    <div class="prd_img">
                      <div class="img_area">
                        <img src="~assets/prd_logo.png" alt="profile" />
                      </div>
                      <div class="tit_area">
                        <span class="txt01">삼성전자우</span>
                        <span class="txt02">
                          코스피 005930
                        </span>
                      </div>
                    </div>
                    <div class="ico_area">
                      <q-checkbox v-model="v_true" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                        indeterminate-icon="help" />
                    </div>
                  </li>
                </ul>
                </q-expansion-item>
                <!-- E 보팅 -->
             <!-- E 내종목 -->
              
              
            </div>
            <div class="tab_contents" v-if="tab1 == 'B'">
              <!--S 발견-->
              <!--E 발견-->
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
            { label: '내종목', value: 'A', icon: '' },
            { label: '발견', value: 'B', icon: '' },
           
          ],
          tab2: ref('A'),
          tabs1: [
            { label: '기본', value: 'A', icon: '' },
            { label: '그룹1', value: 'B', icon: '' },
           
          ],
          tab3: ref('A'),
          tabs2: [
            { label: '전체', value: 'A', icon: '' },
            { label: '주식', value: 'B', icon: '' },
            { label: '코인', value: 'C', icon: '' },
           
          ],
          val: ref(false),
          v_true: ref(true),
          progress: 0.4
        }
    },
    methods: {
    }
};
</script>
<style scoped>

</style>

