<template>
  <v-container>
    <v-row>
      <v-col :cols="1">#</v-col>
      <v-col :cols="4">Date</v-col>
      <v-col :cols="4">Category</v-col>
      <v-col :cols="2">Value</v-col>
      <v-col :cols="1"></v-col>
    </v-row>
    <v-row v-for="(item, index) in items" :key="index">
      <v-col :cols="1">{{ item.id }}</v-col>
      <v-col :cols="4">{{ item.date }}</v-col>
      <v-col :cols="4">{{ item.category }}</v-col>
      <v-col :cols="2">{{ item.value }}</v-col>
      <v-col :cols="1"
        ><v-btn @click.native="onContextMenuClick($event, item)"
          >...</v-btn
        ></v-col
      >
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "PaymentsDisplay",
  data() {
    return {
      headers: [
        { text: "#", value: "#" },
        { text: "Date", value: "Date" },
        { text: "Category", value: "Category" },
        { text: "Value", value: "Value" },
        { text: "", value: "" },
      ],
    };
  },
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
