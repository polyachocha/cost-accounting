<template>
  <div id="app" class="wrapper">
    Total = {{ getFPV }}
    <header>
      <div class="title">My personal costs</div>
    </header>
    <main>
      <PaymentsDisplay :items="getPaymentsList" />
      <AddPaymentForm />
      <MyPagination :cur="cur" :length="12" :n="n" @changePage="changePage" />
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
import AddPaymentForm from "./components/AddPaymentForm.vue";
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";
import MyPagination from "./components/MyPagination.vue";

export default {
  name: "App",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    MyPagination,
  },
  data() {
    return {
      cur: 1,
      n: 3,
    };
  },
  methods: {
    ...mapMutations(["setPaymentsListData"]),
    changePage(p) {
      this.cur = p;
      this.$store.dispatch("fetchData", p);
    },
  },
  computed: {
    ...mapGetters(["getPaymentsList"]),
    getFPV() {
      return this.$store.getters.getFullPaymentsValue;
    },
    currentElements() {
      return this.getPaymentsList.slice(
        this.n * (this.cur - 1),
        this.n * (this.cur - 1) + this.n
      );
    },
  },
  created() {
    this.$store.dispatch("fetchData", this.cur);
  },
};
</script>
<style>
.title {
  font-size: 18px;
  margin-bottom: 10px;
}
</style>
