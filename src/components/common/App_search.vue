<template>
	<div class="order">
		<van-row class="nav">
			<van-col class="logo_left searchValue">
				<a href="" @click="returnFn">
					<img src="static/img/banner/return.png">
				</a>
			</van-col>
			<van-col class="logo_right searchValue">
	       		<img src="static/img/banner/search.png">
			</van-col>
	     	<router-link to="search">
		        <van-col class="search" >
		         	 <van-search
					    v-model="value"
					    placeholder="搜索商品名称"
					    @search="onSearch(value,prodcutList)"
					  />
		        </van-col>
	      	</router-link>
		</van-row>
	</div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
import AreaList from '../../assets/area.js'
export default{
  name:'App_search',
  data(){
    return{value:''}
  },
  mounted(){},
  computed:{
    
  },
  methods:{
    ...mapActions(['returnFn','onSearch']),
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
.searchValue{
	margin-top:.15rem!important;
}
</style>