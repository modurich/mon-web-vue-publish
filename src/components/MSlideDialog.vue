<template>
    <q-dialog
        :content-class="`m-slide-dialog ${$attrs.class || ''}`"
        ref="dialog"
        @hide="onDialogHide"
    >
        <div class="dialog-content">
            <div class="top-area row align-center">
                <m-space-v size="12" />
                <div class="f-16-b-mg">{{title}}({{slide+1}}/{{list.length}})</div>
                <q-space />
                <div class="row align-center justify-center box-56 cursor-pointer">
                    <m-icon name="close_big" width="24" height="24" @click="onCancelClick" />
                </div>
            </div>
            <q-carousel
                ref="carousel"
                swipeable
                animated
                height="450px"
                v-model="slide"
                infinite
            >
                <q-carousel-slide
                    :key="`slide-${idx}`"
                    v-for="(item, idx) in list"
                    :name="idx"
                    :img-src="item.content"
                />
            </q-carousel>
            <div class="bottom-area row align-center">
                <div v-if="slide !== 0" class="row align-center justify-center box-56 cursor-pointer" @click="onClickPrev">
                    <m-icon name="chevron_left" stroke-opacity="0" />
                </div>
                <q-space />
                <div v-if="slide + 1 !== list.length" class="row align-center justify-center box-56 cursor-pointer" @click="onClickNext">
                    <m-icon name="chevron_right" stroke-opacity="0" />
                </div>
            </div>
        </div>
    </q-dialog>
</template>

<script>
export default {
    name: 'MSlideDialog',
    props: {
        title: String,
        list: Array
    },
    data() {
        return {
            slide: 0
        };
    },
    methods: {
    // following method is REQUIRED
    // (don't change its name --> "show")
        show() {
            this.$refs.dialog.show();
        },

        // following method is REQUIRED
        // (don't change its name --> "hide")
        hide() {
            this.$refs.dialog.hide();
        },

        onDialogHide() {
            // required to be emitted
            // when QDialog emits "hide" event
            this.$emit('hide');
        },

        onOKClick() {
            // on OK, it is REQUIRED to
            // emit "ok" event (with optional payload)
            // before hiding the QDialog
            this.$emit('ok');
            // or with payload: this.$emit('ok', { ... })

            // then hiding dialog
            this.hide();
        },

        onCancelClick() {
            // we just need to hide dialog
            this.hide();
        },

        onClickPrev() {
            this.$refs.carousel.previous();
        },
        onClickNext() {
            this.$refs.carousel.next();
        }
    }
};
</script>

<style lang="scss">
.m-slide-dialog {
    .dialog-content {
        .top-area {
            height: 56px;
        }
        .bottom-area {
            height: 56px;
        }
        .box-56 {
            height: 100%;
            width: 56px;
        }
    }
}
</style>
