<script>
import { RouterLink, RouterView } from 'vue-router'
export default{
  components:{
    RouterLink,
    RouterView
  }
}

</script>

<template>
<div class="container">
<div class="p-2 mt-3 text-center text-white bg-primary fs-3">
Student Details
<button class="btn btn-warning"><RouterLink to="/list">List Students</RouterLink></button>
</div>

</div>

  <RouterView />
</template>

