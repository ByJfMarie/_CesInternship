<template>
  <div class="company-container">
      <h1>Create a Company</h1>
      <br>
      <form>
      <span>Name</span>
        <br>
        <input type="text" placeholder="Name">
        <br>
        <span>Sector</span>
        <br>
        <select id="sector">
            <option value="">Choose a Sector...</option>
            <option value="BTP">BTP</option>
            <option value="Administration">Administration</option>
            <option value="IT">IT</option>
            <option value="Digital">Digital</option>
        </select>
        <br>
        <span>Number of Student</span>
        <br>
        <input type="number" placeholder="Number of student">
        <br>
        <span>Tutor Confidence</span>
        <br>
        <input type="number" step="0.5" max="5" placeholder="Note">
        <br>
        <input type="checkbox" placeholder="Number">
        <label>Invisibility</label>
        <br>
        <input type="submit" id="submit" value="Submit">
      </form>
        <br>
  </div>
</template>

<script>
export default {
    name: "Company"
}
</script>

<style scoped lang="scss">
    @import "../assets/style/company.scss";
</style>