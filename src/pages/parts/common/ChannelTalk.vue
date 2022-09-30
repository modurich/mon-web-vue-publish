<!-- 채널톡 -->
<template>
    <fragment />
</template>

<script>
import _ from 'lodash';
import { mapState, mapActions, mapGetters } from 'vuex';
import ChannelService from 'external/ChannelTalk';

export default {
    name: 'ChannelTalk',
    props: {
    },
    data() {
        return {
            isMounted: false,
            isFirstActivated: false
        };
    },
    computed: {
        ...mapState({
            isLogin: state => state.auth.isLogin,
            userInfo: state => state.auth.userInfo
        })
    },
    watch: {
        isLogin(newVal, oldVal) {
            this.resetChannelTalk();
        }
    },
    mounted() {
        this.resetChannelTalk();
        this.isMounted = true;
    },
    activated() {
        if (this.isMounted && this.isFirstActivated) {
            this.resetChannelTalk();
        } else {
            this.isFirstActivated = true;
        }
    },
    deactivated() {
        ChannelService.shutdown();
    },
    beforeDestroy() {
        ChannelService.shutdown();
        console.log('채널톡 ChannelService.shutdown');
    },
    methods: {
        resetChannelTalk() {
            ChannelService.shutdown();
            if (!this.isLogin) {
                ChannelService.boot({
                    pluginKey: process.env.CHANNEL_TALK_KEY,
                    memberId: this.$q.cookies.get('device_id')
                });
                console.log('채널톡 세팅 - 비회원');
            } else {
                ChannelService.boot({
                    pluginKey: process.env.CHANNEL_TALK_KEY,
                    memberId: this.userInfo.user_code.slice(0, 8),
                    profile: {
                        name: this.userInfo.nick_name,
                        avatarUrl: `https:${process.env.IMG_URL}${this.userInfo.photo_path}`,
                        email: this.userInfo.email,
                        mobileNumber: `+${this.userInfo.country_code}${this.userInfo.phone_no}`,
                        referrer: `${process.env.HOST_URL}${this.$route.fullPath}`
                    }
                });
                console.log('채널톡 세팅 - 회원', {
                    name: this.userInfo.nick_name,
                    avatarUrl: `https:${process.env.IMG_URL}${this.userInfo.photo_path}`,
                    email: this.userInfo.email,
                    mobileNumber: `+${this.userInfo.country_code}${this.userInfo.phone_no}`,
                    referrer: `${process.env.HOST_URL}${this.$route.fullPath}`
                });
            }
        }
    }
};
</script>

<style lang="scss" scoped>
</style>
