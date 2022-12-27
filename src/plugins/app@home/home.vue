<template>
  <ion-page class="container">
    <a-header/>
    <ion-content>
      <z-post/>
    </ion-content>
    <a-footer/>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from '@ionic/vue'
import AHeader from "@/plugins/app/_layout/a-header.vue";
import AFooter from "@/plugins/app/_layout/a-footer.vue";
import ZPost from "@/plugins/app/_components/z-post/z-post.vue";
export default {
  name: 'Home',
  components: {ZPost, AFooter, AHeader, IonPage, IonContent}
}
</script>

<style scoped>

</style>