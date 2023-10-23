<template>
  <!-- Просмотр билета. Вторая страница с примером готового билета. -->
  <div class="ticket__example">
    <div class="title">
      <button class="back" @click="sendData">
        <div class="back__image"></div>
        <p class="back__text">Назад</p>
      </button>
      <p class="main__block__title">Просмотр билета</p>
    </div>

    <div class="flex-container">
      <div class="main__container">
        <div class="inner__container">
          <h1 class="text__university">ФГБОУ ВО «Воронежский государственный университет инженерных технологий»</h1>
          <h1 class="text__university">
            Цикловая коммисия {{ ticket.cyclicСommission }} Факультет {{ ticket.faculty }}
          </h1>
          <h1 class="text__university">
            Направление подготовки/специальность: {{ specialityCode }} / {{ specialityName }}
          </h1>
          <h1 class="item__name">{{ ticket.subjectName }}</h1>
          <h1>БИЛЕТ № {{ this.index }}</h1>
          <ol>
            <li>Теоритический вопрос 1 (Генерируются авторматически)</li>
            <li>Теоритический вопрос 2 (Генерируются авторматически)</li>
            <li>Практическое задание 1 (Генерируются авторматически)</li>
            <li>Практическое задание 2 (Генерируются авторматически)</li>
          </ol>
          <div class="teachers">
            <h1>Экзаменатор __ {{ ticket.informAboutExaminer }}</h1>
            <h1>Председатель ЦК __ {{ ticket.informAboutChairman }}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'ticketExample',
  data() {
    return {
      ticket: {},
      specialityCode: '',
      specialityName: '',
    };
  },
  props: {
    index: Number,
  },
  methods: {
    sendData() {
      this.$emit('sendData', 'viewTicket');
    },
  },
  async mounted() {
    const data = {
      jwt: localStorage.getItem('jwt'),
    };
    axios.post('http://localhost:8081/user/info', data).then((res) => {
      this.ticket = res.data.tickets[this.index - 1];
      const specialityCode = this.ticket.speciality.specialityCode;
      const specialityName = this.ticket.speciality.specialityName;
      this.specialityCode = specialityCode;
      this.specialityName = specialityName;
    });
  },
};
</script>

<style scoped src="@/css/addingData/ticket-view/ticketExample.css"></style>
