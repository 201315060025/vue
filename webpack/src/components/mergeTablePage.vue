
<template>
  <div>
    <!-- <el-table
      :data="tableData"
      :span-method="arraySpanMethod"
      border
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="amount1"
        sortable
        label="数值 1">
      </el-table-column>
      <el-table-column
        prop="amount2"
        sortable
        label="数值 2">
      </el-table-column>
      <el-table-column
        prop="amount3"
        sortable
        label="数值 3">
      </el-table-column>
    </el-table> -->

    <el-table
      :data="tableData"
      :span-method="objectSpanMethod"
      border
      style="width: 100%; margin-top: 20px">
      <el-table-column
        prop="id"
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="amount1"
        label="数值 1（元）">
      </el-table-column>
      <el-table-column
        prop="amount2"
        label="数值 2（元）">
      </el-table-column>
      <el-table-column
        prop="amount3"
        label="数值 3（元）">
      </el-table-column>
    </el-table>
    <br/>
    <br/>
    <br/>
    <br/>
    <h2 style="font-weight:500;margin-bottom:7px;margin-top: 30px">Group Labeling</h2>
          <el-row v-if="groupList.length==0">
            <span style="margin-bottom:20px;">No Group Labeling Data</span>
          </el-row>
          <el-row v-for="(collectionStatisticsDataItem,index) in groupList" :key="index" style="padding-left:15px">
            <h3 style="font-weight:500">{{collectionStatisticsDataItem.collectionId}}</h3>
            <el-button
              v-if="isAdmin==true"
              @click.native="genGroupResults(collectionStatisticsDataItem.collectionId)"
            >Generate Group Result</el-button>
            <el-table
              :data="collectionStatisticsDataItem.batchList"
              :span-method="objectSpanMethod2"
              @cell-click="openTask(arguments,'GroupLabeling',collectionStatisticsDataItem.collectionId)"
            >
              <el-table-column label="taskId" prop="taskId"></el-table-column>
              <el-table-column label="batchId">
                <template slot-scope="scope">
                  <el-link>{{scope.row.batchId}}</el-link>
                </template>
              </el-table-column>
              <el-table-column label="batchStatistics">
                <template slot-scope="scope">
                  <span>{{scope.row.completeNumber}}&nbsp;/&nbsp;{{scope.row.batchSize}}</span>
                </template>
              </el-table-column>
            </el-table>
          </el-row>
  </div>
</template>

<script>
  export default {
    created(){
      console.log("this.admin in mergeTable Page", this.admin);
    },
    data() {
      return {
        tableData: [{
          id: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987124',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '12987125',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }],
        groupList: [{"collectionId":"cc12","batchList":[{"batchId":"batch_0","taskId":"fake_data","batchSize":3,"completeNumber":3,"idx":0,"mergeSep":2},{"batchId":"batch_1","taskId":"fake_data","batchSize":4,"completeNumber":0,"idx":1,"mergeSep":2}]},{"collectionId":"cc14","batchList":[{"batchId":"batch_0","taskId":"fake_data","batchSize":3,"completeNumber":0,"idx":0,"mergeSep":2},{"batchId":"batch_1","taskId":"fake_data","batchSize":4,"completeNumber":0,"idx":1,"mergeSep":2}]},{"collectionId":"cc8","batchList":[{"batchId":"batch_0","taskId":"fake_data","batchSize":3,"completeNumber":0,"idx":0,"mergeSep":2},{"batchId":"batch_1","taskId":"fake_data","batchSize":4,"completeNumber":0,"idx":1,"mergeSep":2}]}]
      };
    },
    methods: {
      arraySpanMethod({ row, column, rowIndex, columnIndex }) {
        if (rowIndex % 2 === 0) {
          if (columnIndex === 0) {
            return [1, 2];
          } else if (columnIndex === 1) {
            return [0, 0];
          }
        }
      },

      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        console.log("rowIndex, columnIndex==", rowIndex, columnIndex);
        if (columnIndex === 0) {
          if (rowIndex % 2 === 0) {
            return {
              rowspan: 2,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      },
      objectSpanMethod2({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (row.idx === 0) {
          console.log(column, rowIndex);
          return {
            rowspan: row.mergeSep,
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
    }
    }
  };
</script>