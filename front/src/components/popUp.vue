<template>
  <div class="modal">
    <div class="popUp">
      <div class="popUp__inner">
        <a href="#" class="popUp__close" @click="closePopUp">X</a>

        <form class="popUp__content" v-on:submit.prevent="changeInfo">
          <h2 class="popUp__title">Редактирование данных</h2>

          <div class="teacher__block">
            <!-- <img class="info-logo" src="@/assets/img/icon-teacher.svg" alt="" /> -->

            <input v-model="name" type="text" placeholder="ФИО" class="information__input" />
            <input v-model="email" type="email" placeholder="E-mail" class="information__input" />
            <input v-model="password" type="password" placeholder="Пароль" class="information__input" />
            <input v-model="tel" type="number" placeholder="Телефон" class="information__input" />
            <input v-model="faculty" type="text" placeholder="Факультет" class="information__input" />
          </div>

          <button class="button" type="submit">Редактировать данные</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'PopUp',
  isClose: false,
  data() {
    return {
      name: '',
      email: '',
      password: '',
      tel: '',
      faculty: '',
    };
  },

  methods: {
    closePopUp() {
      this.$emit('close');
    },
    async changeInfo() {
      const data = {
        jwt: localStorage.getItem('jwt'),
        name: this.name,
        email: this.email,
        password: this.password,
        faculty: this.faculty,
        tel: this.tel,
      };
      await axios
        .patch('http://localhost:8081/user/info', data)
        .then((res) => {
          res;
          this.$emit('user-updated');
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 10;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.popUp {
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 10px;
}

.popUp__inner {
  background: white;
  color: #000;
  max-width: 1200px;
  padding: 35px;
  position: relative;
}

.popUp__close {
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 25px;
  text-decoration: none;
  color: #405d91;
}

.popUp__content {
  display: flex;
  flex-direction: column;
  justify-items: center;
  font-size: calc(calc(1vw + 1vh) / 1.4);
  padding-top: 15px;
}

.information__input {
  display: flex;
  justify-self: center;
  margin-top: calc(calc(1vw + 1vh) * 1.25);
  width: calc(calc(1vw + 1vh) * 11.5);
  height: calc(calc(1vw + 1vh) * 1.75);
  background: #dee2ea;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.25);
  border: none;
  outline: none;
}

.teacher__block {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.active {
  border: 1px solid #405d91;
}

.button {
  font-size: 20px;
  width: calc(calc(1vw + 1vh) * 8.5);
  background-color: #405d91;
  color: white;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 25px;
}

.autorization span {
  text-decoration: underline;
}
</style>
