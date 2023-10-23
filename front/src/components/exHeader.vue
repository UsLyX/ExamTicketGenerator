<template>
  <header class="header">
    <nav class="nav">
      <div class="nav__body">
        <div v-if="jwt">
          <span><router-link to="/addingData" class="nav__text">Создание билетов</router-link></span>
          <span><router-link to="/personalAccount" class="nav__text">Личный кабинет</router-link></span>
        </div>
      </div>
    </nav>
    <div class="title__box">
      <div class="logo"></div>
      <div class="title__text">
        <h1 class="title">Генератор экзаменационных билетов</h1>
        <p class="text">
          Программное средство создания экзаменационных билетов
          <a href="https://ru.vuejs.org/" target="_blank" class="vue">Vue</a>.js
        </p>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      jwt: '',
    };
  },
  mounted() {
    if (localStorage.jwt) {
      this.jwt = localStorage.jwt;
    }
  },
  watch: {
    jwt(newJwt) {
      localStorage.jwt = newJwt;
    },
  },
};
</script>
<style scoped src="@/css/publicHeader.css"></style>
