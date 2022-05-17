<template>
  <div id="app">
    <nav>
      <router-link
        class="link"
        :to="{ name: 'Dashboard', params: { page: '1' } }"
        >Dashboard</router-link
      >
      <router-link class="link" to="/about">About</router-link>
      <div class="links">
        <router-link
          class="link-add"
          :to="{
            name: 'AddPaymentForm',
            params: { section: 'payment', category: 'Food' },
            query: { value: 200 },
          }"
          >Food 200</router-link
        >
        <router-link
          class="link-add"
          :to="{
            name: 'AddPaymentForm',
            params: { section: 'payment', category: 'Transport' },
            query: { value: 50 },
          }"
          >Transport 50</router-link
        >
        <router-link
          class="link-add"
          :to="{
            name: 'AddPaymentForm',
            params: { section: 'payment', category: 'Entertainment' },
            query: { value: 2000 },
          }"
          >Entertainment 2000</router-link
        >
      </div>
    </nav>
    <router-view />
    <ModalWindowAddPaymentForm :settings="settings" v-if="modalShow" />
    <transition name="fade">
      <ContextMenu />
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalShow: false,
      setting: {},
    };
  },
  methods: {
    onShow(data) {
      this.modalShow = true;
      this.settings = data;
      console.log(data);
    },
    onHide() {
      this.settings = {};
      this.modalShow = false;
    },
  },
  mounted() {
    this.$modal.EventBus.$on("show", this.onShow);
    this.$modal.EventBus.$on("hide", this.onHide);
  },
  beforeDestroy() {
    this.$modal.EventBus.$off("show", this.onShow);
    this.$modal.EventBus.$off("hide", this.onHide);
  },
  components: {
    ModalWindowAddPaymentForm: () =>
      import("./components/ModalWindowAddPaymentForm.vue"),
    ContextMenu: () => import("./components/ContextMenu.vue"),
  },
};
</script>

<style>
nav {
  margin-bottom: 10px;
}
.link {
  padding: 30px;
}
.links {
  display: flex;
  margin-top: 10px;
}
.link-add {
  background: rgb(68, 161, 161);
  color: white;
  width: 140px;
  padding: 2px;
  border: 2px solid rgb(165, 204, 226);
}
.fade-enter-active,
.fade-leave-active {
  transition: 2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
