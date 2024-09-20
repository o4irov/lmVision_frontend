<template>
  <div class="portfolioCard">
    <img :src="getImageUrl(portfolioItem.image)" alt="portfolio image" />
  </div>
</template>

<script>
export default {
  props: {
    portfolioItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getImageUrl(imageName) {
      return require(`@/assets/img/${imageName}`);
    },
  },
};
</script>

<style lang="scss">
.portfolioCard {
  width: 424px;
  height: 400px;
  border-radius: 4px;

  & h3 {
    text-align: left;
    font-size: 18px;
  }

  p {
    font-size: 14px;
    color: rgba(33, 37, 41, 0.621) !important;
  }

  & img {
    width: 424px;
    height: 400px;
    object-fit: cover;

    border-radius: 8px;

    margin-bottom: 16px;
  }
}

@media (max-width: 768px) {
  .portfolioCard {
    width: 300px;
    height: 300px;

    & img {
      width: 300px;
      height: 255px;
    }
  }
}
</style>
