<template>
  <div style="height: 80px"></div>
  <div class="container">
    <div class="mainBlock row">
      <div class="mainBlock-text col-md-6 col-12">
        <h1>
          <span class="mainBlock-text-pink">LM</span> Video <br />
          Solutions<span class="mainBlock-text-pink">.</span>
        </h1>
        <div class="row">
          <p class="col-sm-8">
            Вместе с вами мы смотрим в одном направлении, обеспечивая ваше спокойствие и
            безопасность. Ваша безопасность - наша единственная цель.
          </p>
        </div>
        <router-link :to="'/contacts'" class="pinkButton">Выбрать камеру</router-link>
      </div>
      <div class="mainBlock-mobileImg">
        <img src="@/assets/img/mobileMainCamera.png" alt="main camera" />
      </div>
    </div>
  </div>
  <div class="background">
    <img src="@/assets/img/mainCamera.png" alt="home page" />
  </div>
  <div class="container">
    <div class="reputation">
      <h2>Наша репутация</h2>
      <div class="reputation-body row">
        <div class="reputation-body-border col-12 col-sm-4">
          <div class="reputation-body-block">
            <div class="reputation-body-block-logo">
              <img src="@/assets/img/support.svg" alt="services" />
            </div>
            <div class="reputation-body-block-title">Лучшие сервисы</div>
            <div class="reputation-body-block-text">
              Nullam senectus porttitor in eget. Eget rutrum leo interdum.
            </div>
          </div>
        </div>
        <div class="reputation-body-border col-12 col-sm-4 p-4">
          <div class="reputation-body-block">
            <div class="reputation-body-block-logo">
              <img src="@/assets/img/support.svg" alt="support" />
            </div>
            <div class="reputation-body-block-title">Лучшая поддержка</div>
            <div class="reputation-body-block-text">
              Cursus semper tellus volutpat aliquet lacus.
            </div>
          </div>
        </div>
        <div class="reputation-body-border col-12 col-sm-4 p-4">
          <div class="reputation-body-block">
            <div class="reputation-body-block-logo">
              <img src="@/assets/img/projects.svg" alt="support" />
            </div>
            <div class="reputation-body-block-title">Лучшие проекты</div>
            <div class="reputation-body-block-text">
              Ultricies at ipsum nunc, tristique nam lectus.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="choose">
      <h2>Подберите то, что нужно</h2>
      <p class="col-md-8">
        Независимо от масштаба проекта, мы гарантируем современные и высококачественные
        решения в области видеонаблюдения, способствующие созданию безопасного и
        технологичного будущего.
      </p>
      <div class="choose-cameras row gx-3">
        <div class="choose-cameras-frame col-3">
          <img src="@/assets/img/home.png" alt="home" />
        </div>
        <div class="choose-cameras-frame col-3">
          <img src="@/assets/img/outside.png" alt="outside" />
        </div>
        <div class="choose-cameras-frame col-3">
          <img src="@/assets/img/ofice.png" alt="ofice" />
        </div>
        <div class="choose-cameras-frame col-3">
          <img src="@/assets/img/manufacture.png" alt="manufacture" />
        </div>
      </div>
      <div class="choose-slider">
        <div class="choose-slider-container">
          <img src="@/assets/img/home.png" alt="home" class="slide" />
          <img src="@/assets/img/outside.png" alt="outside" class="slide" />
          <img src="@/assets/img/ofice.png" alt="ofice" class="slide" />
          <img src="@/assets/img/manufacture.png" alt="manufacture" class="slide" />
        </div>
      </div>
    </div>
  </div>
  <div class="about">
    <div class="container">
      <div class="about-content">
        <img src="@/assets/img/about.png" alt="we" class="about-content-image" />
        <div class="about-content-text">
          <h2>Раздел о нас и кто мы</h2>
          <p>
            Уже 10 лет мы занимаем лидирующие позиции на рынке видеонаблюдения. Благодаря
            использованию передовых технологий, мы предлагаем решения, которые
            обеспечивают максимальный комфорт и удобство для наших клиентов.
            <br />
            <br />
            Наша команда, обладая высоким уровнем профессионализма, разрабатывает
            индивидуальные проекты любого масштаба, гарантируя надежность и
            инновационность. Мы стремимся к тому, чтобы каждое наше решение способствовало
            созданию безопасного и технологически продвинутого будущего.
          </p>
          <router-link :to="'/about'" class="about-content-text-link">
            Читать далее &nbsp;<i class="fa-solid fa-arrow-right arrow"></i>
          </router-link>
          <router-link :to="'/portfolio'" class="about-content-text-button">
            портфолио
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="experience row">
      <div class="experience-left col-sm-8 col-12">
        <div class="experience-left-card clients">
          <span class="experience-left-card-num">84</span>
          <br />
          <div class="experience-left-card-text">
            <span class="experience-left-card-text-line"></span>
            <span class="experience-left-card-text-word">Клиента</span>
          </div>
          <img src="@/assets/img/clients.png" alt="clients" />
        </div>
        <div class="experience-left-card projects">
          <span class="experience-left-card-num">50</span>
          <br />
          <div class="experience-left-card-text">
            <span class="experience-left-card-text-line"></span>
            <span class="experience-left-card-text-word"
              >Проектов<br />
              выполнено</span
            >
          </div>
          <img src="@/assets/img/projects.png" alt="projects" />
        </div>
        <div class="experience-left-card awards">
          <span class="experience-left-card-num">37</span>
          <br />
          <div class="experience-left-card-text">
            <span class="experience-left-card-text-line"></span>
            <span class="experience-left-card-text-word">Премий</span>
          </div>
          <img src="@/assets/img/awards.png" alt="awards" />
        </div>
        <div class="experience-left-card years">
          <span class="experience-left-card-num">10</span>
          <br />
          <div class="experience-left-card-text">
            <span class="experience-left-card-text-line"></span>
            <span class="experience-left-card-text-word">Лет на рынке</span>
          </div>
          <img src="@/assets/img/years.png" alt="years" />
        </div>
      </div>
      <div class="experience-right col-sm-4 col-12">
        <h1>Более <span class="experience-right-pink">10 лет</span> работы</h1>
        <p>Мы там то, мы там сё, жыли были, тили тили трали вали</p>
        <router-link :to="'/form'" class="pinkButton">Оставить заявку</router-link>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="catalog">
      <div class="catalog-head">
        <h2>Каталог</h2>
        <ul class="catalog-head-list">
          <li
            v-for="filter in filters"
            :key="filter.name"
            :class="{ active: currentFilter === filter.name }"
            class="catalog-head-list-item"
          >
            <a @click="changeFilter(filter.name)">{{ filter["text"] }}</a>
          </li>
        </ul>
      </div>
      <div class="catalog-slider">
        <swiper
          :slidesPerView="1"
          :spaceBetween="30"
          :pagination="pagination"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide v-for="(page, pageIndex) in paginatedProducts" :key="pageIndex">
            <div class="catalog-slider-grid row px-3 py-3">
              <div
                class="catalog-slider-grid-item col-12 col-md-4 mb-4"
                v-for="(catalogItem, index) in page"
                :key="index"
              >
                <img src="@/assets/img/noimage.png" :alt="catalogItem.name" />
                <h3 class="catalog-slider-item-name">{{ catalogItem.name }}</h3>
                <p class="catalog-slider-item-description">
                  {{ catalogItem["description"] }}
                </p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <swiper
          :slidesPerView="1"
          :spaceBetween="30"
          :pagination="pagination"
          :modules="modules"
          class="mobileSlider"
        >
          <swiper-slide>
            <div
              class="catalog-slider-grid-item"
              v-for="(catalogItem, index) in catalog"
              :key="index"
            >
              <img src="@/assets/img/noimage.png" :alt="catalogItem.name" />
              <h3 class="catalog-slider-item-name">{{ catalogItem.name }}</h3>
              <p class="catalog-slider-item-description">
                {{ catalogItem["description"] }}
              </p>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
  <div class="seeOnline">
    <div class="container">
      <div class="seeOnline-row row">
        <div class="seeOnline-row-leftMobile col-sm-3 col-12">
          <h2>Проверьте, как камера работает онлайн<span class="pink">˙</span></h2>
          <div class="content">
            <img src="@/assets/img/see.png" alt="product" />
            <div class="seeOnline-row-leftMobile-product">
              <h3>Название камеры</h3>
              <p>технические данные и другая нужная инфа</p>
            </div>
          </div>
        </div>
        <div class="seeOnline-row-left col-sm-3 col-12">
          <h2>Проверьте, как камера работает онлайн<span class="pink">˙</span></h2>
          <div class="seeOnline-row-left-product">
            <h3>Название камеры</h3>
            <p>технические данные и другая нужная инфа</p>
          </div>
        </div>
        <div class="padding col-sm-2 col-0"></div>
        <div class="seeOnline-row-right col-sm-7 col-12">
          <img src="@/assets/img/house.png" alt="house" />
          <div class="seeOnline-row-right-example">Пример работы</div>
          <div class="seeOnline-row-right-linkToVideo">
            Смотреть <i class="fa-solid fa-play"></i>
          </div>
        </div>
        <div class="seeOnline-navigation">
          <div class="seeOnline-navigation-arrow">
            <i class="fa-solid fa-angle-left"></i>
          </div>
          <div class="seeOnline-navigation-arrow">
            <i class="fa-solid fa-angle-right"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
  <customForm></customForm>
</template>

<script>
import Form from "./form";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
    customForm: Form,
  },
  data() {
    return {
      filters: [
        { name: "products", text: "Товары" },
        { name: "services", text: "Услуги" },
        { name: "cameras", text: "Видеокамеры" },
        { name: "components", text: "Комплектующие" },
      ],
      catalog: Array(19).fill({
        img: "@/assets/img/noimage.png",
        name: "Название камеры",
        description: "Описание основных характеристик",
      }),
      itemsPerPage: 6,
      currentPage: 1,
      currentFilter: "products",
    };
  },
  setup() {
    return {
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
      modules: [Grid, Pagination],
    };
  },
  computed: {
    paginatedProducts() {
      const pages = [];
      for (let i = 0; i < this.catalog.length; i += this.itemsPerPage) {
        pages.push(this.catalog.slice(i, i + this.itemsPerPage));
      }
      return pages;
    },
  },
  methods: {
    changeFilter(filter) {
      this.currentFilter = filter;
    },
  },
  mounted() {
    const catalog = document.createElement("a");
    // Назначаем ему текст
    catalog.textContent = "В каталог";
    // Устанавливаем путь маршрута
    const routePath = "/catalog";
    // Назначаем ему href атрибут для SEO и удобства навигации
    catalog.href = routePath;
    catalog.className = "swiper-pagination-catalog";

    // Добавляем обработчик события клика
    catalog.addEventListener("click", (event) => {
      // Предотвращаем стандартное поведение ссылки
      event.preventDefault();
      // Используем метод Vue Router для перехода
      this.$router.push(routePath);
    });

    // Вставляем ссылку в DOM
    document.querySelectorAll(".swiper-pagination")[0].append(catalog);

    var mobileCatalog = catalog.cloneNode(true);

    document.querySelectorAll(".swiper-pagination")[1].append(mobileCatalog);
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/variables.scss";

$pink: rgba(232, 107, 117, 1);
$mainText: rgba(33, 37, 41, 1);
$secondary: rgba(56, 99, 165, 1);

* {
  color: $mainText;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  height: calc((100% - 30px) / 2) !important;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

h2 {
  font-size: 40px !important;
}

.pinkButton {
  display: flex;
  justify-content: center;
  text-decoration: none;
  width: 264px;
  padding: 16px;
  border: 0;
  border-radius: 5px;
  background-color: $pink;
  font-size: 18px;
  color: white;
}

//main block

.background {
  position: absolute;
  top: -10%;
  left: 50%;
  width: 50%;
  height: 100%;
  z-index: -1;

  & img {
    width: 90%;
    height: auto;
    display: block;
  }
}

@media (max-width: 768px) {
  .background {
    display: none;
  }
}

.mainBlock {
  display: flex;
  margin-top: -120px;
  margin-bottom: 60px;
  font-family: $unbounded-v;
  height: 900px;

  &-text {
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding-bottom: 100px;
    color: $mainText;
    h1 {
      font-size: 64px;
      span {
        color: $pink;
      }
    }
    p {
      font-size: 18px;
    }
  }
  &-mobileImg {
    display: none;
  }
}

@media (max-width: 768px) {
  .mainBlock {
    margin-bottom: 40px;
    padding-top: 250px;
    height: auto;

    &-text {
      padding-bottom: 40px;
    }
    &-mobileImg {
      display: block;
    }
  }
}

// reputation

.reputation {
  font-family: $unbounded-v;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &-body {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 79px;
    padding-top: 49px;

    &-block {
      border: 2px dotted rgba(224, 227, 235, 1);
      border-radius: 4px;
      padding: 20px;

      & * {
        margin-bottom: 18px;
      }
      &-title {
        font-weight: 300;
        font-size: 20px;
        color: rgba(61, 68, 92, 1);
      }
      &-text {
        font-weight: 300;
        font-size: 16px;
        color: rgba(133, 142, 173, 1);
      }
    }
  }
}

@media (max-width: 768px) {
  .reputation {
    &-body {
      padding-top: 80px;
    }
  }
}

//choose

.choose {
  font-family: $unbounded-v;
  margin-bottom: 202px;

  h2 {
    margin-bottom: 40px !important;
  }

  p {
    font-size: 18px;
    margin-bottom: 40px;
  }

  &-cameras {
    display: flex;
    justify-content: space-between;
    &-frame {
      height: 375px;
    }
  }

  &-slider {
    display: none;
    width: 100%;
    overflow-x: auto;

    &-container {
      display: flex;
      white-space: nowrap;

      & .slide {
        margin-right: 15px;
        max-width: 90%;

        &:last-child {
          margin: 0;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .choose {
    margin-bottom: 128px;
    &-cameras {
      display: none !important;
    }
    &-slider {
      display: block;
    }
  }
}

// about

.about {
  background-color: rgba(244, 244, 244, 1);
  font-family: $unbounded-v;

  &-content {
    display: flex;
    margin-bottom: 20px;

    &-image {
      margin-top: -68px;
      margin-bottom: 68px;
      margin-right: 155px;
    }
    &-text {
      display: flex;
      flex-direction: column;
      padding-top: 10px;
      & h2 {
        font-size: 40px;
        margin-bottom: 40px;
      }

      & p {
        font-size: 18px;
        margin-bottom: 40px;
      }

      &-link {
        width: 175px;
        margin-bottom: 30px;
        text-decoration: none;
        color: $mainText;

        & .arrow {
          transition: padding 0.3s;
        }

        &:hover {
          .arrow {
            padding-left: 10px;
          }
        }
      }

      &-button {
        width: 211px;
        text-align: center;
        text-decoration: none;
        color: $mainText;
        padding: 16px 40px;
        border: 1px solid;
        border-radius: 5px;

        transition: all 0.5s;
        &:hover {
          background-color: $mainText;
          color: white;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .about {
    background-color: white;
    &-content {
      flex-direction: column;

      &-image {
        margin: 0;
        margin-bottom: 70px;
      }
    }
  }
}

// experience

.experience {
  font-family: $unbounded-v;
  padding-top: 80px;
  margin-bottom: 20px;
  &-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 723px;
    font-family: $work-sans;
    &-card {
      width: 280px;
      height: 155px;
      position: relative;

      padding: 30px;
      box-sizing: content-box;
      box-shadow: 0px 12px 16px -4px rgba(17, 24, 39, 0.1);
      border-radius: 4px 0px 0px 0px;
      border: 1px 0px 0px 0px;
      background-color: white;

      &-num {
        font-size: 72px;
        font-weight: 600;
      }
      &-text {
        display: flex;
        &-word {
          font-size: 24px;
          font-weight: 300;
          color: rgba(102, 114, 153, 1);
        }
        &-line {
          display: block;
          width: 6px;
          margin-right: 12px;
          margin-left: 12px;
          background-color: $secondary;
        }
      }
      & img {
        position: absolute;
      }
    }

    & .clients {
      margin-left: 25%;
      z-index: 2;
      & img {
        top: -19px;
        right: -28px;
      }
    }
    & .projects {
      margin-right: 40%;
      margin-top: -10%;
      z-index: 1;
      padding-top: 10px;
      padding-bottom: 40px;
      & img {
        top: -49px;
        left: -33px;
      }
    }
    & .awards {
      margin-left: 10%;
      margin-top: -10%;
      z-index: 2;
      & img {
        top: -15px;
        right: -21px;
      }
    }
    & .years {
      margin-right: 30%;
      margin-top: -10%;
      z-index: 1;
      & img {
        bottom: -42px;
        right: -12px;
      }
    }
  }
  &-right {
    padding-top: 40px;
    & h1 {
      font-size: 48px;
      font-weight: 700;
      color: rgba(66, 70, 73, 1);
      margin-bottom: 34px;
    }
    &-pink {
      color: $pink;
    }
    & p {
      font-size: 20px;
      color: rgba(82, 91, 122, 1);
      margin-bottom: 80px;
    }
  }
}

@media (max-width: 768px) {
  .experience {
    display: flex;
    flex-direction: column-reverse;
    &-right {
      margin-bottom: 70px;
    }
    &-left {
      padding: 0;
      margin-bottom: 70px;
      &-card {
        box-sizing: border-box;
        width: 100%;
        height: auto;
        padding: 0 0 10px 0 !important;
        margin: 0 0 26px 0 !important;
        &-num {
          margin-bottom: 0;
        }
        & img {
          display: none !important;
        }
      }
    }
  }
}

// catalog

.catalog {
  font-family: $unbounded-v;
  color: $mainText;
  margin-bottom: 70px;
  &-head {
    & h2 {
      margin-bottom: 64px;
    }
    &-list {
      display: flex;
      list-style: none;
      padding: 0;
      margin: 0 !important;
      gap: 20px;
      width: 100%;
      overflow-x: scroll;

      &-item {
        padding: 16px 19px 16px 18px;
        border-radius: 40px;
        border: 1px solid $mainText;
        cursor: pointer;
        transition: all 0.5s ease-in-out;

        &:hover {
          border: 1px solid $pink;
          color: $pink;
        }

        &.active {
          background-color: $pink;
          border: 1px solid;
          color: white;
        }
      }
    }
  }
  &-slider {
    & .swiper {
      width: 100%;
      height: 100%;
      margin-left: auto;
      margin-right: auto;
    }

    &-grid {
      &-item {
        width: 424px;
        height: 469px;
        display: flex;
        flex-direction: column;
        border-radius: 4px;
        text-align: left;

        & img {
          width: 100%;
          height: auto;
        }
        & h3 {
          margin: 0;
          font-size: 18px;
        }
        & p {
          margin: 0;
          font-size: 18px;
        }
      }
    }
    & .mobileSlider {
      display: none !important;
    }
  }

  & .swiper-pagination {
    display: flex;
    justify-content: end;
    height: 25px;
    &-catalog {
      margin-top: 2px;
      margin-left: 5px;
      font-size: 22px;
      text-align: end;
      cursor: pointer;
      color: rgba(33, 37, 41, 0.25);
      text-decoration: none;
    }
    &-bullet {
      font-size: 24px;
      width: 20px;
      background: none;
    }
  }
}

@media (max-width: 768px) {
  .catalog {
    display: none;
    &-slider {
      display: none;
      & .mobileSlider {
        display: flex !important;
      }
    }
  }
}

.seeOnline {
  background-color: $mainText;
  font-family: $unbounded-v;
  padding: 124px 0 0 0;
  &-row {
    &-left {
      & h2 {
        color: white;
        font-size: 48px;
        margin-bottom: 26px;
        & .pink {
          color: $pink;
        }
      }
      &-product {
        width: 480px;
        height: 321px;
        background-image: url("@/assets/img/see.png");
        border-radius: 8px;

        display: flex;
        flex-direction: column;
        justify-content: end;
        padding-left: 24px;

        & h3 {
          color: white;
          font-size: 20px;
          font-weight: 700;
        }
        & p {
          color: white;
          font-size: 14px;
          font-weight: 300;
        }
      }
    }
    &-right {
      width: 100%;
      height: auto;
      background: url("@/assets/img/house.png") no-repeat;
      border-radius: 8px;
      position: relative;
      padding: 0 !important;
      &-example {
        position: absolute;
        background-color: white;
        padding: 6px 30px 10px 34px;
        border-radius: 8px 4px 100px 8px;
      }
      &-linkToVideo {
        position: absolute;
        right: 26px;
        bottom: 26px;
        color: white;
        font-size: 14px;
        cursor: pointer;
        & i {
          color: white;
          margin-left: 10px;
        }
        padding: 18px 25px;
        border-radius: 100px;
        border: 1px solid white;
      }
      & img {
        display: none;
      }
    }
  }
  &-navigation {
    margin-bottom: 65px;
    padding-top: 40px;
    display: flex;
    & i {
      color: white;
    }
    &-arrow {
      width: 56px;
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba(255, 255, 255, 0.24);
      border-radius: 50px;
      margin-right: 8px;
      cursor: pointer;
    }
  }
}

@media (max-width: 768px) {
  .seeOnline {
    padding: 33px 0 0 0;
    &-row {
      &-left {
        display: none !important;
      }
      &-leftMobile {
        margin-bottom: 40px;
        & h2 {
          color: white;
          font-size: 20px !important;
          margin-bottom: 26px;
          & .pink {
            color: $pink;
          }
        }
        &-product {
          & h3 {
            color: white;
            font-size: 15px;
            font-weight: 700;
          }
          & p {
            color: white;
            font-size: 11px;
            font-weight: 300;
          }
        }
        & .content {
          display: flex;
          & img {
            width: 60%;
            border-radius: 8px;
            margin-right: 15px;
          }
        }
      }

      &-right {
        padding: 0 12px !important;
        background: none;
        display: block;
        & img {
          display: inline !important;
          width: 100%;
          border-radius: 8px;
        }

        &-example {
          top: 0;
        }
      }
    }
  }
}
</style>
