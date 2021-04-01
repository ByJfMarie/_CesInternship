<template>
  <div>
    <NavBar />

    <div class="offerpage-container">
      <SearchOffers @inputFilter="getFilters" />

      <div class="offers-container">
        <div v-for="offer in offersData" v-if="companyData">
          <div v-for="company in companyData">
            <div v-if="company.id == offer.ID_Company">

              <SearchOfferCard :data="offer" :cdata="company" />
            </div>
          </div>
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
      var query = 'http://cesinternship.test/api/offers?';
      if (this.filterList.name != '') {
        query += ('name=%'+this.filterList.name+'%&');
      }
      if (this.filterList.duration != '') {
        query += ('duration='+this.filterList.duration+'&');
      }
      if (this.filterList.skill != '') {
        query += ('competences=%'+this.filterList.skill+'%&');
      }
      if (this.filterList.salary != '') {
        query += ('salary='+this.filterList.salary+'&');
      }
      if (this.filterList.date != '') {
        query += ('date='+this.filterList.date+'&');
      }
      axios
        .get(query)
        .then(response => {
        // JSON responses are automatically parsed.
          this.offersData = response.data;
        })
    }
  },
  mounted(){
    axios
      .get('http://cesinternship.test/api/offers')
      .then(response => {
      // JSON responses are automatically parsed.
        this.offersData = response.data;
      })
     axios
      .get('http://cesinternship.test/api/companies')
      .then(response => {
      // JSON responses are automatically parsed.
        this.companyData = response.data;
      })
    

  }
};
</script>

<style scoped lang="scss">
  @import '../assets/style/offers.scss';
</style>