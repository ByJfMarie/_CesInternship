<template>
  <div class="about">
    <NavBar />
    <MyAccountDisplay />
    <Profil />
  </div>
</template>

<script>
import Profil from "@/components/Profil.vue";
import NavBar from "@/components/NavBar.vue";
import SearchOffers from "@/components/SearchOffers.vue";

export default {
  name: "About",
  components: {
    Profil,
    NavBar,
    SearchOffers,
  },
};
</script>

<style scoped lang="scss">
@import "../assets/style/about.scss";
</style>
