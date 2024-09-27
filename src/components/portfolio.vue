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
        <h2 :class="isScrolled(0, 0)">
          В нашем портфолио представлены успешно завершённые проекты наших клиентов.
        </h2>
        <p :class="isScrolled(0, 100)">
          Мы используем только проверенное оборудование ведущих мировых производителей,
          что гарантирует надёжность и долгий срок службы наших систем.
        </p>
      </div>
      <div class="projects-right col-sm-3">
        <img src="@/assets/img/trophy.png" alt="trophy" :class="isScrolled(100, 0)" />
        <img src="@/assets/img/target.png" alt="target" :class="isScrolled(100, 0)" />
      </div>
      <div class="projects-pluses">
        <div class="projects-pluses-item">
          <img src="@/assets/img/tech.png" alt="" :class="isScrolled(200, 300)" />
          <p :class="isScrolled(200, 300)">Технологии</p>
        </div>
        <div class="projects-pluses-item">
          <img src="@/assets/img/reliability.png" alt="" :class="isScrolled(200, 350)" />
          <p :class="isScrolled(200, 350)">Надёжность</p>
        </div>
        <div class="projects-pluses-item">
          <img src="@/assets/img/comfortIcon.png" alt="" :class="isScrolled(200, 400)" />
          <p :class="isScrolled(200, 400)">Удобство</p>
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
        <h2>
          Как работают наши камеры<span
            class="pink question"
            :class="isScrolled(1700, 1200)"
            >?</span
          >
        </h2>
        <p>
          Посмотрите на реальные примеры, чтобы убедиться в высоком качестве работы наших
          камер. Наша галерея проектов наглядно демонстрирует эффективность и надёжность
          установленных систем видеонаблюдения. Каждое изображение и видео подтверждают
          превосходное качество съёмки и стабильную работу оборудования.
        </p>
        <!-- <router-link :to="'/catalog'" class="howItWorks-left-link">
          Посмотреть камеры&nbsp;<i class="fa-solid fa-arrow-right arrow animated"></i>
        </router-link> -->
        <a :href="'/catalog'" class="howItWorks-left-link">
          Посмотреть камеры&nbsp;<i class="fa-solid fa-arrow-right arrow animated"></i
        ></a>
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
      scrollY: 0,
      scrolls: new Set(),
      portfolioItems: [
        {
          id: 1,
          name: "Установка камеры для дома",
          address: "Иркутск 2020 г.",
          image: "photo_1.jpg",
        },
        {
          id: 2,
          name: "Камеры на спортобъекте",
          address: 'Иркутск, стадион "Труд" 2022 г.',
          image: "photo_2.jpg",
        },
        {
          id: 3,
          name: "Камера в подъезде",
          address: "Иркутск, Радужный 118А 2022 г.",
          image: "photo_3.jpg",
        },
        {
          id: 4,
          name: "Видеонаблюдение в частном доме",
          address: "Иркутск, пос. Молодёжный 2023 г.",
          image: "photo_4.jpg",
        },
        {
          id: 5,
          name: "Видеонаблюдение для магазина",
          address: "Иркутск, Ул. Трилиссера 2023 г.",
          image: "photo_5.jpg",
        },
        {
          id: 6,
          name: "Насройка системы видеонаблюдения",
          address: "Частный сектор 2024 г.",
          image: "photo_6.jpg",
        },
        {
          id: 7,
          name: "Видеонаблюдение в частном доме",
          address: "Иркутск, пос. Молодёжный 2023 г.",
          image: "photo_7.jpg",
        },
        {
          id: 8,
          name: "Видеонаблюдение для магазина",
          address: "Иркутск, Ул. Трилиссера 2023 г.",
          image: "photo_8.jpg",
        },
        {
          id: 9,
          name: "Насройка системы видеонаблюдения",
          address: "Частный сектор 2024 г.",
          image: "photo_9.jpg",
        },
      ],
    };
  },
  computed: {},
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;
    },
    isScrolled(desktop, mobile) {
      if (this.scrolls.has(desktop)) {
        return { animated: true };
      }

      var isAnimate = this.scrollY > (window.innerWidth >= 768 ? desktop : mobile);
      if (isAnimate) {
        this.scrolls.add(desktop);
      }
      return { animated: isAnimate };
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
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
    & h2 {
      opacity: 0;
      transform: translateX(-100px);
      transition: all 1s ease-in-out;

      &.animated {
        opacity: 1;
        transform: none;
      }
    }

    & p {
      opacity: 0;
      transform: translateY(-100px);
      transition: all 1s ease-in-out;
      transition-delay: 0.5s;

      &.animated {
        opacity: 1;
        transform: none;
      }
    }
  }
  &-right {
    position: relative;
    & img {
      position: absolute;
      &:first-child {
        width: 220px;
        top: -50px;
        left: 0;

        opacity: 0;
        transform: translateX(-100px);
        transition: all 1s ease-in-out;
        transition-delay: 0.5s;

        &.animated {
          opacity: 1;
          transform: none;
        }
      }

      &:last-child {
        width: 175px;
        right: 0;
        bottom: -30px;

        opacity: 0;
        transform: translateX(100px);
        transition: all 1s ease-in-out;
        transition-delay: 0.5s;

        &.animated {
          opacity: 1;
          transform: none;
        }
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

        opacity: 0;
        transform: translateY(-100px);
        transition: all 1s ease-in-out;
        transition-delay: 1.5s;

        &.animated {
          opacity: 1;
          transform: none;
        }
      }

      &:first-child {
        & img,
        p {
          transition-delay: 1s;
        }
      }
      &:last-child {
        & img,
        p {
          transition-delay: 2s;
        }
      }

      & p {
        display: inline-block;

        opacity: 0;
        transform: translateY(100px);
        transition: all 1s ease-in-out;
        transition-delay: 1.5s;

        &.animated {
          opacity: 1;
          transform: none;
        }
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

        & img {
          transform: translateX(-100px);
        }
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

    & .question {
      display: inline-block;
      transition: all 1s;
      transform: rotate(180deg) translateX(10px) translateY(-30px);

      &.animated {
        transform: none;
      }
    }

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
