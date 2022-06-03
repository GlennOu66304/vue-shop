<template>
  <div>
    <van-nav-bar title="购物车" />
    <!-- Cart interatc flow:

1.go to the cart router, there are few shopping item' (v-for render)

2.and checkout row, 

3.click the submit order, it will go to the location selection 

4.click the edit icon, then go to the location edit icon -->

    <div class="cartList" v-for="item in cartList" :key="item.id" v-show="showSubmitBar">
      <van-checkbox v-model="checked"/>
      <van-card
        tag="特价"
        :num="item.num"
        :price="item.price"
        :title="item.name"
        :thumb="item.img"
      />
    </div>

    <!-- checkout , AddressList , AddressEdit , Area -->
    <van-submit-bar
      :price="3050"
      button-text="提交订单"
      @submit="onSubmit"
      v-show="showSubmitBar"
    >
      <van-checkbox v-model="checked">全选</van-checkbox>
      <template #tip>
        你的收货地址不支持同城送,
        <span @click="SelectAddress">选择地址</span>
      </template>
    </van-submit-bar>
    <!-- when shwo the address list, then the checkout box hides -->
    <van-address-list
      v-show="showAddresses"
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
    <!-- edit address -->
    <van-address-edit
      v-show="showEditAddress"
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import {
  Card,
  SubmitBar,
  Checkbox,
  AddressList,
  AddressEdit,
  Toast,
  Area,
} from "vant";
import { areaList } from "@vant/area-data";
export default {
  name: "Cart",

  components: {
    [SubmitBar.name]: SubmitBar,
    [Checkbox.name]: Checkbox,
    [AddressList.name]: AddressList,
    [AddressEdit.name]: AddressEdit,
    [Toast.name]: Toast,
    [Area.name]: Area,
    [Card.name]: Card,
  },

  data() {
    return {
      title: "购物车",
      cartList: [],
      checked: true,
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
          isDefault: true,
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号",
        },
      ],
      disabledList: [
        {
          id: "3",
          name: "王五",
          tel: "1320000000",
          address: "浙江省杭州市滨江区江南大道 15 号",
        },
      ],
      showSubmitBar: true,
      showAddresses: false,
      areaList,
      searchResult: [],
      showEditAddress: false,
    };
  },

  computed: {},

  created() {
    this.loadCartData();
  },
  methods: {
    async loadCartData() {
      this.$axios
        .get("/api/cart.json")
        .then((res) => {
          this.cartList = res.data;
        })
        .catch((err) => {
          // no value
          Toast.fail("没有结果");
        });
    },
    SelectAddress() {
      this.showAddresses = true;
      this.showSubmitBar = false;
    },
    onSubmit() {
      console.log("onSubmit");
    },
    onAdd() {
      Toast("新增地址");
    },
    onEdit() {
      this.showEditAddress = true;
      this.showAddresses = false;
    },
    onSave() {
      Toast("save");
    },
    onDelete() {
      console.log("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区",
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
};
</script>

<style scoped>
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
.van-submit-bar {
  bottom: 50px;
  padding-bottom: 10px;
}
.van-card{
   background-color: white;
  margin-bottom: 10px;
}
.cartList{
  background-color: white;
}
</style>