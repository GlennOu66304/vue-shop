<template>
	<div id="app">
		<router-view @onTitle="getTitle" />
		<!-- <van-nav-bar :title="title" fixed /> -->
		<van-tabbar v-model="active" active-color="red">
			<van-tabbar-item icon="home-o" to="/home"
				>首页</van-tabbar-item
			>
			<van-tabbar-item icon="filter-o" to="/category"
				>分类</van-tabbar-item
			>
			<van-tabbar-item icon="search" to="/search"
				>搜索</van-tabbar-item
			
			>

			<van-tabbar-item icon="cart-o" to="/cart"
				>购物车</van-tabbar-item
			>
			<van-tabbar-item icon="contact" to="/me"
				>我的</van-tabbar-item
			>
		</van-tabbar>
	</div>
</template>

<script>
import { NavBar, Tabbar, TabbarItem } from "vant";
export default {
	name: "app",

	components: {
		[Tabbar.name]: Tabbar,
		[TabbarItem.name]: TabbarItem,
		[NavBar.name]: NavBar,
	},

	data() {
		return {
			active: 0,
			title: "",
		};
	},

	created() {},

	methods: {
		getTitle(title) {
			// console.log(title)
			this.title = title;
		},
	},
};
</script>

<style scoped>
#app {
	width: 100%;
	height: 100%;
	background: #f1f1f1;
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
</style>
