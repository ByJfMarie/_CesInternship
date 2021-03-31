<template>
  <div v-if="usersData" class="myprofil-container">
    <div class="profil">
      <img src="../assets/images/img.jpg" alt="" />
      <div class="name-container">
        <p >{{usersData.first_name}}</p>
        <p >{{usersData.last_name}}</p>
      </div>
    </div>
    <p class="description">Description</p>
    <div class="input-container">
      <router-link :to="{ name: 'Account', params: { id: usersData.id }}" class="profil-input">Their Profil</router-link>
      <router-link :to="{ name: 'TheirOffers', params: { id: usersData.id }}" class="offer-input">Their Offers</router-link>
    </div>
  </div>
  <span class="vertical-line"></span>
</template>

<script>
import axios from 'axios'
export default {
    name: "AccountProfil",
    props: {
      id: String
    },
    data() {
      return {
        usersData: null
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
}
</script>

<style scoped lang="scss">
  @import "../assets/style/profil.scss";
</style>