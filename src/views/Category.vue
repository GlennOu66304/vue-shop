<template>
  <div class="category">
    <!-- left menu
v-for loop render an unorder list
1.text only
2.when you select the text, background color change
  -->
    <div class="menu-wrapper">
      <div
        class="menu-item "
        ref="menuWrapper"
        v-for="(item, index) in menuList"
        :key="index"
        @click="selectCategory(index)"
      >
        {{ item.text }}
      </div>
    </div>

    <!-- right goods -->
    <div class="food-wrapper">
      <!-- v-for render the selected category data -->
      <div class="food-item" v-for="item in goodsList" :key="item.id">
        <!-- image, title, oldprice, now price -->
        <div class="img">
          <img :src="item.img" alt="" />
        </div>
        <div class="content">
          <p class="name">{{ item.name }}</p>
          <p class="oldPrice">原价:￥{{ item.oldprice }}</p>
          <p class="price">折扣价:￥{{ item.price }}</p>
        </div>
      </div>
    </div>
    <!-- bscroll achieve the scroll position , click the item that dould go to the section content-->
  </div>
</template>

<script>
export default {
  name: "category",

  data() {
    return {
      title: "分类",
      menuList: [],
      goodsActiveIndex: 0,
      goodsList: [],
      selectItemId: 0,
    };
  },

  computed: {
    address() {
      return this.$store.getters.address;
    },
    city() {
      return (
        this.$store.getters.location.addressComponent.city ||
        this.$store.getters.location.addressComponent.province
      );
    },
  },

  created() {
    this.loadCategories();
    this.$emit("onTitle", this.title);
  },

  methods: {
    async loadCategories() {
      await this.$axios
        .get("/api/assort.json")
        .then((res) => {
          this.menuList = res.data;

          // load the default good list
          this.$nextTick(() => {
            // default color change
            this.selectItemId = this.$refs.menuWrapper[this.goodsActiveIndex];
            this.selectItemId.className = "menu-item active";
            // console.log(this.selectItemId);
            this.goodsList = this.menuList[this.goodsActiveIndex].children;
            // console.log(this.goodsList);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    selectCategory(index) {
      // remove the previous acivate, then apply a new change
      this.selectItemId.className = "menu-item";
      this.goodsActiveIndex = index;
      // color changhe

      this.selectItemId = this.$refs.menuWrapper[this.goodsActiveIndex];

      this.selectItemId.className += " active";
      // data fetch
      this.goodsList = this.menuList[this.goodsActiveIndex].children;
      // console.log(this.goodsList);
    },
  },
};
</script>

<style scoped>
.categoty {
 
}
.menu-wrapper {
  background-color: white;
  margin-top: 50px;
  height: 700px;
  float: left;
  width: 100px;
  position: relative;
}
.menu-item {
  padding: 15px 20px 10px 5px;
}
.text {
  font-size: 13px;
  color: #333333;
  line-height: 17px;
  vertical-align: middle;
}

.active {
  background-color: black;
  color: white;
}

.food-wrapper {
  margin-top: 50px;
  float: right;
  width: 100%;
  margin-left: -100px;
  background-color: #f1f1f1;
}

.food-item {
  margin-left: 120px;
  background-color: white;
  box-sizing: border-box;
  border-radius: 20px;
  margin-right: 10px;
}
img {
  float: left;
  width: 60px;
  height: 44px;
  padding-top:20px;
  padding-left: 5px;
}
.content{
  
}
.oldPrice {
  text-decoration: line-through;
  color: #f2f2f2;
}
.price {
  color: red;
  padding-left: 60px;
}
</style>