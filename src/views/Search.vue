<template>
  <div class="search"></div>
</template>

<script>
export default {
  name: "search",
    data(){
    return{ 
      title:"搜索"
    }

  },
  created(){
    this.$emit("onTitle",this.title)

  },
};
</script>

<style>
</style>