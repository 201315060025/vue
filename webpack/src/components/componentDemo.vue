<template>
<div>
<headerCom
:msg="msg"
:contentArr="contentArr" ></headerCom>
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
            contentArr: [{ id: 1, title: 'My journey with Vue' }, { id: 2, title: 'Blogging with Vue' }, { id: 3, title: 'Why Vue is so fun' }]
        }
    },
    
    components: {
        headerCom
    },
}
</script>

<style scoped>

</style>