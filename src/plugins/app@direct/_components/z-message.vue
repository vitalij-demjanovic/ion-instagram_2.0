<template >
  <div class="flex ion-align-items-center ion-margin-bottom">
    <ion-avatar class="message__avatar">
      <ion-img v-if="avatar" :src="avatar"></ion-img>
      <ion-img v-else src="https://ionicframework.com/docs/img/demos/avatar.svg"></ion-img>
    </ion-avatar>
    <div class="message__user">
      <span class="">{{name}}</span>
      <p class="ion-no-margin">{{messageBody}}</p>
    </div>
  </div>
</template >

<script >
import { IonAvatar, IonImg } from "@ionic/vue";

export default {
  name: "z-message",
  components: { IonAvatar, IonImg },
  props: {
    avatar: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    messageBody: {
      type: String,
      required: true
    }
  }
}
</script >

<style lang="sass" >
.message__avatar
  width: 50px
  height: 50px
  padding: 2px
  margin-right: 8px
  border: 1px solid #ee5b5b
  border-radius: 50%


.message__user
  span
    font-weight: 600
    font-size: 18px
  p
    font-size: 12px
</style >