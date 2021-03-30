<template>
  <div class="myoffer-container">
    <span><a >{{offer.name}} - {{company.Company_Name}} </a></span>
    <div class="tags-container">
         <input class="delete" @click="deleteApply()" type="button" value="Delete" />
      <div class="container">
  <ul class="progressbar">
    <li class="active">Apply to offer</li>
    <li v-if="nomination.Step < 2">Answer of the company</li>
    <li v-if="nomination.Step >= 2" class="active">Answer of the company</li>
    <li v-if="nomination.Step < 3">Validation send</li>
    <li v-if="nomination.Step >= 3" class="active">Validation send</li>
    <li v-if="nomination.Step < 4">Validation signed</li>
    <li v-if="nomination.Step >= 4" class="active">Validation signed</li>
    <li v-if="nomination.Step < 5">Convention send</li>
    <li v-if="nomination.Step >= 5" class="active">Convention send</li>
    <li v-if="nomination.Step < 6">Convention signed</li>
    <li v-if="nomination.Step >= 6" class="active">Convention signed</li>
  </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "MyOfferCard",
  props: {
    nomination: Object,
    user: Object,
    offer: Object,
    company: Object
  },
  methods:{
      async deleteApply() {
            try {
              console.log(this.form);
              await axios.get("/sanctum/csrf-cookie");
              await axios.delete("/api/nominations/" + this.nomination.id);

              console.log('Supp');

              this.$router.push("/my-profil");
            } catch (error) {
              this.errors = error.response.data.errors;
            }
        },
  }
};
</script>

<style scoped lang="scss">
@import "../assets/style/myOfferCard.scss";
</style>