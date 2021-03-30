<template>
  <div>
      <NavBar />
      <div class="header">
        <h1>Name of the Company</h1>
        <div>
            <input class="btn" type="button" value="Modify Company">
            <input class="btn" type="button" value="Create Offer">
        </div>
      </div>  
      
      <div class="company-container">
          <CompanyInfo />
          <div class="company-offers">
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
          </div>
      </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import CompanyInfo from '@/components/CompanyInfo.vue'
import CompanyCard from '@/components/CompanyCard.vue'
export default {
    name: 'CompanyPage',
    props: {
        id: null
    },
    components:  {
        CompanyInfo,
        NavBar,
        CompanyCard
    }
}
</script>

<style scoped lang="scss">
    @import '../assets/style/companyPage.scss';
</style>