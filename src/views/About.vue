<template>
  <div class="about">
    <NavBar />
    <AddOfferForm />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import AddOfferForm from "@/components/AddOfferForm.vue";

export default {
  name: "About",
  components: {
    NavBar,
    AddOfferForm,
    
  },
};
</script>

<style scoped lang="scss">
@import "../assets/style/about.scss";
</style>
