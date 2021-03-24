<template>
  <div class="profil-container">
    <div class="profil">
      <img src="../assets/images/img.jpg" alt="" />
      <div class="name-container">
        <p>First Name</p>
        <p>Last Name</p>
      </div>
    </div>
    <p class="description">Description</p>
    <div class="input-container">
      <router-link to="/my-profil" class="profil-input">My Profil</router-link>
      <router-link to="/my-offers" class="offer-input">My Offers</router-link>
    </div>
  </div>
  <span class="vertical-line"></span>
</template>

<script>
export default {
  name: "Profil",
};
</script>

<style scoped lang="scss">
@import "../assets/style/profil.scss";
</style>