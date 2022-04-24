<template>
  <div class="wrapper">
    <header>
      <div class="title">My personal costs</div>
    </header>
    <main>
      <PaymentsDisplay :items="paymentsList" />
      <AddPaymentForm @addNewPayment="addNewPayment" />
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
import AddPaymentForm from "./components/AddPaymentForm.vue";

export default {
  name: "App",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
  },
  data() {
    return {
      paymentsList: [],
    };
  },
  methods: {
    fetchData() {
      return [
        {
          date: "28.03.2022",
          category: "Food",
          value: "169",
        },
        {
          date: "29.03.2022",
          category: "Transport",
          value: "360",
        },
        {
          date: "02.04.2022",
          category: "Food",
          value: "531",
        },
      ];
    },
    addNewPayment(data) {
      this.paymentsList.push(data);
    },
  },
  created() {
    this.paymentsList = this.fetchData();
  },
};
</script>
<style>
.title {
  font-size: 18px;
  margin-bottom: 10px;
}
</style>
