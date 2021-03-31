<template>
  <div class="myaccount-container">
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
    <p v-if="$store.state.user">{{ $store.state.user.Center}}</p>
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
    <p v-if="$store.state.user.ID_Role == 1">Student</p>
    <p v-if="$store.state.user.ID_Role == 2">Delegate</p>
    <p v-if="$store.state.user.ID_Role == 3">Pilot</p>
    <p v-if="$store.state.user.ID_Role == 4">Admin</p>
    <br />
    <br />
    <br />
    <form action="" method="post" @submit.prevent="handleLogout">
      <input type="submit" class="disconnect" value="Disconnect" />
    </form>
    <div v-if="admin">
      <input type="button" class="delete" value="Delete" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MyProfilForm",
  methods: {
    async handleLogout() {
      try {
        await axios.get("/sanctum/csrf-cookie");
        await axios.post("/logout", this.form);

        this.$router.push("/");
      } catch (error) {
        this.errors = error.response.data.errors;
      }
    },
  },
};
</script>

<style scoped lang="scss">
  @import "../assets/style/myprofilform.scss";
</style>