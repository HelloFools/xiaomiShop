// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/rem'
import './assets/reset.css'
import axios from 'axios'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'


import { Row, Col,Search,Tab, Tabs, DropdownMenu, DropdownItem,Swipe, SwipeItem,Grid, GridItem,GoodsAction,
		GoodsActionIcon,GoodsActionButton,Tabbar,Button,TabbarItem,Sku,AddressEdit,Area,Popup,Notify,Card,
		NavBar,Icon,Tag, Collapse,CollapseItem,ActionSheet,SubmitBar    } from 'vant';

Vue.use(Row).use(Col).use(Search).use(Tab).use(Tabs).use(DropdownMenu).use(DropdownItem)
   .use(Swipe).use(SwipeItem).use(Grid).use(GridItem).use(GoodsAction).use(GoodsActionIcon)
   .use(GoodsActionButton).use(Tabbar).use(TabbarItem) .use(GoodsAction).use(GoodsActionIcon)
   .use(GoodsActionButton).use(Sku).use(AddressEdit).use(Button).use(Area).use(Popup).use(Notify)
   .use(Card).use(NavBar).use(Icon).use(Tag).use(Collapse).use(CollapseItem).use(ActionSheet).use(SubmitBar);

Vue.config.productionTip = false
Vue.prototype.$axios = axios
 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
