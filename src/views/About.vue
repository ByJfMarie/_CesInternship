<template>
  <div class="about">
    <NavBar />
    <Profil />
    <MyOffersDisplay />
    <MyOffersDisplay />
    <MyOffersDisplay />
  </div>
</template>

<script>

import Profil from '@/components/Profil.vue'
import NavBar from '@/components/NavBar.vue'
import MyOffersDisplay from '../components/MyOffersDisplay.vue'

export default {
  name: 'About',
  components: {
    Profil,
    NavBar,
    MyOffersDisplay
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/style/about.scss";
</style>
