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
              :name="getUserData.name"
              :avatar="getUserData.avatar"
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
              :name="getUserData.name"
              :avatar="getUserData.avatar"
              :picture="post.picture"
              :likes="post.likes"
              :post="post.content"
              class="ion-margin-bottom"
          />
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonToolbar, IonRow, IonCol, IonButton, IonIcon, IonTitle, IonContent, IonSegment, IonSegmentButton  } from "@ionic/vue";
import { arrowBackOutline, imageOutline, pricetagOutline } from 'ionicons/icons'
import { Users } from "@/app_data/users"
import {mainBack} from "@/plugins/app/_hooks/paging";
import ZUserProperty from "@/plugins/app@user/_components/z-user-property.vue";
import AUserButtons from "@/plugins/app@user/_components/a-user-buttons.vue";
import ZTagPost from "@/plugins/app/_components/z-post/z-tag-post.vue";
import {  ProfilePosts, TagsPosts } from "@/app_data/profile-data";
import ZPost from "@/plugins/app/_components/z-post/z-post.vue";


export default {
  name: "User",
  components: {ZPost, AUserButtons, ZUserProperty, IonPage, IonToolbar, IonRow, IonCol, IonButton, IonIcon, IonTitle, IonContent, IonSegment, IonSegmentButton, ZTagPost  },
  data() {
    return {
      currentPosts: 'my',
      ProfilePosts,
      imageOutline,
      TagsPosts,
      pricetagOutline,
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