<template>
  <div v-if="data" class="myaccount-container">
    <span>Email</span>
    <br />
    <br />
    <input class="inputText" type="text" v-model="email">
    <br />
    <br />
    <br />
    <span>Center</span>
    <br />
    <br />
    <input class="inputText" type="text" v-model="center">
    <br />
    <br />
    <br />
    <span>Promotion</span>
    <br />
    <br />
    <select v-model="promotion" class="inputText">
        <option value="CPI A1">CPI A1</option>
        <option value="CPI A2">CPI A2</option>
        <option value="A3">A3</option>
        <option value="A4">A4</option>
        <option value="A5">A5</option>
    </select>
    <br />
    <br />
    <br />
    <span>Role</span>
    <br />
    <br />
    <select v-model="role" class="inputText">
        <option value="1">Student</option>
        <option value="2">Delegate</option>
        <option value="3">Pilot</option>
        <option value="4">Admin</option>
    </select>
    <br />
    <br />
    <input class="inputBtn" type="button" @click="modify" value="Modify">
    <br>
    <br>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'AccountFormModify',
    props: {

        data: Object
    },
    data() {
        return {

            email: '',
            center: '',
            promotion: '',
            role: '',

        }
    },
    mounted() {

        this.email = this.data.email;
        this.center = this.data.Center;
        this.promotion = this.data.promotion;
        this.role = this.data.ID_Role;
    },
    methods: {

        modify() {
            var newAccount = new Object;
        newAccount.email = this.email;
        newAccount.Center = this.center;
        newAccount.promotion = this.promotion;
        newAccount.ID_Role = this.role;



        try {
                axios.put("/api/users/" + this.data.id, newAccount);

            } catch (error) {
              console.log(error);
                this.errors = error.response.data.errors;
            }
            
        }
    }
}
</script>

<style scoped lang="scss">
    @import '../assets/style/accountFormModify.scss'
</style>