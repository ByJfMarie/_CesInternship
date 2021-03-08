<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <div id="nav">
    <div class="nav-label" id="nav-label">
      <h1 class="nav-logo">CesInternship</h1>
      <router-link to="/" class="nav-a">Accueil</router-link>
      <router-link to="/offers" class="nav-a">Offres</router-link>
      <router-link to="/contact" class="nav-a">Contacts</router-link>
      <a href="#" class="icon" v-on:click="menu">
        <i class="fa fa-bars"></i>
      </a>
    </div>
    <div class="nav-button">
      <button>Connexion</button>
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

    menu: function() {

      var navbar = document.getElementsByClassName("nav-a")
      for (let i = 0; i < navbar.length; i++) {
        navbar[i].style.display = "inline-block";
      }
    }
  }
}
</script>
