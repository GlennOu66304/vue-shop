<template>
  <div class="order-all">
    This is the Order All Page
  </div>
</template>

<script>
import { Icon } from "vant";
export default {
  name: "OrderAll",
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
.order-all {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color:blue;
  /* z-index: 90; */
  
}
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

  padding-right: 3px;
  text-decoration: line-through;
}
.rebate {
  color: white;
  border-radius: 3px;
  background-color: red;
  font-size: 13px;
}
</style>