import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/',
      name: 'feed',
      component: () => import('../views/FedsView.vue'),
      meta:{
        auth:true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    }
  ]
})

router.beforeEach((to, from, next)=> {
  const token = localStorage.getItem('token');
  const isAuth = token != null;

  if(to.matched.some(e => e.meta.auth)) {
    if (isAuth) {
      next();
    }else{
      next('/login');
    }
  }else if(to.fullPath === '/login' && isAuth) {
    router.back();
  }else{
    next();
  }
});

export default router
