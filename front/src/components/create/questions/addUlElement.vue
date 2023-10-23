<template>
  <!-- Контейнер с добавлением нового вопроса -->
  <div class="ul__element">
    <input class="ul__input" v-model="input" :placeholder="msg" />
    <button class="add__block" @click="emitClick">Добавить</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: '',
    };
  },
  methods: {
    emitClick() {
      this.$emit('emitClick', this.input);
    },
  },
  props: {
    msg: String,
  },
};
</script>
<style scoped src="@/css/addUlElement.css"></style>
