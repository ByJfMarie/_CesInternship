<template>
  <div class="home">
    <NavBar />
    <div class="top-banner">
      <div class="caroussel">
        <div class="conatiner-swip">

        <swiper class="mySwap" :autoplay="{delay: 3000}"  navigation :scrollbar="{ draggable: true }" :slides-per-view="1" :space-between="5" @swiper="onSwiper" @slideChange="onSlideChange">
          <swiper-slide><img src="https://uproer.com/wp-content/uploads/2017/06/pixels-to-inches-image.jpg" alt=""></swiper-slide>
          <swiper-slide>Slide 2</swiper-slide>
          <swiper-slide>Slide 3</swiper-slide>
        </swiper>
        </div>
      </div>
      <div class="text-container">
        <p>Ici mettre des renseignements sur le site</p>
      </div>
    </div>
    <hr />
    <h1>Voir toutes les offres >></h1>
    <div class="bottom-banner">
      <div v-for="data in cardData" class="card">
        <div class="card-top">
          <div class="card-img">
            <img :src="data.img" alt="" />
          </div>
          <div class="card-competence">
            <ul class="list-container">
              <li v-for="competence in data.competences" class="list">
                {{ competence }}
              </li>
            </ul>
          </div>
        </div>
        <div class="card-bottom">
          <div class="card-description">
            <h3>Description du poste</h3>
            <p>{{ data.description }}</p>
          </div>
          <div class="card-button">
            <button>Voir plus</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
  import NavBar from '@/components/NavBar.vue'
// @ is an alias to /src

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import SwiperCore, { Scrollbar, Navigation, EffectFade, Autoplay} from 'swiper';

  // Import Swiper styles
  import 'swiper/swiper.scss';
  import 'swiper/components/navigation/navigation.scss';
  import 'swiper/components/scrollbar/scrollbar.scss';
  import 'swiper/components/effect-fade/effect-fade.scss';

  SwiperCore.use([Scrollbar, Navigation, EffectFade, Autoplay]);

const cardData = [
  {
    id: 1,
    description:
      "Ici y'a la description de l'offre Ici y'a la description de l'offre Ici y'a la description de l'offre",
    img: "https://assets-jpcust.jwpsrv.com/thumbnails/2yzd2pt3-1920.jpg",
    competences: [
      "Angular",
      "React",
      "React",
      "VueJS",
      "UX/UI",
      "React",
      "React",
    ],
  },
  {
    id: 2,
    description: "Ici y'a la description de l'offre",
    img: "https://assets-jpcust.jwpsrv.com/thumbnails/2yzd2pt3-1920.jpg",
    competences: ["Angular", "React"],
  },
  {
    id: 3,
    description: "Ici y'a la description de l'offre",
    img: "https://assets-jpcust.jwpsrv.com/thumbnails/2yzd2pt3-1920.jpg",
    competences: ["Angular", "React"],
  },
];

export default {
  name: "Home",
  components: {
    Swiper,
    SwiperSlide,
    NavBar
  },
  data() {
    return {
      cardData,
    };
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log('slide change');
    },
  },
};
</script>

<style scoped lang="scss">
  @import "../assets/style/home.scss";
</style>
