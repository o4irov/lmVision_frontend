<template>
  <div class="container">
    <div class="form row">
      <div class="form-left col-sm-3 col-12">
        <div class="form-left-ofice">
          <h2>Наш офис</h2>
          <p>Avenida Marta Lopes, Nº2 8400-401 Vila Real, Portugal</p>
        </div>
        <div class="form-left-hours">
          <h2>Часы работы</h2>
          <p>
            Пн-Сб - 9:00 до 18:00 <br />
            Вс - выходной
          </p>
        </div>
        <div class="form-left-contacts">
          <h2>Наши контакты</h2>
          <p>
            Тел: +7914-899-13-95 <br />
            Email: lm_video@gmail.com
          </p>
        </div>
      </div>
      <div class="form-padding col-sm-2 col-0"></div>
      <div class="form-right col-sm-7 col-12">
        <h2>Напишите нам</h2>
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
  </div>
</template>

<script></script>

<style lang="scss">
@import "@/assets/styles/variables.scss";
.form {
  font-family: $unbounded-v;
  padding: 73px 0 40px 0;

  &-left {
    & h2 {
      margin-bottom: 40px;
    }
    & p {
      margin-bottom: 64px;
    }
  }

  &-right {
    h2 {
      margin-bottom: 40px;
    }
    &-forms {
      & input,
      textarea {
        width: 40%;
        margin-bottom: 20px;
        margin-right: 5%;
        padding: 10px;
        border: 1px solid rgba(244, 244, 244, 1);

        &::placeholder {
          font-size: 18px;
          color: rgba(166, 166, 171, 1);
        }
      }

      & .message {
        width: 85%;
        height: 210px;
        resize: none;
      }
    }

    &-personalData {
      margin-bottom: 20px;

      & input {
        margin-right: 10px;
      }
    }
  }
}
</style>
