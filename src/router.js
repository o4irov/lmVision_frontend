import { createWebHistory, createRouter, createWebHashHistory } from "vue-router";

import homePage from "@/components/homePage.vue";
import about from "@/components/about.vue";
import payment from "@/components/payment.vue";
import contacts from "@/components/contacts.vue";
import catalog from "@/components/catalog.vue";
import portfolio from "@/components/portfolio.vue";
import order from "@/components/order.vue";
import notFound from "./components/notFound.vue";
import cart from "@/components/cart.vue";

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
  },
  {
    path: '/payment',
    name: 'payment',
    component: payment,
    meta: {
      title: "Доставка|Оплата"
    }
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: contacts,
    meta: {
      title: "Контакты"
    }
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: catalog,
    meta: {
      title: "Каталог"
    }
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: portfolio,
    meta: {
      title: "Портфолио"
    }
  },
  {
    path: '/order',
    name: 'order',
    component: order,
    meta: {
      title: "Заказ"
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart,
    meta: {
      title: "Корзина"
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: notFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(), // указываем, что будет создаваться история посещений веб-страниц
  routes,
  scrollBehavior(to, from, savedPosition) {

    // Если нет сохраненной позиции, прокручиваем вверх
    return { x: 0, y: 0, };

  } // подключаем маршрутизацию
});


export default router;