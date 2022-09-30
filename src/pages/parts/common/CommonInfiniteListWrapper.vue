<!-- 공통적으로 사용하는 인피니티 리스트 랩퍼 -->
<i18n>
{
    "ko": {
        "template": {
            "label1": "더보기 ",
            "label2": "목록을 불러오는데 실패했습니다.",
            "label3": "목록을 다시불러오려면 <strong>클릭</strong>해주세요"
        },
        "props": {
          "emptyText": "리스트가 비어있습니다."
        }
    },
    "en": {
        "template": {
            "label1": "More",
            "label2": "Failed to load list.",
            "label3": "Please <strong>click</strong> to reload the list"
        },
        "props": {
          "emptyText": "The list is empty."
        }
    }
}
</i18n>

<template>
    <div class="common-infinite-list-wrapper">
        <slot name="before" :items="items" :itemsTotal="itemsTotal" :data="data"></slot>
        <VirtualScrollList
            :item-key="listItemKey"
            :items="items"
            :root-margin="500"
            :item-min-height="itemMinHeight"
        >
            <template v-slot="{ idx, item, isVisible }">
                <slot :index="idx" :item="item" :items="items" :itemsTotal="itemsTotal" :data="data" :isVisible="isVisible"></slot>
            </template>
        </VirtualScrollList>
        <q-no-ssr>
            <div v-if="showMoreButton && (items.length < itemsTotal) && (items.length >= 100)">
                <div class="f-16-b-gt cursor-pointer row col-12 align-center justify-center" @click="addNextItems" :style="{ margin: '16px 0' }">
                    {{ $t('template.label1') }}<m-icon name="chevron_down" :color="$style.greyTabby" stroke-opacity="0" />
                </div>
            </div>
            <infinite-loading direction="bottom" v-else-if="itemsTotal > items.length" @infinite="addNextItems">
                <template v-slot:spinner><span></span></template>
            </infinite-loading>
        </q-no-ssr>
        <div v-if="items.length === 0 && itemsTotal !== null">
            <slot name="empty" v-if="$scopedSlots.empty" />
            <div class="text-center f-14-500-lg" v-else>
                <div :style="{ margin: '32px auto' }">{{emptyText}}</div>
            </div>
        </div>
        <div class="text-center" v-else-if="itemsTotal === null && catchedError">
            <div class="cursor-pointer" @click="refresh" :style="{ margin: '32px auto' }">
                <div class="f-16-500-gt">{{ $t('template.label2') }}</div>
                <div class="f-16-500-gt" v-html="$t('template.label3')"></div>
            </div>
        </div>
        <ul class="pagination" v-if="IS_SSR">
            <!-- SSR 전용 페이지네이션 -->
            <li class="page-item" :key="`SSR-Infinity-list-${idx}`" v-for="(val, idx) in pageOffsetList">
                <router-link v-if="itemsTotal > items.length" :to="{ query: { ...$route.query, pOffset: val } }">{{val}}</router-link>
            </li>
        </ul>
        <slot name="after" :items="items" :itemsTotal="itemsTotal" :data="data"></slot>
    </div>
</template>

<script>
import _ from 'lodash';
import VirtualScrollList from 'pages/parts/common/VirtualScrollList';

export default {
    name: 'CommonInfiniteListWrapper',
    components: {
        VirtualScrollList
    },
    props: {
        listRequest: {
            /** @type {ListRequest} 리스트 요청 API 함수 */
            type: Function,
            required: true
        },
        listRequestBody: {
            /** 호출하고자 하는 api */
            type: Object,
            default() {
                return {};
            }
        },
        perSize: {
            /** 한리스트당 사이즈 */
            type: Number,
            default() {
                return 20;
            }
        },
        responseListName: {
            type: String,
            required: true
        },
        listItemKey: {
            type: [String, Number]
        },
        emptyText: {
            type: String,
            default() {
                return this.$t('props.emptyText');
            }
        },
        showMoreButton: {
            type: Boolean,
            default() {
                return false;
            }
        },
        itemMinHeight: {
            type: Number,
            default() {
                return 75;
            }
        }
    },
    data() {
        let pOffset = 0;
        pOffset = parseInt(this.$route.query.pOffset) || 0;
        return {
            pOffset,
            items: [],
            itemsTotal: null,
            data: {},
            catchedError: false
        };
    },
    computed: {
        pageOffsetList() {
            try {
                const arr = _.range(0, this.itemsTotal, this.perSize);
                if (arr.length > 30) {
                    const currPageIndex = Math.ceil(this.pOffset / this.perSize);
                    return arr.slice(Math.max(0, currPageIndex - 15), Math.min(arr.length - 1, currPageIndex + 15));
                } else return arr;
            } catch (err) {}
            return [];
        }
    },
    watch: {
        listRequestBody(newVal, oldVal) {
            if (!_.isEqual(newVal, oldVal)) {
                this.initialize();
            }
        }
    },
    created() {
    },
    async mounted() {
        this.getItems();
    },
    methods: {
        async addNextItems($state) {
            if (this.itemsTotal > this.items.length) {
                try {
                    await this.getItems();
                    if ($state && $state.loaded) $state.loaded();
                } catch (err) {
                    console.error('CommonInfiniteListWrapper addNextItems', err);
                }
            } else {
                if ($state && $state.complete) $state.complete();
            }
        },
        async getItems(isRefresh) {
            const size = this.perSize;
            try {
                let body = {
                    paging: isRefresh ? {
                        offset: 0,
                        size: this.items.length
                    } : {
                        offset: process.env.IS_SSR && this.pOffset ? this.pOffset : this.items.length,
                        size
                    },
                    order_by: {
                        column: 0,
                        sort: 1
                    }
                };
                body = _.merge(body, this.listRequestBody);
                const { header, total_cnt, ...rest } = await this.listRequest(body);
                const items = rest[this.responseListName];
                if (this.responseListName === 'agenda') items.map((val) => { if (!val.target.div_code || val.target.div_code === 0) val.target.div_code = 1; });
                delete rest[this.responseListName];
                if (isRefresh) {
                    this.items = Object.freeze(items);
                } else {
                    if (items instanceof Array && items[0] && items[0][this.listItemKey]) {
                        this.items = Object.freeze(_.uniqWith(_.concat(this.items, items), (p, n) => p[this.listItemKey] === n[this.listItemKey]));
                    } else {
                        this.items = Object.freeze(items.concat(this.items));
                    }
                }
                this.itemsTotal = total_cnt;
                this.data = { ...rest };
                this.catchedError = false;
            } catch (err) {
                this.catchedError = true;
                console.error('getItems', err);
            }
        },
        async refresh() {
            await this.getItems(true);
        },
        async initialize() {
            this.items = [];
            this.itemsTotal = null;
            this.data = {};
            await this.getItems();
        },
        deleteItem(item) {
            const newItems = _.cloneDeep(this.items);
            _.remove(newItems, { [this.listItemKey]: item[this.listItemKey] });
            this.items = Object.freeze(newItems);
            this.itemsTotal -= 1;
        },
        updateItem(item) {
            const newItems = _.cloneDeep(this.items);
            const index = _.findIndex(this.items, { [this.listItemKey]: item[this.listItemKey] });
            newItems.splice(index, 1, item);
            this.items = Object.freeze(newItems);
        }
    },
    async serverPrefetch() {
        try {
            await this.getItems();
        } catch (err) {
            console.error('CommonInfiniteListWrapper serverPrefetch Error', err);
        }
    }
};
</script>

<style lang="scss" scoped>
.common-infinite-list-wrapper {
}
</style>
