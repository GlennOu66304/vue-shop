<template>
<div>
  <van-nav-bar title="购物车" />
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

  created(){
    this.$emit("onTitle",this.title)

  }
};
</script>

<style scoped>
.van-nav-bar {
  height: 2.8125rem;
  background: red;
  color: white;
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 2.8125rem;
  text-align: center;
}
.van-nav-bar__title {
  color: white;
}
.van-nav-bar .van-icon {
  color: white;
}
.van-nav-bar__text {
  color: white;
}
</style>