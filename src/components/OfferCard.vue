<template>
    <div class="card">
        <div class="card-top">
            <img :src="data.img" alt="">
            <ul class="card-tags">
                <li v-for="tag in data.tags">{{tag}}</li>
            </ul>
        </div> 
        <div class="card-bottom">
            <div class="card-description">
                <h1>Description</h1>
                <p>{{ data.description }}</p>
            </div>
            <input type="button" value="See More">
        </div>
    </div>
</template>

<script>
export default {
    name: 'OfferCard',
    props: {
        data: Object,
    }
}
</script>

<style scoped lang='scss'>
    @import '../assets/style/offerCard.scss';
</style>