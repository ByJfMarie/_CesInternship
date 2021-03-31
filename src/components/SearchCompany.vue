<template>
  <div class="container">
    <div class="form-group">
        <input class="textInput" type="text" placeholder="Search" v-model="namef">
    </div>
    <div class="form-group">
        <span>Location</span><br>
        <input class="textInput" type="text" placeholder="Search a city" v-model="city">
    </div>
    <div class="form-group">
        <span>Sector</span><br>
        <input class="textInput" type="text" v-model="sector">
    </div>
    <div class="form-group">
        <span>Number of Students</span><br>
        <input class="nbrInput" type="text" maxlength="4" v-model="nbrStudents">
    </div>
    <div class="form-group">
        <span>Minimum Pilot's trust</span><br>
        <input class="rangeInput" type="range" min="0" max="5" step="1" v-model="trust">
        <span class="rangeSpan">{{ trust }}</span>
    </div>
  </div>
</template>

<script>
export default {
    name: "SearchCompany",
    data() {
        return {

            namef: '',
            city: '',
            sector: '',
            nbrStudents: 0,
            trust: 0,

        }
    },
    methods: {

        submit: function() {

            var filterList = new Object;
            filterList.name = this.namef;
            filterList.city = this.city;
            filterList.sector = this.sector;
            filterList.nbrStudents = this.nbrStudents;
            filterList.trust = this.trust;
            this.$emit('inputFilters', filterList);
        }
    },
    watch: {

        namef: function() {
            this.submit();
        },
        city: function() {
            this.submit();
        },
        sector: function() {
            this.submit();
        },
        nbrStudents: function() {
            this.submit();
        },
        trust: function() {
            this.submit();
        }
    }

}
</script>

<style scoped lang="scss">
    @import "../assets/style/searchCompany.scss";
</style>