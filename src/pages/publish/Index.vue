<template>
    <div class="publish_wrap">
        <table>
            <caption>publish List</caption>
            <colgroup>
                <col style="width:100px">
                <col style="width:200px">
                <col style="width:140px">
                <col style="width:180px">
                <col style="width:130px">
                <col style="width:200px">
                <col style="width:150px">
                <col style="width:auto">
            </colgroup>
            <thead>
                <tr>
                    <th colspan="5">메뉴</th>
                    <th rowspan="2" class="co01">화면 ID</th>
                    <th rowspan="2" class="co02">URL(파일명)</th>
                    <th rowspan="2">비고</th>
                </tr>
                <tr>
                    <th>1Depth</th>
                    <th>2Depth</th>
                    <th>3Depth</th>
                    <th>4Depth</th>
                    <th>5Depth</th>
                </tr>
            </thead>
            <tbody class="guide">
                <tr>
                    <td>UI Guide</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <!-- <router-link to="/UiGuide">uiguide</router-link> -->
                        <router-link to="/UiGuide">UiGuide</router-link >
                    </td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>가입/로그인</td>
                    <td></td>
                    <td></td>
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
                    <td></td>
                    <td></td>
                    <td>
                        <router-link to="/publish/A_11000_P">A_10000_P,F_11000_T,<br/>F_12000_T,F_13000_T</router-link>
                    </td>
                    <td>회원가입</td>
                    <td>서비스 이용약관, 개인정보 처리방침, 게시물 작성규정</td>
                </tr>  
                <tr>
                    <td></td>
                    <td></td>
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
                    <td></td>
                    <td></td>
                    <td>
                        <router-link to="/publish/A_21120_T">A_21120_T,A_21110_T,A_12100_U,A_12200_U</router-link>
                    </td>
                    <td>프로필수정,계정정보 수정</td>
                    <td>휴대폰번호변경팝업,이메일 인증팝업</td>
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
   .publish_wrap{
    a, img {border:none}
    .list_box_wrap {min-width:1280px}
    .information {position:absolute;right:10px;top:-28px;margin-left:100px;color:#666;font-size:14px;font-weight:bold}
    .information strong {margin-right:3px;color:#000}
    .information>span {margin: 0 4px;color:#ddd;font-weight:normal}
    .tab_wrap {position:relative;height:50px;padding:10px;box-sizing:border-box}
    .tab_wrap h1 {/*position:absolute;right:10px;top:10px;*/font-size:0;float:left;margin-right:20px;padding-top:8px}
    .tab_wrap ul {float:left}
    .tab_wrap:after, .tab_wrap ul:after {display:block;clear:both;content:''}
    .tab_wrap ul li {float:left}
    .tab_wrap ul li a {display:block;height:30px;line-height:30px;width:200px;text-align:center;border:1px solid #ccc;text-decoration:none;color:#555;background-color:#f5f5f5;margin-left:-1px}
    .tab_wrap ul li a.active {background-color:#fff;font-weight:bold;color:#000}
    .tab_view {display:none;position:relative}
    table {width:100%;border-collapse:collapse;border-spacing:0;background-color: #fff;border-bottom:1px solid #ccc;table-layout:fixed}
    caption {display: none}
    th,td{color:#333}
    th {padding:5px 0;color:#fff;background:rgb(58, 58, 62);border-top:1px solid #ccc;border-left:1px solid #ccc}
    th.co01 {background:$primary}
    th.co02 {background:rgb(58, 58, 62)}
    td {padding:7px 5px;word-break: break-all;border-top:1px solid #d5d5d5;border-left:1px solid #ccc;line-height:16px}
    .guide tr th, .guide tr td {background-color:#fff/*rgba(70,103,92,.4);border-color:#999*/}
    tr:first-child td {border-top:1px solid #e1e1e1}
    th:first-child, td:first-child {border-left:0}
    td:first-child {font-weight:bold}
    td > ul {margin:0;padding-left:20px}
    td a {color:#333;text-decoration:underline}
    table tbody tr.on td a {color:#e60012}
    table tbody tr.on th,
    table tbody tr.on td {background-color:#f1f1f1 !important}
    table tbody.guide tr.on th,
    table tbody.guide tr.on td {background-color:rgba(70,103,92,.5) !important}
   }
   
</style>
