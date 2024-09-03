<template>
  <div class="portfolioCard">
    <img src="@/assets/img/portfolioCase.png" alt="portfolio image" />
    <h3>{{ portfolioItem.name }}</h3>
    <p>{{ portfolioItem.address }}</p>
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
};
</script>

<style lang="scss">
.portfolioCard {
  width: 424px;
  height: 469px;
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
    height: 350px;

    & img {
      width: 300px;
      height: 255px;
    }
  }
}
</style>
