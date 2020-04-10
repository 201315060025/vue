<template>
<div>
  <el-row><el-button type="primary" @click="openIndexPage">主要按钮</el-button></el-row>
  <el-container>
    <el-header>Header</el-header>
    <el-main>Main</el-main>
  </el-container>
  <br/><br/>
  <el-divider></el-divider>

  <el-container>
    <el-header>Header</el-header>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container>
  <br/><br/>
  <el-divider></el-divider>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-main>Main</el-main>
  </el-container>
  <br/><br/>
  <el-divider></el-divider>

  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
  <br/><br/>
  <el-divider></el-divider>
  
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
  <br/><br/>
  <el-divider></el-divider>
  
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
  <br/><br/>
  <el-divider></el-divider>
  
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
  <br/><br/>
  <el-divider></el-divider>
  
</div>
  
</template>
<script>
  import Vue from 'vue';
  export default {
    name: 'redirectPage',
    data(){
        return {
          msg: 'Welcome to Your Vue.js App'
        }

    },
    created(){
      console.log("join redirect..");
    },
    methods: {
      openIndexPage(){
        console.log("start output..");
        this.$router.push('/');
      }
    }
  }

</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>