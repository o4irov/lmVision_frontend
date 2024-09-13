<template>
  <div class="productCard">
    <img src="@/assets/img/noimage.png" alt="product image" />
    <h3>{{ product.name }}</h3>
    <div class="productCard-description">
      <span>{{ product.price }} руб.</span>
      <button v-if="!isInCart()">В корзину</button>
      <div v-if="isInCart()" class="quantity-controls">
        <button @click="updateQuantity(product, product.quantity - 1)" class="quantity-button">
          -
        </button>
        <span class="quantity">{{ product.quantity }}</span>
        <button @click="updateQuantity(product, product.quantity + 1)" class="quantity-button">
          +
        </button>
        <button @click="deleteItem(product)" class="delete-button">удалить</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemsIds: {
      type: Set,
      required: true,
    },
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    isInCart() {
      return this.itemsIds.has(this.product.id);
    },
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
    removeItem() {
      const newSet = new Set(this.mySet);
      newSet.delete(this.product.id);
      this.$emit("updateIds", newSet);
    },
    addItem() {
      const newSet = new Set(this.mySet);
      newSet.add(this.product.id);
      this.$emit("updateIds", newSet);
    },
  },
};
</script>

<style lang="scss">
.productCard {
  width: 292px;
  height: 332px;
  border-radius: 4px;

  & h3 {
    text-align: left;
    font-size: 18px;
  }

  &-description {
    display: flex;
    align-items: start;
    justify-content: start;

    & span {
      margin-right: 10px;
    }

    & button {
      color: black;
      border: none;
      background: none;
      text-decoration: underline;
    }
  }

  & img {
    width: 292px;
    height: 195px;
    object-fit: cover;

    border-radius: 4px;
  }
}

@media (max-width: 768px) {
  .productCard {
    width: 150px;
    height: 220px;
    font-size: 10px;

    & h3 {
      font-size: 10px;
    }
    & img {
      width: 133px;
    }
  }
}
</style>
