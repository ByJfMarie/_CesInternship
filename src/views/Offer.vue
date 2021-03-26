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
    props: {
        data: null
    },
    components:{
        NavBar,
        CompanyOffer,
        ApplyReview
    },
    mounted() {
        console.log(this.data);
    },
}
</script>

<style>

</style>