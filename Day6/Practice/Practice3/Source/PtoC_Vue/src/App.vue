<script setup>
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./components/Display.vue";
</script>

<script>
export default {
  data() {
    return {
      name: "",
    };
  },
};
</script>

<template>
  <header>
    <div class="container gap-3 mt-5 d-flex flex-column align-items-center">
      <Display v-bind:name="name" />
      <input type="text" v-model="name" />
    </div>
  </header>
</template>

