<template>
  <div>
      <NavBar />
      <div class="accountspage-container">
        <SearchAccounts @inputFilter="getFilters"/>
        <div v-for="users in usersData" v-if="rolesData" class="accounts-container">
            <div v-for="roles in rolesData">
                <div v-if="roles.id == users.ID_Role">
                    <SearchAccountCard :user="users" :role="roles"/>
                </div>
            </div>
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
            usersData: null,
            rolesData: null
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
          this.usersData = response.data;
        })
    }
  },
  mounted(){
    axios
      .get('http://cesinternship.test/api/users')
      .then(response => {
      // JSON responses are automatically parsed.
        this.usersData = response.data;
      })
     axios
      .get('http://cesinternship.test/api/roles')
      .then(response => {
      // JSON responses are automatically parsed.
        this.rolesData = response.data;
      })
    

  }
}
</script>

<style scope lang="scss">
    @import "../assets/style/Accounts.scss";
</style>