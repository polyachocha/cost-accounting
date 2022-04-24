<template>
  <div>
    <button @click="newCost()">Add New Cost +</button>
    <div class="input" v-show="showInput">
      <input placeholder="Category" v-model="category" /><br />
      <input placeholder="Value" v-model="value" /> <br />
      <input placeholder="Date" v-model="date" /><br />
      <button @click="onSaveClick">Save!</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: "",
      value: "",
      date: "",
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
  },
  methods: {
    onSaveClick() {
      const data = {
        value: +this.value,
        category: this.category,
        date: this.date || this.getCureenDate,
      };
      this.$emit("addNewPayment", data);
    },
    newCost() {
      if (this.showInput) {
        this.showInput = false;
      } else {
        this.showInput = true;
      }
    },
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
