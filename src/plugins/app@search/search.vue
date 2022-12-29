<template>
  <ion-page class="container">
    <ion-toolbar>
      <ion-row class="ion-align-items-center">
        <ion-col size="1" v-if="arrow">
          <ion-icon @click="arrow = false" class="ion-icon" :src="arrowBackOutline"/>
        </ion-col>
        <ion-col>
          <ion-searchbar  @click="arrow = true" v-model="search"></ion-searchbar>
        </ion-col>
      </ion-row>
    </ion-toolbar>
    <ion-content>
      <div class="posts-images" v-if="arrow === false">
        <ion-grid>
          <ion-row>
            <ion-col size="4" v-for="post in TrendingPosts" :key="post.id">
              <z-search-posts :post-image="post.picture"/>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
      <div class="search-result ion-padding-horizontal" v-if="arrow">
        <div v-for="user in searchUser" :key="user.id">
          <z-search-user :avatar="user.avatar" :user-name="user.name" v-if="search.length > 0"/>
        </div>
      </div>
    </ion-content>
    <a-footer/>
  </ion-page>
</template>

<script>
import { IonPage, IonRow, IonCol, IonGrid, IonIcon, IonSearchbar } from "@ionic/vue";
import { searchSharp, arrowBackOutline } from 'ionicons/icons'
import { Users } from "@/app_data/users";
import { TrendingPosts } from "@/app_data/posts";
import AFooter from "@/plugins/app/_layout/a-footer.vue";
import ZSearchUser from "@/plugins/app@search/_conmponents/z-search-user.vue";
import ZSearchPosts from "@/plugins/app@search/_conmponents/z-search-posts.vue";

export default {
  name: "Search",
  components: {ZSearchPosts, ZSearchUser, AFooter, IonPage, IonRow, IonCol, IonGrid, IonIcon, IonSearchbar },
  data () {
    return {
      searchSharp,
      arrowBackOutline,
      Users,
      TrendingPosts,
      arrow: false,
      numberCol: 4,
      search: '',
    }
  },
  computed: {
    searchUser() {
      if (this.search.trim().length > 0) {
        return this.Users.filter((user) => user.name.toLowerCase().includes(this.search.trim().toLowerCase()))
      }
      return this.TrendingPosts
    }
  }
}
</script>

<style lang="sass">
.searchbar-input
  border: 1px solid #4d4d4d
  border-radius: 10px !important
</style>