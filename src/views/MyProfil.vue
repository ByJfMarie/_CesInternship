<template>
  <div>
      <NavBar />
      <div class="profil-container">
      <Profil />
      <div class="line"></div>
      <div class="myoffers-container">
          <MyProfilForm />
      </div>
  </div>
  </div>

  
</template>

<script>
import Profil from '@/components/Profil.vue'
import NavBar from '@/components/NavBar.vue'
import MyProfilForm from '@/components/MyProfilForm.vue'


export default {
    name: 'MyProfil',
    components: {
        NavBar,
        Profil,
        MyProfilForm
    }
}
</script>

<style scoped lang="scss">
    @import '../assets/style/myprofil.scss';
</style>