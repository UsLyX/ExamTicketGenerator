<template>
  <div class="adding-data">
    <div class="tickets__control">
      <h1 class="control__title">Управление билетами</h1>
      <div class="button__box">
        <button class="button" @click="component = 'viewTicket'">Посмотреть</button>
        <button class="button" @click="component = 'firstCreatingTemplate'">Создать</button>
        <button class="button" @click="component = 'editingTicketOne'">Редактировать</button>
        <button class="button" @click="component = 'ticketsGenerationOne'">Сгенерировать</button>
      </div>
    </div>

    <div class="main__block">
      <component
        :is="component"
        :index="tickIndex"
        :tick="tickets"
        :changeTicket="changeTickets"
        :indexShablonGen="indexShablon"
        :amountGenTickets="amountTickets"
        @changeTicket="changeTicket"
        @ticketIndex="ticketIndex"
        @ticketAdd="ticket"
        @sendData="childComponent"
        @generationIndexShablon="geterationIndexShablon"
        @generationAmountTickets="geterationAmountTickets"
      ></component>
    </div>
  </div>
</template>

<script>
import viewTicket from './ticket-view/viewTicket.vue';
import ticketExample from './ticket-view/ticketExample.vue';
import firstCreatingTemplate from './ticket-creating/firstCreatingTemplate.vue';
import secondCreatingTemplate from './ticket-creating/secondCreatingTemplate.vue';
import editingTicketOne from './ticket-redact/editingTicketOne.vue';
import editingTicketTwo from './ticket-redact/editingTicketTwo.vue';
import editingTicketThree from './ticket-redact/editingTicketThree.vue';
import ticketsGenerationOne from './ticket-generation/ticketsGenerationOne.vue';
import ticketsGenerationTwo from './ticket-generation/ticketsGenerationTwo.vue';
import ticketsGenerationError from './ticket-generation/ticketsGenerationError.vue';
export default {
  name: 'addingData',

  components: {
    viewTicket,
    ticketExample,
    firstCreatingTemplate,
    secondCreatingTemplate,
    editingTicketOne,
    editingTicketTwo,
    editingTicketThree,
    ticketsGenerationOne,
    ticketsGenerationTwo,
    ticketsGenerationError,
  },

  data() {
    return {
      component: 'viewTicket',
      lastPath: null,
      tickets: {},
      changeTickets: {},
      tickIndex: '',
      indexShablon: 0,
      amountTickets: 0,
    };
  },

  methods: {
    lastUrl() {
      //получаем предыдущий url
      this.lastPath = this.$router.options.history.state.back;
      console.log(this.lastPath);
      //делаем проверку на неавторизованного пользователя
      if (
        this.lastPath === '/authorizationTeacher' ||
        this.lastPath === null ||
        this.lastPath === '/' ||
        this.lastPath === '/registrationTeacher'
      ) {
        alert('Вы не вошли в систему');
        this.$router.push({ path: '/authorizationTeacher' });
      }
    },
    ticket(ticket) {
      this.tickets = ticket;
    },
    changeTicket(changeTicket) {
      this.changeTickets = changeTicket;
    },
    ticketIndex(index) {
      this.tickIndex = index;
    },
    childComponent(data) {
      this.component = `${data}`;
    },
    geterationIndexShablon(indexShablonGen) {
      this.indexShablon = indexShablonGen;
    },
    geterationAmountTickets(amountGenTickets) {
      this.amountTickets = amountGenTickets;
    },

    allFunc: function () {
      this.mainSizeNormal();
      this.deleteElement();
    },
    deleteElement: function () {
      if (document.querySelector('.main__block').querySelector('.main__block__p')) {
        document.querySelector('.main__block__p').remove();
      }
    },
    mainSizeMin: function () {
      document.querySelector('.main__block').style.width = 'calc(calc(1vw + 1vh) * 20)';
    },
    mainSizeNormal: function () {
      document.querySelector('.main__block').style.width = 'calc(calc(1vw + 1vh) * 35)';
    },
  },
  mountedd() {
    if (document.querySelector('.tickets__generation__one') || document.querySelector('.tickets__generation__two')) {
      document.querySelector('.main__block').style.width = 'calc(calc(1vw + 1vh) * 20)';
    }
  },
  created() {
    if (localStorage.getItem('jwt') !== null) {
      this.$router.push({ path: '/addingData' });
    } else {
      this.lastUrl();
    }
  },
};
</script>

<style scoped src="@/css/addingData/addingData.css"></style>
