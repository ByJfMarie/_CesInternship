<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <div class="nav" id="nav">
    <div class="nav-label" id="nav-label">
      <h1 class="nav-logo">CesInternship</h1>
      <router-link to="/">Accueil</router-link>
      <router-link to="/offers">Offres</router-link>
      <router-link to="/contact">Contacts</router-link>
      <button @click="responsive" href="#" class="icon">
        <i class="fa fa-bars fa-2x"></i>
      </button>
    </div>
    <div class="nav-button">
      <button >Connexion</button>
    </div>
  </div>
  <router-view />
</template>

<style lang="scss">
@import "assets/style/app.scss";
@import "assets/style/navbar.scss";
</style>

<script>
export default {
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
