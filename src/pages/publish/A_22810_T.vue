<template>
    <div class="centerarea_box1">
        <div class="con_box">
          <h2 class="line_type">
            내역
          </h2>
          <q-tabs class="line_type large" v-model="tab1">
            <q-tab name="A"  label="트랜젝션내역"></q-tab>
            <q-tab name="B"  label="스왑내역"></q-tab>
            <q-tab name="C"  label="sMON/원화내역"></q-tab>
          </q-tabs>
          <q-tab-panels v-model="tab1">
            <q-tab-panel name="A" class="tab_contents">
              <p class="mga16"> <m-select v-model="select1" :options="options" /></p>
              <div class="date_tit_wrap">
                <button class="ico_prev">이전</button>
                <span class="txt_date">2022년 11월</span>
                <button class="ico_next">이전</button>
              </div>
              <div class="error_wrap">
                <div class="ico_top">
                  <i class="ico_error"></i>
                </div>
                <div class="com_message font16">
                  거래내역이 없어요!
                </div>
              </div>
              <div class="divider1 xsmall" />
              <ul class="hashtag_list_wrap">
                <li>
                  <div class="list_type1">
                    <p class="between">
                      <span class="txt01">MON 수량</span>
                      <span class="txt_blue1 bold">+ 33,000</span>
                    </p>
                    <p class="between">
                      <span class="txt01">구분</span>
                      <span class="txt02">받기</span>
                    </p>
                    <p class="between">
                      <span class="txt01">거래일시</span>
                      <span class="txt02">2022.12.00 20:23:24</span>
                    </p>
                  </div>
                  <div class="hashtag_wrap">
                    <span class="txt_area">
                      <span>TX 해시</span>
                      0xe10b07920111e59e5bc93ca153ee2c7d46rdfg30xe10b07920111e59e5bc93ca153ee2c7d46rdfg30xe10b07920111e59e5bc93ca153ee2c7d46rdfg3
                    </span>
                    <span class="btn_area"><button class="ico_copy_w"/></span>
                  </div>
                </li>
                <li>
                  <div class="list_type1">
                    <p class="between">
                      <span class="txt01">MON 수량</span>
                      <span class="txt_red1 bold">-1,000</span>
                    </p>
                    <p class="between">
                      <span class="txt01">구분</span>
                      <span class="txt02">보내기</span>
                    </p>
                    <p class="between">
                      <span class="txt01">거래일시</span>
                      <span class="txt02">2022.12.00 20:23:24</span>
                    </p>
                  </div>
                  <div class="hashtag_wrap">
                    <span class="txt_area">
                      <span>TX 해시</span>
                      0xe10b07920111e59e5bc93ca153ee2c7d46rdfg30xe10b07920111e59e5bc93ca153ee2c7d46rdfg30xe10b07920111e59e5bc93ca153ee2c7d46rdfg3
                    </span>
                    <span class="btn_area"><button class="ico_copy_w"/></span>
                  </div>
                </li>
              </ul>
            </q-tab-panel>
            <q-tab-panel name="B" class="tab_contents">
              <p class="mga16"> <m-select v-model="select1" :options="options" /></p>
              <div class="date_tit_wrap">
                <button class="ico_prev">이전</button>
                <span class="txt_date">2022년 11월</span>
                <button class="ico_next">이전</button>
              </div>
              <div class="error_wrap">
                <div class="ico_top">
                  <i class="ico_error"></i>
                </div>
                <div class="com_message font16">
                  거래내역이 없어요!
                </div>
              </div>
              <div class="divider1 xsmall" />
              <ul class="hashtag_list_wrap">
                <li>
                  <div class="list_type1">
                    <p class="between">
                      <span class="txt01">구분</span>
                      <span class="txt02">sMON → MON</span>
                    </p>
                    <p class="between">
                      <span class="txt01">거래수량</span>
                      <span class="txt02 primary">49,995 sMON</span>
                    </p>
                    <p class="between">
                      <span class="txt01">수수료</span>
                      <span class="txt02">5 sMON</span>
                    </p>
                    <p class="between">
                      <span class="txt01">거래일시</span>
                      <span class="txt02">2022.12.00 20:23:24</span>
                    </p>
                  </div>
                  <div class="hashtag_wrap">
                    <span class="txt_area">
                      <span>TX 해시</span>
                      0xe10b07920111e59e5bc93ca153ee2c7d46rdfg30xe10b07920111e59e5bc93ca153ee2c7d46rdfg30xe10b07920111e59e5bc93ca153ee2c7d46rdfg3
                    </span>
                    <span class="btn_area"><button class="ico_copy_w"/></span>
                  </div>
                </li>
                <li>
                  <div class="list_type1">
                    <p class="between">
                      <span class="txt01">구분</span>
                      <span class="txt02">sMON → MON</span>
                    </p>
                    <p class="between">
                      <span class="txt01">거래수량</span>
                      <span class="txt02 primary">49,995 sMON</span>
                    </p>
                    <p class="between">
                      <span class="txt01">수수료</span>
                      <span class="txt02">5 sMON</span>
                    </p>
                    <p class="between">
                      <span class="txt01">거래일시</span>
                      <span class="txt02">2022.12.00 20:23:24</span>
                    </p>
                  </div>
                  <div class="hashtag_wrap">
                    <span class="txt_area">
                      <span>TX 해시</span>
                      0xe10b07920111e59e5bc93ca153ee2c7d46rdfg30xe10b07920111e59e5bc93ca153ee2c7d46rdfg30xe10b07920111e59e5bc93ca153ee2c7d46rdfg3
                    </span>
                    <span class="btn_area"><button class="ico_copy_w"/></span>
                  </div>
                </li>
              </ul>
              
            </q-tab-panel>
            <q-tab-panel name="C" class="tab_contents">
              <p class="mga16"> <m-select v-model="select1" :options="options" /></p>
              <div class="date_tit_wrap">
                <button class="ico_prev">이전</button>
                <span class="txt_date">2022년 11월</span>
                <button class="ico_next">이전</button>
              </div>
              <div class="error_wrap">
                <div class="ico_top">
                  <i class="ico_error"></i>
                </div>
                <div class="com_message font16">
                  거래내역이 없어요!
                </div>
              </div>
              <div class="divider1 xsmall" />
              <ul class="hashtag_list_wrap">
                <li>
                  <div class="list_type1">
                    <p class="between">
                      <span class="txt_dk font16 bold">의제등록</span>
                      <span class="font12">2022.12.00 20:23:24</span>
                    </p>
                    <p class="between">
                      <span>sMON</span>
                      <span class="txt_red1">-100</span>
                    </p>
                  </div>
                </li>
                <li>
                  <div class="list_type1">
                    <p class="between">
                      <span class="txt_dk font16 bold">구매 (BLASH)</span>
                      <span class="font12">2022.12.00 20:23:24</span>
                    </p>
                    <p class="between">
                      <span>sMON</span>
                      <span class="txt_red1">-100</span>
                    </p>
                  </div>
                </li>
                <li>
                  <div class="list_type1">
                    <p class="between">
                      <span class="txt_dk font16 bold">관리자지급</span>
                      <span class="font12">2022.12.00 20:23:24</span>
                    </p>
                    <p class="between">
                      <span>sMON</span>
                      <span class="txt_blue1">1,000</span>
                    </p>
                  </div>
                </li>
              </ul>
              
            </q-tab-panel>
          </q-tab-panels>
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
          tab1: ref('A'),
          progress: 0.4
        }
    },
    methods: {
    }
};
</script>
<style scoped>

</style>

