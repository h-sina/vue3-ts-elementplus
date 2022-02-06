import { ElMessage } from 'element-plus';
import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
} from 'vue-router';

import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta:{ requiresAuth:true}
  },
  {
    path: '/articles',
    name: 'articles',
    component: () => import(/* webpackChunkName: "about" */ '../views/Articles.vue')
  },
  {
    path: '/archive',
    name: 'archive',
    component: () => import(/* webpackChunkName: "about" */ '../views/Archive.vue')
  },
  {
    path: '/timeline',
    name: 'timeline',
    component: () => import(/* webpackChunkName: "about" */ '../views/Timeline.vue')
  },
  {
    path: '/project',
    name: 'project',
    component: () => import(/* webpackChunkName: "about" */ '../views/Project.vue')
  },
  {
    path: '/message',
    name: 'message',
    component: () => import(/* webpackChunkName: "about" */ '../views/Message.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const auth = ['/articles', '/archive','/timeline', '/project', '/message', '/about']
  if (auth.includes(to.fullPath)) {
    console.log(window.sessionStorage.userInfo)
    if (window.sessionStorage.userInfo==undefined) {
      ElMessage({message: "请先登录", type: 'warning'});
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
