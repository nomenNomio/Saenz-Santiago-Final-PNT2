<template>
  <Navbar />
  <RouterView class="mt-2 mb-2" />
  <Footer></Footer>
</template>

<script>
import Navbar from "./componentes/Navbar.vue";
import Footer from "./componentes/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style></style>
