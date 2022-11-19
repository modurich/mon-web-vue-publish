<template>
  <div class="centerarea_box1">
      <div class="con_box">
        <h2 class="line_type between">
          <span>알림</span>
          <button class="ico_menu mgl8" color="secondary" label="Auto-Close Menu">
            menu
            <q-menu auto-close :offset="[50, 10]">
              <q-list style="min-width: 80px">
                <q-item clickable>
                  <q-item-section>푸시설정</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </button>
        </h2>
        <div class="box_contents"> 
          <m-chip-list v-dragscroll class="mgt0">
            <m-chip :to="''">전체</m-chip>
            <m-chip :to="''" :lined="true">내 콘텐츠</m-chip>
            <m-chip :to="``" :lined="true">BLASH</m-chip>
            <m-chip :to="``" :lined="true">팔로우</m-chip>
            <m-chip :to="``" :lined="true">MON/리워드</m-chip>
            <m-chip :to="``" :lined="true">활동</m-chip>
            <m-chip :to="``" :lined="true">기타</m-chip>
          </m-chip-list>
          <div class="between font12 mgb32">
            <span>❗️ 알림내역은 최근 7일간만 저장됩니다.</span>
            <span>모두 읽음</span>
          </div>
          <ul class="Notice_list">
            <li class="active">
              <a href="#">
                <div class="between mgb16">
                  <span class="eillpisis txt_dk bold">보팅 보상 지급</span>
                  <span class="arrow_wrap">
                    <i class="ico_arrow_right_dk"/>
                    <i class="dot_new"/>
                  </span>
                </div>
                <p class="font12">어드민메시지어드민메시지어드민메시지어드민메시지어드민메시지어드민메시지어드민메시지어드민메시지어드민메시지어드민메시지어드민메시지어드민메시지어드민메시...</p>
                <div class="between font12">
                  <span class="flex">2022.12.00</span>
                  <span class="primary">[MON/리워드]</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="between mgb16">
                  <span class="eillpisis txt_dk bold">BLASH 매도 알림 - 성공 종료</span>
                  <i class="ico_arrow_right_dk"/>
                </div>
                <p class="font12">어드민메시지어드민메시지어드민메시지어드민메시지어드민메시지어드민메시지어드민메시지어드민메시지어드민메시지어드민메시지어드민메시지어드민메시지어드민메시...</p>
                <div class="between font12">
                  <span class="flex">2022.12.00</span>
                  <span class="primary">[BLASH]</span>
                </div>
              </a>
            </li>
          </ul>
          <div class="no_data_wrap">
            <div class="ico_top">
              <i class="ico_error"></i>
            </div>
            <div class="com_message font18">
              새로운 알림이 없어요
            </div>
          </div>
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
            toggle1: ref(false),
        }
    }
   
};
</script>
<style scoped>

</style>
