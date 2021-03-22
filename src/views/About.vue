<template>
  <div class="about">
    <NavBar />
    <LoginForm />
  </div>
</template>

<script>

import LoginForm from '@/components/LoginForm.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'About',
  components: {
    LoginForm,
    NavBar
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/style/about.scss";
</style>
