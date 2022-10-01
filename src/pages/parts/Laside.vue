

<template>
    <aside class="left_aside">
        <div class="aside_box">
            <div class="login_wrap">
                <q-form>
                    <div class="login_area">
                    <div class="monstock_logo l_row"><img src="~assets/logo.svg" alt="monstock logo"/></div>
                    <div class="l_row"><m-select v-model="select1" :options="options" /></div>
                    <div class="l_row"><m-input filled v-model="text1" label="휴대폰 번호 또는 이메일 주소" class="round_type"/></div>
                    <div class="l_row"><m-input filled v-model="text1" label="비밀번호" class="round_type"/></div>
                    <div class="btn_wrap l_row"><m-button-3 color="slateBlue" class="full">로그인</m-button-3></div>
                    <div class="check_wrap">
                        <div class="check_area"><m-checkbox size="md" v-model="check1" label="자동 로그인"/></div>
                        <div class="link_area">
                        <a href="#">비밀번호 찾기</a>
                        <a href="#">회원가입</a>
                        </div>
                    </div>
                    </div>
                </q-form>
            </div>
            <div class="local_wrap">
                <p class="sub_title">로컬설정</p>
                <ul class="local_list">
                    <li>
                        <span class="txt01">언어</span>
                        <span class="txt02">한국어</span>
                    </li>
                    <li>
                        <span class="txt01">통화</span>
                        <span class="txt02">원(￦)</span>
                    </li>
                    <li>
                        <span class="txt01">타임존</span>
                        <span class="txt02">UTC+9</span>
                    </li>
                </ul>
            </div>
            <div class="info_wrap">
                <a href="#">
                    <i class="icon ico_event"></i>
                    <span>이벤트</span>
                </a>
                <a href="#">
                    <i class="icon ico_info"></i>
                    <span>인포데스크</span>
                </a>
                <a href="#">
                    <i class="icon ico_question"></i>
                    <span>퀵가이드</span>
                </a>
                <a href="#">
                    <i class="icon ico_info"></i>
                    <span>서비스소개</span>
                </a>
                <a href="#">
                    <i class="icon ico_cs"></i>
                    <span>고객센터</span>
                </a>
            </div>
        </div>
    </aside>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'Laside',
    setup() {
        return {
            text1:ref(''),
            text2:ref(''),
            check1:ref(true),
            select1:ref(null),
            options:[
                'South Korea (+82)', '선택1', '선택2', '선택3', '선택4'
            ]
        }
    }
   
};
</script>

<style lang="scss" scoped>
    .left_aside{
        width:280px;
        .aside_box{
            padding:0 16px;
            background:#fff;
            > div{
                position: relative;
                padding:32px 0;
                &:last-child{
                    &:after{
                        border-bottom:0
                    }
                }
                &:after{
                    content:'';
                    position:absolute;
                    bottom:0;
                    right:0;
                    left:0;
                    height:1px;
                    border-bottom:1px solid #d4d9ea;
                    margin:0 -16px;
                }
            }
            .info_wrap{
                display: flex;
                flex-wrap: wrap;
                a{
                    border:2px solid $primary;
                    border-radius:8px;
                    display:block;width:calc(50% - 8px);
                    height:82px;
                    color:$primary;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: wrap;
                    padding: 22px 0;
                    margin-bottom:16px;
                    &:last-child{margin-bottom:0}
                    &:nth-child(odd){margin-right:16px}
                    span{width:100%;text-align: center;}
                    .icon{
                        display: block;
                        width:18px;
                        height:18px;
                        margin:0 auto;
                    }
                    .ico_event{ background: url('~assets/ico_event.svg') center center no-repeat;}
                    .ico_question{ background: url('~assets/ico_question.svg') center center no-repeat;}
                    .ico_info{ background: url('~assets/ico_info.svg') center center no-repeat;}
                    .ico_cs{ background: url('~assets/ico_cs.svg') center center no-repeat;}
                }
            }
            .local_list{
                li{
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 16px;
                    &:last-child{margin-bottom: 0;}
                    .txt02{
                        color:$primary;
                        display: flex;
                        align-items: center;
                        &:after{
                            content:'';
                            background: url('~assets/arrow_right.svg') center right no-repeat;
                            width:20px;
                            height:20px;
                            display:inline-flex;
                        }
                    }
                }
            }
            .login_wrap{
                .monstock_logo{
                    margin:0;
                    padding:0 0 32px 0;
                    img{width:80px;height:80px}
                }
            }
            .check_wrap{
                flex-wrap:wrap;
                .link_area{
                    width:100%;
                    display: flex;
                    justify-content: space-between;
                    padding:16px 0 0px 0;
                    a{
                        width:50%;
                        text-align: center;
                    }
                }
            }
        }
    }
</style>
