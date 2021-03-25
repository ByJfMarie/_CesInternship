<template>
  <div class="contener">
      <div class="form">
        <input class="search" type="text" placeholder="Search">
        <input class="searchbutton" type="button" value="Search">
        <br>
        <br>
        <span>Roles</span>
        <br>
            <select name="skills" id="skills" class="choose">
                <option value="">Choose a role...</option>
                <option value="Admin">Admin</option>
                <option value="Student">Student</option>
            </select>
      </div>
  </div>
</template>

<script>
export default {
    name: "SearchAccounts"
}
</script>


<style scoped lang="scss">
@import "../assets/style/searchAccounts.scss";
</style>