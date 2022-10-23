<template>
    <div class="centerarea_box1">
        <div class="con_box">
          <h2 class="line_type">
            테마 카테고리
          </h2>
          <div class="box_contents">  
            <div class="radio_wrap right">
                <m-radio v-model="rad1" val="B" label="상승률순"/>
                <m-radio v-model="rad1" val="C" label="하락률순"/>
            </div>
            <div class="btn_wrap">
              <m-button-3 class="font18 full" color="textPrimary">더보기</m-button-3>
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
          rad1:ref('A'),
        }
    },
    methods: {
    }
};
</script>
<style scoped>

</style>

