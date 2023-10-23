<template>
  <!-- Шапка.Статичная.Не изменять -->
  <publicHeader></publicHeader>

  <div class="wrapper">
    <!-- Основной контент.Вставить свою компоненту -->
    <main class="main">
      <div class="container">
        <router-view />
      </div>
    </main>

    <!-- Подвал.Статичный.Не изменять -->
    <publicFooter></publicFooter>
  </div>
</template>
<script>
import publicHeader from './components/exHeader.vue';
import publicFooter from './components/exFooter.vue';

export default {
  name: 'App',
  components: { publicFooter, publicHeader },
};
</script>
