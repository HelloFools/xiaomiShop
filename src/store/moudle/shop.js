import { Notify } from 'vant';
//获取数据
const state={
	// 已选中商品
	goodsDetail:[],		//已选中的商品
	//底部路径选择四大块
	roterShow:true,			//主菜单的显示
	confirmProduct:{},   //已确认商品
	detailShow:false,	//显示格式半边弹窗
	adressShow:false,	//商品详情中的地址选择半边遮罩
    addreesValue:[],	//商品详情中已选中地址
    cartphotoShow:true,		//取消购物车为空
    cartProduct:[],		//加入购物车中的商品
    summary:{			//购物车的产品总数及其总价
    	num : 0,
	    price : 0,
    },	
    settlement:[]			//正在结算的商品，尚未付款
}
//对外数据接口
const getters={
	//已选中的商品
	goodsDetail : state => state.goodsDetail,
	//主菜单的显示
	roterShow : state => state.roterShow,
	//已确认商品
	confirmProduct : state => {
		return {
			color: state.goodsDetail.sku.tree[0].v[0].name,
			size: state.goodsDetail.sku.tree[1].v[0].name
		}
	},
	//显示格式半边弹窗
	detailShow : state => state.detailShow,
	//商品详情中的地址选择半边遮罩
	adressShow	: state =>state.adressShow,
	//商品详情中已选中地址
	addreesValue	: state =>state.addreesValue,
	//取消购物车为空
	cartphotoShow : state=>state.cartphotoShow,
	//加入购物车中的商品
	cartProduct : state=>state.cartProduct,
	//购物车中的总数量
	summaryNum : state => {
		let _num = 0;
		state.cartProduct.forEach( n=> {
			// console.log(_num.num)
			_num += n.num
		})
		return _num
	},
	//购物车中的总价格
	summaryPrice : state => {
		let _price = 0;
		state.cartProduct.forEach( n=> {
			_price += n.num * n.price
		})
		return _price
	},
	settlementSummaryPrice : state => {
		let _price = 0;
		state.settlement.forEach( n=> {
			_price += n.num * n.price
		})
		return _price
	},
	settlement : state=>state.settlement,
}
//向mutations发送请求
const actions={
	detailFn({commit},value){
		// console.log(value)
		commit('goodsDetailFn',value)
	},
	//通过history返回上一级路径
	returnFn({commit}){
		commit('returnOnceFn')
	},
	//确定购买商品
	onBuyClicked({commit},data){
		commit('onBuyClickedFn',data);
		// console.log(data)
	},
	//选择商品规格后，加入购物车
	onAddCartClicked({commit},data){
		commit('onAddCartClickedFn',data);
	},
	//商品详情规格弹窗显示
	detailShowFn({commit},_products){
      // console.log(_products)
     	commit('detailTypeShowFn',_products);
    },
    //确定选择的配送地址
    onAddrConfirm({commit},_address){
      // console.log(_products)
     	commit('onAddrConfirmFn',_address);
    },
    //显示配送地址选择半遮罩层
    showPopup({commit}){
     	commit('showPopupFn')
    },
    //取消选择配送地址
    addressShow({commit}){
		commit('addressShowFn')
    },
    //增加购物车内的单个商品的数量
    addFn({commit},cartValue){
    	commit('addNumFn',cartValue)
    },
    //增加结算页面内的单个商品的数量
    settlementAddFn({commit},settlementValue){
    	console.log(settlementValue)
    	commit('settlementAddNumFn',settlementValue)
    },
    //减少结算页面内的单个商品的数量
    settlementMinFn({commit},settlementValue){
    	console.log(settlementValue)
    	commit('settlementMinNumFn',settlementValue)
    },
    //减少购物车内的商品单个数量
    minFn({commit},cartValue){
    	commit('minNumFn',cartValue)
    },
    //直接删除购物车内的单个商品
    deleteFn({commit},cartValue){
    	commit('clearFn',cartValue)
    },
    //购物车返回主页面方法
    returnIndex({commit}){
    	commit('returnIndexFn')
    },
    //购物车结算方法
    shopBuyClick({commit}){
    	commit('shopBuyClickFn')
    },
    onSearch({commit},searchValue){
    	
    	commit('onSearchFn',searchValue,productList)
    }
}
//方法执行
const mutations={
onSearchFn(state,searchValue,productList){
		console.log(searchValue+productList)
		
	},	// 选中商品添加到vuex数据管理中
	goodsDetailFn(state,value){
		// console.log(value)
		state.goodsDetail=[];
		state.goodsDetail=value;
		state.roterShow=false;
	},
	//根据历史记录返回上一级路径
	returnOnceFn(state){
		window.history.back(-1); 
		state.roterShow = true
	   	// console.log('sss')
	},
	//跳转购物车
	productCartFn(state){
		state.roterShow=false;
		for(let n = 0; n < state.cartProduct.length; n++){
	    	// console.log(state.cartProduct[n].num) 
	    	
	    	state.summary.price += state.cartProduct[n].price * state.cartProduct[n].num;
	    	
	    	state.summary.num += state.cartProduct[n].num
	    }
	    console.log(state.summary)
	},
	//确定购买商品
	onBuyClickedFn(state,data){
		let color_value = state.goodsDetail.sku.tree[0].v;
	    let size_value = state.goodsDetail.sku.tree[1].v
	    // console.log(data.selectedSkuComb);
	    //已经匹配到的产品型号颜色
	    let product_color =  color_value.find( n => n.id == data.selectedSkuComb.s1);
	    //已经匹配到的产品型号
	    let product_size =  size_value.find( n => n.id == data.selectedSkuComb.s2);
	    state.settlement =[];
	    state.settlement.push( {
	    	    	id : state.goodsDetail._id,
	    	    	name : state.goodsDetail.name,
	    	    	color: product_color.name,
	    	    	size : product_size.name,
	    	    	about : state.goodsDetail.about,
	    	    	aboutPhoto : state.goodsDetail.aboutPhoto,
	    	    	price : data.selectedSkuComb.price/100,
	    	    	num : data.selectedNum,
	    	    	typePhoto : state.goodsDetail.typePhoto,
	    	    	address : state.addreesValue
	    	    })
	    state.settlement.color = product_color.name;
	    state.settlement.size = product_size.name;
	    console.log(state.addreesValue);
	    state.detailShow = false;
	    window.location.href="#/settlement";
	},
	shopBuyClickFn(state){
		state.settlement = [];
		if(state.cartProduct.length == 0){
			Notify({
		        type: 'warning',
		        message: '请先添加商品',
		        color:'white',
		        background:'black',
		        duration: 100000
		    });
		}else{
			state.settlement = state.cartProduct;
			window.location.href="#/settlement";
		}
		
	},
	//选择商品规格后，加入购物车
	onAddCartClickedFn(state,data){
		let color_value = state.goodsDetail.sku.tree[0].v;
	    let size_value = state.goodsDetail.sku.tree[1].v
	    // console.log(state.goodsDetail);
	   	// console.log(data);

	    //已经匹配到的产品型号颜色
	    let product_color =  color_value.find( n => n.id == data.selectedSkuComb.s1);
	    //已经匹配到的产品型号
	    let product_size =  size_value.find( n => n.id == data.selectedSkuComb.s2);
	    state.cartProduct.push({
	    	    	id : state.goodsDetail._id,
	    	    	name : state.goodsDetail.name,
	    	    	color: product_color.name,
	    	    	size : product_size.name,
	    	    	about : state.goodsDetail.about,
	    	    	aboutPhoto : state.goodsDetail.aboutPhoto,
	    	    	price : data.selectedSkuComb.price/100,
	    	    	num : data.selectedNum,
	    	    	typePhoto : state.goodsDetail.typePhoto,
	    	    })
	    state.goodsDetail.sku.tree[0].v[0].name = product_color.name;
	    state.goodsDetail.sku.tree[1].v[0].name = product_size.name;
	    // state.confirmProduct
	    console.log( state.confirmProduct);
	    state.detailShow = false;
	    
	    Notify({
	        type: 'warning',
	        message: '已加入购物车',
	        color:'white',
	        background:'black',
	        duration: 1000
	    });
	    state.cartphotoShow = false;
	},
	//商品详情规格弹窗显示
	detailTypeShowFn(state,_products){
		state.detailShow = true
		// console.log(state.detailShow)
	},
	//确定选择的配送地址
	onAddrConfirmFn(state,_address){
		let address = _address;
	    state.addreesValue = [];
	    // console.log(address);
	    for(var _a in address){
	    	state.addreesValue.push(address[_a].name);
	    }
	    // console.log(this.addreesValue)
	    state.adressShow = false;
	},
	//显示配送地址选择半遮罩层
	showPopupFn(state){
		state.adressShow = true; 
	},
	//取消选择配送地址
	addressShowFn(state){
		state.adressShow = false;
	},
	//增加购物车内的单个商品的数量
	addNumFn(state,cartValue){
		console.log(cartValue.id);
		let _n = state.cartProduct.find( n=> n.id == cartValue.id)
		console.log(_n);
		if(_n.num > 0){
			_n.num++
		}
	},
	//增加结算页面内的单个商品的数量
	settlementAddNumFn(state,settlementValue){
		console.log(settlementValue.id==state.settlement.id);
		let _n = state.settlement.find( n=> n.id == settlementValue.id)
		console.log(_n);
		if(_n.num > 0){
			_n.num++
		}
	},
	//减少结算页面内的单个商品的数量
	settlementMinNumFn(state,settlementValue){
		console.log(settlementValue.id);
		let _n = state.settlement.find( n=> n.id == settlementValue.id)
		console.log(_n);
		if(_n.num > 1){
			_n.num--
		}else{
			state.settlement.forEach(( n , i)=>{
		        if(n.id == settlementValue.id){
		          state.settlement.splice(i,1);

		        }
		    })
		}
	},
	//减少购物车内的商品单个数量
	minNumFn(state,cartValue){
		console.log(cartValue.id);
		let _n = state.cartProduct.find( n=> n.id == cartValue.id)
		console.log(_n);
		if(_n.num > 1){
			_n.num--
		}else{
			state.cartProduct.forEach(( n , i)=>{
		        if(n.id == cartValue.id){
		          state.cartProduct.splice(i,1);

		        }
		    })
		}
	},
	//直接删除购物车内的单个商品
	clearFn(state,cartValue){
		state.cartProduct.forEach(( n , i)=>{
		    if(n.id == cartValue.id){
		        state.cartProduct.splice(i,1);
		    }
		})
	},
	//购物车返回主页面方法
	returnIndexFn(state){
		state.roterShow = true;
	}
}
export default{
	state,
	mutations,
	actions,
	getters,
	
}