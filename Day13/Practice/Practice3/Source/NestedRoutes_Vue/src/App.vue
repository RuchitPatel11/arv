<script>
import { RouterLink, RouterView } from "vue-router";
export default {
  components: {
    RouterLink,
    RouterView,
  },
};
</script>

<template>
  <div class="container mt-5 text-center">
    <h1 class="text-success">Nested Routing In VUE</h1>
    <RouterLink to="/about"
      ><button class="btn btn-primary">ABOUT ME</button></RouterLink
    >
  </div>
  <RouterView />
</template>
