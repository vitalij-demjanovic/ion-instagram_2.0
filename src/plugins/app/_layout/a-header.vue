<template>
  <ion-toolbar>
    <ion-row class="ion-align-items-center">
      <ion-col>
        <ion-img :src="Logo" class="logo"/>
      </ion-col>
      <ion-col class="">
        <div class="header__icons flex ion-justify-content-end">
          <ion-button fill="clear" class="ion-no-padding">
            <ion-img :src="Add" class="ion-icon"/>
          </ion-button>
          <ion-button fill="clear" class="ion-no-padding">
            <ion-img :src="Heart" class="ion-icon ion-margin-horizontal"/>
          </ion-button>
          <ion-button fill="clear" :router-animation="goDirect" class="ion-no-padding" router-link="/direct">
            <ion-img :src="Message" class="ion-icon"/>
          </ion-button>
        </div>
      </ion-col>
    </ion-row>
  </ion-toolbar>
</template>

<script>
import { IonToolbar, IonRow, IonCol, IonButton } from "@ionic/vue";
import Logo from '../_layout/_icons/Logo.svg'
import Add from '../_layout/_icons/add.svg'
import Heart from '../_layout/_icons/heart.svg'
import Message from '../_layout/_icons/message.svg'
import {mainNext} from "@/plugins/app/_hooks/paging";

export default {
  name: "a-header",
  components: {  IonToolbar, IonRow, IonCol, IonButton},
  data() {
    return {
      Logo,
      Add,
      Heart,
      Message
    }
  },
  methods: {
    goDirect() {
      mainNext()
    }
  }
}
</script>

<style  lang="sass">
.logo
  width: 112px
  height: 40px
</style>