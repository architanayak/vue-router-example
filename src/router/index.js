import Vue from 'vue'
import VueRouter from 'vue-router'
import AllPosts  from "../components/AllPosts.vue";
import PostDetails  from "../components/PostDetails.vue";
import PageNotFound from "../components/PageNotFound.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/', redirect: '/posts'
  },
  {
    path: '/posts',
    component: AllPosts,
  },
  {
    path: '/posts/:id', 
    component: PostDetails
  },
  {
    path: '*', component: PageNotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
