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
    <!-- title compoentn:1.use the title compoent 2.send the props to the compoentn -->
    <!-- hot recommendation selling-view-->
    <div class="hot-recommendation">
      <Title title="单品推荐" icon="star" />

      <div class="single_recommend" v-for="item in singleList" :key="item.id">
        <GoodsItem :item="item" />
      </div>
    </div>

    <div class="select-recommendation">
      <!-- selections window-view-->
      <Title title="精选活动" icon="gift" />
      <!-- window1: bg image, v-for box list -->
      <div class="window" >
        <img :src="windows.bigImg1" alt="" />
        <div  class="hidden-view" >
          <div
            v-for="(item, index) in window1"
            :key="index"
          class="winddowsItem-wrapper"
          >
            <WindowsItem :item="item" />
          </div>
        </div>
      </div>
      <!-- window2 -->
      <div class="window" >
        <img :src="windows.bigImg2" alt="" />
        <div class="hidden-view">
          <div class="winddowsItem-wrapper"
            v-for="(item, index) in window2"
            :key="index"
          >
            <WindowsItem :item="item" />
          </div>
        </div>
      </div>
    </div>

    <div class="personal-recommendation">
      <!-- personal recommendation commented-view-->
      <Title title="为您推荐" icon="bookmark" />
      <h2>test3</h2>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem, Row, Col } from "vant";
import Title from "../components/Title.vue";
import GoodsItem from "../components/GoodsItem.vue";
import WindowsItem from "../components/WindowsItem.vue";
export default {
  name: "home",

  components: {
    Title,
    GoodsItem,
    WindowsItem,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Row.name]: Row,
    [Col.name]: Col,
  },

  data() {
    return {
      title: "全视眼镜",
      bannerList: [],
      singleList: [],
      windows: {},
      window1: [],
      window2: [],
    };
  },

  computed: {},

  created() {
    this.loadBanner();
    this.loadSingleList();
    this.loadSelectList();
    this.$emit("onTitle", this.title);
  },

  // mounted() {
  //   // const width = this.window1.length * (100 + 10) + "px";
  //   // console.log(width);
  //   this.$refs.windownsItemWrapper.style.width = 610 + "px";
  // },

  methods: {
    async loadBanner() {
      var that = this;
      await this.$axios
        .get("/api/banner.json")
        .then((res) => {
          that.bannerList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async loadSingleList() {
      var that = this;
      await this.$axios
        .get("/api/selling-list.json")
        .then((res) => {
          that.singleList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async loadSelectList() {
      var that = this;
      await this.$axios
        .get("/api/winnow.json")
        .then((res) => {
          that.windows = res.data;
          that.window1 = res.data.winnowItems1;
          that.window2 = res.data.winnowItems2;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.home-view {
  height: 3000px;
  width: 100%;
  padding-top: 45px;
 
}
.banner-view {
  height: 160px;
}
.home-view > .banner-view img {
  width: 100%;
}
.category-view {
  background-color: #f2f2f2;
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
  padding-left: 5px;
  margin-top: 7px;

  font-size: 13px;
}
.hot-recommendation {
  height: 820px;
}
.select-recommendation {
  background-color: white;
  height: 600px;
}
.winddowsItem-wrapper {
  width: 650px;
}
.personal-recommendation {
  background-color: white;
}

.window {
  height: 280px;
  width: 100%;
}

.window img {
  width: 100%;
  margin-top: 10px;
  margin-bottom:10px;
}
.hidden-view {
  width: 100%;
  overflow-x: auto;
  height:100px;
}

</style>