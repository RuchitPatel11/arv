<script>
export default {
  data() {
    return {
      Students: [
        {
          name: "Ricky John",
          rollNo: 21,
        },
        {
          name: "Micky Tose",
          rollNo: 32,
        },
        {
          name: "Angel Pitt",
          rollNo: 13,
        },
      ],
    };
  },
};
</script>
<template>
  <div class="row">
    <div class="col-md-3">
      <RouterLink
        v-for="student in Students"
        :to="{ name: 'student', params: { id: student.rollNo } }"
        :key="student.rollNo"
      >
        <div class="card">
          <img class="card-img-top" src="img/card1.jpg" alt="std_img" />
          <div class="card-block">
            <h4 class="card-title">{{ student.name }}</h4>
            <h6 class="card-text">{{ student.rollNo }}</h6>
            <button href="" class="btn btn-primary">See Full Details</button>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>
