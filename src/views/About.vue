<template>
  <div class="about">
    <NavBar />
    <Profil />
    <div style="display: flex; flex-direction:column; max-width: 480px;">
    <MyOffersDisplay />
    <MyOffersDisplay />
    <MyOffersDisplay />
    </div>
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
