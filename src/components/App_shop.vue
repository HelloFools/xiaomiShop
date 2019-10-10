<template>
	<div class="warp">
		<van-row class="navWarp">
	      <van-col class="type_logoLeft">
	      	<router-link to="/">
	      		<img src="static/img/banner/return.png" @click="returnIndex">
	      	</router-link>
	      </van-col>
	      <van-col class="type_span"><span>购物车</span></van-col>
	      <van-col class="type_logoRight">
	      	<router-link to="search">
	      		<img src="static/img/banner/search.png">
	      	</router-link>
	      </van-col>
	    </van-row>

	    <!-- 购物车商品栏 -->
		<van-row class="shop">
	      <van-col class="shop_prompt" span="24" v-show="cartphotoShow">
	      	<span >购物车还是空的</span>
	      	<button>
	      		<router-link to="/">
	      			去逛逛
	      		</router-link>
	      	</button>
	      </van-col>
	      <van-col span="24" class="shop_love" v-for="(item,inx) in cartProduct" :key="inx">
	      	<van-card :num="item.num" :price="item.price" :desc="item.about" :title="item.name" :thumb="item.typePhoto">
	      		<div slot="tags">
				    <van-tag plain type="primary">{{item.color}}</van-tag>
				    <van-tag plain type="primary">{{item.size}}</van-tag>
				 </div>
				<div slot="footer">
					数量为：
					<button class="numButton" size="mini" @click="addFn(item)">+</button>
					<span>{{item.num}}</span>
					<button class="numButton" size="mini" @click="minFn(item)">-</button>
					<img class="deleteImg" src="static/img/banner/delete.png"  @click="deleteFn(item)"/>
					<h3>总价为：{{item.price*item.num}}¥</h3>
				</div>
			</van-card>
	      </van-col>	

	      <van-col span="24" class="shop_love">
	      	<img src="static/img/banner/shop_love.jpg">
	      </van-col>	
	    </van-row>	

	    <van-row :model="products" class="products">
	      	<van-col span="12" v-for="(product,inx) in products" :key="inx" class="product_love">
		      	<router-link to="detail">
			      	<a href="" @click="detailFn(product)">
			      		<img :src="product.typePhoto">
				        <h3>{{product.name}}</h3>
				        <p>{{product.Introduction}}</p>
				        <span>¥{{product.price}}</span>
			      	</a>
		      	</router-link>
      		</van-col>
    	</van-row>
    	<van-row class="settlement">
	      	<van-col span="8">
		      	<p>共  件 金额 </p>
		      	<p><span></span>元</p>
      		</van-col>
      		<van-col span="8">
		      	<a>继续购物</a>
      		</van-col>
      		<van-col span="8">
		      	<a>去结算</a>
      		</van-col>
    	</van-row>
    	<van-tabbar >
		  <van-tabbar-item>
		  	<p>共{{summaryNum}}件 金额 </p>
		    <p><span>{{summaryPrice}}</span>元</p>
		  </van-tabbar-item>
		  <van-tabbar-item class="continueShopping">
		  	<a>继续购物</a>
		  </van-tabbar-item>
		  <van-tabbar-item class="settleAccounts" @click="shopBuyClick">
		  	去结算
		  </van-tabbar-item>
		</van-tabbar>
	</div>
</template>
<script>
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'
export default{
	name: 'App_shop',
	data(){
		return{
			products:{},
		}
	},
	mounted(){
		this.$axios.get('http://localhost:8081/products')
			.then( _products =>{
			      this.products=_products.data;
			    })
			 .catch((err)=>{
			   console.log(err);
			   alert("加载失败！");
			 })

	},
	computed:{
		...mapGetters(['cartphotoShow','cartProduct','summaryNum','summaryPrice']),
	},
	methods:{
		...mapActions(['detailFn','addFn','minFn','deleteFn','returnIndex','shopBuyClick'])
	}
}
</script>

<style>
.navWarp{
  position:fixed;height:0.85rem;line-height:0.85rem;
  background-color:#f2f2f2;width:100%;z-index:999;
}
.type_logoLeft{
  width:10%;margin:0 .1rem
}
.type_logoRight{
  width:10%;
}
.type_span{
 font-size: .3rem;width:74.5%;
}
.type_span span{
  width:100%;
}
.type_logoLeft img{
  width:0.4rem;
}
.type_logoRight img{
   width:0.4rem;
}
.shop{
	position:relative;
	background: #ebebeb;
    padding-top:1.05rem;
    padding-bottom:.1rem;
}
.shop_prompt{
	height: .75rem;
    font-size: .18rem;
    text-decoration: none;
    text-align:center
}
.shop_prompt span{
	display: inline-block;
    line-height: .5rem;
    background: url(/static/img/banner/shop_admin.png) no-repeat 0;
    background-size: auto 100%;
    padding: 0 .16rem 0 .66rem;
    color: rgba(0,0,0,.27);
}
.shop_love{
	width:100%;
	margin-bottom:.18rem;
}

.shop_love img{
	width:100%;
	height:100%;
}
.products{
	text-align:center;
}
.product_love{
  height: 2.8rem;margin-bottom:1rem;
}
.product_love a img{
  width: 90%;
  height: 90%;
}
.product_love a h3{
  font-size: .28rem;line-height: .06rem;
  color: rgba(0,0,0,.87)
}
.product_love a p{
  margin-top: .06rem;font-size: .22rem;line-height: .06rem;
  color: rgba(0,0,0,.54);
}
.product_love a span{
  font-size: .28rem;color: #ea625b;height: 0.23rem;
  line-height: 0.23rem;position: relative;
  display: block
}
.product_love a button{
  width: 2rem;background: #ea625b;border-radius: .05rem;
  text-align: center;color: #fff;font-size: .24rem;
  padding: .16rem 0;font-weight: 700;
}
.numButton{
	background-color:white;
	border:3px solid #f2f2f2;
	font-size:.18rem;font-weight:bolder;
	border-radius:50%
}
.deleteImg{
	width: .5rem!important;
    height: .5rem!important;
}
.continueShopping{
	background: #f4f4f4;
    border: 1px solid #f4f4f4;
}
.settleAccounts{
	background: #ff6700;
    color: #fff;text-align: center;
}
.van-popup--top {
    top: 50%!important;
    left: 30%!important;
    width: 40%!important;
    font-size:15px;
    border-radius:.5rem!important;
}
</style>