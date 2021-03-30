<template>
  <div>
        <NavBar />

        <div class="profil-container">
            <AccountProfil />
            <div class="line"></div>
            <div class="myprofil-container">
                <AccountForm />
            </div>
        </div>
    </div>
</template>

<script>
import AccountProfil from '@/components/AccountProfil.vue'
import NavBar from '@/components/NavBar.vue'
import AccountForm from '@/components/AccountForm.vue'


export default {
    name: 'Account',
    components: {
        NavBar,
        AccountProfil,
        AccountForm
    }
}
</script>

<style scoped lang="scss">
    @import '../assets/style/myprofil.scss';
</style>