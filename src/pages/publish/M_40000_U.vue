<template>
  <div class="centerarea_box01">
    <q-form>
      <div class="con_box">
        <div style="padding:32px">
          <m-button-3 @click="dailog2 = true" lined color="primary">몬스탁은 어떤 서비스 인가요?</m-button-3>
        </div>
        <!-- S VP파워 올리는 방법 -->
        <m-dialog v-model="dailog2">
          <div class="dailog_wrap">
            <div class="dailog_top">
              <q-btn icon="close" flat v-close-popup />
            </div>
            <q-card-section class="dailog_contents">
              <q-carousel v-model="slide" 
              transition-prev="slide-right" 
              transition-next="slide-left" 
              swipeable 
              animated     
              width="100%"
              height="650px"
              control-color="primary" 
              class="ranking_slide ico_box" 
              navigation  arrows>
                <q-carousel-slide name="1">
                 <img src="~assets/img_info01.png" alt="몬스탁은 어떤 서비스 인가요?" width="100%"/>
                </q-carousel-slide>
                <q-carousel-slide name="2">
                 <img src="~assets/img_info02.png" alt="예측 콘텐츠 종류" width="100%"/>
                </q-carousel-slide>
                <q-carousel-slide name="3">
                 <img src="~assets/img_info03.png" alt="콘텐츠 별 보상" width="100%"/>
                </q-carousel-slide>
                <q-carousel-slide name="4">
                 <img src="~assets/img_info04.png" alt="보팅 파워(VP)" width="100%"/>
                </q-carousel-slide>
                <q-carousel-slide name="5">
                 <img src="~assets/img_info05.png" alt="sMON & MON" width="100%"/>
                </q-carousel-slide>
                <q-carousel-slide name="6">
                 <img src="~assets/img_info06.png" alt="플레이어 등급 & 특별등급" width="100%"/>
                </q-carousel-slide>
                <q-carousel-slide name="7">
                 <img src="~assets/img_info07.png" alt="활동점수 & 활동등급" width="100%"/>
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
