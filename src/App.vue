<template>
  <div id="nav">
    <div class="nav-logo">
      <h1>CesInternship</h1>
    </div>
    <div class="nav-label">
      <router-link to="/">Acceuil</router-link>
      <router-link to="/offers">Offres</router-link>
      <router-link to="/contact">Contacts</router-link>
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
