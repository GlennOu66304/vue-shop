<template>
  <div class="orderItem-view">
    <!-- item image, item name, 
    item description,display price, original pricediscount -->
    <!-- <img :src="item.img" alt="" /> -->
    <p class="order-time">{{ item.orderTime }}</p>
    <hr />
    <img v-lazy="item.img" />
    <p class="desc">{{ item.desc }}</p>

    <p class="price">￥{{ item.price }}</p>
    <hr />
    <p class="num">共{{ item.num }}件</p>
    <van-button type="default">取消订单</van-button>
    <van-button type="danger">立即购买</van-button>
  </div>
</template>

<script>
import { Button } from "vant";
export default {
  name: "OrderItem",
  components: {
    [Button.name]: Button,
  },
  props: {
    item: Object,
  },
};
</script>

<style scoped>
/* 1.5 box in one row 2.0 swipper feature:

2.1 mouted calculate the width of the row view

2.2 apply this value into the row

2.3 given wrapper into the box section and
2.4 set the wrapper:overflow hidden
*/
.orderItem-view {
  background-color: white;
  height: 260px;
  text-align: center;
  margin-bottom: 13px;
}

hr {
  color: #e8e8e8;
}
img {
  float: left;
  width: 165px;
  margin-top: 30px;
}
.title {
  line-height: 16px;
  padding-top: 20px;
}
.desc {
  color: #737373;
}
.keywords {
  background-color: #f2f2f2;
  margin-left: 170px;
  width: 126px;
  height: 20px;
  color: #d8aa71;
  text-align: center;
}
.price {
  color: red;
  line-height: 16px;
}
</style>