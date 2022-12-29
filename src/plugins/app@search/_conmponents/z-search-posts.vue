<template>
  <ion-img :src="postImage"/>
</template>

<script>
import { IonImg } from "@ionic/vue";
export default {
  name: "z-search-posts",
  components: { IonImg },
  props: {
    postImage: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
</style>