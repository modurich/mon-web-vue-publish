<template>
  <div class="centerarea_box1">
      <div class="con_box">
        <h2 class="line_type between">
          <span>관심그룹 <span class="primary font14 medium">(총14개 종목)</span></span>
          <button class="ico_menu mgl8" color="secondary" label="Auto-Close Menu">
            menu
            <q-menu auto-close :offset="[70, 10]">
              <q-list style="min-width: 80px">
                <q-item clickable>
                  <q-item-section>새그룹 추가</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </button>
        </h2>
        <div class="box_contents"> 
          <m-chip-list v-dragscroll class="mgt0">
            <m-chip :to="''">기본</m-chip>
            <m-chip :to="''" :lined="true">그룹1</m-chip>
            <m-chip :to="``" :lined="true">그룹2</m-chip>
            <m-chip :to="``" :lined="true">그룹3</m-chip>
            <m-chip :to="``" :lined="true">그룹4</m-chip>
            <m-chip :to="``" :lined="true">그룹5</m-chip>
            <m-chip :to="``" :lined="true">그룹6</m-chip>
          </m-chip-list>
          <div class="between">
            <span>전체 10개</span>
            <div class="flex">
              <div><m-checkbox size="md" v-model="check1" label="평단가 보기"/></div>
              <button class="btn_setting mgl16"><i class="ico_setting"/> 설정
                <q-menu auto-close :offset="[60, 10]">
                    <q-list style="min-width: 80px">
                      <q-item clickable>
                        <q-item-section>자산 추가</q-item-section>
                      </q-item>
                      <q-item clickable>
                        <q-item-section>자산 삭제</q-item-section>
                      </q-item>
                      <q-item clickable>
                        <q-item-section>자산 순서 변경</q-item-section>
                      </q-item>
                      <q-item clickable>
                        <q-item-section>그룹명 변경</q-item-section>
                      </q-item>
                      <q-item clickable>
                        <q-item-section>그룹삭제</q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
              </button>
            </div>
          </div>
          <!--S 관심그룹-->
          <ul class="product_list">
            <li>
              <div class="prd_img">
                <div class="img_area small">
                  <img src="~assets/prd_logo.png" alt="logo" />
                </div>
                <div>
                  <div class="font16 txt_dk">삼성전자우</div>
                  <div class="txt02">코스피 005930</div>
                </div>
              </div>
              <div class="right flex">
                <span>
                  <span class="tag_blue mgb4">+1.24%</span><br/>
                  <span class="font12">₩ 352,100</span>
                </span>
                <button class="ico_menu mgl8" color="secondary" label="Auto-Close Menu">
                  menu
                  <q-menu auto-close :offset="[80, 10]">
                    <q-list style="min-width: 80px">
                      <q-item clickable>
                        <q-item-section>인사이트 작성</q-item-section>
                      </q-item>
                      <q-item clickable>
                        <q-item-section>BLASH 작성</q-item-section>
                      </q-item>
                      <q-item clickable>
                        <q-item-section>평단가 수정</q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </button>
              </div> 
            </li>
            <li>
              <div class="prd_img">
                <div class="img_area small">
                  <img src="~assets/prd_logo.png" alt="logo" />
                </div>
                <div>
                  <div class="font16 txt_dk">삼성전자우</div>
                  <div class="txt02">코스피 005930</div>
                </div>
              </div>
              <div class="right flex">
                <span>
                  <span class="tag_red mgb4">-12.26%</span><br/>
                  <span class="font12">₩ 352,100</span>
                </span>
                <button class="ico_menu mgl8" color="secondary" label="Auto-Close Menu">
                menu
                <q-menu auto-close :offset="[80, 10]">
                  <q-list style="min-width: 80px">
                    <q-item clickable>
                      <q-item-section>인사이트 작성</q-item-section>
                    </q-item>
                    <q-item clickable>
                      <q-item-section>BLASH 작성</q-item-section>
                    </q-item>
                    <q-item clickable>
                      <q-item-section>평단가 수정</q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </button>
              </div> 
            </li>
          </ul>
          <ul class="product_list">
            <li>
              <div class="prd_img">
                <div class="img_area small">
                  <img src="~assets/prd_logo.png" alt="logo" />
                </div>
                <div>
                  <div class="font16 txt_dk">삼성전자우</div>
                  <div class="txt02">코스피 005930</div>
                </div>
              </div>
              <div class="right flex">
                <span>
                  <span class="tag_blue mgb4">+1.24%</span><br/>
                  <span class="font12">₩ 352,100</span>
                </span>
                <button class="ico_menu mgl8" color="secondary" label="Auto-Close Menu">
                  menu
                  <q-menu auto-close :offset="[80, 10]">
                    <q-list style="min-width: 80px">
                      <q-item clickable>
                        <q-item-section>인사이트 작성</q-item-section>
                      </q-item>
                      <q-item clickable>
                        <q-item-section>BLASH 작성</q-item-section>
                      </q-item>
                      <q-item clickable>
                        <q-item-section>평단가 수정</q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </button>
              </div> 
              <div class="footer_list">
                <div>
                  <span class="font12">평단가</span>
                  <span class="txt_dk">＄0.0123456789</span>
                </div>
                <div>
                  <span class="font12">수익률</span>
                  <span class="txt_blue1">+00.00%</span>
                </div>
              </div>
            </li>
            <li>
              <div class="prd_img">
                <div class="img_area small">
                  <img src="~assets/prd_logo.png" alt="logo" />
                </div>
                <div>
                  <div class="font16 txt_dk">삼성전자우</div>
                  <div class="txt02">코스피 005930</div>
                </div>
              </div>
              <div class="right flex">
                <span>
                  <span class="tag_red mgb4">-1.94%</span><br/>
                  <span class="font12">₩ 352,100</span>
                </span>
                <button class="ico_menu mgl8" color="secondary" label="Auto-Close Menu">
                  menu
                  <q-menu auto-close :offset="[80, 10]">
                    <q-list style="min-width: 80px">
                      <q-item clickable>
                        <q-item-section>인사이트 작성</q-item-section>
                      </q-item>
                      <q-item clickable>
                        <q-item-section>BLASH 작성</q-item-section>
                      </q-item>
                      <q-item clickable>
                        <q-item-section>평단가 수정</q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </button>
              </div> 
              <div class="footer_list">
                <div>
                  <span class="font12">평단가</span>
                  <span class="txt_dk">＄0.0123456789</span>
                </div>
                <div>
                  <span class="font12">수익률</span>
                  <span class="txt_red">-00.00%</span>
                </div>
              </div>
            </li>
          </ul>
          <!--E 관심그룹-->
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
        }
    }
   
};
</script>
<style scoped>

</style>
