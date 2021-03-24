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
    <p>Rouen - Normandie</p>
    <br />
    <br />
    <br />
    <span>Promotion</span>
    <br />
    <br />
    <p>CPI A2</p>
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
    <form action="">
      <input type="button" class="disconnect" value="Disconnect" />
      <br />
      <br />
      <input type="button" class="delete" value="Delete Account" />
    </form>
    
  </div>
</template>

<script>
export default {
  name: "MyProfilForm",
};
</script>

<style scoped lang="scss">
  @import "../assets/style/myprofilform.scss";
</style>