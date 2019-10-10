import Vue from 'vue'
import Router from 'vue-router'
import App_index from '@/components/App_index'
import App_type from '@/components/App_type'
import App_shop from '@/components/App_shop'
import App_user from '@/components/App_user'
import App_detail from '@/components/common/App_detail'
import App_order from '@/components/common/App_order'
import App_settlement from '@/components/common/App_settlement'
import App_search from '@/components/common/App_search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App_index',
      component: App_index
    },
    {
      path: '/type',
      name: 'App_type',
      component: App_type
    },
    {
      path: '/shop',
      name: 'App_shop',
      component: App_shop
    },
    {
      path: '/user',
      name: 'App_user',
      component: App_user
    },
    {
      path: '/detail',
      name: 'App_detail',
      component: App_detail
    },
    {
      path: '/order',
      name: 'App_order',
      component: App_order
    },
    {
      path: '/settlement',
      name: 'App_settlement',
      component: App_settlement
    },
    {
      path: '/search',
      name: 'App_search',
      component: App_search
    }
  ]
})
