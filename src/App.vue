<template>
  <ion-app>
    <a-menu/>
    <ion-router-outlet id="main-content"/>
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import AMenu from "@/plugins/app@profile/_components/a-menu.vue";

export default defineComponent({
  name: 'App',
  components: {
    AMenu,
    IonApp,
    IonRouterOutlet
  }
});
</script>