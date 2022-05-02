<template>
  <div class="index">
    <!-- rotuter content:home, order, Me -->
    <router-view> </router-view>
    <!-- icon content as the bottom section -->
    <TabBar :data="tabbarData" />
  </div>
</template>

<script>
import TabBar from "../components/TabBar.vue";
export default {
  name: "index",
  data() {
    return {

      tabbarData: [
        { title: "首页", icon: "home", path: "./home" },
        { title: "分类", icon: "file-text-o", path: "./category" },
        { title: "搜索", icon: "user", path: "./search" },
        { title: "购物车", icon: "user", path: "./cart" },
        { title: "我的", icon: "user", path: "./me" },
      ],
    };
  },
  components: {
    TabBar,
  },
};
</script>

<style scoped>
.index {
  width: 100%;
  height: calc(100%- 45px);
}
</style>
