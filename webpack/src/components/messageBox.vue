<template>
<div>
  <el-button type="text" @click="open">点击打开 Message Box</el-button>
  <br/><br/>
  <el-button plain @click="open1"> 可自动关闭 </el-button><br/>
  <el-button  plain  @click="open2"> 不会自动关闭 </el-button>
 </div>
</template>

<script>
  import axios from 'axios';
  export default {

      name:'test', 
      async created(){
          console.log('start exe');

          await this.getFilmList();
          await this.handleClick()
          console.log('exe end..');
      },
      data(){
          return {
              filmList: null    
          }
      },
      methods: {
        open() {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(() => {
            this.$message({
                type: 'success',
                message: '删除成功!'
            });
            }).catch(() => {
            this.$message({
                type: 'info',
                message: '已取消删除'
            });          
            });
        },
        open1() {
            const h = this.$createElement;

            this.$notify({
            title: '标题名称',
            message: h('i', { style: 'color: teal'}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
            });
        },

        open2() {
            this.$notify({
            title: '提示',
            message: '这是一条不会自动关闭的消息',
            duration: 0
            });
        },

        async getFilmList() {
            const url = "/film/getList";
            // 要访问第二页的话在网址后面加 ?type=2&pageNum=页数
            console.log('in function');
            await this.$http.get(url);
            console.log('in function start set value');
            this.filmList = "ab";
            console.log("this.filmList==", this.filmList)
        },

        async handleClick (){
          console.log('in function');
          let res = await this.getHistoryData();
          console.log('in function start set value');
          this.filmList = "ab";
          console.log("console.result=",res)
        },


        getHistoryData () {
          return new Promise((resolve, reject) => {
            axios.get('/film/getList').then((res) => {
              resolve(res)
            }).catch((err) => {
              reject(err)
            })
          })
        }

      }
  }
</script>
