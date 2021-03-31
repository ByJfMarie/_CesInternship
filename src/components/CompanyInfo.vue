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
          <p>city</p>
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
export default {
    name: 'CompanyInfo',
    props: {

        data: Object
    }
}
</script>

<style scoped lang="scss">
    @import '../assets/style/companyInfo.scss';
</style>