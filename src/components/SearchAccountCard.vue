<template>
  <div class="myoffer-container">
        <span><a @click="account()">{{user.first_name}} {{user.last_name}} - {{role.name}}</a></span>
    </div>
</template>

<script>
import router from '../router'
export default {
    name: "SearchAccountCard",
    props: {
        user: Object,
        role: Object
    },
    methods: {
        account: function(){
             router.push({name: 'Account', params: {
                 id: this.user.id
             }});
            // router.push('/account');
        }
    },
}
</script>

<style scoped lang="scss">
@import "../assets/style/searchOfferCard.scss";
</style>