<template>
  <div class="home-view">
    <!-- banner -->
    <!-- 1.banner componetn use 2. data v-for 3.render the content-->
    <van-swipe :autoplay="3000" indicator-color="white" class="banner-view">
      <van-swipe-item v-for="item in bannerList" :key="item.id">
        <!-- <img :src="item.img" alt="" /> -->
        <img v-lazy="item.img" alt="" />
      </van-swipe-item>
    </van-swipe>
    <!-- category -->
    <van-row gutter="2" type="flex" justify="center" class="category-view">
      <van-col span="4" class="category-item" style="padding-left:25px">
        <!-- circle -->
        <div class="circle" style="background-color: #db72ab;"></div>
        <!-- text -->
        <span class="text">框架</span>
      </van-col>

      <van-col span="4" class="category-item">
        <!-- circle -->
        <div class="circle" style="background-color: #f55a63;"></div>
        <!-- text -->
        <span class="text">框架</span>
      </van-col>
      <van-col span="4" class="category-item">
        <!-- circle -->
        <div class="circle" style="background-color: #ab7ce3;"></div>
        <!-- text -->
        <span class="text">框架</span>
      </van-col>
      <van-col span="4" class="category-item">
        <!-- circle -->
        <div class="circle" style="background-color: #94db87;"></div>
        <!-- text -->
        <span class="text">框架</span>
      </van-col>
      <van-col span="4" class="category-item">
        <!-- circle -->
        <div class="circle" style="background-color: #838de6;"></div>
        <!-- text -->
        <span class="text">框架</span>
      </van-col>
    </van-row>
    <!-- hot recommendation -->
    <!-- selections -->
    <!-- personal recommendation -->
  </div>
</template>

<script>
import { Swipe, SwipeItem, Row, Col } from "vant";
export default {
  name: "home",

  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Row.name]: Row,
    [Col.name]: Col,
  },

  data() {
    return {
      title: "全视眼镜",
      bannerList: [],
    };
  },

  computed: {},

  created() {
    this.$emit("onTitle", this.title);
    this.loadBanner();
  },

  methods: {
    async loadBanner() {
      const res = await this.$axios.get("/api/banner.json");

      this.bannerList = res.data;
      // console.log(this.bannerList);
    },
  },
};
</script>

<style scoped>
.home-view {
  padding-top: 45px;
}
.home-view > .banner-view img {
  width: 100%;
}
.category-view {
  background-color: white;
  overflow: hidden;
}
.category-item {
  margin-right: 20px;
}
.circle {
  width: 40px;
  height: 40px;
  border-radius: 60%;
  margin-top: 7px;
}
.text {
  margin-top: 7px;
  padding-left:5px;
  margin-bottom: 7px;
  font-size: 13px;
}
</style>