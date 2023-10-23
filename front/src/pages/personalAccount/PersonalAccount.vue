<template>
  <section class="personalAccount">
    <popUp v-if="isPopUpVisible" @close="closePopUp" @user-updated="updateUser"></popUp>
    <div class="exPersonalAccount__inner">
      <div class="profile">
        <div class="profile__inner">
          <div class="profile__inner-content">
            <div class="profile__inner-img">
              <img src="@/assets/img/icon-profile.svg" alt="Аватар" />
            </div>
            <div class="profile__inner-text">
              <h1>{{ name }}</h1>
              <p>Преподаватель</p>
            </div>
          </div>
          <div class="profile__inner-exit" @click="logout">Выйти</div>
        </div>
      </div>
      <div class="archive">
        <div class="archive__inner">
          <h1>Архив билетов</h1>
          <div class="archive__inner-options">
            <a href="#">Последние созданные билеты</a>
            <a href="#">Избранные билеты</a>
          </div>
        </div>
      </div>

      <div class="detailded-information">
        <div class="detailed-information__inner">
          <h1>Подробная информация о пользователе</h1>
          <div class="detailed-information__inner-content">
            <div class="adress">
              <div class="adress__inner">
                <p>Адрес электронной почты</p>
                <h2>{{ email }}</h2>
              </div>
            </div>
            <div class="password">
              <div class="password__inner">
                <div class="password__inner-content">
                  <div class="password__inner-show">
                    <p>Пароль</p>
                    <a href="#"><img src="@/assets/img/icon-closed-eye.svg" alt="Закрытый глаз" /></a>
                  </div>
                  <h2>*************</h2>
                </div>
              </div>
            </div>
            <div class="tel">
              <div class="tel__inner">
                <p>Телефон</p>
                <h2>{{ tel }}</h2>
              </div>
            </div>
            <div class="faculty">
              <div class="faculty__inner">
                <p>Факультет</p>
                <h2>{{ faculty }}</h2>
              </div>
            </div>
          </div>
          <div class="detalid-information__button">
            <button class="button" style="padding: 10px" @click="openPopup">Редактировать данные</button>
          </div>
        </div>
      </div>
      <div class="news">
        <div class="news__inner">
          <h1>Новости</h1>
          <div class="news__inner-paragraps">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus lacinia nisi et scelerisque.Ut a
              libero vel est sollicitudin placerat sit amet ut massa. Vestibulum vitae velit eget neque viverra sagittis
              vel sed nibh.
            </p>
            <p>Vestibulum vitae velit eget neque viverra sagittis vel sed nibh.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

import popUp from '../../components/popUp.vue';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      faculty: '',
      tel: '',
      lastPath: null,
      isPopUpVisible: false,
    };
  },
  components: {
    popUp,
  },
  methods: {
    openPopup() {
      this.isPopUpVisible = true;
    },
    closePopUp() {
      this.isPopUpVisible = false;
    },
    async updateUser() {
      const data = {
        jwt: localStorage.getItem('jwt'),
      };
      await axios
        .post('http://localhost:8081/user/info', data)
        .then((res) => {
          this.name = res.data.username;
          this.email = res.data.email;
          this.faculty = res.data.faculty;
          this.tel = res.data.phone;
        })
        .catch((err) => console.error(err));
    },
    logout() {
      delete localStorage.jwt;
      this.$router.push('/');
      alert('Вы вышли из системы');
    },
    lastUrl() {
      //получаем предыдущий url
      this.lastPath = this.$router.options.history.state.back;
      //перенаправлем пользоваетля на авторизацию, если url`ом является страницы "авторизация" или "регистрация"
      if (
        this.lastPath === '/authorizationTeacher' ||
        this.lastPath === null ||
        this.lastPath === '/' ||
        this.lastPath === '/registrationTeacher'
      ) {
        alert('Вы не вошли в систему');
        this.$router.push({ path: '/authorizationTeacher' });
      }
    },
  },
  async mounted() {
    const data = {
      jwt: localStorage.getItem('jwt'),
    };
    await axios
      .post('http://localhost:8081/user/info', data)
      .then((res) => {
        this.name = res.data.username;
        this.email = res.data.email;
        this.faculty = res.data.faculty;
        this.tel = res.data.phone;
      })
      .catch((err) => console.error(err));
    if (this.tel === undefined) {
      this.tel = '-';
    }
    if (this.faculty === undefined) {
      this.faculty = '-';
    }
  },
  created() {
    //если токен есть, то переходим на страницу, если его нет, то запрещаем переход,
    //обращаясь к методу запрета
    if (localStorage.getItem('jwt') !== null) {
      this.$router.push({ name: 'personalAccount' });
    } else {
      this.lastUrl();
    }
  },
};
</script>

<style scoped>
/*personal account-----------*/
.exPersonalAccount__inner {
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: flex-start;
  justify-content: space-between;
  gap: 50px 50px;
  align-content: space-evenly;
}

.exPersonalAccount__inner p {
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;

  color: #3a373d;
}

.exPersonalAccount__inner h1 {
  text-align: center;
  padding-bottom: 30px;
}

.exPersonalAccount__inner h2 {
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  color: #405d91;
}

/* Портфолио  *******************/
.profile {
  grid-area: 'profile';
}

.profile__inner {
  display: flex;
  flex-direction: column;

  width: auto;
  background: #ffffff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  padding: 30px;
}

.profile__inner-img {
  margin-right: 35px;
}

.profile__inner-content {
  display: flex;
  justify-content: center;
}

/* .profile__inner-content p {
} */

.profile__inner-text {
  text-align: center;
}

.profile__inner-exit {
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;

  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  color: rgba(58, 55, 61, 0.7);
  cursor: pointer;
}

/* Детальная информация  *******************/

.detailded-information {
  grid-area: 'info';
}

.detailed-information__inner {
  background: #ffffff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  width: auto;
  display: flex;
  flex-direction: column;
  padding: 30px;
}

.detailed-information__inner-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px 25px;
}

.detailed-information__inner-content p {
  padding-bottom: 10px;
  font-size: 22px;
}

.adress__inner {
  margin-bottom: 20px;
}

.adress__add img {
  display: inline;

  height: 30px;
  vertical-align: text-bottom;
  cursor: pointer;

  padding-left: 10px;
}

.password__inner-show img {
  display: inline;

  height: 30px;
  vertical-align: text-bottom;
  cursor: pointer;

  padding-left: 25px;
}

.password__inner-show {
  display: flex;
}

.password__inner-content {
  display: block;
  margin-bottom: 20px;
}

.password__change img {
  display: inline;

  height: 30px;
  vertical-align: text-bottom;
  cursor: pointer;

  padding-left: 10px;
}

.detalid-information__button {
  display: flex;
  justify-content: end;
}
.detalid-information__button button {
  margin-top: 20px;
}

/* Новости  *******************/
.news {
  grid-area: 'news';
}

.news__inner {
  width: auto;
  max-height: 350px;
  overflow-y: scroll;
  background: #ffffff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  padding: 30px;
}

.news__inner-paragraps p:not(:last-child) {
  padding-bottom: 25px;
}

/* Архив************ */
.archive {
  grid-area: 'archive';
}

.archive__inner {
  width: auto;
  background: #ffffff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 30px;
}

.archive__inner-options {
  display: flex;
  flex-wrap: wrap;
}

.archive__inner-options a {
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-decoration-line: underline;

  color: #3a373d;
}

.archive__inner-options a:not(:last-child) {
  padding-bottom: 25px;
}
</style>
