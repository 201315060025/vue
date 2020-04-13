<template>
<div>
    <headerCom
        :msg="msg"
        :contentArr="contentArr"
        :inputValue='inputValue' 
        @changeParentName="changeName">
    </headerCom>

    <!-- <el-divider content-position="right">top is child </el-divider> -->
    <!-- <el-divider content-position="right">阿里云</el-divider> -->
    <el-card>
        <sapn>12</sapn>
          <el-divider></el-divider>
        <sapn>34</sapn>
    </el-card>
    
    from parent component to child：<input v-model="inputValue"/>
    <br/><br/><br/>
    from child component to parent: <label >{{ this.name }}</label>
</div>
</template>
<script>

import headerCom from './comments/HeaderCom'
export default {
    created(){
        console.log("parent components field values..");
        console.log("taskId=", this.taskId);
    },
    
    data() {
        return { 
            msg: "hello world", 
            showFlag:false,
            contentArr: [{ id: 1, title: 'My journey with Vue' }, { id: 2, title: 'Blogging with Vue' }, { id: 3, title: 'Why Vue is so fun' }],
            inputValue: "",
            name: ""
        }
    },
    
    components: {
        headerCom
    },
    methods:{
        changeName: function(name) {  
            this.name = name // name形参是子组件中传入的值
        },
    }
}
</script>

<style scoped>

</style>