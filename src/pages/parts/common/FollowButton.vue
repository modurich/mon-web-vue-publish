<!-- 팔로우 버튼 -->
<template>
    <button aria-label="follow" v-if="followable" @click.prevent.stop="followUser">
        <m-icon class="follow-button" name="userFollow" width="24" height="24" :color="$style.greyTabby" stroke-opacity="0" />
    </button>
    <button aria-label="unfollow" v-else-if="unfollowable" @click.prevent.stop="unfollowUser">
        <m-icon class="follow-button" name="userFollowing" width="24" height="24" :color="$style.lightGrey" stroke-opacity="0" />
    </button>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
export default {
    name: 'FollowButton',
    components: {
    },
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
        };
    },
    computed: {
        ...mapState({
            userInfo: state => state.auth.userInfo,
            myFollowing: state => state.auth.myFollowing
        }),
        isBot() {
            return this.$utils.isBotId(this.user.user_id);
        },
        followable() {
            try {
                return !this.isBot && this.user.user_id !== this.userInfo.user_id && !this.myFollowing[this.user.user_id];
            } catch (err) {
                console.error(err);
            }
            return false;
        },
        unfollowable() {
            try {
                return !this.isBot && this.user.user_id !== this.userInfo.user_id && this.myFollowing[this.user.user_id];
            } catch (err) {
                console.error(err);
            }
            return false;
        }
    },
    beforeCreate() {
    },
    async created() {
    },
    mounted() {
    },
    methods: {
        async followUser() {
            const r = await this.$store.dispatch('auth/followUser', { user_id: this.user.user_id });
        },
        async unfollowUser() {
            const r = await this.$store.dispatch('auth/unfollowUser', { user_id: this.user.user_id });
        }
    }
};
</script>

<style lang="scss" scoped>
.follow-button {
}
</style>
