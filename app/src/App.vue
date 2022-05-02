<template>
  <div id="app">
    <nav>
      <router-link class="link" to="/dashboard">Dashboard</router-link>
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
  </div>
</template>


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
</style>
