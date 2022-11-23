<template>
  <div class="centerarea_box01">
    <q-form>
      <div class="con_box">
        <div style="padding:32px">
          <m-button-3 @click="dailog2 = true" lined color="primary">VP파워 올리는 방법</m-button-3>
        </div>
        <!-- S VP파워 올리는 방법 -->
        <m-dialog v-model="dailog2">
          <div class="dailog_wrap">
            <div class="dailog_top">
              <q-btn icon="close" flat v-close-popup />
            </div>
            <p class="dialog_tit">VP파워 올리는 방법</p>
            <q-card-section class="dailog_contents">
              <q-carousel v-model="slide" 
              transition-prev="slide-right" 
              transition-next="slide-left" 
              swipeable 
              animated     
              width="100%"
              height="480px"
              control-color="primary" 
              class="ranking_slide ico_box" 
              navigation  arrows>
                <q-carousel-slide name="1">
                  <p class="mgb16 txt_dk center">🙌🏻  보팅파워(VP)가 높을 수록 좋은 점</p>
                  <p class="center"><i class="ico_box03"/></p>
                  <div class="font12 center">
                    <p class="txt_dk">예측콘텐츠(인사이트/BLASH) 보팅에 사용 가능해요!</p>
                    <p>
                    - 인사이트 최소5 VP, 최대 10VP까지 보팅 가능<br/>
                    - BLASH는 최소5VP 최대 제한 없음</p>
                    <p class="txt_dk">
                      보팅파워가 높은수록 많은 예측콘텐츠에 보팅할 수 있어<br/>
                      sMON보상을 더 많이 받을 확률이 높아요~!</p>
                  </div>
                </q-carousel-slide>
                <q-carousel-slide name="2">
                  <p class="mgb16 txt_dk center">🙌🏻  멤버십 혜택 VP</p>
                  <p class="mgb32 center">매일 보팅파워 <span class="primary">10VP</span> 추가 획득</p>
                  <div class="divider1 small" />
                  <p class="mgb16 txt_dk center">🙌🏻  활동등급 별 지급 VP</p>
                  <div class="between">
                    <span>활동등급</span>
                    <span>뱃지</span>
                    <span>활동점수</span>
                    <span>획득량</span>
                  </div>
                  <ul class="list_type1 line vip_list">
                    <li>
                      <span class="txt_dk">일개미</span>
                      <span class="center flex"><i class="ico_level1">level1</i></span>
                      <span class="txt_dk right">기본</span>
                      <span class="primary bold right">10 VP</span>
                    </li>
                    <li>
                      <span class="txt_dk">병정개미</span>
                      <span class="center flex"><i class="ico_level2">level2</i></span>
                      <span class="txt_dk right">300 P</span>
                      <span class="primary bold right">10 VP</span>
                    </li>
                    <li>
                      <span class="txt_dk">귀족개미</span>
                      <span class="center flex"><i class="ico_level3">level3</i></span>
                      <span class="txt_dk right">800 P</span>
                      <span class="primary bold right">10 VP</span>
                    </li>
                    <li>
                      <span class="txt_dk">여왕개미</span>
                      <span class="center flex"><i class="ico_level4">level4</i></span>
                      <span class="txt_dk right">1,500 P</span>
                      <span class="primary bold right">10 VP</span>
                    </li>
                    <li>
                      <span class="txt_dk">몬스터개미</span>
                      <span class="center flex"><i class="ico_level5">level5</i></span>
                      <span class="txt_dk right">2,500 P</span>
                      <span class="primary bold right">10 VP</span>
                    </li>
                  </ul>
                </q-carousel-slide>
                <q-carousel-slide name="3">
                  <p class="mgb32 txt_dk center">🙌🏻  스테이킹 수량 별 보상 VP</p>
                  
                  <div class="between">
                    <span>스테이킹 수량</span>
                    <span>보상 (오전9시)</span>
                  </div>
                  <ul class="list_type1 line">
                    <li>
                      <span class="txt_dk">10,000</span>
                      <span class="primary bold">5VP</span>
                    </li>
                    <li>
                      <span class="txt_dk">50,000</span>
                      <span class="primary bold">10VP</span>
                    </li>
                    <li>
                      <span class="txt_dk">100,000</span>
                      <span class="primary bold">15VP</span>
                    </li>
                    <li>
                      <span class="txt_dk">500,000</span>
                      <span class="primary bold">20VP</span>
                    </li>
                    <li>
                      <span class="txt_dk">1,000,000</span>
                      <span class="primary bold">25VP</span>
                    </li>
                    <li>
                      <span class="txt_dk">5,000,000</span>
                      <span class="primary bold">30VP</span>
                    </li>
                  </ul>
                </q-carousel-slide>
            </q-carousel>
             
            </q-card-section>
          </div>
        </m-dialog>
        <!-- E VP파워 올리는 방법 -->
      </div>
    </q-form>
  </div>
</template>

<script>
import { ref } from 'vue';
import MDialogBlank from 'src/components/MDialogBlank.vue';

export default {
  components: { MDialogBlank },
  name: 'A_10000_P',
  data() {
    return {
      slide: ref('1'),
      slide1: ref('1'),
      dailog2: ref(false),
    }
  },
  methods: {
  }
};
</script>
