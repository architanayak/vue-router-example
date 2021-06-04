import Vue from 'vue'
import VueRouter from 'vue-router'
import Posts  from "../components/pages/Posts.vue";
import PostDetails  from "../components/pages/PostDetails.vue";
import PageNotFound from "../components/pages/PageNotFound.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/', redirect: '/posts'
  },
  {
    path: '/posts',
    component: Posts,
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
