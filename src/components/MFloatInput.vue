<template>
    <div ref="wrapper" class="m-float-input">
        <div ref="slot" @click="toggleInputPopup">
            <slot></slot>
        </div>
        <div class="float-input" ref="input" v-if="showInput" v-click-outside="vClickOutsideConfig">
            <div class="row align-center f-16-500-wt flex-no-wrap">
                <input v-model="input" class="flex-1" type="text" placeholder="https://" @keypress.enter="handleApply" v-autofocus />
                <m-icon class="cursor-pointer" name="check_checked" @click="handleApply" stroke-opacity="0" :color="$style.white" />
                <m-icon class="cursor-pointer" name="close" @click="handleCancel" :color="$style.white" />
            </div>
        </div>
    </div>
</template>

<script>
import _ from 'lodash';

export default {
    name: 'MFloatInput',
    props: {
        value: {
            type: String,
            default: function() {
                return '';
            }
        }
    },
    data() {
        return {
            input: this.value,
            showInput: false
        };
    },
    computed: {
        vClickOutsideConfig() {
            return {
                handler: this.hideInputPopup,
                events: ['click'],
                isActive: true,
                detectIFrame: true
            };
        }
    },
    created() {
    },
    mounted() {
    },
    methods: {
        toggleInputPopup() {
            this.showInput = !this.showInput;
        },
        hideInputPopup() {
            console.log('hideInputPopup');
            this.showInput = false;
        },
        handleApply() {
            console.log('handleApply');
            this.$emit('input', this.input);
            this.input = '';
            this.showInput = false;
        },
        handleCancel() {
            this.input = '';
            this.showInput = false;
        }
    }
};
</script>

<style lang="scss" scoped>
.m-float-input {
    position: relative;
    .float-input {
        position: absolute;
        background: $medium-grey;

        input {
            background: $medium-grey;
            border: none;
            color: $white;
            &:focus {
                // border: none;
                outline: none;
            }
        }
    }
}
</style>
