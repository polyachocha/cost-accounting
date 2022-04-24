<template>
  <div>
    <div class="wrapper">
      <table class="tableCount">
        <tr>
          <th colspan="2">#</th>
          <th colspan="2">Date</th>
          <th colspan="2">Category</th>
          <th colspan="2">Value</th>
        </tr>
        <tr v-for="(item, index) in items" :key="index">
          <td colspan="2">{{ index }}</td>
          <td colspan="2">{{ item.date }}</td>
          <td colspan="2">{{ item.category }}</td>
          <td colspan="2">{{ item.value }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "PaymentsDisplay",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style scoped>
.tableCount {
  width: 300px;
  border: 2px solid grey;
  border-collapse: collapse;
  border-spacing: 0 10px;
}
th {
  padding: 10px 20px;
  color: #222121;
  border-right: 2px solid;
}
td {
  vertical-align: middle;
  padding: 10px;
  font-size: 14px;
  text-align: center;
  border-top: 2px solid #56433d;
  border-bottom: 2px solid #56433d;
  border-right: 2px solid #56433d;
}
</style>
