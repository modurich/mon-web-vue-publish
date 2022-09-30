<i18n>
{
    "ko": {
        "template": {
            "home" : "홈",
            "label1": "마이페이지",
            "label2": "최근열람",
            "label3": "내 종목",
            "label4": "관심종목",
            "label5": "종목추가",
            "label6": "종목순서변경",
            "label7": "선택종목삭제",
            "label8": "구독현황",
            "label9": "BLASH 관리",
            "label10": "추천종목관리",
            "label11": "BLASH",
            "label12": "시그널작성",
            "label13": "알림",
            "label14": "웹푸시 설정",
            "label15": "소셜",
            "label16": "내 정보 수정",
            "label17": "활동내역",
            "label18": "결제내역",
            "label19": "몬스탁 멤버십 이용정보",
            "label20": "환불계좌입력",
            "label21": "멤버십 결제내역",
            "label22": "상세",
            "label23": "지갑",
            "label24": "지갑 연결",
            "label25": "스왑",
            "label26": "보내기",
            "label27": "락업정보",
            "label28": "자산",
            "label29": "원화 출금 신청",
            "label30": "출금계좌등록/변경",
            "label31": "OTP등록",
            "label32": "NFT",
            "label33": "NFT 목록",
            "label34": "NFT 상세",
            "label35": "NFT 보내기",
            "label36": "NFT 삭제",
            "label37": "스테이킹",
            "label38": "예치",
            "label39": "출금요청",
            "label40": "출금/내역",
            "label41": "트렌젝션 승인",
            "label42": "거버넌스",
            "label43": "의제 투표",
            "label44": "의제 작성",
            "label45": "NFT샵",
            "label46": "경매정보",
            "label47": "보증금 예치",
            "label48": "잔금 결제",
            "label49": "고객센터",
            "label50": "인사이트/오피니언 작성안내",
            "label51": "인사이트안내",
            "label52": "인사이트작성",
            "label53": "콘텐츠 작성",
            "label54": "시장인사이트 작성",
            "label55": "임시저장",
            "label56": "검수요청",
            "label57": "인사이트",
            "label58": "인사이트 미리보기",
            "label59": "인사이트상세",
            "label60": "포스트",
            "label61": "포스트상세",
            "label62": "BLASH안내",
            "label63": "BLASH작성",
            "label64": "BLASH",
            "label65": "BLASH미리보기",
            "label66": "BLASH상세",
            "label67": "BLASH/시그널 작성안내",
            "label68": "보팅",
            "label69": "럭키박스"
        }
    },
    "en": {
        "template": {
            "home" : "Home",
            "label1": "My page",
            "label2": "Recently viewed",
            "label3": "My stocks",
            "label4": "Favorites stocks",
            "label5": "Add stocks",
            "label6": "Change Priority stocks",
            "label7": "Delete the selected stocks",
            "label8": "Subscription Status",
            "label9": "BLASH Administrate",
            "label10": "Recommended stocks Administrate",
            "label11": "BLASH",
            "label12": "Signal writing",
            "label13": "Notice",
            "label14": "Web push setting",
            "label15": "Social",
            "label16": "Edit my information",
            "label17": "Activities",
            "label18": "Payment history",
            "label19": "Monstock membership Usage information",
            "label20": "Enter refund account",
            "label21": "Membership payment history",
            "label22": "Details",
            "label23": "Wallet",
            "label24": "Wallet link",
            "label25": "Swap",
            "label26": "Send",
            "label27": "Lockup information",
            "label28": "Assets",
            "label29": "Withdrawal request the won",
            "label30": "Registration/change of withdrawal account",
            "label31": "OTP registration",
            "label32": "NFT",
            "label33": "NFT List",
            "label34": "NFT Details",
            "label35": "NFT Send",
            "label36": "NFT delete",
            "label37": "Staking4",
            "label38": "Deposit",
            "label39": "Withdrawal request",
            "label40": "Withdrawal/history",
            "label41": "Transaction Approval",
            "label42": "Goveranance",
            "label43": "Vote on the agenda",
            "label44": "Create Agenda",
            "label45": "NFT Shop",
            "label46": "Auction information",
            "label47": "Deposit",
            "label48": "Balance payment",
            "label49": "Service center",
            "label50": "INSIGHT/OPINION guide for writing",
            "label51": "INSIGHT guide",
            "label52": "INSIGHT creat",
            "label53": "Contents creat",
            "label54": "Market INSIGHT creat",
            "label55": "Temporary save",
            "label56": "Request for inspection",
            "label57": "INSIGHT",
            "label58": "INSIGHT preview",
            "label59": "INSIGHT details",
            "label60": "Post",
            "label61": "Post details",
            "label62": "BLASH guide",
            "label63": "BLASH creat",
            "label64": "BLASH",
            "label65": "BLASH preview",
            "label66": "BLASH details",
            "label67": "BLASH/Signal guide for writing",
            "label68": "Voting",
            "label69": "Lucky box"
        }
    }
}
</i18n>

<template>
    <!-- TopBreadcrumbs -->
    <div :class="{ 'top-breadcrumbs': true }">
        <!-- ========================================마이페이지======================================= -->
        <!-- 마이페이지 -->
        <div class="breadcrumbs" v-if="['MyPage'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Home' }">{{ $t('template.home') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label1') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>

        <!-- 마이페이지 - 본인 이외 -->
        <div class="breadcrumbs" v-else-if="['MyPageOthers'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Home' }">{{ $t('template.home') }}</router-link>
                <div>{{'>'}}</div>
                <!-- Info 흐름 마지막 클라이언트 단에서 다국어 처리를 하는게 아닌 mypage에서 store에 값을 세팅할 때 currentBreadcrumbText를
                    이미 다국어처리해서 넣어버림 일단 이미 다국어 처리된 값이므로 화면에 바로 표현 -->
                <div>{{currentBreadcrumbText}}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>
        <!-- ======================================================================================= -->

        <!-- =========================================최근열람======================================== -->
        <!-- 최근열람 -->
        <div class="breadcrumbs" v-else-if="['Archive'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Home' }">{{ $t('template.home') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label2') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>
        <!-- ======================================================================================= -->

        <!-- =========================================내 종목======================================== -->
        <!-- 내종목 -->
        <div class="breadcrumbs" v-else-if="['MyStocks'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Home' }">{{ $t('template.home') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label3') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>

        <!-- 종목추가 -->
        <div class="breadcrumbs" v-else-if="['MyStocksAdd'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Home' }">{{ $t('template.home') }}</router-link>
                <div>{{'>'}}</div>
                <router-link :to="{ name: 'MyStocks', query: { tab: 'myStocks' } }">{{ $t('template.label3') }}</router-link>
                <div>{{'>'}}</div>
                <router-link :to="{ name: 'MyStocks' }">{{ $t('template.label4') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label5') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>

        <!-- 종목순서변경 -->
        <div class="breadcrumbs" v-else-if="['MyStocksOrderEdit'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Home' }">{{ $t('template.home') }}</router-link>
                <div>{{'>'}}</div>
                <router-link :to="{ name: 'MyStocks', query: { tab: 'myStocks' } }">{{ $t('template.label3') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label6') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>

        <!-- 선택종목삭제 -->
        <div class="breadcrumbs" v-else-if="['MyStocksRemove'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Home' }">{{ $t('template.home') }}</router-link>
                <div>{{'>'}}</div>
                <router-link :to="{ name: 'MyStocks', query: { tab: 'myStocks' } }">{{ $t('template.label3') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label7') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>

        <!-- ======================================================================================= -->

        <!-- ==========================================구독현황========================================= -->
        <!-- 구독현황 -->
        <div class="breadcrumbs" v-else-if="['SubscriptionStatus'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Home' }">{{ $t('template.home') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label8') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>
        <!-- ======================================================================================= -->

        <!-- ==========================================BLASH 관리========================================= -->
        <!-- BLASH 관리 -->
        <div class="breadcrumbs" v-else-if="['BlashManage'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'MyPage' }">{{ $t('template.label1') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label9') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>

        <!-- 종목추천 추천종목관리 -->
        <div class="breadcrumbs" v-else-if="['BlashListManage'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'MyPage' }">{{ $t('template.label1') }}</router-link>
                <div>{{'>'}}</div>
                <router-link :to="{ name: 'BlashManage' }">{{ $t('template.label9') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label10') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>

        <!-- 종목추천 시그널작성 -->
        <!-- <div class="breadcrumbs" v-else-if="['WriteBlashSignalBuy', 'WriteBlashSignalHold', 'WriteBlashSignalSell'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Blash' }">{{ $t('template.label11') }}</router-link>
                <div>{{'>'}}</div>
                <router-link :to="{ name: 'BlashManage' }">{{ $t('template.label9') }}</router-link>
                <div>{{'>'}}</div>
                <router-link :to="{ name: 'BlashListManage', query: { tab: 'progressing' } }">{{ $t('template.label10') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label12') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div> -->
        <!-- ======================================================================================= -->

        <!-- ==========================================알림========================================= -->
        <!-- 알림 -->
        <div class="breadcrumbs" v-else-if="['Notification'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Home' }">{{ $t('template.home') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label13') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>

        <!-- 푸시설정 -->
        <div class="breadcrumbs" v-else-if="['NotificationSetting'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Home' }">{{ $t('template.home') }}</router-link>
                <div>{{'>'}}</div>
                <router-link :to="{ name: 'Notification' }">{{ $t('template.label13') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label14') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>
        <!-- ======================================================================================= -->

        <!-- ==========================================소셜========================================= -->
        <!-- 소셜(팔로우/팔로잉/차단) -->
        <div class="breadcrumbs" v-else-if="['Social'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Home' }">{{ $t('template.home') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label15') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>
        <!-- ======================================================================================= -->

        <!-- =======================================내 정보 수정====================================== -->
        <!-- 회원정보 수정 메뉴들 -->
        <div class="breadcrumbs" v-else-if="['MemberProfile'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Home' }">{{ $t('template.home') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label16') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>
        <!-- ======================================================================================= -->

        <!-- =========================================활동내역======================================== -->
        <!-- 활동내역 -->
        <div class="breadcrumbs" v-else-if="['Activity'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Home' }">{{ $t('template.home') }}</router-link>
                <div>{{'>'}}</div>
                <router-link :to="{ name: 'Activity' }">{{ $t('template.label17') }}</router-link>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>
        <!-- 결제내역 -->
        <div class="breadcrumbs" v-else-if="['PayHistory'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Home' }">{{ $t('template.home') }}</router-link>
                <div>{{'>'}}</div>
                <router-link :to="{ name: 'Activity' }">{{ $t('template.label17') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label18') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>
        <!-- 멤버십 취소 -->
        <div class="breadcrumbs" v-else-if="['SubscriptInfo'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Home' }">{{ $t('template.home') }}</router-link>
                <div>{{'>'}}</div>
                <router-link :to="{ name: 'Activity' }">{{ $t('template.label17') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label19') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>
        <!-- 멤버십 취소 > 환불계좌입력 -->
        <div class="breadcrumbs" v-else-if="['CancelSubscriptRequest'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Home' }">{{ $t('template.home') }}</router-link>
                <div>{{'>'}}</div>
                <router-link :to="{ name: 'Activity' }">{{ $t('template.label17') }}</router-link>
                <div>{{'>'}}</div>
                <router-link :to="{ name: 'SubscriptInfo' }">{{ $t('template.label19') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label20') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>
        <!-- 결제내역상세(카드&차이) -->
        <div class="breadcrumbs" v-else-if="['PayDetail'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Home' }">{{ $t('template.home') }}</router-link>
                <div>{{'>'}}</div>
                <router-link :to="{ name: 'Activity' }">{{ $t('template.label17') }}</router-link>
                <div>{{'>'}}</div>
                <router-link :to="{ name: 'PayHistory' }">{{ $t('template.label21') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label22') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>
        <!-- 결제내역상세(무통장) -->
        <div class="breadcrumbs" v-else-if="['DepositHistoryDetail'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Home' }">{{ $t('template.home') }}</router-link>
                <div>{{'>'}}</div>
                <router-link :to="{ name: 'Activity' }">{{ $t('template.label17') }}</router-link>
                <div>{{'>'}}</div>
                <router-link :to="{ name: 'PayHistory' }">{{ $t('template.label21') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label22') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>
        <!-- ======================================================================================= -->

        <!-- ===========================================지갑========================================== -->
        <!-- MON 지갑 -->
        <div class="breadcrumbs" v-else-if="['Wallet'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Home' }">{{ $t('template.home') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label23') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>

        <!-- 지갑 연결 -->
        <div class="breadcrumbs" v-else-if="['RegisterWallet'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Home' }">{{ $t('template.home') }}</router-link>
                <div>{{'>'}}</div>
                <router-link :to="{ name: 'Wallet' }">{{ $t('template.label23') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label24') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>

        <!-- 스왑 -->
        <div class="breadcrumbs" v-else-if="['Swap'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Home' }">{{ $t('template.home') }}</router-link>
                <div>{{'>'}}</div>
                <router-link :to="{ name: 'Wallet' }">{{ $t('template.label23') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label25') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>

        <!-- 보내기 -->
        <div class="breadcrumbs" v-else-if="['SendCoin'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Home' }">{{ $t('template.home') }}</router-link>
                <div>{{'>'}}</div>
                <router-link :to="{ name: 'Wallet' }">{{ $t('template.label23') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label26') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>

        <!-- 락업정보 -->
        <div class="breadcrumbs" v-else-if="['LockupInfo'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Home' }">{{ $t('template.home') }}</router-link>
                <div>{{'>'}}</div>
                <router-link :to="{ name: 'Wallet' }">{{ $t('template.label23') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label27') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>

        <!-- 출금신청 -->
        <div class="breadcrumbs" v-else-if="['Withdraw'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Home' }">{{ $t('template.home') }}</router-link>
                <div>{{'>'}}</div>
                <router-link :to="{ name: 'Wallet' }">{{ $t('template.label23') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label28') }}</div>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label29') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>

        <!-- 출금계좌등록/변경 -->
        <div class="breadcrumbs" v-else-if="['WithdrawalSetting'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Home' }">{{ $t('template.home') }}</router-link>
                <div>{{'>'}}</div>
                <router-link :to="{ name: 'Wallet' }">{{ $t('template.label23') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label28') }}</div>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label30') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>

        <!-- OTP등록 -->
        <div class="breadcrumbs" v-else-if="['RegistOtp'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Home' }">{{ $t('template.home') }}</router-link>
                <div>{{'>'}}</div>
                <router-link :to="{ name: 'Wallet' }">{{ $t('template.label23') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label31') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>

        <!-- NFT -->
        <div class="breadcrumbs" v-else-if="['Nft'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Home' }">{{ $t('template.home') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label32') }}</div>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label33') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>

        <!-- NFT 상세 -->
        <div class="breadcrumbs" v-else-if="['NftDetail'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Home' }">{{ $t('template.home') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label32') }}</div>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label34') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>

        <!-- NFT 보내기 -->
        <div class="breadcrumbs" v-else-if="['SendNft'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Home' }">{{ $t('template.home') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label32') }}</div>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label35') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>

        <!-- NFT 삭제 -->
        <div class="breadcrumbs" v-else-if="['BurnNft'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Home' }">{{ $t('template.home') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label32') }}</div>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label36') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>
        <!-- ======================================================================================= -->

        <!-- ===========================================거버넌스 > 스테이킹========================================== -->
        <!-- 스테이킹 예치 -->
        <div class="breadcrumbs" v-else-if="['StakingDeposit'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Home' }">{{ $t('template.home') }}</router-link>
                <div>{{'>'}}</div>
                <router-link :to="{ name: 'Governance', query: { tab: 'staking' } }">{{ $t('template.label37') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label38') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>

        <!-- 스테이킹 출금요청 -->
        <div class="breadcrumbs" v-else-if="['StakingWithdraw'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Home' }">{{ $t('template.home') }}</router-link>
                <div>{{'>'}}</div>
                <router-link :to="{ name: 'Governance', query: { tab: 'staking' } }">{{ $t('template.label37') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label39') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>

        <!-- 스테이킹 출금/내역 -->
        <div class="breadcrumbs" v-else-if="['StakingWithdrawList'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Home' }">{{ $t('template.home') }}</router-link>
                <div>{{'>'}}</div>
                <router-link :to="{ name: 'Governance', query: { tab: 'staking' } }">{{ $t('template.label37') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label40') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>

        <!-- 스테이킹 트렌젝션 승인 -->
        <div class="breadcrumbs" v-else-if="['StakingTransactionApprove'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Home' }">{{ $t('template.home') }}</router-link>
                <div>{{'>'}}</div>
                <router-link :to="{ name: 'Governance', query: { tab: 'staking' } }">{{ $t('template.label37') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label41') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>
        <!-- ======================================================================================= -->

        <!-- ===========================================거버넌스 > 의제 투표========================================== -->
        <!-- 의제 투표 상세 -->
        <div class="breadcrumbs" v-else-if="['AgendaDetail'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Governance' }">{{ $t('template.label42') }}</router-link>
                <div>{{'>'}}</div>
                <router-link :to="{ name: 'Governance', query: { tab: 'agenda' } }">{{ $t('template.label43') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label22') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>

        <!-- 의제 투표 작성 -->
        <div class="breadcrumbs" v-else-if="['WriteAgenda'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Governance' }">{{ $t('template.label42') }}</router-link>
                <div>{{'>'}}</div>
                <router-link :to="{ name: 'Governance', query: { tab: 'agenda' } }">{{ $t('template.label43') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label44') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>
        <!-- ======================================================================================= -->

        <!-- ===========================================NFT샵========================================== -->
        <!-- NFT샵 -->
        <div class="breadcrumbs" v-else-if="['NftShop'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Home' }">{{ $t('template.home') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label45') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>

        <!-- NFT샵 상세 -->
        <div class="breadcrumbs" v-else-if="['NftShopDetail'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Home' }">{{ $t('template.home') }}</router-link>
                <div>{{'>'}}</div>
                <router-link :to="{ name: 'NftShop', query: { tab: 'progress' } }">{{ $t('template.label45') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label34') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>

        <!-- NFT샵 보증금 예치 -->
        <div class="breadcrumbs" v-else-if="['NftBidDeposit'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Home' }">{{ $t('template.home') }}</router-link>
                <div>{{'>'}}</div>
                <router-link :to="{ name: 'NftShop', query: { tab: 'progress' } }">{{ $t('template.label45') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label46') }}</div>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label47') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>

        <!-- NFT샵 잔금 결제 -->
        <div class="breadcrumbs" v-else-if="['NftBidPayBalance'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Home' }">{{ $t('template.home') }}</router-link>
                <div>{{'>'}}</div>
                <router-link :to="{ name: 'NftShop', query: { tab: 'progress' } }">{{ $t('template.label45') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label46') }}</div>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label48') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>
        <!-- ======================================================================================= -->

        <!-- ===========================================고객센터========================================== -->
        <!-- 고객센터 -->
        <div class="breadcrumbs" v-else-if="['CustomerCenter'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Home' }">{{ $t('template.home') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label49') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>
        <!-- ======================================================================================= -->

        <!-- 인사이트 작성 가이드 페이지 -->
        <div class="breadcrumbs" v-else-if="['WriteInsightGuide'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Home' }">{{ $t('template.home') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label50') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>

        <!-- 인사이트 작성 페이지 -->
        <div class="breadcrumbs" v-else-if="['WriteInsight'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Home' }">{{ $t('template.home') }}</router-link>
                <div>{{'>'}}</div>
                <router-link :to="{ name: 'WriteInsightGuide' }">{{ $t('template.label51') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label52') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>

        <!-- 오피니언 작성 페이지 -->
        <div class="breadcrumbs" v-else-if="['WriteOpinion'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'WriteInsightGuide' }">{{ $t('template.label53') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label54') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>

        <!-- 인사이트 임시저장 페이지 -->
        <div class="breadcrumbs" v-else-if="['TempSave'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <div>{{ $t('template.label53') }}</div>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label55') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>

        <!-- 오피니언 검수요청 페이지 -->
        <div class="breadcrumbs" v-else-if="['CheckOpinion'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'WriteInsightGuide' }">{{ $t('template.label53') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label56') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>

        <!-- 오피니언 미리보기 페이지 -->
        <div class="breadcrumbs" v-else-if="['OpinionPreview'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Insight' }">{{ $t('template.label57') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label58') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>

        <!-- 인사이트 상세 페이지 -->
        <div class="breadcrumbs" v-else-if="['InsightDetail'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Insight' }">{{ $t('template.label57') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label59') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>

        <!-- 포스트 작성 -->
        <div class="breadcrumbs" v-else-if="['WritePost'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <div>{{ $t('template.label53') }}</div>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label60') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>

        <!-- 포스트 상세 페이지 -->
        <div class="breadcrumbs" v-else-if="['PostDetail'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Post' }">{{ $t('template.label60') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label61') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>

        <!-- BLASH 작성 -->
        <div class="breadcrumbs" v-else-if="['WriteBlash'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Home' }">{{ $t('template.home') }}</router-link>
                <div>{{'>'}}</div>
                <router-link :to="{ name: 'WriteBlashGuide' }">{{ $t('template.label62') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label63') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>

        <!-- BLASH 미리보기 -->
        <div class="breadcrumbs" v-else-if="['BlashPreview'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Blash' }">{{ $t('template.label64') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label65') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>

        <!-- BLASH 상세 -->
        <div class="breadcrumbs" v-else-if="['BlashDetail'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Blash' }">{{ $t('template.label64') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label66') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>

        <!-- BLASH 안내 -->
        <div class="breadcrumbs" v-else-if="['WriteBlashGuide'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Home' }">{{ $t('template.home') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label67') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>

        <!-- 보팅 -->
        <div class="breadcrumbs" v-else-if="['Voting'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Home' }">{{ $t('template.home') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label68') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>

        <!-- 럭키박스 -->
        <div class="breadcrumbs" v-else-if="['LuckyBox'].indexOf($route.name) !== -1">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <router-link :to="{ name: 'Home' }">{{ $t('template.home') }}</router-link>
                <div>{{'>'}}</div>
                <div>{{ $t('template.label69') }}</div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>

        <!-- 기타 페이지들 -->
        <!-- Info 흐름 마지막 클라이언트 단에서 다국어 처리를 하는게 아닌 BlasSignalDetail에서 store에 값을 세팅할 때 이미
            {{item.label}}를 다국어처리해서 넣어버림 일단 이미 다국어 처리된 값이므로 화면에 바로 표현 -->
        <div class="breadcrumbs" v-else-if="currentBreadcrumbArray.length > 0">
            <div class="breadcrumbs-el row align-center f-14-500-gt">
                <div class="row align-center" :key="`breadcrumb-${idx}`" v-for="(item, idx) in currentBreadcrumbArray">
                    <router-link v-if="!_.isEmpty(item.to)" :to="item.to">{{item.label}}</router-link>
                    <div v-else>{{item.label}}</div>
                    <div v-if="currentBreadcrumbArray.length !== idx + 1" :style="{ marginLeft: '8px' }">{{'>'}}</div>
                </div>
            </div>
            <m-space-h size="1" class="shadowed-bottom" :style="{ backgroundColor: $style.ghostWhite }" />
        </div>
    </div>
</template>

<script>
import _ from 'lodash';
import { mapState, mapActions } from 'vuex';

export default {
    name: 'TopBreadcrumbs',
    components: {
    },
    data() {
        return {
        };
    },
    props: {
    },
    computed: {
        ...mapState({
            currentBreadcrumbText: state => state.common.currentBreadcrumbText,
            currentBreadcrumbArray: state => state.common.currentBreadcrumbArray
        })
    },
    beforeCreate() {
    },
    async created() {
    },
    mounted() {
    },
    methods: {
    }
};
</script>

<style lang="scss" scoped>
.top-breadcrumbs {
    background: $white;
    .breadcrumbs {
        overflow: visible;
        white-space: nowrap;
        .breadcrumbs-el {
            overflow-x: auto;
            // overflow-x: scroll;
            flex-wrap: nowrap;
            margin: 0 12px;
            height: 40px;
            & > * {
                margin-right: 8px;
            }
        }
    }
}
</style>
