<script>
import AppHeader from "./components/AppHeader.vue";
import AppBody from "./components/AppBody.vue";
export default {
  name: "App",
  components: {
    AppHeader,
    AppBody,
  },
};
</script>

<template>
  <div class="font-custom">
    <app-header />
    <app-body />
  </div>
</template>

<style>
body {
  background-color: #f7f7f7;
  max-width: fit-content;
  margin: auto;
}
</style>
