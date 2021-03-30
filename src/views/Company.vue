<template>
<NavBar />
<CreateCompany />
<hr>
<SearchCompany />
<br>
<div class="company-container">
<CompanyCard />
<CompanyCard />
<CompanyCard />
<CompanyCard />
<CompanyCard />
</div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import CreateCompany from "../components/CreateCompany.vue";
import SearchCompany from "../components/SearchCompany.vue";
import CompanyCard from "../components/CompanyCard.vue";
export default {
    name: "Company",
    components:{
      NavBar,
      CreateCompany,
      SearchCompany,
      CompanyCard
    }
}
</script>

<style scoped lang="scss">
    @import "../assets/style/company.scss";
</style>