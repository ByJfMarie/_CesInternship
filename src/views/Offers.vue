<template>
  <div class="offer">
    <NavBar />
    <SearchOffers />
    <SearchOfferCard />
    <SearchOfferCard />
    <SearchOfferCard />
    <SearchOfferCard />
    <SearchOfferCard />
    <SearchOfferCard />
    
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import SearchOffers from "../components/SearchOffers.vue";
import SearchOfferCard from '@/components/SearchOfferCard.vue';

export default {
  components: {
  NavBar,
  SearchOffers,
  SearchOfferCard
  },
};
</script>

<style>
</style>