<template>
  <div class="connexion">
      <h1>Connexion</h1>
      <div class="form-container">
          <form action="" method="post" class="form-connection">
              <h2>Vous possédez déjà un compte ?</h2>
              <p>
                  Email <br>
                  <input type="text" id="email" name="email">
              </p>
              <p>
                  Mot de passe <br>
                  <input type="text" id="pswd" name="pswd">
              </p>
              
              <input type="submit" value="Valider" class="btn-valider">
              <input type="reset" value="Réinitialiser" class="btn-reset">
          </form>
          <form action="" method="post" class="form-create">
              <h2>Pas encore de compte ?</h2>
              <p>
                  Nom <br>
                  <input type="text" id="nom" name="nom">
              </p>
              <p>
                  Prénom <br>
                  <input type="text" id="prenom" name="prenom">
              </p>
              <p>
                  Email <br>
                  <input type="text" id="email" name="email">
              </p>
              <p>
                  Centre <br>
                  <input type="text" id="centre" name="centre">
              </p>
              <p>
                  Promotion <br>
                  <input type="text" id="promo" name="promo">
              </p>
              <p>
                  Mot de passe <br>
                  <input type="text" id="pswd" name="pswd">
              </p>
        
              <input type="submit" value="Valider" class="btn-valider">
              <input type="reset" value="Réinitialiser" class="btn-reset">

          </form>
      </div>
  </div>
</template>

<script>
export default {
    name: "LoginForm"
}
</script>

<style scoped lang="scss">
    @import '../assets/style/connexion.scss';
</style>