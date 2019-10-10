<template>
	<div class="order">
		<van-row class="topNav">
	      <van-col class="type_logoLeft">
	      	<router-link to="/user">
	      		<img src="static/img/banner/return.png">
	      	</router-link>
	      </van-col>
	      <van-col class="type_span"><span>我的订单</span></van-col>
	      <van-col class="search_logoRight"><img src="static/img/banner/search.png"></van-col>
	      <van-col class="shopCar_logoRight"><img src="static/img/banner/shopCar.png"></van-col>
	    </van-row>
	    <van-row class="orderNav">
	    	<van-tabs>
			  <van-tab title="全部">内容 1</van-tab>
			  <van-tab title="待付款">内容 2</van-tab>
			  <van-tab title="待收货">内容 3</van-tab>
			  <van-tab title="待评价">内容 4</van-tab>
			</van-tabs>
	    </van-row>
	</div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
import AreaList from '../../assets/area.js'
export default{
  name:'App_order',
  data(){
    return{}
  },
  mounted(){},
  computed:{
    
  },
  methods:{
    
  }
}
</script>

<style>
.topNav{
  position:fixed;height:0.6rem;line-height:0.6rem;
  background-color:#FCFCFC;width:100%;z-index:999;border-bottom:1px solid #f2f2f2;
}
.type_logoLeft{
  width:10%;
}
.search_logoRight,.shopCar_logoRight{
  width:10%;
}
.type_span{
 font-size: .23rem;width:68%;
}
.type_span span{
  width:100%;
}
.type_logoLeft img{
  width:0.4rem;
}
.search_logoRight img{
   width:0.4rem;
}
.shopCar_logoRight img{
	width: .3rem;
}
.orderNav{
	padding-top:.6rem;
}
</style>