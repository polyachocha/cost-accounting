<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="text-h5 text-sm-h3 pb-3">My personal costs</div>
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" color="teal" dark
              >ADD NEW COST <v-icon>mdi-plus</v-icon></v-btn
            >
          </template>
          <v-card> <AddPaymentForm /> </v-card>
        </v-dialog>
        <PaymentsDisplay :items="getPaymentsList" />
        <MyPagination :cur="cur" :length="12" :n="n" @changePage="changePage" />
      </v-col>
      <v-col> DIAGRAMM </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapGetters } from "vuex";
import AddPaymentForm from "../components/AddPaymentForm.vue";
import { mapMutations } from "vuex";
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
import MyPagination from "../components/MyPagination.vue";

export default {
  name: "DashboardView",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    MyPagination,
  },
  data() {
    return {
      dialog: false,
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

