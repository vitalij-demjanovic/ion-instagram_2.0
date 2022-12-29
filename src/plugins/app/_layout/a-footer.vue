<template>
  <ion-footer class="ion-padding-horizontal flex ion-justify-content-between ion-align-items-center">
    <ion-button
        fill="clear"
        class="ion-no-padding"
        @click="$emit('someEvent')"
        router-link="/"
        :router-animation="mainBack"
    >

      <ion-img :src="HomeIcon" class="ion-icon"/>
    </ion-button>
    <ion-button
        fill="clear"
        class="ion-no-padding"
        router-link="/search"
        :router-animation="mainNext"
    >
      <ion-img :src="Search" class="ion-icon"/>
    </ion-button>
    <ion-button fill="clear" class="ion-no-padding">
      <ion-img :src="Add" class="ion-icon"/>
    </ion-button>
    <ion-button fill="clear" class="ion-no-padding">
      <ion-img :src="Heart" class="ion-icon"/>
    </ion-button>
    <ion-avatar class="user-avatar">
      <ion-img src="https://ionicframework.com/docs/img/demos/avatar.svg"></ion-img>
    </ion-avatar>
  </ion-footer>
</template>

<script>
import { IonAvatar, IonImg, IonButton } from "@ionic/vue";
import { mainNext, mainBack } from "@/plugins/app/_hooks/paging";

import HomeIcon from '../_layout/_icons/home.svg'
import Search from '../_layout/_icons/search.svg'
import Add from '../_layout/_icons/add.svg'
import Heart from '../_layout/_icons/heart.svg'
export default {
  name: "a-footer",
  components: { IonImg, IonButton, IonAvatar },
  data() {
    return {
      Heart,
      HomeIcon,
      Search,
      Add,
      mainNext,
      mainBack
    }
  }
}
</script>

<style scoped>

</style>