<template>
  <div class="about">
    <NavBar />
    <MyOfferCard />
  </div>
</template>

<script>

import Profil from '@/components/Profil.vue'
import NavBar from '@/components/NavBar.vue'
import MyOfferCard from '../components/MyOfferCard.vue'

export default {
  name: 'About',
  components: {
    Profil,
    NavBar,
    MyOfferCard
  }
}

</script>

<style scoped lang="scss">
  @import "../assets/style/about.scss";
</style>
