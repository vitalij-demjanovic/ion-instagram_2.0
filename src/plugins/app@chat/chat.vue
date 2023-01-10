<template >
  <ion-page>
    <ion-toolbar class="chat__toolbar">
      <ion-row class="ion-align-items-center">
        <ion-col size="1">
          <ion-button size="small" :router-animation="mainBack" fill="clear" class="g-btn ion-no-padding" router-link="/direct">
            <ion-icon
                class="ion-icon"
                :src="arrowBackOutline"
            ></ion-icon>
          </ion-button>
        </ion-col>
        <ion-col>
          <z-chat-user :name="getMessage.user"/>
        </ion-col>
      </ion-row>
    </ion-toolbar>
    <a-chat-footer/>
  </ion-page>
</template >

<script >
import { IonPage, IonToolbar, IonIcon, IonRow, IonCol, IonButton } from "@ionic/vue";
import ZChatUser from "@/plugins/app@chat/_components/z-chat-user.vue";
import { arrowBackOutline } from 'ionicons/icons'
import {mainBack} from "@/plugins/app/_hooks/paging";
import AChatFooter from "@/plugins/app@chat/_components/a-chat-footer.vue";
import { Messages } from "@/app_data/messages";


export default {
  name: "chat",
  components: {AChatFooter, ZChatUser, IonPage, IonToolbar, IonRow, IonCol, IonButton },
  data() {
    return {
      arrowBackOutline,
      mainBack,
      userDetail: this.$route.params.username,
      Messages
    }
  },
  computed: {
    getMessage() {
      return this.Messages.find((user) => user.user === this.userDetail)
    }
  },
  mounted() {
    console.log(this.getMessage)
  }
}
</script >

<style lang="sass" >
.chat__toolbar
  border-bottom: 1px solid #9d9b9b
</style >