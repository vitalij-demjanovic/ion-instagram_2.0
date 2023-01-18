<template>
  <div class="avatar-story ion-padding-vertical ion-margin-bottom">
    <div class="container">
      <div class="avatar-story-container" v-for="avatar in Users" :key="avatar.id">
        <ion-avatar class="avatar-story-item" id="open-modal">
          <ion-img :src="avatar.avatar"></ion-img>
        </ion-avatar>
        <span>{{avatar.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { IonImg, IonAvatar } from "@ionic/vue";
import { Users } from "@/app_data/users";

export default {
  name: "z-stories-list",
  components: {
    IonImg,
    IonAvatar,
  },
  props: {
    avatarStory: String
  },
  data () {
    return {
      Users,
      open: 'open-modal'
    }
  }
}
</script>

<style lang="sass">
.avatar-story
  white-space: nowrap
  overflow-x: scroll
  overflow-y: hidden
  border-bottom: 1px solid rgba(0,0,0,0.2)
  -webkit-overflow-scrolling: touch
  &::-webkit-scrollbar
    display: none

.avatar-story-container
  position: relative
  margin-left: 15px
  display: inline-block
  font-size: 14px
  text-align: center
  &:last-child
    margin-right: 15px


.avatar-story-item
  padding: 2px
  border: 2px solid #ee5b5b
</style>
