<template>
  <div class="home-view">
    <!-- banner -->
    <!-- 1.banner componetn use 2. data v-for 3.render the content-->
    <van-swipe :autoplay="3000" indicator-color="white" class="banner-view">
      <van-swipe-item v-for="item in bannerList" :key="item.id" >
        <!-- <img :src="item.img" alt="" /> -->
         <img v-lazy="item.img" alt="" />
      </van-swipe-item>
    </van-swipe>
    <!-- hot recommendation -->
    <!-- selections -->
    <!-- personal recommendation -->
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "vant";
export default {
  name: "home",

  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
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
</style>