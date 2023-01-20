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
            <td>components</td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/SoceRadarChart">SoceRadarChart</router-link>
            </td>
            <td>콘텐츠 평점 차트</td>
            <td></td>
        </tr>
        <tr>
            <td>components</td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/BackDropDialog">BackDropDialog</router-link>
            </td>
            <td>백드롭</td>
            <td>컴포넌트를 직접 호출하면 안되고 Dialog로 호출해야 뜨네요....</td>
        </tr> 
        <tr>
            <td>components</td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/FroalaEditor">FroalaEditor</router-link>
            </td>
            <td>Froala 텍스트 에디터</td>
            <td>npm install 하신 다음 사용하세요.</td>
        </tr> 
        <tr>
            <td>components</td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/TagsTextInput">TagsTextInput</router-link>
            </td>
            <td>태그 인풋 박스</td>
            <td>npm install 하신 다음 사용하세요.</td>
        </tr> 
        <tr>
            <td>components</td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/Carousel">CarouselSample</router-link>
            </td>
            <td>Carousel</td>
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
            <router-link to="/publish/A_14000_P">A_14000_P</router-link>
          </td>
          <td>회원가입</td>
          <td></td>
        </tr>
         <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <router-link to="/publish/A_13000_P">A_13000_P</router-link>
          </td>
          <td>회원 가입 안내</td>
          <td></td>
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
            <router-link to="/publish/A_21131_P">A_21131_P</router-link>
          </td>
          <td>본인 인증 (KYC)</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <router-link to="/publish/A_11200_P">A_11200_P</router-link>
          </td>
          <td>휴면 해제,재가입 안내,임시 비밀번호 발급 완료,가입불가,기 가입회원 안내,임시 비밀 번호 발급</td>
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
            <router-link to="/publish/A_21120_T">A_21120_T,A_21110_T,A_21130_T</router-link>
          </td>
          <td>프로필수정,계정정보 수정,보안/인증</td>
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
            <td>수정 2023-1-10</td>
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
                  A_51100_P,A_51200_P,A_51300_P,A_51400_P,A_51400_T,A_51500_P,A_51600_P
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
                  H_41000_T,H_42000_T
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
            <td>accodion</td>
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
            <td>vuedragable,팝업 타이틀 고정</td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/H_11113_U">H_11113_U</router-link>
            </td>
            <td>자산 삭제</td>
            <td>vuedragable,팝업 타이틀 고정</td>
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
            <td></td>
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
            <td>수정 2023-1-04</td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/H_35000_T">H_35000_T</router-link>
            </td>
            <td>예측 콘텐츠-BLASH</td>
            <td>수정 2023-1-04</td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/H_32000_T">H_32000_T</router-link>
            </td>
            <td>포스트</td>
            <td>수정 2023-1-04</td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/H_33100_T">H_33100_T</router-link>
            </td>
            <td>인사이트</td>
            <td>수정 2023-1-04</td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/H_33300_T">H_33300_T</router-link>
            </td>
            <td>blash</td>
            <td>수정 2023-1-04 *****백드롭*****</td>
        </tr> 
        <!-- <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/H_33200_T">H_33200_T</router-link>
            </td>
            <td>토론</td>
            <td></td>
        </tr>  -->
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/H_31210_P">H_31210_P</router-link>
            </td>
            <td>작성자통계</td>
            <td class="txt_red">스크롤 완료 - 원하시는게 이게 맞으실까요??</td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/H_31310_P">H_31310_P</router-link>
            </td>
            <td>밴드구간</td>
            <td class="txt_red">sticky 탭</td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/H_31320_P">H_31320_P</router-link>
            </td>
            <td>매수대기</td>
            <td class="txt_red">스크롤 완료 - 원하시는게 이게 맞으실까요??</td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/H_31321_P">H_31321_P</router-link>
            </td>
            <td>추매 시그널</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/H_31322_P">H_31322_P</router-link>
            </td>
            <td>홀딩 시그널</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/H_31323_P">H_31323_P</router-link>
            </td>
            <td>매도 시그널</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/H_32110_P">H_32110_P</router-link>
            </td>
            <td>포스트 상세</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/votinglist">votinglist</router-link>
            </td>
            <td>보팅 리스트</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/H_301_P">H_301_P</router-link>
            </td>
            <td>평단가수정</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_21711_T">A_21711_T,A_21712_T,A_21713_T,A_21721_T,A_21722_T,A_21723_T,A_21731_T,A_21732_T</router-link>
            </td>
            <td>콘텐츠 관리-작성,관심,보팅</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_217121_U">A_217121_U</router-link>
            </td>
            <td>매수성공-백드롭</td>
            <td>수정 2023-01-11</td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_217122_U">A_217122_U</router-link>
            </td>
            <td>A_217122_U-백드롭</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_217221_U">A_217221_U</router-link>
            </td>
            <td>A_217221_U-백드롭</td>
            <td>수정 2023-01-11</td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_217222_U">A_217222_U</router-link>
            </td>
            <td>A_217222_U-백드롭</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_217311_U">A_217311_U</router-link>
            </td>
            <td>A_217311_U-백드롭</td>
            <td>수정 2023-01-11</td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_217312_U">A_217312_U</router-link>
            </td>
            <td>A_217312_U-백드롭</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_217321_U">A_217321_U</router-link>
            </td>
            <td>A_217321_U-백드롭</td>
            <td>수정 2023-01-11</td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_217322_U">A_217322_U</router-link>
            </td>
            <td>보팅성공,실패(주석처리)-백드롭</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/H_11110_P">H_11110_P</router-link>
            </td>
            <td>관심그룹</td>
            <td>수정 2023-02-19</td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/H_11112_P">H_11112_P</router-link>
            </td>
            <td>관심그룹편집</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/H_11911_T">H_11911_T</router-link>
            </td>
            <td>팔로우 콘텐츠</td>
            <td></td>
        </tr> 
        <tr>
            <td>7. 프로필2(미션, 알림, 멤버십) / 홈(발견)</td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_601_P">A_601_P</router-link>
            </td>
            <td>럭키박스 결과</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_602_P">A_602_P</router-link>
            </td>
            <td>럭키박스 결과02</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_603_P">A_603_P</router-link>
            </td>
            <td>알림상세</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_604_P">A_604_P</router-link>
            </td>
            <td>공유하기</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_51211_T">A_51211_T</router-link>
            </td>
            <td>종목상세</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_51221_T">A_51221_T</router-link>
            </td>
            <td>종목상세</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_30000_P">A_30000_P</router-link>
            </td>
            <td>혜택</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_31000_P">A_31000_P</router-link>
            </td>
            <td>럭키박스 내역</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_61000_P">A_61000_P</router-link>
            </td>
            <td>카드</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_61100_P">A_61100_P</router-link>
            </td>
            <td>무통장입금 안내</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_62000_P">A_62000_P</router-link>
            </td>
            <td>결제내역</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_63000_P">A_63000_P</router-link>
            </td>
            <td>멤버십 이용정보</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_63100_P">A_63100_P</router-link>
            </td>
            <td>결제내역 상세</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_63200_P">A_63200_P</router-link>
            </td>
            <td>결제취소</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_63300_P">A_63300_P</router-link>
            </td>
            <td>결제 취소 완료</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_41000_P">A_41000_P</router-link>
            </td>
            <td>알림</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_41100_P">A_41100_P</router-link>
            </td>
            <td>푸시설정</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/H_12000_T">H_12000_T</router-link>
            </td>
            <td>오늘의 테마</td>
            <td>수정 2023-1-04</td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/H_12310_T">H_12310_T</router-link>
            </td>
            <td>실시간 순위 TOP 100</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/H_12710_T">H_12710_T</router-link>
            </td>
            <td>보팅</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/H_12810_T">H_12810_T</router-link>
            </td>
            <td>인기 태그 TOP 100</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/H_12e10_T">H_12e10_T</router-link>
            </td>
            <td>인기 토론 자산 TOP 100</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/H_12c10_T">H_12c10_T</router-link>
            </td>
            <td>가격대별 종목</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/H_12d10_T">H_12d10_T</router-link>
            </td>
            <td>상승,하락</td>
            <td></td>
        </tr> 
        <tr>
            <td>8. 토론 / 실시간인기토론</td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_605_P">A_605_P</router-link>
            </td>
            <td>로컬 설정</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_606_P">A_606_P</router-link>
            </td>
            <td>연속 보상 안내</td>
            <td></td>
        </tr> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_607_P">A_607_P</router-link>
            </td>
            <td>VP올리는법</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_608_P">A_608_P</router-link>
            </td>
            <td>평점 상세</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_512131_P">A_512131_P</router-link>
            </td>
            <td>토론글 작성</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_512132_P">A_512132_P</router-link>
            </td>
            <td>토론글 상세</td>
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
            <td>토론</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/H_12920_T">H_12920_T</router-link>
            </td>
            <td>실시간 인기 토론</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/H_12410_T">H_12410_T</router-link>
            </td>
            <td>인사이트 인기 종목</td>
            <td></td>
        </tr>
         <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/M_40000_U">M_40000_U</router-link>
            </td>
            <td>공통모달</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_22712_T">A_22712_T</router-link>
            </td>
            <td>은행,증권사</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/C_11121_U">C_11121_U</router-link>
            </td>
            <td>매수고가 설정</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/C_11122_U">C_11122_U</router-link>
            </td>
            <td>매수저가 설정</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/C_111231_T">C_111231_T,C_111232_T</router-link>
            </td>
            <td>목표 설정</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/C_111241_T">C_111241_T,C_111242_T</router-link>
            </td>
            <td>손절 설정</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/C_11111_U">C_11111_U</router-link>
            </td>
            <td>매수고가 설정</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/C_11112_U">C_11112_U</router-link>
            </td>
            <td>매수저가 설정</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/C_111131_T">C_111131_T,C_111132_T</router-link>
            </td>
            <td>목표 설정</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/C_111141_T">C_111141_T,C_111142_T</router-link>
            </td>
            <td>손절 설정</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_22130_U">A_22130_U</router-link>
            </td>
            <td>PIN코드 입력</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_22200_P">A_22200_P</router-link>
            </td>
            <td>락업정보</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/A_22300_P">A_22300_P</router-link>
            </td>
            <td>OTP등록 / 초기화</td>
            <td>진행중</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/C_200_P">C_200_P</router-link>
            </td>
            <td>Klip지갑연결</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <router-link to="/publish/C_201_P">C_201_P</router-link>
            </td>
            <td>Kaikas 지갑 연결</td>
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
