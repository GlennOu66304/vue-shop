<template>
  <div >
  
  </div>

  
</template>

<script>
export default {
  name: "home",
  data(){
    return{ 
      title:"全视眼镜"
    }

  },
  created(){
    this.$emit("onTitle",this.title)

  },
  computed: {
  
  },
};
</script>

<style scoped>

</style>