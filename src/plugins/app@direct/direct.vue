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
    <ion-content class="ion-padding-horizontal">
      <div v-for="message in Messages" :key="message.id">
        <z-message :message-body="message.messageBody" :name="message.user" :avatar="message.avatar" @messageOpen="detailMessage(message.user)"/>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonToolbar, IonIcon, IonTitle, IonRow, IonCol, IonButton, IonContent } from "@ionic/vue";
import { arrowBackOutline } from 'ionicons/icons'
import {mainBack} from "@/plugins/app/_hooks/paging";
import ZMessage from "@/plugins/app@direct/_components/z-message.vue";
import { Messages } from "@/app_data/messages";

export default {
  name: "Direct",
  components: {ZMessage, IonPage, IonToolbar, IonIcon, IonTitle, IonRow, IonCol, IonButton, IonContent },
  data() {
    return {
      arrowBackOutline,
      Messages
    }
  },
  methods: {
   backStep() {
     mainBack()
   },
    detailMessage (event) {
      this.$router.push({
        name: 'Chat',
        params: {
          username: event
        }
      })
    }
  }
}
</script>

<style scoped>

</style>