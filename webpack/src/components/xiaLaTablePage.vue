<template>
<div>
    <el-table
        style="margin-top:1rem;"
        :header-cell-style="{color:'#fff',background:'#343a40'}"
        :data="tableData"
      >
        <el-table-column label="Names1" prop="name1"></el-table-column>
        <el-table-column label="Names2" prop="name2"></el-table-column>
        <el-table-column label="Profile Image1" prop="image1">
          <template slot-scope="scope">
            <picview :src="scope.row.image1"></picview>
          </template>
        </el-table-column>
        <el-table-column label="Profile Image2" prop="image2">
          <template slot-scope="scope">
            <picview :src="scope.row.image2"></picview>
          </template>
        </el-table-column>
        <el-table-column v-if="isAdmin" label="FaceConfidence" prop="confidence"></el-table-column>
        <el-table-column
          label="Review"
          :width="500"
          :filter-multiple="false"
          :filter-method="filterHandler"
          :filters="[{ text: 'Yes', value: '1' }, { text: 'No', value: '2' }, { text: 'Not Sure', value: '3' }, { text: 'Issue', value: '4' }]"
        >
          <template slot-scope="scope">
            <el-radio-group
              v-model="scope.row.status"
              size="medium"
              @change="handleGroupChange(scope.row,scope.$index)"
            >
              <el-radio-button :label="1">Yes</el-radio-button>
              <el-radio-button :label="2">No</el-radio-button>
              <el-radio-button :label="3">Not Sure</el-radio-button>
              <el-radio-button :label="4">Issue</el-radio-button>
            </el-radio-group>
          </template>
        </el-table-column>
      </el-table>
</div>
</template>

<script>
import picview from "./comments/Picview.vue";
export default {
    name: 'xaiLaPage',
    data(){
        return {
       tableData: [{ confidence: 0.7689987, status: 1, name1: "Crispin Blunt", image1: "http://localhost:1234/image\\cc16\PersonInfos\fake…ta\B\iid_ec5d0042-7d5b-4b1b-829d-772be590ebb1.jpg", name2: "Crispin Blunt", image2: "http://localhost:1234/image\\cc16\PersonInfos\fake_data\A\iid_0a71daee-b1b6-4f9a-b161-00d1e8b266dc.jpg" }
      , {confidence: 0.7689987, status: 2, name1: "Crispin Blunt", image1: "http://localhost:1234/image\\cc16\PersonInfos\fake…ta\C\iid_0fa4efc5-00a6-46ec-80fc-b09940ed6a38.jpg", name2: "Crispin Blunt", image2: "http://localhost:1234/image\\cc16\PersonInfos\fake_data\A\iid_0a71daee-b1b6-4f9a-b161-00d1e8b266dc.jpg"}
      , {confidence: 0.8575823, status: 0, name1: "Bob Blackman", image1: "http://localhost:1234/image\\cc16\PersonInfos\fake…ta\G\iid_a27bfbcb-51d0-4550-a05a-c79637bc4ee8.jpg", name2: "Bob Blackman",image2:""}
      , {confidence: 0.8575823, status: 0, name1: "Bob Blackman", image1: "http://localhost:1234/image\\cc16\PersonInfos\fake…ta\G\iid_a27bfbcb-51d0-4550-a05a-c79637bc4ee8.jpg", name2: "Bob Blackman",image2:""}
      , {confidence: 0.8575823, status: 0, name1: "Bob Blackman", image1: "http://localhost:1234/image\\cc16\PersonInfos\fake…ta\F\iid_1db1c2aa-081e-460c-a50f-9c85eecd66ec.jpg", name2: "Bob Blackman",image2:""}
      , {confidence: 0.8575823, status: 0, name1: "Bob Blackman", image1: "http://localhost:1234/image\\cc16\PersonInfos\fake…ta\F\iid_1db1c2aa-081e-460c-a50f-9c85eecd66ec.jpg", name2: "Bob Blackman",image2:""}],
            isAdmin: true,
        }
    },
    methods: {
      handleGroupChange(row, index) {
        console.log(this.pairLabelingData[4]);
        console.log(row);
        var tmpItem = this.tableData[index];
        tmpItem.status = row.status;
        this.$set(this.tableData, index, tmpItem);
        if (this.pairLabelingData[index].Status == 0) {
          this.completeNumber += 1;
        }
        this.pairLabelingData[index].Status = row.status;
      },
      filterHandler(value, row, column) {
        console.log(row["status"], column);
        return row["status"] == value;
    },
    },

    components: {
          picview
      },

}
</script>

<style>
#main {
  width: 98%;
  margin-left: 1%;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  margin-top: 30px;
}

.info-bar {
  background-color: #d4edda;
  height: 50px;
}

.el-card__header {
  background-color: rgba(0, 0, 0, 0.03);
}



.remove-btn {
  color: red;
  cursor: pointer;
  margin-left: 8px;
}

.url-content {
  word-break: break-all;
  white-space: normal;
}

span {
  word-break: break-all;
  white-space: normal;
}

.upload-button {
  width: 40%;
}

.profile-divider {
  width: 87%;
  margin: 20px 5%;
  background-color: #dcdfe6;
  height: 1px;
}

.image-list {
  padding: 0;
}
.image-list li {
  display: inline-block;
  margin: 20px 20px;
  list-style: none;
}
.image-list li img {
  width: 100%;
  height: 100%;
}
a {
  color: #42b983;
}
</style>