
<template>
    <div class="centerarea_box1">
        <div class="con_box">
          <h2 class="line_type">종목상세</h2>
          <div class="box_contents pdt16"> 
               <!--S 투자 리스트-->
               <div class="invest_wrap">
                <div class="right mgb4">
                  <span class="font10 primary">장중 / 실시간</span>
                </div>
                <div class="pro_area">
                  <p class="logo_wrap">
                    <span class="logo mgt4"><img src="~assets/sb_bitcoin.svg" alt="" /></span>
                    <span class="txt_area">
                      <span class="txt01">Bitcoin</span>
                      <span class="txt02">BTC</span>
                    </span>
                  </p>
                  <p class="txt_wrap">
                    <span class="txt_area txt_blue1">
                      <span class="txt01">$ 0.1234567890</span>
                      <span class="font12 txt_gray">₩ 3,000,000</span>
                      <span class="ico_area"><span class="tag_blue small">+4.26%</span></span>
                      <span class="txt02">▲ 0.1234567890</span>
                    </span>
                    <span class="bar_area">
                      <span class="line_bar_wrap blue">
                        <span class="line"></span>
                        <span class="bar" style="top:35%;height: 30%;"></span>
                      </span>
                    </span>
                  </p>
                </div>
                <div class="mob_only">
                  <div class="divider1 small" />
                  <div class="between mgb16">
                    <button class="flex"><i class="ico_setting_gray"/>증권사 미설정</button>
                    <m-button-3 color="primary">주문하기</m-button-3 >
                  </div>
                </div>
                <p class="font12 mgt32">
                  해당 자산에 대한 설명이 나오는 영역  글자수는 최대 200자 정도 해당 자산에 대한 설명이 나오는 영역  글자수는 최대 200자 정도 해당 자산에 대한 설명이 나오는 영역  글자수는 최대 200자 정도 해당 자산에 대한 설명이 나오는 영역  글자수는 최대 200자 정도 해당 자산에 대한 설명이 나오는 영역  글자수는 최대 200자 정도
                </p>
              </div>
              <!--E 투자 리스트-->
              <div class="btn_area_center type1">
                <button>
                  <i class="btn_coinmarket"/>
                  <span class="txt_area">코인마켓캡</span>
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
              <div class="right mgt32 mgb32"><img src="~assets/coinmarket_logo.svg" alt="logo"/></div>
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
                <div class="col2">
                  <div>
                    <span class="txt01">24시간 고가</span>
                    <span class="txt02 txt_blue1">$ 0.0000001234</span>
                  </div>
                  <div>
                    <span class="txt01">24시간 저가</span>
                    <span class="txt02 txt_red">$ 0.0000001234</span>
                  </div>
                </div>
                <div class="col1">
                  <span class="txt01">24시간 거래대금</span>
                  <span class="txt02 txt_dk">$ 9,999,999 M</span>
                </div>
              </div>
              <div class="divider"/>
              <h3 class="between mgb32 mgt16">
                <span class="font16">시세 정보</span>
              </h3>
              <div class="list_type4">
                <div class="col1">
                  <span class="txt01">전일 종가</span>
                  <span class="txt02 txt_dk">$ 0.0000001234</span>
                </div>
                <div class="col2">
                  <div>
                    <span class="txt01">1개월 고가</span>
                    <span class="txt02 txt_blue1">$ 0.0000001234</span>
                  </div>
                  <div>
                    <span class="txt01">1개월 저가</span>
                    <span class="txt02 txt_red">$ 0.0000001234</span>
                  </div>
                  <div>
                    <span class="txt01">1년 고가</span>
                    <span class="txt02 txt_blue1">$ 0.0000001234</span>
                  </div>
                  <div>
                    <span class="txt01">1년 저가</span>
                    <span class="txt02 txt_red">$ 0.0000001234</span>
                  </div>
                  <div>
                    <span class="txt01">역대 고가</span>
                    <span class="txt02 txt_blue1">$ 0.0000001234</span>
                  </div>
                  <div>
                    <span class="txt01">역대 저가</span>
                    <span class="txt02 txt_red">$ 0.0000001234</span>
                  </div>
                </div>
              </div>
              <div class="divider"/>
              <h3 class="between mgb32 mgt16">
                <span class="font16">투자 정보</span>
              </h3>
              <div class="list_type4">
                <div class="col2">
                  <div>
                    <span class="txt01">시가 총액</span>
                    <span class="txt02 txt_dk">$ 9,999,999 M</span>
                  </div>
                  <div>
                    <span class="txt01">시총 순위</span>
                    <span class="txt02 txt_dk">999 위</span>
                  </div>
                  <div>
                    <span class="txt01">도미넌스</span>
                    <span class="txt02 txt_dk">0.0001 %</span>
                  </div>
                  <div>
                    <span class="txt01">총 공급</span>
                    <span class="txt02 txt_dk">978억 개</span>
                  </div>
                </div>
                <div class="col1">
                  <span class="txt01">유통 공급량</span>
                  <span class="txt02 txt_dk">6,978만 개</span>
                </div>
              </div>
              <div class="right mgt32"><img src="~assets/coinmarket_logo.svg" alt="logo"/></div>
              <div class="divider"/>
              <h3 class="between mgb32 mgt16">
                <span class="font16">🏢 홈페이지</span>
              </h3>
              <ul class="list_type1">
                <li>https://www.ethereum.org/</li>
                <li>https://www.ethereum.org/</li>
              </ul>
              <div class="divider"/>
              <h3 class="between mgb32 mgt16">
                <span class="font16">📖 백서</span>
              </h3>
              <ul class="list_type1">
                <li>https://www.ethereum.org/</li>
                <li>https://www.ethereum.org/</li>
              </ul>
              <div class="divider"/>
              <h3 class="between mgb32 mgt16">
                <span class="font16">🌏 익스플로러</span>
              </h3>
              <ul class="list_type1">
                <li>https://www.ethereum.org/</li>
                <li>https://www.ethereum.org/</li>
                <li>https://www.ethereum.org/</li>
                <li>https://www.ethereum.org/</li>
              </ul>
              <div class="divider"/>
              <h3 class="between mgb32 mgt16">
                <span class="font16">📢 공지 채널</span>
              </h3>
              <ul class="list_type1">
                <li>https://www.ethereum.org/</li>
                <li>https://www.ethereum.org/</li>
              </ul>
              <div class="divider"/>
              <h3 class="between mgb32 mgt16">
                <span class="font16">🏦 거래소</span>
              </h3>
              <ul class="list_type2 w100 no_line">
                <li>
                  <div class="l_area">
                    <span class="logo_area font12">
                      <span>
                        <img src="~assets/prd_logo.png" alt="Binance" />
                        <span class="txt_dk font14 mgl16">Binance</span>
                        <span class="mgl16">BTC/USDT</span>
                      </span>
                      <span>
                        15858.20002945
                      </span>
                    </span>
                  </div>
                </li>
                <li>
                  <div class="l_area">
                    <span class="logo_area font12">
                      <span>
                        <img src="~assets/prd_logo.png" alt="CoinW" />
                        <span class="txt_dk font14 mgl16">CoinW</span>
                        <span class="mgl16">BTC/USDT</span>
                      </span>
                      <span>
                        15858.20002945
                      </span>
                    </span>
                  </div>
                </li>
                <li>
                  <div class="l_area">
                    <span class="logo_area font12">
                      <span>
                        <img src="~assets/prd_logo.png" alt="CoinW" />
                        <span class="txt_dk font14 mgl16">CoinW</span>
                        <span class="mgl16">BTC/USDT</span>
                      </span>
                      <span>
                        15858.20002945
                      </span>
                    </span>
                  </div>
                </li>
                <li>
                  <div class="l_area">
                    <span class="logo_area font12">
                      <span>
                        <img src="~assets/prd_logo.png" alt="CoinW" />
                        <span class="txt_dk font14 mgl16">CoinW</span>
                        <span class="mgl16">BTC/USDT</span>
                      </span>
                      <span>
                        15858.20002945
                      </span>
                    </span>
                  </div>
                </li>
                <li>
                  <div class="l_area">
                    <span class="logo_area font12">
                      <span>
                        <img src="~assets/prd_logo.png" alt="CoinW" />
                        <span class="txt_dk font14 mgl16">CoinW</span>
                        <span class="mgl16">BTC/USDT</span>
                      </span>
                      <span>
                        15858.20002945
                      </span>
                    </span>
                  </div>
                </li>
              </ul>
              <div class="btn_wrap mgt32">
                <m-button-3 lined color="primary" size="large" class="full">전체보기</m-button-3>
              </div>
            </div>
            <div class="tab_contents" v-if="tab1 == 'B'">
             
             
            </div>
            <div class="tab_contents" v-if="tab1 == 'C'">
             
             
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
              { label: '토론', value: 'C', icon: '' }
            ],
        }
    },
};
</script>
<style scoped>

</style>
