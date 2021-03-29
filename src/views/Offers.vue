<template>
  <div class="offer">
    <NavBar />
    <SearchOffers @inputFilter="getFilters" />
    <div class="offercard" v-for="offer in offersData" v-if="companyData">
      <div class="testCompany" v-for="company in companyData">
        <div class="testId" v-if="company.id == offer.ID_Company">

          <SearchOfferCard :data="offer" :cdata="company" />
        </div>
      </div>
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
      filterList: new Object,
      companyData: null
    };
  },
  methods: {
    getFilters: function(filters) {
      this.filterList = filters;
    }
  },
  mounted(){
    axios
      .get('http://cesinternship.test/api/offers')
      .then(response => {
      // JSON responses are automatically parsed.
        console.log(response.data);
        this.offersData = response.data;
      })
     axios
      .get('http://cesinternships.test:800/api/companies')
      .then(response => {
      // JSON responses are automatically parsed.
        console.log(response.data);
        this.companyData = response.data;
      })
    

  }
};
</script>

<style>
</style>