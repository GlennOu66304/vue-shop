<template>
  <div class="me">
        <van-nav-bar title="我的" />
  </div>
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