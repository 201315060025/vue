<template>
  <div>
    <el-header style="line-height: 54px">
      <el-col :span="22" @click.native="returnMainPage" style="cursor:pointer;height:60px">
        <img
          src="../../assets/logo.png"
          width="30"
          height="30"
          alt
          style="margin-right:8px;margin-top;vertical-align: middle;"
        />
        <span style="vertical-align: middle;">{{labelType}} Labeling</span>
        <span v-if="this.showFlag === true"  style="color: #dc3545;vertical-align: middle;">({{completeNumber}}/{{batchSize}})</span>
      </el-col>
      <el-col :span="2" style="text-align:right;height:60px">
        <el-button v-if="this.showFlag === true" type="primary" @click.native="saveData">Save</el-button>
        <label>{{this.inputValue}}</label>
      </el-col>
      
    </el-header>
    <el-row>
      <el-row v-for="content of contentArr" v-bind:key="content.id" v-bind:title="content.title">
          <span><b>{{content.id}}</b>  {{content.title}}</span><br/>
      </el-row>
    </el-row>
    <el-rol>
      <p><button @click="changeParentName">改变父级的name</button></p>
    </el-rol>
  </div>
</template>

<script>
import axios from "axios";

export default {
  created() {},
  data() {
    return {
      taskId: "testTaskID",
      batchId: 0,
      collectionId: ""

    };
  },
  props: ["labelType", "batchSize", "completeNumber", "dataForSaving", "showFlag", "contentArr", "inputValue"],
  methods: {
    saveData() {
      console.log(this.labelType);
      var url = `/api/set${this.labelType}Realtionships?taskId=${this.$route.query.taskId}&batchId=${this.$route.query.batchId}&collectionId=${this.$route.query.collectionId}`;
      axios
        .post(url, { data: JSON.stringify(this.dataForSaving) })
        .then(response => {
          console.log(response);
          this.$message({
            message: "Save Successfully!",
            type: "success"
          });
        });
    },
    returnMainPage() {
      this.$router.push("/");
    },
    changeParentName() {
            this.$emit('changeParentName', this.inputValue) // 触发一个自定义事件并传参xiaohong
    }
  }
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #f8f9fa;
  text-align: left;
  line-height: 60px;
  font-size: 1.5em;
}
</style>