<template>
  <div class="productCard">
    <img src="@/assets/img/noimage.png" alt="product image" />
    <h3>{{ product.name }}</h3>
    <div class="productCard-description">
      <span>{{ product.price }} руб.</span>
      <a href="/order" id="order">{{ product.description }} </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
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

    & a {
      font-weight: 300;
      color: black;
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
