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
export default {
    name: "CreateCompany",
    methods: {

      modifyCompany: function() {

      },

      createCompany: function() {

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