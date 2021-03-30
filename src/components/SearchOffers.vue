<template>
  <div class="container">
    <div class="form-group">
        <input class="textInput" type="text" placeholder="Search" v-model="namef">
        <!-- <input class="searchBtn" type="button" value="Search" @click="submit"> -->
    </div>
    <div class="form-group">
        <span>Skills</span><br>
        <input class="textInput" type="text" placeholder="Search a skill" v-model="skill">
    </div>
    <div class="form-group">
        <span>Duration</span><br>
        <input class="durationInput" type="text" maxlength="2" v-model="duration">
        <span class="dateSpan">Months</span>
    </div>
    <div class="form-group">
        <span>Date</span><br>
        <input class="dateInput" id="dateInput" type="month" v-model="date">
    </div>
    <div class="form-group">
        <span>Minimum Salary</span><br>
        <input class="salaryInput" type="range" min="0" max="1500" step="150" v-model="salary">
        <span class="salarySpan">{{ salary }}€</span>
    </div>
  </div>
</template>

<script>
import {onMounted} from 'vue'

export default {
    name: "SearchOffers",
    data() {

        return {
            namef: '',
            // locationCountry: '',
            // locationState: '',
            skill: '',
            duration: '',
            salary: '0',
            // places: '',
            date: '',
        }
    },
    methods: {

        submit(){

            var filterList = new Object;
            filterList.name = this.namef;
            // filterList.locationCountry = this.locationCountry;
            // filterList.locationState = this.locationState;
            filterList.skill = this.skill;
            filterList.duration = this.duration;
            filterList.salary = this.salary;
            // filterList.places = this.places;
            filterList.date = this.date;
            this.$emit("inputFilter", filterList);
        }
    },
    watch: {

        namef: function() {
            this.submit();
        },
        skill: function() {
            this.submit();
        },
        duration: function() {
            this.submit();
        },
        salary: function() {
            this.submit();
        },
        date: function() {
            this.submit();
        },
    },
    setup () {
     onMounted(() => {
       var todayDate = new Date();
            var todayMonth = todayDate.getMonth()+1
            todayMonth = todayMonth.toString();
            if (todayMonth.length == 1) {
                todayMonth = '0'+todayMonth;
            }
        var dateMin = todayDate.getFullYear() + '-' + todayMonth;
        var dateMax = todayDate.getFullYear()+1 + '-12';
        var dateInput = document.getElementById('dateInput');
        dateInput.setAttribute('max', dateMax);
        dateInput.setAttribute('min', dateMin);
     })
   }

}
</script>


<style scoped lang="scss">
    @import "../assets/style/searchOffers.scss";
</style>