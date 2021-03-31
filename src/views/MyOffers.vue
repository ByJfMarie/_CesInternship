<template>
    <div>
        <NavBar />

        <div class="profil-container">
            <Profil />
            <div class="line"></div>
            <div class="myoffers-container">
                <div v-for="nominations in nominationsData" v-if="offersData">
                        <div v-for="offers in offersData" v-if="companiesData">
                            <div v-for="companies in companiesData">
                                <div v-if="nominations.ID_Student == $store.state.user.id && nominations.ID_Offer == offers.id && offers.ID_Company == companies.id">
                                     <MyOfferCard :nomination="nominations" :user="users" :offer="offers" :company="companies" />
                                </div>

                            </div>
                        </div>

                   
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Profil from '@/components/Profil.vue'
import NavBar from '@/components/NavBar.vue'
import MyOfferCard from '@/components/MyOfferCard.vue'
import axios from 'axios'


export default {
    name: 'MyProfil',
    components: {
        NavBar,
        Profil,
        MyOfferCard
    },
    data() {
        return {
            nominationsData: null,
            usersData: null,
            offersData: null,
            companiesData: null,
        }
    },
    mounted() {
        axios
      .get('http://cesinternship.test/api/nominations')
      .then(response => {
      // JSON responses are automatically parsed.
        this.nominationsData = response.data;
      })
      axios
      .get('http://cesinternship.test/api/users/' + this.id)
      .then(response => {
      // JSON responses are automatically parsed.
        this.usersData = response.data;
      })
      axios
      .get('http://cesinternship.test/api/offers')
      .then(response => {
      // JSON responses are automatically parsed.
        this.offersData = response.data;
      })
      axios
      .get('http://cesinternship.test/api/companies')
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