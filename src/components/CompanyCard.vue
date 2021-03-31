<template>
    <div class="company-container">
        <span><a @click="company">{{ data.Company_Name }}</a></span>
    </div>
</template>

<script>
import router from '../router'
export default {
    name: "CompanyCard",
    methods: {
        company: function(){
             router.push({name: 'CompanyPage', params: {
                 id: this.data.id
             }});
        }
    },
    props: {
        data: Object
    }
}
</script>

<style scoped lang="scss">
    @import "../assets/style/companyCard.scss";
</style>