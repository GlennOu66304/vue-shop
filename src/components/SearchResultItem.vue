<template>
  <div class="SearchResultItem-view">
    <!-- item image, item name, 
    item description,display price, original pricediscount -->
    <!-- <img :src="item.img" alt="" /> -->
    <img v-lazy="item.img" />
    <p class="title">{{ item.name }}</p> 
    <p class="keywords">{{ item.keywords }}</p>
    <p class="price">￥{{ item.price }}</p>
     <p class="unitprice">￥{{ item.unitprice }}</p> 
    <p class="sale">{{ item.sale }}</p>
    <p class="appraiseNum">{{ item.appraiseNum}}</p>
    <p class="rateScore">{{ item.rateScore}}</p>
  </div>
</template>

<script>
import { Icon } from "vant";
export default {
  name: "SearchResultItem",
  components: {
    [Icon.name]: Icon,
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
.SearchResultItem-view {
  background-color: white;
  height: 260px;
  text-align: center;
  margin-bottom: 13px;
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
  width:126px;
  height: 20px;
  color: #d8aa71;
  text-align: center;
}
.price {
  color: red;
  line-height: 16px;
}
</style>