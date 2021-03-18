<template>
  <div class="connexion">
      <h1>Connection</h1>
          <form action="" method="post">
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