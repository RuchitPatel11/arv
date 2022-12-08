<script>
import { RouterLink, RouterView } from "vue-router";
export default{
  components:{
    RouterLink,
    RouterView
  }
}

</script>

<template>
  <div class="gap-3 mt-5 d-flex flex-column">
    <div class="gap-3 d-flex fs-2 justify-content-center">
      <RouterLink to="/"><button class="btn btn-primary fs-3">Home</button></RouterLink>
      <RouterLink to="/about"><button class="btn btn-secondary fs-3">About</button></RouterLink>
    </div>
    <div>
      <RouterView class="d-flex justify-content-center" />
    </div>
  </div>
</template>
