<template>
  <div class="centerarea_box01">
    <q-form>
      <div class="con_box">
        <div style="padding:32px">
          <m-button-3 @click="dailog2 = true" lined color="primary">은행,증권사</m-button-3>
        </div>
        <!-- S 금융기관 선택 -->
        <m-dialog v-model="dailog2">
          <div class="dailog_wrap">
            <div class="dailog_top">
              <q-btn icon="close" flat v-close-popup />
            </div>
            <q-card-section class="dailog_contents">
              <p class="dialog_tit l_row_l">금융기관 선택</p>
              <m-tabs class="box_type large" v-model="tab1" :items="tabs" />
              <div v-if="tab1 == 'G'">
                <div class="tab_add_scroll">
                  <div class="button_list">
                    <a href="#" class="active">
                      <span class="img_area"><img src="~assets/bk/bk_kdb.png" alt="산업"/></span>
                      <span class="txt_area">산업</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/bk/bk_ibk.png" alt="기업"/></span>
                      <span class="txt_area">기업</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/bk/bk_kb.png" alt="국민"/></span>
                      <span class="txt_area">국민</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/bk/bk_sh.png" alt="수협"/></span>
                      <span class="txt_area">수협</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/bk/bk_nh.png" alt="농협"/></span>
                      <span class="txt_area">농협</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/bk/bk_woori.png" alt="우리"/></span>
                      <span class="txt_area">우리</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/bk/bk_sc.png" alt="SC"/></span>
                      <span class="txt_area">SC</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/bk/bk_citi.png" alt="한국씨티"/></span>
                      <span class="txt_area">한국씨티</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/bk/bk_dgb.png" alt="대구"/></span>
                      <span class="txt_area">대구</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/bk/bk_bnk_bs.png" alt="부산"/></span>
                      <span class="txt_area">부산</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/bk/bk_kj.png" alt="광주"/></span>
                      <span class="txt_area">광주</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/bk/bk_jeju.png" alt="제주"/></span>
                      <span class="txt_area">제주</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/bk/bk_jb.png" alt="전북"/></span>
                      <span class="txt_area">전북</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/bk/bk_bnk_kn.png" alt="경남"/></span>
                      <span class="txt_area">경남</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/bk/bk_mg.png" alt="새마을금고"/></span>
                      <span class="txt_area">새마을금고</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/bk/bk_cu.png" alt="신협"/></span>
                      <span class="txt_area">신협</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/bk/bk_sb.png" alt="저축"/></span>
                      <span class="txt_area">저축</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/bk/bk_hsbc.png" alt="HSBC"/></span>
                      <span class="txt_area">HSBC</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/bk/bk_doich.png" alt="도이치"/></span>
                      <span class="txt_area">도이치</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/bk/bk_jp.png" alt="JP모간"/></span>
                      <span class="txt_area">JP모간</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/bk/bk_boa.png" alt="BOA"/></span>
                      <span class="txt_area">BOA</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/bk/bk_bnp.png" alt="비엔피파리바"/></span>
                      <span class="txt_area">비엔피파리바</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/bk/bk_icbc.png" alt="중국공상"/></span>
                      <span class="txt_area">중국공상</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/bk/bk_nfcf.png" alt="산립조합"/></span>
                      <span class="txt_area">산립조합</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/bk/bk_china.png" alt="중국건설"/></span>
                      <span class="txt_area">중국건설</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/bk/bk_epost.png" alt="우체국"/></span>
                      <span class="txt_area">우체국</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/bk/bk_hana.png" alt="하나"/></span>
                      <span class="txt_area">하나</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/bk/bk_shinhan.png" alt="신한"/></span>
                      <span class="txt_area">신한</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/bk/bk_k.png" alt="케이뱅크"/></span>
                      <span class="txt_area">케이뱅크</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/bk/bk_kakao.png" alt="카카오뱅크"/></span>
                      <span class="txt_area">카카오뱅크</span>
                    </a>
                  </div>
                </div>
              </div>
              <div v-if="tab1 == 'F'">
                <div class="tab_add_scroll">
                  <div class="button_list">
                    <a href="#" class="active">
                      <span class="img_area"><img src="~assets/stock/st_myasset.png" alt="유안타"/></span>
                      <span class="txt_area">유안타</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/stock/st_kb.png" alt="KB"/></span>
                      <span class="txt_area">KB</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/stock/st_bnk.png" alt="BNK투자"/></span>
                      <span class="txt_area">BNK투자</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/stock/st_ktb.png" alt="KTB투자"/></span>
                      <span class="txt_area">KTB투자</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/stock/st_mirae.png" alt="미래애셋대우"/></span>
                      <span class="txt_area">미래애셋대우</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/stock/st_samsung.png" alt="삼성"/></span>
                      <span class="txt_area">우삼성리</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/stock/st_korea.png" alt="한국투자"/></span>
                      <span class="txt_area">한국투자</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/stock/st_nh.png" alt="NH투자"/></span>
                      <span class="txt_area">NH투자</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/stock/st_kyobo.png" alt="교보"/></span>
                      <span class="txt_area">교보</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/stock/st_hi.png" alt="하이투자"/></span>
                      <span class="txt_area">하이투자</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/stock/st_hmsec.png" alt="현대차"/></span>
                      <span class="txt_area">현대차</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/stock/st_kiwoom.png" alt="키움"/></span>
                      <span class="txt_area">키움</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/stock/st_ebest.png" alt="이베스트"/></span>
                      <span class="txt_area">이베스트</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/stock/st_sk.png" alt="SK"/></span>
                      <span class="txt_area">SK</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/stock/st_c.png" alt="대신"/></span>
                      <span class="txt_area">대신</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/stock/st_hanwhawm.png" alt="한화"/></span>
                      <span class="txt_area">한화</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/stock/st_hana.png" alt="하나금융"/></span>
                      <span class="txt_area">하나금융</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/stock/st_shinhan.png" alt="신한금융"/></span>
                      <span class="txt_area">신한금융</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/stock/st_db.png" alt="DB금융"/></span>
                      <span class="txt_area">DB금융</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/stock/st_eugen.png" alt="유진투자"/></span>
                      <span class="txt_area">유진투자</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/stock/st_meritz.png" alt="메리츠"/></span>
                      <span class="txt_area">메리츠</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/stock/st_kakao.png" alt="카카오페이"/></span>
                      <span class="txt_area">카카오페이</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/stock/st_bk.png" alt="부국"/></span>
                      <span class="txt_area">부국</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/stock/st_shinyoung.png" alt="신영"/></span>
                      <span class="txt_area">신영</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/stock/st_cape.png" alt="케이프투자"/></span>
                      <span class="txt_area">케이프투자</span>
                    </a>
                    <a href="#">
                      <span class="img_area"><img src="~assets/stock/st_foss.png" alt="한국포스"/></span>
                      <span class="txt_area">한국포스</span>
                    </a>
                  </div>
                </div>
              </div>
            </q-card-section>
          </div>
        </m-dialog>
        <!-- E 금융기관 선택 -->
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
      dailog2: ref(false),
      tab1: ref('G'),
      tabs: [
        { label: '은행', value: 'G', icon: '' },
        { label: '증권사', value: 'F', icon: '' }
      ],
    }
  },
  methods: {
  }
};
</script>
