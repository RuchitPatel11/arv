<script>
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./components/ProductList.vue";
export default {
  components: {
    ProductList,
  },
};
</script>

<template>
  <div>
    <h1 class="text-center mt-5">Product Listing</h1>
    <ProductList />
  </div>
</template>
