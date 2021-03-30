<template>
  <div class="myoffer-container">
        <span><a @click="account()" href="">First Name Last Name - Role</a></span>
    </div>
</template>

<script>
import router from '../router'
export default {
    name: "SearchAccountCard",
    methods: {
        account: function(){
            //  router.push({name: 'Account', params: {
            //      id: 1
            //  }});
            router.push('/their-profil');
        }
    },
}
</script>

<style scoped lang="scss">
@import "../assets/style/searchOfferCard.scss";
</style>