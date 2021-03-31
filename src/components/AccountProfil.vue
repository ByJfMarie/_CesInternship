<template>
  <div v-if="data" class="myprofil-container">
    <div class="profil">
      <img src="../assets/images/img.jpg" alt="" />
      <div class="name-container">
        <p >{{data.first_name}}</p>
        <p >{{data.last_name}}</p>
      </div>
    </div>
    <p class="description">Description</p>
    <div class="input-container">
      <router-link :to="{ name: 'Account', params: { id: data.id }}" class="profil-input">Their Profil</router-link>
      <router-link :to="{ name: 'TheirOffers', params: { id: data.id }}" class="offer-input">Their Offers</router-link>
    </div>
  </div>
  <span class="vertical-line"></span>
</template>

<script>
export default {
    name: "AccountProfil",
    props: {
      data: Object
    },
}
</script>

<style scoped lang="scss">
  @import "../assets/style/profil.scss";
</style>