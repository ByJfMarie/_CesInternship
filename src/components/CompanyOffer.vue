<template>
  <div v-if="offerData" class="company-container">
      <div class="gauche">
      <img src="https://assets-jpcust.jwpsrv.com/thumbnails/2yzd2pt3-1920.jpg" alt="">
      <div class="details">
          <span>City</span>
          <br>
          <p>{{cityData.City_Name}}</p>
          <br>
          <span>Phone</span>
          <br>
          <p>{{companyData.Company_Phone}}</p>
          <br>
          <span>Email</span>
          <br>
          <p>{{companyData.Company_Email}}</p>
          <br>
          <span>Web Site</span>
          <br>
          <p>{{companyData.Company_Website}}</p>
      </div>
      </div>
      <div class="description">
          <div class="name">
          <h2 v-if="offerData"> {{offerData.name}} - {{companyData.Company_Name}} </h2>
          </div>
          <div class="left">
          <span>Presentation of the Company</span>
          <br>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <span>Offer of internship</span>
          <br>
          <p v-if="offerData">{{offerData.details}}</p>
          <span>Skills require</span>
           <ul>
            <li v-if="offerData" v-for="skills in offerData.competences">{{skills}}</li>
            </ul>
          </div>
      </div>
      <br>
      <input class="delete" v-if="$store.state.user.ID_Role == 4" type="button" @click="deleteOffer()" value="Delete Offer">
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "CompanyOffer",
    data() {
        return {
            offerData: null,
            companyData: null,
            cityData: null,
        }
    },
    props: {
        id: String,
    },
    created() {
        axios
      .get('http://cesinternship.test/api/offers/' + this.id)
      .then(response => {
      // JSON responses are automatically parsed.
        console.log(response.data);
        this.offerData = response.data;

        if (this.offerData) {
            
            axios
            .get('http://cesinternship.test/api/companies/' + this.offerData.ID_Company)
            .then(response => {
                // JSON responses are automatically parsed.
            console.log(response.data);
            this.companyData = response.data;
            
            if (this.companyData) {
            
            axios
            .get('http://cesinternship.test/api/cities/' + this.companyData.ID_City)
            .then(response => {
                // JSON responses are automatically parsed.
            console.log(response.data);
            this.cityData = response.data;
            
            })
        }
            
            })
        }
        })

    },
    methods: {
        async deleteOffer() {
            try {
              console.log(this.form);
              await axios.get("/sanctum/csrf-cookie");
              await axios.delete("/api/offers/" + this.offerData.id);

              console.log('Supp');

              this.$router.push("../offers");
            } catch (error) {
              this.errors = error.response.data.errors;
            }
        },
    },
      
}
</script>

<style scoped lang="scss">
    @import "../assets/style/companyOffer.scss";
</style>