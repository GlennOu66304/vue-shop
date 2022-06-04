<template>
  <div class="me">
    <van-nav-bar
      v-if="showOrderAll"
      title="我订单"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-nav-bar v-else title="我的" />
    <!-- simple intro -->
    <!-- order's area -->
    <div>
      <span v-show="!showOrderAll" @click="chekcAllOrder">查看全部订单</span>
    </div>
    <!-- sercvice area -->
    <!-- log out button -->
    <!-- go to the all order area -->
    <OrderAll :orderList="orderList" v-if="showOrderAll" />
  </div>
</template>

<script>
import OrderAll from "../components/OrderAll.vue";
export default {
  name: "me",

  components: {
    OrderAll,
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