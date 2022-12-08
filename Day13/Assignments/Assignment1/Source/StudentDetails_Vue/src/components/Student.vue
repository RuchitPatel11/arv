<script>
export default {
  data() {
    return {
      Students: [
        {
          name: "Ricky John",
          fatherName: "Jack John",
          gender: "Male",
          DOB: "12/07/2011",
          class: "5-A",
          rollNo: 21,
        },
        {
          name: "Micky Tose",
          fatherName: "Woody Tose",
          gender: "Male",
          DOB: "22/03/2012",
          class: "4-C",
          rollNo: 32,
        },
        {
          name: "Angel Pitt",
          fatherName: "Michael Pitt",
          gender: "Female",
          DOB: "19/06/2011",
          class: "6-B",
          rollNo: 13,
        },
      ],
    };
  },
  computed: {
    student() {
      return this.Students.find(
        (value) => value.rollNo === parseInt(this.$route.params.id)
      );
    },
  },
};
</script>
<template>
  <div class="container row mt-5">
    <div class="col-md-3">
 
        <div class="card">
          <div class="card-block">
            <h3 class="card-title">Student Name: {{ student.name }}</h3>
            <h4 class="card-title">Father Name: {{ student.fatherName }}</h4>
            <h6 class="card-text">Roll No: {{ student.rollNo }}</h6>
            <h6 class="card-text">Class: {{ student.class }}</h6>
            <h6 class="card-text">Gender {{ student.gender }}</h6>
            <h6 class="card-text">Date OF Birth: {{ student.DOB }}</h6>
            <RouterLink
              :to="{ name: 'fees', params: { id: this.$route.params.id } }"
              ><button class="btn btn-info">Fees Details</button></RouterLink
            >
            <RouterLink
              :to="{ name: 'result', params: { id: this.$route.params.id } }"
              ><button class="btn btn-info">Result Details</button></RouterLink
            >
          </div>
        </div>
    
    </div>
  </div>
</template>
