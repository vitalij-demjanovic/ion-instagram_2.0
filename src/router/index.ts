import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from "@/plugins/app@home/home.vue";
import Direct from "@/plugins/app@direct/direct.vue";
import Search from "@/plugins/app@search/search.vue";
import Profile from "@/plugins/app@profile/profile.vue";
import User from "@/plugins/app@user/user.vue";
import Chat from "@/plugins/app@chat/chat.vue";
import Stories from "@/plugins/app@stories/stories.vue";

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
  {
    path: '/chat/:username',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/stories',
    name: 'Stories',
    component: Stories

  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
