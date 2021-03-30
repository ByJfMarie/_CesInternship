<template>
  <div class="addOfferForm-container">
    <div class="form-group">
        <label for="name">Name</label><br>
        <input type="text" name="name" v-model="namef">
    </div>
    <div class="form-group">
        <label for="duration">Duration</label><br>
        <input type="text" name="duration" v-model="duration">
    </div>
    <div class="form-group">
        <label for="skills">Skills</label><br>
        <input type="text" v-model="newSkill">
        <a href="#" @click="appendSkill" class="addSkill">Add</a>
        <ul>
            <li v-for="skill in skills" @click="deleteSkill(skills.indexOf(skill))">{{ skill }}</li>
        </ul>
    </div>
    <div class="form-group">
        <label for="salary">Salary</label><br>
        <input type="text" name="salary" v-model="salary">
    </div>
    <div class="form-group">
        <label for="date">Date</label><br>
        <input type="text" name="date" v-model="date">
    </div>
    <div class="form-group">
        <label for="places_offer">Number of places</label><br>
        <input type="text" name="places_offer" v-model="places_offer">
    </div>
    <div class="form-group">
        <label for="details">Details</label><br>
        <textarea name="details" v-model="details"></textarea>
    </div><br>
    <a href="#" @click="createForm" class="createBtn">Create Offer</a>
  </div>
</template>

<script>
import axios from "axios";
export default {
    name: 'AddOfferForm',
    data() {
        return {
            namef: '',
            duration: '',
            newSkill: '',
            skills: [],
            salary: 0,
            date: '',
            places_offer: 0,
            details: '',
        }
    },
    methods: {
        appendSkill() {
            this.skills.push(this.newSkill);
            this.newSkill = ''
        },
        deleteSkill(id) {
            var a = this.skills.splice(id, 1)
        },
        async createForm() {
            var newOffer = new Object();
            newOffer.name = this.namef;
            newOffer.duration = this.duration;
            newOffer.competences = [];
            for (let i=0; i<this.skills.length; i++) {
                newOffer.competences[i] = this.skills[i];
            }
            newOffer.salary = this.salary;
            newOffer.date = this.date;
            newOffer.places_offer = this.places_offer;
            newOffer.details = this.details;

            this.namef = '';
            this.duration = '';
            this.newSkill = '';
            this.skills = [];
            this.salary = 0;
            this.date = '';
            this.places_offer = 0;
            this.details = '';
            
            try {
                await axios.post("/api/offers", newOffer);

            } catch (error) {
                this.errors = error.response.data.errors;
            }
            
    
        }
    }
}
</script>

<style scoped lang="scss">
    @import '../assets/style/addOfferForm.scss';
</style>