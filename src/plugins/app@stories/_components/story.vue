<template >
  <div class="story-image ion-padding-vertical" :style="backgroundStyles(storyItem)">
    <div class="quizz-progress ion-text-center">
      <ion-progress-bar :value="progressValue"></ion-progress-bar>
    </div>
  </div>
</template >

<script >
import { IonProgressBar } from '@ionic/vue';

export default {
  name: "story",
  components: { IonProgressBar },
  props: {
    storyItem: String,
    progressValue: Number
  },
  data() {
    return {
      progress: this.progressValue
    }
  },
  methods: {
    backgroundStyles(image) {
      return {
        // any other styles you might need to add on as an example
        'background-image': `url(${image})`,
      }
    }
  },
}
</script >

<style lang="sass" >
.story-image
  height: 100vh
  background-repeat: no-repeat
  background-size: cover

.quizz-progress
  ion-progress-bar
    width: 90%
    margin: 0 auto
    border-radius: 10px
    --buffer-background: #9cb4e0
    --progress-background: #b07676


</style >