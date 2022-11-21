<template>
  <div class="centerarea_box1">
      <div class="con_box">
        <h2 class="line_type between">
          <span>인기 태그 TOP 100</span>
        </h2>
        <div class="box_contents"> 
          <ul class="product_list mgt0">
              <li>
                <div class="prd_img">
                  <span class="txt_number primary">1</span>
                  <span class="txt_dk"> #삼성전자</span>
                  <span class="round_tag mgl8">3,266</span>
                </div>
              </li>
              <li>
                <div class="prd_img">
                  <span class="txt_number primary">1</span>
                  <span class="txt_dk"> #삼성전자</span>
                  <span class="round_tag mgl8">3,266</span>
                </div>
              </li>
              <li>
                <div class="prd_img">
                  <span class="txt_number primary">1</span>
                  <span class="txt_dk"> #삼성전자</span>
                  <span class="round_tag mgl8">3,266</span>
                </div>
              </li>
              <li>
                <div class="prd_img">
                  <span class="txt_number primary">1</span>
                  <span class="txt_dk"> #삼성전자</span>
                  <span class="round_tag mgl8">3,266</span>
                </div>
              </li>
              <li>
                <div class="prd_img">
                  <span class="txt_number primary">100</span>
                  <span class="txt_dk"> #삼성전자</span>
                  <span class="round_tag mgl8">3,266</span>
                </div>
              </li>
            </ul>
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
