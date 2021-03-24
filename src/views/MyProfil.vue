<template>
  <div class="my-profil">
      <NavBar />
      <div class="myprofil-container">
      <Profil />
      <div class="line"></div>
      <MyAccountDisplay />
      </div>
  </div>
</template>

<script>

import Profil from "@/components/Profil.vue";
import NavBar from "@/components/NavBar.vue";
import MyAccountDisplay from "@/components/MyAccountDisplay.vue"

export default {
    name: "MyProfil",
  components: {
    Profil,
    NavBar,
    MyAccountDisplay
  },
}
</script>

<style scoped lang="scss">
 @import '../assets/style/myAccountDisplay.scss';
</style>