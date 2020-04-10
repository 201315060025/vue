<template>
    <div>
        <blog-post v-for="content of contentArr" v-bind:key="content">

        </blog-post>
    </div>
    
</template>
<script>
export default {
    props: ["contentArr"]
}
</script>
<style scoped>

</style>