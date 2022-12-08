<script>
export default {
  data() {
    return {
      Students: [
        {
          rollNo: 21,
          status: "Paid",
          amount: "₹50,000",
          paymentMode: "Cash",
        },
        {
          rollNo: 32,
          status: "Paid",
          amount: "₹ 50,000",
          paymentMode: "NEFT",
        },
        {
          rollNo: 13,
          status: "Paid",
          amount: "₹ 50,000",
          paymentMode: "RTGS",
        },
      ],
    };
  },
  computed: {
    fees() {
      return this.Students.find((value) => value.rollNo === parseInt(this.$route.params.id));
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
            <h4 class="card-title">Roll No: {{ fees.rollNo }}</h4>
            <h4 class="card-title">Status: {{ fees.status }}</h4>
            <h6 class="card-text">Payment Mode: {{ fees.paymentMode }}</h6>
            <h6 class="card-text">Amount: {{ fees.amount }}</h6>
          </div>
        </div>
 
    </div>
  </div>
</template>
