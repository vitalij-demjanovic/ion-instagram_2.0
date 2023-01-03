import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from "@/plugins/app@home/home.vue";
import Direct from "@/plugins/app@direct/direct.vue";
import Search from "@/plugins/app@search/search.vue";
import Profile from "@/plugins/app@profile/profile.vue";
import User from "@/plugins/app@user/user.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/direct',
    name: 'Direct',
    component: Direct
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/:username',
    name: 'User',
    component: User
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
