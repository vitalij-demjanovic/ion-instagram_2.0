<template>
  <div class="ion-margin-bottom">
    <ion-row class="ion-padding-horizontal ion-align-items-center flex" >
      <ion-col>
        <ion-avatar>
          <ion-img v-if="avatar" :src="avatar"></ion-img>
          <ion-img v-else src="https://ionicframework.com/docs/img/demos/avatar.svg"></ion-img>
        </ion-avatar>
      </ion-col>
      <ion-col class="user-rate">
        <ion-text class="user-rate-item">
          <p class="rate-item_number">{{posts}}</p>
          <p class="ion-no-margin">Posts</p>
        </ion-text>
        <ion-text class="user-rate-item" id="open-modal" expand="block">
          <p class="rate-item_number">{{followers}}</p>
          <p class="ion-no-margin">Followers</p>
        </ion-text>
        <ion-text class="user-rate-item">
          <p class="rate-item_number">{{following}}</p>
          <p class="ion-no-margin">Following</p>
        </ion-text>
      </ion-col>
    </ion-row>
  </div>
</template>

<script>
import {  IonAvatar, IonText, IonImg, IonRow, IonCol} from "@ionic/vue";
export default {
  name: "a-profile-user",
  components: {
    IonAvatar,
    IonText,
    IonImg,
    IonRow,
    IonCol,
  },
  props: {
    avatar: {
      type: String,
      required:true
    },
    posts: {
      type: Number,
      required: true
    },
    followers: {
      type: Number,
      required: true
    },
    following: {
      type: Number,
      required: true
    },
  }
}
</script>

<style lang="sass">
.user-rate
  display: flex
  justify-content: flex-end
  &-item
    margin-right: 20px
    font-size: 14px
    text-align: center
    &:last-child
      margin-right: 0
.rate-item_number
  margin-bottom: 5px
  font-weight: 600
  font-size: 18px
</style>