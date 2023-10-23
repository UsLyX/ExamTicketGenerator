<template>
  <!-- Генерация билета. Первая страница.-->
  <div class="tickets__generation__one">
    <div class="flex-container">
      <h1 class="title">Генерация билетов</h1>
      <div class="choise__container">
        <h1 class="choise">Выберите шаблон билета</h1>
        <input type="text" list="datalist" placeholder="Шаблон №" class="datalist__box" />
        <datalist class="datalist" id="datalist">
          <option v-for="(shablon, index) in amountTickets" :key="index">
            Шаблон №{{ this.indexedShablon.push(shablon) }}
          </option>
        </datalist>
      </div>
      <h1 class="amount__tickets">Укажите количество<br />гинерируемых билетов</h1>
      <div class="amount__flex-container">
        <input v-model="amountGenerationTickets" type="number" class="amount" min="1" max="10" />
        <h1 class="tickets__text">Билетов</h1>
      </div>
      <div class="router-link__box__size">
        <button class="router-link" @click="sendData">Сгенерировать</button>
      </div>
    </div>
  </div>
</template>

<script scoped>
import axios from 'axios';
export default {
  name: 'ticketsGenerationOne',
  data() {
    return {
      amountTickets: '',
      amountGenerationTickets: '',
      indexedShablon: [],
    };
  },
  methods: {
    sendData() {
      if (document.querySelector('.datalist__box').value === '') {
        alert('Не выбран шаблон');
        return;
      }
      if (document.querySelector('.amount').value === '') {
        alert('Не выбрано количество генерируемых билетов');
        return;
      }
      if (Number(document.querySelector('.amount').value) > 30) {
        alert('Можно создать не более 30 билетов');
        return;
      }
      const indexShablon = document.querySelector('.datalist__box').value.replace('Шаблон №', '') - 1;
      const amountGenerationTickets = this.amountGenerationTickets;
      this.$emit('generationIndexShablon', indexShablon);
      this.$emit('generationAmountTickets', amountGenerationTickets);
      this.$emit('sendData', 'ticketsGenerationTwo');
    },
  },
  async mounted() {
    const data = {
      jwt: localStorage.getItem('jwt'),
    };
    await axios
      .post('http://localhost:8081/user/info', data)
      .then((res) => {
        res;
        this.amountTickets = res.data.tickets.length;
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped src="@/css/addingData/ticket-generation/ticketsGenerationOne.css"></style>
