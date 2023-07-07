import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import PageHome from '@/views/PageHome.vue'
import ThreadShowView from '@/views/ThreadShowView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import ForumView from '@/views/ForumView.vue'
import CategoryView from '@/views/CategoryView.vue'
import sourceData from '@/data.json'  

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // component: HomeView
      component: PageHome
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
      path: '/forums/:id',
      name: 'forum',
      component: ForumView,
      props: true
    },
    {
      path: '/categories/:id',
      name: 'category',
      component: CategoryView,
      props: true
    },
    {
      path: '/threads/:id',
      name: 'ThreadShow',
      component: ThreadShowView,
      props: true,
      beforeEnter(to, from, next){  // to redirect the request if thread not exists - url changes so user doesnt know what was there
        //code here will run before router allows the user to enter this route
        //1. check if thread exists
        const threadExists = sourceData.threads.find(t => t.id === to.params.id)
        //2. if exists continue
        if (threadExists) {
          return next()
        }
        //3. if not redirect to not found page 
        else {
          // next({name: 'NotFound'}) //in this approach url changes so user doesnt know what it was
          next({
            name: 'NotFound',
            // preserve current path and remove the first char to avoid the target URL starting with `//`
            params: { pathMatch: to.path.substring(1).split('/') },
            // preserve existing query and hash if any
            query: to.query, //this.$route = to
            hash: to.hash
          }) 
        }
      } 
    },
    { 
      // registered routes prioritize pathMatch
      path: '/:pathMatch(.*)*',
      name: 'NotFound', 
      component: NotFoundView 
    },
  ]
})

export default router
