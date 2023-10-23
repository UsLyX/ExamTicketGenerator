<template>
  <!-- Генерация билета. Вторая страница.-->
  <div class="tickets__generation__two">
    <div class="flex-size">
      <h1 class="title">Генерация билетов</h1>
      <button class="back__box" @click="sendData">
        <div class="back__img"></div>
        <h1 class="back__text">Назад</h1>
      </button>
      <h1 class="complete">
        Не удалось<br />
        сгенерировать<br />
        билеты<br />
        <br />
        <div class="error__image"></div>
        <br />
        В шаблоне <br />
        нет вопросов
        <br />
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ticketsGenerationError',
  data() {
    return {
      generateTicket: null,
    };
  },
  methods: {
    sendData() {
      this.$emit('sendData', 'ticketsGenerationOne');
    },
  },
};
</script>

<style scoped src="@/css/addingData/ticket-generation/ticketsGenerationError.css"></style>
