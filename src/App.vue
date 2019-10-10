<template>
  <div id="app" :model="roterShow">
  	<van-tabbar v-show="roterShow">
		<van-tabbar-item >
			<router-link to="/">
				<img class="roture_logo" src="static/img/banner/index.png">
				<span>首页</span>
			</router-link>
		</van-tabbar-item>
		<van-tabbar-item >
			<router-link to="/type">
				<img class="roture_logo" src="static/img/banner/type.png">
				<span>分类</span>
			</router-link>
		</van-tabbar-item>
		<van-tabbar-item>
			<router-link to="/shop">
				<img class="roture_logo" src="static/img/banner/shopCar.png" @click="detailFn">
				<span>购物车</span>
			</router-link>
		</van-tabbar-item>
		<van-tabbar-item>
			<router-link to="/user">
				<img class="roture_logo" src="static/img/banner/myHome.png">
				<span>我的</span>
			</router-link>
		</van-tabbar-item>
	</van-tabbar>
    <router-view/>
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
  name: 'App_index',
  data(){
  	return{
  		
 	}
  },
  computed:{
  	...mapGetters(['roterShow'])
  },
  methods:{
	...mapActions(['detailFn'])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.roture_logo{
	display: block;
    width: 0.4rem!important;
    height:0.4rem;
    margin: 0 auto .1rem;
}
</style>
