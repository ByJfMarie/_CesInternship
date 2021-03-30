<template>
  <div v-if="usersData" class="myaccount-container">
    <span>Email</span>
    <br />
    <br />
    <p >{{ usersData.email }}</p>
    <br />
    <br />
    <br />
    <span>Center</span>
    <br />
    <br />
    <p >{{ usersData.Center}}</p>
    <br />
    <br />
    <br />
    <span>Promotion</span>
    <br />
    <br />
    <p >{{ usersData.promotion }}</p>
    <br />
    <br />
    <br />
    <span>Role</span>
    <br />
    <br />

      <p v-if="usersData.ID_Role == 1">Student</p>
      <p v-if="usersData.ID_Role == 2">Delegate</p>
      <p v-if="usersData.ID_Role == 3">Pilot</p>
    <div v-if="usersData.ID_Role == 4">
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
      <input type="submit" class="disconnect" value="Modify" />
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
  props:{
    id: String
  },
  data(){
    return {
      usersData: null,
      admin: true,
      student: false,
    }
  },
  created() {
    axios
      .get('http://cesinternships.test:800/api/users/' + this.id)
      .then(response => {
      // JSON responses are automatically parsed.
        this.usersData = response.data;
        console.log(this.id);
      })
  },
  methods: {
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