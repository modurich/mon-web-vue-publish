<template>
  <div class="centerarea_box01">
    <q-form>
      <div class="con_box">
        <div style="padding:32px">
          <m-button-3 @click="dailog2 = true" lined color="primary">스테이킹이란?</m-button-3>
        </div>
        <!-- S 종목 공개하기 -->
        <m-dialog v-model="dailog2">
          <div class="dailog_wrap">
            <div class="dailog_top">
              <q-btn icon="close" flat v-close-popup />
            </div>
            <q-card-section class="dailog_contents">
              <p class="dialog_tit l_row_l">스테이킹이란?</p>
              <div class="pop_img_wrap">
                <img src="~assets/staking_img01.svg" 
                alt="스테이킹 이자풀 리워드 풀 수익풀 유저 소각/운영재원 탈중앙화 거버넌스">
              </div>
              <p class="dialog_tit l_row_l mgt32">< 몬스탁 토큰 Ecosystem ></p>
              <div class="staking_con">
                몬스탁은 토큰 생태계 확장과 순환을 위해 서비스에서 사용자가 사용한 토큰 (MON, sMON)의 일부를 활동 보상과 스테이킹 보상으로 환원하고 있습니다.<br/><br/>

                보유한 토큰을 몬스탁에 예치하시면 지분율에 따라 매일 보상을 받을 수 있습니다.<br/><br/>

                또한 스테이킹 수량에 따라 보팅파워(VP)를 추가 지급합니다.<br/><br/>
              </div>
            </q-card-section>
          </div>
        </m-dialog>
        <!-- E 종목 공개하기 -->
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
      dailog2: ref(false),
    }
  },
  methods: {
  }
};
</script>
