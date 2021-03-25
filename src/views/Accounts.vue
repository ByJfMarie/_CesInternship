<template>
  <div>
      <NavBar />
      <div class="accounts-container">
      <SearchAccounts />
      <SearchAccountCard />
      <SearchAccountCard />
      <SearchAccountCard />
      <SearchAccountCard />
      <SearchAccountCard />
      <SearchAccountCard />
      <SearchAccountCard />
      <SearchAccountCard />
      </div>
  </div>
</template>

<script>

import NavBar from "../components/NavBar.vue";
import SearchAccounts from "../components/SearchAccounts.vue";
import SearchAccountCard from "../components/SearchAccountCard";

export default {
    name: "Accounts",
    components:{
        SearchAccounts,
        NavBar,
        SearchAccountCard
    }
}
</script>

<style scope lang="scss">
@import "../assets/style/Accounts.scss";
</style>