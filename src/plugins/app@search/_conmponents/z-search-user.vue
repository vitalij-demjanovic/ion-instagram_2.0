<template>
  <div class="search-user flex ion-align-items-center">
    <ion-avatar class="search-user__avatar">
      <ion-img :src="avatar"></ion-img>
    </ion-avatar>
    <p @click="$emit('detail')">{{userName}}</p>
  </div>
</template>

<script>
import { IonAvatar, IonImg } from "@ionic/vue";
export default {
  name: "z-search-user",
  components: { IonAvatar, IonImg },
  props: {
    avatar: {
      type: String,
      required: true
    },
    userName: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass">
.search-user
  margin-bottom: 20px
.search-user__avatar
  width: 50px
  height: 50px
  margin-right: 15px
</style>