<script setup>
import HelloWorld from "./components/HelloWorld.vue";
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
    <div class="wrapper">
      <HelloWorld v-bind:msg="name" />
      <input type="text" v-model="name" />
    </div>
  </header>
</template>


