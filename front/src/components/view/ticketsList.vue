<template>
  <!-- Контейнер с билетами-->
  <div class="grid__container">
    <TicketComponent :key="number" v-for="number in 10" />
  </div>
</template>
<script>
import TicketComponent from './ticketComponent.vue';

export default {
  components: { TicketComponent },
  /*methods: {
    clickOnElement(event) {
      let target = event.target;
      if (target.tagName === 'FIGURE' || target.tagName === 'IMG' || target.tagName === 'FIGCAPTION') {
       document.querySelector('.figcaption__image').classList.add('bottom')
      } else {
        return;
      }
    },
  },*/
};
</script>
<style scoped src="@/css/ticketsList.css"></style>
