<template>
  <div>
    <div class="wrapper">
      <table class="tableCount">
        <tr>
          <th colspan="2">#</th>
          <th colspan="2">Date</th>
          <th colspan="2">Category</th>
          <th colspan="2">Value</th>
          <th colspan="2"></th>
        </tr>
        <tr v-for="(item, index) in items" :key="index">
          <td colspan="2">{{ item.id }}</td>
          <td colspan="2">{{ item.date }}</td>
          <td colspan="2">{{ item.category }}</td>
          <td colspan="2">{{ item.value }}</td>
          <td colspan="2">
            <button @click="onContextMenuClick($event, item)">...</button>
          </td>
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
  methods: {
    editItem(item) {
      this.$modal.show("addform", {
        title: "Add New Payment",
        component: "AddPaymentForm",
        props: {
          item,
        },
      });
    },
    deleteItem(id) {
      console.log("deleteItem", id);
      this.$store.commit("deleteDataInPaymentsList", id);
      this.$contextMenu.hide();
    },
    onContextMenuClick(event, item) {
      const items = [
        {
          text: "Edit",
          action: () => {
            this.editItem(item);
          },
        },
        {
          text: "Delete item",
          action: () => {
            this.deleteItem(item.id);
          },
        },
      ];
      this.$contextMenu.show({ event, items });
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
