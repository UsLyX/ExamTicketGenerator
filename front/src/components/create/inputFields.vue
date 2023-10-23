<template>
  <!-- Поле ввода информации -->
  <div class="container-input">
    <label class="input__title" :for="parametrs.id">{{ msg }}</label>
    <input class="input" type="text" :id="parametrs.id" v-model="parametrs.getInput" @input="dataTransmission" />
  </div>
</template>
<script>
export default {
  props: {
    msg: String,
    tick: String,
  },
  data() {
    return {
      parametrs: {
        id: `input-${Math.round(Math.random() * 1000)}`,
        getName: this.msg,
        getInput: this.tick ? this.tick : '',
      },
    };
  },
  methods: {
    dataTransmission() {
      this.$emit('dataTransmission', this.parametrs);
    },
  },
  watch: {
    tick: function (newData) {
      this.parametrs.getInput = newData;
    },
  },
};
</script>
<style scoped src="@/css/inputFields.css"></style>
