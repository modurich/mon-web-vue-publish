<template>
    <div class="centerarea_box1">
        <div class="con_box">
          <h2 class="line_type">
            더보기
          </h2>
          <div class="box_contents">  
            <h3 class="l_row_s">
              <span class="font16">로컬설정</span>
            </h3>
            <div class="local_wrap">
                <ul class="local_list">
                    <li>
                        <span class="txt01">언어</span>
                        <span class="txt02"><button class="btn_view">한국어</button></span>
                    </li>
                    <li>
                        <span class="txt01">통화</span>
                        <span class="txt02"><button class="btn_view">원(￦)</button></span>
                    </li>
                    <li>
                        <span class="txt01">타임존</span>
                        <span class="txt02"><button class="btn_view">UTC+9</button></span>
                    </li>
                </ul>
            </div>
            <div class="divider1 small"/>
            <div class="info_wrap">
              <a href="#">
                <i class="icon ico_event"></i>
                <span>이벤트</span>
              </a>
              <a href="#">
                <i class="icon ico_info"></i>
                <span>인포데스크</span>
              </a>
              <a href="#">
                <i class="icon ico_question"></i>
                <span>퀵가이드</span>
              </a>
              <a href="#">
                <i class="icon ico_info"></i>
                <span>서비스소개</span>
              </a>
              <a href="#">
                <i class="icon ico_cs"></i>
                <span>고객센터</span>
              </a>
            </div>
            <div class="divider1 small"/>
            <div class="info_wrap">
                <m-button-3 lined color="lightGrey" class="full">로그아웃</m-button-3>
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

