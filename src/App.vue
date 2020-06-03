<template>
  <div class="wrapper">
    <comp-header />
    <comp-menu />
    <router-view></router-view>
    <comp-footer />
  </div>
</template>

<script>
import CompHeader from "./components/CompHeader.vue";
import CompMenu from "./components/CompMenu.vue";
import CompFooter from "./components/CompFooter.vue";

export default {
  components: {
    CompHeader,
    CompMenu,
    CompFooter,
  },
};
</script>

<style>
@import "./css/adminlte.min.css";
@import './css/OverlayScrollbars.css';
</style>
