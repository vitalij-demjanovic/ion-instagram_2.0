import { createAnimation } from "@ionic/vue";

export const mainBack = () => {
    createAnimation('my-animation-identifier')
        .addElement(document.querySelectorAll('#main-content'))
        .duration(100)
        .fromTo('transform', 'translateX(-100%)', 'translateX(0)')
        .play()
}

export const mainNext = () => {
    createAnimation('my-animation-identifier')
        .addElement(document.querySelectorAll('#main-content'))
        .duration(100)
        .fromTo('transform', 'translateX(100%)','translateX(0px)')
        .play();
}