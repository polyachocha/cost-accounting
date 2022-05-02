<template>
  <div class="pagination">
    <div class="pagination_minus" @click="onClick(cur - 1)">-</div>
    <div
      :class="{ pagination_number: cur === i }"
      v-for="i in amount"
      :key="i"
      @click="onClick(i)"
    >
      {{ i }}
    </div>
    <div class="pagination_plus" @click="onClick(cur + 1)">+</div>
  </div>
</template>
<script>
export default {
  name: "MyPagination",
  props: {
    length: Number,
    n: Number,
    cur: Number,
  },
  computed: {
    amount() {
      return Math.ceil(this.length / this.n);
    },
  },
  methods: {
    onClick(p) {
      if (p < 1 || p > this.amount) {
        return;
      }
      this.$emit("changePage", p);
    },
  },
};
</script>
<style scopped>
.pagination {
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
}
.pagination :hover {
  cursor: pointer;
  background-color: rgb(73, 190, 161);
  color: white;
}
.pagination_plus {
  padding: 10px;
}
.pagination_minus {
  padding: 10px;
}
.pagination_number {
  background-color: rgb(33, 158, 127);
  color: white;
  padding: 10px;
}
</style>