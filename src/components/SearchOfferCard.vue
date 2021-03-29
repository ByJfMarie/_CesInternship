<template>
    <div class="myoffer-container">
        <span><a @click="offer()">{{data.name}} - {{cdata.Company_Name}} </a></span>
    </div>
</template>

<script>
import router from '../router'
export default {
    name: "SearchOfferCard",
    props: {
        data: Object,
        cdata: Object
    },
    methods:{
        offer: function(){
             router.push({name: 'offer', params: {
                 id: this.data.id
             }});
        }
    },
}
</script>

<style scoped lang="scss">
@import "../assets/style/searchOfferCard.scss";
</style>