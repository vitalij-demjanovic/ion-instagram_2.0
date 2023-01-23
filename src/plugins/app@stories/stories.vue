<template >
  <ion-page class="container">
    <ion-content>
      <swiper
          @swiper="getRef"
          @slideChange="onSlideChange"
      >
        <swiper-slide v-for="stor in TrendingPosts" :key="stor.id">
          <story :story-item="stor.picture" :progressValue="slideValue" @click="swiper.value.slideNext(1000)"/>
        </swiper-slide>
      </swiper>
    </ion-content>
  </ion-page>
</template >

<script >
import {ref} from "vue";
import { IonPage, IonContent } from "@ionic/vue";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue'
import Story from "@/plugins/app@stories/_components/story.vue";
import { TrendingPosts } from "@/app_data/posts";
import 'swiper/swiper-bundle.min.css'


export default {
  name: "stories",
  components: { Story, IonPage, IonContent, Swiper, SwiperSlide },
  data() {
    return {
      TrendingPosts,
      slideValue: 0,
      swiper: ref(null)
    }
  },
  methods: {
    getRef (swiperInstance) {
      this.swiper = swiperInstance
    },
    progressCall() {
      this.slideValue = 0
      setInterval(() => {
        this.slideValue += 0.01;

        // Reset the progress bar when it reaches 100%
        // to continuously show the demo
        if (this.slideValue > 1) {
          this.swiper.slideNext()
          setTimeout(() => {
            this.slideValue = 0;
          }, 1000);
        }
      }, 50);
    },
    onSlideChange() {
      this.progressCall()
    }
  },
  mounted() {
    this.progressCall()
  }
}
</script >

<style scoped >

</style >