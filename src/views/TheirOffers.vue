<template>
    <div>
        <NavBar />

        <div class="profil-container">
            <AccountProfil :id="id" />
            <div class="line"></div>
            <div class="myoffers-container">
                <div v-for="nominations in nominationsData" v-if="offersData">
                        <div v-for="offers in offersData" v-if="companiesData">
                            <div v-for="companies in companiesData">
                                <div v-if="nominations.ID_Student == usersData.id && nominations.ID_Offer == offers.id && offers.ID_Company == companies.id">
                                     <TheirOfferCard :nomination="nominations" :user="usersData" :offer="offers" :company="companies" />
                                </div>

                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import MyOfferCard from '@/components/MyOfferCard.vue'
import axios from 'axios'
import AccountProfil from '@/components/AccountProfil.vue'
import TheirOfferCard from '@/components/TheirOfferCard.vue'


export default {
    name: 'TheirOffers',
    components: {
        NavBar,
        AccountProfil,
        TheirOfferCard
    },
    data() {
        return {
            id: null,
            nominationsData: null,
            usersData: null,
            offersData: null,
            companiesData: null,
        }
    },
    created() {
        this.id = this.$route.params.id;

    },
    mounted() {
        axios
      .get('http://cesinternships.test:800/api/nominations')
      .then(response => {
      // JSON responses are automatically parsed.
        this.nominationsData = response.data;
      })
      axios
      .get('http://cesinternships.test:800/api/users/' + this.id)
      .then(response => {
      // JSON responses are automatically parsed.
        this.usersData = response.data;
      })
      axios
      .get('http://cesinternships.test:800/api/offers')
      .then(response => {
      // JSON responses are automatically parsed.
        this.offersData = response.data;
      })
      axios
      .get('http://cesinternships.test:800/api/companies')
      .then(response => {
      // JSON responses are automatically parsed.
        this.companiesData = response.data;
      })

    },
}
</script>

<style scoped lang="scss">
    @import '../assets/style/myoffers.scss';
</style>