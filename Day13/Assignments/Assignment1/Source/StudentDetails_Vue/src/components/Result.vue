<script>
export default {
  data() {
    return {
      Students: [
        {
          rollNo: 21,
          totalMarks: 600,
          obtainedMarks: 581,
          grade: "A+",
        },
        {
          rollNo: 32,
          totalMarks: 600,
          obtainedMarks: 510,
          grade: "B+",
        },
        {
          rollNo: 13,
          totalMarks: 600,
          obtainedMarks: 424,
          grade: "C",
        },
      ],
    };
  },
  computed: {
    result() {
      return this.Students.find(
        (value) => value.rollNo === parseInt(this.$route.params.id)
      );
    },
  },
};
</script>
<template>
  <div class="row mt-4">
    <div class="container col-md-3">
          <div class="card">
          <img class="card-img-top" src="img/card1.jpg" alt="std_img" />
          <div class="card-block">
            <h4 class="card-title">Roll No: {{ result.rollNo}}</h4>
            <h4 class="card-title">Total Marks: {{ result.totalMarks }}</h4>
            <h6 class="card-text">Obtained Marks: {{ result.obtainedMarks }}</h6>
            <h6 class="card-text">Grade: {{result.grade}}</h6>           
          </div>
        </div>
     
    </div>
  </div>
</template>
