<template>
  <div class="post">
    <div class="post__head flex ion-align-items-center ion-justify-content-between ion-padding-horizontal">
      <div class="post__head-user flex ion-align-items-center">
        <ion-avatar class="user__avatar" @click="$router.push('/stories')">
          <ion-img v-if="avatar" :src="avatar"></ion-img>
          <ion-img v-else src="https://ionicframework.com/docs/img/demos/avatar.svg"></ion-img>
        </ion-avatar>
        <ion-button @click="detailUser(name)" fill="clear" class="ion-no-padding" color="dark" :router-animation="mainNext" router-link="/:username">
          {{name}}
        </ion-button>
      </div>
      <ion-button fill="clear" class="ion-no-padding" @click="presentAlert">
        <ion-img alt="more" :src="MoreIcon"/>
      </ion-button>
    </div>
    <ion-img class="post__picture" alt="picture" :src="picture"/>
    <div class="post__action flex ion-justify-content-between ion-align-items-center ion-padding-horizontal">
      <div class="flex ion-align-items-center">
        <ion-button fill="clear" class="ion-no-padding">
          <ion-img :src="Heart" class="ion-icon"/>
        </ion-button>
        <ion-button fill="clear" class="ion-no-padding ion-margin-horizontal">
          <ion-img :src="Comment" class="ion-icon"/>
        </ion-button>
        <ion-button fill="clear" class="ion-no-padding">
          <ion-img :src="Message" class="ion-icon"/>
        </ion-button>
      </div>
      <ion-button fill="clear" class="ion-no-padding">
        <ion-img :src="SaveCollection" class="ion-icon"/>
      </ion-button>
    </div>
    <ion-text class="ion-padding-horizontal">
      <span class="post__likes">{{likes}} likes</span>
    </ion-text>
    <ion-text>
      <div class="post__content ion-padding-horizontal flex ion-align-items-baseline">
        <p :class="['post-text', { show }]">
          <span class="font-lg">{{name}}</span> {{post}}
        </p>
        <span class="more__span" v-if="!show" @click="show = !show">more</span>
      </div>
    </ion-text>
  </div>
</template>

<script>
import { IonImg, IonButton, IonText, alertController} from '@ionic/vue'
import MoreIcon from  '../z-post/_icons/more.svg'
import Heart from '../../_layout/_icons/heart.svg'
import Comment from '../../_layout/_icons/comment.svg'
import Message from '../../_layout/_icons/message.svg'
import SaveCollection from '../../_layout/_icons/save-colllection.svg'
import {mainNext} from "@/plugins/app/_hooks/paging";
export default {
  name: "z-post",
  components: { IonImg, IonButton, IonText },
  props: {
    name: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    },
    picture: {
      type: String,
      required: true
    },
    likes: {
      type: Number,
      required: true
    },
    post: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      MoreIcon,
      Heart,
      Comment,
      SaveCollection,
      Message,
      show: false,
      mainNext
    }
  },
  methods: {
    detailUser(event) {
      this.$router.push({
        name: 'User',
        params: {
          username: event
        }
      })
    },
    async presentAlert () {
      const alert = await alertController.create({
        header: this.name,
        buttons: [
          {
            text: 'Follow',
          },
          {
            text: 'Unfollow',
          },
        ]
      });

      await alert.present();
    }
  },
}
</script>

<style lang="sass">
.user__avatar
  width: 35px
  height: 35px
  padding: 2px
  margin-right: 8px
  border: 1px solid #ee5b5b
  border-radius: 50%

.post__picture
  height: 460px !important
  max-width: 550px !important
  object-fit: unset !important

.post__likes
  font-weight: 600

.more__span
  color: #8c8c8c
  font-weight: 600

.post-text
  margin-bottom: 0
  white-space: nowrap
  width: 90%
  overflow: hidden
  text-overflow: ellipsis

.post-text.show
  white-space: normal
  overflow: visible
  width: 100%

.action-sheet-group
  border-radius: 10px 10px 0 0
  border: solid #ffffff
  border-width: 1px 1px 0 1px

.action-sheet-button-inner
  display: flex !important
  align-items: center !important
  justify-content: space-between !important

.action-sheet-button
  transition: all 0.3s ease
  &:hover
    background: rgba(0,0,0, 0.3) !important
    color: #ffffff !important


.alert-button-group
  justify-content: center !important

.alert-head
  text-align: center !important

.alert-button
  &:first-child
    color: #109a49
  &:last-child
    color: #f14f4f
</style>