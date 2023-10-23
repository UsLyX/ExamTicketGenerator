<template>
  <!-- Создание билета. Вторая страница с вопросами.-->
  <div class="second__creating__template">
    <div class="flex-container">
      <h1 class="title">Создание шаблона 2/2</h1>

      <DatabaseQuestions @collectData="collectDataQuest" />

      <div class="box">
        <div class="box__image">
          <button class="button" @click="addTicket">Создать шаблон</button>
          <div class="image">
            <button class="back__image" @click="sendData"></button>
            <a class="forward__image"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DatabaseQuestions from '../../../components/create/questions/databaseQuestions.vue';
import axios from 'axios';
export default {
  name: 'secondCreatingTemplate',
  emits: ['sendData'],
  components: { DatabaseQuestions },
  data() {
    return {
      questions: '',
      ticketAdding: {},
    };
  },
  props: {
    tick: Object,
  },
  methods: {
    sendData() {
      this.$emit('sendData', 'firstCreatingTemplate');
    },
    collectDataQuest(questions) {
      this.questions = questions;
    },
    async addTicket() {
      if (this.questions.teoreticalQuestions === undefined || this.questions.practicalQuestions === undefined) {
        alert('База вопросов не должна быть пустой');
        return;
      }
      this.ticketAdding = this.tick;
      const data = {
        allQuestions: this.questions,
        ticket: this.ticketAdding,
        jwt: localStorage.getItem('jwt'),
      };
      await axios
        .post('http://localhost:8081/tickets/ticket', data)
        .then((res) => {
          res;
          alert('Шаблон успешно создан');
        })
        .catch((err) => alert(err.response.data.message));
    },
  },
};
</script>

<style scoped src="@/css/addingData/ticket-create/secondCreatingTemplate.css"></style>
