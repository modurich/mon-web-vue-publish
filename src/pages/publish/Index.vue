<template>
  <div class="publish_wrap">
    <table>
      <caption>publish List</caption>
      <colgroup>
        <col style="width:200px">
        <col style="width:200px">
        <col style="width:200px">
        <col style="width:200px">
        <col style="width:200px">
        <col style="width:auto">
      </colgroup>
      <thead>
        <tr>
          <th colspan="3">메뉴</th>
          <th rowspan="2" class="co01">화면 ID</th>
          <th rowspan="2" class="co02">URL(파일명)</th>
          <th rowspan="2">비고</th>
        </tr>
        <tr>
          <th>1Depth</th>
          <th>2Depth</th>
          <th>3Depth</th>
        </tr>
      </thead>
      <tbody class="guide">
        <tr>
          <td>UI Guide</td>
          <td></td>
          <td></td>
          <td>
            <!-- <router-link to="/UiGuide">uiguide</router-link> -->
            <router-link to="/UiGuide">UiGuide</router-link>
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>가입/로그인</td>
          <td></td>
          <td></td>
          <td>
            <router-link to="/publish/A_10000_P">A_10000_P</router-link>
          </td>
          <td>로그인</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <router-link to="/publish/A_11000_P">A_10000_P,F_11000_T,<br />F_12000_T,F_13000_T</router-link>
          </td>
          <td>회원가입</td>
          <td>서비스 이용약관, 개인정보 처리방침, 게시물 작성규정</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <router-link to="/publish/A_11100_P">A_11100_P</router-link>
          </td>
          <td>가입완료</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <router-link to="/publish/A_11200_P">A_11200_P</router-link>
          </td>
          <td>휴면 해제,재가입 안내,임시 비밀번호 발급 완료</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <router-link to="/publish/A_12000_P">A_12000_P</router-link>
          </td>
          <td>비밀번호찾기</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <router-link to="/publish/A_21121_P">A_21121_P</router-link>
          </td>
          <td>비밀번호 변경</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <router-link to="/publish/A_12100_U">A_12100_U</router-link>
          </td>
          <td>휴대폰번호변경팝업</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <router-link to="/publish/A_12200_U">A_12200_U</router-link>
          </td>
          <td>이메일 인증팝업</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <router-link to="/publish/A_21120_T">A_21120_T,A_21110_T</router-link>
          </td>
          <td>프로필수정,계정정보 수정</td>
          <td></td>
        </tr>
        <tr>
            <td>프로필1(마이페이지/내지갑)</td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_21000_T">A_21000_T,A_22000_T</router-link>
            </td>
            <td>프로필</td>
            <td></td>
        </tr>  
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_22100_P">A_22100_P</router-link>
            </td>
            <td>klip</td>
            <td></td>
        </tr>   
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_21310_T">A_21310_T,A_21320_T,A_21330_T</router-link>
            </td>
            <td>소셜-팔로워,팔로잉,차단</td>
            <td></td>
        </tr>    
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_21510_T">A_21510_T,A_21520_T</router-link>
            </td>
            <td>플레이어 추천-인기추천,신규가입</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_70000_P">A_70000_P</router-link>
            </td>
            <td>ooo프로필</td>
            <td></td>
        </tr>   
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_22923_P">A_22923_P</router-link>
            </td>
            <td>보유 NFT</td>
            <td></td>
        </tr>     
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_100_U">A_100_U</router-link>
            </td>
            <td>종목공개하기</td>
            <td></td>
        </tr>   
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_101_U">A_101_U</router-link>
            </td>
            <td>링크추가</td>
            <td></td>
        </tr>   
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_102_U">A_102_U</router-link>
            </td>
            <td>추천코드</td>
            <td></td>
        </tr>   
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_103_U">A_103_U</router-link>
            </td>
            <td>등급/뱃지</td>
            <td></td>
        </tr>   
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_104_U">A_104_U</router-link>
            </td>
            <td>Google OTP 초기화</td>
            <td></td>
        </tr>   
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_105_U">A_105_U</router-link>
            </td>
            <td>슬롯확장(활동등급 미달)</td>
            <td></td>
        </tr>   
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_106_U">A_106_U</router-link>
            </td>
            <td>NFT 장착 안내</td>
            <td></td>
        </tr> 
        <tr>
            <td>랭킹/거버넌스/통합검색/작성안내</td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/H_21000_T">H_21000_T,H_22000_T</router-link>
            </td>
            <td>랭킹</td>
            <td>
              <span class="txt_red">
              11/15일 slide배너 수정
              </span>
            </td>
        </tr>   
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_50000_P">A_50000_P</router-link>
            </td>
            <td>최근검색</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_51100_P">
                  A_51100_P,A_51200_P,A_51300_P,A_51400_P,A_51500_P,A_51600_P
                </router-link>
            </td>
            <td>검색</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_51310_P">
                  A_51310_P
                </router-link>
            </td>
            <td>테마 카테고리-테이블</td>
            <td></td>
        </tr>  
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_51311_P">
                  A_51311_P
                </router-link>
            </td>
            <td>테마 카테고리-리스트</td>
            <td></td>
        </tr>  
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_513111_P">
                  A_513111_P
                </router-link>
            </td>
            <td>테마 카테고리-전체</td>
            <td></td>
        </tr>  
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/C_21100_T">
                  C_21100_T,C_21200_T,C_21300_T
                </router-link>
            </td>
            <td>인사이트 작성 종목 선택</td>
            <td></td>
        </tr>  
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/H_50000_P">
                  H_50000_P
                </router-link>
            </td>
            <td>더보기-로컬설정</td>
            <td></td>
        </tr>  
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/H_41000_T">
                  H_41000_T
                </router-link>
            </td>
            <td>거버넌스</td>
            <td>탭 알림 badge 예시</td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_21530_T">A_21530_T</router-link>
            </td>
            <td>추천,활동랭킹,신규가입입</td>
            <td></td>
        </tr>  
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/C_10000_P">C_10000_P</router-link>
            </td>
            <td>BLASH 작성 안내</td>
            <td></td>
        </tr>  
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/C_20000_T">C_20000_T</router-link>
            </td>
            <td>BLASH 작성 안내</td>
            <td></td>
        </tr>  
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/C_41000_T">C_41000_T,C_42000_T</router-link>
            </td>
            <td>임시저장</td>
            <td></td>
        </tr>  
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_500_P">
                  A_500_P
                </router-link>
            </td>
            <td>인사이트 랭킹 기준</td>
            <td></td>
        </tr>  
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_501_P">
                  A_501_P
                </router-link>
            </td>
            <td>BLASH 랭킹 기준</td>
            <td></td>
        </tr>  
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_502_P">
                  A_502_P
                </router-link>
            </td>
            <td>팔로우 추가</td>
            <td></td>
        </tr>  
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_503_P">
                  A_503_P
                </router-link>
            </td>
            <td>팔로우 취소</td>
            <td></td>
        </tr>  
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_504_P">
                  A_504_P
                </router-link>
            </td>
            <td>스테이킹이란</td>
            <td></td>
        </tr>  
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_505_P">
                  A_505_P
                </router-link>
            </td>
            <td>스테이킹 수량별 보상VP</td>
            <td></td>
        </tr>  
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_506_P">
                  A_506_P
                </router-link>
            </td>
            <td>NFT 추가보상 안내</td>
            <td></td>
        </tr>  
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_507_P">
                  A_507_P
                </router-link>
            </td>
            <td>의제 투표란?</td>
            <td></td>
        </tr>  
        <tr>
            <td>홈(내종목)/콘텐츠썸네일</td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/H_10000_P">H_10000_P</router-link>
            </td>
            <td>내종목,발견</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/H_11220_U">H_11220_U</router-link>
            </td>
            <td>관심 자산 그룹 선택</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/H_11112_U">H_11112_U</router-link>
            </td>
            <td>자산 순서 변경</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/H_11113_U">H_11113_U</router-link>
            </td>
            <td>자산 삭제</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/H_11114_U">H_11114_U</router-link>
            </td>
            <td>새그룹 추가</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/H_11115_U">H_11115_U</router-link>
            </td>
            <td>그룹명 변경</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/H_11210_P">H_11210_P</router-link>
            </td>
            <td>관심 TOP 100</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/H_11111_P">H_11111_P</router-link>
            </td>
            <td>관심 자산 추가</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/H_20000_P">H_20000_P</router-link>
            </td>
            <td>콘텐츠썸네일</td>
            <td>진행중</td>
        </tr> 
        <tr>
            <td>5. 콘텐츠</td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/H_300_P">H_300_P</router-link>
            </td>
            <td>포커스자산삭제</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/H_31000_T">H_31000_T</router-link>
            </td>
            <td>예측 콘텐츠-인사이트</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/H_35000_T">H_35000_T</router-link>
            </td>
            <td>예측 콘텐츠-BLASH</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/H_32000_T">H_32000_T</router-link>
            </td>
            <td>포스트</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/H_33200_T">H_33200_T</router-link>
            </td>
            <td>H_33200_T</td>
            <td></td>
        </tr> 
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'publish'
};
</script>
<style lang="scss" scoped>
.publish_wrap {

  a,
  img {
    border: none
  }

  .list_box_wrap {
    min-width: 1280px
  }

  .information {
    position: absolute;
    right: 10px;
    top: -28px;
    margin-left: 100px;
    color: #666;
    font-size: 14px;
    font-weight: bold
  }

  .information strong {
    margin-right: 3px;
    color: #000
  }

  .information>span {
    margin: 0 4px;
    color: #ddd;
    font-weight: normal
  }

  .tab_wrap {
    position: relative;
    height: 50px;
    padding: 10px;
    box-sizing: border-box
  }

  .tab_wrap h1 {
    /*position:absolute;right:10px;top:10px;*/
    font-size: 0;
    float: left;
    margin-right: 20px;
    padding-top: 8px
  }

  .tab_wrap ul {
    float: left
  }

  .tab_wrap:after,
  .tab_wrap ul:after {
    display: block;
    clear: both;
    content: ''
  }

  .tab_wrap ul li {
    float: left
  }

  .tab_wrap ul li a {
    display: block;
    height: 30px;
    line-height: 30px;
    width: 200px;
    text-align: center;
    border: 1px solid #ccc;
    text-decoration: none;
    color: #555;
    background-color: #f5f5f5;
    margin-left: -1px
  }

  .tab_wrap ul li a.active {
    background-color: #fff;
    font-weight: bold;
    color: #000
  }

  .tab_view {
    display: none;
    position: relative
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    table-layout: fixed
  }

  caption {
    display: none
  }

  th,
  td {
    color: #333
  }

  th {
    padding: 5px 0;
    color: #fff;
    background: rgb(58, 58, 62);
    border-top: 1px solid #ccc;
    border-left: 1px solid #ccc
  }

  th.co01 {
    background: $primary
  }

  th.co02 {
    background: rgb(58, 58, 62)
  }

  td {
    padding: 7px 5px;
    word-break: break-all;
    border-top: 1px solid #d5d5d5;
    border-left: 1px solid #ccc;
    line-height: 16px
  }

  .guide tr th,
  .guide tr td {
    background-color: #fff
      /*rgba(70,103,92,.4);border-color:#999*/
  }

  tr:first-child td {
    border-top: 1px solid #e1e1e1
  }

  th:first-child,
  td:first-child {
    border-left: 0
  }

  td:first-child {
    font-weight: bold
  }

  td>ul {
    margin: 0;
    padding-left: 20px
  }

  td a {
    color: #333;
    text-decoration: underline
  }

  table tbody tr.on td a {
    color: #e60012
  }

  table tbody tr.on th,
  table tbody tr.on td {
    background-color: #f1f1f1 !important
  }

  table tbody.guide tr.on th,
  table tbody.guide tr.on td {
    background-color: rgba(70, 103, 92, .5) !important
  }
}
</style>
