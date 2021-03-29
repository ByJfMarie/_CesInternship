<template>
    <h1>Search Company</h1>
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
        <span>Sector</span>
        <br>
            <select name="skills" id="skills" class="choose" v-model="skill">
                <option value="">Choose a Sector...</option>
                <option value="IT">IT</option>
                <option value="Health">Health</option>
            </select>
        <br>
        <span>Skills</span>
        <br>
            <select name="skills" id="skills" class="choose" v-model="skill">
                <option value="">Choose a Skill...</option>
                <option value="Management">Management</option>
                <option value="Developpeur PHP">Developpeur PHP</option>
            </select>
        <br>
        <span>Number of student</span>
        <br>
            <select name="Duration" id="duration" class="choose" v-model="duration">
                <option value="">Choose a number...</option>
                <option value="- 10">- 10</option>
                <option value="+ 10">+ 10</option>
            </select>
        <br>
        <span>Evaluation</span>
        <br>
            <select name="Salary" id="salary" class="choose" v-model="salary">
                <option value="">Choose a average</option>
                <option value="+2 stars">+2 stars</option>
                <option value="+4 stars">+4 stars</option>
            </select>
        <br>
        <span>Pilot's trust</span>
        <br>
            <select name="number" id="number" class="choose" v-model="places">
                <option value="">Choose a number...</option>
                <option value="+2 stars">+2 stars</option>
                <option value="+4 stars">+4 stars</option>
            </select>
        <br>
      </div>
  </div>
</template>

<script>
export default {
    name: "SearchCompany"
}
</script>

<style scoped lang="scss">
    @import "../assets/style/searchCompany.scss";
</style>