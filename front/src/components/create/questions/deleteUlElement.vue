<template>
  <!-- Контейнер с удалением вопроса -->
  <div class="ul__element">
    <input class="ul__input" v-model="quest" :placeholder="msg" disabled />
    <button class="delete__block" @click="deleteButton">X</button>
  </div>
</template>
<script>
export default {
  props: {
    msg: String,
    question: String,
  },
  data() {
    return {
      quest: this.question ? this.question : '',
    };
  },
  methods: {
    deleteButton(event) {
      this.$emit('deleteElement', event);
    },
  },
  watch: {
    question: function (newData) {
      newData;
    },
  },
};
</script>
<style scoped src="@/css/deleteUlElement.css"></style>
