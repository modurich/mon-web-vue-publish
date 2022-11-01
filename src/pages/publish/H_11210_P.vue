<template>
    <div class="centerarea_box1">
        <div class="con_box">
          <h2 class="line_type">프로필</h2>
          <m-tabs class="line_type large" v-model="tab1" :items="tabs"/>
          <div class="tab_contents" v-if="tab1 == 'A'">
            <!-- S 전체-->
            <div class="radio_wrap right">
                <m-radio v-model="rad1" val="A" label="전체기간"/>
                <m-radio v-model="rad1" val="B" label="최근 3개월"/>
            </div>
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
          <div class="tab_contents" v-if="tab1 == 'B'">
            <!-- S 주식 -->
           
            <!-- E 주식 -->
          </div>
          <div class="tab_contents" v-if="tab1 == 'C'">
            <!-- S 코인 -->
           
            <!-- E 코인 -->
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
            text1:ref('호빵맨'),
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
