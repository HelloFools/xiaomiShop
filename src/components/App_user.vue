<template>
	<div class="user">
		<van-row class="userWarp">
	      <van-col class="user_portrait">
	      	<img src="/static/img/banner/user_portrait.png">
	      </van-col>
	      <van-col class="user_landing">
	      	<span>登录/注册</span>
	      </van-col>
	    </van-row>

	    <van-row class="userOrder">
	      <van-col class="my_order">
	      	<span>我的订单</span>
	      </van-col>
	      <van-col class="all_order">
	      	<a href="#">全部订单</a>
	      </van-col>
	    </van-row>

	    <van-row class="function">
	      <van-col span="24">
	      	<ul class="function_process">
	      		<li>
	      			<router-link to="/order">
		      			<img src="static/img/banner/function1.png">
		      			<a href="#">待付款</a>
	      			</router-link>
	      		</li>
	      		<li>
	      			<img src="static/img/banner/function2.png">
	      			<a href="#">待收货</a>
	      		</li>
	      		<li>
	      			<img src="static/img/banner/function3.png">
	      			<a href="#">退换修</a>
	      		</li>
	      	</ul>
	      </van-col>
	    </van-row>

		<div class="functionAdmin">
			<ul class="function_adminCenter">
		    <li>
		    	<a href="">
		      		<img src="static/img/banner/function4.png">
		      		<p>会员中心</p>
		      		<span></span>
		      	</a>
		    </li>
		    <li>
		      	<a href="">
		      		<img src="static/img/banner/function5.png">
		      		<p>我的优惠</p>
		      		<span></span>
		      	</a>
		    </li>
		</ul>

		<ul class="function_adminCenter">
		    <li>
		    	<a href="">
		      		<img src="static/img/banner/function6.png">
		      		<p>服务中心</p>
		      		<span></span>
		      	</a>
		    </li>
		    <li>
		      	<a href="">
		      		<img src="static/img/banner/function7.png">
		      		<p>小米之家</p>
		      		<span></span>
		      	</a>
		    </li>
		</ul>

		<ul class="function_adminCenter">
		    <li class="no_border">
		    	<a href="">
		      		<img src="static/img/banner/function8.png">
		      		<p>F码通道</p>
		      		<span></span>
		      	</a>
		    </li>
		</ul>

		<ul class="function_adminCenter ">
		    <li class="no_border">
		    	<a href="">
		      		<img src="static/img/banner/function9.png">
		      		<p>设置</p>
		      		<span></span>
		      	</a>
		    </li>
		</ul>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default{
	name:'App_user',
	data(){
		return{
			
		}
	},
	mounted(){

	},
	methods:{

	}
}
</script>

<style>
.user{
	position:relative;background: #f5f5f5!important;
}
.userWarp{
	background: url(/static/img/banner/user_Title.png) center 0 #f37d0f;
    background-size: auto 100%;padding: .28rem 0;
    display: flex;-webkit-box-align: center;
    -webkit-align-items: center;align-items: center;
}
.user_portrait{
	margin: 0 .16rem 0 .3rem;
    width: .86rem;
    height: .86rem;
    overflow: hidden;
    box-sizing: border-box;
    border-radius: 100%;
    border: 3px solid hsla(0,0%,100%,.4);
    text-align: center;
}
.user_portrait img{
	width: auto;
    height: 100%;
    margin: 0 auto;
}
.user_landing span{
	color: #fff;
    font-size: .23rem;
    margin:auto 0;
}
.userOrder{
	background-color: #fff;
    height: .8rem;
    border-bottom: 1px solid rgba(0,0,0,.15);
    color: rgba(0,0,0,.54);
    position: relative;
    padding-right: .56rem;
    line-height:.8rem;
    padding:0 .32rem;
}
.my_order{
	font-size: .24rem;
    color: rgba(0,0,0,.87);
    float:left;
    
}
.all_order{
	font-size: .24rem;
    color: rgba(0,0,0,.87);
    justify-content:flex-end!important;
    right:0;float:right;
}
.all_order:after{
	content: "";
    position: absolute;
    right: .15rem;
    top: 50%;
    width: .16rem;
    height: .16rem;
    border-left: 1px solid currentColor;
    border-top: 1px solid currentColor;
    transform: translate3d(0,-50%,0) rotate(135deg);
    -webkit-transform: translate3d(0,-50%,0) rotate(135deg);
}
.function{
	position:relative;background-color:white;margin-top:.01em;
	padding:.2rem;text-align:center
}
.functionAdmin{
	position:relative;background-color:#f5f5f5;margin-top:.01em;
	padding-bottom:1rem
}
.function_process li{
	float:left;width:33.3333%;
}
.function_process li img{
	width: .48rem;height: .48rem;margin: 0 auto .08rem;
	display:block;
}
.function_process li a{
	font-size:.15rem;
}
.function_adminCenter{
	margin-top:.2rem;background-color:white;position:relative;
	
}
.function_adminCenter li{
	height:.8rem;width:100%;padding:.1rem;
	line-height:.8rem;position:relative;
}
.function_adminCenter li:before{
	content: "";
    position: absolute;
    left: 0;
    top:-0.01rem;
    height: .02rem;
    background: white;
    width: .8rem;
    z-index:999;
}
.function_adminCenter li:first-child{
	border-bottom:.02rem solid #D9D3D3;
}
.function_adminCenter li a{
	width:100%;
}
.function_adminCenter li a img{
	width: .45rem;height: .45rem;
	float:left;margin:.15rem 0;margin-left:.15rem;
}
.function_adminCenter li a p{
	height: .35rem;;line-height:.35rem;;font-size:.2rem;
	display:inline-block;margin-left:.15rem;float:left;
	text-align:center;
}
.function_adminCenter li a span{
	float:right;margin-right:.55rem;
	position:relative;height:100%;
}
.function_adminCenter li a span:before{
	content: "";
    position: absolute;
    left: rem;
    top: 50%;
    width: .18rem;
    height: .18rem;
    border-left: 1px solid currentColor;
    border-top: 1px solid currentColor;
    transform: translate3d(0,-50%,0) rotate(135deg);
    -webkit-transform: translate3d(0,-50%,0) rotate(135deg);
}
.no_border{
	border-bottom:none!important;
}
</style>
