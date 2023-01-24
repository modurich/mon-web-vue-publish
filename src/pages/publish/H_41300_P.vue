<template>
    <div class="centerarea_box1">
        <div class="con_box">
          <h2 class="line_type">
            출금내역
          </h2>
            <div class="box_contents">
              <div class="error_wrap">
                <div class="ico_top">
                  <i class="ico_error"></i>
                </div>
                <div class="com_message font16">
                  출금요청 내역이 없습니다.
                </div>
              </div>
              <div class="between font12">
                <span>출금요청 금액 / 일자</span>
                <span>출금결과</span>
              </div>
              <div class="divider1 xsmall"/>
              <ul class="list_type2">
                <li>
                  <a href="#">
                    <div class="l_area">
                      <p class="txt_tit primary">
                        49,855.7777777
                        <span class="font12 txt_dk medium">MON</span>
                      </p>
                      <span class="logo_area">
                        2022.12.28 11:30:07
                      </span>
                    </div>
                    <div class="r_area">
                      <m-button-3 color="lightGrey1" size="small" class="full">6일 남음</m-button-3>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="l_area">
                      <p class="txt_tit primary">
                        49,855.7777777
                        <span class="font12 txt_dk medium">MON</span>
                      </p>
                      <span class="logo_area">
                        2022.12.28 11:30:07
                      </span>
                    </div>
                    <div class="r_area">
                      <m-button-3 color="lightGrey1" size="small" class="full">6일 남음</m-button-3>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="l_area">
                      <p class="txt_tit primary">
                        49,855.7777777
                        <span class="font12 txt_dk medium">MON</span>
                      </p>
                      <span class="logo_area">
                        2022.12.28 11:30:07
                      </span>
                    </div>
                    <div class="r_area">
                      <m-button-3 color="lightGrey1" size="small" class="full">6일 남음</m-button-3>
                    </div>
                  </a>
                </li>
              </ul>
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
          check1:'',
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

