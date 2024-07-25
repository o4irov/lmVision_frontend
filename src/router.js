import { createWebHistory, createRouter } from "vue-router";

import homePage from "@/components/homePage.vue"
import about from "@/components/about.vue"

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: homePage,
    meta: {
      title: "Главная страница"
    }
  },
  {
    path: '/about',
    name: 'about',
    component: about,
    meta: {
      title: "О нас"
    }
  }
];

const router = createRouter({
  history: createWebHistory(), // указываем, что будет создаваться история посещений веб-страниц
  routes, // подключаем маршрутизацию
});


export default router;