<template>
    <div class="myoffer-container">
        <span><a @click="offer()">{{data.name}} - Company</a></span>
    </div>
</template>

<script>
import router from '../router'
export default {
    name: "SearchOfferCard",
    props: {
        data: Object,
    },
    methods:{
        offer: function(){
             router.push({name: 'offer', params: {
                 items: this.data.id
             }});
        }
    }
}
</script>

<style scoped lang="scss">
@import "../assets/style/searchOfferCard.scss";
</style>