<template>
  <div>
    <span>Email</span>
    <br />
    <br />
    <p v-if="$store.state.user">{{ $store.state.user.email }}</p>
    <br />
    <br />
    <br />
    <span>Center</span>
    <br />
    <br />
    <p>Rouen - Normandie</p>
    <br />
    <br />
    <br />
    <span>Promotion</span>
    <br />
    <br />
    <p v-if="$store.state.user">{{ $store.state.user.promotion }}</p>
    <br />
    <br />
    <br />
    <span>Role</span>
    <br />
    <br />
    <p>Student</p>
    <br />
    <br />
    <br />
    <form action="" method="post" @submit.prevent="handleLogout">
      <input type="submit" class="disconnect" value="DECO" />
    </form>
    <br />
    <br />
    <input type="button" class="delete" value="Delete Account" />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MyAccountDisplay",
  methods: {
    async handleLogout() {
      try {
        await axios.get("/sanctum/csrf-cookie");
        await axios.post("/logout", this.form);

        // let response = await axios.get("/api/user");

        // this.$store.commit("setAuth", response.data);

        // console.log(this.$store.state.user);

        this.$router.push("/");
      } catch (error) {
        this.errors = error.response.data.errors;
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/style/myAccountDisplay.scss";
</style>