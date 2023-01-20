<template>
    <div class="centerarea_box1">
      <div class="con_box">
        <h2 class="line_type">
          지갑연결
        </h2> 
        <div class="centerarea_box">
          <h2 class="s_mg"><span class="ico_klip_b">klip</span></h2>
          <p class="mgb16 main_info font12">
          Klip은 카카오톡에 포함되어있는 디지털 지갑으로 몬스탁토큰(MON), KLAY 등의 토큰과 NFT를 보관/전송 할 수 있습니다.<br/><br/>

          <!-- 단, Klip은 해당 서비스 정책상 19세 미만은 이용할 수 없습니다.<br/>
          <span class="txt_red">19세 미만</span> 유저는 카이카스 지갑 (PC 브라우저 확장프로그램)을 이용하실 수 있습니다</p>
          <div class="l_row_l"><a href="#" class="link_view center">내 손안의 디지털 지갑, Klip 안내</a></div> -->
          <div class="btn_wrap l_row_l"><m-button-3 color="yellow" class="full"><i class="ico_klip_bk"/>카카오톡으로 Klip 지갑 연결</m-button-3></div>
          <div class="pc_only">
            <div class="line_tit"><span>다른 지갑 연결하기</span><i/></div>
            <div class="btn_wrap l_row_l"><m-button-3  color="lightGrey" class="full"><i class="ico_sb sb_klaytn"/>Kaikas 지갑 연결</m-button-3></div>
            <div class="btn_wrap l_row_l"><m-button-3  color="lightGrey" class="full"><i class="ico_sb sb_metamask"/>Metamask 지갑 연결</m-button-3></div>
            <!-- <div class="btn_wrap l_row_l"><m-button-3  color="lightGrey" class="full"><i class="ico_sb sb_dcent"/>D'CENT 지갑 연결</m-button-3></div> -->
          </div>
          <div class="line_tit"><span>월렛커넥트로 지갑 연결하기</span><i/></div>
          <div class="btn_wrap l_row_l"><m-button-3  color="lightGrey" class="full"><i class="ico_sb sb_wallet"/>Wallet Connect</m-button-3></div>
          <p class="mgb16 main_info font12 bold">- 월렛커넥트 지원 지갑 -</p>
          <p class="sb_list"><i class="ico_sb big sb_klaytn"/><i class="ico_sb big sb_metamask"/><i class="ico_sb big sb_dcent"/></p>
          <p class="mgb16 main_info font12">
          월렛커넥트는 암호화폐 지갑을 DApp에 연결하는
          Web3 프로토콜입니다.<br/>
          모바일 연결이나 QR코드 스캔을 이용하여 간편하게
          지갑을 연결해보세요.<br/><br/></p>
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
