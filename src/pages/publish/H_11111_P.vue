<template>
    <div class="centerarea_box1">
        <div class="con_box">
          <h2 class="line_type">관심 자산 추가</h2>
          <div class="box_contents">  
            <div class="search_input l_row_sl">
                <m-input filled v-model="text1" class="round_type" placeholder="검색어를 입력해 주세요">
                  <template v-slot:prepend>
                    <q-icon class="ico_search" />
                  </template>
                </m-input>
                <m-button-3 color="primary">검색</m-button-3>
              </div>
              <div class="no_data_wrap">
                <div class="ico_top">
                  <i class="ico_error"></i>
                </div>
                <div class="com_message font18">
                  일치하는 종목이 없습니다.
                </div>
              </div>
              <h3 class="between">
                <span class="font16">인기 검색</span>
                <span class="font12 txt_gray">12.25 12:50 (UTC +9)</span>
              </h3>
              <ul class="product_list">
                <li>
                  <div class="prd_img">
                    <span class="txt_number">1</span>
                    <div class="img_area">
                      <img src="~assets/prd_logo.png" alt="profile" />
                    </div>
                    <div class="tit_area">
                      <span class="txt01">삼성전자우</span>
                      <span class="txt02">
                        코스피 005930
                      </span>
                    </div>
                  </div>
                  <div class="ico_area">
                    <q-checkbox v-model="v_true" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                      indeterminate-icon="help" />
                  </div>
                </li>
                <li>
                  <div class="prd_img">
                    <span class="txt_number">2</span>
                    <div class="img_area">
                      <img src="~assets/prd_logo.png" alt="profile" />
                    </div>
                    <div class="tit_area">
                      <span class="txt01">삼성전자우</span>
                      <span class="txt02">
                        코스피 005931
                      </span>
                    </div>
                  </div>
                  <div class="ico_area">
                    <q-checkbox v-model="v_true" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                    indeterminate-icon="help" />
                  </div>
                </li>
                <li>
                  <div class="prd_img">
                    <span class="txt_number">3</span>
                    <div class="img_area">
                      <img src="~assets/prd_logo.png" alt="profile" />
                    </div>
                    <div class="tit_area">
                      <span class="txt01">삼성전자우</span>
                      <span class="txt02">
                        코스피 005932
                      </span>
                    </div>
                  </div>
                  <div class="ico_area">
                    <q-checkbox v-model="v_true" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                    indeterminate-icon="help" />
                  </div>
                </li>
                <li>
                  <div class="prd_img">
                    <span class="txt_number">4</span>
                    <div class="img_area">
                      <img src="~assets/prd_logo.png" alt="profile" />
                    </div>
                    <div class="tit_area">
                      <span class="txt01">삼성전자우</span>
                      <span class="txt02">
                        코스피 005932
                      </span>
                    </div>
                  </div>
                  <div class="ico_area">
                    <q-checkbox v-model="v_true" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                    indeterminate-icon="help" />
                  </div>
                </li>
                <li>
                  <div class="prd_img">
                    <span class="txt_number">100</span>
                    <div class="img_area">
                      <img src="~assets/prd_logo.png" alt="profile" />
                    </div>
                    <div class="tit_area">
                      <span class="txt01">삼성전자우</span>
                      <span class="txt02">
                        코스피 005932
                      </span>
                    </div>
                  </div>
                  <div class="ico_area">
                    <q-checkbox v-model="v_true" size="24" checked-icon="favorite" unchecked-icon="favorite_border"
                    indeterminate-icon="help" />
                  </div>
                </li>
              </ul>
              <!-- S 전체-->
          </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import MDialogBlank from 'src/components/MDialogBlank.vue';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import VClamp from '@boyuai/vue-clamp';



export default {
  components: { MDialogBlank, Swiper, SwiperSlide, VClamp },
    name: 'A_10000_P',
    
    data() {
        return {
            text1:ref(''),
            text2:ref(''),
            text3:ref(''),
            tab1:ref('A'),
            tab2:ref('A'),
            rad1:ref('A'),
            v_true: ref(true),
            tabs:[
                {label:'전체', value:'A', icon:''},
                {label:'주식', value:'B', icon:''},
                {label:'코인', value:'C', icon:''}
            ],
            dailog1:ref(false),
            polcyType:ref('01'),
            textarea1 : {
                value: "",
                counter: true,
                minHeight: 100,
                showError: true,
                //bottomMessage: "바닥메시지"
            },
        }
    },
    methods: {
  }
};
</script>
<style scoped>

</style>
