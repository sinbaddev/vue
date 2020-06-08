<template>
  <div class="wrapper">
    <template v-if="token">
      <comp-header />
      <comp-menu />
      <router-view></router-view>
      <comp-footer />
    </template>
    <template v-if="!token">
      <div class="login-page">
        <login />
      </div>
    </template>
  </div>
</template>

<script>
import CompHeader from "./components/CompHeader.vue";
import CompMenu from "./components/CompMenu.vue";
import CompFooter from "./components/CompFooter.vue";
import Login from "./components/Login.vue";

export default {
  components: {
    CompHeader,
    CompMenu,
    CompFooter,
    Login,
  },
  mounted() {},
  computed: {
    token() {
      return this.$store.getters.getToken;
    },
  },
};
</script>

<style>
@import "./css/adminlte.min.css";
@import "./css/OverlayScrollbars.css";
</style>
