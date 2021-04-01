<template>
  <div class="connexion">
  <div class="gauche">
    <img src="../assets/images/CesIntershipIcon.png" alt="logo">
    <br>
    <span class="cesi">CesIntership</span>
    <div class="ligne"></div>
  </div>
  <div class="droite">
    <h1>Login</h1>
    <form action="" method="post" @submit.prevent="handleLogin">
      <p>
        Email <br />
        <input type="text" id="email" name="email" v-model="form.email" />
        <span class="text-danger" v-if="errors.email">{{
          errors.email[0]
        }}</span>
      </p>
      <p>
        Password <br />
        <input type="password" id="pswd" name="pswd" v-model="form.password" />
        <span class="text-danger" v-if="errors.password">{{
          errors.password[0]
        }}</span>
      </p>
      <input type="submit" value="Submit" class="btn-valider" />
      <input type="reset" value="Reset" class="btn-reset" />
    </form>
  </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginForm",
  data() {
    return {
      form: { email: null, password: null },
      errors: {},
    };
  },
  methods: {
    async handleLogin() {
      try {
        await axios.get("/sanctum/csrf-cookie");
        await axios.post("/login", this.form);

        let response = await axios.get("/api/user");

        this.$store.commit("setAuth", response.data);


        this.$router.push("home");
      } catch (error) {
        this.errors = error.response.data.errors;
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/style/login.scss";
</style>