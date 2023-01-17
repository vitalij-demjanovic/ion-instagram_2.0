<template >
  <ion-page class="container">
    <ion-content>
      <swiper :autoplay='{
            "delay": 2500,
            "disableOnInteraction": false
          }'>
        <swiper-slide v-for="stor in TrendingPosts" :key="stor.id">
          <story :story-item="stor.picture"/>
        </swiper-slide>
      </swiper>
    </ion-content>
  </ion-page>
</template >

<script >
import { IonPage, IonContent } from "@ionic/vue";
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.min.css'
import Story from "@/plugins/app@stories/_components/story.vue";
import { TrendingPosts } from "@/app_data/posts";
import SwiperModule, { Autoplay } from 'swiper'

SwiperModule.use([Autoplay])

export default {
  name: "stories",
  components: {Story, IonPage, IonContent, Swiper, SwiperSlide },
  data() {
    return {
      TrendingPosts,
    }
  }
}
</script >

<style scoped >

</style >