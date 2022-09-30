<template>
    <div
        :class="`m-profile-photo`"
        :style="{ background: `url(${$utils.getProfilePhotoPath(photoPath)}) no-repeat center center / cover` }"
    ></div>
</template>

<script>
export default {
    name: 'MProfilePhoto',
    inheritAttrs: true,
    props: {
        photoPath: String
    },
    data() {
        return {
        };
    },
    computed: {
    },
    created() {
    },
    mounted() {
    },
    methods: {
    }
};
</script>

<style lang="scss">
// 공통 프로필 사진
.m-profile-photo {
    width: 40px;
    height: 40px;
    background-color: $grey-tabby;
    border-radius: 50%;
}
</style>
