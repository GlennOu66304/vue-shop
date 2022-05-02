<template>
<div>

</div>

  
</template>

<script>
export default {
  name: "Cart",
    data(){
    return{ 
      title:"购物车"
    }

  },
  created(){
    this.$emit("onTitle",this.title)

  },
  computed: {
    address() {
      return this.$store.getters.address;
    },
    city() {
      return (
        this.$store.getters.location.addressComponent.city ||
        this.$store.getters.location.addressComponent.province
      );
    },
  },
};
</script>

<style scoped>

</style>