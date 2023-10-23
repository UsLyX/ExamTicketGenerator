<template>
  <!--Просмотр билета. Первая страница со списком билетов.-->
  <div class="view__ticket">
    <h1 class="main__block__title__text">Редактирование билета</h1>

    <TicketNone class="ticket__none" style="display: none" />

    <swiper
      slides-per-view="1"
      :autoplay="{ delay: 7000, disableOnInteraction: false, pauseOnMouseEnter: true }"
      :modules="modules"
      loop
      :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
    >
      <swiper-slide :key="number" v-for="number in this.ticketsList">
        <figure class="main__block__container" @click="sendData(number)">
          <img class="main__block__image" src="@/assets/tickcet.png" alt="Билет" />
          <figcaption class="figcaption__image">Билет {{ number }}</figcaption>
          <p class="subject__name">{{ subjectName[number - 1] }}</p>
        </figure>
      </swiper-slide>

      <div class="prevArrow">
        <svg data-name="Livello 1" id="Livello_1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
          <title />
          <path d="M64,0a64,64,0,1,0,64,64A64.07,64.07,0,0,0,64,0Zm0,122a58,58,0,1,1,58-58A58.07,58.07,0,0,1,64,122Z" />
          <path
            d="M74.12,35.88a3,3,0,0,0-4.24,0l-26,26a3,3,0,0,0,0,4.24l26,26a3,3,0,0,0,4.24-4.24L50.24,64,74.12,40.12A3,3,0,0,0,74.12,35.88Z"
          />
        </svg>
      </div>
      <div class="nextArrow">
        <svg data-name="Livello 1" id="Livello_1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
          <title />
          <path d="M64,0a64,64,0,1,0,64,64A64.07,64.07,0,0,0,64,0Zm0,122a58,58,0,1,1,58-58A58.07,58.07,0,0,1,64,122Z" />
          <path
            d="M74.12,35.88a3,3,0,0,0-4.24,0l-26,26a3,3,0,0,0,0,4.24l26,26a3,3,0,0,0,4.24-4.24L50.24,64,74.12,40.12A3,3,0,0,0,74.12,35.88Z"
          />
        </svg>
      </div>
    </swiper>
  </div>
</template>

<script>
import SwiperCore, { navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
SwiperCore.use([navigation]);
import TicketNone from '../ticket-view/ticketNone.vue';
import axios from 'axios';

export default {
  name: 'editingTicketOne',
  components: { TicketNone, Swiper, SwiperSlide },
  data() {
    return {
      ticketsList: '',
      subjectName: [],
    };
  },
  methods: {
    sendData(number) {
      this.$emit('sendData', 'editingTicketTwo');
      this.$emit('ticketIndex', number);
    },
  },
  async mounted() {
    const noneTicket = document.querySelector('.ticket__none');
    const data = {
      jwt: localStorage.getItem('jwt'),
    };
    await axios.post('http://localhost:8081/user/info', data).then((res) => {
      res.data.tickets.forEach((element) => this.subjectName.push(element.subjectName));
      this.ticketsList = res.data.tickets.length;
    });
    if (this.ticketsList == 0) {
      noneTicket.style.display = 'block';
    }
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>

<style scoped src="@/css/addingData/ticket-view/viewTicket.css"></style>
