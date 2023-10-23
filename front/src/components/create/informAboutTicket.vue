<!-- Контейнер с информацией о билете -->
<template>
  <div class="ticket__name">
    <h1 class="ticket__name__text">Название билета:</h1>
    <input class="ticket__name__input" type="text" v-model="ticket.ticketName" />
  </div>
  <div class="grid__container">
    <InputFields msg="Цикловая коммисия" :tick="ticket.cyclicСommission" @dataTransmission="getStorageData" />
    <InputFields msg="Название предмета" :tick="ticket.subjectName" @dataTransmission="getStorageData" />
    <InputFields msg="Факультет" :tick="ticket.faculty" @dataTransmission="getStorageData" />
    <InputFields msg="Экзаменатор" :tick="ticket.informAboutExaminer" @dataTransmission="getStorageData" />
    <InputFields
      msg="Направление подготовки/cпециальность"
      :tick="ticket.speciality"
      @dataTransmission="getStorageData"
    />
    <InputFields msg="Председатель ЦК" :tick="ticket.informAboutChairman" @dataTransmission="getStorageData" />
  </div>
</template>

<script>
import InputFields from './inputFields.vue';
export default {
  components: { InputFields },
  emits: ['ticket'],
  props: {
    shablon: Object,
  },
  data() {
    return {
      ticket: {
        ticketName: this.shablon ? this.shablon.ticketName : '',
        informAboutChairman: this.shablon ? this.shablon.informAboutChairman : '',
        faculty: this.shablon ? this.shablon.faculty : '',
        speciality: this.shablon ? this.shablon.speciality : '',
        informAboutExaminer: this.shablon ? this.shablon.informAboutExaminer : '',
        subjectName: this.shablon ? this.shablon.subjectName : '',
        cyclicСommission: this.shablon ? this.shablon.cyclicСommission : '',
      },
    };
  },
  methods: {
    getStorageData(data) {
      if (data.getName === 'Цикловая коммисия') {
        this.ticket.cyclicСommission = data.getInput;
      } else if (data.getName === 'Название предмета') {
        this.ticket.subjectName = data.getInput;
      } else if (data.getName === 'Факультет') {
        this.ticket.faculty = data.getInput;
      } else if (data.getName === 'Экзаменатор') {
        this.ticket.informAboutExaminer = data.getInput;
      } else if (data.getName === 'Направление подготовки/cпециальность') {
        this.ticket.speciality = data.getInput;
      } else if (data.getName === 'Председатель ЦК') {
        this.ticket.informAboutChairman = data.getInput;
      }

      this.$emit('ticket', this.ticket);
    },
  },
  watch: {
    shablon: function (newData) {
      this.ticket = newData;
    },
  },
};
</script>
<style scoped src="@/css/informAboutTicket.css"></style>
