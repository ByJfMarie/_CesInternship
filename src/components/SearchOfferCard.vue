<template>
  <div class="myoffer-container">
        <span><a href="">{{data.name}} - Company</a></span>
    </div>
</template>

<script>
export default {
    name: "SearchOfferCard",
    props: {
        data: Object,
    }
}
</script>

<style scoped lang="scss">
@import "../assets/style/searchOfferCard.scss";
</style>