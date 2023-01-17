<template >
  <div class="story-image ion-padding-vertical" :style="backgroundStyles(storyItem)">
    <ion-progress-bar :value="progress"></ion-progress-bar>
  </div>
</template >

<script >
import { IonProgressBar } from '@ionic/vue';

export default {
  name: "story",
  components: { IonProgressBar },
  data() {
    return {
      progress: 0
    }
  },
  props: {
    storyItem: String
  },
  methods: {
    backgroundStyles(image) {
      return {
        // any other styles you might need to add on as an example
        'background-image': `url(${image})`,
      }
    }
  },
  mounted() {
    setInterval(() => {
      this.progress += 0.01;
    }, 100);
  }
}
</script >

<style lang="sass" >
.story-image
  height: 100vh
  background-repeat: no-repeat
  background-size: cover

</style >