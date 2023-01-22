<template>
    <div class="centerarea_box1">
        <div class="con_box">
          <h2 class="line_type">
            원화 출금
          </h2>
            <div class="box_contents">
              <h3 class="between mgt32 mgb26">
                <span>출금 계좌</span>
                <a href="#" class="link_view gray">등록/변경</a>
              </h3>
              <ul class="list_type1">
                <li>
                  <span class="txt01">등록상태</span>
                  <span class="txt02 txt_blue1">승인완료</span>
                </li>
                <li>
                  <span class="txt01">금융기관명</span>
                  <span class="txt02">기업은행</span>
                </li>
                <li>
                  <span class="txt01">계좌번호</span>
                  <span class="txt02">12345678901234567890</span>
                </li>
                <li>
                  <span class="txt01">예금주명</span>
                  <span class="txt02">홍길동</span>
                </li>
              </ul>
              <div class="divider"/>
              <h3 class="between mgt32 mgb26">
                <span>출금 금액</span>
              </h3>
              <ul class="list_type1">
                <li>
                  <span class="txt01">최대출금가능금액</span>
                  <span class="txt02 font16 bold primary">₩ 1,000</span>
                </li>
              </ul>
              <div>
                <m-input filled v-model="text1" class="round_type" placeholder="출금할 금액 입력"></m-input>
              </div>
              <div class="list_info">
                <p>최소 ₩ 50,000 ( ₩ 1,000 단위) 출금 가능</p>
                <p>하루 최대 ₩ 2,000,000 출금 가능</p>
                <p>최대 10 영업일이 소요되며, 출금수수료(10.0%), 사업소득세(3.3%) 원천징수 후 실 수령액으로 지급됩니다.</p>
              </div>
              <div class="btn_wrap mgt32">
                <m-button-3 size="large" color="primary" class="full">출금 신청</m-button-3>
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

