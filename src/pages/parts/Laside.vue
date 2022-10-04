

<template>
    <aside class="left_aside">
        <div class="aside_box">
            <!--S login-->
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
            <!--E login-->
            <!--S user-->
            <div class="user_wrap">
                <div class="user_area">
                    <div class="user_img">
                        <div class="img_area"><img src="~assets/user_img.png" alt="profile"/></div>
                    </div>
                    <p class="user_name">닉네임열두글자하나둘셋넷</p>
                    <p class="user_grade">
                        <!-- <span class="ico_level1">level</span> -->
                        <span class="badge type1">PRO</span>
                        <span class="badge type2">PL1</span>
                    </p>
                </div>
                <ul class="follow_wrap">
                    <li>
                        <span class="txt01">팔로워</span>
                        <span class="txt02">4K</span>
                    </li>
                    <li>
                        <span class="txt01">팔로잉</span>
                        <span class="txt02">326</span>
                    </li>
                </ul>
            </div>
            <!--E user-->
            <!--S member-->
            <div class="member_wrap">
               <div class="klip_wrap">
                    <span class="text_wrap">
                        <span class="ico_klip">klip</span>
                        <span class="text_area">0xa590bc1aa0655d84f5e10xa590bc1aa0655d84f5e1</span>
                    </span>
                    <span class="qr_wrap"><img src="~assets/ico_qr.svg"></span>
               </div>
               <ul class="member_list">
                    <li>
                        <span class="txt01">MON</span>
                        <span class="txt02">50.009</span>
                    </li>
                    <li>
                        <span class="txt01">SMON</span>
                        <span class="txt02">50,000,000,000001</span>
                    </li>
                </ul>
               <ul class="member_info">
                    <li>
                        <span class="txt01">활동점수</span>
                        <span class="txt02">500P</span>
                    </li>
                    <li>
                        <span class="txt01">보팅파워</span>
                        <span class="txt02">500VP</span>
                    </li>
                    <li>
                        <span class="txt01">리워드</span>
                        <span class="txt02">￦0</span>
                    </li>
                </ul>
                <div class="btn_area">
                    <m-button-3 lined class="full primary">멤버십 시작</m-button-3>
                    <m-button-3 lined class="full primary">🎉 가입미션 (2/6)</m-button-3>
                </div>
            </div>
            <!--E member-->
            <!--S alarm-->
            <div class="alarm_wrap">
                <a href="#" class="alarm_tit">
                    새 알림
                    <span>+ 32</span>
                </a>
                <div class="alarm_info">
                    <p class="tit">BLASH 리워드 지급</p>
                    <p class="con">BLASH 리워드(으)로 100 sMON이 지급되었습니다.</p>
                    <p class="date">[MON/리워드] 2주전</p>
                </div>
            </div>
            <!--E alarm-->
            <!--S local-->
            <div class="local_wrap">
                <p class="sub_title">로컬설정</p>
                <ul class="local_list">
                    <li>
                        <span class="txt01">언어</span>
                        <span class="txt02"><button class="btn_view">한국어</button></span>
                    </li>
                    <li>
                        <span class="txt01">통화</span>
                        <span class="txt02"><button class="btn_view">원(￦)</button></span>
                    </li>
                    <li>
                        <span class="txt01">타임존</span>
                        <span class="txt02"><button class="btn_view">UTC+9</button></span>
                    </li>
                </ul>
            </div>
            <!--E local-->
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
            <div class="info_wrap">
                <m-button-3 lined class="full light_gray">로그아웃</m-button-3>
            </div>
        </div>
    </aside>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'Laside',
    data() {
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
            .user_wrap{
                text-align: center;
                .user_img{
                    .img_area{
                        width:80px;
                        height:80px;
                        margin:0 auto;
                        border:3px solid $primary;
                        border-radius:80px;
                        overflow: hidden;
                        img{width:100%;height: 100%;}
                    }
                }
                .user_name{color:#141414;margin:8px 0;}
                .user_grade{
                    display:inline-flex;
                    align-items: center;
                    span{margin-right:8px;
                        &:last-child{margin-right:0;}
                    }
                    .ico_level1{
                        display: inline-flex;
                        text-indent: -999em;
                        width:17px;
                        height: 17px;
                        background:url('~assets/ico_level1.svg') center center no-repeat; ;
                    }
                }
                .follow_wrap{
                    display:flex;
                    .txt01{color:#141414}
                    .txt02{color:$primary;font-size:16px}
                   li{
                        width:50%;
                        span{display: block;}
                     }
                    li + li{border-left:1px solid #d4d9ea} 
                }
            }
            .member_wrap{
                .klip_wrap{
                    background:#f4f2ff;
                    border-radius: 8px;
                    padding:12px 10px;
                    display:flex;
                    align-items: center;
                    justify-content: space-between;
                    .ico_klip{
                        background: url('~assets/ico_klip.svg') center center no-repeat;
                        text-indent: -999em;
                        width:32px;
                        height:16px;
                        display: inline-flex;
                        margin-right:8px;
                    }
                    .text_wrap{
                        display:flex;
                        align-items: center;
                        .text_area{
                            text-overflow: ellipsis;
                            overflow: hidden;
                            white-space: nowrap;
                            width:150px;
                            display: inline-block;
                            color:#141414;
                        }
                    }
                    
                }
                .member_list{
                    margin:16px 0;
                    li{
                        display:flex;
                        justify-content: space-between;
                    }
                    .txt01{color:#141414}
                    .txt02{color:$primary;font-size:16px}
                    li + li{margin-top:8px}
                }
                .member_info{
                    display:flex;
                    .txt01{color:#141414}
                    .txt02{color:$primary;font-size:16px}
                   li{
                        flex:1;
                        span{display: block;text-align: center;}
                     }
                    li + li{border-left:1px solid #d4d9ea} 
                }
                .btn_area{
                    margin-top:32px;
                    button + button{margin-top:16px}
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
            .alarm_wrap{
                .alarm_tit{
                    display: flex;
                    align-items: center;
                    color: #141414;
                    &::before{
                        content:'';
                        background: url('~assets/ico_alarm.png') center center no-repeat;
                        width:26px;
                        height: 26px;
                        background-size:contain ;
                        display: inline-flex;
                    }
                    &::after{
                        content:'';
                        background: url('~assets/arrow_right_b.svg') center center no-repeat;
                        width:26px;
                        height: 26px;
                        position: absolute;
                        right:0;
                        background-size:contain ;
                        display: inline-flex;
                    }
                    span{color:$primary;margin-left:8px;font-size:16px}
                }
                .alarm_info{
                    background:#f4f2ff;
                    color: #141414;
                    border-radius: 8px;
                    padding:16px;
                    margin-top:16px;
                    .tit{font-weight: 700;}
                    .con,.date{font-size:12px}
                    .date{color:$primary}
                    p{
                        &:last-child{margin:0}
                    }
                }
            }
            .local_list{
                li{
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 16px;
                    &:last-child{margin-bottom: 0;}
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
