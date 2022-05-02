<template>
  <div class="me"></div>
</template>

<script>
export default {
  name: "me",
    data(){
    return{ 
      title:"我的"
    }

  },
  created(){
    this.$emit("onTitle",this.title)

  },
};
</script>

<style>
</style>