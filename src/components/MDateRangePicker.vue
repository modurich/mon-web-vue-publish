<template>
    <div
        :class="`m-date-range-picker ${$attrs.class || ''}`"
    >
        <div class="selectable-button row align-center cursor-pointer" style="height: 44px;">
            <m-space-v size="16" />
            <div class="f-16-500-gt">{{dateText}}</div>
            <q-space />
            <m-icon name="calendar" :color="$style.greyTabby" stroke-opacity="0" />
            <m-space-v size="8" />
        </div>
        <q-popup-proxy ref="popup" @before-show="updateProxy" transition-show="scale" transition-hide="scale">
            <div>
                <q-date
                    v-model="proxyDate"
                    @input="() => {}"
                    flat
                    square
                    minimal
                    color="orange"
                    range
                    :events="events"
                    :event-color="eventColor"
                    :navigation-min-year-month="navigationMinYearMonth"
                    :navigation-max-year-month="navigationMaxYearMonth"
                    @range-end="rangeEndEvent"
                    :options="options"
                >
                </q-date>
            </div>
        </q-popup-proxy>
    </div>
</template>

<script>
import _ from 'lodash';
import moment from 'moment';

export default {
    name: 'MDateRangePicker',
    inheritAttrs: true,
    data() {
        return {
            proxyDate: null
        };
    },
    computed: {
        dateText: function() {
            console.log('this.value', this.value);
            if (_.isObject(this.value)) {
                return `${moment(this.value.from).format('YYYY.MM.DD')}~${moment(this.value.to).format('YYYY.MM.DD')}`;
            }
            return this.value;
        }
    },
    props: {
        value: {
            type: Object,
            default: function() {
                return {
                    from: this.moment().toDate(),
                    to: this.moment().toDate()
                };
            }
        },
        events: {
            type: Array,
            default: function() {
                return [];
            }
        },
        eventColor: {
            type: Function,
            default: function() {
                return () => {};
            }
        },
        options: Function,
        navigationMinYearMonth: String,
        navigationMaxYearMonth: String
    },
    methods: {
        updateProxy() {
            this.proxyDate = {
                from: this.moment(this.value.from).format('YYYY/MM/DD'),
                to: this.moment(this.value.to).format('YYYY/MM/DD')
            };
        },
        async rangeEndEvent() {
            console.log('this.proxyDate', this.proxyDate);
            let date = null;
            if (_.isString(this.proxyDate)) {
                date = {
                    from: this.moment(this.proxyDate).format('YYYY/MM/DD'),
                    to: this.moment(this.proxyDate).format('YYYY/MM/DD')
                };
            } else if (_.isNull(this.proxyDate)) {
                this.$refs.popup.hide();
                return;
            } else {
                date = {
                    from: this.moment(this.proxyDate.from).format('YYYY/MM/DD'),
                    to: this.moment(this.proxyDate.to).format('YYYY/MM/DD')
                };
            }
            this.$emit('input', date);
            await this.$utils.sleep(200);
            this.$refs.popup.hide();
            this.$emit('range-end', date);
        }
    },
    created() {
    },
    mounted() {
    }
};
</script>

<style lang="scss">
.m-date-range-picker {
}
.q-date__main {
    .q-date__calendar-weekdays > div {
        font-size: 16px;
        font-weight: bold;
    }
    .q-date__calendar-item {
        .block {
            font-size: 14px;
        }
        // & > button {
        //     border-radius: 0;
        // }
        // .q-date__event {
        //     width: 4px;
        //     height: 4px;
        //     bottom: 4px;
        // }
        // button div.q-btn__wrapper {
        //     line-height: 21px;
        //     padding: 0;
        //     padding-bottom: 2px;
        // }
        // button.q-btn--active, button.q-btn--unelevated {
        //     background-color: $orange !important;
        //     border: 2px solid $orange;
        //     color: $white !important;

        //     .q-date__event {
        //         bottom: 2px;
        //         background-color: $white !important;
        //     }
        // }
    }
}
</style>
