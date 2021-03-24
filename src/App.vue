<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <router-view />
  </div>
</template>

<style lang="scss">
@import "assets/style/app.scss";
@import "assets/style/navbar.scss";
</style>


<script>
import store from "./store";
export default {
  // beforeCreate() {
  //   this.$store.commit("initializeAuth");
  // },
};
</script>
