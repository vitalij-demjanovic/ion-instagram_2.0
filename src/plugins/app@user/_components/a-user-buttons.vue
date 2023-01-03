<template>
  <div class="profile-buttons">
    <ion-row>
      <ion-col class="flex ion-justify-content-center">
        <ion-button class="use-button">Follow</ion-button>
      </ion-col>
      <ion-col class="flex ion-justify-content-center">
        <ion-button class="use-button">Message</ion-button>
      </ion-col>
    </ion-row>
  </div>
</template>

<script>
import { IonButton, IonRow, IonCol } from "@ionic/vue";
export default {
  name: "a-user-buttons",
  components:{
    IonRow,
    IonCol,
    IonButton
  }
}
</script>

<style lang="sass">
.profile-buttons
  margin-bottom: 15px
</style>