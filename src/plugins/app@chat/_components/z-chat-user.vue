<template >
  <div class="ion-padding-horizontal flex ion-align-items-center">
    <ion-avatar class="chat__avatar">
      <ion-img v-if="avatar" :src="avatar"></ion-img>
      <ion-img v-else src="https://ionicframework.com/docs/img/demos/avatar.svg"></ion-img>
    </ion-avatar>
    <span>{{name}}</span>
  </div>
</template >

<script >
import { IonAvatar, IonImg } from "@ionic/vue";

export default {
  name: "z-chat-user",
  components: { IonImg, IonAvatar },
  props: {
    avatar: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
}
</script >

<style lang="sass" >
.chat__avatar
  width: 35px
  height: 35px
  padding: 2px
  margin-right: 8px
  border: 1px solid #ee5b5b
  border-radius: 50%
</style >