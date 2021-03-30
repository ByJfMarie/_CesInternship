<template>
  <div class="nav" id="nav">
    <div class="nav-label" id="nav-label">
      <div class="logo">
      <img src="../assets/images/CesIntershipIcon.png">
      <h1 class="nav-logo">CesInternship</h1>
      </div>
      <router-link to="/home" class="navLink">Home</router-link>
      <router-link to="/offers" class="navLink">Offers</router-link>
      <router-link v-if="admin" to="/accounts" class="navLink">Accounts</router-link>
      <div class="navProfil">
        <router-link to="my-profil" v-if="$store.state.user" class="profilLink">My Profil</router-link>
        <img v-if="$store.state.user" src="https://assets-jpcust.jwpsrv.com/thumbnails/2yzd2pt3-1920.jpg" alt="">
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
    data(){
      return{
        admin: true,
      }
    },
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