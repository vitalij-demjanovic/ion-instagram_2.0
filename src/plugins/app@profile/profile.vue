<template>
  <ion-page class="container">
    <ion-toolbar>
      <ion-row class="ion-padding-horizontal">
        <ion-col>
          <ion-title color="dark ion-no-padding" class="ion-text-start">
            {{user.name}}
          </ion-title>
        </ion-col>
        <ion-col class="ion-text-end">
          <ion-icon class="ion-icon ion-margin-horizontal" :src="add"></ion-icon>
          <ion-icon @click="presentActionSheet" class="ion-icon" :src="menu"></ion-icon>
        </ion-col>
      </ion-row>
    </ion-toolbar>
    <ion-content>
      <a-profile-user
          :avatar="''"
          :posts="user.posts"
          :followers="user.followers"
          :following="user.following"
      />
    </ion-content>
    <a-footer/>
  </ion-page>
</template>

<script>
import { IonPage, IonToolbar, IonRow, IonCol, IonTitle, IonIcon, IonContent } from "@ionic/vue";
import { add, menu } from 'ionicons/icons'
import AFooter from "@/plugins/app/_layout/a-footer.vue";
import { LoginUser } from "@/app_data/login-user";
import AProfileUser from "@/plugins/app@profile/_components/z-user-content.vue";

export default {
  name: "Profile",
  components: {AProfileUser, AFooter, IonPage, IonToolbar, IonRow, IonCol, IonTitle, IonIcon, IonContent },
  data () {
    return {
      user: LoginUser,
      add,
      menu
    }
  },
}
</script>

<style scoped>

</style>