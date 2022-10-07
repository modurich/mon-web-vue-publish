<template>
    <div
        :class="`m-tabs row ${$attrs.class || ''}`"
    >
        <!-- <m-space-v size="12" /> -->
        <fragment :key="`m-tabs-item-${idx}`" v-for="(item, idx) in items">
            <fragment>
                <button
                    :class="`m-tabs-item ellipsis ${item.value === value ? 'active' : 'inactive'}`"
                    :style="item.value === value ? (item.activeStyle || {}) : (item.inactiveStyle || {})"
                    :disabled="item.disabled"
                    @click="handleButtonClick(item)"
                >
                    <div class="row justify-center align-center">
                        <span>{{item.label}}</span>
                        <m-space-v v-if="item.label && item.icon" size="8" />
                        <m-icon v-if="item.icon" :name="item.icon" :width="24" :height="24" :color="item.value === value ? $style.white : undefined" stroke-opacity="0" />
                    </div>
                </button>
            </fragment>
            <!-- SSR을 위한 hide link -->
            <router-link
                v-show="false"
                :class="`m-tabs-item ellipsis ${item.value === value ? 'active' : 'inactive'}`"
                :style="item.value === value ? (item.activeStyle || {}) : (item.inactiveStyle || {})"
                v-if="item.to"
                :to="item.to"
                replace
                @click.native="(() => { const i = { ...item }; return () => handleButtonClick(i); })()"
            >
                <span>{{item.label}}</span>
            </router-link>
        </fragment>
        <slot></slot>
        <!-- <m-space-v size="12" /> -->
    </div>
</template>

<script>
import _ from 'lodash';

export default {
    name: 'MTabs',
    inheritAttrs: true,
    data() {
        return {
        };
    },
    props: {
        value: [String, Number],
        items: {
            type: Array,
            default: function() {
                return [];
            }
        }
    },
    methods: {
        handleButtonClick(item) {
            // console.log('mtabs item clicked!!!!', this.items, item);
            if (!item.to) this.$emit('input', item.value);
            else this.$router.replace(item.to).catch(() => {});
            if (item.onClick) {
                this.$nextTick(() => item.onClick(item));
            }
        }
    },
    created() {
    },
    updated() {
        // console.log('mtabs updated!!!!!');
    },
    mounted() {
    }
};
</script>

<style lang="scss">
.m-tabs {
    display: flex;
    flex: 1;
    font-size: 14px;
    border-bottom: 1px solid $ghost-white;

    .m-tabs-item {
        height: 40px;
        flex: 1;
        min-width: 80px;
        border: none;
        margin: 0 1px;
    }
    a.m-tabs-item {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .m-tabs-item.active {
        // border: 1px solid $grey-tabby;
        background-color: $medium-grey;
        color: $white;
        font-weight: bold;
        border-radius: 0px;
    }
    .m-tabs-item.inactive {
        border: none;
        color: $grey-tabby;
        font-weight: 500;
    }
}
</style>
