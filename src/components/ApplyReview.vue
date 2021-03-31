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
          <br>
          <label for="cv">Select a file...</label>
          <input type="file" id="cv" value="Import">
          <br>
          <span>Add a Motivation Letter</span>
          <br>
          <br>
          <label for="ml">Select a file...</label>
          <input type="file" id="ml" value="Import">
          <br>
          <br>
          <input id="submit" @click="createApply()" type="button" value="Save in my Offers and Apply">
      </div>
      <br>
      <div class="review-container">
       <span>Review</span>   
         <div class="read">
           <Review />
           <Review />
           </div>
       </div>
       <div class="comment-container">
       <textarea placeholder="Comment..." required wrap="hard"></textarea>
       <label for="number">Note</label>
       <input type="number" id="number" min="0" max="5" step="0.5">
       <br>
       <br>
       <input type="button" value="Send">
       </div>
  </div>
</template>

<script>
import Review from "../components/Review.vue"
import axios from 'axios'
export default {
    name: "ApplyReview",
    props:{
      id: null
    },
    data() {
      return {
        errors: null
      }
    },
    components:{
        Review
    },
    methods: {
      async createApply(){
        var newApply = new Object();
        newApply.Step = 1;
        newApply.ID_Student = this.$store.state.user.id;
        newApply.ID_Offer = parseInt(this.id, 10);

        console.log(newApply);


         try {
                 // await axios.get("/sanctum/csrf-cookie");
                 await axios.post("/api/nominations", newApply);

                //  let response = await axios.get("/api/nominations");

                 // this.$store.commit("setAuth", response.data);

                 // console.log(this.$store.state.user);

                this.$router.push("../my-offers");
            } catch (error) {
                this.errors = error.response.data.errors;
                console.log(this.errors);
            }
      }
    },
}
</script>

<style scoped lang="scss">
  @import "../assets/style/applyReview.scss";
</style>