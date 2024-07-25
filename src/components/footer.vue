<template>
  <footer>
    <div class="container d-flex justify-content-between align-items-center">
      <div style="width: 100%">
        <div class="lists">
          <ul>
            <p>Страницы</p>
            <li><a href="#">О нас</a></li>
            <li><a href="#">Каталог</a></li>
            <li><a href="#">Доставка|Оплата</a></li>
            <li><a href="#">Контакты</a></li>
          </ul>
          <ul>
            <p>Соцсети</p>
            <li><a href="#">Telegram</a></li>
            <li><a href="#">Whatsapp</a></li>
          </ul>
          <ul>
            <p>Информация</p>
            <li><a href="#">Политика обработки данных</a></li>
          </ul>
        </div>
        <div class="copyright">
          <p>Made by Raccoon IT Group &copy;</p>
          <!-- <p>Desined by Roman P</p> -->
          <div class="designed">
            Desined by Roman P
            <br />
            Programmed by Andrey O
          </div>
        </div>
      </div>
    </div>
  </footer>
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

<style>
footer {
  background-color: #212529;
  color: #ffffff;
  font-size: 21px;
  padding: 100px 0 40px 0;
  width: 100%;
}
.lists {
  display: flex;
  margin-bottom: 5%;
  line-height: 25px;
}
.lists ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-right: 20px;
  gap: 8px;
}
ul:last-child {
  margin-left: 20px;
}
.lists li {
  font-size: 18px;
}
li a {
  text-decoration: none;
  color: #ffffff;
}
.copyright {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 300;
}
.designed {
  color: rgb(255, 255, 255, 0.3);
}
@media (max-width: 768px) {
  footer {
  }
}
</style>
