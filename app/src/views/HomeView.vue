<template>
  <div class="wrapper">
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
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
import AddPaymentForm from "../components/AddPaymentForm.vue";
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";
import MyPagination from "../components/MyPagination.vue";

export default {
  name: "HomeView",
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
  async created() {
    await this.$store.dispatch("fetchData", this.cur);
  },
  mounted() {
    if (!this.$route.params?.page || isNaN(this.$route.params.page)) return;
    this.cur = Number(this.$route.params.page);
  },
};
</script>
<style>
.title {
  font-size: 18px;
  margin-bottom: 10px;
}
</style>
