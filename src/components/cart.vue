<template>
  <div class="cart container">
    <!-- Левая часть с прокручиваемым списком товаров -->
    <div class="cart-items">
      <div v-for="item in items" :key="item.id" class="cart-item">
        <img :src="getImageUrl(item.image)" :alt="item.name" class="item-image" />
        <div class="item-details">
          <h3 class="item-name">{{ item.name }}</h3>
          <p class="item-description">{{ item.description }}</p>
          <div class="quantity-controls">
            <button
              @click="updateQuantity(item, item.quantity - 1)"
              class="quantity-button"
            >
              -
            </button>
            <span class="quantity">{{ item.quantity }}</span>
            <button
              @click="updateQuantity(item, item.quantity + 1)"
              class="quantity-button"
            >
              +
            </button>
            <button @click="deleteItem(item)" class="delete-button">удалить</button>
          </div>
        </div>
        <div class="item-sum">
          <p class="item-price">Цена за единицу: {{ item.price }} руб.</p>
          <p class="item-total">Сумма: {{ itemTotal(item) }} руб.</p>
        </div>
      </div>
    </div>

    <!-- Правая часть с итогами -->
    <div class="cart-summary">
      <h2>Итого</h2>
      <p>Количество товаров: {{ totalItems }}</p>
      <p>Общая сумма: {{ totalPrice }} руб.</p>
      <button @click="checkout" class="pinkButton">Оформить заказ</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          name: "Смартфон",
          description: "Современный смартфон с OLED экраном",
          price: 25000,
          quantity: 1,
          image: "noimage.png",
        },
        {
          id: 2,
          name: "Ноутбук",
          description: "Мощный игровой ноутбук",
          price: 75000,
          quantity: 1,
          image: "noimage.png",
        },
        {
          id: 3,
          name: "Беспроводные наушники",
          description: "Наушники с шумоподавлением",
          price: 7000,
          quantity: 2,
          image: "noimage.png",
        },
        {
          id: 4,
          name: "Умные часы",
          description: "Часы с функцией отслеживания активности",
          price: 15000,
          quantity: 1,
          image: "noimage.png",
        },
        {
          id: 5,
          name: "Кофеварка",
          description: "Эспрессо-машина для дома",
          price: 5000,
          quantity: 1,
          image: "noimage.png",
        },
        {
          id: 6,
          name: "Телевизор",
          description: "4K Ultra HD телевизор",
          price: 40000,
          quantity: 1,
          image: "noimage.png",
        },
        {
          id: 7,
          name: "Фитнес-браслет",
          description: "Фитнес-трекер для занятий спортом",
          price: 3000,
          quantity: 2,
          image: "noimage.png",
        },
        {
          id: 8,
          name: "Электросамокат",
          description: "Складной электросамокат",
          price: 20000,
          quantity: 1,
          image: "noimage.png",
        },
        {
          id: 9,
          name: "Планшет",
          description: "Мощный планшет с большим экраном",
          price: 30000,
          quantity: 1,
          image: "noimage.png",
        },
        {
          id: 10,
          name: "Игровая консоль",
          description: "Современная игровая консоль с поддержкой 4K",
          price: 35000,
          quantity: 1,
          image: "noimage.png",
        },
      ],
    };
  },
  computed: {
    totalItems() {
      return this.items.reduce((total, item) => total + item.quantity, 0);
    },
    totalPrice() {
      return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },
  methods: {
    updateQuantity(item, newQuantity) {
      if (newQuantity > 0) {
        item.quantity = newQuantity;
      }
      if (newQuantity === 0) {
        this.deleteItem(item);
      }
    },
    deleteItem(item) {
      var index = this.items.indexOf(item);
      if (index > -1) {
        this.items.splice(index, 1);
      }
    },
    itemTotal(item) {
      return item.price * item.quantity;
    },
    checkout() {
      alert("Оформление заказа");
    },
    getImageUrl(imageName) {
      return require(`@/assets/img/${imageName}`);
    },
    saveItemsToLocalStorage() {
      localStorage.setItem("cartItems", JSON.stringify(this.items));
    },
    loadItemsFromLocalStorage() {
      const savedItems = localStorage.getItem("cartItems");
      if (savedItems) {
        this.items = JSON.parse(savedItems);
      }
    },
  },
};
</script>

<style lang="scss">
.cart {
  display: flex;
  justify-content: space-between;
  padding-top: 100px;

  &-items {
    width: 70%;
    max-height: calc(100vh - 100px);
    overflow-y: auto;
    padding-right: 20px;
    border-right: 1px solid #ccc;
  }

  &-item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .item-image {
    width: 200px;
    height: 200px;
    margin-right: 20px;
  }

  .item-details {
    flex: 1;
  }

  .item-name {
    font-size: 18px;
    margin-bottom: 5px;
  }

  .item-description {
    font-size: 14px;
    color: #777;
  }

  .quantity-controls {
    display: flex;
    align-items: center;
    margin-top: 10px;

    .quantity-button {
      background-color: #ddd;
      border: none;
      padding: 5px 10px;
      cursor: pointer;

      &:hover {
        background-color: #ccc;
      }
    }

    .delete-button {
      border: none;
      background: none;
      text-decoration: underline;
    }

    .quantity {
      margin: 0 10px;
    }
  }

  .item-price,
  .item-total {
    margin-top: 10px;
    font-size: 16px;
  }

  &-summary {
    width: 30%;
    padding-left: 20px;
  }
}
</style>
