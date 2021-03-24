<template>
  <div class="about">
    <NavBar />
    <MyAccountDisplay />
    <Profil />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import MyProfilForm from "@/components/MyProfilForm.vue";

export default {
  name: "About",
  components: {
    NavBar,
    MyProfilForm
  },
};
</script>

<style scoped lang="scss">
@import "../assets/style/about.scss";
</style>
