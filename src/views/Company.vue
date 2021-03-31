<template>
  <div>
      <NavBar />
      <div class="header">
        <h1>Companies</h1>
        <div>
            <input v-if="idForm==0" class="btn" type="button" @click="createCompanyForm" value="Create Company">
            <input v-else class="btn" type="button" @click="filterForm" value="Search Company">
        </div>
      </div>  
      
      <div class="company-container">
          <div v-if="idForm==1">
              <CreateCompany :idCompany="0" :data="{}" />
          </div>
          <div v-else>
              <SearchCompany @inputFilters="getFilters"/>
          </div>
          
          <div class="company-offers">
              <div v-for="company in companyData" >
                <CompanyCard :data="company" />
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import CreateCompany from "../components/CreateCompany.vue";
import SearchCompany from "../components/SearchCompany.vue";
import CompanyCard from "../components/CompanyCard.vue";
import axios from 'axios';

export default {
    name: "Company",
    components:{
      NavBar,
      CreateCompany,
      SearchCompany,
      CompanyCard
    },
    methods: {

      createCompanyForm: function() {

        this.idForm = 1;
      },
      filterForm: function() {

        this.idForm = 0;
      },
      getFilters: function(filters) {
        this.filterList = filters;
        var query = 'http://cesinternships.test:800/api/companies?';
        if (this.filterList.name != '') {
          query += ('name=%'+this.filterList.name+'%&');
        }
        if (this.filterList.city != '') {
          query += ('city=%'+this.filterList.city+'%&');
        }
        if (this.filterList.sector != '') {
          query += ('sector=%'+this.filterList.sector+'%&');
        }
        if (this.filterList.nbrStudents != '') {
          query += ('nbrStudents='+this.filterList.salary+'&');
        }
        if (this.filterList.trust != '') {
          query += ('trust='+this.filterList.trust+'&');
        }
        axios
          .get(query)
          .then(response => {
          // JSON responses are automatically parsed.
            this.companyData = response.data;
          })
      }
    },
    data() {
      return {

        idForm: 0,
        filterList: new Object,
        companyData: null,
      }
    },
    mounted() {

      axios
        .get('http://cesinternships.test:800/api/companies')
        .then(response => {
        // JSON responses are automatically parsed.
          this.companyData = response.data;
      })
    }
}
</script>

<style scoped lang="scss">
    @import "../assets/style/company.scss";
</style>