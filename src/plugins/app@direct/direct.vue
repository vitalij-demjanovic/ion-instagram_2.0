<template>
  <ion-page class="container">
    <ion-toolbar>
      <ion-row class="ion-align-items-center">
        <ion-col size="1">
          <ion-button size="small" :router-animation="backStep" fill="clear" class="g-btn ion-no-padding" router-link="/">
            <ion-icon
                class="ion-icon"
                :src="arrowBackOutline"
            ></ion-icon>
          </ion-button>
        </ion-col>
        <ion-col>
          <ion-title >
            user
          </ion-title>
        </ion-col>
      </ion-row>
    </ion-toolbar>
  </ion-page>
</template>

<script>
import { IonPage, IonToolbar, IonIcon, IonTitle, IonRow, IonCol, IonButton } from "@ionic/vue";
import { arrowBackOutline } from 'ionicons/icons'
import {mainBack} from "@/plugins/app/_hooks/paging";

export default {
  name: "Direct",
  components: { IonPage, IonToolbar, IonIcon, IonTitle, IonRow, IonCol, IonButton },
  data() {
    return {
      arrowBackOutline
    }
  },
  methods: {
   backStep() {
     mainBack()
   }
  }
}
</script>

<style scoped>

</style>