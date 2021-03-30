<template>
  <div>
      <NavBar />
      <div class="accountspage-container">
        <SearchAccounts @inputFilter="getFilters"/>
        <div class="accounts-container">
            <SearchAccountCard />
            <SearchAccountCard />
            <SearchAccountCard />
            <SearchAccountCard />
            <SearchAccountCard />
            <SearchAccountCard />
            <SearchAccountCard />
            <SearchAccountCard />
        </div>
      </div>
  </div>
</template>

<script>

import NavBar from "../components/NavBar.vue";
import SearchAccounts from "../components/SearchAccounts.vue";
import SearchAccountCard from "../components/SearchAccountCard";
import axios from 'axios';

export default {
    name: "Accounts",
    components:{
        SearchAccounts,
        NavBar,
        SearchAccountCard
    },
    data() {
        return {
            filterList: new Object,
            userData: null
        }
    },
    methods: {
    getFilters: function(filters) {
      this.filterList = filters;
      var query = 'http://cesinternship.test/api/users?';
      if (this.filterList.name != '') {
        query += ('name=%'+this.filterList.name+'%&');
      }
      if (this.filterList.role != '') {
        query += ('role='+this.filterList.role+'&');
      }
      axios
        .get(query)
        .then(response => {
        // JSON responses are automatically parsed.
          this.userData = response.data;
        })
    }
  },
}
</script>

<style scope lang="scss">
    @import "../assets/style/Accounts.scss";
</style>