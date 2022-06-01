<template>
  <div class="windowsItem-view">
    <!-- item image, item name, 
    item description,display price, original pricediscount -->
    <!-- <img :src="item.img" alt="" /> -->

    <p class="title">{{ item.name }}</p>
    <p class="desc">{{ item.desc }}</p>
    <img v-lazy="item.img" />
  </div>
</template>

<script>
import { Icon } from "vant";
export default {
  name: "WindowsItem",
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
.windowsItem-view {
  float:left;
  /* height: 165px; */
  width: 120px;
  height: 95px;
  background-color: #f6f6f6;
  margin-right: 10px;
}

.windowsItem-view > img {
  width: 50px;
  height: 35px;
  padding-left: 40px;
}
.windowsItem-view > p {
  text-align: center;
}
.title {
  color: black;
  font-size: 10px;
}
.desc {
  color: #b4b4b4;
  font-size: 10px;
}
</style>