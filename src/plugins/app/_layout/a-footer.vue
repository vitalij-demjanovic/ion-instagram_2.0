<template>
  <ion-footer class="ion-padding-horizontal flex ion-justify-content-between ion-align-items-center">
    <ion-button
        fill="clear"
        class="ion-no-padding "
        @click="$emit('someEvent')"
        router-link="/"
        :router-animation="mainBack"
    >

      <ion-icon :src="HomeIcon" class="ion-icon"></ion-icon>
    </ion-button>
    <ion-button
        fill="clear"
        class="ion-no-padding"
        router-link="/search"
        :router-animation="mainNext"
    >
      <ion-icon :src="Search" class="ion-icon"></ion-icon>
    </ion-button>
    <ion-button fill="clear" class="ion-no-padding">
      <ion-img :src="Add" class="ion-icon"/>
    </ion-button>
    <ion-button fill="clear" class="ion-no-padding">
      <ion-icon :src="Heart" class="ion-icon"></ion-icon>
    </ion-button>
    <ion-button
        fill="clear"
        class="ion-no-padding"
        router-link="/profile"
        :router-animation="mainNext"
    >
      <ion-avatar class="user-avatar">
        <ion-img src="https://ionicframework.com/docs/img/demos/avatar.svg"></ion-img>
      </ion-avatar>
    </ion-button>
  </ion-footer>
</template>

<script>
import { IonAvatar, IonIcon, IonButton } from "@ionic/vue";
import { mainNext, mainBack } from "@/plugins/app/_hooks/paging";

import HomeIcon from '../_layout/_icons/home.svg'
import Search from '../_layout/_icons/search.svg'
import Add from '../_layout/_icons/add.svg'
import Heart from '../_layout/_icons/heart.svg'
export default {
  name: "a-footer",
  components: { IonIcon, IonButton, IonAvatar },
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