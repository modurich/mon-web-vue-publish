
<template>
    <div class="centerarea_box1">
        <div class="con_box">
          <h2 class="line_type">종목상세</h2>
          <div class="box_contents pdt16"> 
               <!--S 투자 리스트-->
               <div class="invest_wrap">
                <div class="between">
                  <span class="badge_area">
                    <span class="badge3 small red">정리매매</span>
                  </span>
                  <span class="font10 primary">장중 / 실시간</span>
                </div>
                <div class="pro_area">
                  <p class="logo_wrap">
                    <span class="logo"><img src="~assets/prd_logo.png" alt="" /></span>
                    <span class="txt_area">
                      <span class="txt01">삼성전자 우</span>
                      <span class="txt02">코스닥 반도치 087600</span>
                    </span>
                  </p>
                  <p class="txt_wrap">
                    <span class="txt_area txt_blue1">
                      <span class="txt01">₩ 352,100</span>
                      <span class="ico_area"><span class="tag_blue small">+4.26%</span></span>
                      <span class="txt02">▲ 2,000</span>
                    </span>
                    <span class="bar_area">
                      <span class="line_bar_wrap blue">
                        <span class="line"></span>
                        <span class="bar" style="top:35%;height: 30%;"></span>
                      </span>
                    </span>
                  </p>
                </div>
                <p class="font12">
                  해당 자산에 대한 설명이 나오는 영역  글자수는 최대 200자 정도 해당 자산에 대한 설명이 나오는 영역  글자수는 최대 200자 정도 해당 자산에 대한 설명이 나오는 영역  글자수는 최대 200자 정도 해당 자산에 대한 설명이 나오는 영역  글자수는 최대 200자 정도 해당 자산에 대한 설명이 나오는 영역  글자수는 최대 200자 정도
                </p>
              </div>
              <!--E 투자 리스트-->
              <div class="btn_area_center type1">
                <button>
                  <i class="btn_naver"/>
                  <span class="txt_area">네이버금융</span>
                </button>
                <button>
                  <i class="btn_chart"/>
                  <span class="txt_area">차트</span>
                </button>
                <button>
                  <i class="btn_share"/>
                  <span class="txt_area">공유</span>
                </button>
                <button>
                  <i class="btn_heart"/>
                  <span class="txt_area">관심추가</span>
                </button>
                <a href="#">
                  <i class="btn_write"/>
                  <span class="txt_area">작성</span>
                </a>
              </div>
            </div>
            <m-tabs class="line_type large" v-model="tab1" :items="tabs" />
            <div class="tab_contents" v-if="tab1 == 'A'">
              <h3 class="between mgb32 mgt16">
                <span class="font16">테마 정보</span>
                <button class="font12 txt_gray medium flex">
                  <i class="icon ico_info_gray"></i>
                </button>
              </h3>
              <ul class="thema_list1">
                <li>
                  <div class="prd_img">
                    <div class="badge_area">
                      <span class="badge1 semiconductor">반도체</span>
                    </div>
                    <div class="tit_area">
                      <span class="txt01">비메모리반도체</span>
                    </div>
                  </div>
                  <div class="ico_area">
                    <span class="tag_blue">+7.64%</span>
                  </div>
                </li>
                <li>
                  <div class="prd_img">
                    <div class="badge_area">
                      <span class="badge1 semiconductor">반도체</span>
                    </div>
                    <div class="tit_area">
                      <span class="txt01">반도체설계계</span>
                    </div>
                  </div>
                  <div class="ico_area">
                    <span class="tag_blue">+7.64%</span>
                  </div>
                </li>
                <li>
                  <div class="prd_img">
                    <div class="badge_area">
                      <span class="badge1 semiconductor">반도체</span>
                    </div>
                    <div class="tit_area">
                      <span class="txt01">반도체부품</span>
                    </div>
                  </div>
                  <div class="ico_area">
                    <span class="tag_blue">+7.64%</span>
                  </div>
                </li>
                <li>
                  <div class="prd_img">
                    <div class="badge_area">
                      <span class="badge1 semiconductor">반도체</span>
                    </div>
                    <div class="tit_area">
                      <span class="txt01">차량용반도체</span>
                    </div>
                  </div>
                  <div class="ico_area">
                    <span class="tag_blue">+7.64%</span>
                  </div>
                </li>
                <li>
                  <div class="prd_img">
                    <div class="badge_area">
                      <span class="badge1 semiconductor">반도체</span>
                    </div>
                    <div class="tit_area">
                      <span class="txt01">원자재</span>
                    </div>
                  </div>
                  <div class="ico_area">
                    <span class="tag_blue">+7.64%</span>
                  </div>
                </li>
              </ul>
              <div class="divider"/>
              <h3 class="between mgb32 mgt16">
                <span class="font16">오늘의 거래</span>
              </h3>
              <div class="list_type4">
                <div class="col1">
                  <span class="txt01">오늘 시가</span>
                  <span class="txt02 txt_dk">₩2,360,200</span>
                </div>
                <div class="col2">
                  <div>
                    <span class="txt01">오늘 고가</span>
                    <span class="txt02 txt_blue1">₩2,360,200</span>
                  </div>
                  <div>
                    <span class="txt01">오늘 저가</span>
                    <span class="txt02 txt_red">₩2,360,200</span>
                  </div>
                  <div>
                    <span class="txt01">1일 거래량</span>
                    <span class="txt02 txt_dk">1,100,000천 주</span>
                  </div>
                  <div>
                    <span class="txt01">1일 거래대금</span>
                    <span class="txt02 txt_dk">1,000,000,000 원</span>
                  </div>
                </div>
              </div>
              <div class="divider"/>
              <h3 class="between mgb32 mgt16">
                <span class="font16">시세 정보</span>
              </h3>
              <div class="list_type4">
                <div class="col1">
                  <span class="txt01">전일 종가</span>
                  <span class="txt02 txt_dk">₩2,360,200</span>
                </div>
                <div class="col2">
                  <div>
                    <span class="txt01">52주 최고가</span>
                    <span class="txt02 txt_blue1">₩2,360,200</span>
                  </div>
                  <div>
                    <span class="txt01">52주 최저가</span>
                    <span class="txt02 txt_red">₩2,360,200</span>
                  </div>
                </div>
              </div>
              <div class="divider"/>
              <h3 class="between mgb32 mgt16">
                <span class="font16">투자 정보</span>
              </h3>
              <div class="list_type4">
                <div class="col1">
                  <span class="txt01">전일 종가</span>
                  <span class="txt02 txt_dk">₩2,360,200</span>
                </div>
                <div class="col2">
                  <div>
                    <span class="txt01">52주 최고가</span>
                    <span class="txt02 txt_blue1">₩2,360,200</span>
                  </div>
                  <div>
                    <span class="txt01">52주 최저가</span>
                    <span class="txt02 txt_red">₩2,360,200</span>
                  </div>
                </div>
              </div>
              <div class="divider"/>
            </div>
            <div class="tab_contents" v-if="tab1 == 'B'">
             
             
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';


export default {
 
    name: 'H_33200_T',
    
    data() {
        return {
            tab1:ref('A'),
            tabs: [
              { label: '기본', value: 'A', icon: '' },
              { label: '예측', value: 'B', icon: '' },
              { label: '토론', value: 'B', icon: '' }
            ],
        }
    },
};
</script>
<style scoped>

</style>
