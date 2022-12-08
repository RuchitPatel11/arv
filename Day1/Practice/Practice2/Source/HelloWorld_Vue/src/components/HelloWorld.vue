<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <h1>Greetings of the Day, {{ msg }}</h1>
</template>

