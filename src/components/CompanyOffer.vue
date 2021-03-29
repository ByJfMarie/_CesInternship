<template>
  <div class="company-container">
      <div class="gauche">
      <img src="https://assets-jpcust.jwpsrv.com/thumbnails/2yzd2pt3-1920.jpg" alt="">
      <div class="details">
          <span>City</span>
          <br>
          <p>Rouen</p>
          <br>
          <span>Phone</span>
          <br>
          <p>07 84 56 78 98</p>
          <br>
          <span>Email</span>
          <br>
          <p>example@gmail.com</p>
          <br>
          <span>Web Site</span>
          <br>
          <p>example.com</p>
      </div>
      </div>
      <div class="description">
          <div class="name">
          <h2 v-if="offerData"> {{offerData.name}} - Company </h2>
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
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "CompanyOffer",
    data() {
        return {
            offerData: null
        }
    },
    props: {
        id: String,
    },
    created() {
        axios
      .get('http://cesinternships.test:800/api/offers/' + this.id)
      .then(response => {
      // JSON responses are automatically parsed.
        console.log(response.data);
        this.offerData = response.data;
      })
    },
}
</script>

<style scoped lang="scss">
    @import "../assets/style/companyOffer.scss";
</style>