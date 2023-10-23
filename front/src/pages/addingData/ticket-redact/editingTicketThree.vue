<template>
  <!-- Редактирование билета. Третья страница с редактированием вопросов.-->
  <div class="editing__ticket__three">
    <div class="flex-container">
      <h1 class="title">Редактирование шаблона 2/2</h1>

      <DatabaseQuestions @changeQuestions="changeQuestions" :quests="questions" />

      <div class="box">
        <div class="box__image">
          <button class="button" @click="change">Сохранить изменения</button>
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
import axios from 'axios';
import DatabaseQuestions from '../../../components/create/questions/databaseQuestions.vue';
export default {
  name: 'editingTicketThree',
  components: { DatabaseQuestions },
  props: {
    changeTicket: Object,
    index: Number,
  },
  data() {
    return {
      ticket: null,
      questions: {},
    };
  },
  methods: {
    sendData() {
      this.$emit('sendData', 'editingTicketTwo');
    },
    async change() {
      const data = {
        jwt: localStorage.getItem('jwt'),
        index: this.index,
        ticket: this.changeTicket,
        questions: this.questions,
      };
      await axios
        .patch('http://localhost:8081/tickets/ticket', data)
        .then((res) => {
          alert('Шаблон успешно отредактирован');
          res;
        })
        .catch((err) => console.log(err));
    },
    changeQuestions(quests) {
      this.questions = quests;
    },
  },
  async mounted() {
    const data = {
      jwt: localStorage.getItem('jwt'),
    };
    await axios.post('http://localhost:8081/user/info', data).then((res) => {
      this.ticket = res.data.tickets[this.index - 1];
      this.questions = res.data.tickets[this.index - 1].allQuestions
        ? res.data.tickets[this.index - 1].allQuestions
        : {};
    });
  },
};
</script>

<style scoped src="@/css/addingData/ticket-edit/editingTicketThree.css"></style>
