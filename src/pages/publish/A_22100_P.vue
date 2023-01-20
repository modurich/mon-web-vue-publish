<template>
    <div class="centerarea_box1">
      <div class="con_box">
        <h2 class="line_type">
          지갑연결
        </h2> 
        <div class="centerarea_box">
          <div class="btn_wrap mga32"><m-button-3  color="klip" class="full" size="large"><i class="ico_sb ico_klip_w"/>Klip 지갑 연결</m-button-3></div>
          <div class="btn_wrap mga32"><m-button-3  color="kaikas" class="full" size="large"><i class="ico_sb ico_kaikas_w"/>Kaikas 지갑 연결</m-button-3></div>
          <div class="btn_wrap mga32"><m-button-3  color="wallet" class="full" size="large"><i class="ico_sb ico_wallet_w"/>Wallet Connect</m-button-3></div>
          <p class="mgb16 center font12 bold">- 월렛커넥트 지원 지갑 -</p>
          <p class="sb_list">
            <!-- <i class="ico_sb big sb_klaytn"/> -->
            <i class="ico_sb big sb_metamask"/>
            <i class="ico_sb big sb_dcent"/>
          </p>
        </div>
      </div>
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
            text1:ref('호빵맨'),
            text2:ref('monstock@monstock.com'),
            text3:ref('**********'),
            check1:ref(true),
            check2:ref(false),
            check3:ref(false),
            check4:ref(false),
            check5:ref(false),
            check6:ref(false),
            select1:ref(null),
            options:[
                'South Korea (+82)', '선택1', '선택2', '선택3', '선택4'
            ],
            dailog1:ref(false),
            polcyType:ref('01')
        }
    },
    methods: {
      polcyPopup(type) {
        this.polcyType = type;
        this.dailog1 = true;
      }
  }
};
</script>
