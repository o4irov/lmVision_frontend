<template>
  <div class="container">
    <h1>404 - Страница не найдена</h1>
    <p>Извините, но запрашиваемая страница не существует.</p>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  mounted() {
    const app = document.getElementById("app");
    app.style.height = "100vh";
  },
  beforeUnmount() {},
};
</script>

<style scoped>
.container {
  padding-top: 100px;
}
</style>
