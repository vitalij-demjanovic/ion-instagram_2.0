<template >
  <ion-menu menu-id="app-menu" content-id="main-content">
    <ion-content class="ion-padding">
      <div class="menu__items">
        <ion-button fill="clear" class="ion-no-padding menu__btn ion-margin-bottom">
          <ion-text class="ion-margin-end" @click="menuNavigation('/setting')">Setting</ion-text>
          <ion-icon :src="cog"/>
        </ion-button>
        <ion-button fill="clear" class="ion-no-padding menu__btn">
          <ion-text class="ion-margin-end">Log Out</ion-text>
          <ion-icon :src="logOut"/>
        </ion-button>
      </div>
    </ion-content>
  </ion-menu>
</template >

<script >
import { IonMenu, IonButton, IonText, IonContent, menuController } from "@ionic/vue";
import { cog, logOut } from 'ionicons/icons'


export default {
  name: "a-menu",
  components: { IonMenu, IonContent, IonButton, IonText },
  data() {
    return {
      cog, logOut
    }
  },
  methods:{
    menuNavigation(url){
      menuController.close("app-menu");
      this.$router.push(url);
    }
  }

}
</script >

<style scoped >

</style >