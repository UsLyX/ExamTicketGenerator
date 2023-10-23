<template>
  <!-- Редактирование билета. Вторая страница с информацией о билете.-->
  <div class="editing__ticket__two">
    <div class="flex">
      <h1 class="creating__template">Редактирование шаблона 1/2</h1>

      <InformAboutTicket @ticket="changeTicket" :shablon="ticket" />

      <div class="image">
        <button class="back__image" @click="sendData"></button>
        <button class="forward__image" @click="sendData"></button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import InformAboutTicket from '@/components/create/informAboutTicket.vue';

export default {
  name: 'editingTicketTwo',
  components: { InformAboutTicket },
  props: {
    index: Number,
  },
  data() {
    return {
      ticket: null,
    };
  },
  methods: {
    sendData(event) {
      if (event.target == document.querySelector('.back__image')) {
        this.$emit('sendData', 'editingTicketOne');
      } else {
        this.$emit('sendData', 'editingTicketThree');
      }
    },
    changeTicket(changeTicket) {
      this.$emit('changeTicket', changeTicket);
    },
  },
  async mounted() {
    const data = {
      jwt: localStorage.getItem('jwt'),
    };
    await axios
      .post('http://localhost:8081/user/info', data)
      .then((res) => {
        this.ticket = res.data.tickets[this.index - 1];
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped src="@/css/addingData/ticket-edit/editingTicketTwo.css"></style>
