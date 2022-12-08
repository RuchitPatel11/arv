<script>
export default {
  props: {
    name: "",
    price: "",
    quantity: "",
    img: "",
  },
  computed: {
    gross() {
      return this.price * this.quantity;
    },
    discount() {
      return this.gross * 0.05;
    },
    payable() {
      return this.gross - this.discount;
    },
  },
};
</script>
<template>
  <section style="background-color: #eee">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="card text-black">
          <img :src="img" class="card-img-top" alt="" />
          <div class="card-body">
            <div class="text-center">
              <h5 class="card-title fs-4">{{ name }}</h5>
            </div>
            <div>
              <div class="d-flex justify-content-between">
                <span>Quantity:</span><span>{{ quantity }}</span>
              </div>
              <div class="d-flex justify-content-between">
                <span>Price:</span><span>₹ {{ price }}</span>
              </div>
              <div class="d-flex justify-content-between">
                <span>Discount:</span><span>₹ {{ discount }}</span>
              </div>
            </div>
            <div
              class="d-flex justify-content-between total font-weight-bold fs-4 mt-4 bg-secondary p-3 text-white"
            >
              <span>Total:</span><span>₹ {{ payable }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
