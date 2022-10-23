<template>
    <div class="centerarea_box1">
        <div class="con_box">
          <h2 class="line_type">
            테마 카테고리
          </h2>
          <div class="box_contents">  
            <div class="radio_wrap right">
                <m-radio v-model="rad1" val="B" label="상승률순"/>
                <m-radio v-model="rad1" val="C" label="하락률순"/>
            </div>
            <q-table
                  :data="tbRowData"
                  :columns="tbColInfo"
                  row-key="category"
                  no-data-label="데이터가 존재하지 않습니다."
                  hide-bottom 
                  :visible-columns="table1"
                  :rows-per-page-options="[0]" 
                  :pagination.sync="table1page"                  
                >               
                    <template v-slot:body="props">
                    <q-tr :props="props">
                      <q-td key="category" :props="props">
                        <span class="flex">
                          <span class="badge1 mgr8" :class="props.row.category"></span>
                          <span>{{ props.row.itemName }}</span>
                        </span>
                      </q-td>
                      <q-td key="range" :props="props">
                        <span :class="{'tag_red':props.row.fluctuations == 'U', 'tag_blue':props.row.fluctuations == 'D'}">
                          {{props.row.range}}
                        </span>
                      </q-td>
                      <q-td key="itemCnt" :props="props">
                        <span class="txt_gray">{{props.row.itemCnt}}</span>
                      </q-td>
                    </q-tr>
                  </template>
                </q-table>            
            <div class="btn_wrap">
              <m-button-3 class="font18 full" color="textPrimary">더보기</m-button-3>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

const tbColInfo = [
  { name: 'category', 	align: 'left', label: '카테고리', 	field: 'category',style: 'width: 65%', },
  { name: 'itemName', 	align: 'left', label: '카테고리명', 	field: 'itemName' },
  { name: 'fluctuations', 	align: 'center', label: '등락률', 	field: 'fluctuations' },
  { name: 'range', 	align: 'center', label: '등락률', 	field: 'range'},
  { name: 'itemCnt', 	align: 'center', label: '종목수', 	field: 'itemCnt' }
];

const tbRowData = [
  { category: 'build', 			itemName:'건설', 		fluctuations:'U', range: '+7.64%', itemCnt: '215'},
  { category: 'semiconductor', 	itemName:'반도체', 		fluctuations:'U', range: '+7.64%', itemCnt: '215'},
  { category: 'display', 		itemName:'디스플레이', 	fluctuations:'U', range: '+7.64%', itemCnt: '215'},
  { category: 'politics', 		itemName:'정치', 		fluctuations:'U', range: '+7.64%', itemCnt: '215'},
  { category: 'energy', 		itemName:'에너지', 		fluctuations:'U', range: '+7.64%', itemCnt: '215'},
  { category: 'it', 			itemName:'IT', 		fluctuations:'U', range: '+7.64%', itemCnt: '215'},
  { category: 'cosmetics', 		itemName:'화장품', 		fluctuations:'U', range: '+7.64%', itemCnt: '215'},
  { category: 'car', 			itemName:'자동차', 		fluctuations:'U', range: '+7.64%', itemCnt: '215'},
  { category: 'bio', 			itemName:'바이오', 		fluctuations:'U', range: '+7.64%', itemCnt: '215'},
  { category: 'blockchain', 	itemName:'블록체인', 	fluctuations:'D', range: '-0.15%', itemCnt: '215'}
];
export default {
  data() {
        return {
          rad1:ref('A'),
          table1page: {
            page: 1,
            rowsPerPage: 10
          },          
          tbColInfo,
          tbRowData,          
          table1: ref(['category', 'range', 'itemCnt'])
        }
    },
    methods: {
    }
};
</script>
<style scoped>

</style>

