import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Entrance from '@/components/Entrance'
import Houses from '@/components/houses/index'
import Owners from '@/components/owners/index'
import Gauards from '@/components/guards/index'
import MainFrame from '@/components/MainFrame'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Entrance
    },
    {
      path: '/:cid',
      component: Entrance,
      beforeEnter (to, from, next) {
        // 判断是否为小区
        if (to.params.cid.match(/^\d*$/g)) {
          console.log(to.params.cid)
          next()
        } else {
          console.log('cid不对')
          next('/')
        }
      }
    },
    {
      path: '/:cid',
      component: MainFrame,
      beforeEnter (to, from, next) {
        // 判断是否为小区
        if (to.params.cid.match(/^\d*$/g)) {
          console.log(to.params.cid)
          next()
        } else {
          console.log('cid不对')
          next('/')
        }
      },
      children: [
        {
          path: 'houses',
          component: Houses,
          name: 'houses'
        },
        {
          path: 'owners',
          component: Owners
        },
        {
          path: 'guards',
          component: Gauards
        }
      ]
    }
    // {
    //   path: '/123/houses',
    //   component: HouseManage,
    //   beforeEnter (to, from, next) {
    //     console.log('11111n', to)
    //     next()
    //   }
    // }
  ]
})
