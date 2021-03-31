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
        <input name="skills" type="text" v-model="newSkill">
        <a @click="appendSkill" class="addSkill">Add</a>
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
    <div v-if="data.id">
        <a @click="modifyOffer" class="createBtn">Modify Offer</a>
    </div>
    <div v-else>
        <a @click="createOffer" class="createBtn">Create Offer</a>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
    name: 'AddOfferForm',
    props: {
        idCompany: null,
        data: Object
    },
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
    created() {
        if(this.data.id) {

            this.getData();
        }
    },
    methods: {
        appendSkill() {
            this.skills.push(this.newSkill);
        },
        deleteSkill(id) {
            var a = this.skills.splice(id, 1)
        },
        getData() {
            this.namef = this.data.name;
            this.duration = this.data.duration;
            this.skills = this.data.competences;
            this.salary = this.data.salary;
            this.date = this.data.date;
            this.places_offer = this.data.places_offer;
            this.details = this.data.details;
        },
        createForm() {
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
            console.log(this.idCompany);
            newOffer.ID_Company = this.idCompany;

            this.namef = '';
            this.duration = '';
            this.newSkill = '';
            this.skills = [];
            this.salary = 0;
            this.date = '';
            this.places_offer = 0;
            this.details = '';

            return newOffer;
        },
        async createOffer() {

            var newOffer = this.createForm();
            console.log(newOffer);
            try {
                await axios.post("/api/offers", newOffer);

            } catch (error) {
                console.log(error);
                this.errors = error.response.data.errors;
            }
        },
        async ModifyOffer() {
            
            var newOffer = this.createForm();
            try {
                await axios.update("/api/offers", newOffer);

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