<template>
  <div>
      <NavBar />
      <CompanyOffer />
      <ApplyReview />
  </div>
</template>

<script>

import NavBar from "../components/NavBar.vue";
import CompanyOffer from "../components/CompanyOffer.vue";
import ApplyReview from "../components/ApplyReview.vue";

export default {
    name: "Offer",
    components:{
        NavBar,
        CompanyOffer,
        ApplyReview
    }
}
</script>

<style>

</style>