<template>
  <div class="container order">
    <h1>Оформление заказа</h1>
    <h3>Ваш заказ:</h3>
    <ol>
      <li>Камера QX776035 <img src="@/assets/img/delete.svg" alt="" /></li>
      <li>Установка камеры дома <img src="@/assets/img/delete.svg" alt="" /></li>
      <li>
        Комплектующие для камеры QX776035 <img src="@/assets/img/delete.svg" alt="" />
      </li>
    </ol>
    <div class="form-right">
      <div class="form-right-forms">
        <form action="">
          <div class="form-right-forms-left">
            <input type="text" class="name" placeholder="Имя" />
            <input
              type="text"
              class="number"
              placeholder="Номер телефона"
              maxlength="12"
            />
          </div>
          <div class="form-right-forms-right">
            <input type="text" class="email" placeholder="Email" />
            <input type="text" class="addres" placeholder="Адрес" />
          </div>
          <textarea type="text" class="message" placeholder="Ваше сообщение"></textarea>
        </form>
      </div>
      <div class="form-right-personalData">
        <input type="checkbox" />
        Я согласен с обработкой персональных данных
      </div>
      <button class="pinkButton">Отправить</button>
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

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.order {
  padding: 100px 0;

  & h1 {
    font-size: 40px;
    font-weight: 400;
    margin-bottom: 20px;
  }

  & h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  li {
    color: rgba(147, 146, 146, 1);
    font-weight: 300;
    margin-bottom: 15px;
    text-decoration: underline;

    &:last-child {
      margin-bottom: 30px;
    }
  }

  & input {
    font-size: 18px;

    &:last-child {
      margin-right: 0;
    }

    &::placeholder {
      font-size: 18px;
    }
  }

  & textarea {
    margin-right: 0;
  }
}

@media (max-width: 768px) {
  .order {
    padding: 100px 0px 100px 10px;

    & * {
      font-size: 14px;
    }

    & textarea {
      width: 95%;
    }

    & input,
    textarea {
      &::placeholder {
        font-size: 14px;
      }
    }

    & h1 {
      font-size: 28px;
    }
  }
}
</style>
