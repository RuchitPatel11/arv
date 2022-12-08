<script>
export default {
  props: {
    errors: Array,
  },
};
</script>

<template>
  <div>
    <div class="" v-for="error of errors" :key="error.$uid">
      <div class="mt-0 mb-2 text-yellow-500">{{ error.$message }} <span class="text-xl">*</span> </div>
    </div>
  </div>
</template>
