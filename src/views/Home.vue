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
        <p>CesIntership is an application available for all Cesi's Student. Here you can find the perfect intership for your promotion ! Select the best offer from several criterion, 
          apply to them and then save them in your whish-list. You will be able to watch the progression of your apply and will be alert at every step !</p>
      </div>
    </div>
    <hr />
    <h1><a href='/offers'>See all the offers >></a></h1>
    <div class="bottom-banner">
      <div v-for="data in cardData">
        <OfferCard :data="data" />
      </div>
    </div>
  </div>
</template>



<script>
  import NavBar from '@/components/NavBar.vue';
  import OfferCard from '@/components/OfferCard.vue';
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
      "Here is the offer's description Here is the offer's description Here is the offer's description",
    img: "https://assets-jpcust.jwpsrv.com/thumbnails/2yzd2pt3-1920.jpg",
    tags: [
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
    description: "Here is the offer's description",
    img: "https://assets-jpcust.jwpsrv.com/thumbnails/2yzd2pt3-1920.jpg",
    tags: ["Angular", "React"],
  },
  {
    id: 3,
    description: "Here is the offer's description",
    img: "https://assets-jpcust.jwpsrv.com/thumbnails/2yzd2pt3-1920.jpg",
    tags: ["Angular", "React"],
  },
];

export default {
  name: "Home",
  components: {
    Swiper,
    SwiperSlide,
    NavBar,
    OfferCard
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
