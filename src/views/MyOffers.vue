<template>
  <NavBar />

  <div class="profil-container">
      <Profil />
      <div class="line"></div>
      <div class="myoffers-container">
          <MyOfferCard />
          <MyOfferCard />
          <MyOfferCard />
          <MyOfferCard />
          <MyOfferCard />
          <MyOfferCard />
          <MyOfferCard />
          <MyOfferCard />
          <MyOfferCard />
          <MyOfferCard />
          <MyOfferCard />
          <MyOfferCard />
          <MyOfferCard />
          <MyOfferCard />
          <MyOfferCard />
          <MyOfferCard />
      </div>
  </div>
</template>

<script>
import Profil from '@/components/Profil.vue'
import NavBar from '@/components/NavBar.vue'
import MyOfferCard from '@/components/MyOfferCard.vue'


export default {
    name: 'MyProfil',
    components: {
        NavBar,
        Profil,
        MyOfferCard
    }
}
</script>

<style scoped lang="scss">
    @import '../assets/style/myoffers.scss';
</style>