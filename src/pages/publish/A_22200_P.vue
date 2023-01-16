<template>
    <div class="centerarea_box1">
        <div class="con_box">
          <h2 class="line_type">
            락업정보
          </h2>
          <div class="box_contents">  
            <div class="lookup_wrap">
              <span class="ico_wrap"><i class="ico_token"/>MON</span>
              <p class="between">
                <span>락업중</span>
                <span class="bold font16">10</span>
              </p>
              <p class="between">
                <span class="txt_dk">락업 해제 가능</span>
                <span class="bold primary font16">20</span>
              </p>
              <div class="btn_wrap mgt32">
                <m-button-3 color="primary" class="full">락업 해제</m-button-3>
              </div>
              <p class="txt_info01">락업중인 MON 수량은 락업 해제 후 외부지갑 보내기 또는 sMON 스왑이 가능합니다.</p>
            </div>
            <div class="between font12">
              <span>MON 수량</span>
              <span>락업해제 예정일</span>
            </div>
            <div class="divider1 mgt16 mgb0"/>
              <ul class="list_type1 line2">
                <li>
                  <a href="#" class="flex_link between">
                    <span class="primary bold">10.0000000000</span>
                    <span class="font12 txt_dk">2022.12.28 11:30:07</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex_link between">
                    <span class="primary bold">10.0000000000</span>
                    <span class="font12 txt_dk">2022.12.28 11:30:07</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex_link between">
                    <span class="primary bold">10.0000000000</span>
                    <span class="font12 txt_dk">2022.12.28 11:30:07</span>
                  </a>
                </li>
              </ul>
              <div class="error_wrap">
                <div class="ico_top">
                  <i class="ico_error"></i>
                </div>
                <div class="com_message font16">
                  락업 해제 예정인 MON 수량이 없어요!
                </div>
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

