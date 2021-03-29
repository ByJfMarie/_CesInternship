<template>
  <div class="contener">
      <div class="form">
        <input class="search" type="text" placeholder="Search" v-model="namef">
        <input class="searchbutton" type="button" value="Search" @click="submit">
        <br>
        <br>
        <span>Location</span>
        <br>
        <div>
        <select name="country" v-model="locationCountry">
            <option value="">Choose a Country...</option>
            <option value="France">France</option>
            <option value="Amerique">Amerique</option>
        </select>
        <br>
        <select name="state" id="selectState" v-model="locationState">
            <option value="">Choose a State...</option>
            <option value="Normandie">Normandie</option>
            <option value="Creuse">Creuse</option>
        </select>
        </div>
        <br>
        <span>Skills</span>
        <br>
            <select name="skills" id="skills" class="choose" v-model="skill">
                <option value="">Choose a Skill...</option>
                <option value="Management">Management</option>
                <option value="Developpeur PHP">Developpeur PHP</option>
            </select>
        <br>
        <span>Duration</span>
        <br>
            <select name="Duration" id="duration" class="choose" v-model="duration">
                <option value="">Choose a duration...</option>
                <option value="2 months">2 months</option>
                <option value="6 months">6 months</option>
            </select>
        <br>
        <span>Salary</span>
        <br>
            <select name="Salary" id="salary" class="choose" v-model="salary">
                <option value="">Choose a salary...</option>
                <option value="- 500 euros"> - 500 euros</option>
                <option value="+ 500 euros">+ 500 euros</option>
            </select>
        <br>
        <span>Number of Places</span>
        <br>
            <select name="number" id="number" class="choose" v-model="places">
                <option value="">Choose a number...</option>
                <option value="- 5"> - 5</option>
                <option value="10">10</option>
            </select>
        <br>
        <span>Type of promotion</span>
        <br>
            <select name="promotion" id="promotion" class="choose">
                <option value="">Choose a promotion...</option>
                <option value="CPI A1">CPI A1</option>
                <option value="CPI A2">CPI A2</option>
            </select>
        <br>
        <span>Date</span>
        <br>
            <select name="promotion" id="promotion" class="choose" v-model="date">
                <option value="">Choose a date...</option>
                <option value="23/05/21">23/05/21</option>
                <option value="12/10/22">12/10/22</option>
            </select>
      </div>
  </div>
</template>

<script>
export default {
    name: "SearchOffers",
    data() {

        return {
            namef: '',
            locationCountry: '',
            locationState: '',
            skill: '',
            duration: '',
            salary: '',
            places: '',
            date: '',
        }
    },
    methods: {

        submit: function() {

            var filterList = new Object;
            filterList.name = this.namef;
            filterList.locationCountry = this.locationCountry;
            filterList.locationState = this.locationState;
            filterList.skill = this.skill;
            filterList.duration = this.duration;
            filterList.salary = this.salary;
            filterList.places = this.places;
            filterList.date = this.date;
            this.$emit("inputFilter", filterList);
        }
    }
}
</script>


<style scoped lang="scss">
@import "../assets/style/searchOffers.scss";
</style>