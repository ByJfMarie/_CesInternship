<template>
  <div>
      <NavBar />
      <CompanyOffer :id = "id" />
      <ApplyReview :id ="id" />
  </div>
</template>

<script>

import NavBar from "../components/NavBar.vue";
import CompanyOffer from "../components/CompanyOffer.vue";
import ApplyReview from "../components/ApplyReview.vue";

export default {
    name: "Offer",
    data() {
        return {
            id: null
        }
    },
    components:{
        NavBar,
        CompanyOffer,
        ApplyReview
    },
    created() {
        this.id = this.$route.params.id;

    },
}
</script>

<style>

</style>