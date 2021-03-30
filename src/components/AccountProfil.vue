<template>
  <div class="myprofil-container">
    <div class="profil">
      <img src="../assets/images/img.jpg" alt="" />
      <div class="name-container">
        <p >First Name</p>
        <p >Last Name</p>
      </div>
    </div>
    <p class="description">Description</p>
    <div class="input-container">
      <router-link to="/their-profil" class="profil-input">Their Profil</router-link>
    </div>
  </div>
  <span class="vertical-line"></span>
</template>

<script>
export default {
    name: "AccountProfil"
}
</script>

<style scoped lang="scss">
  @import "../assets/style/profil.scss";
</style>