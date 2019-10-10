<template>
	<div class="settlement">
		<van-row class="topNav">
	      <van-col class="type_logoLeft" >
	      	<a href="" @click="returnFn">
	      		<img src="static/img/banner/return.png" >
	      	</a>
	      </van-col>
	      <van-col class="type_span"><span>我的订单</span></van-col>
	    </van-row>
	    <van-row class="settlementAddress">
	    	<router-link to="/shop">
			    <span>BlockHead&nbsp;&nbsp;123456789</span>
			    <span class="settlement_address" v-for="(_address,inx) in settlement.address" :key="inx">{{_address}}</span>
			    <span class="symbol"></span>
		  	</router-link>
		</van-row>
	   <van-row class="productList" :model="settlement" v-for="(item,inx) in settlement" :key="inx">
	    	<van-card :num="item.num" :price="item.price" :desc="item.about" :title="item.name" :thumb="item.typePhoto">
	      		<div slot="tags">
				    <van-tag plain type="primary">{{item.color}}</van-tag>
				    <van-tag plain type="primary">{{item.size}}</van-tag>
				 </div>
				<div slot="footer">
					数量为：
					<button class="numButton" size="mini" @click="settlementAddFn(item)">+</button>
					<span>{{item.num}}</span>
					<button class="numButton" size="mini" @click="settlementMinFn(item)">-</button>
					<h3>总价为：{{item.price*item.num}}¥</h3>
				</div>
			</van-card>
		</van-row>
		<van-row>
			<van-submit-bar loading :price="settlementSummaryPrice*100"  button-text="提交订单" @submit="onSubmit"
			/>
		</van-row>
	</div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
import AreaList from '../../assets/area.js'
export default{
  name:'App_settlement',
  data(){
    return{
    }
  },
  mounted(){},
  computed:{
    ...mapGetters(['settlement','settlementSummaryPrice']),
  },
  methods:{
    ...mapActions(['detailFn','settlementAddFn','settlementMinFn','deleteFn','returnFn']),
    onSubmit(){}
  }
}
</script>

<style>
.settlement{
	background-color:#fafafa;
}
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
 font-size: .23rem;width:70%;
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
.settlementAddress{
	width:100%;padding:.3rem .3rem;
	background-color:white;
	margin-bottom:.6rem;top:.4rem;
	position:relative;border-bottom:3px solid #f2f2f2;
}
.settlementAddress span:first-child{
	font-size:.28rem;font-weight:bolder;
	display:block;margin:.15rem 0rem .08rem 0rem
}
.symbol{	
	content: "";
    position: absolute;
    left: rem;
    top: 50%;
    right:15%;
    width: .18rem;
    height: .18rem;
    border-left: 1px solid currentColor;
    border-top: 1px solid currentColor;
    transform: translate3d(0,-50%,0) rotate(135deg);
    -webkit-transform: translate3d(0,-50%,0) rotate(135deg);
}
.settlement_address{
	margin-right:.1rem;
}
.van-action-sheet {
    height: 5rem;
    color: #323233;
}
.productList{
	position:relative;
	border:5px solid #fafafa;
}
.van-card {
    position: relative;
    box-sizing: border-box;
    padding: 8px 16px;
    color: #323233;
    font-size: 12px;
    background-color: white!important;
}
.numButton{
	background-color:white;
	border:3px solid #f2f2f2;
	font-size:.18rem;font-weight:bolder;
	border-radius:50%
}
</style>