<template>
  <div id="app" class="wrapper">
    {{ getFPV }}
    <header>
      <div class="title">My personal costs</div>
    </header>
    <main>
      <PaymentsDisplay :items="getPaymentsList" />
      <AddPaymentForm />
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
import AddPaymentForm from "./components/AddPaymentForm.vue";
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["setPaymentsListData"]),
    fetchData() {
      return [
        {
          date: "28.03.2022",
          category: "Food",
          value: 169,
        },
        {
          date: "29.03.2022",
          category: "Transport",
          value: 360,
        },
        {
          date: "02.04.2022",
          category: "Food",
          value: 531,
        },
      ];
    },
  },
  computed: {
    ...mapGetters(["getPaymentsList"]),
    getFPV() {
      return this.$store.getters.getFullPaymentsValue;
    },
  },
  created() {
    this.setPaymentsListData(this.fetchData());
  },
};
</script>
<style>
.title {
  font-size: 18px;
  margin-bottom: 10px;
}
</style>
