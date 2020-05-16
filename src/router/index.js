import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    // 避免用户在第一次使用时,没有songid而报错
    beforeEnter: (to, from, next) => {
      if (!sessionStorage.getItem('songid')) {
        let songid = []
        songid = JSON.stringify(songid)
        sessionStorage.setItem('songid', songid)
      }
      next()
    },
    children: [
      // 歌单
      { path: '/sheet', component: () => import('../components/Gedan/Sheet.vue') },
      // 排行榜
      { path: '/ranking', component: () => import('../components/Ranking/Ranking.vue') },
      //歌手
      { path: '/singer', component: () => import('../components/Singer/Singer.vue') }
    ]
  },
  // 歌单详情
  { path: '/sheet/:id', component: () => import('../components/Gedan/Sheetdetails.vue') },
  // 排行榜详情
  { path: '/ranking/:id', component: () => import('../components/Ranking/Rankingdetail.vue') },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import(/* webpackChunkName: "about" */ '../views/User.vue')
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import(/* webpackChunkName: "about" */ '../views/Message.vue')
  },
  // 公共组件
  {
    path: '/detail',
    component: () => import('../components/Common/Detail.vue')
  },
  {
    path: '/songdetail/:id',
    component: () => import('../components/Common/Songdetail.vue'),
    beforeEnter: (to, from, next) => {
      // eslint-disable-next-line no-undef
      store.state.showfooter = false
      next()
    }
  },
  {
    path: '/playhistory',
    component: () => import('../components/Popup/Playhistory.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
