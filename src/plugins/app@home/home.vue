<template>
  <ion-page class="container">
    <a-header/>
    <ion-content>
      <z-stories-list/>
      <div v-for="post in TrendingPosts" :key="post.id">
        <z-post
            :name="post.user"
            :avatar="post.avatar"
            :picture="post.picture"
            :likes="post.likes"
            :post="post.content"
            class="ion-margin-bottom"
        />
      </div>
    </ion-content>
    <a-footer @someEvent="scrollToTop"/>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from '@ionic/vue'
import AHeader from "@/plugins/app/_layout/a-header.vue";
import AFooter from "@/plugins/app/_layout/a-footer.vue";
import ZPost from "@/plugins/app/_components/z-post/z-post.vue";
import { TrendingPosts } from "@/app_data/posts";
import ZStoriesList from "@/plugins/app/_components/z-stories-list.vue";

export default {
  name: 'Home',
  components: {ZStoriesList, ZPost, AFooter, AHeader, IonPage, IonContent},
  data(){
    return {
      TrendingPosts
    }
  },
  methods: {
    scrollToTop() {
      const pointTop = document.querySelector('ion-content');
      pointTop.scrollToTop(500);
    }
  }
}
</script>

<style scoped>

</style>