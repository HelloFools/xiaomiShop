<template>
  <div>
    <!-- 产品轮播图 -->
    <van-row class="return">
      <a href="" @click="returnFn"></a>
      <van-swipe :autoplay="6000" class="shuffling">
      <van-swipe-item v-for="(image, index) in goodsDetail.aboutPhoto" :key="index">
          <img :src="image" />
      </van-swipe-item>
      </van-swipe>
    </van-row>

    <!-- 产品参数及介绍 -->
    <div class="product_about">
      <h3>{{goodsDetail.name}}</h3>
      <p>{{goodsDetail.about}}</p>
      <h5>¥ {{goodsDetail.price}}</h5>
    </div>

    <!-- 商品规格及其配送地址选择 -->
    <div class="addProduct">
       <van-sku
        v-model="detailShow"
        :sku="goodsDetail.sku"
        :goods="goodsDetail.sku.goods"
        :goods-id="goodsDetail._id"
        :quota-used="quotaUsed"
        :initial-sku="goodsDetail.sku.initialSku" 
        @buy-clicked="onBuyClicked"
        @add-cart="onAddCartClicked"
      />
      <div class="specifications" @click="detailShowFn(goodsDetail)" :model="confirmProduct">
        <span>已选：</span>
        <span>&nbsp;{{goodsDetail.name}}</span>
        <span>&nbsp;&nbsp;{{confirmProduct.color}}</span>
        <span>&nbsp;&nbsp;{{confirmProduct.size}}</span>
      </div>
      <div class="address" >
        
        <div @click="showPopup">
          <span >送至：</span>
          <span>{{addreesValue[0]}}</span>
          <span>{{addreesValue[1]}}</span>
          <span>{{addreesValue[2]}}</span>
        </div> 
        <van-popup v-model="adressShow" position="bottom">
            <van-area :area-list="areaList" @confirm="onAddrConfirm" @cancel="addressShow"/>
          </van-popup>
      </div>
      <div class="xiaoMiAbout">
        <span>小米自营</span>`
        <span>小米发货</span>
        <span>七天无理由退货</span>
      </div>
    </div>

    <!-- 购买底部导航栏 -->
    <van-row>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        
        <router-link to="/shop" >
          <van-goods-action-icon icon="cart-o" text="购物车"/>
        </router-link>
        <van-goods-action-button type="warning" text="加入购物车" @click="detailShowFn"/>
        <van-goods-action-button type="danger" text="立即购买" @click="detailShowFn"/>
      </van-goods-action>
    </van-row>
  </div>
</template>
<script>
import {mapActions,mapGetters} from 'vuex'
import AreaList from '../../assets/area.js'
export default{
  name:'App_detail',
  data(){
    return{
      quotaUsed:0,    //已经购买过的数量
      productNum:0,      //已选商品数量
      areaList:AreaList,
    }
  },
  mounted(){},
  computed:{
     ...mapGetters(['goodsDetail','confirmProduct','detailShow','adressShow','addreesValue']),
    detailShow:{    
       get: function() {
          return this.$store.state.shop.detailShow
       },
      set: function (newValue) {
         this.$store.state.shop.detailShow = newValue;
      }
    },
    adressShow:{    
       get: function() {
          return this.$store.state.shop.adressShow
       },
      set: function (newValue) {
         this.$store.state.shop.adressShow = newValue;
      }
    },
  },
  methods:{
    //映射到vuex的返回上级按钮方法
     ...mapActions(['returnFn','onBuyClicked','onAddCartClicked','detailShowFn','onAddrConfirm','showPopup','addressShow']),
  }
}
</script>

<style>
.return a{
  display: block;width: .6rem;height: .6rem;margin-top:.2rem;
  margin-left:.2rem;color: #ddd;background: rgba(0,0,0,.6);
  border-radius: 50%;
}
.shuffling{
  margin-top:-.8rem;z-index:-1;
}
.product_about{
  margin:.3rem .18rem;font-weight: initial;
}
.product_about h3{
  text-align:left;margin:0;font-size:.35rem;
}
.product_about p{
  text-align:left;margin:0;color: rgba(0,0,0,.54);
  word-break: break-all;
}
.product_about h5{
 text-align:left;font-size:.35rem;color: #ff6700;margin:0
}
.specifications,.address,.xiaoMiAbout{
  position: relative;text-align: left;padding:.1rem .2rem!important;
  font-size: .22rem!important;height:.32rem;
}
.van-swipe-item img {
  top: 0;left: 0;width: 100%;height: auto;
}
.addProduct{
  background-color: #fafafa;margin: .16rem .32rem 0;
  border-radius: .16rem;overflow: hidden;margin-bottom:.95rem;
}
.van-sku-row__item{
  background-color:white!important;
}
.van-sku-row__item--active{
  color:#323233!important;border:.01rem solid #f56600;
}
.van-popup--top {
    top: 50%!important;
    left: 30%!important;
    width: 40%!important;
    font-size:15px;
    border-radius:.5rem!important;
}
</style>