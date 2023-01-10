<template >
  <ion-footer class="ion-padding flex ion-align-items-center">
    <ion-input placeholder="Message..." class="input__message"/>
    <ion-button size="small" fill="clear" class="g-btn ion-no-padding">
      <ion-icon
          class="ion-icon ion-margin-start"
          :src="arrowForwardOutline"
      ></ion-icon>
    </ion-button>
  </ion-footer>
</template >

<script >
import { IonFooter, IonInput, IonIcon, IonButton } from "@ionic/vue";
import { arrowForwardOutline } from 'ionicons/icons'

export default {
  name: "a-chat-footer",
  components: { IonFooter, IonInput, IonIcon, IonButton },
  data() {
    return {
      arrowForwardOutline
    }
  }
}
</script >

<style lang="sass" >
.input__message
  border: 1px solid #9d9b9b
  border-radius: 20px
  padding: 10px
  color: #1a1a1a
</style >