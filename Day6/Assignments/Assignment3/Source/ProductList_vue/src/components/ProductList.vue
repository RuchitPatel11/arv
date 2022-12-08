<script>
import Product from "./Products.vue";

export default {
  components: {
    Product,
  },
  data() {
    return {
      products: [
        {
          img: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
          name: "Cotton Jacket",
          price: "2200",
          quantity: "2",
        },
        {
          img: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
          name: "Shirt",
          price: "1400",
          quantity: "3",
        },
        {
          img: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
          name: "T-shirt",
          price: "1350",
          quantity: "3",
        },
      ],
    };
  },
};
</script>
<template>
  <div class="container">
    <div class="row">
      <div v-for="product of products" class="col-md-4">
        <Product
          :img="product.img"
          :name="product.name"
          :price="product.price"
          :quantity="product.quantity"
        />
      </div>
    </div>
  </div>
</template>
