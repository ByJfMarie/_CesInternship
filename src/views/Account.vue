<template>
  <div>
        <NavBar />

        <div class="profil-container">
            <AccountProfil :id="id" />
            <div class="line"></div>
            <div class="myprofil-container">
                <AccountForm :id="id" />
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
    data() {
        return {
            id: null
        }
    },
    components: {
        NavBar,
        AccountProfil,
        AccountForm
    },
    created() {
        this.id = this.$route.params.id;

    },
    
}
</script>

<style scoped lang="scss">
    @import '../assets/style/myprofil.scss';
</style>