<template>
  <div class="me">
    <van-nav-bar
      v-if="showOrderAll"
      title="我的订单"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- <van-nav-bar v-else title="我的" /> -->
    <div class="me-wrapper" v-show="!showOrderAll">
      <div class="red-background"></div>
      <!-- simple intro -->
      <div class="simple-intro">
        <!-- css 两个元素重叠,css元素如何重叠？
        https://blog.csdn.net/weixin_36473056/article/details/119397867#:~:text=css%E5%85%83%E7%B4%A0%E9%87%8D%E5%8F%A0%E7%9A%84%E6%96%B9%E6%B3%95%EF%BC%9A1%E3%80%81%E7%BB%99%E5%85%83%E7%B4%A0%E8%AE%BE%E7%BD%AE%E8%B4%9Fmargin%EF%BC%8C%E8%B4%9Fmargin%E5%8F%AF%E4%BB%A5%E8%AE%A9%E5%85%83%E7%B4%A0%E7%9A%84%E5%8D%A0%E7%94%A8%E7%A9%BA%E9%97%B4%E5%8F%98%E5%B0%8F%EF%BC%8C%E5%90%8E%E9%9D%A2%E7%9A%84%E5%85%83%E7%B4%A0%E5%8F%AF%E4%BB%A5%E8%A6%86%E7%9B%96%E5%BD%93%E5%89%8D%E7%9A%84%E5%85%83%E7%B4%A0%EF%BC%9B2%E3%80%81%E4%BD%BF%E7%94%A8position%E5%B1%9E%E6%80%A7%EF%BC%8C%E5%88%A9%E7%94%A8%E7%9B%B8%E5%AF%B9%E5%AE%9A%E4%BD%8D%E5%92%8C%E7%BB%9D%E5%AF%B9%E5%AE%9A%E4%BD%8D%E6%9D%A5%E8%AE%A9%E5%A4%9A%E4%B8%AA%E5%85%83%E7%B4%A0%E8%BF%9B%E8%A1%8C%E9%87%8D%E5%8F%A0%E3%80%82,%E6%9C%AC%E6%95%99%E7%A8%8B%E6%93%8D%E4%BD%9C%E7%8E%AF%E5%A2%83%EF%BC%9Awindows10%E7%B3%BB%E7%BB%9F%E3%80%81css3%E7%89%88%EF%BC%8C%E8%AF%A5%E6%96%B9%E6%B3%95%E9%80%82%E7%94%A8%E4%BA%8E%E6%89%80%E6%9C%89%E5%93%81%E7%89%8C%E7%94%B5%E8%84%91%E3%80%82
         -->
        <div>
          <van-image
            round
            width="65"
            height="65"
            lazy-load
            src="http://localhost:8088/atom.png"
          />
          <!-- <img src="http://www.api.qsyj.com/img/atom.png" alt="" /> -->
          <span class="name">请叫我阿童木</span>
        </div>
        <span class="data">收藏 | 关注 | 足迹 | 心得</span>
      </div>
      <!-- order's area -->

      <div class="order-area">
        我的订单
        <span class="showAll" @click="chekcAllOrder"
          >查看全部 <van-icon name="arrow"
        /></span>
        <van-divider />

        <van-row type="flex" justify="center">
          <van-col span="5">
            <van-icon name="shop" color="red"> </van-icon>
            <span class="text">代付款</span></van-col
          >
          <van-col span="5">
            <van-icon name="shop-collect" color="red"> </van-icon>
            <span class="text">代发货</span>
          </van-col>
          <van-col span="5">
            <van-icon name="clock" color="red"> </van-icon>
            <span class="text">代收款</span></van-col
          >
          <van-col span="5">
            <van-icon name="alipay" color="red"> </van-icon>
            <span class="text">退款退货</span></van-col
          >
        </van-row>
      </div>
      <!-- sercvice area -->
      <div class="service-area">
        我的服务
        <span class="showAll">查看全部 <van-icon name="arrow" /> </span>
        <van-divider />

        <van-row type="flex" justify="center">
          <van-col span="5">
            <van-icon name="youzan-shield" color="red"> </van-icon>
            <span class="text">邀请好友</span></van-col
          >
          <van-col span="5">
            <van-icon name="bell" color="red"> </van-icon>
            <span class="text">签到赢礼包</span>
          </van-col>
          <van-col span="5">
            <van-icon name="coupon" color="red"> </van-icon>
            <span class="text">优惠券</span></van-col
          >
          <van-col span="5">
            <van-icon name="audio" color="red"> </van-icon>
            <span class="text">限时购</span></van-col
          >
        </van-row>
        <van-divider />

        <van-row type="flex" justify="center">
          <van-col span="5">
            <van-icon name="comment" color="red"> </van-icon>
            <span class="text">我的收藏</span></van-col
          >
          <van-col span="5">
            <van-icon name="gift" color="red"> </van-icon>
            <span class="text">收货地址</span>
          </van-col>
          <van-col span="5">
            <van-icon name="question" color="red"> </van-icon>
            <span class="text">客户中心</span></van-col
          >
          <van-col span="5">
            <van-icon name="todo-list" color="red"> </van-icon>
            <span class="text">充值中心</span></van-col
          >
        </van-row>
        <van-divider />

        <van-row type="flex" justify="center">
          <van-col span="5">
            <van-icon name="manager" color="red"> </van-icon>
            <span class="text">我的问答</span></van-col
          >
          <van-col span="5">
            <van-icon name="label" color="red"> </van-icon>
            <span class="text">领券中心</span>
          </van-col>
          <van-col span="5">
            <van-icon name="service" color="red"> </van-icon>
            <span class="text">验光单</span></van-col
          >
          <van-col span="5">
            <van-icon name="chat" color="red"> </van-icon>
            <span class="text">试用中心</span></van-col
          >
        </van-row>
      </div>
      <!-- log out button -->
      <van-button class="logou" type="default" block>退出登录</van-button>
    </div>
    <!-- go to the all order area -->
    <OrderAll :orderList="orderList" v-if="showOrderAll" />
  </div>
</template>

<script>
import OrderAll from "../components/OrderAll.vue";
import {
  Button,
  Divider,
  Image as VanImage,
  Icon,
  Grid,
  GridItem,
  Col,
  Row,
} from "vant";
export default {
  name: "me",

  components: {
    OrderAll,
    [Button.name]: Button,
    [Divider.name]: Divider,
    [VanImage.name]: VanImage,
    [Icon.name]: Icon,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Col.name]: Col,
    [Row.name]: Row,
  },

  data() {
    return {
      title: "我的",
      showOrderAll: false,
      orderList: [],
    };
  },

  created() {},

  methods: {
    async chekcAllOrder() {
      this.showOrderAll = true;
      await this.$axios
        .get("/api/order.json")
        .then((res) => {
          this.orderList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onClickLeft() {
      this.showOrderAll = false;
    },
  },
};
</script>

<style>
.me {
  height: 720px;
}
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
.red-background {
  height: 90px;
  width: 100%;
  background-color: red;
}
.simple-intro {
  height: 100px;
  margin-top: -50px;
  margin-left: 35px;
  width: 305px;
  background-color: white;
  border-radius: 10%;
}
.van-image {
  margin-top: -30px;
  margin-left: 10px;
}
.name {
  margin-left: 10px;
}
.data {
  padding-top: 10px;
  margin-left: 27px;
}
.order-area {
  width: 100%;
  height: 110px;
  background-color: white;
  margin-top: 10px;
  margin-bottom: 10px;
}
.service-area {
  width: 100%;
  background-color: white;
  margin-bottom: 10px;
}
.showAll {
  float: right;
}
.van-icon {
  color: red;
  /* margin: 16px 0 16px; */
  /* color: #323233; */
  font-size: 30px;
  margin-left: 5px;
}
.text {
  display: block;
  height: 36px;
  /* margin: -4px 0 4px; */
  padding: 0 5px;
  color: #646566;
  font-size: 12px;
  line-height: 18px;
  margin-top: 5px;
}
</style>