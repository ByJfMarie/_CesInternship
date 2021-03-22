<template>
  <div class="about">
    <NavBar />
    
  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue'

export default {
  name: 'About',
  components: {
    NavBar
  },
}

</script>

<style scoped lang="scss">
  @import "../assets/style/about.scss";
</style>
