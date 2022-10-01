
<template>
    <footer class="footer_wrap">
        <div class="link_area">
            <a href="#">고객센터</a>
            <a href="#">인포데스크</a>
            <a href="#">약관</a>
            <a href="#">개인정보 처리방침</a>
        </div>
        <div class="info_area">
            <p>(주)모두리치 | 대표: 김병곤, 이승백 | 대표번호 1666-4165</p>
            <p>경기도 성남시 분당구 대왕판교로 660, B동 1102호</p>
            <p>사업자등록번호: 756-86-01241</p>
            <p>통신판매번호: 2019-성남분당A-0725</p>
            <p>Copyright ©2019 MODURICH All rights reserved</p>
            <p>Updated v0.2.0 2020.08.03 10:43:06</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    components: {
    },
    data() {
        return {
            
        };
    },
};
</script>

<style lang="scss" scoped>
.footer_wrap {
    width:100%;
    border-top:1px solid #d4d9ea;
    margin-top:32px;
     //700보다 작아질때
     @media (max-width: $breakpoint-xs-max) {
        background: #f8f9fd;
        border-top:0;
    }
    .link_area{text-align: center;padding-top:32px;
        a{margin:0 8px}
    }
    .info_area{
        text-align: center;
        font-size:12px;
        line-height: 22px;
        padding:16px 0 32px 0;
        p{height:22px;margin:0}
    }
}
</style>
