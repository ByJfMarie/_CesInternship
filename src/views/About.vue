<template>
  <div class="about">
    <NavBar />
    <Profil />
  </div>
</template>

<script>

import Profil from '@/components/Profil.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'About',
  components: {
    Profil,
    NavBar
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/style/about.scss";
</style>
