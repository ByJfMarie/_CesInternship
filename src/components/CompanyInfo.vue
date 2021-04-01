<template>
  <div class="info-container">
      <div class="info-group">
          <h1>Presentation</h1>
          <p>presentation</p>
      </div>
      <div class="info-group">
          <h1>Sector</h1>
          <p>{{ data.Company_Sector }}</p>
      </div>
      <div class="info-group">
          <h1>City</h1>
          <div v-if="cityData">
            <p>{{cityData.City_Name}}</p>
          </div>
      </div>
      <div class="info-group">
          <h1>Phone</h1>
          <p>{{ data.Company_Phone }}</p>
      </div>
      <div class="info-group">
          <h1>Email</h1>
          <p>{{ data.Company_Email }}</p>
      </div>
      <div class="info-group">
          <h1>Website</h1>
          <a href="#">{{ data.Company_Website }}</a>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'CompanyInfo',
    props: {

        data: Object
    },
    data() {
        return {
            cdata: null,
            cityData: null
        }
    },
    created() {

            
            axios
            .get('http://cesinternship.test/api/cities/' + this.data.ID_City)
            .then(response => {
                // JSON responses are automatically parsed.
                console.log(response.data);
                this.cityData = response.data;
            
            })
    },
}
</script>

<style scoped lang="scss">
    @import '../assets/style/companyInfo.scss';
</style>