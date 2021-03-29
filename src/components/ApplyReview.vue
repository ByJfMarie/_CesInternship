<template>
  <div class="applyreview-container">
      <div class="statistiques">
      <span>Statistiques</span>
      </div>
      <div class="apply-container">
          <h2>Apply</h2>
          <br>
          <span>Choose a CV to send</span>
          <br>
          <input type="button" value="Import">
          <input type="text">
          <br>
          <span>Add a Motivation Letter</span>
          <br>
          <input type="button" value="Import">
          <input type="text">
          <br>
          <div class="save">
          <input type="checkbox">
          <label for="checkbox">Save in My Offers</label>
          </div>
          <input id="submit" type="button" value="Submit">
      </div>
      <br>
      <div class="review-container">
       <span>Review</span>   
         <div class="read">
           <Review />
           <Review />
           </div>
       </div>
  </div>
</template>

<script>
import Review from "../components/Review.vue"
export default {
    name: "ApplyReview",
    components:{
        Review
    }
}
</script>

<style scoped lang="scss">
  @import "../assets/style/applyReview.scss";
</style>