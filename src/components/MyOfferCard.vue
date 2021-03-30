<template>
  <div class="myoffer-container">
    <span><a href="">Offer's Name - Company</a></span>
    <div class="tags-container">
         <input class="delete" type="button" value="Delete" />
      <div class="container">
  <ul class="progressbar">
    <li class="active">Apply to offer</li>
    <li>Answer of the company</li>
    <li>Validation send</li>
    <li>Validation signed</li>
    <li>Convention send</li>
    <li>Convention signed</li>
  </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyOfferCard",
  methods:{
      
  }
};
</script>

<style scoped lang="scss">
@import "../assets/style/myOfferCard.scss";
</style>