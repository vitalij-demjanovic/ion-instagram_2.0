<template>
  <ion-page class="container">
    <a-header/>
    <ion-content>
      Vitalij
    </ion-content>
    <a-footer/>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from '@ionic/vue'
import AHeader from "@/plugins/app/_layout/a-header.vue";
import AFooter from "@/plugins/app/_layout/a-footer.vue";
export default {
  name: 'Home',
  components: {AFooter, AHeader, IonPage, IonContent}
}
</script>

<style scoped>

</style>