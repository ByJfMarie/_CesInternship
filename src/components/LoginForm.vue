<template>
  <div class="connexion">
      <h1>Connexion</h1>
      <div class="form-container">
          <form action="" method="post" class="form-connection">
              <h2>You already have a account ?</h2>
              <p>
                  Email <br>
                  <input type="text" id="email" name="email">
              </p>
              <p>
                  Password <br>
                  <input type="text" id="pswd" name="pswd">
              </p>
              
              <input type="submit" value="Submit" class="btn-valider">
              <input type="reset" value="Reset" class="btn-reset">
          </form>
          <form action="" method="post" class="form-create">
              <h2>Don't have a account yet ?</h2>
              <p>
                  First Name<br>
                  <input type="text" id="nom" name="nom">
              </p>
              <p>
                  Last Name <br>
                  <input type="text" id="prenom" name="prenom">
              </p>
              <p>
                  Email <br>
                  <input type="text" id="email" name="email">
              </p>
              <p>
                  Center <br>
                  <input type="text" id="centre" name="centre">
              </p>
              <p>
                  Promotion <br>
                  <input type="text" id="promo" name="promo">
              </p>
              <p>
                  Password <br>
                  <input type="text" id="pswd" name="pswd">
              </p>
        
              <input type="submit" value="Submit" class="btn-valider">
              <input type="reset" value="Reset" class="btn-reset">

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