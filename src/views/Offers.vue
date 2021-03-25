<template>
  <div class="offer">
    <NavBar />
    <SearchOffers />
    <div class="offercard" v-for="offer in offersData">
      <SearchOfferCard :data="offer" />
    </div>
    
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import SearchOffers from "../components/SearchOffers.vue";
import SearchOfferCard from '@/components/SearchOfferCard.vue';
import axios from 'axios';

let offersData;

export default {
  components: {
  NavBar,
  SearchOffers,
  SearchOfferCard
  },
  data() {
    return {
      offersData: null,
    };
  },
  mounted(){
    axios
      .get('http://cesinternships.test:800/api/offers')
      .then(response => {
      // JSON responses are automatically parsed.
        console.log(response.data);
        this.offersData = response.data;
      })
    

  }
};
</script>

<style>
</style>