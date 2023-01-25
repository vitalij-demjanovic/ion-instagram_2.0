<template>
  <ion-page class="container ">
    <ion-toolbar class="ion-align-items-center">
      <ion-row class="ion-align-items-center">
        <ion-col size="1" >
          <ion-button size="small" :router-animation="mainBack" fill="clear" class="g-btn ion-no-padding" router-link="/profile">
            <ion-icon
                class="ion-icon"
                :src="arrowBackOutline"
            ></ion-icon>
          </ion-button>
        </ion-col>
        <ion-col>
          <ion-title>
            Setting
          </ion-title>
        </ion-col>
      </ion-row>
    </ion-toolbar>
    <ion-content class="ion-padding-horizontal ion-padding-vertical">
      <div class="flex ion-justify-content-between">
        <ion-item-group class="ion-align-items-center flex">
          <ion-icon class="ion-icon" :src="colorPalette"/>
          <ion-text class="ion-padding-horizontal">
            Theme
          </ion-text>
        </ion-item-group>
        <ion-toggle @click="toggleDarkTheme" class="ion-align-items-end"></ion-toggle>
      </div>
    </ion-content>
    <a-footer @someEvent="goToHome"/>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon,
  IonItemGroup,
  IonToggle,
  IonText,
  IonRow,
  IonCol,
  IonButton
} from '@ionic/vue'
import { colorPalette, arrowBackOutline } from 'ionicons/icons'
import AFooter from "@/plugins/app/_layout/a-footer.vue";
import { useRouter } from "vue-router";
import { mainBack } from "@/plugins/app/_hooks/paging";

export default {
  name: "setting",
  components: {
    AFooter,
    IonPage,
    IonToolbar,
    IonTitle,
    IonContent,
    IonIcon,
    IonItemGroup,
    IonToggle,
    IonText,
    IonRow,
    IonCol,
    IonButton
  },
  data () {
    return {
      colorPalette,
      arrowBackOutline,
      router: useRouter(),
      mainBack
    }
  },
  methods: {
    goToHome () {
      this.router.push('/profile')
    },
    toggleDarkTheme() {
      document.body.classList.toggle('dark');
    }
  }
}
</script>

<style scoped>
</style>
