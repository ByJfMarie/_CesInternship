<template>
  <div class="container">
    <div class="form-group">
        <input class="textInput" type="text" placeholder="Search" v-model="namef">
        <!-- <input class="searchBtn" type="button" value="Search" @click="submit"> -->
    </div>
    <div class="form-group">
        <span>Role</span><br>
        <select class="roleInput" v-model="role">
            <option value="">Choose a role</option>
            <option value="1">Student</option>
            <option value="2">Delegate</option>
            <option value="3">Pilot</option>
            <option value="4">Admin</option>
        </select>
    </div>
  </div>
</template>

<script>
export default {
    name: "SearchAccounts",
    data() {
        return {
            namef: '',
            role: ''
        }
    },
    methods: {

        submit() {

            var filterList = new Object;
            filterList.name = this.namef;
            filterList.role = this.role;
            this.$emit("inputFilter", filterList);
        }
    },
    watch: {

        namef: function() {
            this.submit();
        },
        role: function() {
            this.submit();
        }
    }
}
</script>


<style scoped lang="scss">
@import "../assets/style/searchAccounts.scss";
</style>