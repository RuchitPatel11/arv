<script>
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Rectangle from "./components/Rectangle.vue";
import Login from "./components/Login.vue";
import Signup from "./components/Signup.vue";
export default {
  components: {
    Rectangle,
    Login,
    Signup
  },
};
</script>

<template>
 <div class="container mt-5">
        <Login />
      </div>
      <div class="container mt-5">
        <Signup />
      </div>
      <div class="container mt-5">
        <Rectangle />
      </div>
</template>

