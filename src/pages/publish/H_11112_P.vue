<template>
  <div class="centerarea_box1">
      <div class="con_box">
        <h2 class="line_type between">
          <span>관심그룹편집</span>
          <button class="primary font14 medium">그룹명 변경</button>
        </h2>
        <div class="box_contents"> 
          <m-chip-list v-dragscroll class="mgt0 m_chip_tab1">
            <m-chip :to="''">기본</m-chip>
            <m-chip :to="''" :lined="true"><button class="ico_close_gray">close</button>그룹1 </m-chip>
            <m-chip :to="``" :lined="true"><button class="ico_close_gray">close</button>그룹2</m-chip>
            <m-chip :to="``" :lined="true"><button class="ico_close_gray">close</button>그룹3</m-chip>
            <m-chip :to="``" :lined="true"><button class="ico_close_gray">close</button>그룹4</m-chip>
            <m-chip :to="``" :lined="true"><button class="ico_close_gray">close</button>그룹5</m-chip>
            <m-chip :to="``" :lined="true"><button class="ico_close_gray">close</button>그룹6</m-chip>
          </m-chip-list>
          <div class="between">
            <span> <m-checkbox size="md" v-model="check1" class="mgr16"/> 전체 10개</span>
            <div class="flex">
              <button class="primary font14 medium">+ 자산추가</button>
            </div>
          </div>
          <!--S 관심그룹편집-->
          <ul class="product_list">
            <li>
              <a href="#" class="inflex_link button_add">
                <div class="prd_img">
                  <m-checkbox size="md" v-model="check1" class="mgr16"/>
                  <div class="img_area small">
                    <img src="~assets/prd_logo.png" alt="logo" />
                  </div>
                  <div>
                    <div class="font16 txt_dk">삼성전자우</div>
                    <div class="txt02">코스피 005930</div>
                  </div>
                </div>
              </a>
              <button class="ico_area">
                <i class="ico_menu01" />
              </button> 
            </li>
            <li>
              <a href="#" class="inflex_link button_add">
                <div class="prd_img">
                  <m-checkbox size="md" v-model="check1" class="mgr16"/>
                  <div class="img_area small">
                    <img src="~assets/prd_logo.png" alt="logo" />
                  </div>
                  <div>
                    <div class="font16 txt_dk">삼성전자우</div>
                    <div class="txt02">코스피 005930</div>
                  </div>
                </div>
              </a>
              <button class="ico_area">
                <i class="ico_menu01" />
              </button> 
            </li>
            <li>
              <a href="#" class="inflex_link button_add">
                <div class="prd_img">
                  <m-checkbox size="md" v-model="check1" class="mgr16"/>
                  <div class="img_area small">
                    <img src="~assets/prd_logo.png" alt="logo" />
                  </div>
                  <div>
                    <div class="font16 txt_dk">삼성전자우</div>
                    <div class="txt02">코스피 005930</div>
                  </div>
                </div>
              </a>
              <button class="ico_area">
                <i class="ico_menu01" />
              </button> 
            </li>
            <li>
              <a href="#" class="inflex_link button_add">
                <div class="prd_img">
                  <m-checkbox size="md" v-model="check1" class="mgr16"/>
                  <div class="img_area small">
                    <img src="~assets/prd_logo.png" alt="logo" />
                  </div>
                  <div>
                    <div class="font16 txt_dk">삼성전자우</div>
                    <div class="txt02">코스피 005930</div>
                  </div>
                </div>
              </a>
              <button class="ico_area">
                <i class="ico_menu01" />
              </button> 
            </li>
            <li>
              <a href="#" class="inflex_link button_add">
                <div class="prd_img">
                  <m-checkbox size="md" v-model="check1" class="mgr16"/>
                  <div class="img_area small">
                    <img src="~assets/prd_logo.png" alt="logo" />
                  </div>
                  <div>
                    <div class="font16 txt_dk">삼성전자우</div>
                    <div class="txt02">코스피 005930</div>
                  </div>
                </div>
              </a>
              <button class="ico_area">
                <i class="ico_menu01" />
              </button> 
            </li>
          </ul>
          <!--E 관심그룹편집-->
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
