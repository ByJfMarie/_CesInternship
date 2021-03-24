<template>
  <div>
      <NavBar />
      <div class="NewDelegate-container">
      <input type="text" placeholder="Name">
      <input type="button" value="Create">
      <router-link to="/my-profil" class="profil-input">Back</router-link>
      </div>
      <div class="right-container">
      <Right />
      <Right />
      <Right />
      <Right />
      <Right />
      <Right />
      <Right />
      <Right />
      <Right />
      <Right />
      <Right />
      <Right />
      <Right />
      <Right />
      <Right />
      </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Right from "@/components/Right.vue";

export default {
    name: "NewDelegate",
    components: {
        NavBar,
        Right
    }
}
</script>

<style scoped lang="scss">
     @import '../assets/style/NewDelegate.scss';
</style>