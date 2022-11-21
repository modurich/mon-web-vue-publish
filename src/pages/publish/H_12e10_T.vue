<template>
  <div class="centerarea_box1">
      <div class="con_box">
        <h2 class="line_type between">
          <span>인기 토론 자산 TOP 100</span>
        </h2>
        <div class="box_contents"> 
          <ul class="product_list mgt0">
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
                <div class="ico_area">
                  <a href="#" class="link_view bold">
                    <span class="txt_gray">최근</span> 000<span class="txt_gray">개</span>
                  </a>
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
                <div class="ico_area">
                  <a href="#" class="link_view bold">
                    <span class="txt_gray">최근</span> 000<span class="txt_gray">개</span>
                  </a>
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
                <div class="ico_area">
                  <a href="#" class="link_view bold">
                    <span class="txt_gray">최근</span> 000<span class="txt_gray">개</span>
                  </a>
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
                <div class="ico_area">
                  <a href="#" class="link_view bold">
                    <span class="txt_gray">최근</span> 000<span class="txt_gray">개</span>
                  </a>
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
                <div class="ico_area">
                  <a href="#" class="link_view bold">
                    <span class="txt_gray">최근</span> 000<span class="txt_gray">개</span>
                  </a>
                </div>
              </li>
            </ul>
            <!-- <div class="btn_wrap">
              <m-button-3 size="large" class="font16 full" color="textPrimary">더보기</m-button-3>
            </div> -->
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
        }
    }
   
};
</script>
<style scoped>

</style>
