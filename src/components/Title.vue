<template>
  <div class="title-view">
    <!-- icon -->

    <!-- text -->
    <h3 class="title-text">
      <van-icon :name="icon" />
      {{ title }}
    </h3>
  </div>
</template>

<script>
import { Icon } from "vant";
export default {
  name: "Title",
  components: {
    [Icon.name]: Icon,
  },
  props: {
    title: String,
    icon: String,
  },
};
</script>

<style scoped>
/* center the text top and bottom size change */
.title-view {
  background-color: #f2f2f2;
  line-height: 18px;
 height:60px;
}
.title-view > h3 {
  text-align: center;
    
  
}
.title-text{
  padding-top:20px;
}
</style>