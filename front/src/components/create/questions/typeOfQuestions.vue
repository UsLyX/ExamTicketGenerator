<template>
  <!-- Контейнер с типом вопроса -->
  <div class="questions__flex-container">
    <h1 class="questions__title">{{ typeOfQuestions }}</h1>
    <a href="#" class="image__doc"></a>
  </div>
</template>
<script>
export default {
  props: {
    typeOfQuestions: String,
  },
};
</script>
<style scoped src="@/css/typeOfQuestions.css"></style>
