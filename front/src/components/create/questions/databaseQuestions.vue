<template>
  <!-- Блок с базой вопросов -->
  <h1 class="text">База вопросов</h1>
  <div class="questions">
    <TypeOfQuestions typeOfQuestions="Теоритические вопросы" />
    <TypeOfQuestions typeOfQuestions="Практические задания" />
  </div>

  <div class="ul__container">
    <ul class="ul ul-teoretical">
      <div class="ul__element">
        <input class="teoretical enter" placeholder="Введите вопрос" />
        <button class="add__button" @click="emitClick">Добавить</button>
      </div>
    </ul>

    <ul class="ul ul-practical">
      <div class="ul__element">
        <input class="practical enter" placeholder="Введите задание" />
        <button class="add__button" @click="emitClick">Добавить</button>
      </div>
    </ul>
  </div>

  <div class="quest__container">
    <ul class="teoretical__questions__box quest">
      <li class="question" v-for="(question, index) in questions.teoreticalQuestions" :question="question" :key="index">
        <div class="ul__element">
          <input class="ul__input" :placeholder="question" disabled />
          <button class="delete__block" @click="deleteButtonTeoretical(index)">X</button>
        </div>
      </li>
    </ul>
    <ul class="practical__questions__box quest">
      <li class="question" v-for="(question, index) in questions.practicalQuestions" :key="index">
        <div class="ul__element">
          <input class="ul__input" :placeholder="question" disabled />
          <button class="delete__block" @click="deleteButtonPractical(index)">X</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import TypeOfQuestions from './typeOfQuestions.vue';
export default {
  components: { TypeOfQuestions },
  emits: ['collectData', 'changeQuestions'],
  props: {
    quests: Object,
  },
  data() {
    return {
      questions: {
        teoreticalQuestions: [],
        practicalQuestions: [],
      },
    };
  },
  methods: {
    emitClick(e) {
      const teoretical = document.querySelector('.teoretical');
      const practical = document.querySelector('.practical');
      if (e.currentTarget.parentElement.parentElement.classList.contains('ul-teoretical')) {
        if (teoretical.value === '') {
          alert('Поле не должно быть пустым');
          return;
        }
        this.questions.teoreticalQuestions.push(teoretical.value);
        teoretical.value = '';
      } else {
        if (practical.value === '') {
          alert('Поле не должно быть пустым');
          return;
        }
        if (this.questions.practicalQuestions.find((item) => item === practical.value) !== undefined) {
          alert('Задание уже было добавлено');
          return;
        }
        this.questions.practicalQuestions.push(practical.value);
        practical.value = '';
      }

      this.$emit('collectData', this.questions);
      this.$emit('changeQuestions', this.questions);
    },
    deleteButtonTeoretical(index) {
      this.questions.teoreticalQuestions.splice(index, 1);
      this.$emit('changeQuestions', this.questions);
    },
    deleteButtonPractical(index) {
      this.questions.practicalQuestions.splice(index, 1);
      this.$emit('changeQuestions', this.questions);
    },
  },
  watch: {
    quests: async function (newData) {
      this.questions.teoreticalQuestions = newData ? newData.teoreticalQuestions : [];
      this.questions.practicalQuestions = newData ? newData.practicalQuestions : [];
    },
  },
};
</script>
<style scoped src="@/css/databaseQuestions.css"></style>
