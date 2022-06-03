<template>
  <div class="search">
    <!-- navBar -->
    <van-nav-bar
      v-if="hasResult"
      title="搜索结果"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <van-nav-bar v-else title="搜索" />

    <!-- search input the section -->
    <van-search
      v-show="!hasResult"
      class="input-wrapper"
      v-model="inputValue"
      placeholder="请输入搜索关键词"
      show-action
      shape="round"
      @search="onSearch"
    >
      <template #action>
        <div @click="onSearch">搜索</div>
       
      </template>
    </van-search>
   
    <!-- search suggestions -->
    <div class="search-suggestions" v-if="!hasResult">
      <h2>this is the search suggestions</h2>
    </div>
    <!-- search result section only show when there is
     the load result and the aray length is > 0 v-if make a change-->
    <div class="search-result" v-if="hasResult">
      <!-- page title change:title, go back  -->
      <!-- search result Item load: searchResult Item load -->
      <div
        class="search-result-wrapper"
        v-for="item in searchResultList"
        :key="item.id"
      >
        <SearchResultItem :item="item" />
      </div>
    </div>
  </div>
</template>

<script>

import { Search, Toast, NavBar } from "vant";

import SearchResultItem from "../components/SearchResultItem.vue";
export default {
  name: "search",

  components: {
    SearchResultItem,
    [Search.name]: Search,
    [Toast.name]: Toast,
    [NavBar.name]: NavBar,
  },

  data() {
    return {
      title: "搜索",
      inputValue: "",
      hasResult: false,
      suggestions: true,
      searchResultList: [],
    };
  },

  created() {
    // this.$emit("onTitle", this.title);
  },

  methods: {
    onSearch() {
      this.suggestions = false;
      this.$axios
        .get("/api/search-detail.json")
        .then((res) => {
          // true has the value of
          this.hasResult = true;
          this.searchResultList = res.data.list;
          this.inputValue = "";
          // console.log(this.searchResultList);
        })
        .catch((err) => {
          // no value
          Toast.fail("没有结果");
        });

      // console.log(this.inputValue);
    },
    onCancel() {
      Toast("取消");
    },
    clearInput() {
      this.inputValue = "";
    },
    onClickLeft() {
      this.hasResult = false;
    },
  },
};
</script>

<style>
.input-wrapper {
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
.van-nav-bar .van-icon {
  color: white;
}
.van-nav-bar__text {
  color: white;
}
</style>