<template>
  <div class="personal-view">
    <!-- first row -->
    <div>
      <img v-lazy="item.img" />
      <p class="title">{{ item.title }}</p>
      <p class="desc">{{ item.desc }}</p>
      <p class="keywords">{{ item.keyword1 }} | {{ item.keyword2 }}</p>
      <p class="price">￥{{ item.price }}</p>
    </div>
    <!-- second row -->
    <hr />
    <div class="second-row">
      <p>
        <span class="brand">{{ item.brand }}</span>

        <span class="standard"> {{ item.standard }}</span>

        <span class="simliar"> 找相似</span>
      </p>
    </div>
  </div>
</template>

<script>
import { Icon } from "vant";
export default {
  name: "PersonalItem",
  components: {},
  props: {
    item: Object,
  },
};
</script>

<style scoped>
/* 1.img left float 2. description right 3. bottom text */
.personal-view {
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
.brand {
  float: left;
}
.simliar {
  width: 55px;
  height: 20px;
  border: 1px solid #808080;
  border-radius: 40%;
  float: right;
}
.second-row{
    color: #737373;
}
</style>