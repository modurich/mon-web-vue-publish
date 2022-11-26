<template>
    <div class="centerarea_box1">
        <div class="con_box">
          <h2 class="line_type">
            검색
          </h2>
          <div class="box_contents">  
            <div class="search_input l_row_sl">
              <m-input filled v-model="text1" class="round_type" placeholder="검색어를 입력해 주세요">
                <template v-slot:prepend>
                  <q-icon class="ico_search" />
                </template>
              </m-input>
              <m-button-3 color="primary">검색</m-button-3>
            </div>
            <h3 class="between">
              <span class="font16">최근 검색</span>
              <button class="ico_trash">전체삭제</button>
            </h3>
            <div class="no_data">최근 검색 내역 없음</div>
            <ul class="search_list mgt32">
              <li>
                <span class="search_name">
                  삼성전자
                </span>
                <span>
                  <button class="ico_close">close</button>
                </span>
              </li>
              <li>
                <span class="search_name">
                  무명의하수
                </span>
                <span>
                  <button class="ico_close">close</button>
                </span>
              </li>
              <li>
                <span class="search_name">
                  신재생에너지
                </span>
                <span>
                  <button class="ico_close">close</button>
                </span>
              </li>
              <li>
                <span class="search_name">
                  윤석열
                </span>
                <span>
                  <button class="ico_close">close</button>
                </span>
              </li>
              <li>
                <span class="search_name">
                  mon
                </span>
                <span>
                  <button class="ico_close">close</button>
                </span>
              </li>
            </ul>
            <div class="divider1 small"/>
            <h3 class="between">
              <span class="font16">인기 검색</span>
              <span class="font12 txt_gray medium">12.25 12:50 (UTC +9)</span>
            </h3>
            <div class="best_wrap mgt32">
              <ul class="best_list">
                <li>
                  <span class="num_txt">1</span>
                  북한미사일
                </li>
                <li>
                  <span class="num_txt">2</span>
                  북한미사일
                </li>
                <li>
                  <span class="num_txt">3</span>
                  북한미사일
                </li>
                <li>
                  <span class="num_txt">4</span>
                  북한미사일
                </li>
                <li>
                  <span class="num_txt">5</span>
                  북한미사일
                </li>
              </ul>
              <ul class="best_list">
                <li>
                  <span class="num_txt">6</span>
                  북한미사일
                </li>
                <li>
                  <span class="num_txt">7</span>
                  북한미사일
                </li>
                <li>
                  <span class="num_txt">8</span>
                  북한미사일
                </li>
                <li>
                  <span class="num_txt">9</span>
                  북한미사일
                </li>
                <li>
                  <span class="num_txt">10</span>
                  북한미사일
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
        return {
        }
    },
    methods: {
    }
};
</script>
<style scoped>

</style>

