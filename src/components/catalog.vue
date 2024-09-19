<template>
  <div class="catalogContainer row">
    <div class="sideMenu col-sm-2">
      <div class="sideMenu-search">
        <img src="@/assets/img/search.svg" alt="" />
        <input type="text" placeholder="Поиск" />
      </div>
      <a href="/cart"><h3>Корзина</h3></a>
      <h3 class="sideMenu-title">Камеры</h3>
      <div class="sideMenu-link" id="forHome">
        <img src="@/assets/img/ipCamera.svg" alt="" /> Для дома
      </div>
      <div class="sideMenu-link" id="outside">
        <img src="@/assets/img/camera.svg" alt="" />Наружные
      </div>
      <div class="sideMenu-link" id="complect">
        <img src="@/assets/img/cart.svg" alt="" />Комплектующие
      </div>

      <h3 class="sideMenu-title">Услуги</h3>
      <div class="sideMenu-link" id="montage">
        <img src="@/assets/img/montage.svg" alt="" />Монтаж
      </div>
      <div class="sideMenu-link" id="repair">
        <img src="@/assets/img/repair.svg" alt="" />Ремонт
      </div>

      <div class="sideMenu-link" id="contacts">
        <img src="@/assets/img/i.png" alt="" />Контакты
      </div>
    </div>
    <div class="catalog col-sm-10">
      <div class="catalog-grid">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          :itemsIds="itemsIds"
          @updateIds="updateIds"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "./productCard.vue";
export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Product 1",
          description: "Description 1",
          price: 100,
          image: "noimage.png",
          quantity: 1,
        },
        {
          id: 2,
          name: "Product 2",
          description: "Description 2",
          price: 200,
          image: "noimage.png",
          quantity: 1,
        },
        {
          id: 3,
          name: "Product 3",
          description: "Description 3",
          price: 300,
          image: "noimage.png",
          quantity: 1,
        },
        {
          id: 4,
          name: "Product 4",
          description: "Description 4",
          price: 400,
          image: "noimage.png",
          quantity: 1,
        },
        {
          id: 5,
          name: "Product 5",
          description: "Description 5",
          price: 500,
          image: "noimage.png",
          quantity: 1,
        },
        {
          id: 6,
          name: "Product 6",
          description: "Description 6",
          price: 600,
          image: "noimage.png",
          quantity: 1,
        },
        {
          id: 7,
          name: "Product 7",
          description: "Description 7",
          price: 400,
          image: "noimage.png",
          quantity: 1,
        },
        {
          id: 8,
          name: "Product 8",
          description: "Description 8",
          price: 500,
          image: "noimage.png",
          quantity: 1,
        },
        {
          id: 9,
          name: "Product 9",
          description: "Description 9",
          price: 600,
          image: "noimage.png",
          quantity: 1,
        },
        // Добавьте больше товаров для примера
      ],
      cartItems: new Set(),
      itemsIds: new Set(),
    };
  },
  computed: {},
  methods: {
    saveItemsToLocalStorage() {
      var itemsForSave = [];
      this.products.forEach((product) => {
        if (this.itemsIds.has(product.id)) {
          itemsForSave.push(product);
        }
      });

      localStorage.setItem("cartItems", JSON.stringify(itemsForSave));
    },
    loadItemsFromLocalStorage() {
      const savedItems = localStorage.getItem("cartItems");
      if (savedItems) {
        var items = JSON.parse(savedItems);
        this.cartItems = Array.isArray(items) ? new Set(items) : new Set();
        this.cartItems.forEach((item) => {
          this.itemsIds.add(item.id);
        });
      }
    },
    updateIds(id) {
      var item = this.products.find((product) => product.id === id[1]);
      if (!item) {
        return;
      }
      if (id[0] === "+") {
        this.itemsIds.add(id[1]);
        this.cartItems.add(item);
      } else {
        this.itemsIds.delete(id[1]);
        this.cartItems.delete(item);
      }

      this.saveItemsToLocalStorage();
    },
  },
  mounted() {
    this.loadItemsFromLocalStorage();
  },
};
</script>

<style lang="scss">
$pink: rgba(232, 107, 117, 1);
$mainText: rgba(33, 37, 41, 1);

.catalogContainer {
  max-width: 100%;
}

.sideMenu {
  background-color: $mainText;
  color: white;
  padding: 100px 40px !important;

  &-search {
    background-color: rgba(196, 196, 196, 0.5);
    border-radius: 12px;
    padding: 10px;
    padding-left: 15px;
    display: flex;
    align-items: end;

    & img {
      margin-right: 20px;
      margin-bottom: 5px;
    }

    & input {
      width: 70%;
      background: transparent;
      border: none;
      font-size: 20px;
      font-weight: 300;
      color: white;

      &::placeholder {
        color: white;
      }

      &:focus {
        background: transparent;
        border: none;
        outline: none !important;
      }
    }
  }

  & a {
    text-decoration: none;
    color: white;
  }

  & h3 {
    margin-bottom: 39px;
    margin-top: 80px;

    &:first-child {
      margin-top: 10px;
    }
  }

  &-link {
    display: flex;
    align-items: center;
    color: white;
    margin: 20px 0;
    cursor: pointer;

    & img {
      margin-right: 20px;
    }

    &:last-child {
      margin-top: 175px;
    }
  }

  & img {
    width: 28px;
  }
}

@media (max-width: 768px) {
  .sideMenu {
    display: none;
  }
}

.catalog {
  padding-top: 100px;

  &-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    gap: 16px;
  }
}

@media (max-width: 768px) {
  .catalog {
    padding-top: 50px;
    &-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
