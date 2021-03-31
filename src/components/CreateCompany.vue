<template>
  <div class="createcompany-container">
    <div class="form-group">
        <label for="name">Name</label><br>
        <input type="text" name="name" placeholder="Name" v-model="namef">
    </div>
    <div class="form-group">
        <label for="location">Location</label><br>
        <input type="text" name="location" placeholder="City" v-model="city">
    </div>
    <div class="form-group">
        <label for="sector">Sector</label><br>
        <input type="text" name="sector" v-model="sector">
    </div>
    <div class="form-group">
        <label for="email">Email</label><br>
        <input type="text" name="email" v-model="email">
    </div>
    <div class="form-group">
        <label for="phone">Phone</label><br>
        <input type="text" name="phone" v-model="phone">
    </div>
    <div class="form-group">
        <label for="website">Website</label><br>
        <input type="text" name="website" v-model="website">
    </div>
    <div class="form-group">
        <label for="nbStudents">Number of Students</label><br>
        <input type="text" name="nbStudents" v-model="nbStudent">
    </div>
    <div class="form-group">
        <label for="date">Tutor Confidence</label><br>
        <input type="text" name="confidence" placeholder="Grade / 5" v-model="confidence">
        
    </div>
    <div class="form-group">
        <input type="checkbox" name="invisibility" v-model="invisibility">
        <label class="labelInvisibility" for="invisibility">Invisibility</label>
    </div><br>

    <div v-if="data.id">
        <a @click="modifyCompany" class="createBtn">Modify Company</a>
    </div>
    <div v-else>
        <a @click="createCompany" class="createBtn">Create Company</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "CreateCompany",
    methods: {

      searchCity(){
        axios
            .get('http://cesinternships.test:800/api/cities')
            .then(response => {
                // JSON responses are automatically parsed.
              for(var check in response.data){
                if (response.data[check].City_Name == this.city) {
                   this.idCity = response.data[check].id
                   console.log('Finit');
                }
              }
            
            })
      },

      modifyCompany () {

      },

      async createCompany () {
        var newCompany = new Object;
        var newCity = new Object;
        newCompany.Company_Name = this.namef;
        newCity.City_Name = this.city;
        newCompany.Company_Sector = this.sector;
        newCompany.Company_Email = this.email;
        newCompany.Company_Phone = this.phone;
        newCompany.Company_Website = this.website;
        newCompany.Company_NBStudent = this.nbStudent;
        newCompany.Company_TutorConfidence = this.confidence;

        console.log(newCity);

        try {
                await axios.post("/api/cities", newCity);

            } catch (error) {
            }
        
        await axios
            .get('http://cesinternships.test:800/api/cities')
            .then(response => {
                // JSON responses are automatically parsed.
              for(var check in response.data){
                if (response.data[check].City_Name == this.city) {
                   this.idCity = response.data[check].id
                   console.log('Finit');
                }
              }
            
            })

        console.log(this.idCity);

        newCompany.ID_City = this.idCity;

        console.log(newCompany);

        try {
                await axios.post("/api/companies", newCompany);

            } catch (error) {
              console.log(error);
                this.errors = error.response.data.errors;
            }
      }
    },
    props: {

      data: Object
    },
    data() {
      return {

        namef: '',
        city: '',
        sector: '',
        email: '',
        phone: '',
        website: '',
        nbStudent: '',
        confidence: '',
        invisibility: '',
        idCity: '',
      }
    },
    mounted() {

      if (this.data.id) {

        this.namef = this.data.Company_Name;
        this.sector = this.data.Company_Sector;
        this.email = this.data.Company_Email;
        this.phone = this.data.Company_Phone;
        this.website = this.data.Company_Website;
        this.nbStudent = this.data.Company_NBStudent;
        this.confidence = this.data.Company_TutorConfidence;
        this.invisibility = this.data.Invisibility;
      }
      
    }
}

</script>

<style scoped lang="scss">
@import "../assets/style/createCompany.scss";
</style>