<template>
  <div>

    <q-table 
      :data="tblOption.tbRowData" 
      :columns="tblOption.tbColInfo" 
      :row-key="tblOption.fieldKey" 
      no-data-label="데이터가 존재하지 않습니다." 
      hide-bottom
      :visible-columns="tblOption.field"
      :rows-per-page-options="[0]" 
      :pagination.sync="tblOption.page"
      >

      <template v-slot:header="props" v-if="tblType == 1 ||  tblType == 2 || tblType == 4">
        <q-tr :props="porps">
          <q-th key="fld01" :props="props" v-if="tblType == 1">종료일자</q-th>
          <q-th key="fld04" :props="props">자산</q-th>
          <q-th key="fld03" :props="props" v-if="tblType == 2 || tblType == 4">기간</q-th>
          <q-th key="fld06" :props="props" v-if="tblType == 2 || tblType == 4">목표</q-th>
          
          <q-th key="fld05" :props="props" v-if="tblType == 1 || tblType == 2">예측</q-th>
          <q-th key="fld10" :props="props" v-if="tblType == 1">예측결과</q-th>

          <q-th key="fld09" :props="props" v-if="tblType == 2">달성률</q-th>


          <q-th key="fld08" :props="props" v-if="tblType == 4">비중</q-th>
          <q-th key="fld12" :props="props" v-if="tblType == 4">현재</q-th>
        </q-tr>
      </template>
      <template v-slot:body="props">
        <q-tr :props="props"  v-if="tblType == 1 || tblType == 3">
          <q-td key="fld01" :props="props" v-if="tblType == 1">
            {{ props.row.fld01 }}
          </q-td>
          <q-td key="fld02" :props="props" v-if="tblType == 3">
            {{ props.row.fld02 }}
          </q-td>

          <q-td key="fld04" :props="props">
            {{ props.row.fld04 }}
          </q-td>

          <q-td key="fld05" :props="props" v-if="tblType == 1">
            <span v-if="props.row.fld05 == 'U'" class="ico_up">상승</span>
            <span v-else class="ico_down">하락</span>
          </q-td>
          
          <q-td key="fld06" :props="props" v-if="tblType == 3">
            {{props.row.fld06}}%
          </q-td>
          


          <q-td key="fld10" :props="props">
            <span v-if="props.row.fld10 == 'S'" class="txt_blue1">성공</span>
            <span v-else-if="props.row.fld10 == 'F'" class="txt_red">실패</span>
            <span v-else-if="props.row.fld10 == 'N'" class="txt_brown">무효</span>
            <span v-else class="txt_gray">취소</span>
          </q-td>
        </q-tr>

        <q-tr :props="props"  v-if="tblType == 2 || tblType == 4">
          <q-td key="fld04" :props="props">
            {{ props.row.fld04 }}
          </q-td>
          <q-td key="fld03" :props="props">
            <span class="badge3" v-if="props.row.fld03 == '단기'" style="background:#c1b7ff">{{ props.row.fld03 }}</span>
            <span class="badge3" v-else-if="props.row.fld03 == '중기'" style="background:#8673ff">{{ props.row.fld03 }}</span>
            <span class="badge3" v-else style="background:#4c34dc">{{ props.row.fld03 }}</span>
          </q-td>
          <q-td key="fld06" :props="props">
            <span v-if="props.row.fld05 == 'U'" class="ico_up">{{ props.row.fld06 }}%</span>
            <span v-else class="ico_down">{{ props.row.fld06 }}%</span>
          </q-td>
          
          <q-td key="fld05" :props="props" v-if="tblType == 2">
            <span v-if="props.row.fld05 == 'U'" class="ico_up">상승</span>
            <span v-else class="ico_down">하락</span>
          </q-td>
          
          <q-td key="fld09" :props="props" v-if="tblType == 2">
            {{ props.row.fld09 }}%
          </q-td>

          <q-td key="fld08" :props="props" v-if="tblType == 4">
            {{ props.row.fld08 }}%
          </q-td>
          <q-td key="fld12" :props="props" v-if="tblType == 4">
            <span v-if="props.row.fld11 == 'R'" class="txt_red">{{ props.row.fld12 }}%</span>
            <span v-else class="txt_blue1">{{ props.row.fld12 }}%</span>
          </q-td>
        </q-tr>
      </template>
      </q-table>
      <div class="pagination_wrap">
      <q-pagination
        v-model="current"
        :max="5"
        direction-links
        boundary-links
        class="custom_type1"
      />
      </div>
  </div>
</template>



<script>
const tbColInfo = [
  { name: 'fld01', align: 'center', label: '일자', field: 'fld01' },
  { name: 'fld02', align: 'center', label: '매도일자', field: 'fld02' },
  { name: 'fld03', align: 'center', label: '기간', field: 'fld03' },
  { name: 'fld04', align: 'center', label: '자산', field: 'fld04' },
  { name: 'fld05', align: 'center', label: '상승/하락', field: 'fld05' },
  { name: 'fld06', align: 'center', label: '목표수익률', field: 'fld06' },
  { name: 'fld07', align: 'center', label: '현재수익률', field: 'fld07' },
  { name: 'fld08', align: 'center', label: '비중', field: 'fld08' },
  { name: 'fld09', align: 'center', label: '달성률', field: 'fld09' },
  { name: 'fld10', align: 'center', label: '예측결과', field: 'fld10' },
  { name: 'fld11', align: 'center', label: '상승/하락', field: 'fld11' },
  { name: 'fld12', align: 'center', label: '현재', field: 'fld12' }
];
const tbRowData = [
  { fld01: '22.09.14', fld02: '22.09.14', fld03: '단기', fld04: '삼성전자', fld05: 'U', fld06: '5', fld07: '3', fld08: '15', fld09: '3', fld10: 'S',fld11: 'R',fld12: '-24.24' },
  { fld01: '22.09.14', fld02: '22.09.14', fld03: '중기', fld04: 'SK하이닉스', fld05: 'D', fld06: '10', fld07: '-0.12', fld08: '5', fld09: '5', fld10: 'S',fld11: 'B',fld12: '+4.24' },
  { fld01: '22.09.14', fld02: '22.09.14', fld03: '중기', fld04: '네이버', fld05: 'U', fld06: '15', fld07: '1.25', fld08: '10', fld09: '9', fld10: 'S',fld11: 'R',fld12: '-24.24' },
  { fld01: '22.09.14', fld02: '22.09.14', fld03: '중기', fld04: '현대차', fld05: 'U', fld06: '5', fld07: '0', fld08: '5', fld09: '13', fld10: 'F',fld11: 'R',fld12: '-24.24' },
  { fld01: '22.09.14', fld02: '22.09.14', fld03: '장기', fld04: '신풍제약', fld05: 'D', fld06: '10', fld07: '-1.28', fld08: '5', fld09: '16', fld10: 'N',fld11: 'B' ,fld12: '+4.24'},
  { fld01: '22.09.14', fld02: '22.09.14', fld03: '단기', fld04: '안랩', fld05: 'U', fld06: '5', fld07: '3', fld08: '15', fld09: '3', fld10: 'F',fld11: 'R' ,fld12: '-24.24'},
  { fld01: '22.09.14', fld02: '22.09.14', fld03: '중기', fld04: '카카오', fld05: 'U', fld06: '10', fld07: '-0.12', fld08: '5', fld09: '5', fld10: 'F',fld11: 'B',fld12: '+4.24' },
  { fld01: '22.09.14', fld02: '22.09.14', fld03: '중기', fld04: 'KT&G', fld05: 'D', fld06: '15', fld07: '0.72', fld08: '10', fld09: '9', fld10: 'S',fld11: 'B',fld12: '+4.24' },
  { fld01: '22.09.14', fld02: '22.09.14', fld03: '중기', fld04: '셀트리온', fld05: 'U', fld06: '5', fld07: '-1.28', fld08: '5', fld09: '13', fld10: 'F',fld11: 'R' ,fld12: '-24.24'},
  { fld01: '22.09.14', fld02: '22.09.14', fld03: '장기', fld04: '미래에셋증권', fld05: 'U', fld06: '10', fld07: '2', fld08: '5', fld09: '16', fld10: 'F',fld11: 'R' ,fld12: '-24.24'}
];

export default {
  components: { },
  name: 'DefaultTable',
  props: {
    tblType: {
      type: Number,
      default:1
    },
    showPage: {
      type:Boolean
    }
  },
  data() {
    return {
    };
  },
  computed: {
    tblOption() {
      let field = ['fld01', 'fld04', 'fld05', 'fld10'];
      let fieldKey = 'fld04';

      if (this.tblType == 1 ) {
        field = ['fld01', 'fld04', 'fld05', 'fld10'];
        fieldKey = 'fld01';
      } else if (this.tblType == 2 ) {
        field = ['fld04', 'fld03', 'fld06', 'fld05', 'fld09'];        
        fieldKey = 'fld02';
      } else if (this.tblType == 3 ) {
        field = ['fld02', 'fld04', 'fld06', 'fld10'];
        fieldKey = 'fld04';
      } else if (this.tblType == 4 ) {
        field = ['fld04', 'fld03', 'fld06', 'fld08', 'fld12'];
        fieldKey = 'fld04';
      }

      console.log(field);
      return {
        field:field,
        fieldKey:fieldKey,
        page: {
            page: 1,
            rowsPerPage: 10
        },
        tbColInfo: tbColInfo,
        tbRowData: tbRowData
      }
    }
  },
  beforeCreate() {
  },
  async created() {
  },
  mounted() {

  },
  methods: {
  }
};
</script>