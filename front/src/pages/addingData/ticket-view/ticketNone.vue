<template>
  <div class="container">
    <p>На данный момент у вас нет билетов</p>
  </div>
</template>
<script>
export default {
  name: 'ticketNone',
  methods: {
    transition() {
      this.$router.push({ name: 'ticket-creating' });
    },
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
p {
  color: rgba(64, 93, 145, 1);
  font-size: 20px;
  margin-bottom: 20px;
}
button {
  color: #fff;
  font-size: 18px;
  background-color: rgba(64, 93, 145, 1);
  border: 1px solid rgba(64, 93, 145, 1);
  padding: 15px 25px;
  border-radius: 40px;
  transition: 0.2s ease-in-out;
}
button:hover {
  background-color: #fff;
  color: rgba(64, 93, 145, 1);
}
</style>
