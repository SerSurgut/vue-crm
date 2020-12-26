<template>
  <div class="app-main-layout">
    <Navbar @click="visibleNavbar = !visibleNavbar" />
    <Sidebar v-model="visibleNavbar" />
    <main class="app-content" :class="{ full: !visibleNavbar }">
      <div class="app-page">
        <router-view></router-view>
      </div>
    </main>

    <div class="fixed-action-btn">
      <router-link class="btn-floating btn-large blue" to="/record">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/app/Navbar";
import Sidebar from "../components/app/Sidebar";
export default {
  name: "main-layout",
  data: () => ({
    visibleNavbar: true
  }),
  components: {
    Sidebar,
    Navbar
  }
};
</script>
