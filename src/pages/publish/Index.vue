<template>
    <div>
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
                    <th rowspan="2" class="co01">URL(파일명)</th>
                    <th rowspan="2" class="co02">화면 ID</th>
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
                    <td></td>
                    <td>UI Guide</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <!-- <router-link to="/UiGuide">uiguide</router-link> -->
                        <m-button-3 to="/UiGuide">UiGuide</m-button-3>
                    </td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td>A_10000_P</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <router-link to="/publish/A_10000_P">A_10000_P</router-link>
                    </td>
                    <td></td>
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
<style>
    body {margin: 0;background-color: #fcfcfc;color:#333;font-size:12px;font-family:"맑은 고딕", "돋움", Dotum, AppleSDGothicNeo ,Droid Sans, arial, sans-serif}
    a:hover {color:#e60012;text-decoration:underline}
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
    th {padding:5px 0;color:#fff;background:#46675c;border-top:1px solid #ccc;border-left:1px solid #ccc}
    th.co01 {background:#000}
    th.co02 {background:#3ca66b}
    td {padding:7px 5px;border-top:1px solid #e1e1e1;border-left:1px solid #ccc;line-height:16px}
    .guide tr th, .guide tr td {background-color:#dcf6e7/*rgba(70,103,92,.4);border-color:#999*/}
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
</style>
