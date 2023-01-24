<template>
    <div class="centerarea_box1">
        <div class="con_box">
          <h2 class="line_type">
            의제투표 상세
          </h2>
            <div class="box_contents">
              <!-- <div class="error_wrap">
                <div class="ico_top">
                  <i class="ico_error"></i>
                </div>
                <div class="com_message font16">
                  출금요청 내역이 없습니다.
                </div>
              </div> -->
              <div class="vote_wrap">
                <div class="tit_wrap">
                  <span class="badge_wrap">
                      <span class="badge_area">
                        <span class="badge3 light_green">주식</span>
                        <span class="badge3 yellow">BEST</span>
                      </span>
                  </span>
                  <p class="sub_tit mgt8">[식빵맨님의 BLASH]</p>
                  <p class="font16 txt_dk">오버행 이슈 해소, 아직은 저점구간</p>
                  <p class="list_tit">
                    <span class="txt01">내투표권</span>
                    <span class="txt02">25VP</span>
                  </p>
                </div>
                <div class="gray_box">
                  <div class="list_type2">
                    <div class="l_area">
                      <span class="txt_blue1">
                        찬성
                      </span>
                      <p class="txt_con">
                        <span class="txt_tit txt_blue1">90.55%</span>
                        <span>1245 VP</span>
                      </p>
                    </div>
                    <div class="r_area">
                      <m-button-3 color="green" class="full" >찬성</m-button-3>
                    </div>
                  </div>
                  <q-linear-progress class="progress_type1 blue" size="10px" :value="progress" />
                </div>
                <div class="gray_box">
                  <div class="list_type2">
                    <div class="l_area">
                      <span class="txt_red1">
                        반대
                      </span>
                      <p class="txt_con">
                        <span class="txt_tit txt_red1">9.55%</span>
                        <span>1245 VP</span>
                      </p>
                    </div>
                    <div class="r_area">
                      <m-button-3 color="red" class="full">반대</m-button-3>
                    </div>
                  </div>
                  <q-linear-progress class="progress_type1 red" size="10px" :value="progress" />
                </div>
              </div>
              <div class="divider" />
              <h3 class="mgb32">
                발의 대상
              </h3>
              <ul class="thumb_list gray_box small">
                <li>
                  <div class="top_wrap">
                  <div class="my_profile">
                      <div class="tit_area">
                        <a href="#" class="inflex_link">
                          <div class="img_area">
                            <img src="~assets/profile_img1.png" alt="profile"/>
                          </div>
                          <span class="txt_tit">몬스탁닉넴열글자까지</span>
                        </a>
                        <span class="badge_area">
                          <span class="badge pro">PRO</span>
                          <span class="badge pl1">PL1</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <a href="#">
                    <div class="tit_wrap">
                      <p class="badge_wrap">
                        <span class="badge_area">
                          <span class="badge3 small brown">코인</span>
                          <span class="badge3 small yellow">BEST</span>
                        </span>
                        <span>D-120</span>
                      </p>
                      <p class="tit_txt">제목은 2글자 이상 최대 40자입니다</p>
                      <p class="logo_wrap">
                        <img src="~assets/prd_logo.png" alt="profile" />
                        삼성전자 우
                      </p>
                    </div>
                    <div class="defalut_box">
                      <div class="flex between">
                        <span class="txt01">목표가</span>
                        <span class="font18 bold txt_blue1">$ ?????</span>
                      </div>
                    </div>
                  </a>
                  <div class="footer_area">
                    <p class="tag_area">
                      <a href="#" class="primary">＄관련종목</a>
                      <a href="#">#금리인상</a>
                      <a href="#">#친환경</a>
                      <a href="#">#로봇관련주</a>
                      <a href="#">#최대스무자최대스무자최대스무자최대스무자</a>
                    </p>
                    <div class="ico_wrap">
                      <span class="ico_area">
                        <button class="ico_f ico_thumbsUp">624</button>
                        <span class="ico_f ico_comment">7</span>
                        <span class="ico_f ico_view">1.2</span>
                        <span class="ico_f ico_star_s primary">4.7</span>
                      </span>
                      <span>2022.10.26</span>
                    </div>
                  </div>
                </li>
            </ul>
            <a href="#">
              <div class="thumb_list_new full">
                  <div class="top_wrap">
                    <div class="my_profile">
                      <div class="img_area">
                        <img src="~assets/profile_img1.png" alt="profile"/>
                      </div>
                      <div class="tit_area">
                        <span class="txt_tit">몬스탁닉넴열글자까지</span>
                        <span class="badge_area">
                          <span class="badge pro">PRO</span>
                          <span class="badge pl1">PL1</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="tit_wrap">
                    <p class="badge_wrap">
                      <span class="badge_area">
                          <span class="badge3 small brown">코인</span>
                          <span class="badge3 small yellow">BEST</span>
                      </span>
                      <span class="txt01">매수대기</span>
                    </p>
                    <p class="tit_txt">제목은 2글자 이상 최대 40자입니다</p>
                  </div>
                  <div class="blash_box">
                    <div class="tit_wrap">
                      <span class="txt01">BLASH</span>
                      <span class="txt02">5 sMON</span>
                    </div>
                    <div class="con_wrap">
                      <div class="txt_area">
                        <div class="tit_txt">
                          <span class="txt01">목표수익률</span> 
                          <span class="txt02">99999.99 %</span>
                        </div>
                        <div class="con_txt">
                          <span class="col">비중 <span class="txt01">100%</span></span>
                          <span class="col">기간 <span class="txt01">120일</span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="footer_area">
                    <p class="tag_area">
                      <span class="primary">＄관련종목</span>
                      <span>#금리인상</span>
                      <span>#친환경</span>
                      <span>#로봇관련주</span>
                      <span>#최대스무자최대스무자최대스무자최대스무자</span>
                    </p>
                    <div class="ico_wrap">
                      <span class="ico_area">
                        <span class="ico_f ico_thumbsUp">624</span>
                        <span class="ico_f ico_comment">7</span>
                        <span class="ico_f ico_view">1.2</span>
                        <span class="ico_f ico_star_s primary">4.7</span>
                      </span>
                      <span class="txt_date">2022.10.26</span>
                    </div>
                  </div>
              </div>
            </a>
            <div class="divider" />

            <h3 class="mgb32">
              발의 이유
            </h3>
            <p>
              아래와 같은 이유로 해당 콘텐츠를 BEST로 지정하는 것을 제안합니다. <br><br>

              ✅ 시의적절한 주제 <br>
              ✅ 정확한 정보<br>
            </p>

            <div class="divider" />

            <h3 class="mgb32">
              의제 정보
            </h3>
            <div>
              <span class="flex txt_dk bold">
                의제 TX해시
                <button class="ico_copy"/>
              </span>
            </div>
            <div class="list_info small">
              0x65c3542a135ec7bc8025468bbf7bb7334e991b21548cd0cdc7556eb85384094a
            </div>
            <div>
              <span class="flex txt_dk bold">
                의제 발의자
                <button class="ico_copy"/>
              </span>
            </div>
            <div class="list_info small">
              0x39b7108991303a9a8c45247343b4a495ab48c3a7
            </div>
            <div>
              <span class="flex txt_dk bold">
                현재 투표수
              </span>
            </div>
            <div class="list_info small">
              1375 VP
            </div>
            <div>
              <span class="flex txt_dk bold">
                최소 정족수
              </span>
            </div>
            <div class="list_info small">
              2000 VP
            </div>
            <div>
              <span class="flex txt_dk bold">
                의제등록 일시 (투표시작)
              </span>
            </div>
            <div class="list_info small">
              2022.12.05 13:31:37
            </div>
            <div>
              <span class="flex txt_dk bold">
                투표종료 일시
              </span>
            </div>
            <div class="list_info small">
              2022.12.05 13:31:37
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
          select1: ref("전체"),
          check1:'',
          options: [
            '전체', '선택1','선택2','선택3'
          ],
          tab1: ref('A'),
          progress: 0.4
        }
    },
    methods: {
    }
};
</script>
<style scoped>

</style>

