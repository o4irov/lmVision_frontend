<template>
  <div class="head">
    <div class="container">
      <div class="head-title">
        <h1>Доставка и Оплата<span class="pink point">.</span></h1>
      </div>
      <div class="head-text row">
        <p class="col-sm-5 col-12">
          Быстрая и удобная доставка с гибкими вариантами оплаты
        </p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="delivery">
      <div class="delivery-title">
        <h2>Доставка<span class="pink">.</span></h2>
      </div>
      <div class="delivery-text row">
        <p class="delivery-text col-sm-10 col-12">
          Мы предлагаем быструю и удобную доставку камер видеонаблюдения и их
          коплектующих, обеспечивая их надежную перевозку и транспортировку. Вы можете
          выбрать наиболее подходящий для вас способ доставки во время создания заказа или
          оплаты товара.
        </p>
      </div>
      <div class="delivery-variants row">
        <div class="delivery-variants-left col-sm-4">
          <img src="../assets/img/courier.png" alt="courier" class="courier" />
          <img src="../assets/img/truck.png" alt="truck" class="truck" />
          <img src="../assets/img/pickup.png" alt="pickup" class="pickup" />
        </div>
        <div class="delivery-variants-right col-sm-8 col-12">
          <h2>Варианты доставки<span class="pink"></span></h2>
          <div class="delivery-variants-right-list">
            <p>
              <span class="pink">1</span>Курьерская доставка – для жителей крупных городов
              доступна услуга курьерской доставки, при которой вы получите ваш заказ
              непосредственно на дом или в офис.
            </p>
            <p>
              <span class="pink">2</span>Доставка через транспортные компании – для
              доставки в регионы мы сотрудничаем с надежными транспортными компаниями,
              которые обеспечивают безопасную и своевременную перевозку оборудования.
            </p>
            <p>
              <span class="pink">3</span>Самовывоз – вы можете самостоятельно забрать ваш
              заказ с нашего склада, предварительно согласовав время.
            </p>
          </div>
        </div>
      </div>
      <div class="delivery-questions row">
        <div class="delivery-questions-left col-sm-8 col-12">
          <h2>Остались вопросы по доставке<span class="pink">?</span></h2>
          <p>
            Если у вас остались вопросы по поводу доставки и транспортировки товара в ваш
            регион - напишите нам или оставьте свои контакты, и мы с вами свяжемся!
          </p>
          <router-link :to="'/contacts'" class="delivery-questions-left-link">
            Написать нам&nbsp;<i class="fa-solid fa-arrow-right arrow animated"></i>
          </router-link>
        </div>
        <div class="delivery-questions-right col-sm-4">
          <img src="@/assets/img/delivery.png" alt="delivery" />
        </div>
      </div>
    </div>
    <div class="payment row">
      <div class="payment-block col-sm-9 col-12">
        <h2>Оплата<span class="pink">.</span></h2>
        <p>
          Для вашего удобства, оплата заказов в LM Video производится вне сайта. Вы можете
          оплатить ваш заказ посредством банковского перевода при создании заявки.
          <br /><br />
          Также возможен вариант оплаты напрямую при самовывозе или при выполнении услуг
          на вашем объекте. Такой подход позволяет нам обеспечить максимальную
          безопасность и прозрачность каждой транзакции, а также предоставить вам гибкость
          в выборе наиболее удобного способа оплаты.
          <br /><br />
          Если вы хотите произвести дистанционную оплату за товар или услугу, мы
          идивидуально вышлем вам счёт на оплату. Вы можете выбрать наиболее удобный для
          вас способ - получить счет по электронной почте или через мессенджер.
        </p>
      </div>
      <img src="../assets/img/payment.png" alt="payment" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>

<style lang="scss">
@import "@/assets/styles/variables.scss";

$pink: rgba(232, 107, 117, 1);
$mainText: rgba(66, 70, 73, 1);

.delivery {
  &-title {
    margin-bottom: 45px;
    & h2 {
      font-size: 40px;
    }
  }
  &-text {
    margin-bottom: 20px;
    & p {
      font-size: 18px !important;
    }
  }

  &-variants {
    &-left {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 55px;

      & img {
        width: 150px;
      }

      & .courier {
        margin-top: 40px;
        margin-left: -70px;
      }
      & .truck {
        margin-top: -20px;
        margin-left: 150px;
      }
      & .pickup {
        margin-top: -50px;
        margin-left: -50px;
      }
    }
    &-right {
      & h2 {
        font-size: 32px;
        font-weight: 500 !important;
        margin-bottom: 20px;
      }
      &-list {
        & p {
          font-size: 18px !important;
          font-weight: 500 !important;
          & .pink {
            font-size: 32px;
          }
        }
      }
    }
  }

  &-questions {
    margin-bottom: 100px;
    &-left {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      & h2 {
        max-width: 90%;
      }
      &-link {
        display: inline;
        width: 220px;
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

    &-right {
      & img {
        width: 433px;
      }
    }
  }
}

@media (max-width: 768px) {
  .delivery {
    &-variants {
      margin-bottom: 50px;
      &-left {
        display: none;
      }
    }
    &-questions {
      &-left {
        h2 {
          margin-bottom: 50px;
        }
        p {
          margin-bottom: 50px;
        }
      }
      &-right {
        display: none;
      }
    }
  }
}

.payment {
  position: relative;
  padding-bottom: 100px;
  &-block {
    & h2 {
      margin-bottom: 36px;
    }
  }
  & img {
    width: 347px;
    position: absolute;
    right: 0;
    bottom: 0;
  }
}

@media (max-width: 768px) {
  .payment {
    & img {
      display: none;
    }
  }
}

@media (max-width: 768px) {
  h2 {
    font-size: 24px !important;
  }
}
</style>
