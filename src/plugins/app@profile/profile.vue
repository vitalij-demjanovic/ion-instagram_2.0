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
      <ion-segment value="default">
        <ion-segment-button value="default" @click="currentPosts = 'my'">
          <ion-icon :src="imageOutline"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="segment" @click="currentPosts = 'tags'">
          <ion-icon :src="pricetagOutline"></ion-icon>
        </ion-segment-button>
      </ion-segment>
      <div v-if="currentPosts === 'my'">
        <div v-for="post in ProfilePosts" :key="post.id" class="ion-margin-top">
          <z-post
              :name="user.name"
              :avatar="user.avatar"
              :picture="post.picture"
              :likes="post.likes"
              :post="post.content"
              class="ion-margin-bottom"
          />
        </div>
      </div>
      <div v-if="currentPosts === 'tags'">
        <div v-for="post in TagsPosts" :key="post.id" class="ion-margin-top">
          <z-tag-post
              :second-avatar="post.secondAvatar"
              :second-name="post.secondName"
              :name="user.name"
              :avatar="user.avatar"
              :picture="post.picture"
              :likes="post.likes"
              :post="post.content"
              class="ion-margin-bottom"
          />
        </div>
      </div>
    </ion-content>
    <a-footer/>
  </ion-page>
</template>

<script>
import { IonPage, IonToolbar, IonRow, IonCol, IonTitle, IonIcon, IonContent, IonSegment, IonSegmentButton } from "@ionic/vue";
import { add, menu, imageOutline, pricetagOutline } from 'ionicons/icons'
import AFooter from "@/plugins/app/_layout/a-footer.vue";
import { LoginUser } from "@/app_data/login-user";
import AProfileUser from "@/plugins/app@profile/_components/z-user-content.vue";
import ZPost from "@/plugins/app/_components/z-post/z-post.vue";
import { ProfilePosts, TagsPosts } from "@/app_data/profile-data";
import ZTagPost from "@/plugins/app/_components/z-post/z-tag-post.vue";

export default {
  name: "Profile",
  components: {
    ZTagPost,
    ZPost, AProfileUser, AFooter, IonPage, IonToolbar, IonRow, IonCol, IonTitle, IonIcon, IonContent, IonSegment, IonSegmentButton },
  data () {
    return {
      currentPosts: 'my',
      ProfilePosts,
      TagsPosts,
      user: LoginUser,
      add,
      menu,
      imageOutline,
      pricetagOutline
    }
  },
}
</script>

<style lang="sass">
ion-segment-button::part(indicator-background)
  background: #ee5b5b
/* Material Design styles */
ion-segment-button.md::part(native)
  color: #000
.segment-button-checked.md::part(native)
  color: #ee5b5b
ion-segment-button.md::part(indicator-background)
  height: 4px
/* iOS styles */
ion-segment-button.ios::part(native)
  color: #08a391
.segment-button-checked.ios::part(native)
  color: #ee5b5b
ion-segment-button.ios::part(indicator-background)
  border-radius: 20px
</style>