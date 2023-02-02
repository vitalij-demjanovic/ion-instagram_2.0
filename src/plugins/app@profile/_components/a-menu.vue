<template >
  <ion-menu menu-id="app-menu" content-id="main-content">
    <ion-content class="ion-padding">
      <ion-list>
        <ion-item button class="ion-no-padding menu__btn ion-margin-bottom" @click="menuNavigation('/setting')">
          <ion-text class="ion-margin-end">Setting</ion-text>
          <ion-icon :src="cog"/>
        </ion-item>
        <ion-item class="ion-no-padding menu__btn">
          <ion-text class="ion-margin-end">Log Out</ion-text>
          <ion-icon :src="logOut"/>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template >

<script >
import {IonMenu, IonText, IonContent, IonIcon, IonItem, IonList, menuController} from "@ionic/vue";
import { cog, logOut } from 'ionicons/icons'


export default {
  name: "a-menu",
  components: { IonMenu, IonContent, IonText, IonIcon, IonItem, IonList },
  data() {
    return {
      cog, logOut
    }
  },
  methods: {
    menuNavigation(url) {
      menuController.close('app-menu')
      this.$router.push(url)
    }
  }
}
</script >

<style scoped >

</style >