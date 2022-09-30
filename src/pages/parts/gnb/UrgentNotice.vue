<!-- 긴급공지 -->
<template>
    <div class="urgent-notice">
        <div class="row align-center" :style="{ height: '100%', padding: '0 12px' }">
            <div class="title-message flex-1 cursor-pointer f-14-500-wt elipsis" @click="handleClick">📢 {{urgentNotice.message}}</div>
            <m-icon class="cursor-pointer" name="close" :color="$style.white" @click.prevent.stop="close" />
        </div>
    </div>
</template>

<script>
import _ from 'lodash';
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
    name: 'UrgentNotice',
    props: {
    },
    data() {
        return {
        };
    },
    computed: {
        ...mapState({
            urgentNotice: state => state.common.urgentNotice
        }),
        target: function() {
            try {
                if (this.urgentNotice.link.search(location.origin) > -1) {
                    return '_self';
                }
            } catch (err) {}
            return '_blank';
        }
    },
    beforeCreate() {
    },
    async created() {
    },
    async mounted() {
    },
    beforeDestroy() {
    },
    methods: {
        handleClick() {
            try {
                const isSameHost = this.urgentNotice.link && this.urgentNotice.link.search(location.origin) === 0;
                if (this.urgentNotice.link && this.urgentNotice.target === '_self' && isSameHost) {
                    this.$router.push(this.urgentNotice.link.replace(this.HOST_URL, ''));
                } else if (this.urgentNotice.link && this.urgentNotice.target === '_self' && this.urgentNotice.link.search('/') === 0) {
                    this.$router.push(this.urgentNotice.link);
                } else if (this.urgentNotice.link) {
                    window.open(this.urgentNotice.link, this.urgentNotice.target || '_blank');
                }
            } catch (err) {}
        },
        close() {
            this.$store.dispatch('common/setFirebaseDatabase', { maintenance: { urgentNotice: { isActive: false } } });
        }
    }
};
</script>

<style lang="scss" scoped>
.urgent-notice {
    background: $crayola-flamingo-pink;
    height: 42px;

    .title-message {
        white-space: pre-wrap;
        word-break: break-all;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
}
</style>
