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
            {{getUserData.name}}
          </ion-title>
        </ion-col>
      </ion-row>
    </ion-toolbar>
    <ion-content>
      <z-user-property
          :avatar="getUserData.avatar"
          posts="22"
          :followers="getUserData.followers"
          :following="getUserData.following"
      />
      <a-user-buttons/>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonToolbar, IonRow, IonCol, IonButton, IonIcon, IonTitle, IonContent } from "@ionic/vue";
import { arrowBackOutline } from 'ionicons/icons'
import { Users } from "@/app_data/users";

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
      Users,
      arrowBackOutline,
      mainBack,
      nameDetail: this.$route.params.username,
    }
  },
  computed: {
    getUserData() {
      return this.Users.find((user) => user.name ===  this.nameDetail)
    }
  }
}
</script>

<style scoped>

</style>