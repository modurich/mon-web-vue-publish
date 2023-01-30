<template>
    <div class="centerarea_box1">
      <q-form>
        <div class="con_box">
          <h2 class="line_type">NFT샵</h2>
          <q-tabs class="line_type large" v-model="tab1">
            <q-tab name="A"  label="판매중"></q-tab>
            <q-tab name="B"  label="예정"></q-tab>
            <q-tab name="C"  label="종료"></q-tab>
            <q-tab name="D"  label="내 입찰내역"></q-tab>
          </q-tabs>
          <q-tab-panels v-model="tab1">
            <q-tab-panel name="A" class="tab_contents">
              <div class="radio_wrap mgt16 flex right">
                  <m-radio v-model="rad1" val="A" label="마감임박순"/>
                  <m-radio v-model="rad1" val="B" label="최근등록순"/>
              </div>
              <div class="error_wrap">
                <div class="ico_top">
                  <i class="ico_error"></i>
                </div>
                <div class="com_message font16">
                  판매중인 NFT가 없습니다.
                </div>
              </div>
            </q-tab-panel>
          </q-tab-panels>
          <q-tab-panels v-model="tab1">
            <q-tab-panel name="B" class="tab_contents">
              <ul class="nft_list_wrap">
                <li>
                  <a href="#" class="link_flex">
                    <div class="img_area"><img src="~assets/nft_bronze.png" alt="" width="80px" height="80px" /></div>
                    <p class="txt_tit">웰컴 카드 - 브론즈</p>
                    <p class="txt_con">500 <span class="font12 medium">MON ~</span> </p>
                    <span class="txt_date"><i class="ico_clock_w"/>1월 1일, 12시</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="link_flex">
                    <div class="img_area"><img src="~assets/nft_bronze.png" alt="" width="80px" height="80px" /></div>
                    <p class="txt_tit">웰컴 카드 - 브론즈</p>
                    <p class="txt_con">500 <span class="font12 medium">MON ~</span> </p>
                    <span class="txt_date"><i class="ico_clock_w"/>1월 1일, 12시</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="link_flex">
                    <div class="img_area"><img src="~assets/nft_bronze.png" alt="" width="80px" height="80px" /></div>
                    <p class="txt_tit">웰컴 카드 - 브론즈</p>
                    <p class="txt_con">500 <span class="font12 medium">MON ~</span> </p>
                    <span class="txt_date"><i class="ico_clock_w"/>1월 1일, 12시</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="link_flex">
                    <div class="img_area"><img src="~assets/nft_bronze.png" alt="" width="80px" height="80px" /></div>
                    <p class="txt_tit">웰컴 카드 - 브론즈</p>
                    <p class="txt_con">500 <span class="font12 medium">MON ~</span> </p>
                    <span class="txt_date"><i class="ico_clock_w"/>1월 1일, 12시</span>
                  </a>
                </li>
              </ul>
              <div class="error_wrap">
                <div class="ico_top">
                  <i class="ico_error"></i>
                </div>
                <div class="com_message font16">
                  판매예정인 NFT가 없습니다.
                </div>
              </div>
            </q-tab-panel>
          </q-tab-panels>
          <q-tab-panels v-model="tab1">
            <q-tab-panel name="C" class="tab_contents">
              <ul class="nft_list_wrap">
                <li>
                  <a href="#" class="link_flex">
                    <div class="img_area"><img src="~assets/nft_lifetime.png" alt="" width="80px" height="80px" /></div>
                    <p class="txt_tit">평생멤버십 #016</p>
                    <p class="txt_con">70,000 <span class="font12 medium">MON</span></p>
                  </a>
                </li>
                <li>
                  <a href="#" class="link_flex">
                    <div class="img_area"><img src="~assets/nft_lifetime.png" alt="" width="80px" height="80px" /></div>
                    <p class="txt_tit">평생멤버십 #016</p>
                    <p class="txt_con">70,000 <span class="font12 medium">MON</span></p>
                  </a>
                </li>
                <li>
                  <a href="#" class="link_flex">
                    <div class="img_area"><img src="~assets/nft_lifetime.png" alt="" width="80px" height="80px" /></div>
                    <p class="txt_tit">평생멤버십 #016</p>
                    <p class="txt_con">70,000 <span class="font12 medium">MON</span></p>
                  </a>
                </li>
                <li>
                  <a href="#" class="link_flex">
                    <div class="img_area"><img src="~assets/nft_lifetime.png" alt="" width="80px" height="80px" /></div>
                    <p class="txt_tit">평생멤버십 #016</p>
                    <p class="txt_con">70,000 <span class="font12 medium">MON</span></p>
                  </a>
                </li>
              </ul>
            </q-tab-panel>
          </q-tab-panels>
          <q-tab-panels v-model="tab1">
            <q-tab-panel name="D" class="tab_contents">
              <ul class="nft_list_wrap">
                <li>
                  <a href="#" class="link_flex">
                    <div class="img_area"><img src="~assets/nft_bronze.png" alt="" width="80px" height="80px" /></div>
                    <p class="txt_tit">웰컴 카드 - 브론즈</p>
                    <p class="txt_con"> - </p>
                    <span class="txt_date">낙찰취소</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="link_flex">
                    <div class="img_area"><img src="~assets/nft_bronze.png" alt="" width="80px" height="80px" /></div>
                    <p class="txt_tit">웰컴 카드 - 브론즈</p>
                    <p class="txt_con"> - </p>
                    <span class="txt_date">낙찰취소</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="link_flex">
                    <div class="img_area"><img src="~assets/nft_bronze.png" alt="" width="80px" height="80px" /></div>
                    <p class="txt_tit">웰컴 카드 - 브론즈</p>
                    <p class="txt_con"> - </p>
                    <span class="txt_date">낙찰취소</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="link_flex">
                    <div class="img_area"><img src="~assets/nft_bronze.png" alt="" width="80px" height="80px" /></div>
                    <p class="txt_tit">웰컴 카드 - 브론즈</p>
                    <p class="txt_con"> - </p>
                    <span class="txt_date">낙찰취소</span>
                  </a>
                </li>
              </ul>
              <div class="error_wrap">
                <div class="ico_top">
                  <i class="ico_error"></i>
                </div>
                <div class="com_message font16">
                  내가 입찰한 NFT가 없습니다.
                </div>
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </div>
      </q-form>
    </div>
</template>

<script>
import { ref } from 'vue';
import MDialogBlank from 'src/components/MDialogBlank.vue';

export default {
  components: { MDialogBlank },
    name: 'A_10000_P',
    data() {
        return {
          tab1: ref('A'),
          rad1:ref('A'),
        }
    },
};
</script>
