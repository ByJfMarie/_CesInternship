<template>
  <div>
      <div class="ProfilImg">
      <img src="../assets/images/img.jpg" alt="" />
      </div>
    <p>
    First Name
    <br>
    Last Name
    <br>
    </p>
    <input type="button" value="My Profil" class="MyProfil">
    <br>
    <br>
    <input type='button' value="My Offers" class="MyOffers">
    <span class="vertical-line"></span>
    <br>
  </div>
</template>

<script>
export default {
  name: "Profil",
};
</script>

<style scoped lang="scss">
  @import "../assets/style/profil.scss";
</style>