<!-- Билет -->
<template>
  <swiper-slide>
    <figure class="main__block__container" @click="clickOnElement">
      <img class="main__block__image" src="@/assets/tickcet.png" alt="Билет" />
      <figcaption class="figcaption__image">Билет {{ number }}</figcaption>
      <p></p>
    </figure>
  </swiper-slide>
</template>
<script>
import { SwiperSlide } from 'swiper/vue';
import 'swiper/css';
export default {
  name: 'ticketComponent',
  components: { SwiperSlide },
  props: {
    number: Number,
  },
  data() {
    return {
      subjectName: '',
    };
  },
  mounted() {},
  /*methods: {
    clickOnElement(event) {
      let target = event;
      if (
        event.target.tagName === 'FIGURE' ||
        event.target.tagName === 'IMG' ||
        event.target.tagName === 'FIGCAPTION'
      ) {
        target.path[1].childNodes[1].classList.add('border');
        console.log(target.path[1].childNodes[1]);
      } else {
        return;
      }
    },
  },*/
};
</script>
<style scoped src="@/css/ticketComponent.css"></style>
