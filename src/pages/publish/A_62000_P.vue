<template>
  <div class="centerarea_box1">
    
      <div class="con_box">
        <h2 class="line_type between">
          결제내역
        </h2>
        <div class="box_contents"> 
          <div class="date_header_wrap">
            <button class="ico_arrow_left" />
            <span class="txt_dk font16 bold">2022년 11월</span>
            <button class="ico_arrow_right" />
          </div>
          <div class="no_data_wrap">
            <div class="ico_top">
              <i class="ico_error"></i>
            </div>
            <div class="com_message font18">
              결제 내역이 없어요
            </div>
          </div>
          <div class="divider1 small" />
          <ul class="list_type2 w100">
            <li>
              <div class="l_area">
                <p class="between">
                  <span class="txt_dk font16 bold">결제완료</span>
                  <span class="font12">2022.12.00 20:23:24</span>
                </p>
                <p class="between mgb0">
                  <span>멤버십 가입 (30일)</span>
                  <span class="txt_blue1">33,000원</span>
                </p>
              </div>
            </li>
            <li>
              <div class="l_area">
                <p class="between">
                  <span class="txt_dk font16 bold">결제완료</span>
                  <span class="font12">2022.12.00 20:23:24</span>
                </p>
                <p class="between mgb0">
                  <span>멤버십 가입 (30일)</span>
                  <span class="txt_blue1">33,000원</span>
                </p>
              </div>
            </li>
            <li>
              <div class="l_area">
                <p class="between">
                  <span class="txt_dk font16 bold">결제완료</span>
                  <span class="font12">2022.12.00 20:23:24</span>
                </p>
                <p class="between mgb0">
                  <span>멤버십 가입 (30일)</span>
                  <span class="txt_blue1">33,000원</span>
                </p>
              </div>
            </li>
            <li>
              <div class="l_area">
                <p class="between">
                  <span class="txt_dk font16 bold">결제완료</span>
                  <span class="font12">2022.12.00 20:23:24</span>
                </p>
                <p class="between mgb0">
                  <span>멤버십 가입 (30일)</span>
                  <span class="txt_blue1">33,000원</span>
                </p>
              </div>
            </li>
            <li>
              <div class="l_area">
                <p class="between">
                  <span class="txt_dk font16 bold">결제완료</span>
                  <span class="font12">2022.12.00 20:23:24</span>
                </p>
                <p class="between mgb0">
                  <span>멤버십 가입 (30일)</span>
                  <span class="txt_blue1">33,000원</span>
                </p>
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
            slide: ref('1'),
        }
    }
   
};
</script>
<style scoped>

</style>
