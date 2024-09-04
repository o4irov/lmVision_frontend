<template>
  <div id="app">
    <div>
      <navbar />
      <router-view />
    </div>
    <customFooter />
  </div>
</template>

<script>
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default {
  name: "App",
  components: {
    navbar: Navbar,
    customFooter: Footer,
  },
  mounted() {
    document.addEventListener("DOMContentLoaded", function () {
      document.body.classList.add("fade-in");

      // Найдем все ссылки на странице
      const links = document.querySelectorAll("a[href]");

      // Добавляем обработчик события клика на каждую ссылку
      links.forEach((link) => {
        link.addEventListener("click", function (event) {
          event.preventDefault(); // Отключаем стандартное поведение ссылки

          const href = this.href; // Получаем URL ссылки

          // Добавляем класс fade-out к телу страницы
          document.body.classList.remove("fade-in");
          document.body.classList.add("fade-out");

          // Переходим по ссылке после окончания анимации
          setTimeout(() => {
            window.location.href = href;
          }, 300); // Время в миллисекундах, совпадающее с длительностью анимации
        });
      });
    });
  },
};
</script>

<style src="@/assets/styles/global.scss" lang="scss"></style>
<style>
body {
  background-color: #ffffff !important;
  scroll-behavior: smooth;
  overflow-x: hidden;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.fade-in {
  opacity: 1;
}

.fade-out {
  opacity: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

::-webkit-scrollbar {
  display: none;
}
</style>
