<template>
  <ion-page class="container">
    <ion-toolbar>
      <ion-row class="ion-align-items-center">
        <ion-col size="1">
          <ion-button size="small" :router-animation="mainBack" fill="clear" class="g-btn ion-no-padding" router-link="/">
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
    <ion-content>
      <z-user-property following="55" followers="222" posts="222"/>
      <a-user-buttons/>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonToolbar, IonRow, IonCol, IonButton, IonIcon, IonTitle, IonContent } from "@ionic/vue";
import { arrowBackOutline } from 'ionicons/icons'

import {mainBack} from "@/plugins/app/_hooks/paging";
import ZUserProperty from "@/plugins/app@user/_components/z-user-property.vue";
import AUserButtons from "@/plugins/app@user/_components/a-user-buttons.vue";


export default {
  name: "User",
  components: {
    AUserButtons,
    ZUserProperty, IonPage, IonToolbar, IonRow, IonCol, IonButton, IonIcon, IonTitle, IonContent },
  data() {
    return {
      arrowBackOutline,
      mainBack,

    }
  }
}
</script>

<style scoped>

</style>