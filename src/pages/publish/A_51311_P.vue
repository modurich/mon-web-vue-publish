<template>
    <div class="centerarea_box1">
        <div class="con_box">
          <h2 class="line_type">
            테마 카테고리
          </h2>
          <div class="box_contents">  
            <h3 class="between">
              <span>추천 테마</span>
              <span class="font12">총 종목수 :<span class="primary"> 215</span></span>
            </h3>
            <div class="divider1 small"/>
            <div class="radio_wrap right">
                <m-radio v-model="rad1" val="B" label="상승률순"/>
                <m-radio v-model="rad1" val="C" label="하락률순"/>
            </div>
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
              <li>
                <div class="prd_img">
                  <div class="badge_area">
                    <span class="badge1 semiconductor">반도체</span>
                  </div>
                  <div class="tit_area">
                    <span class="txt01">기업</span>
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
                    <span class="txt01">전자기기</span>
                  </div>
                </div>
                <div class="ico_area">
                  <span class="tag_red">-0.81%</span>
                </div>
              </li>
              <li>
                <div class="prd_img">
                  <div class="badge_area">
                    <span class="badge1 semiconductor">반도체</span>
                  </div>
                  <div class="tit_area">
                    <span class="txt01">자동차차</span>
                  </div>
                </div>
                <div class="ico_area">
                  <span class="tag_red">-0.81%</span>
                </div>
              </li>
              <li>
                <div class="prd_img">
                  <div class="badge_area">
                    <span class="badge1 semiconductor">반도체</span>
                  </div>
                  <div class="tit_area">
                    <span class="txt01">코로나19</span>
                  </div>
                </div>
                <div class="ico_area">
                  <span class="tag_red">-0.81%</span>
                </div>
              </li>
            </ul>
            <div class="divider1 small mgb16"/>
            <div class="btn_wrap">
              <m-button-3 class="font18 full" color="textPrimary">더보기</m-button-3>
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
          rad1:ref('A'),
        }
    },
    methods: {
    }
};
</script>
<style scoped>

</style>

