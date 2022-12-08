<script>
const genAlphabets = () => {
  const alphabets = [];
  for (let i = 65; i < 91; i++) {
    alphabets.push(String.fromCharCode(i));
  }
  return alphabets;
};
export default {
  data() {
    return {
      alphabets: genAlphabets(),
    };
  },
};
</script>

<template>
  <ul>
    <li v-for="alphabet of alphabets">
      {{ alphabet }}
    </li>
  </ul>
</template>

