<template >
  <ion-page class="container" >
    <ion-content>
      <swiper
          @swiper="getRef"
          @slideChange="sliderProgression"
      >
        <swiper-slide v-for="stor in TrendingPosts" :key="stor.id">
          <story :story-item="stor.picture" :progressValue="slideValue"/>
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
  ionViewWillEnter() {
    this.slideValue = 0
    setInterval(this.addProgress, 100)
    setTimeout(() => {
      this.swiper.slideNext(100)
    }, 10100)
  },
  components: { Story, IonPage, IonContent, Swiper, SwiperSlide },
  data() {
    return {
      TrendingPosts,
      slideValue: 0,
      countSlide: 0,
      swiper: ref(null)
    }
  },
  methods: {
    getRef (swiperInstance) {
      this.swiper = swiperInstance
    },
    addUp() {
      this.countSlide ++
      if (this.countSlide > this.TrendingPosts.length) {
        this.$router.push('/')
      }
    },
    addProgress() {
      this.slideValue += 0.01;
    },
    sliderProgression() {
      this.slideValue = 0
      this.addProgress()
      setTimeout(() => {
        this.swiper.slideNext(100)
        if ((this.swiper.realIndex + 1) === this.TrendingPosts.length) {
          this.$router.push('/')
        }
      }, 10100)
    }
  }
}
</script >

<style scoped >

</style >