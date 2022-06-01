<template>
  <div class="goodsitem-view">
    <!-- item image, item name, 
    item description,display price, original pricediscount -->
    <!-- <img :src="item.img" alt="" /> -->
    <img v-lazy="item.img" />
    <p class="title">{{ item.title }}</p>
    <p class="desc">{{ item.desc }}</p>
    <p class="price">
      <span class="nowPrice">￥{{ item.nowPrice }}</span>

      <span class="oldPrice"> ￥{{ item.oldPrice }}</span>

      <span class="rebate"> {{ item.rebate }}折</span>
    </p>
  </div>
</template>

<script>
import { Icon } from "vant";
export default {
  name: "GoodsItem",
  components: {
    [Icon.name]: Icon,
  },
  props: {
    item: Object,
  },
};
</script>

<style scoped>
/*1. two items in a same row 2. one item 150x width and 222 height 
3.font changhe in the same text
4.coloer of he now price and disount is red
*/
.goodsitem-view {
  width: 50%;
  float: left;
  height: 260px;
  border: 0.05px solid #bbbbbb;
  box-sizing: border-box;
  background-color: white;
}

.goodsitem-view > img {
  width: 165px;
  height: 150px;
}
.goodsitem-view > p {
  text-align: center;
}
.title {
  color: black;
  font-size: 13px;
 
}
.desc {
  color: #b4b4b4;
  font-size: 13px;
 
}
.nowPrice {
  color: red;
  font-size: 14px;
  

}

.oldPrice {
  color: #b4b4b4;
  font-size: 13px;
 
  padding-right: 3px;;
 text-decoration:line-through;
}
.rebate {
  color: white;
  border-radius: 3px;
  background-color: red;
  font-size: 13px;
  
}
</style>