<template>
  <div class="centerarea_box01">
    <q-form>
      <div class="con_box">
        <div style="padding:32px">
          <m-button-3 @click="dailog2 = true" lined color="primary">의제 투표란?</m-button-3>
        </div>
        <!-- S 종목 공개하기 -->
        <m-dialog v-model="dailog2">
          <div class="dailog_wrap">
            <div class="dailog_top">
              <q-btn icon="close" flat v-close-popup />
            </div>
            <q-card-section class="dailog_contents">
              <p class="dialog_tit l_row_l">의제 투표란?</p>
              <div class="l_row">
               <p class="line26 center">몬스탁 서비스의 주요 결정사항을 직접 투표를 통해 결정할 수 있습니다.
               투표는 VP가 소진되지 않으니 자유롭게 투표하고 활동포인트도 받으세요!</p>
              </div>
              <div class="pop_img_wrap">
                <img src="~assets/agenda_img01.svg" 
                alt="스테이킹 이자풀 리워드 풀 수익풀 유저 소각/운영재원 탈중앙화 거버넌스">
              </div>
              <p class="dialog_tit mgt32 mgb8">< PRO 승급 투표 ></p>
              <div class="l_row">
               <p class="line26 center">PRO 뱃지 지급 및 특별 권한 제공</p>
              </div>
              <div class="pop_img_wrap">
                <img src="~assets/agenda_img02.svg" 
                alt="스테이킹 이자풀 리워드 풀 수익풀 유저 소각/운영재원 탈중앙화 거버넌스">
              </div>
              <p class="dialog_tit mgt32 mgb8">< BEST 콘텐츠 투표 ></p>
              <div class="l_row">
               <p class="line26 center">BLASH, 인사이트, 포스트를 BEST 영구 지정<br/>
                BEST 탭에 아카이빙</p>
              </div>
              <div class="pop_img_wrap">
                <img src="~assets/agenda_img03.svg" 
                alt="스테이킹 이자풀 리워드 풀 수익풀 유저 소각/운영재원 탈중앙화 거버넌스">
              </div>
              <div class="l_row mgt32">
               <p class="line26 center">의제 등록방법 등 더 자세한 안내는 <a href="#" class="link_type1">이용안내</a> 를 참고해주세요.</p>
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
