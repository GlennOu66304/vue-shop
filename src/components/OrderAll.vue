<template>
  <div class="order-all">
    <!-- navBar -->

    <van-tabs v-model="active" class="tabs">
      <van-tab title="全部">
        <div v-for="item in orderList" :key="item.orderId">
          <OrderItem :item="item" />
        </div>
      </van-tab>

      <van-tab title="待付款"><p>待付款</p></van-tab>
      <van-tab title="待发货">代发货</van-tab>
      <van-tab title="待收货">待收货</van-tab>
      <van-tab title="交易">交易</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Icon, Tab, Tabs } from "vant";
import OrderItem from "./OrderItem.vue";
export default {
  name: "OrderAll",

  components: {
    [Icon.name]: Icon,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    OrderItem,
  },

  props: {
    orderList: Array,
  },

  data() {
    return {
      active: 0,
    };
  },

  methods: {},
};
</script>

<style scoped>
/*1. two items in a same row 2. one item 150x width and 222 height 
3.font changhe in the same text
4.coloer of he now price and disount is red
*/
.order-all {
  /* position fixed to decide a new page view */
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;

  /* z-index: 90; */
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

.tabs {
  color: #7d7e80;
  margin-top: 45px;
}

.van-tab__pane {
  
}
</style>