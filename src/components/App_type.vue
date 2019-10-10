<template>
 <div class="warp">
		<!-- 导航栏以及搜索栏-->
    <van-row class="navWarp">
      <van-col class="type_logoLeft">
        <router-link to="/" >
          <img src="static/img/banner/return.png">
        </router-link>
      </van-col>
      <van-col class="type_span"><span>分类</span></van-col>

      <van-col class="type_logoRight">
        <router-link to="search">
          <img src="static/img/banner/search.png">
        </router-link>
      </van-col>
    </van-row>
  	
    <van-row :model="tabList,products" class="type">
      <van-col span="6">
        <ul class="type_name" >
          <li v-for="(type,inx) in tabList">
            <a href="javascript:void(0);" @click="goAnchor(type.typeUrl)"><h3>{{type.name}}</h3></a>
          </li>
        </ul>
      </van-col>
      <van-col span="18">
        <ul class="product">
          <li v-for="(name,inx) in tabList" :key="inx" >
            <h3 :id="('A'+(++inx))" class="product_title">{{name.name}}</h3>
            <van-grid :column-num="3">
              <van-grid-item v-for="(type,inx) in products" :key="inx" border="false">
                <router-link to="detail">
                  <a href="" @click="detailFn(type,return_value)">
                    <img :src="type.typePhoto">
                    <span>{{type.name}}</span>
                  </a>
                </router-link>
             </van-grid-item>
           </van-grid>
          </li>
        </ul>
      </van-col>
    </van-row>
 </div>
</template>

<script>
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'App_type',
  data () {
    return {
    	search_value:[],
      products:{},
      productList:[
        "telephone","TV","computer"
      ],
    	tabList:[
      {name : "新品" , link : "#1" , typeUrl:"#A1"},
      {name : "众筹" , link : "#2" , typeUrl:"#A2"},
      {name : "手机" , link : "#3" , typeUrl:"#A3"},
      {name : "电视" , link : "#4" , typeUrl:"#A4"},
      {name : "电脑" , link : "#5" , typeUrl:"#A5"},
      {name : "家电" , link : "#6" , typeUrl:"#A6"},
      {name : "厨电" , link : "#7" , typeUrl:"#A7"},
      {name : "穿戴酷玩" , link : "#8" , typeUrl:"#A8"},
      {name : "家居家装" , link : "#9" , typeUrl:"#A9"},
      {name : "电脑插座" , link : "#10" , typeUrl:"#A10"},
      {name : "出行车载" , link : "#11" , typeUrl:"#A11"},
      {name : "耳机音箱" , link : "#12" , typeUrl:"#A12"},
      {name : "路由器" , link : "#13" , typeUrl:"#A13"},
      {name : "个护健康" , link : "#14" , typeUrl:"#A14"},
      {name : "日用百货" , link : "#15" , typeUrl:"#A15"},
      {name : "床品家具" , link : "#16" , typeUrl:"#A16"},
      {name : "配件线材" , link : "#17" , typeUrl:"#A17"},
      {name : "办公用品" , link : "#18" , typeUrl:"#A18"},
      ],
      return_value:'type',
	   }
  },
  mounted(){
  	//从数据库获取数据
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
    //复写router锚点链接
    goAnchor(selector) {
      // console.log(selector)
        var anchor = document.querySelector(selector)           // 参数为要跳转到的元素id
        anchor.scrollIntoView(true)                             //让当前的元素滚动到浏览器窗口的可视区域内
        console.log(anchor.offsetTop);
        document.body.scrollTop = anchor.offsetTop;             // chrome
        document.documentElement.scrollTop = anchor.offsetTop;  // firefox

        // document.querySelector(selector).scrollIntoView(true)
    },
    ...mapActions(['detailFn'])
  }
}
</script>

<style>
.navWarp{
  position:fixed;height:0.85rem;line-height:0.85rem;
  background-color:#f2f2f2;width:100%;z-index:999;
}
.type_logoLeft{
  width:10%;
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
.type{padding-top:0.85rem;}
.product_title{
  position:relative;
  margin:.3rem 0;
}
.product_title:before{
  content: "";
  position: absolute;
  top: 50%;
  width: .4rem;
  border-top: 1px solid #e0e0e0;
  transform: translate3d(-150%,-10%,0);
  -webkit-transform: translate3d(-150%,-10%,0);
}
.product_title:after{
  content: "";
  position: absolute;
  top: 50%;
  let:0;
  width: .4rem;
  border-top: 1px solid #e0e0e0;
  transform: translate3d(50%,-50%,0);
  -webkit-transform: translate3d(50%,-50%,0);
}
.product li{
  position:relative;
  margin:1rem auto;
}
.product li:first-child{
  position:relative;
  margin-top:0;
}
.product a span{
  font-size: .18rem;color: black!important;height: 0.31rem;width:83%;
  line-height: 0.31rem;position: relative;margin:.05rem auto;
  display: block
}
.product li a img{
  width:70%;
  display:block;
  margin:auto;
  margin-bottom:.2rem;
}

.type_name{
  height:88%;
  overflow:scroll;
  position:absolute;
  padding:0rem .2rem;
  border-right:1px solid #E9D6D6;
}
.type_name li{
  font-size: .18rem;
  height: .62rem;
  line-height: .62rem;
}
.type_name::-webkit-scrollbar {
  width: 0px;    
}
.type_name::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 0px rgba(0,0,0,0.2);
  background: rgba(0,0,0,0.2);
}
.type_name::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 0px rgba(0,0,0,0.2);
  border-radius: 0;
  background: rgba(0,0,0,0.1);
}
</style>
