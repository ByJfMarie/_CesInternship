<template>
  <div class="nav" id="nav">
    <div class="nav-label" id="nav-label">
      <h1 class="nav-logo">CesInternship</h1>
      <router-link to="/" class="navLink">Accueil</router-link>
      <router-link to="/offers" class="navLink">Offres</router-link>
      <div class="navProfil">
        <router-link to="my-profil" class="profilLink">My Profil</router-link>
        <img src="https://assets-jpcust.jwpsrv.com/thumbnails/2yzd2pt3-1920.jpg" alt="">
      </div>
      <button @click="responsive" href="#" class="icon">
        <i class="fa fa-bars fa-2x"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
    name: "NavBar",
    methods: {
    responsive: function () {
      console.log("Ouverture");
      let nav = document.getElementById("nav");
      if (nav.className == "nav") {
        nav.className += "responsive";
      }else{
        nav.className = "nav";
        
      }
    }
  }
}
</script>

<style>
    @import '../assets/style/navbar.scss';
</style>