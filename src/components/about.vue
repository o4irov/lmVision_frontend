<template>
  <div class="head">
    <div class="container">
      <div class="head-title">
        <h1>О нас<span class="pink point">.</span></h1>
      </div>
      <div class="head-text row">
        <p class="col-sm-7 col-12">
          Откройте для себя LM Vision и наш подход к обеспечению безопасности, надежности
          и передовых технологий в области видеонаблюдения.
        </p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="oneDirection">
      <div class="oneDirection-title row">
        <h2 :class="isScrolled(0, 0)" class="col-sm-6 col-12">
          Мы смотрим в одном направлении с нашими клиентами
        </h2>
      </div>
      <div class="oneDirection-example row">
        <div
          class="oneDirection-example-text col-sm-5 col-12"
          :class="isScrolled(500, 400)"
        >
          Установка камеры в чатном доме
          <br />
          Иркутск. 2023
        </div>
        <div class="oneDirection-example-image col-sm-7 col-12">
          <img
            src="../assets/img/oneDirection.png"
            :class="isScrolled(500, 200)"
            alt="montage"
          />
        </div>
      </div>
      <div class="oneDirection-text row">
        <p class="col-sm-10 col-12" :class="isScrolled(850, 700)">
          <p>В LM Vision мы уверены, что обеспечение безопасности и удобства наших клиентов -
          это главное. Мы постоянно ищем инновационные решения в области систем
          видеонаблюдения, чтобы создавать безопасное и защищенное будущее.</p>
          <br />
          <br />
          <p>
            Наше стремление к инновациям побуждает нас постоянно исследовать новые
          направления, совершенствовать наши процессы и предлагать передовые результаты
          для наших клиентов. Мы стремимся гарантировать, что наши решения всегда
          предоставляют максимальный комфорт и уверенность в безопасности. Присоединяйтесь
          к нам в принятии инноваций, чтобы вместе идти к более безопасному и комфортному
          миру.
          </p>
        </p>
      </div>
    </div>
    <div class="comfort"></div>
    <div class="comfortMobile">
      <h2>Мы заботимся о вашем комфорте<span class="pink">.</span></h2>
      <img src="../assets/img/comfortMobile.png" alt="comfort" />
    </div>
    <div class="security row">
      <div class="security-left col-sm-4">
        <img src="../assets/img/lock.png" alt="lock" class="lock" :class="isScrolled(1900, 700)" />
        <img src="../assets/img/shield.png" alt="shield" class="shield" :class="isScrolled(1900, 700)" />
      </div>
      <div class="security-right col-sm-8 col-12">
        <p>
          В LM Video мы понимаем, что безопасность и комфорт наших клиентов - это
          приоритет. Поэтому мы не только предлагаем передовые решения для
          видеонаблюдения, но и обеспечиваем полный спектр услуг, включая профессиональную
          установку и поддержку. Наши эксперты работают индивидуально с каждым клиентом,
          чтобы понять их уникальные потребности и предложить оптимальные решения. Мы
          также обеспечиваем простой и удобный процесс установки и настройки оборудования,
          минимизируя возможные неудобства. Наша цель - создать для клиентов ощущение
          уверенности и спокойствия, зная, что их безопасность находится в надежных руках.
        </p>
      </div>
    </div>
    <div class="usage">
      <div class="usage-example row">
        <div class="usage-example-image col-sm-8 col-12">
          <img src="../assets/img/usage.png" alt="usage" :class="isScrolled(2400, 2000)"/>
        </div>
        <div class="usage-example-text col-sm-4 col-12" :class="isScrolled(2400, 2200)">
          Принцип работы камеры на WiFi
        </div>
      </div>
      <div class="usage-text">
        <p class="col-sm-11 col-12">
          Наши системы видеонаблюдения просты в установке и не требуют дорогостоящих
          материалов, что делает процесс быстрым и экономичным. Пользование нашими
          камерами также предельно простое и интуитивно понятное, что позволяет клиентам
          легко управлять и контролировать свои системы безопасности. Наша цель - создать
          для клиентов ощущение уверенности и спокойствия, зная, что их безопасность
          находится в надежных руках, без лишних сложностей и затрат.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollY: 0,
      scrolls: new Set(),
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
  mounted() {},
};
</script>

<style lang="scss">
@import "@/assets/styles/variables.scss";

$pink: rgba(232, 107, 117, 1);
$mainText: rgba(66, 70, 73, 1);

* {
  color: $mainText;
  font-family: $unbounded-v;
}

h2 {
  font-weight: 400 !important;
}

.head {
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: 640px;
  padding: 64px 100px;
  margin-bottom: 50px;

  background: linear-gradient(rgba(255, 255, 255, 1) 0%, rgba(56, 99, 165, 1) 100%);

  &-title {
    margin-bottom: 48px;

    & h1 {
      font-size: 64px !important;
      font-weight: 400;
      color: rgba(244, 244, 244, 1);
    }
  }
  &-text {
    & p {
      font-size: 18px;
      color: rgba(244, 244, 244, 1);
    }
  }
}

@media (max-width: 768px) {
  .head {
    h1 {
      font-size: 48px !important;
    }
    padding: 64px 0;
  }
}

.oneDirection {
  margin-bottom: 70px;

  &-title {
    & h2 {
      font-size: 40px !important;

      opacity: 0;
      transform: translateX(-100px);
      transition: all 1s;

      &.animated {
        opacity: 1;
        transform: none;
      }
    }
  }

  &-example {
    display: flex;
    align-items: end;
    margin-bottom: 80px;

    &-text {
      color: rgba(166, 166, 171, 1);
      text-align: right;

      opacity: 0;
      transform: translateX(100px);
      transition: all 1s;
      transition-delay: 0.5s;

      &.animated {
        opacity: 1;
        transform: none;
      }
    }

    &-image {
      & img {
        max-width: 100%;

        opacity: 0;
        transform: translateX(-100px);
        transition: all 1s;

        &.animated {
          opacity: 1;
          transform: none;
        }
      }
    }
  }

  &-text {
    & p {
      & p {
        opacity: 0;
        transform: translateY(-100px);
        transition: all 0.5s;
      }

      &.animated {
        & p {
          opacity: 1;
          transform: none;

          &:last-child{
            transition-delay: 0.5s;
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .oneDirection {
    &-title {
      margin-bottom: 40px;
      & h2 {
        font-size: 20px !important;
      }
    }
    &-example {
      display: flex;
      flex-direction: column-reverse;

      &-text {
        transition-delay: 0;
      }

      &-image {
        margin-bottom: 40px;
      }
    }
  }
}

.comfort {
  height: 566px;
  background-image: url("../assets/img/comfort.png");
  margin-bottom: 42px;
}
.comfortMobile {
  display: none;
}

@media (max-width: 768px) {
  .comfort {
    display: none;
  }
  .comfortMobile {
    display: block;
    position: relative;
    margin-bottom: 12px;
    h2 {
      position: absolute;
      width: 182px;
      top: 30%;
      left: 5%;
      font-size: 24px !important;
    }
    img {
      max-width: 100%;
    }
    &-pink {
      color: $pink;
    }
  }
}

.security {
  height: 420px;
  margin-bottom: 50px;
  &-left {
    position: relative;
    
    & img {
      position: absolute;
      height: 230px;

      opacity: 0;
      transition: all 1s;

      &:first-child{
        transform: translateX(-100px);
      }

      &:last-child {
        right: 0;
        bottom: 0;

        transform: translateX(100px);
      }

      &.animated {
        opacity: 1;
        transform: none;
      }
    }
  }

  &-right {
    display: flex;
    align-items: center;
  }
}

@media (max-width: 768px) {
  .security {
    height: auto;
    margin-bottom: 25px;
    &-left {
      display: none;
    }
  }
}

.usage {
  margin-bottom: 128px;
  &-example {
    margin-bottom: 80px;
    &-image {
      & img {
        max-width: 100%;

        opacity: 0;
        transform: translateX(100px);
        transition: all 1s;

        &.animated {
          opacity: 1;
          transform: none;
        }
      }
    }
    &-text {
      display: flex;
      align-items: end;
      color: rgba(166, 166, 171, 1);
      font-size: 14px;

      opacity: 0;
        transform: translateX(-100px);
        transition: all 1s;
        transition-delay: 0.5s;

        &.animated {
          opacity: 1;
          transform: none;
        }
    }
  }
}

@media (max-width: 768px) {
  .usage {
    margin-bottom: 22px;
    &-example {
      margin-bottom: 40px;
      &-image {
        margin-bottom: 39px;
      }
      &-text {
        display: flex;
        justify-content: end;

        transition-delay: 0;
      }
    }
  }
}
</style>
