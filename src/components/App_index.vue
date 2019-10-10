<template>
 <div class="warp">
		<!-- 导航栏以及搜索栏-->  		
		<van-row class="nav">
		  <van-col class="logo_left">
		  	<img src="static/img/banner/logo.png">
		  </van-col>
		  <van-col class="logo_right">
        <img src="static/img/banner/download.png">
		  </van-col>
      <router-link to="search">
        <van-col class="search" >
          <van-search placeholder="搜索商品名称" :model="search_value" />
        </van-col>
      </router-link>
		</van-row>
		<!-- 产品标签栏 -->
		<van-row  class="tab">
			<van-col span="21">
				<van-tabs :model="tabList" class="tablist">
				  	<van-tab v-for="(tab_value,inx ) in tabList" :title=" tab_value" :key="inx">
				   		<!-- {{ tab_value }} -->
					</van-tab>
				</van-tabs>
			</van-col>
			<!-- 下拉菜单 -->
			<van-col  span="3">
				<van-dropdown-menu  class="dropdownMenu" >
					<van-dropdown-item :options="menu_list" />
				</van-dropdown-menu>
			</van-col>
		</van-row>
		<!-- 广告轮播图 -->
		<van-row>
			<van-swipe :autoplay="6000" :model="swipeImgUrl">
			<van-swipe-item v-for="(image, index) in swipeImgUrl" :key="index">
			    <img :src="image" />
			</van-swipe-item>
			</van-swipe>
		</van-row>
		<!-- 产品分类宫格 -->
		<van-row>
			<van-grid :column-num="5" :model="girdImgUrl">
			  <van-grid-item v-for="(value,inx) in girdImgUrl" :key="inx">
			  	<a href=""><img :src="value.imgUrl"></a>
			  </van-grid-item>
			</van-grid>
		</van-row>
    <!-- 产品列表 -->
    <van-row :model="products">
      <van-col span="12" v-for="(product,inx) in products" :key="inx" class="product"  >
         <router-link to="detail">
           <img :src="product.typePhoto" @click="detailFn(product)">
           <h3>{{product.name}}</h3>
           <p>{{product.Introduction}}</p>
           <span>¥{{product.price}}</span>
           <button>立即购买</button>
         </router-link>
      </van-col>
    </van-row>
 </div>
</template>


<script>
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'App_index',
  data () {
    return {
    	search_value:[],
    	tabList:["推荐","小米816","手机","智能","电视","笔记本","家电","生活周边"],
    	menu_list: [
    	{ text: '全部', value: 0 },
        { text: '推荐', value: 1 },
        { text: '小米816', value: 2 },
        { text: '手机', value: 3 },
        { text: '智能', value: 4 },
        { text: '电视', value: 5 },
        { text: '笔记本', value: 6 },
        { text: '家电', value: 7 },
        { text: '生活周边', value: 8 }
      ],
      swipeImgUrl:[
      				"static/img/banner/banner1.jpg",
      			  	"static/img/banner/banner2.jpg",
      			  	"static/img/banner/banner3.jpg"
      			  ],
      girdImgUrl:{},
      products:{},
	  }
  },
  mounted(){
  	//从数据库获取数据
  	this.$axios.get('http://localhost:8081/productTypeUl')
   .then( _d =>{
         this.girdImgUrl=_d.data
    })
    .catch((err)=>{
      console.log(err)
      alert("加载失败！")
    }),
    this.$axios.get('http://localhost:8081/products')
   .then( _products =>{
         this.products=_products.data
    })
    .catch((err)=>{
      console.log(err)
      alert("加载失败！")
    })
  },
  methods:{
    ...mapActions(['detailFn'])
  }
}
</script>

<style>
.nav{
	width:100%;background:#f2f2f2;height:0.75rem;position:relative;
  text-align:center;
}
.logo_left,.logo_right{
	position: absolute;background:#f2f2f2;
  width:1rem;height:0.5rem;margin-top:0.2rem;
}
.logo_left img{
  width:45%;
}
.logo_left{
	left:0;
}

.logo_right{
  right:0;
}
.logo_right img{
 width:40%;
}
.search{
  position: absolute;left:0.9rem;right:0.9rem;
}
.van-search {
    padding:0;margin:0.06rem 0rem 0.05rem 0.05rem;
}
.van-search__content {
    background-color:white;
}
.tab{
	background:#f2f2f2;position:relative;
}

.van-tabs--line .van-tabs__wrap {
    height: .55rem;
}
.van-tab {
    line-height: .55rem;background:#f2f2f2;flex-basis: 18.9%!important;
    font-size: 13px;
}
.van-tab--active {
    color: rgb(237, 91, 0);
    font-weight: 500;
}
.van-tabs__line {
	background-color: rgb(237, 91, 0);
}
.dropdownMenu{
	display:inline-block;
}
.van-tabs__wrap--scrollable .van-tab {
    -webkit-box-flex: 0;-webkit-flex: 0 0 18.9%;flex: 0 0 18.9%;
}
.van-dropdown-menu {
    height: 0px;
}
.van-dropdown-menu__title::after {
    position: absolute;top: 0px;opacity: .3;right: -5px;
}
.van-dropdown-item {top:0.83rem!important;}
.van-popup--top {
    width: 100%; background-color:#f2f2f2;padding:0.09rem 0rem;
}
.van-popup > .van-cell{
    left: 0;padding: 0.05rem 0.01rem;font-size: 13px;
    width: 20%;display:inline-block;border-radius: 4px;
    background-color:white;margin:0.06rem 0.1rem;
}
.van-popup > .van-cell:first-child{
    left: 0;font-size: 15px;border-radius: 4px;
    width: 16%;display:block;margin-bottom:0.1rem;
    background-color:#f2f2f2;
}
.van-popup > .van-cell:active{
 	border:1px solid #ff6700;background-color: #fde0d5;
    color: #ff6700;border-radius: 4px;
}
.van-popup > .van-cell:first-child:active{
 	border:none;background-color:#f2f2f2;
    border-radius: 4px;color:#323233
}
.van-swipe-item img{
	top:50%;left:50%;width: 100%;height: auto;
}
.van-grid-item__content--center img{
	display: block;
    width: 100%;
    height: auto;
}
.van-grid-item__content{
	padding:0rem;
}
[class*=van-hairline]::after{
	border:none;
}
.product{
  height: 2.8rem;margin-bottom:2.5rem;text-align:center;
}
.product img{
  width: 90%;
  height: 90%;
}
.product h3{
  font-size: .28rem;line-height: .06rem;
  color: rgba(0,0,0,.87)
}
.product p{
  margin-top: .06rem;font-size: .22rem;line-height: .06rem;
  color: rgba(0,0,0,.54);
}
.product span{
  font-size: .28rem;color: #ea625b;height: 0.23rem;
  line-height: 0.23rem;position: relative;
  display: block
}
.product button{
  width: 2rem;background: #ea625b;border-radius: .05rem;
  text-align: center;color: #fff;font-size: .24rem;
  padding: .16rem 0;font-weight: 700;
}
</style>
