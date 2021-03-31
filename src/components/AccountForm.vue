<template>
  <div v-if="data" class="myaccount-container">
    <span>Email</span>
    <br />
    <br />
    <p >{{ data.email }}</p>
    <br />
    <br />
    <br />
    <span>Center</span>
    <br />
    <br />
    <p >{{ data.Center}}</p>
    <br />
    <br />
    <br />
    <span>Promotion</span>
    <br />
    <br />
    <p >{{ data.promotion }}</p>
    <br />
    <br />
    <br />
    <span>Role</span>
    <br />
    <br />

      <p v-if="data.ID_Role == 1">Student</p>
      <p v-if="data.ID_Role == 2">Delegate</p>
      <p v-if="data.ID_Role == 3">Pilot</p>
      <p v-if="data.ID_Role==4">Admin</p>
    <br />
    <br />
    <br />
  </div>
</template>

<script>
export default {
  name: "AccountForm",
  props:{
    data: Object
  },
  data(){
    return {
      admin: true,
      student: false,
    }
  },
    
  }
</script>

<style scoped lang="scss">
  @import "../assets/style/myprofilform.scss";
</style>