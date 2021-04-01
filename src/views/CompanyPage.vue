<template>
  <div>
      <NavBar />
      <div class="header">
        <h1>{{ companyData.Company_Name }}</h1>
        <div v-if="$store.state.user.ID_Role == 4">
            <div v-if="idForm==0">
                <input class="btn" type="button" @click="modifyCompanyForm" value="Modify Company">
                <input class="btn" type="button" @click="createOfferForm" value="Create Offer">
            </div>
            <div v-else-if="idForm==1">
                <input class="btn" type="button" @click="modifyCompanyForm" value="Modify Company">
                <input class="btn" type="button" @click="infoForm" value="Info Company">
            </div>
            <div v-else>
                <input class="btn" type="button" @click="infoForm" value="Info Company">
                <input class="btn" type="button" @click="createOfferForm" value="Create Offer">
            </div>
        </div>
      </div>  
      
      <div class="company-container">
          <div v-if="idForm==1 && $store.state.user.ID_Role == 4">
              <AddOfferForm :idCompany="companyData.id" :data="{}" />
          </div>
          <div v-else-if="idForm==2 && $store.state.user.ID_Role == 4">
              <CreateCompany :data="companyData" />
          </div>
          <div v-else>
              <CompanyInfo :data="companyData" />
          </div>
          
          <div class="company-offers">
              <div v-for="offers in offersData" v-if="companyData">
                  <div v-if="offers.ID_Company==companyData.id">
                      <SearchOfferCard :data="offers" :cdata="companyData" />
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import CompanyInfo from '@/components/CompanyInfo.vue'
import SearchOfferCard from '@/components/SearchOfferCard.vue'
import AddOfferForm from '@/components/AddOfferForm.vue'
import CreateCompany from '@/components/CreateCompany.vue'
import axios from 'axios';
export default {
    name: 'CompanyPage',
    data() {
        return {

            idForm: 0,
            id: null,
            companyData: Object,
            offersData: Object
        }
    },
    methods: {

        createOfferForm: function() {

            this.idForm = 1;
        },
        modifyCompanyForm: function() {

            this.idForm = 2
        },
        infoForm: function() {

            this.idForm = 0;
        }
    },
    components:  {
        CompanyInfo,
        NavBar,
        SearchOfferCard,
        AddOfferForm,
        CreateCompany
    },
    created() {

        this.id = this.$route.params.id;
    },

    mounted() {

        axios
            .get('http://cesinternship.test/api/companies/' + this.id)
            .then(response => {
            // JSON responses are automatically parsed.
            this.companyData = response.data;
      })

      axios
            .get('http://cesinternship.test/api/offers')
            .then(response => {
            // JSON responses are automatically parsed.
            this.offersData = response.data;
      })
    }
}
</script>

<style scoped lang="scss">
    @import '../assets/style/companyPage.scss';
</style>