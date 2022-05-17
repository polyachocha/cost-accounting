<template>
  <div>
    <button @click="newCost()">Add New Cost +</button>
    <div class="input" v-show="showInput">
      <select v-model="category" v-if="categoryList">
        <option v-for="(value, idx) in categoryList" :key="idx">
          {{ value }}
        </option></select
      ><br />
      <input placeholder="Value" v-model.number="value" /> <br />
      <input placeholder="Date" v-model="date" /><br />
      <button @click="onSaveClick()">Save!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddPaymentForm",
  props: {
    values: Object,
  },
  data() {
    return {
      category: "",
      value: "",
      date: "",
      id: "",

      showInput: false,
    };
  },
  computed: {
    getCureenDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
    categoryList() {
      return this.$store.getters.getCategoryList;
    },
  },
  methods: {
    onSaveClick() {
      if (this.values) {
        console.log(this.values.item.id);
        const data = {
          value: +this.value,
          category: this.category,
          date: this.date || this.getCureenDate,
          id: this.id,
        };
        this.$store.commit("updatePaymentsList", data);
      } else {
        const data = {
          value: +this.value,
          category: this.category,
          date: this.date || this.getCureenDate,
        };
        this.$store.commit("addDataToPaymentsList", data);
      }
    },
    newCost() {
      this.showInput = !this.showInput;
    },
  },
  async created() {
    await this.$store.dispatch("loadCategories");
  },
  mounted() {
    if (this.values?.item) {
      const { category, date, value, id } = this.values.item;
      this.value = value;
      this.date = date;
      this.category = category;
      this.id = id;
      return;
    }
    const { category, section } = this.$route.params;
    if (!category || !section) {
      return;
    }
    this.category = category;
    const { value } = this.$route.query;
    if (!value) return;
    this.value = value;
    if (this.value && this.category) {
      this.onSaveClick();
    }
  },
};
</script>

<style scoped>
.input {
  margin: 10px;
}
input {
  margin: 2px;
}
button {
  background-color: rgba(47, 170, 164, 0.856);
  border: none;
  color: white;
  width: 130px;
  height: 20px;
  margin-top: 10px;
}
</style>
