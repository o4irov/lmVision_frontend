<template>
  <div class="portfolioHead">
    <div class="container">
      <div class="portfolioHead-title">
        <h1>Портфолио<span class="pink point">.</span></h1>
      </div>
      <div class="portfolioHead-text row">
        <p class="col-sm-6 col-12">
          Мы ценим и дорожим нашими клиентами. Ваш комфорт и безопасность — наши
          приоритеты.
        </p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="projects row">
      <div class="projects-left col-sm-9">
        <h2>
          В нашем портфолио представлены успешно завершённые проекты наших клиентов.
        </h2>
        <p>
          Мы используем только проверенное оборудование ведущих мировых производителей,
          что гарантирует надёжность и долгий срок службы наших систем. Доверяя нам, вы
          выбираете безопасность и уверенность в завтрашнем дне.
        </p>
      </div>
      <div class="projects-right col-sm-3">
        <img src="@/assets/img/trophy.png" alt="trophy" />
        <img src="@/assets/img/target.png" alt="target" />
      </div>
      <div class="projects-pluses">
        <div class="projects-pluses-item">
          <img src="@/assets/img/tech.png" alt="" />
          Технологии
        </div>
        <div class="projects-pluses-item">
          <img src="@/assets/img/reliability.png" alt="" />
          Надёжность
        </div>
        <div class="projects-pluses-item">
          <img src="@/assets/img/comfortIcon.png" alt="" />
          Удобство
        </div>
      </div>
    </div>
  </div>
  <div class="backgroundGrid">
    <div class="container">
      <div class="portfolioGrid">
        <PortfolioCard
          v-for="portfolioItem in portfolioItems"
          :key="portfolioItem.id"
          :portfolioItem="portfolioItem"
        />
      </div>
    </div>
  </div>
  <div class="mobilePortfolioGrid">
    <div class="mobilePortfolioGrid-container">
      <PortfolioCard
        v-for="portfolioItem in portfolioItems"
        :key="portfolioItem.id"
        :portfolioItem="portfolioItem"
      />
    </div>
  </div>
  <div class="container">
    <div class="howItWorks row">
      <div class="howItWorks-left col-sm-8 col-12">
        <h2>Как работают наши камеры<span class="pink">?</span></h2>
        <p>
          Посмотрите на реальные примеры, чтобы убедиться в высоком качестве работы наших
          камер. Наша галерея проектов наглядно демонстрирует эффективность и надёжность
          установленных систем видеонаблюдения. Каждое изображение и видео подтверждают
          превосходное качество съёмки и стабильную работу оборудования.
        </p>
        <router-link :to="'/catalog'" class="howItWorks-left-link">
          Посмотреть камеры&nbsp;<i class="fa-solid fa-arrow-right arrow animated"></i>
        </router-link>
      </div>
      <div class="howItWorks-right col-sm-4">
        <img src="@/assets/img/howItWorks.png" alt="delivery" />
      </div>
    </div>
  </div>
  <customForm></customForm>
</template>

<script>
import PortfolioCard from "./portfolioCard.vue";
import Form from "./form.vue";

export default {
  components: {
    PortfolioCard,
    customForm: Form,
  },
  data() {
    return {
      portfolioItems: [
        {
          id: 1,
          name: "Установка камеры для дома",
          address: "Иркутск 2020 г.",
          image: "@/assets/img/noimage.png",
        },
        {
          id: 2,
          name: "Камеры на спортобъекте",
          address: 'Иркутск, стадион "Труд" 2022 г.',
          image: "@/assets/img/noimage.png",
        },
        {
          id: 3,
          name: "Камера в подъезде",
          address: "Иркутск, Радужный 118А 2022 г.",
          image: "@/assets/img/noimage.png",
        },
        {
          id: 4,
          name: "Видеонаблюдение в частном доме",
          address: "Иркутск, пос. Молодёжный 2023 г.",
          image: "@/assets/img/noimage.png",
        },
        {
          id: 5,
          name: "Видеонаблюдение для магазина",
          address: "Иркутск, Ул. Трилиссера 2023 г.",
          image: "@/assets/img/noimage.png",
        },
        {
          id: 6,
          name: "Насройка системы видеонаблюдения",
          address: "Частный сектор 2024 г.",
          image: "@/assets/img/noimage.png",
        },
      ],
    };
  },
  computed: {},
  methods: {},
  mounted() {
    const nav = document.querySelectorAll(".link");
    nav.forEach((element) => {
      element.style.color = "white";
    });

    document.querySelectorAll(".nav-links li").forEach((link) => {
      link.classList.add("nav-links-after");
    });
  },
  beforeUnmount() {
    const nav = document.querySelectorAll(".link");
    nav.forEach((element) => {
      element.style.color = "black";
    });

    document.querySelectorAll(".nav-links li").forEach((link) => {
      link.classList.remove("nav-links-after");
    });
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/variables.scss";

$pink: rgba(232, 107, 117, 1);
$mainText: rgba(66, 70, 73, 1);

.portfolioHead {
  background-image: url("@/assets/img/portfolio.png");
  background-size: cover; /* Изображение растянется на весь контейнер */
  background-position: center; /* Центрируем изображение */
  background-repeat: no-repeat; /* Отключаем повторение изображения */
  height: 640px;
  width: 100%;
  margin-bottom: 101px;

  display: flex;
  flex-direction: column;
  justify-content: end;

  padding-bottom: 80px;

  & h1 {
    color: white !important;
    font-size: 64px;
    margin-bottom: 40px;
  }

  & p {
    color: white !important;
    font-size: 18px;
  }
}

@media (max-width: 768px) {
  .portfolioHead {
    margin-bottom: 45px;
    & h1 {
      font-size: 40px;
    }
  }
}

.projects {
  margin-bottom: 93px;
  &-left {
  }
  &-right {
    position: relative;
    & img {
      position: absolute;
      &:first-child {
        width: 220px;
        top: -50px;
        left: 0;
      }

      &:last-child {
        width: 175px;
        right: 0;
        bottom: -30px;
      }
    }
  }

  &-pluses {
    display: flex;
    justify-content: space-around;
    padding-top: 32px;

    &-item {
      font-size: 32px;

      & img {
        margin-right: 32px;
      }
    }
  }
}

@media (max-width: 768px) {
  .projects {
    margin-bottom: 45px;
    &-right {
      display: none;
    }

    &-pluses {
      flex-direction: column;
      padding-left: 50px !important;

      &-item {
        font-size: 24px;
        margin-bottom: 40px;
        margin-right: 0;
      }
    }
  }
}

.backgroundGrid {
  background-color: rgba(244, 244, 244, 1);
  padding: 64px 0;

  margin-bottom: 118px;

  & .portfolioGrid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    gap: 40px 16px;
  }
}

.mobilePortfolioGrid {
  display: none;
}

@media (max-width: 768px) {
  .backgroundGrid {
    display: none;
  }

  .mobilePortfolioGrid {
    display: block;
    width: 100%;
    margin-bottom: 50px;
    overflow-x: auto;

    &-container {
      display: flex;
      padding: 0px 15%;

      &::after {
        content: "";
        flex: 0 0 15%;
      }

      & .portfolioCard {
        margin-right: 15px;
      }
    }
  }
}

.howItWorks {
  &-left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &-link {
      display: inline;
      width: 300px;
      color: $mainText;
      font-size: 20px;
      font-weight: 500;
      text-decoration: none;
      & .arrow {
        opacity: 0;
        transition: transform opacity 1s padding 0.3s;
        transform: translateX(200px);
      }

      & .animated {
        transition: all 1s;
        transform: translateX(0);
        opacity: 1;
      }

      &:hover {
        .arrow {
          padding-left: 10px;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .howItWorks {
    &-right {
      display: none;
    }
  }
}
</style>
