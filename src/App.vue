<template>
  <div id="app">
    <div>
      <navbar />
      <router-view />
    </div>
    <customFooter />
  </div>
</template>

<script>
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default {
  name: "App",
  components: {
    navbar: Navbar,
    customFooter: Footer,
  },
  mounted() {},
};
</script>

<style src="@/assets/styles/global.scss" lang="scss"></style>
<style>
body {
  background-color: #ffffff !important;
  scroll-behavior: smooth;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

::-webkit-scrollbar {
  display: none;
}
</style>
