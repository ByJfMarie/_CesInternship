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
    <template v-if="$store.state.user.ID_Role == 1">
      <p>Student</p>
    </template>
    <div v-if="$store.state.user.ID_Role == 4">
      <select class="role" name="role" id="role" v-on:change="select()">
        <option value="Student">Student</option>
        <option value="Admin">Admin</option>
        <option value="Pilot">Pilot</option>
        <option value="Delegate">Delegate Administration</option>
        <option value="NewDelegate">New Delegate</option>
      </select>
    </div>
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
  name: "AccountForm",
  data(){
    return {
      admin: true,
      student: false,
    }
  },
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
    select: function(){
      if(document.getElementById('role').value == "NewDelegate") {
          window.location.href = '/new-delegate'; 
      }
    }
  },
};
</script>

<style scoped lang="scss">
  @import "../assets/style/myprofilform.scss";
</style>