<template>
  <div>
        <NavBar />

        <div class="profil-container">
            <AccountProfil :data="accountData" />
            <div class="line"></div>
            <div class="myprofil-container">
                <div v-if="idForm==0">
                    <AccountForm :data="accountData" />
                    <input v-if="$store.state.user.ID_Role == 4" class="modify" @click="modifyForm" type="button" value="Modify User">
                </div>
                <div v-else>
                    <AccountFormModify :data="accountData" />
                    <input v-if="$store.state.user.ID_Role == 4" class="modify" type="button" @click="infoForm" value="Cancel">
                </div>
                <input v-if="$store.state.user.ID_Role == 4" class="delete" type="button" @click="deteteUser" value="Delete">
            </div>
        </div>
    </div>
</template>

<script>
import AccountProfil from '@/components/AccountProfil.vue'
import NavBar from '@/components/NavBar.vue'
import AccountForm from '@/components/AccountForm.vue'
import AccountFormModify from '@/components/AccountFormModify.vue'
import axios from 'axios'


export default {
    name: 'Account',
    data() {
        return {
            id: null,
            accountData: Object,
            idForm: 0,
        }
    },
    components: {
        NavBar,
        AccountProfil,
        AccountForm,
        AccountFormModify
    },
    created() {
        this.id = this.$route.params.id;

    },
    mounted() {
        axios
            .get('http://cesinternship.test/api/users/' + this.id)
            .then(response => {
            // JSON responses are automatically parsed.
            this.accountData = response.data;
      })
    },
    methods: {
        async deleteUser() {
            try {
              await axios.get("/sanctum/csrf-cookie");
              await axios.delete("/api/users/" + this.data.id);

              this.$router.push("../offers");
            } catch (error) {
              this.errors = error.response.data.errors;
            }
        },
        modifyForm() {

            this.idForm = 1;
        },
        infoForm() {

            this.idForm = 0;
        }
    },
    
}
</script>

<style scoped lang="scss">
    @import '../assets/style/myprofil.scss';
</style>